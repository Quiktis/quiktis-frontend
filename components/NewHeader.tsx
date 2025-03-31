"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface HeaderProps {
  onSidebarOpen?: () => void;
}

const NewHeader: React.FC<HeaderProps> = ({ onSidebarOpen }) => {
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Explore Events", path: "/events" },
    { name: "About Us", path: "/faq" },
    { name: "Contact Us", path: "/contact" },
    // { name: "Newsletter", path: "/reviews" },
  ];

  return (
    <header className="relative z-40 mx-auto flex justify-between mt-[1.4em] md:mt-[4em] w-[100%] lg:w-[95%] lg:max-w-[70em] md:bg-[#acabab21] lg:px-3 md:px-7 px-5 py-6 lg:py-3 rounded-[1.3em] shadow-[#0723424D] md:shadow-2xl">
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

      <Link
        href="/register"
        className="lg:block cursor-pointer bg-primary px-6 py-3 rounded-[1em] btn-3d border-1 border-[#eb4b3c] hidden icon">
        Get Started
      </Link>

      <div className="relative h-[30px] w-[30px] my-auto block md:hidden tablet-block">
        <button onClick={onSidebarOpen}>
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
  );
};

export default NewHeader;
