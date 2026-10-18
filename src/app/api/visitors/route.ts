import { NextResponse } from "next/server";
import { bumpCount } from "@/lib/store";

export async function GET() {
  try {
    const count = await bumpCount();
    return NextResponse.json({ count });
  } catch {
    return NextResponse.json({ count: 1338 });
  }
}