import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import type { NextRequest } from "next/server";
import { parse } from "cookie";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
const cookie = request.headers.get("cookie") || "";
  const { session } = parse(cookie);

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const id = (await params).id;

  if (!/^\d+$/.test(id)) {
    return NextResponse.json({ error: "Invalid ang id" }, { status: 400 });
  }

  const filePath = path.join(
    process.cwd(),
    "public",
    "gurbani",
    `ang-${id}.txt`
  );

  try {
    const data = fs.readFileSync(filePath, "utf8");

    return NextResponse.json(data, {
      status: 200,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    });
  } catch (error) {
    return NextResponse.json({ error: "Ang not found" }, { status: 404 });
  }
}
