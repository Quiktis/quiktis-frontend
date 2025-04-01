"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import useAxios from "@/app/hooks/useAxios";

const GoogleCallbackPage = () => {
  const { sendRequest, loading } = useAxios();
  const searchParams = useSearchParams();
  const router = useRouter();
  const code = searchParams.get("code");

  //const [loading, setLoading] = useState(false);
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
      const code = searchParams.get("code");
      if (!code) return;
      if (loading) return;

      console.log("Google Auth Code:", code);

      try {
        const response = await sendRequest({
          url: `/api/auth/google/callback`,
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: { code },
        });
    
        if (response.token) {
          await new Promise((resolve) => {
            //setUser({ userId: response.user.id, name: response.user.name, email: response.user.email });
            resolve(null);
          });
    
          console.log("Response body: ", response);
          router.push("/create-events");
        }
      } catch (error) {
        console.log(error);
        setError("Registration failed. Please try again.");
      } 

     
    };

    handleGoogleCallback();
  }, [searchParams.toString()]);

  return (
    <section className="min-h-[20em] h-[60vh] grid place-items-center">
      <div className="flex flex-col gap-3 justify-center min-w-[15em] text-center px-8 py-6 bg-[#7a7a7a1c] border border-gray-600 rounded-md shadow-md">
        <h1>Authenticating. Please wait{dots}</h1>
        {error && <p className="text-red-500">{error}</p>}
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
