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

const EventCard: React.FC<{ event: Event }> = ({ event }) => {
  const mobileCardStyle: React.CSSProperties = {
    border: "none",
    background: "transparent",
    backdropFilter: "none",
  };

  return (
    <>
      {/* Mobile Layout */}
      <div className="md:hidden">
        <div className="p-3 box-border rounded-xl" style={mobileCardStyle}>
          <div className="flex gap-3 items-start">
            <div className="flex-shrink-0">
              <div className="w-[86px] h-[86px] rounded-md overflow-hidden">
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src =
                      "https://placehold.co/86x86/333333/FFFFFF?text=Error";
                  }}
                />
              </div>
            </div>

            <div
              className="flex-1 flex flex-col justify-between min-w-0"
              style={{ minHeight: "86px" }}
            >
              <div>
                <h3 className="text-white text-[18px] font-semibold leading-tight break-words">
                  {event.title}
                </h3>
              </div>

              <div className="mt-auto pt-3">
                <div className="text-gray-400 text-[13px] font-medium">
                  {event.date}, {event.time}
                </div>

                <div className="flex items-center gap-1 text-gray-400 mt-1">
                  <span
                    className="font-inter font-medium text-[13px] truncate"
                    title={`${event.venue} - ${event.location}`}
                  >
                    {event.venue} - {event.location}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex space-x-4">
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
            target.onerror = null;
            target.src = "https://placehold.co/80x80/333333/FFFFFF?text=Error";
          }}
        />
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h3
              className="font-semibold text-white"
              style={{ fontSize: "20px" }}
            >
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
    </>
  );
};

const FilterButton: React.FC<{
  label: string;
  isActive?: boolean;
  onClick: () => void;
}> = ({ label, isActive = false, onClick }) => (
  <button
    onClick={onClick}
    className={`flex-1 md:flex-none rounded-[8.4px] font-medium transition-colors duration-200
      ${
        isActive ? "text-[#D2DDDA]" : "text-[#666666]"
      } text-[14px] md:text-xl w-full md:w-[120px] h-9 md:h-10 flex items-center justify-center`}
    style={{
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
      <h2 className="text-white mb-6 md:mb-[49.3px] text-2xl md:text-[32px] font-medium md:font-medium">
        Browse Category
      </h2>

      {/* Mobile Layout  */}
      <div
        className="md:hidden flex pb-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
        style={{ gap: "27px" }}
      >
        {allCategories.map((category) => {
          return (
            <div
              key={category.id}
              className="flex-shrink-0 shadow-lg transition-transform duration-200 active:scale-95 p-4 flex flex-col justify-between cursor-pointer snap-start"
              style={{
                width: "210.2px",
                height: "132.04px",
                borderRadius: "14.8px",
                backgroundColor: "#FFFFFF0F",
                border: "0.3px solid #91949926",
                backdropFilter: "blur(14.604201316833496px)",
              }}
            >
              <div className="flex justify-start">
                <div
                  style={{ width: "21.89px", height: "21.89px" }}
                  className="flex items-center justify-center"
                >
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
                  style={{ fontSize: "20px", marginTop: "4px" }}
                >
                  {category.title}
                </h3>
                <p
                  className="font-medium"
                  style={{
                    fontSize: "13px",
                    color: "#666666",
                    marginTop: "2px",
                  }}
                >
                  {category.eventCount}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex justify-between pb-4 overflow-x-auto scrollbar-hide gap-4">
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
        <div className="max-w-5xl mx-auto pt-20">
          {/* Header Section */}
          <header className="mb-8 md:mb-[45px]">
            <h1 className="text-[#FFFFFF] text-3xl md:text-[48px] font-medium leading-[1.21] tracking-[-5%] mb-2">
              Explore Events
            </h1>
            <p className="text-[#919499] text-base md:text-xl font-medium leading-[1.00] tracking-[0%]">
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

          {/* Popular Events Section + the view all  */}
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
                className="font-medium text-[11.8px] text-[#D2DDDA] md:hidden flex items-center justify-center flex-shrink-0"
                style={{
                  width: "80px",
                  height: "32px",
                  borderRadius: "59.01px",
                  backgroundColor: "#FFFFFF0F",
                  backdropFilter: "blur(11.801170349121094px)",
                }}
              >
                View All
              </button>

              {/* The Desktop View All */}
              <button
                className="hidden md:inline-flex font-medium text-base text-[#D2DDDA]"
                style={{
                  width: "135px",
                  height: "42px",
                  borderRadius: "100px",
                  backgroundColor: "#FFFFFF0F",
                  backdropFilter: "blur(20px)",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                View All
              </button>
            </div>
            <div className="md:hidden flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4">
              {Array.from({ length: Math.ceil(popularEvents.length / 3) }).map(
                (_, colIndex) => (
                  <div
                    key={colIndex}
                    className="flex-shrink-0 snap-start flex flex-col gap-4"
                    style={{ width: "calc(100vw - 32px)", maxWidth: "400px" }}
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

            <div className="hidden md:grid grid-cols-2 gap-x-[70px] gap-y-[16px]">
              {popularEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </section>

          <BrowseCategory />
        </div>
      </div>
    </>
  );
};

export default DiscoverActive;
