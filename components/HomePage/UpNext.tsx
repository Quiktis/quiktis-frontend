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
    <div className="flex flex-col md:flex-row gap--10 md:gap--10 w-full justify-center items-center mt--10 md:mt-40">
      <div className="w-full md:w-[50%] h-[349px] flex flex-col gap-10 px-4 md:px-0 text-center md:text-left">
        <h1 className="text-[30px] font-primary font-bold">UP NEXT</h1>
        <h1 className="text-[20px] md:text-[40px] font-primary font-bold">
          EXPLORE A WIDE RANGE OF EVENTS FROM ALL AROUND THE WORLD
        </h1>
        <div className="hidden md:block">
          <SearchBar placeholder="Search Event" value="" onChange={() => {}} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-y-0 md:gap-x-20 w-full md:w-[50%] px-4 md:px-0">
        {upnext.map((next) => (
          <div
            key={next.title}
            className={`
              relative
              ${
                next.title === "Club" || next.title === "Ladies"
                  ? "md:mt-20"
                  : "md:mt-10"
              }
            `}>
            <Image
              src={next.image}
              alt={next.title}
              width={300}
              height={300}
              className="object-cover w-[280px] h-[280px] md:w-[300px] md:h-[300px] rounded-[20px]"
            />
            <div
              className={`
                absolute bottom-0
                ${
                  next.title === "Club" || next.title === "Ladies"
                    ? "md:bottom-0"
                    : "md:bottom-10"
                }
                text-[24px] font-primary font-bold w-full h-[70px]
                flex justify-center items-center bg-white rounded-b-[20px] newsletter-bg
              `}>
              {next.title}
            </div>
          </div>
        ))}
      </div>

      <div className="md:hidden w-full flex justify-center mt-6 px-4">
        <SearchBar placeholder="Search Event" value="" onChange={() => {}} />
      </div>
    </div>
  );
};

export default UpNext;
