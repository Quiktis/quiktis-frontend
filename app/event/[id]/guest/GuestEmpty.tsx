"use client";

import React from "react";
import EventToggle from "../EventToggle";
import { ActionButton, GuestEmptyState } from "../components";

type Props = {
  eventId: string;
};

const GuestInactive: React.FC<Props> = ({ eventId }) => {
  return (
    <div className="bg-[#131517] min-h-screen p-4 sm:p-6 md:p-8 text-gray-300 font-sans flex items-center justify-center">
      <div className="max-w-5xl mx-auto w-full mt-40">
        {/* Event Toggle */}
        <div className="mb-8 md:mb-12">
          <EventToggle eventId={eventId} defaultTab="guest" />
        </div>

        {/* Action Buttons */}
        <header className="flex justify-start mb-[73px]">
          <div className="flex items-center gap-3">
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
        </header>

        <main>
          {/* Guest List Header */}
          <div className="flex justify-between items-center mb-[117px]">
            <h1 className="text-white font-inter font-medium text-[32px] leading-[100%]">
              Guest List
            </h1>
            <span className="text-white font-inter font-medium text-[32px] leading-[100%]">
              0
            </span>
          </div>

          {/* Empty State */}
          <GuestEmptyState />
        </main>
      </div>
    </div>
  );
};

export default GuestInactive;
