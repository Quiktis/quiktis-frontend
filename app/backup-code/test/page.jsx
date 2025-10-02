"use client";
import React, { useRef } from "react";
import { toPng } from "html-to-image";
import download from "downloadjs";

const Ticket = () => {
  const ticketRef = useRef();

  const handleDownload = async () => {
    if (ticketRef.current) {
      const dataUrl = await toPng(ticketRef.current);
      download(dataUrl, "e-ticket.png");
    }
  };

  return (
    <div>
      <div ref={ticketRef} className="z-50 p-4 bg-white shadow-md w-fit">
        {/* Your e-ticket content */}
        <h1>Event Name</h1>
        <p>Ticket ID: 123456</p>
        <p>Date: 2025-06-01</p>
        <p>Venue: Example Hall</p>
      </div>
      <button
        onClick={handleDownload}
        className="relative z-50 mt-4 p-2 bg-blue-500 text-white"
      >
        Download Ticket
      </button>
    </div>
  );
};

export default Ticket;
