import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "visitors.json");

interface VisitorData {
  count: number;
}

function readVisitors(): VisitorData {
  try {
    if (!fs.existsSync(DATA_FILE)) {
      fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
      fs.writeFileSync(DATA_FILE, JSON.stringify({ count: 0 }));
      return { count: 0 };
    }
    const raw = fs.readFileSync(DATA_FILE, "utf-8");
    return JSON.parse(raw);
  } catch {
    return { count: 0 };
  }
}

function writeVisitors(data: VisitorData) {
  fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
  fs.writeFileSync(DATA_FILE, JSON.stringify(data));
}

export async function GET() {
  const data = readVisitors();
  data.count += 1;
  writeVisitors(data);
  return NextResponse.json({ count: data.count });
}