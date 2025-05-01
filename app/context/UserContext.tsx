"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { usePathname } from "next/navigation"; // Import usePathname from next/navigation
import NewHeader from "@/components/NewHeader";
import Image from "next/image";
import Link from "next/link"; 

interface User {
  userId?: string | null;
  email?: string | null;
  name?: string | null;
  role?: string | null;
  picture?: string | null;
  age?: any | null;
  location?: string | null;
  token?: string | null;
}

interface GoogleUser {
  token?: string | null;
}

interface UserContextType {
  user: User;
  setUser: (user: User) => void;
  googleUser: GoogleUser;
  setGoogleUser: (googleUser: GoogleUser) => void;
}

const menuItems = [
  { name: "Home", path: "/" },
  { name: "Explore Events", path: "/events" },
  { name: "About Us", path: "/about" },
  { name: "Contact Us", path: "/contact" },
  // { name: "Newsletter", path: "/reviews" },
];

function getFirstName(fullName: string): string {
  if (!fullName) return "";
  return fullName.trim().split(" ")[0];
}

// Create the context with default values
const UserContext = createContext<UserContextType | undefined>(undefined);

// Create a provider component
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
  });

  const [googleUser, setGoogleUser] = useState<GoogleUser>({ token: null });
  const [loading, setLoading] = useState(true); // Loading state to track when user data is ready
  const pathname = usePathname(); // Get current route path

  useEffect(() => {
    const fetchUserFromLocalStorage = () => {
      try {
        const storedUser = localStorage.getItem("quiktis_user");
        if (storedUser) {
          const parsedUser = JSON.parse(storedUser);
          if (parsedUser?.name && parsedUser?.email && parsedUser?.userId) {
            setUser(parsedUser); // Set user in the global state
          }
        }
      } catch (err) {
        console.error("Failed to load user from localStorage:", err);
      } finally {
        setLoading(false); // Set loading to false after checking localStorage
      }
    };

    fetchUserFromLocalStorage();
  }, []); // Empty dependency array ensures this effect runs once on mount

  // Check if the current route is one where we want to exclude the loading state
  const shouldExcludeLoading = pathname === "/" || pathname === "/some-other-page"; // Add conditions for other pages

  if (loading && !shouldExcludeLoading) {
    return <>

  <header className={`h-[4.5em] relative z-40 mx-auto flex justify-between mt-[1.4em] md:mt-[4em] w-[100%] lg:w-[95%] lg:max-w-[70em] md:bg-[#acabab21] lg:px-3 md:px-7 px-5 py-6 lg:py-3 rounded-[1.3em] shadow-[#0723424D] shadow-2xl border border-[#ffffff10]`}>
        <div className="my-auto lg:px-8">
          <Image
            unoptimized={true}
            src="/new_logo.svg"
            className="w-[80px]"
            alt="Logo"
            width={120}
            height={60}
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
                }`}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
  
        {user.name ? <div className="hidden mr-1 my-auto lg:flex gap-3 items-center">Hi, {getFirstName(user.name)} <div className="bg-gray-400 h-[2.8em] w-[2.8em] rounded-full"></div> </div> : <Link
          href="/register"
          className="lg:block cursor-pointer bg-primary px-6 py-3 rounded-[1em] btn-3d border-1 border-[#eb4b3c] hidden icon">
          Get Started
        </Link>}
  
        <div className="relative h-[30px] w-[30px] my-auto block md:hidden tablet-block">
          <button>
            <Image
              unoptimized={true}
              src="/ep_menu.svg"
              alt="menu"
              fill={true}
              className="object-fit"
            />
          </button>
        </div>
      </header>




     <div className="min-h-screen w-full md:w-[80%] mx-auto flex flex-col items-center justify-center space-y-2 md:space-y-[2em] px-4 mt-[-5em]">
      <div className="w-full flex flex-col md:grid grid-cols-[1.3fr_0.7fr_0.9fr] h-full md:h-[8em] gap-3 md:gap-6">
        <div className="w-full max-sm:h-[15vh] h-full bg-[#ffffff2c] rounded-[1em] opacity-10 animate-pulse"></div>
        <div className="w-full max-sm:h-[15vh] h-full  bg-[#ffffff2c] rounded-[1em] opacity-10 animate-pulse"></div>
        <div className="w-full max-sm:h-[15vh] h-full bg-[#ffffff2c] rounded-[1em] opacity-10 animate-pulse"></div>
        <div className="hidden max-sm:block w-full max-sm:h-[19vh] h-full bg-[#ffffff2c] rounded-[1em] opacity-10 animate-pulse"></div>
      </div>

      <div className="max-sm:hidden w-full grid grid-cols-[1fr_0.8fr_4fr_1.3fr] h-[10vh] md:h-[3em] gap-3 md:gap-6">
        <div className="w-full h-full bg-[#ffffff2c] rounded-[1em] opacity-10 animate-pulse"></div>
        <div className="w-full h-full  bg-[#ffffff2c] rounded-[1em] opacity-10 animate-pulse"></div>
        <div className="w-full h-full bg-[#ffffff2c] rounded-[1em] opacity-10 animate-pulse"></div>
        <div className="w-full h-full  bg-[#ffffff2c] rounded-[1em] opacity-10 animate-pulse"></div>
        
      </div>

      <div className="max-sm:hidden w-full grid grid-cols-2 h-[4em] md:h-[20vh] gap-3 md:gap-6">
        <div className="w-full h-full bg-[#ffffff2c] rounded-[1em] opacity-10 animate-pulse"></div>
        <div className="w-full h-full  bg-[#ffffff2c] rounded-[1em] opacity-10 animate-pulse"></div>
      </div>
      
      
      
     
    </div>
    </>; // You can show a loading spinner or something else
  }

  return (
    <UserContext.Provider value={{ user, setUser, googleUser, setGoogleUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook for using the context
export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
