"use client";

import { useEffect } from "react";
import { useUser } from "@/app/context/UserContext";

export default function AuthUserSync() {
  const { setUser } = useUser(); // Only need `setUser` to update the user state

  useEffect(() => {
    const hasToken = () => {
      if (typeof document !== "undefined") {
        return document.cookie.split(";").some((cookie) =>
          cookie.trim().startsWith("quiktis_token=")
        );
      }
      return false;
    };

    // Run once when the component mounts
    if (hasToken()) {
      try {
        const storedUser = localStorage.getItem("quiktis_user");
        if (storedUser) {
          const parsedUser = JSON.parse(storedUser);
          // Ensure the user has the necessary properties before setting it
          if (parsedUser?.name && parsedUser?.email && parsedUser?.userId) {
            setUser(parsedUser); // Set user in global state
          }
        }
      } catch (err) {
        console.error("Failed to load user from localStorage:", err);
      }
    }
  }, [setUser]); // Only depend on `setUser` for stable function reference

  return null;
}
