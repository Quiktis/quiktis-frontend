import { cookies } from 'next/headers';

export async function GET() {
  const token = cookies().get("quiktis_token")?.value;

  if (!token) {
    return new Response(
      JSON.stringify({
        success: false,
        message: "No token found to clear.",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  // Clear the cookie by setting it with an expired date
  cookies().set({
    name: "quiktis_token",
    value: "",
    path: "/",
    expires: new Date(0), // Expire it immediately
    httpOnly: true,
    secure: true,
    sameSite: "lax",
  });

  return new Response(
    JSON.stringify({
      success: true,
      message: "Token cleared successfully.",
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}
