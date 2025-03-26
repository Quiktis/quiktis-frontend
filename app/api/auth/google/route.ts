import { NextResponse } from "next/server";

interface ResponseObject {
  url: string;
}


export async function GET(request: Request): Promise<Response> {
    console.log("response received by Nextjs Server");
  if (request.method !== "GET") {
    return new Response(JSON.stringify({OK: false, error: "Method Not Allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    
    console.log(process.env.BASE_URL);

    const response  = await fetch(`${process.env.BASE_URL}/auth/google/initiate`, {
      method: "GET"
    });


    const data: ResponseObject = await response.json();

    if (!data.url) {
        return NextResponse.json({ok: false, error: "Google Auth failed" }, { status: 500 });
      }

      console.log(data);
      return NextResponse.json({ url: data.url });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error initiating Google Auth" }, { status: 500 });
  }
}
