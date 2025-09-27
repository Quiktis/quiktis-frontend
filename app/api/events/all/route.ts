// app/api/events/all/route.ts
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  try {
    const token = cookies().get("quiktis_token")?.value;

    const res = await fetch(`${process.env.BACKEND_URL}/events`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      cache: "no-store", // 🚫 don't cache
    });

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    console.error("❌ Error fetching events:", error);
    return NextResponse.json(
      { status: "error", message: "Failed to fetch events" },
      { status: 500 }
    );
  }
}
