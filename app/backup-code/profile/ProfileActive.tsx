"use client";

import React from "react";

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
              <img
                src={user.profileImage}
                alt={user.name}
                className="w-20 h-20 rounded-full object-cover"
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
                <img
                  src="/icons/calender-profile.svg"
                  alt="Calendar"
                  className="w-4 h-4"
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
              <img
                src="/icons/calender-profile.svg"
                alt="Calendar"
                className="w-4 h-4"
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
                  <img
                    src={event.imageUrl}
                    alt={event.title}
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "8px",
                    }}
                    className="object-cover"
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

          {/* Bottom Buttons Section */}
          <div style={{ marginBottom: "60px" }}>
            <div
              className="flex justify-between items-center"
              style={{ marginTop: "286.47px" }}
            >
              <button
                style={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontSize: "18.67px",
                  lineHeight: "100%",
                  letterSpacing: "-4%",
                  color: "#FFFFFF",
                  backgroundColor: "transparent",
                  border: "1px solid #373737",
                  borderRadius: "7.78px",
                  width: "196px",
                  height: "49px",
                  cursor: "pointer",
                  opacity: 1,
                }}
              >
                Check Journal
              </button>

              <button
                className="flex items-center gap-2"
                style={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontSize: "18.67px",
                  lineHeight: "100%",
                  letterSpacing: "-4%",
                  color: "#131517",
                  backgroundColor: "#FFFFFF",
                  border: "none",
                  borderRadius: "7.78px",
                  width: "196px",
                  height: "49px",
                  cursor: "pointer",
                  opacity: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src="/icons/diamond-profile.svg"
                  alt="Diamond"
                  className="w-5 h-5"
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
