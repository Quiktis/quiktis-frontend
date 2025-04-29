import { NextResponse } from "next/server";

interface ResponseObject {
  status: string;
  message: string;
  data: Record<string, any>;
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

export async function POST(request: Request): Promise<Response> {
  console.log("Verification request received");

  try {
    const body: { token?: string } = await request.json();
    const { token } = body;

    if (!token) {
      return new Response(JSON.stringify({ error: "Token is missing" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Step 1: Verify token with auth service
    const backendResponse = await fetch(`${process.env.BASE_URL}/auth/verify-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    });

    const responseBody: ResponseObject = await backendResponse.json();
    console.log("Auth verify response:", responseBody);

    // Step 2: Fetch user details
    const userDetails = await fetch(`${process.env.BASE_URL}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const userResponse: UserResponseObject = await userDetails.json();

    // Step 3: Construct response
    const response = NextResponse.json({
      ok: true,
      message: userResponse.message,
      status: responseBody.status,
      data: userResponse.data,
    });

    // Step 4: Set cookie only on success
    if (userResponse.status === "success") {
      response.headers.set(
        "Set-Cookie",
        `quiktis_token=${token}; HttpOnly; Secure; Path=/; SameSite=Strict`
      );
    }

    return response;
  } catch (error) {
    console.error("Error verifying account:", error);
    return new Response(
      JSON.stringify({
        ok: false,
        msg: "An error occurred, please try again later",
        error: "Internal Server Error",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
