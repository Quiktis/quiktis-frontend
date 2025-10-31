"use client";

import React, { useState } from "react";
import CardEvent from "./CardEvent";
import EventsEmptyInline from "@/components/events/EventsPastInline";
import { useRouter } from "next/navigation";

export default function EventsTab() {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState<"upcoming" | "past">(
    "upcoming"
  );

  const upcomingEvents = [
    {
      id: 1,
      date: "September 30",
      weekday: "Tuesday",
      time: "7:00PM",
      title: "Stable Africa Conference",
      organizer: "Stable Africa",
      organizerIcon: "/icons/ladies-music-ball.svg",
      location: "Stable-Lagos, Nigeria",
      thumbnail: "/ladies-night-party.svg",
      isLive: true,
    },
    {
      id: 2,
      date: "September 30",
      weekday: "Tuesday",
      time: "7:00PM",
      title: "Stable Africa Conference",
      organizer: "Stable Africa",
      organizerIcon: "/icons/ladies-music-ball.svg",
      location: "Stable-Lagos, Nigeria",
      thumbnail: "/ladies-night-party.svg",
      isLive: true,
    },
  ];

  const pastEvents: typeof upcomingEvents = [];

  const displayedEvents =
    activeFilter === "upcoming" ? upcomingEvents : pastEvents;

  const handleCreateEvent = () => {
    router.push("/create-event");
  };

  const handleManageEvent = (eventId: number) => {
    console.log("Manage event:", eventId);
  };

  return (
    <div className="min-h-screen pb-60">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 pt-[90px]">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-8 md:mb-12">
          <h1
            className="uppercase text-[40px] md:text-[96px] text-left text-[var(--Color-7,#FFF8EC)] md:text-white"
            style={{
              fontFamily: "Silkscreen",
              fontWeight: 700,
              lineHeight: "80%",
              letterSpacing: "-20%",
            }}
          >
            DARE
          </h1>
          <button
            onClick={handleCreateEvent}
            className="flex items-center justify-center gap-2 w-[140px] h-[40px] md:w-[195px] md:h-[52px] rounded-[8.34px] bg-[#252729]"
            style={
              {
                //n.b just to keep any tailwind if need be
              }
            }
          >
            <svg
              width="23.355449676513672"
              height="23.355449676513672"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.75829 17.5166C13.5954 17.5166 17.5166 13.5954 17.5166 8.75829C17.5166 3.92122 13.5954 0 8.75829 0C3.92122 0 0 3.92122 0 8.75829C0 13.5954 3.92122 17.5166 8.75829 17.5166Z"
                fill="#919499"
                fillOpacity="0.25"
              />
              <path
                d="M8.75879 4.86572V12.6509M12.6514 8.7583H4.86621"
                stroke="#919499"
                strokeWidth="1.16777"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
            </svg>
            <span
              className="text-[14px] md:text-[18.72px]"
              style={{
                fontFamily: "Inter",
                fontWeight: 500,
                lineHeight: "121%",
                letterSpacing: "0%",
                color: "#919499",
              }}
            >
              Create event
            </span>
          </button>
        </div>

        {/* Events Section - Centered */}
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2
              style={{
                fontFamily: "Inter",
                fontWeight: 600,
                fontSize: "40px",
                lineHeight: "121%",
                letterSpacing: "-4%",
                color: "#FFFFFF",
              }}
            >
              Events
            </h2>

            {/* Upcoming/Past Toggle */}
            <div
              className="flex items-center gap-2"
              style={{
                width: "177.9669189453125px",
                height: "44.152099609375px",
                borderRadius: "67.93px",
                background: "#25272959",
                backdropFilter: "blur(6.792630195617676px)",
                padding: "6px",
              }}
            >
              <button
                onClick={() => setActiveFilter("upcoming")}
                style={{
                  width:
                    activeFilter === "upcoming" ? "98.4931411743164px" : "auto",
                  height:
                    activeFilter === "upcoming"
                      ? "31.24610137939453px"
                      : "auto",
                  borderRadius: "67.93px",
                  background:
                    activeFilter === "upcoming" ? "#9194993D" : "transparent",
                  fontFamily: "Inter",
                  fontWeight: 600,
                  fontSize: "13.59px",
                  lineHeight: "121%",
                  letterSpacing: "-4%",
                  color: activeFilter === "upcoming" ? "#FFFFFF" : "#919499",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  padding:
                    activeFilter === "upcoming" ? "8px 16px" : "8px 12px",
                }}
              >
                Upcoming
              </button>
              <button
                onClick={() => setActiveFilter("past")}
                style={{
                  width:
                    activeFilter === "past" ? "98.4931411743164px" : "auto",
                  height:
                    activeFilter === "past" ? "31.24610137939453px" : "auto",
                  borderRadius: "67.93px",
                  background:
                    activeFilter === "past" ? "#9194993D" : "transparent",
                  fontFamily: "Inter",
                  fontWeight: 600,
                  fontSize: "13.59px",
                  lineHeight: "121%",
                  letterSpacing: "-4%",
                  color: activeFilter === "past" ? "#FFFFFF" : "#919499",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  padding: activeFilter === "past" ? "8px 16px" : "8px 12px",
                }}
              >
                Past
              </button>
            </div>
          </div>

          {/* Events List */}
          <div
            className={activeFilter === "past" ? "mt-28 md:mt-32" : "mt-8"}
            style={{ display: "flex", flexDirection: "column", gap: "70px" }}
          >
            {displayedEvents.length > 0 ? (
              displayedEvents.map((event) => (
                <CardEvent
                  key={event.id}
                  date={event.date}
                  weekday={event.weekday}
                  time={event.time}
                  title={event.title}
                  organizer={event.organizer}
                  organizerIcon={event.organizerIcon}
                  location={event.location}
                  thumbnail={event.thumbnail}
                  isLive={event.isLive}
                  onManageClick={() => handleManageEvent(event.id)}
                />
              ))
            ) : (
              <EventsEmptyInline tab={activeFilter} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
