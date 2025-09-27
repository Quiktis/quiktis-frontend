// lib/useEvents.ts
import { useQuery } from "@tanstack/react-query";

export interface EventItem {
  id: string;
  eventName: string;
  description: string;
  location: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  coverImage: string;
  eventType: "paid" | "free";
  organiser: { id: string; name: string };
  tickets: Array<{ id: string; name: string; price: number }>;
}

async function fetchEvents(): Promise<EventItem[]> {
  const res = await fetch("/api/events/all", {
    method: "GET",
    credentials: "include", // send cookies
  });

  if (!res.ok) {
    throw new Error("Failed to fetch events");
  }

  const data = await res.json();
  return data?.data?.events || [];
}

export function useEvents() {
  return useQuery<EventItem[]>({
    queryKey: ["events"],
    queryFn: fetchEvents,
  });
}
