"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import EventCard from "./EventCard";
import EventsEmptyInline from "./EventsPastInline";
import { useEvents } from "@/app/utils/useEvents";
import { FiPlus } from "react-icons/fi";
import { useUser } from "@/app/context/UserContext";

function EmptyState() {
  return (
    <div className="text-center py-10 text-gray-400">
      <p className="text-lg font-medium">You haven’t created any events yet.</p>
      <p className="text-sm mt-2">Click “Create Event” to get started!</p>
    </div>
  );
}

export default function ExploreEvents() {
  const { data: events, isLoading, isError } = useEvents();
  const { user } = useUser();

  if (isLoading) {
    return <p className="text-center text-gray-400">Loading events...</p>;
  }

  if (isError) {
    return (
      <p className="text-center text-red-500">
        Could not load events. Please try again later.
      </p>
    );
  }

  if (events?.length === 0) {
    return (
      <div className="w-[70%] lg:w-[90%] xl:w-[85%] mx-auto">
        <EventsEmptyInline tab={"upcoming"} />
      </div>
    );
  }

  return (
    <section className="mt-[7em] md:mt-[10em]">
      <div className="flex flex-col gap-8 w-[98] mx-auto md:w-full md:max-w-5xl md:pr-12">
        <p className="ml-0 mr-auto w-[87vw] text-center font-bold text-xl">
          Explore Events
        </p>
        {events?.map((event) => (
          <EventCard
            key={event.id}
            event={{
              id: event.id,
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
