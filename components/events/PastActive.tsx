"use client";

import React from "react";
import EventCard from "./EventCard";
import { EventItem } from "@/lib/eventsClient";

export default function PastActive({ events }: { events?: EventItem[] }) {
  if (!events || events.length === 0) {
    return null;
  }

  return (
    <section className="mt-4 md:mt-14">
      <div className="flex flex-col gap-6 w-[90%] mx-auto md:w-full md:max-w-5xl md:pr-12">
        {events.map((e) => (
          <EventCard key={e.id} event={e} />
        ))}
      </div>
    </section>
  );
}
