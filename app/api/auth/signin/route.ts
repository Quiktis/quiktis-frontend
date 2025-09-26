import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Forward request to backend
    const res = await fetch(`${process.env.BACKEND_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json(data, { status: res.status });
    }

    const token = data?.data?.token;
    const user = data?.data?.user;

    const response = NextResponse.json(data, { status: 200 });

    // Save token
    if (token) {
      response.cookies.set("auth_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        maxAge: 60 * 60 * 24 * 7, // 7 days
      });
    }

    // Save user info (not httpOnly so client can read it)
    if (user) {
      response.cookies.set("auth_user", JSON.stringify(user), {
        httpOnly: false, // client JS can read
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        maxAge: 60 * 60 * 24 * 7, // 7 days
      });
    }

    return response;
  } catch (error) {
    console.error("Signin proxy error:", error);
    return NextResponse.json(
      { status: "error", message: "Something went wrong while signing in. Try again" },
      { status: 500 }
    );
  }
}
