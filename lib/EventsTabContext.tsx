"use client";

import React, { createContext, useContext, useState } from "react";

type Tab = "upcoming" | "past";

interface EventsTabContextType {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

const EventsTabContext = createContext<EventsTabContextType | undefined>(
  undefined
);

export function EventsTabProvider({ children }: { children: React.ReactNode }) {
  const [activeTab, setActiveTab] = useState<Tab>("upcoming");

  return (
    <EventsTabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </EventsTabContext.Provider>
  );
}

export function useEventsTab() {
  const ctx = useContext(EventsTabContext);
  if (!ctx) {
    throw new Error("useEventsTab must be used inside EventsTabProvider");
  }
  return ctx;
}
