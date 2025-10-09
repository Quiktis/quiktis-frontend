"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import useAxios from "../hooks/useAxios";

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
}

const menuItems = [
  { name: "Home", path: "/" },
  { name: "Explore Events", path: "/events" },
  { name: "About Us", path: "/about" },
  { name: "Contact Us", path: "/contact" },
];



const PUBLIC_ROUTES = ["/", "/about", "/contact", "/events", "/event-viewing", "/legal/privacy-policy", "/legal/terms", "/legal/cookie-policy", "/checkout", "faq"];


function getFirstName(fullName: string): string {
  if (!fullName) return "";
  return fullName.trim().split(" ")[0];
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { sendRequest } = useAxios();

  // --- Load initial state from localStorage ---
  const [user, setUser] = useState<User>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("quiktis-user");
      return saved
        ? JSON.parse(saved)
        : {
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
          };
    }
    return {
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
    };
  });

  const [profile, setProfile] = useState<File | null>(null);
  const [profilePreview, setProfilePreview] = useState<string | null>(null);
  const [googleUser, setGoogleUser] = useState<GoogleUser>({ token: null });
  const [loading, setLoading] = useState(true);

  // --- Persist user in localStorage whenever it changes ---
  useEffect(() => {
    if (user && user.token) {
      localStorage.setItem("quiktis-user", JSON.stringify(user));
    } else {
      localStorage.removeItem("quiktis-user");
    }
  }, [user]);

  const setRole = (role: string) => {
    setUser((prevUser) => ({
      ...prevUser,
      role,
    }));
  };

  const logout = async () => {
    try {
      await sendRequest({
        url: `/api/auth/logout`,
        method: "POST",
      });
    } catch (err) {
      // ignore
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
      localStorage.removeItem("quiktis-user");
      //router.push("/");
    }
  };

  const checkTokenPresence = async (): Promise<boolean> => {
    try {
      const data = await sendRequest({
        url: "/api/auth/me",
        method: "GET",
        withCredentials: true,
      });

      if (!data?.tokenFound) {
  // If user is on a public page, don't force logout redirect
  const isPublic = PUBLIC_ROUTES.some((route) => pathname.startsWith(route));
  if (!isPublic) {
    logout(); // redirect only if it's a protected page
  }
  return false;
}

      // Fetch profile
      const profileRequest = await sendRequest({
        url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/me`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      });

      if (profileRequest?.error === "Token expired") {
        logout();
        return false;
      }

      if (profileRequest?.data?.email) {
        setUser((prev) => ({
          ...prev,
          userId: profileRequest.data.id,
          name: profileRequest.data.name,
          email: profileRequest.data.email,
          role: profileRequest.data.role,
          picture: profileRequest.data.picture,
          age: profileRequest.data.age,
          location: profileRequest.data.location,
          token: data.token,
        }));
      }

      // Fetch payout details
      const payoutResponse = await sendRequest({
        url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/payment/payouts`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      });

      if (payoutResponse?.status === "success") {
        setUser((prev) => ({
          ...prev,
          payoutDetails: payoutResponse.data,
        }));
      }

      return true;
    } catch (error) {
      return false;
    }
  };

  useEffect(() => {
    const initializeUser = async () => {
      await checkTokenPresence();
      setLoading(false);
    };
    initializeUser();
  }, []);

  const shouldExcludeLoading =
    pathname === "/" || pathname === "/some-other-page";

  if (loading && !shouldExcludeLoading) {
    return (
      <>
        <header className="h-[4.5em] relative z-40 mx-auto flex justify-between mt-[1.4em] md:mt-[4em] w-[100%] lg:w-[95%] lg:max-w-[70em] md:bg-[#acabab21] lg:px-3 md:px-7 px-5 py-6 lg:py-3 rounded-[1.3em] shadow-[#0723424D] shadow-2xl border border-[#ffffff10]">
          <div className="my-auto lg:px-8">
            <Image
              src="/new_logo.svg"
              className="w-[80px]"
              alt="Logo"
              width={120}
              height={60}
              unoptimized
            />
          </div>
          <ul className="relative z-20 gap-9 my-auto hidden md:flex tablet-hidden">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`transition-colors duration-300 ${
                    pathname === item.path
                      ? "text-red-500 font-bold"
                      : "text-white hover:text-primary"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          {user.name ? (
            <div className="hidden mr-1 my-auto lg:flex gap-3 items-center">
              Hi, {getFirstName(user.name)}{" "}
              <div className="bg-gray-400 h-[2.8em] w-[2.8em] rounded-full"></div>
            </div>
          ) : (
            <Link
              href="/register"
              className="lg:block cursor-pointer bg-primary px-6 py-3 rounded-[1em] btn-3d border-1 border-[#eb4b3c] hidden icon"
            >
              Get Started
            </Link>
          )}
          <div className="relative h-[30px] w-[30px] my-auto block md:hidden tablet-block">
            <button>
              <Image
                src="/ep_menu.svg"
                alt="menu"
                fill
                className="object-fit"
                unoptimized
              />
            </button>
          </div>
        </header>

        <div className="min-h-screen w-full md:w-[80%] mx-auto flex flex-col items-center justify-center space-y-2 md:space-y-[2em] px-4 mt-[-5em]">
          <div className="w-full flex flex-col md:grid grid-cols-[1.3fr_0.7fr_0.9fr] h-full md:h-[8em] gap-3 md:gap-6">
            {[1, 2, 3].map((_, i) => (
              <div
                key={i}
                className="w-full max-sm:h-[15vh] h-full bg-[#ffffff2c] rounded-[1em] opacity-10 animate-pulse"
              ></div>
            ))}
            <div className="hidden max-sm:block w-full max-sm:h-[19vh] h-full bg-[#ffffff2c] rounded-[1em] opacity-10 animate-pulse"></div>
          </div>

          <div className="max-sm:hidden w-full grid grid-cols-[1fr_0.8fr_4fr_1.3fr] h-[10vh] md:h-[3em] gap-3 md:gap-6">
            {[1, 2, 3, 4].map((_, i) => (
              <div
                key={i}
                className="w-full h-full bg-[#ffffff2c] rounded-[1em] opacity-10 animate-pulse"
              ></div>
            ))}
          </div>

          <div className="max-sm:hidden w-full grid grid-cols-2 h-[4em] md:h-[20vh] gap-3 md:gap-6">
            {[1, 2].map((_, i) => (
              <div
                key={i}
                className="w-full h-full bg-[#ffffff2c] rounded-[1em] opacity-10 animate-pulse"
              ></div>
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
