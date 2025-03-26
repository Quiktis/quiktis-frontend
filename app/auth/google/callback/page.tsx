"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState, Suspense } from "react";


const GoogleCallbackPage = () => {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");

  const router = useRouter();
  const [dots, setDots] = useState(".");

  useEffect(() => {
    // Animate the ellipsis
    const interval = setInterval(() => {
      setDots((prev) => (prev === "." ? ".." : prev === ".." ? "..." : "."));
    }, 500);

    return () => clearInterval(interval); // Cleanup function
  }, []);

  useEffect(() => {

    const handleGoogleCallback = async (code: any) => {
        if (!code) return;

    console.log("Google Auth Code:", code);
      try {
        const res = await fetch("/api/auth/google/callback", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ code: code }),
        });

        const data = await res.json();
        if (data.token) {
          console.log("response body: ", data);
          router.push("/create-events");
          // localStorage.setItem("authToken", data.token);
          // router.push("/dashboard");
        } else {
          console.error("Authentication failed:", data);
        }
      } catch (error) {
        console.error("Error processing Google auth:", error);
      }
    };

    handleGoogleCallback(code);
  }, [code]);

  return (
    <section className="min-h-[20em] h-[60vh] grid place-items-center">
      <div className="flex flex-col gap-3 justify-center min-w-[15em] text-center px-8 py-6 bg-[#7a7a7a1c] border border-gray-600 rounded-md shadow-md">
        <h1>Authenticating. Please wait{dots}</h1>
        {/*code ? <p>Processing code: {code}</p> : <p>No code provided</p>*/}
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

