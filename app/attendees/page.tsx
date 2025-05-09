"use client";

import React from "react";
import AttendeesTable from "@/components/eventstats/AttendeesTable";

export default function AttendeesPage() {
  return (
    <main className="bg-transparent text-white min-h-screen px-6">
      <div className="py-10">
        <h1 className="text-4xl font-bold mb-2">Attendees</h1>
        <p className="text-gray-400 mb-6">
          View and manage the list of people who purchased tickets.
        </p>

        <div className="overflow-x-auto">
          <AttendeesTable />
        </div>
      </div>
    </main>
  );
}
