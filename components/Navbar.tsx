"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
    { name: "ContactUs", path: "/contact" },
    { name: "Help", path: "/reviews" },
    // { name: "Create", path: "/notifications" },
  ];
  const specialPaths = [
    "/events",
    "/create-events",
    "/contact",
    "/event-creator",
    "/notifications",
    "/reviews",
    "/announcement",
  ];

  return (
    <nav className="relative">
      {/* Desktop Navbar */}
      <div className="hidden md:flex items-center gap-[40px]">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.path}
            className={`py-2 px-2 text-[16px] leading-none font-inter ${
              pathname === item.path
                ? "border-b-4 border-primary font-bold text-white"
                : ""
            }`}>
            {item.name}
          </Link>
        ))}
      </div>

      <div className="md:hidden flex items-center gap-2">
        {specialPaths.includes(pathname) && (
          <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
            <Image
              src="/pp.png"
              alt="Profile"
              width={32}
              height={32}
              className="object-cover"
            />
          </div>
        )}
        <button
          onClick={() => setSidebarOpen(true)}
          className="text-white"
          aria-label="Open Menu">
          <FaBars size={28} />
        </button>
      </div>

      {sidebarOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="relative bg-black w-64 h-full p-6 flex flex-col">
            <button
              onClick={() => setSidebarOpen(false)}
              className="absolute top-4 right-4 text-white"
              aria-label="Close Menu">
              <FaTimes size={28} />
            </button>
            <div className="mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={() => setSidebarOpen(false)}
                  className={`block py-3 px-4 text-[18px] font-inter ${
                    pathname === item.path
                      ? "text-primary font-bold"
                      : "text-gray-300"
                  }`}>
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="mt-auto">
              {specialPaths.includes(pathname) ? (
                <Link href="/connect-wallet">
                  <button className="w-full py-3 bg-primary text-white text-[16px] font-bold rounded-md">
                    Connect Wallet
                  </button>
                </Link>
              ) : (
                <Link href="/register">
                  <button className="w-full py-3 bg-primary text-white text-[16px] font-bold rounded-md">
                    Get Started
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
