"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import { CheckCircle, XCircle, Loader2 } from "lucide-react";
import Loading from "@/src/components/ui/Loading";
import { useMutations } from "@/src/ApiServices/hooks/useMutations";
import { useStore } from "@/src/lib/store";

const VerifyAccountPage = () => {
  const pathname = usePathname();
  const token = pathname?.split("/verify-account/")[1];
  const {loading, message, isError, isSuccess} = useStore()
  const verifyEmail = useMutations().verifyEmail

  useEffect(() => {
    if (token) {
      verifyEmail({token});
    }
  }, [token]);

  const handleRetry = () => {
    if (token) {
      verifyEmail({token});
    }
  };

  return (
    <section className="min-h-[85vh] grid place-items-center px-4">
      <div className="w-full max-w-md rounded-xl bg-[#1a1a1a] border border-gray-700 shadow-xl p-8 text-center space-y-4">
        {/* Loading */}
        {loading && (
          <div className="flex flex-col items-center gap-3">
            <Loading/>
            <h1 className="text-white font-semibold text-lg">
              Verifying your account…
            </h1>
            <p className="text-gray-400 text-sm">
              Please wait while we confirm your email.
            </p>
          </div>
        )}

        {/* Success */}
        {isSuccess && !isError && (
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
        {isError && (
          <div className="flex flex-col items-center gap-3">
            <XCircle className="h-12 w-12 text-gray-300" />
            <h1 className="text-gray-300 font-bold text-lg">
              Verification Failed
            </h1>
            <p className="text-gray-300 text-sm">{message}</p>

            <div className="flex gap-3 mt-4">
              {token && message.toLowerCase().includes("already") && (
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
