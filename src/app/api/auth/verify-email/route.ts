import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Forward request to backend
    const res = await fetch(`${process.env.BACKEND_URL}/auth/verify-email`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    console.error("Verify email proxy error:", error);
    return NextResponse.json(
      { status: "error", message: "Something went wrong while verifying email" },
      { status: 500 }
    );
  }
}
