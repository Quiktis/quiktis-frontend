"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FiPlus } from "react-icons/fi";

export default function EventsEmptyInline({
  tab = "upcoming",
}: {
  tab?: "upcoming" | "past";
}) {
  const title = tab === "past" ? "No Cultural Footprint" : "No upcoming Events";
  const subtitle =
    tab === "past"
      ? "No upcoming events at this time. Take a bold step, Host one!"
      : "No upcoming events at this time. Take a bold step, Host one!";

  return (
    <div className="w-[95%] lg:w-[90%] xl:w-[85%] mx-auto">
      <div className="flex flex-col items-center justify-center py-8">
        <div className="mb-10 -mt-20 md:-mt-6">
          <Image
            src="/inactive_events.svg"
            alt="No events illustration"
            width={320}
            height={200}
            className="object-contain"
            unoptimized={true}
          />
        </div>

        <div className="text-center">
          <h2 className="mb-4 text-2xl md:text-3xl font-medium text-[#919499]">
            {title}
          </h2>
          <p className="mb-8 text-sm md:text-base text-gray-400 max-w-md">
            {subtitle}
          </p>
        </div>

        {tab !== "past" && (
          <Link
            href={"/create-event"}
            className="bg-[#252729] hover:bg-[#2A2C30] text-[#919499] px-6 py-3 rounded-xl transition-colors flex items-center gap-3"
            aria-label="Create event"
          >
            <div className="bg-[#2A2C30] rounded-full p-1.5">
              <FiPlus className="h-4 w-4" />
            </div>
            <span className="text-[16px]">Create event</span>
          </Link>
        )}
      </div>
    </div>
  );
}
