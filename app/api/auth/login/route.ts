import { NextResponse } from "next/server";

interface ResponseObject {
  message?: string;
  status?: string;
  data: { 
    
 
      user: { 
        id: string; 
        email: string 
        name: string; 
        role: string;
      },
      token: string,

  };
}


export async function POST(request: Request): Promise<Response> {
    console.log("response received by Nextjs Server");
  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method Not Allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const body: { email?: string; password?: string;  } = await request.json();
    const { email, password } = body;

    if (!email || !password ) {
      return new Response(JSON.stringify({ error: "Email, Password, or Name is missing" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    console.log(process.env.BASE_URL);

    const backendResponse = await fetch(`${process.env.BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${process.env.SECRET_KEY}`,
      },
      body: JSON.stringify({ email, password }),
    });

    const data: ResponseObject = await backendResponse.json();
    console.log("response from backend: ", data);

    if (data.status === "error") {
      return NextResponse.json({message: "Check your email and password or Sign In with Google", status: data.status});
    }

    

    // ✅ Set the refresh token as an HTTP-only cookie using response headers
    
    const response = NextResponse.json(data);
    if(data.data.token) { response.headers.set(
      "Set-Cookie",
      `quiktis_token=${data.data.token}; HttpOnly; Secure; Path=/; SameSite=Strict`
    ); }

    console.log(response)

    return response;
  } catch (error) {
    console.error(error);
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
