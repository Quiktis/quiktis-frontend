import { cookies } from 'next/headers';

export async function GET() {
    const token = cookies().get("quiktis_token")?.value;

  if (!token) {
    //return res.status(401).json({ authenticated: false, message: 'No token found' });
    return new Response(
        JSON.stringify({
          tokenFound: false,
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
      tokenFound: true,
      message: "token found",
      token: token,
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}
