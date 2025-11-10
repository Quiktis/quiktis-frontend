"use client";

import React from "react";
import ProfileHeader from "./components/ProfileHeader";
import CulturalIdentityHeader from "./components/CulturalIdentityHeader";
import EventListItem from "./components/EventListItem";
import ProfileActionButtons from "./components/ProfileActionButtons";

interface ProfileOrganizedProps {
  user?: {
    name: string;
    profileImage: string;
    joinedDate: string;
    eventsOrganized: number;
    eventsAttended: number;
  };
}

const ProfileOrganized: React.FC<ProfileOrganizedProps> = ({
  user = {
    name: "Anjola Adeyemi",
    profileImage: "/icons/Profile-img.svg",
    joinedDate: "September 2025",
    eventsOrganized: 2,
    eventsAttended: 0,
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
        <ProfileHeader
          name={user.name}
          profileImage={user.profileImage}
          joinedDate={user.joinedDate}
        />

        {/* Horizontal Line */}
        <div className="border-t border-[#91949924] mb-10"></div>

        <main>
          <CulturalIdentityHeader
            eventsOrganized={user.eventsOrganized}
            eventsAttended={user.eventsAttended}
            isOrganizedState={true}
          />

          {/* Event List */}
          <div className="mt-[79px] mb-[115px]">
            {events.map((event, index) => (
              <EventListItem
                key={event.id}
                event={event}
                isLast={index === events.length - 1}
              />
            ))}
          </div>

          <ProfileActionButtons />
        </main>
      </div>
    </div>
  );
};

export default ProfileOrganized;
