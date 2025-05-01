import { NextResponse } from "next/server";

export async function POST(): Promise<NextResponse> {
    console.log("logging out...")
  // Clear the cookie by setting Max-Age=0
  const response = NextResponse.json({
    message: "Logged out successfully",
    status: "success",
  });

  response.headers.set(
    "Set-Cookie",
    "quiktis_token=deleted; HttpOnly; Secure; Path=/; SameSite=Strict; Max-Age=0"
  );

  return response;
}
