"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { useUser } from "@/app/context/UserContext";

interface HeaderProps {
  containerClass?: string;
}

function getFirstName(fullName: string): string {
  if (!fullName) return "";
  return fullName.trim().split(" ")[0];
}

const NewHeader: React.FC<HeaderProps> = ({ containerClass }) => {
  const { user, profilePreview } = useUser();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Explore Events", path: "/events" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
    // { name: "Newsletter", path: "/reviews" },
  ];

  const allowedPaths = [""];

  const hiddenPaths = [ "/landing-page-2"];

  if (hiddenPaths.includes(pathname)) return null;

  return (
    <>
      {allowedPaths.includes(pathname) && (
        <div className="overlay background-div z-10 absolute max-sm:top-[107vw] sm:top-[36vw] md:top-[50vh] lg:top-[23vw] xl:top-[9vw] right-0 left-0"></div>
      )}

      <header
        className={`h-[4.5em] relative z-40 mx-auto flex justify-between mt-[1.4em] md:mt-[4em] w-[100%] lg:w-[95%] lg:max-w-[70em] md:bg-[#acabab21] lg:px-3 md:px-7 px-5 py-6 lg:py-3 rounded-[1.3em] shadow-[#0723424D] shadow-2xl ${containerClass} border border-[#ffffff10] lg:w-[80%] max-sm:w-[90%] mx-auto`}
      >
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
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {user.name ? (
          <Link
            href={"/dashboard"}
            className="hidden mr-1 my-auto lg:flex gap-3 items-center"
          >
            Hi, {getFirstName(user.name)}{" "}
            <div className="bg-[#1111116c] border-2 border-[#cfcfcf] h-[2.8em] w-[2.8em] rounded-full overflow-hidden grid place-items-center">
            <Image src={profilePreview?? "/person.svg"} height={10} width={10} alt="profile" className={` rounded-full ${profilePreview ? " h-[2.8em] w-[2.8em]": "h-[1.5em] w-[1.5em]"}`}></Image>{" "}
            </div>
          </Link>
        ) : (
          <Link
            href="/register"
            className="lg:block cursor-pointer bg-primary px-6 py-3 rounded-[1em] btn-3d border-1 border-[#eb4b3c] hidden icon"
          >
            Get Started
          </Link>
        )}

        <div className="relative h-[30px] w-[30px] my-auto block md:hidden tablet-block">
          <button onClick={() => setSidebarOpen(true)}>
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

      <Sidebar
        onSidebarClose={() => setSidebarOpen(false)}
        isOpen={sidebarOpen}
      />
    </>
  );
};

export default NewHeader;
