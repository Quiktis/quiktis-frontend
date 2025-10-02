"use client";
import React, { useRef, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";

const navItems = [
  { name: "My Profile", path: "/event-creator" },
  { name: "My Events", path: "/my-events" },
  { name: "Events Stats", path: "/stats" },
  { name: "Notifications", path: "/notifications" },
  { name: "Reviews", path: "/reviews" },
];

const DashboardNav = () => {
  const pathname = usePathname();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [disableLeft, setDisableLeft] = useState(true);
  const [disableRight, setDisableRight] = useState(false);

  const updateArrows = () => {
    const el = scrollRef.current;
    if (el) {
      setDisableLeft(el.scrollLeft === 0);
      setDisableRight(el.scrollLeft + el.clientWidth >= el.scrollWidth);
    }
  };

  useEffect(() => {
    updateArrows();
  }, []);

  const scrollByAmount = (amount: number) => {
    const el = scrollRef.current;
    if (el) {
      el.scrollBy({ left: amount, behavior: "smooth" });
      setTimeout(updateArrows, 300);
    }
  };

  return (
    <div className="relative mt-4 flex items-center w-full">
      {/* Left scroll fade */}
      <div className="absolute top-0 left-0 h-full w-6 bg-gradient-to-r from-black to-transparent pointer-events-none block md:hidden" />
      {/* Right scroll fade */}
      <div className="absolute top-0 right-0 h-full w-6 bg-gradient-to-l from-black to-transparent pointer-events-none block md:hidden" />

      {/* Scroll buttons mobile */}
      <div className="md:hidden absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
        <button
          onClick={() => scrollByAmount(-120)}
          disabled={disableLeft}
          aria-label="Scroll Left"
          className={`p-2 bg-black bg-opacity-50 text-white rounded-full focus:outline-none ${
            disableLeft ? "opacity-50" : ""
          }`}>
          <FaChevronLeft size={20} />
        </button>
      </div>
      <div className="md:hidden absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
        <button
          onClick={() => scrollByAmount(120)}
          disabled={disableRight}
          aria-label="Scroll Right"
          className={`p-2 bg-black bg-opacity-50 text-white rounded-full focus:outline-none ${
            disableRight ? "opacity-50" : ""
          }`}>
          <FaChevronRight size={20} />
        </button>
      </div>

      {/* Nav links */}
      <nav
        ref={scrollRef}
        onScroll={updateArrows}
        className="flex gap-2 md:gap-4 overflow-x-auto scroll-smooth scrollbar-hide">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link key={item.name} href={item.path}>
              <button
                className={`w-[120px] md:w-auto text-sm md:text-base text-white whitespace-nowrap py-2 px-3 rounded ${
                  isActive
                    ? "border-b-2 border-primary font-bold"
                    : "hover:border-b-2 hover:border-gray-400"
                }`}>
                {item.name}
              </button>
            </Link>
          );
        })}
      </nav>

      <div className="hidden md:flex ml-auto">
        <Link href="/create-events">
          <button className="flex items-center gap-2 bg-primary text-white px-4 py-4 rounded-md shadow-[0_0_20px_#FF4D2A] hover:brightness-110 transition">
            <AiOutlineCalendar className="w-5 h-5" />
            <span>Create Event</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DashboardNav;
