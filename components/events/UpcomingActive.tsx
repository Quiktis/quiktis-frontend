"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import EventCard from "./EventCard";
import { FiPlus } from "react-icons/fi";
import { useStore } from "@/app/lib/store";
import { EventData } from "@/app/types";
import { redirect } from "next/dist/server/api-utils";

// A simple empty state component
function EmptyState() {
  return (
    <div className="text-center py-10 text-gray-400">
      <p className="text-lg font-medium">You haven’t created any events yet.</p>
      <p className="text-sm mt-2">Click “Create Event” to get started!</p>
    </div>
  );
}

export default function UpcomingActive({ events, pageTitle }: { events: EventData[], pageTitle: string }) {
  //const { data: events, isLoading, isError } = useEvents();
  const { loading, message, messageType } = useStore();

  if (loading) {
    return <p className="text-center text-gray-400">Loading events...</p>;
  }

  if (messageType === "error") {
    return (
      <p className="text-center text-red-500">
        Could not load events. Please try again later.
      </p>
    );
  }

  if (events.length === 0) {
    return <div className="w-[95%] lg:w-[90%] xl:w-[85%] mx-auto ">
        <div className="flex flex-col items-center justify-center  py-8">
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
              No upcoming Events
            </h2>
            <p className="mb-8 text-sm md:text-base text-gray-400 max-w-md">
              No upcoming events at this time. Take a bold step, Host one!
            </p>
          </div>

          

          <Link href={"/create-event"}
            className="bg-[#252729] hover:bg-[#2A2C30] text-[#919499] px-6 py-3 rounded-xl transition-colors flex items-center gap-3"
            aria-label="Create event"
          >
            <div className="bg-[#2A2C30] rounded-full p-1.5">
              <FiPlus className="h-4 w-4" />
            </div>
            <span className="text-[16px]">Create event</span>
          </Link>
        </div>
      </div>
;
  }

  return (
    <section className="relative mt-[6em] md:mt-[9em] z-50 mb-[4em]">
  
    
        <div className="md:w-fit mx-auto grid grid-cols-1 gap-8 max-sm:gap-6 ">
          <h2 className="text-2xl max-sm:mt-[1em] md:text-[1.4em] lg:text-[1.6em] font-semibold font-inter">{pageTitle}</h2>
          {events.map((event) => (
          <EventCard
            key={event.eventId}
            redirectLink={`/event/${event.eventId}`}
            event={{
              id: event.eventId,
              title: event.eventName,
              startsAt: event.startDate,
              organizer: event.organiser?.name || "Unknown Organizer",
              location: event.location,
              goingLabel: `${event.tickets?.length || 0} tickets`,
              thumbnail: event.coverImage,
              icon: "/icons/placeholder.svg", // map eventType → icons if needed
              // buttonColor: event.eventTheme || "#6F4FF2",
            }}
          />
        ))}
        </div>
        
   
    </section>
  );
}
