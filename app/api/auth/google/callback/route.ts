import { NextResponse } from "next/server";

interface ResponseObject {
  message: string;
  user: { id: string };
  token: string;
  url: string;
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

    const response = await fetch(`${process.env.BASE_URL}/auth/google/callback`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code }),
    });


    //console.log("Response: ", response)


    const data: ResponseObject = await response.json();
    console.log("Response Body: ", data)

    if (!data.token) {
      return NextResponse.json({ error: "Invalid token received" }, { status: 401 });
    }

    
    

    // **Correct way to set a cookie in Next.js**
    const nextResponse = NextResponse.json({ ok: true, token: data.token });
    nextResponse.headers.set(
      "Set-Cookie",
      `quiktis_token=${data.token}; HttpOnly; Secure; Path=/; SameSite=Strict`
    );

    console.log("Authentication Successful:", data);
    if (data) {
      return NextResponse.json({ ok: true, token: data.token });
    }


    return nextResponse;

  } catch (error) {
    console.error("Error processing authentication:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
