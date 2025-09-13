"use client";

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
    recipient_code: ""
    }
  });

  const [profile, setProfile] = useState<File | null>(null);
  const [profilePreview, setProfilePreview] = useState<string | null>(null);
  const { sendRequest } = useAxios();
  const [googleUser, setGoogleUser] = useState<GoogleUser>({ token: null });
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  const setRole = (role: string) => {
    setUser((prevUser) => ({
      ...prevUser,
      role: role,
    }));
  };

  const logout = async () => {
    try {
      sendRequest({
        url: `/api/auth/logout`,
        method: "POST",
      });
    } catch (err) {
      //console.error("Logout failed:", err);
    }
  };

  const checkTokenPresence = async (): Promise<boolean> => {
    try {
      const data = await sendRequest({
        url: "/api/auth/me",
        method: "GET",
        withCredentials: true,
      });

      //console.log("Token presence check response:", data);

      if (!data?.tokenFound) {
        console.log("Token not found");
        setUser({
          userId: null,
          name: null,
          email: null,
          role: null,
          picture: null,
          age: null,
          location: null,
          token: null,
        });
        return false;
      }

      const fetchProfile = async () => {
        const profileRequest = await sendRequest({
          url: "https://api-quiktis.onrender.com/users/me",
          method: "GET",
          headers: {
            Authorization: `Bearer ${data.token}`,
          },
        });

        if (profileRequest?.error === "Token expired") {
          setUser({
            userId: null,
            name: null,
            email: null,
            role: null,
            picture: null,
            age: null,
            location: null,
            token: null,
          });

          //console.error("Error fetching user profile:", data);
          logout();
          return false;
        }

        //console.log("Profile request response:", profileRequest);

        if (profileRequest?.data?.email) {
          //console.log("Token found:", data.token);
          setUser({
            userId: profileRequest.data.id,
            name: profileRequest.data.name,
            email: profileRequest.data.email,
            role: profileRequest.data.role,
            picture: profileRequest.data.picture,
            age: profileRequest.data.age,
            location: profileRequest.data.location,
            token: data.token,
          });
        }

        return true;
      };

      const fetchPayoutDetails = async () => {
        const response = await sendRequest({
          url: "https://api-quiktis.onrender.com/payment/payouts",
          method: "GET",
          headers: {
            Authorization: `Bearer ${data.token}`,
          },
        });

        if (response?.status === "success") {
          setUser((prev) => ({
            ...prev,
            payoutDetails: response.data,
          }));

          //console.log("Payout details updated:", user);
          return true;
        } else {
          //console.log(response, "Error response")
        }

        return false
      };

      const profileResult = await fetchProfile();
      const payoutResult = await fetchPayoutDetails();

      if (profileResult && payoutResult) return true;

      return false;
    } catch (error) {
      //console.error("Error checking token:", error);
      return false;
    }
  };

  useEffect(() => {
    const initializeUser = async () => {
      try {
        await checkTokenPresence();
        setLoading(false);
      } catch (error) {
        //console.error("Error initializing user:", error);
        setLoading(false);
      }
    };

    initializeUser();
  }, []);

  const shouldExcludeLoading =
    pathname === "/" || pathname === "/some-other-page";

  if (loading && !shouldExcludeLoading) {
    return (
      <>
        {/*<header className="h-[4.5em] relative z-40 mx-auto flex justify-between mt-[1.4em] md:mt-[4em] w-[100%] lg:w-[95%] lg:max-w-[70em] md:bg-[#acabab21] lg:px-3 md:px-7 px-5 py-6 lg:py-3 rounded-[1.3em] shadow-[#0723424D] shadow-2xl border border-[#ffffff10]">
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
        </header>*/}

        <header className='absolute top-0 bottom-auto left-0 right-0 font-inter text-[0.95em] z-50'>
          <div className='w-[90%] mx-auto py-7 flex gap-4 justify-between h-fit'>
            <Link href={"/"}><Image src="/New logo.png" alt='logo' height={25} width={25} unoptimized className='object-contain'/></Link>
              

              <div className='flex gap-9 text-[#919499] font-medium max-md:hidden'>
                  {/*<p className='my-auto'><TimeWithGmt /></p>*/}
                  <Link href={"#"} className='cursor-pointer my-auto flex gap-1'>Explore events <Image src="/arrow-45.svg" alt='logo' height={12} width={12} unoptimized className='object-contain'/></Link>
                  <Link href={"/register"} className='cursor-pointer px-4 py-1 rounded-full bg-[#919499]/20'>Sign in</Link>
              </div>


             
              
          </div>
      </header>

        <div className="min-h-screen w-full md:w-[80%] mx-auto flex flex-col items-center justify-center space-y-2 md:space-y-[2em] px-4">
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

  //console.log("[UserProvider] Rendering children with user context:", user);
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
