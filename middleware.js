import { NextResponse } from "next/server";

export default function middleware(req) {
  const token = req.cookies.get("quiktis_token")?.value; // ✅ Properly get cookie value

  if (!token) {
    return NextResponse.redirect(new URL("/register", req.url)); // Redirect if no token
  }

  return NextResponse.next(); // Continue if token is present
}

// Apply middleware only to protected routes
export const config = {
  matcher: ["/my-tickets"], // Protect nested routes too
};
