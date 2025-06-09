// components/nfts-notifications/TicketCard.tsx
"use client";

import React from "react";

interface TicketCardProps {
  eventName: string;
  ticketType: string;
  quantity: number;
  purchaseDate: string;
}

export default function TicketCard({
  eventName,
  ticketType,
  quantity,
  purchaseDate,
}: TicketCardProps) {
  return (
    <div className="mb-6">
      <h3 className="font-medium mb-2">{eventName}</h3>
      <div className="flex justify-between mb-1">
        <span className="text-sm text-gray-400">Ticket Type:</span>
        <span className="text-sm">{ticketType}</span>
      </div>
      <div className="flex justify-between mb-1">
        <span className="text-sm text-gray-400">Quantity:</span>
        <span className="text-sm">{quantity}</span>
      </div>
      <div className="flex justify-between mb-3">
        <span className="text-sm text-gray-400">Date of Purchase:</span>
        <span className="text-sm">{purchaseDate}</span>
      </div>
      <div className="flex justify-end">
        <a
          href="/concert-ticket"
          className="bg-[#F68B61] text-white text-xs py-1 px-3 rounded-[5px] hover:bg-[#e07b52] transition">
          View Ticket
        </a>
      </div>
    </div>
  );
}
