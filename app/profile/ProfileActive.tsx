"use client";

import React from "react";
import Image from "next/image";

interface ProfileActiveProps {
  user?: {
    name: string;
    profileImage: string;
    joinedDate: string;
    eventsOrganized: number;
    eventsAttended: number;
  };
}

const ProfileActive: React.FC<ProfileActiveProps> = ({
  user = {
    name: "Anjola Adeyemi",
    profileImage: "/icons/Profile-img.svg",
    joinedDate: "September 2025",
    eventsOrganized: 0,
    eventsAttended: 2,
  },
}) => {
  const events = [
    {
      id: 1,
      title: "Ladies Night Live Music",
      date: "Thurs, Sep 23",
      time: "7:00PM",
      venue: "Yawa club house - Lagos, Nigeria",
      imageUrl: "/ladies-night-party.svg",
    },
    {
      id: 2,
      title: "Ladies Night Live Music",
      date: "Thurs, Sep 23",
      time: "7:00PM",
      venue: "Yawa club house - Lagos, Nigeria",
      imageUrl: "/ladies-night-party.svg",
    },
  ];

  return (
    <div className="min-h-screen bg-[#131517] text-white p-6">
      <div className="max-w-4xl mx-auto w-full mt-24 space-y-6">
        {/* Profile Header */}
        <header style={{ marginBottom: "73px" }}>
          <div className="flex items-center" style={{ gap: "28px" }}>
            <div className="relative">
              <Image
                src={user.profileImage}
                alt={user.name}
                width={80}
                height={80}
                className="rounded-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h1
                style={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontSize: "48px",
                  lineHeight: "121%",
                  letterSpacing: "0%",
                  color: "#FFFFFF",
                  margin: 0,
                  marginBottom: "14px",
                }}
              >
                {user.name}
              </h1>
              <div className="flex items-center space-x-2">
                <Image
                  src="/icons/calender-profile.svg"
                  alt="Calendar"
                  width={16}
                  height={16}
                />
                <span
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 500,
                    fontSize: "20px",
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    color: "#919499",
                  }}
                >
                  Joined {user.joinedDate}
                </span>
              </div>
            </div>
          </div>
        </header>

        <main>
          {/* Cultural Identity Section */}
          <div style={{ marginBottom: "115px" }}>
            <h2
              style={{
                fontFamily: "Inter",
                fontWeight: 600,
                fontSize: "40px",
                lineHeight: "121%",
                letterSpacing: "-4%",
                color: "#FFFFFF",
                marginBottom: "17px",
                margin: 0,
              }}
            >
              Your Cultural Identity
            </h2>
            <div
              className="flex items-center space-x-2"
              style={{ marginTop: "17px" }}
            >
              <Image
                src="/icons/calender-profile.svg"
                alt="Calendar"
                width={16}
                height={16}
              />
              <span
                style={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontSize: "20px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#919499",
                }}
              >
                {user.eventsOrganized} organized
              </span>
              <span
                style={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontSize: "20px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#919499",
                }}
              >
                |
              </span>
              <span
                style={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontSize: "20px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#FFFFFF",
                }}
              >
                {user.eventsAttended} Attended
              </span>
            </div>

            {/* Event List */}
            <div style={{ marginTop: "79px" }}>
              {events.map((event, index) => (
                <div
                  key={event.id}
                  className="flex space-x-4"
                  style={{
                    marginBottom: index < events.length - 1 ? "40px" : "0",
                  }}
                >
                  <Image
                    src={event.imageUrl}
                    alt={event.title}
                    width={80}
                    height={80}
                    className="rounded-[8px] object-cover"
                  />
                  <div
                    className="flex-1 flex flex-col justify-between"
                    style={{ minHeight: "80px" }}
                  >
                    <div>
                      <h3
                        style={{
                          fontFamily: "Inter",
                          fontWeight: 500,
                          fontSize: "20px",
                          lineHeight: "100%",
                          letterSpacing: "0%",
                          color: "#FFFFFF",
                          margin: 0,
                        }}
                      >
                        {event.title}
                      </h3>
                    </div>
                    <div>
                      <p
                        style={{
                          fontFamily: "Inter",
                          fontWeight: 400,
                          fontSize: "16px",
                          lineHeight: "100%",
                          letterSpacing: "0%",
                          color: "#919499",
                          margin: 0,
                          marginBottom: "4px",
                        }}
                      >
                        {event.date}, {event.time}
                      </p>
                      <p
                        style={{
                          fontFamily: "Inter",
                          fontWeight: 400,
                          fontSize: "16px",
                          lineHeight: "100%",
                          letterSpacing: "0%",
                          color: "#919499",
                          margin: 0,
                        }}
                      >
                        {event.venue}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-[60px]">
            <div className="mt-10 md:mt-[286.47px] flex flex-col md:flex-row items-stretch md:items-center gap-3 md:gap-0 md:justify-between">
              {/* Check Journal */}
              <button
                className="w-full md:w-[196px] h-[49px] rounded-[7.78px] border border-[#373737] text-white bg-transparent font-medium text-[16px] md:text-[18.67px] leading-[100%] hover:bg-[#1b1e21] focus:outline-none focus:ring-2 focus:ring-white/20 transition"
                aria-label="Check Journal"
              >
                Check Journal
              </button>

              {/* View Reward */}
              <button
                className="w-full md:w-[196px] h-[49px] rounded-[7.78px] bg-white text-[#131517] font-medium text-[16px] md:text-[18.67px] leading-[100%] flex items-center justify-center gap-2 hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/40 transition"
                aria-label="View Reward"
              >
                <Image
                  src="/icons/diamond-profile.svg"
                  alt="Rewards"
                  width={20}
                  height={20}
                />
                View Reward
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProfileActive;
