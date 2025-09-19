"use client";

import React from "react";
import EventCard from "./EventCard";
import { EventItem } from "@/lib/eventsClient";

const mockPastEvents: EventItem[] = [
  {
    id: "3",
    title: "Ladies Night Live Music",
    startsAt: new Date().toISOString(),
    organizer: "Yawa Night Club",
    location: "Yawa night club house - Lagos",
    goingCount: 700000,
    thumbnail: "/ladies-night-party.svg",
    icon: "/icons/ladies-music-ball.svg",
  },
  {
    id: "4",
    title: "Stable Africa Conference",
    startsAt: new Date().toISOString(),
    organizer: "Stable Africa",
    location: "Stable – Lagos, Nigeria",
    goingCount: 200000,
    thumbnail: "/ladies-night-party.svg",
    icon: "/icons/stable-africa-ball.svg",
  },
];

export default function PastActive({ events }: { events?: EventItem[] }) {
  const data = events && events.length > 0 ? events : mockPastEvents;

  return (
    <section className="mt-4 md:mt-14">
      <div className="flex flex-col gap-6 w-[90%] mx-auto md:w-full md:max-w-5xl md:pr-12">
        {data.map((e) => (
          <EventCard key={e.id} event={e} />
        ))}
      </div>
    </section>
  );
}
