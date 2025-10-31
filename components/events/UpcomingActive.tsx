"use client";

import React from "react";
import EventCard from "./EventCard";
import { useEvents } from "@/app/utils/useEvents";
import { useUser } from "@/app/context/UserContext";

export default function UpcomingActive() {
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

  const userEvents =
    events?.filter((event) => event.organiser?.id === user?.userId) || [];

  const now = new Date();
  const upcomingEvents = userEvents.filter(
    (event) => new Date(event.startDate) >= now
  );

  if (upcomingEvents.length === 0) {
    return null;
  }

  return (
    <section className="mt-[7em] md:mt-[10em]">
      <div className="flex flex-col gap-8 w-[98] mx-auto md:w-full md:max-w-5xl md:pr-12">
        {upcomingEvents.map((event) => (
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
