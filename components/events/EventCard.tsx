"use client";

import React from "react";
import SafeImage from "../SafeImage";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { EventItem } from "@/lib/eventsClient";
import { formatDateShort, getDayFromISO, getWeekday, getTime } from "@/app/utils/utils";
import { useStore } from "@/app/lib/store";
import Link from "next/link";

export default function EventCard({ event }: { event: EventItem }) {
  const { user } = useStore();
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

 

  const href = event.id ? `/events/${event.id}` : "#";

  // Mobile  Style
  const mobileCardStyle: React.CSSProperties = {
    border: "0.28px solid #434343",
    background: "#15181B3D",
    backdropFilter: "blur(3.88px)",
  };



  return (

    <>
      {/* ---------- MOBILE LAYOUT ---------- */}
      <Link href={`/event/${event.id}`} className="md:hidden">
        <div className="text-left mb-6 px-0">
          <div className="text-white font-semibold md:text-lg">{formatDateShort(event.startsAt)}</div>
          <div className="text-gray-400 text-md md:font-medium">{getWeekday(event.startsAt)}</div>
        </div>

        <div
          className="px-3.5 py-2.5 box-border rounded-xl"
          style={mobileCardStyle}
        >
          <div className="flex gap-3 items-start w-full">
            {/* Info column */}
            <div className="flex-1 flex flex-col min-w-0 space-y-1.5">
              <div className="font-inter font-medium text-sm text-gray-400">
                {getTime(event.startsAt)}
              </div>

              <h3 className="text-white hover:underline text-base font-semibold leading-tight break-words max-sm:max-w-[65%]
              ">
                {event.title}
              </h3>

              <div className="flex items-center gap-2">
                <SafeImage
                  src={icon}
                  alt="organizer icon"
                  width={17}
                  height={17}
                  className="object-contain rounded-full"
                  unoptimized
                />
                <span
                  className="font-inter font-medium text-xs text-gray-400 truncate my-auto"
                  title={event.organizer ?? "Unknown"}
                >
                  By {user?.name}
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

              <div className="flex gap-2 pt-1">
              
              {/*<Link href={`/event/${event.id}`}
              className="inline-flex items-center gap-2 text-white px-3 py-1 rounded-md text-sm font-semibold w-fit cursor-pointer bg-[#6F4FF2] text-[0.8em]"
            >
              Manage event
            </Link>*/}
            <div
              className="inline-flex items-center gap-2 text-white px-3 py-1 rounded-md text-sm font-semibold w-fit bg-[#EA4335] text-[0.8em]"
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
      </Link>

      {/* ---------- DESKTOP ---------- */}

     
      
      <div className="hidden md:flex flex-col md:flex-row gap-4 w-fit max-md:w-full  mx-auto">
        
        <div className="grid  md:grid-cols-[13em_28em] lg:grid-cols-[13em_37em] h-[13em] gap-8">
           <div
          className="rounded-2xl p-4.5 text-left border border-gray-800/85 w-full h-full"
          //style={desktopDateCardStyle}
        >
          <div className="text-white font-medium text-xl ">{formatDateShort(event.startsAt)}</div>
          <div className="text-gray-500 text-base font-medium">
            {getWeekday(event.startsAt)}
          </div>
        </div>

        <div
          className="rounded-2xl px-6 py-2 flex justify-between items-center border border-gray-800/85"
          //style={desktopCardStyle}
        >
          <div className="flex flex-col gap-2 w-full">
            <div className="font-inter font-medium text-base text-[#666666]">
              {getTime(event.startsAt)}
            </div>
            <Link href={`/event/${event.id}`} className="text-white hover:underline  text-2xl cursor-pointer font-bold leading-tight">
              {event.title}
            </Link>
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
            <span className="space-x-2">
              {(user?.name === event.organizer) && <Link href={`/event/${event.id}`}
              className="inline-flex items-center gap-2 text-white px-3 py-1 rounded-md text-sm font-semibold w-fit cursor-pointer bg-[#6F4FF2]"
            >
              Manage event
            </Link>  }
            <div
              className="inline-flex items-center gap-2 text-white px-3 py-1 rounded-md text-sm font-semibold w-fit bg-[#EA4335]"
            >
              {goingLabel}
            </div>
            </span>
            
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
       

        {/* Main content */}
        
      </div>
      </>
  );
}
