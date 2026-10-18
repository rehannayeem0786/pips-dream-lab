import { NextRequest, NextResponse } from "next/server";
import { getEntries, addEntry, type GuestbookEntry } from "@/lib/store";

export async function GET() {
  const entries = await getEntries();
  return NextResponse.json(entries);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, message, emoji } = body;

    if (!name || typeof name !== "string" || !message || typeof message !== "string") {
      return NextResponse.json({ error: "Name and message are required" }, { status: 400 });
    }
    if (name.length > 50 || message.length > 500) {
      return NextResponse.json(
        { error: "Name too long (max 50) or message too long (max 500)" },
        { status: 400 }
      );
    }

    const entry: GuestbookEntry = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 8),
      name: name.trim().slice(0, 50),
      message: message.trim().slice(0, 500),
      emoji: typeof emoji === "string" && emoji ? emoji.slice(0, 8) : "\uD83D\uDC76",
      timestamp: new Date().toISOString(),
    };

    const persisted = await addEntry(entry);
    return NextResponse.json({ ...entry, persisted }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }
}