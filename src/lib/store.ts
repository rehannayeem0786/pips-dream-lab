import fs from "fs";
import path from "path";

export interface GuestbookEntry {
  id: string;
  name: string;
  message: string;
  emoji: string;
  timestamp: string;
}

const DATA_DIR = path.join(process.cwd(), "data");
const GB_FILE = path.join(DATA_DIR, "guestbook.json");
const VIS_FILE = path.join(DATA_DIR, "visitors.json");

// Optional tier-2 shared backend: set these two env vars (e.g. Upstash Redis REST)
// and the guestbook/counter persist across all visitors on any host.
const UP_URL = process.env.UPSTASH_REDIS_REST_URL;
const UP_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;
const GB_KEY = "pip:guestbook";
const VIS_KEY = "pip:visitors";

async function upCmd(...args: (string | number)[]): Promise<string | null> {
  if (!UP_URL || !UP_TOKEN) return null;
  const res = await fetch(UP_URL, {
    method: "POST",
    headers: { Authorization: `Bearer ${UP_TOKEN}`, "Content-Type": "application/json" },
    body: JSON.stringify(args),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`upstash ${res.status}`);
  const data = (await res.json()) as { result: string | null };
  return data.result;
}

function readJson<T>(file: string, fallback: T): T {
  try {
    if (!fs.existsSync(file)) return fallback;
    const raw = fs.readFileSync(file, "utf-8").replace(/^\uFEFF/, "");
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function writeJson(file: string, data: unknown) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

export async function getEntries(): Promise<GuestbookEntry[]> {
  if (UP_URL && UP_TOKEN) {
    try {
      const raw = await upCmd("GET", GB_KEY);
      if (raw) return JSON.parse(raw) as GuestbookEntry[];
    } catch {
      /* fall through to file store */
    }
  }
  return readJson<GuestbookEntry[]>(GB_FILE, []);
}

/** Returns true when the entry was persisted to a shared store. */
export async function addEntry(entry: GuestbookEntry): Promise<boolean> {
  try {
    if (UP_URL && UP_TOKEN) {
      const list = await getEntries();
      list.unshift(entry);
      await upCmd("SET", GB_KEY, JSON.stringify(list.slice(0, 200)));
      return true;
    }
    const list = readJson<GuestbookEntry[]>(GB_FILE, []);
    list.unshift(entry);
    writeJson(GB_FILE, list.slice(0, 200));
    return true;
  } catch {
    // Read-only filesystem (e.g. Vercel without Upstash): caller falls back to client storage.
    return false;
  }
}

/** Increments and returns the visitor count, degrading gracefully when not writable. */
export async function bumpCount(): Promise<number> {
  const local = readJson<{ count: number }>(VIS_FILE, { count: 0 }).count || 0;
  try {
    if (UP_URL && UP_TOKEN) {
      const raw = await upCmd("GET", VIS_KEY);
      const next = (parseInt(raw || "0", 10) || 0) + 1;
      await upCmd("SET", VIS_KEY, String(next));
      return next;
    }
    const next = local + 1;
    writeJson(VIS_FILE, { count: next });
    return next;
  } catch {
    return local + 1;
  }
}