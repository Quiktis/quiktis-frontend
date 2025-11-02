"use client";

import React, { useState } from "react";
import UpcomingActive from "@/components/events/UpcomingActive";
import PastActive from "@/components/events/PastActive";
import EventsEmptyState from "@/components/events/EventsEmptyState";
import { useEvents } from "@/app/utils/useEvents";
import { useUser } from "@/app/context/UserContext";

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");
  const { data: events, isLoading, isError } = useEvents();
  const { user } = useUser();

  const userEvents =
    events?.filter((event) => event.organiser?.id === user?.userId) || [];

  const now = new Date();
  const upcomingEvents = userEvents.filter(
    (event) => new Date(event.startDate) >= now
  );
  const pastEvents = userEvents.filter(
    (event) => new Date(event.startDate) < now
  );

  const hasUpcomingEvents = upcomingEvents.length > 0;
  const hasPastEvents = pastEvents.length > 0;

  return (
    <div className="min-h-screen bg-[#131517] text-white">
      {/* Header with toggle */}
      <div className="w-[95%] lg:w-[90%] xl:w-[85%] mx-auto pt-8 pb-4">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Events</h1>

          {/* Tab Toggle */}
          <div className="flex items-center gap-2 bg-[#1A1D21] rounded-lg p-1">
            <button
              onClick={() => setActiveTab("upcoming")}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === "upcoming"
                  ? "bg-[#252729] text-white"
                  : "text-[#919499] hover:text-white"
              }`}
            >
              Upcoming
            </button>
            <button
              onClick={() => setActiveTab("past")}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === "past"
                  ? "bg-[#252729] text-white"
                  : "text-[#919499] hover:text-white"
              }`}
            >
              Past
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      {isLoading ? (
        <div className="text-center py-20">
          <p className="text-gray-400">Loading events...</p>
        </div>
      ) : isError ? (
        <div className="text-center py-20">
          <p className="text-red-500">
            Could not load events. Please try again later.
          </p>
        </div>
      ) : (
        <>
          {/* Upcoming Tab */}
          {activeTab === "upcoming" && (
            <>
              {hasUpcomingEvents ? (
                <UpcomingActive />
              ) : (
                <EventsEmptyState tab="upcoming" />
              )}
            </>
          )}

          {/* Past Tab */}
          {activeTab === "past" && (
            <>
              {hasPastEvents ? (
                <PastActive
                  events={pastEvents.map((event) => ({
                    id: event.id,
                    title: event.eventName,
                    startsAt: event.startDate,
                    organizer: event.organiser?.name || "Unknown Organizer",
                    location: event.location,
                    goingLabel: `${event.tickets?.length || 0} tickets`,
                    thumbnail: event.coverImage,
                    icon: "/icons/placeholder.svg",
                  }))}
                />
              ) : (
                <EventsEmptyState tab="past" />
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}
