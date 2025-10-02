"use client";

import { useRouter } from "next/navigation";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import useAxios from "../hooks/useAxios";
import Header3 from "@/components/Header3";

export interface User {
  userId?: string | null;
  email?: string | null;
  name?: string | null;
  role?: string | null;
  picture?: string | null;
  age?: any | null;
  location?: string | null;
  token?: string | null;
  payoutDetails?: {
    id: string;
    account_number: string;
    account_name: string;
    bank_name: string;
    recipient_code: string;
  };
}

interface GoogleUser {
  token?: string | null;
}

interface UserContextType {
  user: User;
  setUser: (user: User) => void;
  googleUser: GoogleUser;
  setGoogleUser: (googleUser: GoogleUser) => void;
  profile: File | null;
  setProfile: React.Dispatch<React.SetStateAction<File | null>>;
  profilePreview: string | null;
  setProfilePreview: React.Dispatch<React.SetStateAction<string | null>>;
  setRole: (role: string) => void;
  logout: () => void; // expose logout for convenience
}

const menuItems = [
  { name: "Home", path: "/" },
  { name: "Explore Events", path: "/events" },
  { name: "About Us", path: "/about" },
  { name: "Contact Us", path: "/contact" },
];

function getFirstName(fullName: string): string {
  if (!fullName) return "";
  return fullName.trim().split(" ")[0];
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>({
    userId: null,
    name: null,
    email: null,
    role: null,
    picture: null,
    age: null,
    location: null,
    token: null,
    payoutDetails: {
      id: "",
      account_number: "",
      account_name: "",
      bank_name: "",
      recipient_code: "",
    },
  });

  const [profile, setProfile] = useState<File | null>(null);
  const [profilePreview, setProfilePreview] = useState<string | null>(null);
  const { sendRequest } = useAxios();
  const [googleUser, setGoogleUser] = useState<GoogleUser>({ token: null });
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const router = useRouter();

  const setRole = (role: string) => {
    setUser((prevUser) => ({
      ...prevUser,
      role,
    }));
  };

  // Keep logout endpoint if you have it; also clear local storage + context
  const logout = async () => {
  try {
    await fetch("/api/auth/logout", {
      method: "POST",
      credentials: "include", // ✅ ensures cookies are sent
    });
  } catch {
    // ignore errors from logout endpoint for now
  } finally {
    setUser({
      userId: null,
      name: null,
      email: null,
      role: null,
      picture: null,
      age: null,
      location: null,
      token: null,
      payoutDetails: {
        id: "",
        account_number: "",
        account_name: "",
        bank_name: "",
        recipient_code: "",
      },
    });

    localStorage.removeItem("quiktis_user");
    localStorage.removeItem("quiktis_token");

    router.push("/");
  }
};


  // 🔁 TEMP approach (no /auth/me): restore from localStorage only
  useEffect(() => {
    try {
      const storedUserRaw = localStorage.getItem("quiktis_user");
      const storedToken = localStorage.getItem("quiktis_token");

      if (storedUserRaw && storedToken) {
        const storedUser = JSON.parse(storedUserRaw) as {
          id?: string;
          userId?: string;
          name?: string | null;
          email?: string | null;
          role?: string | null;
          picture?: string | null;
          age?: any | null;
          location?: string | null;
        };

        setUser((prev) => ({
          ...prev,
          userId: storedUser.id ?? storedUser.userId ?? null,
          name: storedUser.name ?? null,
          email: storedUser.email ?? null,
          role: storedUser.role ?? null,
          picture: storedUser.picture ?? null,
          age: storedUser.age ?? null,
          location: storedUser.location ?? null,
          token: storedToken,
        }));
      } else {
        // ensure a clean state if nothing in storage
        setUser((prev) => ({
          ...prev,
          userId: null,
          name: null,
          email: null,
          role: null,
          picture: null,
          age: null,
          location: null,
          token: null,
        }));
      }
    } catch {
      // if parsing fails, clear storage to avoid broken state
      localStorage.removeItem("quiktis_user");
      localStorage.removeItem("quiktis_token");
    } finally {
      setLoading(false);
    }
  }, []);

  // Keep your existing loading fallback logic intact
  const shouldExcludeLoading =
    pathname === "/" || pathname === "/some-other-page";

  if (loading && !shouldExcludeLoading) {
    return (
      <>
        <header className="absolute top-0 bottom-auto left-0 right-0 font-inter text-[0.95em] z-50">
          <div className="w-[90%] mx-auto py-7 flex gap-4 justify-between h-fit">
            <Link href={"/"}>
              <Image
                src="/New logo.png"
                alt="logo"
                height={25}
                width={25}
                unoptimized
                className="object-contain"
              />
            </Link>

            <div className="flex gap-9 text-[#919499] font-medium max-md:hidden">
              {/* <p className='my-auto'><TimeWithGmt /></p> */}
              <Link
                href={"#"}
                className="cursor-pointer my-auto flex gap-1"
              >
                Explore events{" "}
                <Image
                  src="/arrow-45.svg"
                  alt="logo"
                  height={12}
                  width={12}
                  unoptimized
                  className="object-contain"
                />
              </Link>
              <Link
                href={"/register"}
                className="cursor-pointer px-4 py-1 rounded-full bg-[#919499]/20"
              >
                Sign in
              </Link>
            </div>
          </div>
        </header>

        <div className="min-h-screen w-full md:w-[80%] mx-auto flex flex-col items-center justify-center space-y-2 md:space-y-[2em] px-4">
          <div className="w-full flex flex-col md:grid grid-cols-[1.3fr_0.7fr_0.9fr] h-full md:h-[8em] gap-3 md:gap-6">
            {[1, 2, 3].map((_, i) => (
              <div
                key={i}
                className="w-full max-sm:h-[15vh] h-full bg-[#ffffff2c] rounded-[1em] opacity-10 animate-pulse"
              />
            ))}
            <div className="hidden max-sm:block w-full max-sm:h-[19vh] h-full bg-[#ffffff2c] rounded-[1em] opacity-10 animate-pulse" />
          </div>

          <div className="max-sm:hidden w-full grid grid-cols-[1fr_0.8fr_4fr_1.3fr] h-[10vh] md:h-[3em] gap-3 md:gap-6">
            {[1, 2, 3, 4].map((_, i) => (
              <div
                key={i}
                className="w-full h-full bg-[#ffffff2c] rounded-[1em] opacity-10 animate-pulse"
              />
            ))}
          </div>

          <div className="max-sm:hidden w-full grid grid-cols-2 h-[4em] md:h-[20vh] gap-3 md:gap-6">
            {[1, 2].map((_, i) => (
              <div
                key={i}
                className="w-full h-full bg-[#ffffff2c] rounded-[1em] opacity-10 animate-pulse"
              />
            ))}
          </div>
        </div>
      </>
    );
  }

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        googleUser,
        setGoogleUser,
        profile,
        setProfile,
        profilePreview,
        setProfilePreview,
        setRole,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
