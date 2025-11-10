"use client";

import React from "react";
import ProfileHeader from "./components/ProfileHeader";
import CulturalIdentityHeader from "./components/CulturalIdentityHeader";
import EmptyStateSection from "./components/EmptyStateSection";

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
        <ProfileHeader
          name={user.name}
          profileImage={user.profileImage}
          joinedDate={user.joinedDate}
        />

        <main>
          <CulturalIdentityHeader
            eventsOrganized={user.eventsOrganized}
            eventsAttended={user.eventsAttended}
            isEmptyState={true}
          />

          <EmptyStateSection />
        </main>
      </div>
    </div>
  );
};

export default ProfileEmpty;
