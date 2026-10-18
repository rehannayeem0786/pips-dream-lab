import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "guestbook.json");

interface GuestbookEntry {
  id: string;
  name: string;
  message: string;
  emoji: string;
  timestamp: string;
}

function readEntries(): GuestbookEntry[] {
  try {
    if (!fs.existsSync(DATA_FILE)) {
      fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
      fs.writeFileSync(DATA_FILE, "[]");
      return [];
    }
    const raw = fs.readFileSync(DATA_FILE, "utf-8");
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function writeEntries(entries: GuestbookEntry[]) {
  fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
  fs.writeFileSync(DATA_FILE, JSON.stringify(entries, null, 2));
}

export async function GET() {
  const entries = readEntries();
  return NextResponse.json(entries);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, message, emoji } = body;

    if (!name || !message) {
      return NextResponse.json(
        { error: "Name and message are required" },
        { status: 400 }
      );
    }

    if (name.length > 50 || message.length > 500) {
      return NextResponse.json(
        { error: "Name too long (max 50) or message too long (max 500)" },
        { status: 400 }
      );
    }

    const entry: GuestbookEntry = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 8),
      name: name.trim(),
      message: message.trim(),
      emoji: emoji || "👶",
      timestamp: new Date().toISOString(),
    };

    const entries = readEntries();
    entries.unshift(entry);
    // Keep last 200 entries
    const trimmed = entries.slice(0, 200);
    writeEntries(trimmed);

    return NextResponse.json(entry, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}