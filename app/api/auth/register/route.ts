import { NextResponse } from "next/server";

interface ResponseObject {
  message?: string;
  user?: { id: string };
  token?: string;
}

export async function POST(request: Request): Promise<Response> {
  console.log("Response received by Next.js Server");

  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method Not Allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const body: { email?: string; password?: string; name?: string } = await request.json();
    const { email, password, name } = body;

    if (!email || !password || !name) {
      return new Response(JSON.stringify({ok: false, error: "Email, Password, or Name is missing" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    console.log(process.env.BASE_URL);

    // Register user
    const registerResponse = await fetch(`${process.env.BASE_URL}/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, name, role: "organizer", location: "nil"}),
    });

    const registerData: ResponseObject = await registerResponse.json();

    if (!registerData.user) {
      return new Response(JSON.stringify({ok: false, data: registerData}), { status: 400 });
    }

    // Login user after successful registration
    const loginResponse = await fetch(`${process.env.BASE_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const loginData: ResponseObject = await loginResponse.json();

    if (loginData.user && loginData.token) {
      const response = NextResponse.json({ 
        ok: true, 
        message: loginData.message, 
        user: loginData.user 
      });

      // ✅ Set the cookie using the correct user ID from loginData
      response.headers.set(
        "Set-Cookie",
        `quiktis_token=${loginData.token}; HttpOnly; Secure; Path=/; SameSite=Strict`
      );

      console.log(response)
      return response;
    }

    console.log({ok: false, error: "Login failed", details: loginData })
    return new Response(
      JSON.stringify({ok: false, error: "Login failed", details: loginData }),
      { status: 401, headers: { "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({
        ok: false,
        msg: "An error occurred, please try again later",
        error: "Internal Server Error",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
