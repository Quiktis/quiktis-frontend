"use client";

import React, { useState } from "react";
import { EventCard, FilterButton, BrowseCategory } from "./components";
import type { Event } from "./components";

const popularEvents: Event[] = [
  {
    id: 1,
    title: "Ladies Night Live Music",
    date: "Thurs, Sep 23",
    time: "7:00PM",
    venue: "Yawa club house",
    location: "Lagos, Nigeria",
    imageUrl: "/ladies-night-party.svg",
  },
  {
    id: 2,
    title: "Stable Conference",
    date: "Thurs, Sep 23",
    time: "7:00PM",
    venue: "Stable",
    location: "Lagos",
    imageUrl: "/ladies-night-party.svg",
  },
  {
    id: 3,
    title: "Ladies Night Live Music",
    date: "Thurs, Sep 23",
    time: "7:00PM",
    venue: "Yawa club house",
    location: "Lagos, Nigeria",
    imageUrl: "/ladies-night-party.svg",
  },
  {
    id: 4,
    title: "Outside Team Connect",
    date: "Thurs, Sep 23",
    time: "7:00PM",
    venue: "Yawa club house",
    location: "Lagos, Nigeria",
    imageUrl: "/ladies-night-party.svg",
  },
  {
    id: 5,
    title: "Ladies Night Live Music",
    date: "Thurs, Sep 23",
    time: "7:00PM",
    venue: "Yawa club house",
    location: "Lagos, Nigeria",
    imageUrl: "/ladies-night-party.svg",
  },
  {
    id: 6,
    title: "Ladies Night Live Music",
    date: "Thurs, Sep 23",
    time: "7:00PM",
    venue: "Yawa club house",
    location: "Lagos, Nigeria",
    imageUrl: "/ladies-night-party.svg",
  },
];

const DiscoverActive: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("Lagos");
  const locations: string[] = ["Lagos", "America", "Ghana", "Kenya"];

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

        {/* Popular Events Section */}
        <section className="mb-12 md:mb-[76.85px]">
          <div className="flex justify-between items-center mb-6 md:mb-[53px] gap-4">
            <div className="pl-4 md:pl-0">
              <h2 className="text-white text-[18px] md:text-[32px] font-medium mb-1 leading-none tracking-normal">
                Popular Events
              </h2>
              <p className="text-[#666666] text-[14px] md:text-[32px] font-medium leading-none tracking-normal">
                {activeFilter}
              </p>
            </div>
            <button
              className="font-medium text-[11.8px] text-[#D2DDDA] md:hidden 
                flex items-center justify-center flex-shrink-0
                w-[80px] h-8 rounded-[59.01px]
                bg-white/[0.06] backdrop-blur-[11.8px]"
            >
              View All
            </button>

            {/* Desktop View All */}
            <button
              className="hidden md:inline-flex font-medium text-base text-[#D2DDDA]
                w-[135px] h-[42px] rounded-[100px]
                bg-white/[0.06] backdrop-blur-[20px]
                items-center justify-center"
            >
              View All
            </button>
          </div>

          {/* Mobile Grid */}
          <div className="md:hidden flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4">
            {Array.from({ length: Math.ceil(popularEvents.length / 3) }).map(
              (_, colIndex) => (
                <div
                  key={colIndex}
                  className="flex-shrink-0 snap-start flex flex-col gap-4 w-[calc(100vw-32px)] max-w-[400px]"
                >
                  {popularEvents
                    .slice(colIndex * 3, colIndex * 3 + 3)
                    .map((event) => (
                      <EventCard key={event.id} event={event} />
                    ))}
                </div>
              )
            )}
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-2 gap-x-[70px] gap-y-4">
            {popularEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </section>

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

export default DiscoverActive;
