"use client";

import React from "react";
import EventCard from "./EventCard";
import { EventItem } from "@/lib/eventsClient";

const mockEvents: EventItem[] = [
  {
    id: "1",
    title: "Ladies Night Live Music",
    startsAt: new Date().toISOString(),
    organizer: "Yawa Night Club",
    location: "Yawa night club house - Lagos",
    goingLabel: "700k going",
    thumbnail: "/ladies-night-party.svg",
    icon: "/icons/ladies-music-ball.svg",
    buttonColor: "#EA4335",
  },
  {
    id: "2",
    title: "Stable Africa Conference",
    startsAt: new Date().toISOString(),
    organizer: "Stable Africa",
    location: "Stable – Lagos, Nigeria",
    goingLabel: "Manage Events",
    thumbnail: "/ladies-night-party.svg",
    icon: "/icons/stable-africa-ball.svg",
    buttonColor: "#6F4FF2",
  },
];

export default function UpcomingActive({ events }: { events?: EventItem[] }) {
  const data = events && events.length > 0 ? events : mockEvents;

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
