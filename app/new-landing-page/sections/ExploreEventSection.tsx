"use client";
import React from "react";
import { useState } from "react";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";

import { HappeningNow } from "@/constant/happeningNow";

const locations = ["Nigeria", "USA", "United Kingdom"];

interface renderFilterProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  filters: string[];
}
const RenderFilterRow: React.FC<renderFilterProps> = ({
  filters,
  setActiveFilter,
  activeFilter,
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {filters.map((filter) => (
        <button
          key={filter}
          className={`max-sm:py-2 sm:py-2 max-md:text-sm py-3 max-sm:px-5 px-6 border rounded-full transition-colors ${
            filter === activeFilter
              ? "border-white text-white"
              : "border-gray-600 text-gray-300 hover:border-white hover:text-white"
          }`}
          onClick={() => setActiveFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default function ExploreEventSection({ containerClass }: { containerClass?: string }) {
  const [currentLocationIndex, setCurrentLocationIndex] = useState(0);
  const [activeLocationIndex, setActiveLocationIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState("All");

  const handlePrevLocation = () => {
    setCurrentLocationIndex((prev) => {
      const newIndex = prev === 0 ? locations.length - 1 : prev - 1;
      setActiveLocationIndex(newIndex);
      return newIndex;
    });
  };
  
  const handleNextLocation = () => {
    setCurrentLocationIndex((prev) => {
      const newIndex = prev === locations.length - 1 ? 0 : prev + 1;
      setActiveLocationIndex(newIndex);
      return newIndex;
    });
  };
  

  const getLocationStyles = (index: number) => {
    const isActive = index === currentLocationIndex;
    return isActive
      ? "text-[#FF4D2A] text-2xl md:text-4xl font-bold"
      : "text-gray-300 text-base md:text-lg";
  };

  return (
    <section className={`relative w-full text-white md:mt-[15em] ${containerClass}`}>
      <Image
        src="/landing_mockup2.png"
        alt="Decorative background swirl"
        width={100}
        height={100}
        className="absolute object-contain w-[12em] md:w-[22em] right-0 left-auto"
        unoptimized={true}
      />

      {/*----------------HIDDEN-------------------------- */}
      <div className="absolute w-full h-[80em] top-[-19em] tr inset-0 radial-gradient-red-light blur-3xl opacity-50"></div>

      <div className="relative z-10 w-full mx-auto max-md:px-5">
        <div className="w-full md:px-20 mx-auto">
          <h1 className="mt-[-2em] mb-[1em] md:mt-[-10em] text-left max-sm:mx-auto sm:mx-auto w-fit md:max-w-[50%] md:ml-0 lg:text-left text-[1.5em] lg:mt-[-4em] lg:text-[2.5em] font-semibold mx-auto">
            EXPLORE EVENTS FROM ALL AROUND THE WORLD
          </h1>
        </div>

        <div className="bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-gray-100/30 max-md:px-3 px-8 pt-12 pb-16 min-h-[350px] md:mx-20 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-10">
            <div className="flex md:flex-row max-md:flex-col justify-center flex-wrap max-sm:gap-3 gap-4 w-full md:w-fit">
              <h1 className="text-xl md:text-3xl font-bold max-sm:w-full max-sm:text-center">
                HAPPENING IN
              </h1>
              <div className="flex w-fit mx-auto justify-between">
                <button
                  className=" flex items-center justify-center "
                  onClick={handlePrevLocation}
                >
                  <MdArrowBackIos size={24} color="white" />
                </button>
                <div className="flex items-center gap-2 px-4">
                  {HappeningNow.map((item, index) => {
                    return (
                      <span
                        key={item.location}
                        className={`${getLocationStyles(index)} text-center`}
                        style={
                          index === currentLocationIndex
                            ? {}
                            : {
                                filter: "blur(0.5px) max-sm:hidden",
                                display: "none",
                              }
                        }
                      >
                        {item.location}
                      </span>
                    );
                  })}
                </div>
                <button
                  className="flex items-center justify-center "
                  onClick={handleNextLocation}
                >
                  <MdArrowForwardIos size={24} className="white" />
                </button>
              </div>
            </div>
            <>
              <RenderFilterRow
                filters={HappeningNow[activeLocationIndex].firstRowFilters}
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
              />
              <div className="mb-10">
                <RenderFilterRow
                  filters={HappeningNow[activeLocationIndex].secondRowFilters}
                  activeFilter={activeFilter}
                  setActiveFilter={setActiveFilter}
                />
              </div>
            </>
          </div>
        </div>
        <div className="mt-6 md:mx-20 mx-auto">
          <Link href="/events" className="bg-primary hover:bg-red-600 text-black font-semibold py-3 px-6 rounded-[10px] flex justify-center gap-1 w-fit">
            See More
            <FiArrowUpRight size={24} />
          </Link>
        </div>
      </div>
    </section>
  );
}
