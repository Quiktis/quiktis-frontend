"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import { CheckCircle, XCircle, Loader2 } from "lucide-react";

const VerifyAccountPage = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [error, setError] = useState<string | null>(null);

  // ✅ Extract token from URL (/verify-account/[token])
  const token = pathname?.split("/verify-account/")[1];

  // ✅ Mutation to verify account
  const mutation = useMutation({
    mutationFn: async (token: string) => {
      const res = await axios.post("/api/auth/verify-email", { token });
      return res.data;
    },
    onSuccess: (data) => {
      if (data.status === "success") {
        setTimeout(() => {
          router.push("/register?mode=signin");
        }, 2000);
      } else {
        setError(data.message || "Verification failed.");
      }
    },
    onError: (err: any) => {
      const backendMessage = err.response?.data?.message;

      if (backendMessage?.toLowerCase().includes("expired")) {
        setError("This link has expired. Please request a new verification email.");
      } else if (backendMessage?.toLowerCase().includes("invalid")) {
        setError("This verification link is invalid. Please check your email again.");
      } else if (backendMessage?.toLowerCase().includes("already")) {
        setError("Your email is already verified. Redirecting you to login...");
        setTimeout(() => router.push("/login"), 2000);
      } else {
        setError("We couldn’t verify your account. Please try again later.");
      }
    },
  });

  // Fire automatically on mount
  useEffect(() => {
    if (token) {
      mutation.mutate(token);
    } else {
      setError("Verification token is missing. Please check your email again.");
    }
  }, [token]);

  // ✅ Handle retry
  const handleRetry = () => {
    if (token) {
      setError(null); // clear old error so loader shows again
      mutation.mutate(token);
    }
  };

  return (
    <section className="min-h-[85vh] grid place-items-center px-4">
      <div className="w-full max-w-md rounded-xl bg-[#1a1a1a] border border-gray-700 shadow-xl p-8 text-center space-y-4">
        {/* Loading */}
        {mutation.isPending && !error && (
          <div className="flex flex-col items-center gap-3">
            <Loader2 className="h-10 w-10 animate-spin text-blue-400" />
            <h1 className="text-white font-semibold text-lg">
              Verifying your account…
            </h1>
            <p className="text-gray-400 text-sm">
              Please wait while we confirm your email.
            </p>
          </div>
        )}

        {/* Success */}
        {mutation.isSuccess && !error && (
          <div className="flex flex-col items-center gap-3">
            <CheckCircle className="h-12 w-12 text-green-500" />
            <h1 className="text-green-500 font-bold text-lg">
              Email Verified Successfully!
            </h1>
            <p className="text-gray-400 text-sm">
              Redirecting you to signin…
            </p>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="flex flex-col items-center gap-3">
            <XCircle className="h-12 w-12 text-gray-300" />
            <h1 className="text-gray-300 font-bold text-lg">
              Verification Failed
            </h1>
            <p className="text-gray-300 text-sm">{error}</p>

            <div className="flex gap-3 mt-4">
              {token && !error.toLowerCase().includes("already") && (
                <button
                  onClick={handleRetry}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition"
                >
                  Retry
                </button>
              )}
              <Link href="/register"
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-sm font-medium transition"
              >
                Go to Login
              </Link>
            </div>
          </div>
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
