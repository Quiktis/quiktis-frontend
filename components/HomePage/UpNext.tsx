"use client";
import Image from "next/image";
import React from "react";
import SearchBar from "../ui/SearchBar";

const upnext = [
  { title: "Dinner Dates", image: "/dinner.png" },
  { title: "Club", image: "/club.png" },
  { title: "Talents", image: "/talents.png" },
  { title: "Ladies", image: "/ladies.png" },
];

const UpNext = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 w-full justify-center items-center mt-20 px-6">
      {/* Left Side (Text + Search) */}
      <div className="w-full md:w-1/2 flex flex-col gap-6 text-center md:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-primary font-bold">
          UP NEXT
        </h1>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-primary font-bold">
          EXPLORE A WIDE RANGE OF EVENTS FROM ALL AROUND THE WORLD
        </h1>
        <div className="flex justify-center md:justify-start">
          <SearchBar placeholder="Search Event" value="" onChange={() => {}} />
        </div>
      </div>

      {/* Right Side (Image Grid) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full md:w-1/2">
        {upnext.map((next, index) => (
          <div
            key={index}
            className={`relative ${
              (next.title === "Club" || next.title === "Ladies") && "mt-8"
            }`}
          >
            <Image
              src={next.image}
              alt={next.title}
              width={300}
              height={300}
              className="w-full object-cover rounded-lg"
            />
            <div
              className={`absolute ${
                next.title === "Club" || next.title === "Ladies"
                  ? "bottom-0"
                  : "bottom-4"
              } text-lg sm:text-xl md:text-2xl font-primary font-bold w-full h-[70px] flex justify-center items-center bg-white rounded-b-lg newsletter-bg`}
            >
              {next.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpNext;
