"use client";

import React from "react";
import SafeImage from "@/components/SafeImage";
import { FaMapMarkerAlt } from "react-icons/fa";

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
  organizerIcon = "/icons/ladies-music-ball.svg",
  location,
  thumbnail,
  isLive = false,
  onManageClick,
}: CardEventProps) {
  const isStable = organizer.toLowerCase().includes("stable");

  const dateCardStyle: React.CSSProperties = {
    border: isStable ? "0.5px solid #91949926" : "0.5px solid #434343",
    background: "transparent",
  };

  const mainCardStyle: React.CSSProperties = {
    border: isStable ? "0.5px solid #91949926" : "0.5px solid #434343",
    background: "#15181B3D",
    backdropFilter: isStable ? "blur(15px)" : "blur(7px)",
  };

  return (
    <div className="w-full">
      <div className="md:hidden mb-6">
        <div className="w-[calc(100vw-32px)] mx-auto">
          <div className="flex items-center justify-between mb-3">
            <div className="text-left">
              <div className="text-white font-semibold text-base">{date}</div>
              <div className="text-gray-400 text-sm">{weekday}</div>
            </div>
            {isLive && (
              <div className="text-red-500 font-semibold text-sm">LIVE.</div>
            )}
          </div>

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

                <div className="flex items-center gap-2">
                  <SafeImage
                    src={organizerIcon}
                    alt="organizer icon"
                    width={16}
                    height={16}
                    className="object-contain rounded-full"
                    unoptimized
                  />
                  <span className="font-inter font-medium text-xs text-gray-400 truncate">
                    By {organizer}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-gray-400">
                  <FaMapMarkerAlt className="w-3 h-3 flex-shrink-0" />
                  <span className="font-inter font-medium text-xs truncate max-w-[57%]">
                    {location}
                  </span>
                </div>

                <div className="pt-1">
                  <button
                    onClick={onManageClick}
                    className="inline-flex items-center gap-1 text-white px-3 py-1 rounded text-xs font-semibold whitespace-nowrap"
                    style={{ backgroundColor: "#6F4FF2" }}
                  >
                    Manage Event
                  </button>
                </div>
              </div>

              {/* Poster image */}
              <div className="flex-shrink-0">
                <div className="w-[86px] h-[86px] rounded-md overflow-hidden">
                  <SafeImage
                    src={thumbnail}
                    alt={title}
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
      </div>

      <div className="hidden md:flex gap-[34px] w-full">
        {/* Left Side  */}
        <div
          className="rounded-2xl p-6 text-left flex flex-col justify-between"
          style={{
            width: "222px",
            height: "234px",
            borderRadius: "15px",
            border: "0.5px solid #91949926",
            background: "#15181B3D",
            backdropFilter: "blur(15px)",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "Inter",
                fontSize: "20px",
                fontWeight: 500,
                lineHeight: "100%",
                letterSpacing: "0%",
                color: "#FFFFFF",
                marginBottom: "8px",
              }}
            >
              {date}
            </div>
            <div
              style={{
                fontFamily: "Inter",
                fontSize: "20px",
                fontWeight: 500,
                lineHeight: "100%",
                letterSpacing: "0%",
                color: "#666666",
              }}
            >
              {weekday}
            </div>
          </div>
          {isLive && (
            <div
              style={{
                fontFamily: "Inter",
                fontSize: "32px",
                fontWeight: 500,
                lineHeight: "100%",
                letterSpacing: "0%",
                color: "#FF0000",
              }}
            >
              LIVE.
            </div>
          )}
        </div>

        {/* Right Side */}
        <div
          className="rounded-2xl p-6 flex items-start justify-between flex-1"
          style={{
            width: "727px",
            height: "234px",
            borderRadius: "15px",
            border: "0.5px solid #91949926",
            background: "#15181B3D",
            backdropFilter: "blur(15px)",
          }}
        >
          <div className="space-y-4 flex-1 w-full">
            <div
              style={{
                fontFamily: "Inter",
                fontSize: "24px",
                fontWeight: 500,
                lineHeight: "100%",
                letterSpacing: "0%",
                color: "#666666",
              }}
            >
              {time}
            </div>

            <h2
              style={{
                fontFamily: "Inter",
                fontWeight: 600,
                fontSize: "30px",
                lineHeight: "100%",
                letterSpacing: "0%",
                color: "#FFFFFF",
                margin: 0,
                marginTop: "8px",
              }}
            >
              {title}
            </h2>

            <div
              className="flex items-center gap-2"
              style={{ marginTop: "12px" }}
            >
              <SafeImage
                src={organizerIcon}
                alt="organizer icon"
                width={26}
                height={26}
                className="object-cover rounded-full"
                style={{
                  width: "26px",
                  height: "26px",
                  borderRadius: "50%",
                  flexShrink: 0,
                }}
                unoptimized
              />
              <span
                style={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontSize: "20px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#666666",
                }}
              >
                By {organizer}
              </span>
            </div>

            <div
              className="flex items-center gap-2"
              style={{ marginTop: "12px" }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 20 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ flexShrink: 0 }}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 9.75C0 4.3655 4.365 0 9.75 0C15.135 0 19.5 4.366 19.5 9.7505C19.5 13.2445 17.697 16.1835 15.737 18.352C13.771 20.528 11.574 22.01 10.6185 22.605C10.3584 22.7688 10.0573 22.8556 9.75 22.8556C9.44266 22.8556 9.14158 22.7688 8.8815 22.605C7.9265 22.01 5.729 20.528 3.763 18.352C1.803 16.183 0 13.244 0 9.75Z"
                  fill="#666666"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.50195 13.9072C10.5628 13.9072 11.5802 13.4858 12.3304 12.7357C13.0805 11.9855 13.502 10.9681 13.502 9.90723C13.502 8.84636 13.0805 7.82894 12.3304 7.0788C11.5802 6.32865 10.5628 5.90723 9.50195 5.90723C8.44109 5.90723 7.42367 6.32865 6.67353 7.0788C5.92338 7.82894 5.50195 8.84636 5.50195 9.90723C5.50195 10.9681 5.92338 11.9855 6.67353 12.7357C7.42367 13.4858 8.44109 13.9072 9.50195 13.9072Z"
                  fill="#131517"
                />
              </svg>
              <span
                style={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontSize: "20px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#666666",
                }}
              >
                {location}
              </span>
            </div>

            <button
              onClick={onManageClick}
              style={{
                width: "127px",
                height: "31px",
                borderRadius: "4.61px",
                background: "#6F4FF2",
                fontFamily: "Inter",
                fontWeight: 600,
                fontSize: "15px",
                lineHeight: "100%",
                letterSpacing: "-7%",
                color: "#FFFFFF",
                border: "none",
                cursor: "pointer",
                transition: "opacity 0.2s ease",
                marginTop: "12px",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Manage Event
            </button>
          </div>

          {/* Event Thumbnail */}
          <div
            className="flex-shrink-0"
            style={{ marginTop: "-12px", marginRight: "-12px" }}
          >
            <div
              className="overflow-hidden"
              style={{
                width: "156px",
                height: "156px",
                borderRadius: "11.82px",
              }}
            >
              <SafeImage
                src={thumbnail}
                alt={title}
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
