"use client";

import React from "react";

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

interface InactiveGuest {
  name: string;
  status: "Guest pending";
  id: number;
}

const inactiveGuestData: InactiveGuest[] = [];

const GuestInactive: React.FC<Props> = ({ eventId }) => {
  return (
    <div className="min-h-screen bg-[#131517] text-white p-6">
      <div className="max-w-4xl mx-auto w-full mt-24 space-y-6">
        {/* Header Buttons */}
        <header className="flex justify-start" style={{ marginBottom: "73px" }}>
          <div className="flex items-center gap-3">
            <button
              className="flex items-center gap-4 rounded-[11.66px] backdrop-blur-[13.11px] hover:bg-white/10 transition-colors cursor-pointer"
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
              className="flex items-center gap-4 rounded-[11.66px] backdrop-blur-[13.11px] hover:bg-white/10 transition-colors cursor-pointer"
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
        </header>

        <main>
          {/* Guest List */}
          <div
            className="flex justify-between items-center"
            style={{ marginBottom: "117px" }}
          >
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
              {inactiveGuestData.length}
            </span>
          </div>

          {/* Empty State */}
          {inactiveGuestData.length === 0 && (
            <div style={{ marginBottom: "297.91px" }}>
              <img
                src="/inactive_events.svg"
                alt="No guests"
                style={{
                  width: "330px",
                  height: "112.2px",
                  opacity: 1,
                  marginBottom: "37px",
                }}
              />

              <h2
                style={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontSize: "33.36px",
                  lineHeight: "100%",
                  letterSpacing: "-0.04em",
                  color: "#919499",
                  margin: 0,
                  marginBottom: "11px",
                }}
              >
                No Guests Yet!
              </h2>

              <p
                style={{
                  fontFamily: "Poppins",
                  fontWeight: 500,
                  fontSize: "20.02px",
                  lineHeight: "25.07px",
                  letterSpacing: "-0.04em",
                  color: "#919499",
                  margin: 0,
                }}
              >
                Add or share event to help people get started
              </p>
            </div>
          )}

          {inactiveGuestData.length > 0 && (
            <div className="space-y-3">
              {inactiveGuestData.map((guest) => (
                <div
                  key={guest.id}
                  className="bg-[#2C2C2E] p-4 rounded-xl flex items-center justify-between"
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-white text-lg font-medium">
                      {guest.name}
                    </span>
                    <span className="bg-[#1E392E] text-[#61D9A7] text-sm font-medium px-4 py-1.5 rounded-full">
                      {guest.status}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-500">
                    <CountingIcon className="w-4 h-4" />
                    <span>{guest.id}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default GuestInactive;
