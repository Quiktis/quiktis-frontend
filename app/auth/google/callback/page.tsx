"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import useAxios from "@/app/hooks/useAxios";
import { useUser } from "@/app/context/UserContext"; // Import User Context

const GoogleCallbackPage = () => {
  const { sendRequest, loading } = useAxios();
  const searchParams = useSearchParams();
  const router = useRouter();
  const { setUser, setGoogleUser } = useUser(); // Access global state
  const code = searchParams.get("code");

  const [dots, setDots] = useState(".");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Animate the ellipsis
    const interval = setInterval(() => {
      setDots((prev) => (prev === "." ? ".." : prev === ".." ? "..." : "."));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleGoogleCallback = async () => {
      if (!code || loading) return;

      console.log("Google Auth Code:", code);

      try {
        // Step 1: Get authentication token
        const authResponse = await sendRequest({
          url: `/api/auth/google/callback`,
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: { code },
        });

        console.log(authResponse);

        if (!authResponse?.token) {
          console.log(authResponse)
          console.log("Failed to retrieve authentication token. Error: " + authResponse);
        }

        // Store the token globally
        setGoogleUser({ token: authResponse.token });

        console.log("Auth Response:", authResponse);

        // Step 2: Verify email
        const verifyResponse = await sendRequest({
          url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/verify-email`,
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: { token: authResponse.token },
        });

        if (!verifyResponse?.user) {
          throw new Error("Failed to verify email.");
        }

        console.log("Verify Response:", verifyResponse);

        // Step 3: Save verified user details in global context
        setUser({
          userId: verifyResponse.user.id,
          name: verifyResponse.user.name,
          email: verifyResponse.user.email,
        });

        // Redirect to the next page after authentication
        router.push("/create-events");

      } catch (error) {
        console.error("Authentication Error:", error);
        setError("Registration failed. Please try again.");
      }
    };

    handleGoogleCallback();
  }, [code]); // Ensures useEffect runs only once when `code` changes

  return (
    <section className="min-h-[20em] h-[60vh] grid place-items-center">
      <div className="flex flex-col gap-3 justify-center min-w-[15em] text-center px-8 py-6 bg-[#7a7a7a1c] border border-gray-600 rounded-md shadow-md">
        <h1>Authenticating. Please wait{dots}</h1>
        {/*error && <p className="text-red-500">{error}</p>*/}
      </div>
    </section>
  );
};

export default function Page() {
  return (
    <Suspense fallback={<div></div>}>
      <GoogleCallbackPage />
    </Suspense>
  );
}
