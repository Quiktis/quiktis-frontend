"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "./Sidebar";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { IoNotifications } from "react-icons/io5";

/* --- TimeWithGmt Component --- */
interface TimeWithGmtProps {
  date?: Date | number | string;
  // date input (default: now)
  fixedGmtOffset?: number | null;
  // optional fixed GMT offset (in hours, can be fractional)
}

const TimeWithGmt: React.FC<TimeWithGmtProps> = ({
  date = new Date(),
  fixedGmtOffset = null,
}) => {
  const input = date instanceof Date ? date : new Date(date);

  const formatTime12Hour = (d: Date, timeZone?: string): string => {
    return d.toLocaleTimeString("en-US", {
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

// --- Profile Dropdown ---
const ProfileDropdown = () => {
  return (
    <div
      className="absolute right-0 top-full mt-2 overflow-hidden z-50"
      style={{
        width: "377px",
        borderRadius: "17.41px",
        backgroundColor: "#181B1EF2",
        border: "0.5px solid #66666633",
        backdropFilter: "blur(7.459785461425781px)",
        opacity: 1,
      }}
    >
      {/* User Info Header */}
      <div className="p-4 border-b border-gray-700/50">
        <div className="flex items-center gap-3">
          <Image
            src="/icons/Profile-img.svg"
            alt="avatar"
            width={48}
            height={48}
            className="rounded-full object-cover"
          />
          <div className="flex-1 min-w-0">
            <h3
              className="text-white font-medium truncate"
              style={{
                fontFamily: "Inter",
                fontWeight: 500,
                fontSize: "24px",
                lineHeight: "121%",
                letterSpacing: "0%",
              }}
            >
              Dare Sobaloju Pamilerin
            </h3>
            <p
              className="truncate"
              style={{
                color: "#666666",
                fontFamily: "Inter",
                fontWeight: 500,
                fontSize: "12.98px",
                lineHeight: "121%",
                letterSpacing: "0%",
              }}
            >
              Pamilerincaleb@gmail.com
            </p>
          </div>
        </div>
      </div>
      {/* Menu Items */}
      <div className="py-2">
        <button
          className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-700/30 transition-colors duration-150"
          style={{
            color: "#919499",
            fontFamily: "Inter",
            fontWeight: 500,
            fontSize: "19.24px",
            lineHeight: "121%",
            letterSpacing: "0%",
          }}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          View Profile
        </button>
        <button
          className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-700/30 transition-colors duration-150"
          style={{
            color: "#919499",
            fontFamily: "Inter",
            fontWeight: 500,
            fontSize: "19.24px",
            lineHeight: "121%",
            letterSpacing: "0%",
          }}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          Settings
        </button>
        <button
          className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-700/30 transition-colors duration-150"
          style={{
            color: "#919499",
            fontFamily: "Inter",
            fontWeight: 500,
            fontSize: "19.24px",
            lineHeight: "121%",
            letterSpacing: "0%",
          }}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
          Sign Out
        </button>
      </div>
    </div>
  );
};

interface Header3Props {
  isLoggedInProp?: boolean;
}

export default function Header3({ isLoggedInProp }: Header3Props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // Profile dropdown
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isProfileHovered, setIsProfileHovered] = useState(false);
  const [isNotificationClicked, setIsNotificationClicked] = useState(false);
  const profileDropdownRef = useRef<HTMLDivElement>(null);

  const pathnameRaw = usePathname();
  const pathname = pathnameRaw ?? "";
  // Router + search params for syncing the header toggle to the URL:
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentTab =
    (searchParams?.get("tab") as "upcoming" | "past") ?? "upcoming";
  function setTabUrl(tab: "upcoming" | "past") {
    const params = new URLSearchParams(Array.from(searchParams ?? ([] as any)));
    params.set("tab", tab);
    router.push(`/events-active?${params.toString()}`);
  }

  // Close profile dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target as Node)
      ) {
        setIsProfileOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isEventsPage = pathname.startsWith("/events");
  const hiddenPaths = ["/register"];
  if (hiddenPaths.some((p) => pathname === p || pathname.startsWith(`${p}/`)))
    return null;

  const isLoggedIn =
    typeof isLoggedInProp === "boolean" ? isLoggedInProp : false;

  return (
    <>
      <header className="absolute top-0 bottom-auto left-0 right-0 font-inter text-[0.95em] z-50 isolate">
        {/* --- Gradient background --- */}
        {isLoggedIn && isEventsPage && (
          <div
            className="absolute inset-x-0 -top-28 -z-10 h-[30rem] blur-3xl opacity-[0.15] md:opacity-20 md:-top-20"
            style={{
              background:
                currentTab === "past"
                  ? "radial-gradient(ellipse 100% 40% at 50% 40%, #1E90FF, transparent 100%)" // 🔵 Past tab
                  : "radial-gradient(ellipse 100% 40% at 50% 40%, #D6409F, transparent 100%)", // 🌸 Upcoming tab
            }}
            aria-hidden="true"
          />
        )}

        <div className="w-[90%] mx-auto py-4">
          {isLoggedIn ? (
            <>
              {/* ================= LOGGED-IN VIEW ================= */}
              <div className="flex items-start justify-between">
                {/* --- Logo & Main Nav --- */}
                <div className="flex items-start gap-x-24 w-full md:w-auto justify-between">
                  <div className="pt-1 flex items-center w-full md:w-auto justify-between">
                    <Link href={"/"}>
                      <Image
                        src="/New logo.png"
                        alt="logo"
                        height={25}
                        width={25}
                        unoptimized={true}
                        className="object-contain"
                      />
                    </Link>

                    <div className="md:hidden flex items-center gap-2 text-[#919499]">
                      {/* Create Event */}
                      <Link
                        href="/events/create"
                        className="px-2 py-1.5 rounded-full flex items-center gap-1 hover:text-gray-200 font-[Geist] font-bold text-sm leading-none"
                      >
                        Create Event
                        <Image
                          src="/icons/arrow-events.svg"
                          alt="arrow"
                          width={10}
                          height={10}
                        />
                      </Link>
                      {/* Notifications */}
                      <button
                        onClick={() =>
                          setIsNotificationClicked(!isNotificationClicked)
                        }
                        className="hover:opacity-80 transition"
                        aria-label="Notifications"
                      >
                        <IoNotifications
                          size={18}
                          color={
                            isNotificationClicked ? "#919499" : "currentColor"
                          }
                        />
                      </button>
                      {/* Search */}
                      <button
                        className="hover:opacity-80 transition"
                        aria-label="Search"
                      >
                        <Image
                          src="/icons/prime_search_events.svg"
                          alt="search"
                          width={20}
                          height={20}
                        />
                      </button>
                      {/* Profile */}
                      <div className="relative" ref={profileDropdownRef}>
                        <button
                          onClick={() => setIsProfileOpen(!isProfileOpen)}
                          className="flex items-center"
                        >
                          <Image
                            src="/icons/Profile-img.svg"
                            alt="avatar"
                            width={28}
                            height={28}
                            className="rounded-full object-cover"
                          />
                        </button>
                        {/* Dropdown Menu */}
                        {isProfileOpen && <ProfileDropdown />}
                      </div>
                    </div>
                  </div>

                  {/* desktop nav - hidden on mobile */}
                  <div className="hidden md:flex flex-col items-start">
                    <nav className="flex items-center">
                      <div
                        className="flex items-center rounded-full p-1"
                        style={{ background: "rgba(0, 0, 0, 0.1)" }}
                      >
                        <Link
                          href="/events"
                          className="flex items-center space-x-2 text-white px-4 py-2 rounded-full"
                        >
                          <div className="relative w-5 h-5">
                            <Image
                              src="/icons/outside-events.svg"
                              alt="events-outside"
                              fill
                              className="object-contain"
                            />
                            <Image
                              src="/icons/inside-events.svg"
                              alt="events-inside"
                              width={12}
                              height={12}
                              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain"
                            />
                          </div>
                          <span className="font-inter font-semibold text-[16.98px] leading-none text-white">
                            Events
                          </span>
                        </Link>
                        <Link
                          href="/calendar"
                          className="flex items-center space-x-2 text-gray-300 hover:text-white hover:bg-black hover:bg-opacity-30 px-4 py-2 rounded-full transition-all duration-200"
                        >
                          <Image
                            src="/icons/calender-events.svg"
                            alt="calendar"
                            width={18}
                            height={18}
                          />
                          <span className="font-inter font-semibold text-[16.98px] leading-none text-[#919499]">
                            Calendar
                          </span>
                        </Link>
                        <Link
                          href="/discover"
                          className="flex items-center space-x-2 text-gray-300 hover:text-white hover:bg-black hover:bg-opacity-30 px-4 py-2 rounded-full transition-all duration-200"
                        >
                          <Image
                            src="/icons/iconamoon_discover_events.svg"
                            alt="discover"
                            width={18}
                            height={18}
                          />
                          <span className="font-inter font-semibold text-[16.98px] leading-none text-[#919499]">
                            Discover
                          </span>
                        </Link>
                      </div>
                    </nav>
                    {isEventsPage && (
                      <div className="mt-20">
                        <h1 className="text-4xl font-semibold text-white pl-4">
                          Events
                        </h1>
                      </div>
                    )}
                  </div>
                </div>

                {/* --- Right-Side for the desktop --- */}
                <div className="hidden md:flex items-start">
                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-4 text-[#919499] h-10">
                      {/* GMT */}
                      <span className="hidden md:block">
                        <TimeWithGmt fixedGmtOffset={1} />
                      </span>
                      {/* Create Event */}
                      <Link
                        href="/events/create"
                        className="px-4 py-1 rounded-full flex items-center gap-1 hover:text-gray-200 font-[Geist] font-bold text-[16.98px] leading-none"
                      >
                        Create Event
                        <Image
                          src="/icons/arrow-events.svg"
                          alt="arrow"
                          width={12.45}
                          height={13.41}
                        />
                      </Link>
                      {/* Notifications */}
                      <button
                        onClick={() =>
                          setIsNotificationClicked(!isNotificationClicked)
                        }
                        className="hover:opacity-80 transition"
                        aria-label="Notifications"
                      >
                        <IoNotifications
                          size={20.83}
                          color={
                            isNotificationClicked ? "#919499" : "currentColor"
                          }
                        />
                      </button>
                      {/* Search */}
                      <button
                        className="hover:opacity-80 transition"
                        aria-label="Search"
                      >
                        <Image
                          src="/icons/prime_search_events.svg"
                          alt="search"
                          width={25.42}
                          height={25.42}
                        />
                      </button>
                    </div>

                    {isEventsPage && (
                      <div className="mt-20 pl-8">
                        {/* --- Upcoming / Past toggle --- */}
                        <div
                          role="tablist"
                          aria-label="Events filter"
                          className="flex items-center rounded-full p-2.5"
                          style={{
                            background: "rgba(37, 39, 41, 0.22)",
                            backdropFilter: "blur(6.8px)",
                          }}
                        >
                          <button
                            role="tab"
                            aria-selected={currentTab === "upcoming"}
                            onClick={() => setTabUrl("upcoming")}
                            className={`px-6 py-2 text-[14px] font-medium rounded-full transition-all duration-200 ${
                              currentTab === "upcoming"
                                ? "text-white bg-[#9194993D]"
                                : "text-gray-400 hover:text-gray-300"
                            }`}
                          >
                            Upcoming
                          </button>
                          <button
                            role="tab"
                            aria-selected={currentTab === "past"}
                            onClick={() => setTabUrl("past")}
                            className={`px-6 py-2 text-[14px] font-medium rounded-full transition-all duration-200 ${
                              currentTab === "past"
                                ? "text-white bg-[#9194993D]"
                                : "text-gray-400 hover:text-gray-300"
                            }`}
                          >
                            Past
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-4 text-[#919499] ml-6 h-10">
                    {/* Profile dropdown */}
                    <div className="relative" ref={profileDropdownRef}>
                      {/* Profile Trigger */}
                      <button
                        onClick={() => setIsProfileOpen(!isProfileOpen)}
                        onMouseEnter={() => setIsProfileHovered(true)}
                        onMouseLeave={() => setIsProfileHovered(false)}
                        className="flex items-center gap-0.5 focus:outline-none"
                      >
                        <div
                          className={`relative w-[35px] h-[35px] rounded-full flex items-center justify-center transition-all duration-300 ${
                            isProfileHovered || isProfileOpen
                              ? "bg-white/10"
                              : "bg-transparent"
                          }`}
                        >
                          <Image
                            src="/icons/Profile-img.svg"
                            alt="avatar"
                            width={24}
                            height={24}
                            className="rounded-full object-cover relative z-10"
                          />
                        </div>

                        <span
                          className={`hidden md:block font-inter font-medium text-[16.98px] leading-[121%] text-[#919499] transition-all duration-300 ${
                            isProfileHovered || isProfileOpen
                              ? "transform translate-x-1"
                              : "transform translate-x-0"
                          }`}
                        >
                          Hi Dare&#39;
                        </span>
                      </button>

                      {isProfileOpen && <ProfileDropdown />}
                    </div>
                  </div>
                </div>
              </div>

              {/* --- Mobile Upcoming/Past toggle + Events header --- */}
              {isEventsPage && (
                <div className="md:hidden mt-12">
                  <div className="flex items-center justify-between">
                    {/* Title */}
                    <h2 className="text-2xl font-semibold text-white">
                      Events
                    </h2>

                    <div
                      role="tablist"
                      aria-label="Events filter mobile"
                      className="flex items-center gap-2 rounded-full p-1.5"
                      style={{ background: "rgba(37, 39, 41, 0.22)" }}
                    >
                      <button
                        role="tab"
                        aria-selected={currentTab === "upcoming"}
                        onClick={() => setTabUrl("upcoming")}
                        className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-150 ${
                          currentTab === "upcoming"
                            ? "text-white bg-[#9194993D]"
                            : "text-gray-400"
                        }`}
                      >
                        Upcoming
                      </button>
                      <button
                        role="tab"
                        aria-selected={currentTab === "past"}
                        onClick={() => setTabUrl("past")}
                        className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-150 ${
                          currentTab === "past"
                            ? "text-white bg-[#9194993D]"
                            : "text-gray-400"
                        }`}
                      >
                        Past
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </>
          ) : (
            // ================= LOGGED-OUT VIEW =================
            <div className="flex items-center justify-between">
              <Link href={"/"}>
                <Image
                  src="/New logo.png"
                  alt="logo"
                  height={25}
                  width={25}
                  unoptimized={true}
                  className="object-contain"
                />
              </Link>
              <div className="hidden md:flex items-center gap-8 font-medium text-[#919499]">
                <p className="my-auto">
                  <TimeWithGmt />
                </p>
                <Link
                  href="#"
                  className="cursor-pointer my-auto flex gap-1 hover:text-white"
                >
                  Explore events
                  <Image
                    src="/icons/arrow-events.svg"
                    alt="arrow"
                    height={12}
                    width={12}
                    unoptimized={true}
                    className="object-contain"
                  />
                </Link>
                <Link
                  href="/register"
                  className="cursor-pointer px-4 py-1 rounded-full bg-[#919499]/20"
                >
                  Sign in
                </Link>
              </div>

              <button
                className="md:hidden my-auto"
                onClick={() => setSidebarOpen(true)}
                aria-label="Open menu"
              >
                <Image
                  src="/ep_menu.svg"
                  alt="menu"
                  height={24}
                  width={24}
                  className="opacity-40"
                  unoptimized={true}
                />
              </button>
            </div>
          )}
        </div>
      </header>
      <Sidebar
        onSidebarClose={() => setSidebarOpen(false)}
        isOpen={sidebarOpen}
      />
    </>
  );
}
