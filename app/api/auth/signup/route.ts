import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/signup`,
      body,
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );

    return NextResponse.json(response.data, { status: response.status });
  } catch (error: any) {
    console.error("Proxy signup error:", error.response?.data || error.message);
    return NextResponse.json(
      { status: "error", message: error.response?.data?.message || "Signup failed" },
      { status: error.response?.status || 500 }
    );
  }
}
