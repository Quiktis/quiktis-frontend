"use client";

import React from "react";
import SearchBar from "@/components/nfts-notifications/SearchBar";
import NotificationsSection from "@/components/nfts-notifications/NotificationsSection";
import StatsSection from "@/components/nfts-notifications/StatsSection";
import GallerySection from "@/components/nfts-notifications/GallerySection";

export default function NftsNotificationPage() {
  return (
    <div className="min-h-screen text-white">
      <div className="container mx-auto px-4 py-8">
        <SearchBar />

        <NotificationsSection />

        <StatsSection />

        <GallerySection />
      </div>
    </div>
  );
}
