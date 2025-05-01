"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import useAxios from "@/app/hooks/useAxios";
import { useUser } from "@/app/context/UserContext"; // Import User Context

const GoogleCallbackPage = () => {
  const { setUser, setGoogleUser } = useUser(); // Access global state
  const { loading, sendRequest } = useAxios();
  const searchParams = useSearchParams();
  const router = useRouter();
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

        if (authResponse?.message === "error") {
          console.log(authResponse);
          console.log("Failed to retrieve authentication token. Error: " + authResponse);
          router.push("/register");
        }

        // Store the token globally
        setGoogleUser({ token: authResponse.token });

        console.log("Auth Response:", authResponse);

        // Step 2: Save verified user details in global context
        const user = {
          userId: authResponse.data.id,
          name: authResponse.data.name,
          email: authResponse.data.email,
          token: authResponse.token,
        };

        // Save user data directly to localStorage
        localStorage.setItem("quiktis_user", JSON.stringify(user));

        // Update global state with user data
        setUser(user);

        // Redirect to the next page after authentication
        router.push("/dashboard");
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
