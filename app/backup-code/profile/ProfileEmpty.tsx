"use client";

import React from "react";

interface ProfileEmptyProps {
  user?: {
    name: string;
    profileImage: string;
    joinedDate: string;
    eventsOrganized: number;
    eventsAttended: number;
  };
}

const ProfileEmpty: React.FC<ProfileEmptyProps> = ({
  user = {
    name: "Dare Sobaloju",
    profileImage: "/icons/Profile-img.svg",
    joinedDate: "September 2025",
    eventsOrganized: 0,
    eventsAttended: 0,
  },
}) => {
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
                  color: "#919499",
                }}
              >
                {user.eventsAttended} Attended
              </span>
            </div>
          </div>

          {/* Empty State */}
          <div style={{ marginBottom: "200px" }}>
            <img
              src="/inactive_events.svg"
              alt="No cultural identity"
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
                letterSpacing: "-4%",
                color: "#919499",
                margin: 0,
                marginBottom: "11px",
              }}
            >
              No Cultural Identity Yet
            </h2>

            <p
              style={{
                fontFamily: "Poppins",
                fontWeight: 500,
                fontSize: "20.02px",
                lineHeight: "25.07px",
                letterSpacing: "-4%",
                color: "#919499",
                margin: 0,
              }}
            >
              No identity yet, build your portfolio of event organised and
              <br />
              attended to earn a reward.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProfileEmpty;
