import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/create-event", "/dashboard", "/event"];
const authRoutes = ["/register", "/login", "/signin"];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Get token from cookies
  const token = req.cookies.get("quiktis_token")?.value;

  // 1️⃣ If route is protected and no token → redirect to signin
  if (protectedRoutes.some((route) => pathname.startsWith(route))) {
    if (!token) {
      const url = req.nextUrl.clone();
      url.pathname = "/register";
      url.searchParams.set("mode", "signin");
      return NextResponse.redirect(url);
    }
  }

  // 2️⃣ If user is logged in and visiting auth routes → redirect to dashboard
  if (authRoutes.some((route) => pathname.startsWith(route))) {
    if (token) {
      const url = req.nextUrl.clone();
      url.pathname = "/event"; // or wherever you want logged-in users to land
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/event/:path*",        // ✅ Protect all /event routes
    "/create-event",
    "/dashboard",
    "/register",
    "/login",
    "/signin",
    "/profile/:path*",
  ],
};
