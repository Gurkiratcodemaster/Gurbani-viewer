import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import type { NextRequest } from "next/server";
import { parse } from "cookie";

// Cache the JSON data to avoid reading file on every request
let cachedData: any[] | null = null;

function loadAngData() {
  if (!cachedData) {
    const jsonPath = path.join(process.cwd(), "public", "gurbani", "ang.json");
    const jsonContent = fs.readFileSync(jsonPath, "utf8");
    cachedData = JSON.parse(jsonContent);
  }
  return cachedData;
}

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

  try {
    const angData = loadAngData();
    const pageId = parseInt(id, 10);
    const pageData = angData.find(page => page.pageId === pageId);

    if (!pageData) {
      return NextResponse.json({ error: "Ang not found" }, { status: 404 });
    }

    return NextResponse.json(pageData, {
      status: 200,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    });
  } catch (error) {
    return NextResponse.json({ error: "Error loading ang data" }, { status: 500 });
  }
}
