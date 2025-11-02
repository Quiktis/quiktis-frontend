"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "./Sidebar";
import { usePathname } from "next/navigation";
import { useStore } from "@/app/lib/store";


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
  const user = useStore((s) => s.user);

  const hiddenPaths = ["/register"];
  if (hiddenPaths.includes(pathname)) return null;

  // ✅ Get first name safely
  const firstName = user?.name ? user.name.split(" ")[0] : null;

  return (
    <>
      <header className="absolute top-0 bottom-auto left-0 right-0 font-inter text-[0.95em] z-50">
        <div className="w-[90%] mx-auto py-7 flex gap-4 justify-between h-fit">
          <div className="flex md:w-[70%] lg:w-[60%] gap-6 xl:w-[50%] 2xl:w-[40%] justify-between">
          <Link href={"/"} className="my-auto">
            <Image
              src="/New logo.png"
              alt="logo"
              height={25}
              width={25}
              unoptimized
              className="object-contain"
            />
          </Link>

          <div className="hidden md:flex gap-8">

            <div className="flex gap-6 px-7 py-4 bg-[#00000038] rounded-full items-center">
              <Link href={user?.id ? "/event" : "/event"} className="cursor-pointer my-auto flex gap-1.5 font-semibold text-white">
              <Image
                src="/icons/ticket-icon.svg"
                alt="ticket"
                height={18}
                width={18}
                unoptimized
                className="object-contain"
              />
             Events
            </Link>

            
            <Link href={"/discover"} className="cursor-pointer my-auto flex gap-1 text-[#919499] font-medium">
            <Image
                src="/discover.svg"
                alt="explore"
                height={20}
                width={20}
                unoptimized
                className="object-contain"
              />
              Explore Events
            </Link>
            </div>

            

            
            <Link href={user?.id ? "/create-event" : '/register'} className="cursor-pointer my-auto flex gap-1.5">
              Create Event
              <Image
                src="/arrow-45.svg"
                alt="arrow"
                height={12}
                width={12}
                unoptimized
                className="object-contain"
              />
            </Link>

          </div>
          </div>

          <div className="flex gap-9 text-[#919499] font-medium max-md:hidden">
            

      


            {/* ✅ Show greeting if logged in, else Sign in */}
            {user?.id ? (
              <Link href="/profile" className="my-auto flex gap-[2px] text-gray-300 font-normal items-center">
                <Image
                src="/icons/Profile-img.svg"
                alt="arrow"
                height={33}
                width={33}
                unoptimized
                className="object-contain"
              />
              Hi {firstName}</Link>
            ) : (
              <Link
                href={"/register"}
                className="cursor-pointer px-4 py-1 rounded-full h-fit my-auto bg-[#919499]/20"
              >
                Sign in
              </Link>
            )}
          </div>

          <button
            className="hidden my-auto h-8 w-8 max-md:grid place-items-center rounded-md bg-[#ffffff17]"
            onClick={() => setSidebarOpen(true)}
          >
            <Image
              unoptimized
              src="/icons/menu.svg"
              alt="menu"
              height={18}
              width={18}
              className="opacity-40 m-auto"
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
