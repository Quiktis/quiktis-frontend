import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(req: NextRequest) {
  const token = req.cookies.get("quiktis_token")?.value;
  const pathname = req.nextUrl.pathname;

  // Redirect unauthenticated users from protected routes
  if (!token && isProtectedRoute(pathname)) {
    return NextResponse.redirect(new URL("/register", req.url));
  }

  // Redirect authenticated users away from auth routes
  if (token && isAuthRoute(pathname)) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}

function isProtectedRoute(pathname: string): boolean {
  return ["/my-tickets", "/dashboard", "/create-events", "/notificatons", "/my-events"].includes(pathname);
}

function isAuthRoute(pathname: string): boolean {
  return ["/signin", "/register"].includes(pathname);
}

export const config = {
  matcher: [
    "/my-tickets",
    "/dashboard",
    "/create-events",
    "/notificatons",
    "/signin",
    "/register",
  ],
};
