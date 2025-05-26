"use client";

import React from "react";
import TicketCard from "./TicketCard";

export default function TicketResaleSection() {
  return (
    <section className="text-white p-4 py-6 overflow-hidden">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Tickets</h1>
        <a
          href="/nfts-notification"
          className="text-sm text-gray-400 hover:text-white transition">
          View all
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-x-hidden">
        {Array.from({ length: 8 }).map((_, idx) => (
          <TicketCard key={idx} />
        ))}
      </div>
    </section>
  );
}
