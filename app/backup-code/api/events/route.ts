// app/api/events/route.ts
import { NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    // ✅ Get token from cookie
    const token = cookies().get("quiktis_token")?.value

    const res = await fetch(`${process.env.BACKEND_URL}/events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: JSON.stringify(body),
    })

    let data: any
    try {
      data = await res.json()
    } catch (parseErr) {
      console.error("❌ Failed to parse backend JSON:", parseErr)
      return NextResponse.json(
        { status: "error", message: "Invalid JSON from backend" },
        { status: 500 }
      )
    }

    if (!res.ok) {
      // 🔥 Log the exact backend error response
      console.error("❌ Backend returned error:", {
        status: res.status,
        statusText: res.statusText,
        body: data,
      })
      return NextResponse.json(data, { status: res.status })
    }

    return NextResponse.json(data, { status: res.status })
  } catch (error) {
    console.error("❌ Error proxying event creation:", error)
    return NextResponse.json(
      { status: "error", message: "Failed to create event (proxy error)" },
      { status: 500 }
    )
  }
}
