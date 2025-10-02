import { NextResponse } from "next/server";

interface ResponseObject {
  status: string;
  message: string;
  data: {
    token: string;
  };
}

interface VerifyResponse {
  message: string;
  user: {
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

interface UserResponseObject {
  status: string;
  message: string;
  data: {
    id: string;
    createdAt?: string;
    email?: string;
    name?: string;
    age?: number;
    role?: string;
    picture?: string;
    emailVerified?: boolean;
    location?: string;
    socialLinks?: any[];
    provider?: string;
    lastLogin?: string;
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

    // Step 1: Get token from external callback
    const callbackResponse = await fetch(`${process.env.BASE_URL}/auth/google/callback`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code }),
    });

    const data: ResponseObject = await callbackResponse.json();
    console.log("External server response:", data);

    if (!data?.data?.token) {
      return NextResponse.json({ error: "Invalid token received" }, { status: 401 });
    }

    const token = data.data.token;

    // Step 2: Verify email
    const verifyResponse = await fetch("https://api-quiktis.onrender.com/auth/verify-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    });

    if (!verifyResponse.ok) {
      return NextResponse.json(
        { error: "Failed to verify email" },
        { status: verifyResponse.status }
      );
    }

    const verifyData: VerifyResponse = await verifyResponse.json();
    console.log("Email verification response:", verifyData);

    // Step 3: Get user details
    const userDetailsResponse = await fetch(`${process.env.BASE_URL}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const userResponse: UserResponseObject = await userDetailsResponse.json();

    // Step 4: Build response
    const response = NextResponse.json({
      ok: true,
      message: userResponse.message,
      status: userResponse.status,
      data: userResponse.data,
      token: token
    });

    // Step 5: Set cookie only if successful
    if (userResponse.status === "success") {
      response.headers.set(
        "Set-Cookie",
        `quiktis_token=${token}; HttpOnly; Secure; Path=/; SameSite=Strict; Max-Age=604800`
      );
    }

    console.log(userResponse)

    return response;

  } catch (error) {
    console.error("Error processing authentication:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
