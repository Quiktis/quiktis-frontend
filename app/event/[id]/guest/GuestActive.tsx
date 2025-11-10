"use client";

import React from "react";
import EventToggle from "../EventToggle";
import { ActionButton, GuestListItem } from "../components";
import type { Guest } from "../components";

type Props = {
  eventId: string;
};

const guestData: Guest[] = [
  { name: "Anjola Adeyemi", status: "Guest approved", id: 1 },
  { name: "Prosper John", status: "Guest approved", id: 2 },
  { name: "Abey Ojomu", status: "Guest approved", id: 3 },
  { name: "Abiola Freez", status: "Guest approved", id: 4 },
  { name: "Marpxist Krek", status: "Guest approved", id: 5 },
];

const GuestActive: React.FC<Props> = ({ eventId }) => {
  return (
    <div className="bg-[#131517] min-h-screen p-4 sm:p-6 md:p-8 text-gray-300 font-sans flex items-center justify-center">
      <div className="max-w-5xl mx-auto w-full mt-40">
        {/* Event Toggle */}
        <div className="mb-8 md:mb-12">
          <EventToggle eventId={eventId} defaultTab="guest" />
        </div>

        {/* Action Buttons */}
        <div className="flex justify-start overflow-x-auto md:overflow-visible mb-6 md:mb-[73px]">
          <div className="flex items-center gap-3 whitespace-nowrap">
            <ActionButton
              icon="/icons/invite-onclick-guest.svg"
              iconBgColor="rgba(255, 242, 0, 0.5)"
              text="Invite Guest"
              iconAlt="Invite Guest"
            />
            <ActionButton
              icon="/icons/share-onclick-event.svg"
              iconBgColor="rgba(111, 79, 242, 0.14)"
              text="Share Event"
              iconAlt="Share Event"
            />
          </div>
        </div>

        <main>
          {/* Guest List Header */}
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-white font-inter font-medium text-[32px] leading-[100%]">
              Guest List
            </h1>
            <span className="text-white font-inter font-medium text-[32px] leading-[100%]">
              {guestData.length}
            </span>
          </div>

          {/* Guest List Items */}
          <div className="space-y-[25px] mb-16 md:mb-[218px]">
            {guestData.map((guest) => (
              <GuestListItem key={guest.id} guest={guest} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default GuestActive;
