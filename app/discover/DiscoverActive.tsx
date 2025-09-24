"use client";

import React, { useState } from "react";
import { Laptop } from "lucide-react";

type Event = {
  id: number;
  title: string;
  date: string;
  time: string;
  venue: string;
  location: string;
  imageUrl: string;
};

type Category = {
  id: number;
  title: string;
  icon: string;
  color: string;
  eventCount: string;
};

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

const allCategories: Category[] = [
  {
    id: 1,
    title: "Music",
    icon: "/icons/discover-music.svg",
    color: "#ec4899",
    eventCount: "44k Events",
  },
  {
    id: 2,
    title: "Conference",
    icon: "/icons/discover-conference.svg",
    color: "#eab308",
    eventCount: "550k Events",
  },
  {
    id: 3,
    title: "Concert",
    icon: "/icons/discover-concert.svg",
    color: "#22c55e",
    eventCount: "220k Events",
  },
];

const EventCard: React.FC<{ event: Event }> = ({ event }) => (
  <div className="flex space-x-4">
    <img
      src={event.imageUrl}
      alt={event.title}
      style={{
        width: "91.019px",
        height: "91.019px",
        borderRadius: "6.9px",
      }}
      className="object-cover"
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.onerror = null; // prevent infinite loop
        target.src = "https://placehold.co/80x80/333333/FFFFFF?text=Error";
      }}
    />
    <div className="flex-1 flex flex-col justify-between">
      <div>
        <h3 className="font-semibold text-white" style={{ fontSize: "20px" }}>
          {event.title}
        </h3>
      </div>
      <div>
        <p
          className="font-medium"
          style={{ fontSize: "16px", color: "#666666" }}
        >
          {event.date}, {event.time}
        </p>
        <p
          className="font-medium -mt-2"
          style={{ fontSize: "16px", color: "#666666" }}
        >
          {event.venue} - {event.location}
        </p>
      </div>
    </div>
  </div>
);

// LocationButton Component
const FilterButton: React.FC<{
  label: string;
  isActive?: boolean;
  onClick: () => void;
}> = ({ label, isActive = false, onClick }) => (
  <button
    onClick={onClick}
    className={`flex-shrink-0 flex-grow-0 rounded-[8.4px] text-xl font-medium transition-colors duration-200
      ${isActive ? "text-[#D2DDDA]" : "text-[#666666]"}`}
    style={{
      width: "120px",
      height: "40px",
      backgroundColor: "rgba(255, 255, 255, 0.06)",
      backdropFilter: "blur(24px)",
    }}
  >
    {label}
  </button>
);

// BrowseCategory Component
const BrowseCategory: React.FC = () => {
  return (
    <section>
      <h2
        className="text-white mb-[49.3px]"
        style={{ fontSize: "32px", fontWeight: 500 }}
      >
        Browse Category
      </h2>
      <div className="flex justify-between pb-4 overflow-x-auto scrollbar-hide gap-4">
        {allCategories.map((category) => {
          return (
            <div
              key={category.id}
              className="flex-1 min-w-0 max-w-[calc(33.333%-1rem)] rounded-[24.34px] shadow-lg transition-transform duration-200 hover:scale-105 p-6 flex flex-col justify-between cursor-pointer"
              style={{
                backgroundColor: "#FFFFFF0F",
                border: "0.49px solid #91949926",
                backdropFilter: "blur(14.604201316833496px)",
                height: "217.1157989501953px",
              }}
            >
              <div className="flex justify-start">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center">
                  <img
                    src={category.icon}
                    alt={`${category.title} icon`}
                    className="w-full h-full"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <h3
                  className="text-white font-medium"
                  style={{ fontSize: "32px" }}
                >
                  {category.title}
                </h3>
                <p
                  className="font-medium -mt-2"
                  style={{ fontSize: "16px", color: "#666666" }}
                >
                  {category.eventCount}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

const DiscoverActive: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("Lagos");
  const locations: string[] = ["Lagos", "America", "Ghana", "Kenya"];

  return (
    <>
      <div className="bg-[#131517] min-h-screen text-gray-300 font-sans p-4 sm:p-8">
        <div className="max-w-4xl mx-auto pt-20">
          {/* Header Section */}
          <header className="mb-[45px]">
            <h1 className="text-[#FFFFFF] text-[48px] font-medium leading-[1.21] tracking-[-5%] mb-2">
              Discover Events
            </h1>
            <p className="text-[#919499] text-xl font-medium leading-[1.00] tracking-[0%]">
              Explore popular and local events around you
            </p>
          </header>

          {/* Location Filters Section */}
          <div className="flex flex-wrap items-center space-x-2 mb-[62.6px]">
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
          <section className="mb-[76.85px]">
            <div className="flex justify-between items-center mb-[53px]">
              <div>
                <h2 className="text-white text-[32px] font-medium mb-1 leading-none tracking-normal">
                  Popular Events
                </h2>
                <p className="text-[#666666] text-[32px] font-medium leading-none tracking-normal">
                  {activeFilter}
                </p>
              </div>
              <button
                className="font-medium text-[20px] rounded-[7px] text-[#D2DDDA]"
                style={{
                  width: "135px",
                  height: "42px",
                  backgroundColor: "rgba(255, 255, 255, 0.06)",
                  backdropFilter: "blur(20px)",
                }}
              >
                View All
              </button>
            </div>
            {/* Events Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[70px] gap-y-[16px]">
              {popularEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </section>

          {/* Browse Category Section */}
          <BrowseCategory />
        </div>
      </div>
    </>
  );
};

export default DiscoverActive;
