import { NextResponse } from "next/server";

interface ResponseObject {
  message: string;
  user: { id: string };
  token: string;
  url: string;
}

interface VerifyResponse {
  message: string;
  user: {
    _id: string;
    email: string;
    name: string;
    role: string;
    status: string;
    email_verified: boolean;
    provider: string;
    createdAt: string;
    updatedAt: string;
    id: string;
  };
}

export async function POST(request: Request): Promise<NextResponse> {
  console.log("Response received by Next.js Server");

  try {
    const body: { code?: string } = await request.json();
    const { code } = body;

    if (!code) {
      return NextResponse.json({ error: "No code provided" }, { status: 400 });
    }

    if (!process.env.BASE_URL) {
      return NextResponse.json({ error: "Missing BASE_URL" }, { status: 500 });
    }

    console.log("BASE_URL:", process.env.BASE_URL);

    // First request to get token
    const response = await fetch(`${process.env.BASE_URL}/auth/google/callback`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code }),
    });

    const data: ResponseObject = await response.json();
    console.log("Response Body: ", data);

    if (!data.token) {
      return NextResponse.json({ error: "Invalid token received" }, { status: 401 });
    }

    // ✅ Store the token in a cookie
    const nextResponse = new NextResponse(
      JSON.stringify({ message: "Token stored, verifying email...", token:data.token}),
      { status: 200 }
    );

    nextResponse.headers.append(
      "Set-Cookie",
      `quiktis_token=${data.token}; HttpOnly; Secure; Path=/; SameSite=Lax; Max-Age=604800`
    );

    // ✅ Second request to verify email
    const verifyResponse = await fetch("https://api2-quiktis.onrender.com/auth/verify-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: data.token }),
    });

    if (!verifyResponse.ok) {
      return NextResponse.json(
        { error: "Failed to verify email" },
        { status: verifyResponse.status }
      );
    }

    const verifyData: VerifyResponse = await verifyResponse.json();
    console.log("Email verification response:", verifyData);

    // ✅ Return verification response to the frontend
    return NextResponse.json({
      message: verifyData.message,
      user: verifyData.user,
      token: data.token
    });

  } catch (error) {
    console.error("Error processing authentication:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
