"use client";

import React, { useState } from "react";
import { FilterButton, BrowseCategory, EmptyState } from "./components";

const locations: string[] = ["Lagos", "America", "Ghana", "Kenya"];

const DiscoverInactive: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("Lagos");

  return (
    <div className="bg-[#131517] min-h-screen text-gray-300 font-sans p-4 sm:p-8">
      <div className="max-w-5xl mx-auto pt-20">
        {/* Header Section */}
        <header className="mb-8 md:mb-[45px]">
          <h1 className="text-white text-3xl md:text-[48px] font-medium leading-[1.21] tracking-[-0.05em] mb-2">
            Explore Events
          </h1>
          <p className="text-[#919499] text-base md:text-xl font-medium leading-[1.00]">
            Explore popular and local events around you
          </p>
        </header>

        {/* Location filter Section */}
        <div className="flex overflow-x-auto scrollbar-hide gap-3 md:gap-2 mb-8 md:mb-[62.6px] pb-2">
          {locations.map((location) => (
            <FilterButton
              key={location}
              label={location}
              isActive={activeFilter === location}
              onClick={() => setActiveFilter(location)}
            />
          ))}
        </div>

        {/* Empty State */}
        <EmptyState activeFilter={activeFilter} />

        <BrowseCategory />
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export const inactive = DiscoverInactive;
export default DiscoverInactive;
