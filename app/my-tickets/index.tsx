"use client";
import ProfileHeader from "@/components/dashboard/ProfileHeader";
import FavoriteEvents from "@/components/dashboard/FavoriteEvents";
import PurchaseHistory from "@/components/dashboard/PurchaseHistory";
import Notifications from "@/components/dashboard/Notifications";
import ComingNext from "@/components/dashboard/ComingNext";
import EventsOperations from "@/components/EventsOperations";
import ProfileCard from "@/components/ProfileCard";
import { useUser } from "../context/UserContext";

export default function MyTicketsPage() {
  return (
    <main className="flex flex-col w-full relative min-h-screen sm:w-[88%] lg:w-[90%] mx-auto">
      <EventsOperations />
      {/* Top Section */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-8 mt-[1em]">
        <div className="flex-1">
          <ProfileCard />
        </div>
        <div className="flex-1">
          <FavoriteEvents />
        </div>
      </div>

      {/* Middle Section */}
      <div className="flex flex-col gap-4 mb-8">
        <div className="w-full">
          <PurchaseHistory />
        </div>
        <div className="w-full">
          <Notifications />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-[calc(2rem+env(safe-area-inset-bottom))] sm:mt-0">
        <ComingNext />
      </div>
    </main>
  );
}
