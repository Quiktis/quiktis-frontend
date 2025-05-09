import { cookies } from 'next/headers';

export async function GET() {
    const token = cookies().get("quiktis_token")?.value;

  if (!token) {
    //return res.status(401).json({ authenticated: false, message: 'No token found' });
    return new Response(
        JSON.stringify({
          authenticated: false,
          message: "No token found",
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }
      );
  }

  return new Response(
    JSON.stringify({
      authenticated: true,
      message: "token found",
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}
