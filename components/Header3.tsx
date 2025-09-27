"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "./Sidebar";
import { usePathname } from "next/navigation";
import { useUser } from "@/app/context/UserContext";

interface TimeWithGmtProps {
  date?: Date | number | string;
  fixedGmtOffset?: number | null;
}

const TimeWithGmt: React.FC<TimeWithGmtProps> = ({
  date = new Date(),
  fixedGmtOffset = null,
}) => {
  const input = date instanceof Date ? date : new Date(date);

  const formatTime12Hour = (d: Date, timeZone?: string): string => {
    return d.toLocaleTimeString(undefined, {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
      ...(timeZone ? { timeZone } : {}),
    });
  };

  const formatGmtString = (offsetMinutesEast: number): string => {
    const sign = offsetMinutesEast >= 0 ? "+" : "-";
    const absMins = Math.abs(offsetMinutesEast);
    const hours = Math.floor(absMins / 60);
    const mins = absMins % 60;
    return mins === 0
      ? `GMT${sign}${hours}`
      : `GMT${sign}${hours}:${String(mins).padStart(2, "0")}`;
  };

  if (fixedGmtOffset === null) {
    const offsetMinutesEast = -input.getTimezoneOffset();
    const gmtString = formatGmtString(offsetMinutesEast);
    const timeStr = formatTime12Hour(input);
    return (
      <span>
        {timeStr} {gmtString}
      </span>
    );
  } else {
    const offsetMinutesEast = Math.round(fixedGmtOffset * 60);
    const utcMs = input.getTime() + input.getTimezoneOffset() * 60000;
    const targetMs = utcMs + offsetMinutesEast * 60000;
    const shiftedDate = new Date(targetMs);

    const gmtString = formatGmtString(offsetMinutesEast);
    const timeStr = formatTime12Hour(shiftedDate, "UTC");

    return (
      <span>
        {timeStr} {gmtString}
      </span>
    );
  }
};

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const { user } = useUser(); // ✅ grab user state

  const hiddenPaths = ["/register"];
  if (hiddenPaths.includes(pathname)) return null;

  // ✅ Get first name safely
  const firstName = user?.name ? user.name.split(" ")[0] : null;

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
            <p className="my-auto">
              <TimeWithGmt />
            </p>
            <Link href={"/register"} className="cursor-pointer my-auto flex gap-1">
              Explore events
              <Image
                src="/arrow-45.svg"
                alt="arrow"
                height={12}
                width={12}
                unoptimized
                className="object-contain"
              />
            </Link>

            {/* ✅ Show greeting if logged in, else Sign in */}
            {user?.userId ? (
              <span className="my-auto text-white">Hi {firstName}</span>
            ) : (
              <Link
                href={"/register"}
                className="cursor-pointer px-4 py-1 rounded-full bg-[#919499]/20"
              >
                Sign in
              </Link>
            )}
          </div>

          <button
            className="hidden max-md:block my-auto"
            onClick={() => setSidebarOpen(true)}
          >
            <Image
              unoptimized
              src="/ep_menu.svg"
              alt="menu"
              height={24}
              width={24}
              className="opacity-40"
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
}
