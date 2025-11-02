"use client";

import React from "react";
import EventToggle from "../EventToggle";

const InviteGuestIcon = ({ className }: { className?: string }) => (
  <img
    src="/icons/invite-onclick-guest.svg"
    alt="Invite Guest"
    className={className}
  />
);

const ShareEventIcon = ({ className }: { className?: string }) => (
  <img
    src="/icons/share-onclick-event.svg"
    alt="Share Event"
    className={className}
  />
);

const CountingIcon = ({ className }: { className?: string }) => (
  <img
    src="/icons/counting-registration.svg"
    alt="Guest Count Icon"
    className={className}
  />
);

type Props = {
  eventId: string;
};

interface Guest {
  name: string;
  status: "Guest approved";
  id: number;
}

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
        <div className="flex justify-start overflow-x-auto md:overflow-visible mb-6 md:mb-[73px]">
          <div className="flex items-center gap-3 whitespace-nowrap">
            <button
              className="flex items-center gap-4 rounded-[11.66px] backdrop-blur-[13.11px] hover:bg-white/10 transition-colors cursor-pointer flex-none"
              style={{
                width: "237.89px",
                height: "55.97px",
                border: "0.33px solid #91949926",
                background: "#FFFFFF05",
                justifyContent: "flex-start",
                padding: "0 10px",
              }}
            >
              <div
                className="rounded-lg flex-shrink-0 relative overflow-hidden"
                style={{
                  backgroundColor: "rgba(255, 242, 0, 0.5)",
                  width: "33.438px",
                  height: "33.438px",
                }}
              >
                <img
                  src="/icons/invite-onclick-guest.svg"
                  alt="Invite Guest Icon"
                  className="absolute bottom-0 left-0 w-full"
                  style={{ height: "auto", objectFit: "fill" }}
                />
              </div>
              <span
                style={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontSize: "17.27px",
                  color: "#D2DDDA",
                }}
              >
                Invite Guest
              </span>
            </button>

            <button
              className="flex items-center gap-4 rounded-[11.66px] backdrop-blur-[13.11px] hover:bg-white/10 transition-colors cursor-pointer flex-none"
              style={{
                width: "237.89px",
                height: "55.97px",
                border: "0.33px solid #91949926",
                background: "#FFFFFF05",
                justifyContent: "flex-start",
                padding: "0 10px",
              }}
            >
              <div
                className="rounded-lg flex-shrink-0 flex items-center justify-center"
                style={{
                  backgroundColor: "rgba(111, 79, 242, 0.14)",
                  width: "32.730px",
                  height: "32.730px",
                }}
              >
                <img
                  src="/icons/share-onclick-event.svg"
                  alt="Share Event Icon"
                  className="w-full h-full object-contain"
                />
              </div>
              <span
                style={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontSize: "17.27px",
                  color: "#D2DDDA",
                }}
              >
                Share Event
              </span>
            </button>
          </div>
        </div>

        <main>
          {/* Guest List */}
          <div className="flex justify-between items-center mb-4">
            <h1
              className="text-white"
              style={{
                fontFamily: "Inter",
                fontWeight: 500,
                fontSize: "32px",
                lineHeight: "100%",
                letterSpacing: "0%",
              }}
            >
              Guest List
            </h1>
            <span
              className="text-white"
              style={{
                fontFamily: "Inter",
                fontWeight: 500,
                fontSize: "32px",
                lineHeight: "100%",
                letterSpacing: "0%",
              }}
            >
              {guestData.length}
            </span>
          </div>

          {/* Guest List Items */}
          <div className="space-y-[25px] mb-16 md:mb-[218px]">
            {guestData.map((guest) => (
              <div
                key={guest.id}
                className="px-4 py-3 flex flex-col items-start gap-3 md:flex-row md:items-center"
                style={{
                  borderRadius: "9.19px",
                  background: "#FFFFFF05",
                  border: "0.33px solid #91949926",
                  backdropFilter: "blur(10.33px)",
                }}
              >
                {/* name */}
                <div className="md:min-w-[200px]">
                  <span
                    className="text-white"
                    style={{
                      fontFamily: "Inter",
                      fontWeight: 500,
                      fontSize: "24px",
                      lineHeight: "121%",
                      letterSpacing: "0%",
                    }}
                  >
                    {guest.name}
                  </span>
                </div>

                <div className="mt-1 md:mt-0 md:absolute md:left-[220px] md:ml-[10px]">
                  <div className="inline-flex h-[42px] md:w-[191px] rounded-full bg-[#7BFF001A] items-center justify-center px-4">
                    <span
                      style={{
                        fontFamily: "Inter",
                        fontWeight: 500,
                        lineHeight: "121%",
                        letterSpacing: "0%",
                      }}
                      className="text-[#7BFF00] text-sm md:text-[20px]"
                    >
                      {guest.status}
                    </span>
                  </div>
                </div>

                {/* count */}
                <div className="flex items-center gap-1 self-end md:self-auto md:ml-auto">
                  <CountingIcon className="w-6 h-6" />
                  <span className="text-[#919499]" style={{ fontSize: 20 }}>
                    {guest.id}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default GuestActive;
