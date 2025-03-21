"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const HappeningSection = () => {
  const pathname = usePathname();
  const locations = ["Niger", "Nigeria", "North Ma"];
  const filters = [
    "All",
    "Trending for you",
    "Today",
    "Online",
    "This weekend",
    "Music",
    "Shows",
    "Festival",
    "Food & Drinks",
    "Happening now",
    "Games",
  ];
  const events = [
    {
      image: "/fashion.png",
      title: "Africa’s fashion industry",
      description:
        "Africa’s fashion industry is growing to meet global demand. “But needs more investment,” UNESCO says.",
    },
    {
      image: "/endsars.png",
      title: "Remembering #EndSARS",
      description:
        "Many Nigerians on Friday remembered the victims of the protests against police brutality three years ago.",
    },
    {
      image: "/netflix.png",
      title: "New Netflix Thriller",
      description:
        "New Netflix thriller tackling theme of justice in Nigeria is a global hit and a boon for Nollywood A Nigerian action thriller that tells a gripping story of corruption and police brutality in Africa",
    },
    {
      image: "/president.png",
      title: "New Oil Refinery Opened",
      description:
        "Nigerian President Muhammadu Buhari has opened Africa’s biggest oil refinery, with hopes it will help the country achieve self-sufficiency and become a net exporter of refined petroleum products",
    },
  ];
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <div>
      {/* Container with responsive height and padding */}
      <div className="bg-[#2D2D2D] text-white md:h-[350px] pt-6 md:pt-[50px] mt-20 rounded-[50px] border border-primary w-full">
        <div className="flex flex-col">
          {/* Heading & Location Section */}
          <div className="flex flex-col md:flex-row md:justify-center md:gap-[109px] items-center">
            <h1 className="text-[24px] md:text-[40px] font-bold mb-4 md:mb-0">
              HAPPENING IN
            </h1>
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              {/* Only show these buttons on desktop */}
              <Button
                className="bg-white text-black rounded-lg w-8 h-8 hidden md:flex items-center justify-center"
                onClick={() => {}}>
                <FaAngleLeft />
              </Button>
              <div className="flex items-center justify-between">
                <div className="text-center">
                  {locations.map((location, index) => (
                    <span
                      key={index}
                      className={`mx-2 ${
                        location === "Nigeria"
                          ? "text-red-500 text-[30px] md:text-[70px] font-bold"
                          : "text-gray-400"
                      }`}>
                      {location}
                    </span>
                  ))}
                </div>
              </div>
              <Button
                className="bg-white text-black rounded-lg w-8 h-8 hidden md:flex items-center justify-center"
                onClick={() => {}}>
                <FaAngleRight />
              </Button>
            </div>
          </div>
          {/* Pagination Dots */}
          <div className="flex justify-center space-x-2 mb-6">
            <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
          </div>
        </div>
        {/* Filters Section - Horizontal scroll on mobile */}
        <div className="flex gap-4 items-center overflow-x-auto whitespace-nowrap px-4 md:flex-wrap md:justify-center md:overflow-visible">
          {filters.map((filter, index) => (
            <Button
              key={index}
              className={`py-2 px-6 border rounded-full ${
                filter === activeFilter
                  ? "border-primary text-red-500"
                  : "border-gray-700"
              }`}
              onClick={() => setActiveFilter(filter)}>
              {filter}
            </Button>
          ))}
        </div>
      </div>

      {/* Events Cards */}
      {pathname !== "/events" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10 mb-10 px-4">
          {events.map((event, index) => (
            <div
              key={index}
              className="w-full md:w-[282px] md:h-[454px] rounded-lg overflow-hidden shadow-lg bg-black text-white flex flex-col">
              <div className="relative w-full h-auto md:h-3/5">
                <Image
                  src={event.image}
                  alt={event.title}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 flex flex-col">
                <div className="text-lg font-bold mb-2">{event.title}</div>
                <div className="text-sm">{event.description}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HappeningSection;
