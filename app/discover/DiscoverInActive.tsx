"use client";

import React, { useState } from "react";
import Image from "next/image";

const locations: string[] = ["Lagos", "America", "Ghana", "Kenya"];
const allCategories = [
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

const FilterButton: React.FC<{
  label: string;
  isActive?: boolean;
  onClick: () => void;
}> = ({ label, isActive = false, onClick }) => (
  <button
    onClick={onClick}
    className={`flex-1 md:flex-none rounded-[8.4px] font-medium transition-colors duration-200 ${
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

const BrowseCategory: React.FC = () => (
  <section>
    <h2 className="text-white mb-6 md:mb-[49.3px] text-2xl md:text-[32px] font-medium md:font-medium">
      Browse Category
    </h2>
    <div
      className="md:hidden flex pb-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
      style={{ gap: "27px" }}
    >
      {allCategories.map((category) => (
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
              className="relative flex items-center justify-center"
            >
              <Image
                src={category.icon}
                alt={`${category.title} icon`}
                fill
                className="object-contain"
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
              style={{ fontSize: "13px", color: "#666666", marginTop: "2px" }}
            >
              {category.eventCount}
            </p>
          </div>
        </div>
      ))}
    </div>
    <div className="hidden md:flex justify-between pb-4 overflow-x-auto scrollbar-hide gap-4">
      {allCategories.map((category) => (
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
            <div className="w-12 h-12 rounded-2xl relative flex items-center justify-center">
              <Image
                src={category.icon}
                alt={`${category.title} icon`}
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-white font-medium" style={{ fontSize: "32px" }}>
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
      ))}
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

const DiscoverInactive: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("Lagos");

  return (
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
        <section style={{ marginBottom: "120px" }}>
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
          <div
            className="flex flex-col items-start justify-start"
            style={{ marginTop: "84px" }}
          >
            <div style={{ marginBottom: "37px" }}>
              <Image
                src="/inactive_events.svg"
                alt="No events illustration"
                width={353}
                height={120}
                className="object-contain w-[188.3081px] h-[64.0636px] md:w-[353px] md:h-[120px]"
                style={{ opacity: 1 }}
                priority
              />
            </div>
            <div className="text-left">
              <h2
                className="font-medium text-[#919499] text-[17.8px] md:text-[33.36px] leading-[100%] tracking-[-0.04em] mb-[11px]"
                style={{ fontFamily: "Inter" }}
              >
                No event at this time
              </h2>
              <p
                className="block md:hidden font-medium text-[#919499] text-[10.68px] leading-[13.37px] tracking-[-0.04em]"
                style={{ fontFamily: "Poppins, Inter, sans-serif" }}
              >
                No event is live at this time, check back or take a bold move
                <br />
                Host your own event now
              </p>
              <p
                className="max-w-md hidden md:block"
                style={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontStyle: "medium",
                  fontSize: "19px",
                  lineHeight: "25.07px",
                  letterSpacing: "-4%",
                  color: "#919499",
                }}
              >
                No event is live at this time, check back or take a bold move
                <br />
                Host your own event free!
              </p>
            </div>
          </div>
        </section>

        <BrowseCategory />
      </div>
    </div>
  );
};

export const inactive = DiscoverInactive;
export default DiscoverInactive;
