// /api/auth/logout/route.ts
import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ status: "success", message: "Logged out" });

  // ✅ Expire the cookie
  response.cookies.set("quiktis_token", "", { maxAge: 0, path: "/" });

  return response;
}
