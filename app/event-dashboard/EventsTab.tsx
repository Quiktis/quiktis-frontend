"use client";

import React, { useState } from "react";
import CardEvent from "./CardEvent";
import EventsEmptyInline from "@/components/events/EventsPastInline";
import { useRouter } from "next/navigation";
import CreateEventButton from "./components/CreateEventButton";
import FilterToggle from "./components/FilterToggle";

export default function EventsTab() {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState<"upcoming" | "past">(
    "upcoming"
  );

  // Mock data - replace with actual data from your API
  const upcomingEvents = [
    {
      id: 1,
      date: "September 30",
      weekday: "Tuesday",
      time: "7:00PM",
      title: "Stable Africa Conference",
      organizer: "Stable Africa",
      organizerIcon: "/stable-africa-image.jpg",
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
      organizerIcon: "/stable-africa-image.jpg",
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
          <h1 className="uppercase text-[40px] md:text-[96px] text-left text-[var(--Color-7,#FFF8EC)] md:text-white font-[Silkscreen] font-bold leading-[80%] tracking-[-0.2em]">
            DARE
          </h1>
          <CreateEventButton onClick={handleCreateEvent} />
        </div>

        {/* Events Section - Centered */}
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-inter font-semibold text-[40px] leading-[121%] tracking-[-0.02em] text-[#FFFFFF]">
              Events
            </h2>

            {/* Upcoming/Past Toggle */}
            <FilterToggle
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
            />
          </div>

          {/* Events List */}
          <div className={activeFilter === "past" ? "mt-28 md:mt-32" : "mt-8"}>
            <div className="flex flex-col gap-[70px]">
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
    </div>
  );
}
