"use client";
import ProfileHeader from "@/components/dashboard/ProfileHeader";
import FavoriteEvents from "@/components/dashboard/FavoriteEvents";
import PurchaseHistory from "@/components/dashboard/PurchaseHistory";
import Notifications from "@/components/dashboard/Notifications";
import ComingNext from "@/components/dashboard/ComingNext";

export default function MyTicketsPage() {
  return (
    <main className="p-8 bg-transparent min-h-screen text-white">
      {/* Top Section*/}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1">
          <ProfileHeader />
        </div>
        <div className="flex-1">
          <FavoriteEvents />
        </div>
      </div>

      {/* Middle Section*/}
      <div className="flex flex-col gap-4 mb-8">
        <div className="w-full">
          <PurchaseHistory />
        </div>
        <div className="w-full">
          <Notifications />
        </div>
      </div>

      {/* Bottom Section */}
      <div>
        <ComingNext />
      </div>
    </main>
  );
}
