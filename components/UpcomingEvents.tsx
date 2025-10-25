"use client";
import React from "react";
import NewEventCard from "./search/NewEventCard";
import { useGetAllEvents } from "@/ApiServices/queries";

export default function UpcomingEvents() {
  const {
    data: events,
    isLoading: loadingEvent,
    isError: errorEvent,
  } = useGetAllEvents();

  return (
    <section className="py-[3.5em]">
      <h1 className="text-3xl font-bold mb-6">Upcoming Events</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {events && events.length > 0 &&
          events.map((event: any, index: number) => (
            <NewEventCard
              key={index}
              image={event.bannerImage ?? ""}
              title={event.title}
              event={event}
              description={event.description ?? ""}
              price={event.tickets?.[0]?.price ?? ""}
              eventId={event.id ?? ""}
              startDate={event.startDate ?? ""}
              startTime={event.startTime ?? ""}
              eventSlug={event.slug ?? ""}
              location={event.location ?? ""}
            />
          ))}
      </div>
    </section>
  );
}
