"use client";

import React from "react";
import DateDisplay from "./components/DateDisplay";
import EventMeta from "./components/EventMeta";
import EventThumbnail from "./components/EventThumbnail";

interface CardEventProps {
  date: string;
  weekday: string;
  time: string;
  title: string;
  organizer: string;
  organizerIcon?: string;
  location: string;
  thumbnail: string;
  isLive?: boolean;
  onManageClick?: () => void;
}

export default function CardEvent({
  date,
  weekday,
  time,
  title,
  organizer,
  organizerIcon = "/stable-africa-image.jpg",
  location,
  thumbnail,
  isLive = false,
  onManageClick,
}: CardEventProps) {
  const isStable = organizer.toLowerCase().includes("stable");

  const mainCardStyle: React.CSSProperties = {
    border: isStable ? "0.5px solid #91949926" : "0.5px solid #434343",
    background: "#15181B3D",
    backdropFilter: isStable ? "blur(15px)" : "blur(7px)",
  };

  return (
    <div className="w-full">
      {/* MOBILE */}
      <div className="md:hidden mb-6">
        <div className="w-[calc(100vw-32px)] mx-auto">
          <DateDisplay
            date={date}
            weekday={weekday}
            isLive={isLive}
            variant="mobile"
          />

          <div className="p-3 box-border rounded-xl" style={mainCardStyle}>
            <div className="flex gap-3 items-start">
              {/* Info column */}
              <div className="flex-1 flex flex-col min-w-0 space-y-1.5">
                <div className="font-inter font-medium text-sm text-gray-400">
                  {time}
                </div>

                <h2 className="text-white text-base font-semibold leading-tight break-words max-w-[65%]">
                  {title}
                </h2>

                <EventMeta
                  organizerIcon={organizerIcon}
                  organizer={organizer}
                  location={location}
                  variant="mobile"
                />

                <div className="mt-1">
                  <button
                    onClick={onManageClick}
                    className="inline-flex items-center justify-center gap-1 bg-[#6F4FF2] text-white px-3 py-1.5 rounded-[6px] text-[13px] font-semibold leading-none whitespace-nowrap hover:opacity-90 transition-opacity"
                  >
                    Manage Event
                  </button>
                </div>
              </div>

              {/* Poster image */}
              <EventThumbnail src={thumbnail} alt={title} variant="mobile" />
            </div>
          </div>
        </div>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:flex gap-[34px] w-full">
        <DateDisplay
          date={date}
          weekday={weekday}
          isLive={isLive}
          variant="desktop"
        />

        <div
          className="rounded-[15px] p-6 flex items-start justify-between flex-1 w-[727px] h-[234px] border-[0.5px] border-[#91949926] bg-[#15181B3D]"
          style={{
            backdropFilter: "blur(15px)",
          }}
        >
          <div className="space-y-4 flex-1 w-full">
            <div className="text-[#666666] font-medium text-[24px] leading-none">
              {time}
            </div>

            <h2 className="text-white font-semibold text-[30px] leading-none m-0 mt-2">
              {title}
            </h2>

            <EventMeta
              organizerIcon={organizerIcon}
              organizer={organizer}
              location={location}
              variant="desktop"
            />

            <div className="mt-1">
              <button
                onClick={onManageClick}
                className="w-[127px] h-[31px] rounded-[4px] bg-[#6F4FF2] text-white font-semibold text-[15px] leading-none border-0 cursor-pointer transition-opacity hover:opacity-90"
              >
                Manage Event
              </button>
            </div>
          </div>

          <EventThumbnail src={thumbnail} alt={title} variant="desktop" />
        </div>
      </div>
    </div>
  );
}
