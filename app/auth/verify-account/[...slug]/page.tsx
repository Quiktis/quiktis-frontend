"use client";

import { useEffect, useState, Suspense } from "react";
import { useRouter, usePathname } from "next/navigation";
import useAxios from "@/app/hooks/useAxios";
import { useUser } from "@/app/context/UserContext";

const VerifyAccountPage = () => {
  const { sendRequest, loading } = useAxios();
  const { setUser } = useUser();
  const router = useRouter();
  const pathname = usePathname();

  const [dots, setDots] = useState(".");
  const [error, setError] = useState<string | null>(null);
  const [isVerified, setIsVerified] = useState(false);

  const token = pathname?.split("/verify-account/")[1];

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev === "." ? ".." : prev === ".." ? "..." : "."));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const verifyAccount = async () => {
      if (isVerified || loading) return;

      if (!token) {
        setError("Verification token missing. A link has been sent to your email.");
        return;
      }

      try {
        const response = await sendRequest({
          url: `/api/auth/verify`,
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: { token },
        });

        if (!response.ok || response.status !== "success") {
          throw new Error("Account verification failed.");
        }

        if (response.data?.id) {
          const user = {
            userId: response.data.id,
            name: response.data.name,
            email: response.data.email,
            role: response.data.role,
            token,
          }
          setUser(user);
          localStorage.setItem("quiktis_user", JSON.stringify(user));
        }

        setIsVerified(true);
        router.push("/dashboard"); // ✅ You can change to /login if preferred
        console.log("Account verified successfully:", response);
      } catch (err) {
        console.error("Verification Error:", err);
        setError("Verification failed. Please try again");
      }
    };

    verifyAccount();
  }, [token]);

  return (
    <section className="min-h-[20em] h-[60vh] grid place-items-center">
      <div className="flex flex-col gap-3 justify-center min-w-[15em] text-center px-8 py-6 bg-[#7a7a7a1c] border border-gray-600 rounded-md shadow-md">
        {isVerified ? (
          <h1>verification successfull, please wait.{dots}</h1>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <h1>Verifying your account, please wait{dots}</h1>
        )}
      </div>
    </section>
  );
};

export default function Page() {
  return (
    <Suspense fallback={<div></div>}>
      <VerifyAccountPage />
    </Suspense>
  );
}
