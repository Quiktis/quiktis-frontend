// components/nfts-notifications/NotificationsSection.tsx
"use client";

import React, { useState } from "react";
import TicketCard from "@/components/nfts-notifications/TicketCard";

const TABS = ["Ticket Update", "Event Changes", "Promotional Offers"];

export default function NotificationsSection() {
  const [activeTab, setActiveTab] = useState(0);

  // mock data
  const tickets = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    eventName: "Music Fest 2024",
    ticketType: "VIP",
    quantity: 2,
    purchaseDate: "12th April 2024",
  }));

  return (
    <div className="mb-8 px-20 max-md:px-5">
      <h2 className="text-xl font-bold mb-4">Notifications</h2>
      <div className="flex mb-6 overflow-x-auto">
        {TABS.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className={`pb-2 mr-6 text-xs sm:text-sm font-medium whitespace-nowrap ${
              activeTab === i
                ? "border-b-2 border-[#FF4D2A] text-white"
                : "text-gray-400"
            }`}>
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {tickets.map((t) => (
          <div
            key={t.id}
            className="pr-4 border-r border-gray-800 last:border-r-0">
            <TicketCard
              eventName={t.eventName}
              ticketType={t.ticketType}
              quantity={t.quantity}
              purchaseDate={t.purchaseDate}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
