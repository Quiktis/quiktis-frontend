"use client";

import React from "react";
import SafeImage from "../SafeImage";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { EventItem } from "@/lib/eventsClient";

export default function EventCard({ event }: { event: EventItem }) {
  const router = useRouter();
  const dateStr = "September 30";
  const weekdayStr = "Tuesday";
  const timeStr = "7:00 PM";

  const thumb = event.thumbnail ?? "/ladies-night-party.svg";
  const icon = event.icon ?? "/icons/ladies-music-ball.svg";

  const formatCompact = (n?: number) => {
    if (n == null) return "0 going";
    if (n >= 1_000_000) {
      const m = n / 1_000_000;
      return `${Number.isInteger(m) ? Math.round(m) : +m.toFixed(1)}M going`;
    }
    if (n >= 1000) {
      const k = Math.round(n / 1000);
      return `${k}k going`;
    }
    return `${n} going`;
  };

  const goingLabel =
    (event as any).goingLabel ?? formatCompact(event.goingCount);

  const buttonColor = event.buttonColor ?? "#EA4335";

  const href = event.id ? `/events/${event.id}` : "#";

  // Mobile  Style
  const mobileCardStyle: React.CSSProperties = {
    border: "0.28px solid #434343",
    background: "#15181B3D",
    backdropFilter: "blur(3.88px)",
  };

  // Desktop Style
  const isStable =
    !!event.organizer && event.organizer.toLowerCase().includes("stable");
  const desktopCardStyle: React.CSSProperties = {
    border: isStable ? "0.5px solid #91949926" : "0.5px solid #434343",
    background: "#15181B3D",
    backdropFilter: isStable ? "blur(15px)" : "blur(7px)",
  };
  const desktopDateCardStyle: React.CSSProperties = {
    border: isStable ? "0.5px solid #91949926" : "0.5px solid #434343",
    background: "transparent",
  };

  return (
    <div className="max-sm:w-[87vw] mx-auto"
      role="button"
      //onClick={() => router.push(href)}
      //className="cursor-pointer"
      aria-label={`Open event ${event.title}`}
    >
      {/* ---------- MOBILE LAYOUT ---------- */}
      <div className="md:hidden -mx-4">
        <div className="text-left mb-6 px-0">
          <div className="text-white font-bold md:text-lg">{dateStr}</div>
          <div className="text-gray-400 text-md md:font-medium">{weekdayStr}</div>
        </div>

        <div
          className="p-3 box-border rounded-xl"
          style={mobileCardStyle}
        >
          <div className="flex gap-3 items-start">
            {/* Info column */}
            <div className="flex-1 flex flex-col min-w-0 space-y-1.5">
              <div className="font-inter font-medium text-sm text-gray-400">
                {timeStr}
              </div>

              <h2 className="text-white text-base font-semibold leading-tight break-words max-sm:max-w-[65%]
              ">
                {event.title}
              </h2>

              <div className="flex items-center gap-2">
                <SafeImage
                  src={icon}
                  alt="organizer icon"
                  width={16}
                  height={16}
                  className="object-contain rounded-full"
                  unoptimized
                />
                <span
                  className="font-inter font-medium text-xs text-gray-400 truncate"
                  title={event.organizer ?? "Unknown"}
                >
                  By {event.organizer ?? "Unknown"}
                </span>
              </div>

              <div className="flex items-center gap-2 text-gray-400">
                <FaMapMarkerAlt className="w-3 h-3 flex-shrink-0" />
                <span
                  className="font-inter font-medium text-xs truncate max-sm:max-w-[57%]"
                  title={event.location ?? "Online"}
                >
                  {event.location ?? "Online"}
                </span>
              </div>

              <div className="pt-1">
                <div
                  className="inline-flex items-center gap-1 text-white px-2 py-1 rounded text-xs font-semibold"
                  style={{ backgroundColor: buttonColor }}
                >
                  {goingLabel}
                </div>
              </div>
            </div>

            {/* Poster image */}
            <div className="flex-shrink-0">
              <div className="w-[86px] h-[86px] rounded-md overflow-hidden">
                <SafeImage
                  src={thumb}
                  alt={`${event.title} poster`}
                  width={86}
                  height={86}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- DESKTOP ---------- */}
      <div className="hidden md:flex flex-col md:flex-row gap-4 w-full md:max-w-4xl mx-auto">
        <div
          className="rounded-2xl p-6 text-left min-w-[140px] flex flex-col justify-center"
          style={desktopDateCardStyle}
        >
          <div className="text-white font-bold text-xl mb-1">{dateStr}</div>
          <div className="text-gray-500 text-base font-medium">
            {weekdayStr}
          </div>
        </div>

        {/* Main content */}
        <div
          className="rounded-2xl p-6 flex flex-col md:flex-row items-start justify-between flex-1"
          style={desktopCardStyle}
        >
          <div className="space-y-3 flex-1 w-full">
            <div className="font-inter font-medium text-base text-[#666666]">
              {timeStr}
            </div>
            <h2 className="text-white text-2xl font-bold leading-tight">
              {event.title}
            </h2>
            <div className="flex items-center gap-2">
              <SafeImage
                src={icon}
                alt="organizer icon"
                width={20}
                height={20}
                className="object-contain"
                unoptimized
              />
              <span className="font-inter font-medium text-base text-[#666666]">
                By {event.organizer ?? "Unknown"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="w-4 h-4 text-[#666666]" />
              <span className="font-inter font-medium text-base text-[#666666]">
                {event.location ?? "Online"}
              </span>
            </div>
            <div
              className="inline-flex items-center gap-2 text-white px-3 py-1.5 rounded-md text-sm font-semibold"
              style={{ backgroundColor: buttonColor }}
            >
              {goingLabel}
            </div>
          </div>

          {/* Poster (desktop) */}
          <div className="w-full md:w-auto mt-4 md:mt-0 md:ml-4 flex-shrink-0 md:-mt-2 md:-mr-2">
            <div className="w-full md:w-[156px] md:h-[156px] rounded-xl overflow-hidden">
              <SafeImage
                src={thumb}
                alt={`${event.title} poster`}
                width={156}
                height={156}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
