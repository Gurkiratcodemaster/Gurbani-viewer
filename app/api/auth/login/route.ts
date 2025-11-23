import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { serialize } from "cookie";

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  // Change this: use strong credentials in real app
  if (username === "admin" && password === "password123") {
    const token = "secure-session-token";

    const response = NextResponse.json({ success: true });
    response.headers.set(
      "Set-Cookie",
      serialize("session", token, {
        httpOnly: true,
        path: "/",
        maxAge: 60 * 60 * 6, 
        sameSite: "lax"
      })
    );

    return response;
  }

  return NextResponse.json(
    { error: "Invalid username or password" },
    { status: 401 }
  );
}
