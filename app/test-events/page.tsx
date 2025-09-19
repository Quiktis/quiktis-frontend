"use client";

import React from "react";
import EventCard from "@/components/events/EventCard";

const sampleEvent = {
  id: "t1",
  title: "Ladies Night Live Music",
  startsAt: "2025-09-30T19:00:00Z",
  organizer: "Yawa Night Club",
  location: "Yawa night club house - Lagos",
  goingCount: 700000,
  thumbnail: "/ladies-night-party.svg",
};

export default function TestEventsPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-2xl mb-6">Test Events</h1>
      <div className="flex flex-col gap-6 max-w-[1100px]">
        <EventCard event={{ ...sampleEvent, id: "t1" }} />
        <EventCard event={{ ...sampleEvent, id: "t2" }} />
      </div>
    </main>
  );
}
