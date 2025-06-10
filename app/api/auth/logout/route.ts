import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST() {
  console.log("Logout request received...");

  const cookieStore = cookies();
  const token = cookieStore.get("quiktis_token")?.value;

  if (!token) {
    console.log("No token found.");
    return NextResponse.json(
      {
        success: false,
        message: "No token found to clear.",
      },
      { status: 200 }
    );
  }

  // Clear the token by setting it to empty and expiring it
  console.log("Clearing token...");
  cookieStore.set({
    name: "quiktis_token",
    value: "",
    path: "/",
    expires: new Date(0),
    httpOnly: true,
    secure: true,
    sameSite: "lax",
  });

  console.log("Token cleared.");
  return NextResponse.json(
    {
      status: "success",
      message: "Logged out successfully. Token cleared.",
    },
    { status: 200 }
  );
}
