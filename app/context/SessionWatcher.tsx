"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { TokenService } from "@/ApiServices/token-service";
import { useStore } from "../lib/store";

export const SessionWatcher = () => {
  const router = useRouter();
  const {
    sessionExpired,
    setSessionExpired,
    setUser,
    user,
    isLoggingOut, // new flag
  } = useStore();

  const [visible, setVisible] = useState(false);
  const previousToken = useRef<string | undefined>(undefined);
  const hasEverHadToken = useRef(false);

  useEffect(() => {
    const checkToken = () => {
      const currentToken = TokenService.getCookie();

      // When token first appears, mark as logged in
      if (currentToken && !hasEverHadToken.current) {
        hasEverHadToken.current = true;
      }

      // Detect token disappearance (expired / removed unexpectedly)
      if (
        hasEverHadToken.current &&
        previousToken.current &&
        !currentToken &&
        !sessionExpired &&
        !isLoggingOut // 👈 ignore intentional logouts
      ) {
        console.log(" Token disappeared — triggering session expiry");
        setSessionExpired(true);
        setUser(null);
      }

      // Handle stale persisted user but no token (and not logging out)
      if (!currentToken && !hasEverHadToken.current && user && !isLoggingOut) {
        console.log("Persisted user without token — clearing stale state");
        setSessionExpired(true);
        setUser(null);
      }

      previousToken.current = currentToken;
    };

    // Run immediately, then every 5s
    checkToken();
    const interval = setInterval(checkToken, 5000);
    return () => clearInterval(interval);
  }, [sessionExpired, setSessionExpired, setUser, user, isLoggingOut]);

  // Handle modal display + redirect
  useEffect(() => {
    if (!sessionExpired) return;
    setVisible(true);

    const timer = setTimeout(() => {
      setVisible(false);
      setSessionExpired(false);
      router.push("/register");
    }, 10000);

    return () => clearTimeout(timer);
  }, [sessionExpired, setSessionExpired, router]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity duration-300 opacity-100">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-[90%] max-w-md text-center transform transition-all duration-300 scale-100 translate-y-0">
        <h2 className="text-lg font-semibold text-red-600 mb-2">Session Expired</h2>
        <p className="text-gray-700">Your session has expired. Please log in to continue.</p>

        <div className="mt-5 flex items-center justify-center gap-3">
          <button
            onClick={() => {
              setVisible(false);
              setSessionExpired(false);
              router.push("/register?mode=signin");
            }}
            className="bg-gray-900 text-white px-5 py-2 rounded-lg hover:bg-gray-800 active:scale-95 transition-all"
          >
            Go to Login
          </button>
          <button
            onClick={() => {
              setVisible(false);
              setSessionExpired(false);
              router.push("/");
            }}
            className="bg-gray-200 text-gray-800 px-5 py-2 rounded-lg hover:bg-gray-300 active:scale-95 transition-all"
          >
            Home
          </button>
        </div>
      </div>
    </div>
  );
};
