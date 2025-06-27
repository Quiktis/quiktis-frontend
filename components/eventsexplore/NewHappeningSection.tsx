"use client";

import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const countries = [
  "Niger",
  "Nigeria",
  "North America",
  "South Africa",
  "Ghana",
];

const tags = [
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

const NewHappeningSection = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [activeTag, setActiveTag] = useState("All");

  const goLeft = () =>
    setCurrentIndex((prev) => (prev === 0 ? countries.length - 1 : prev - 1));
  const goRight = () =>
    setCurrentIndex((prev) => (prev === countries.length - 1 ? 0 : prev + 1));

  const getDisplayCountries = () => {
    const left =
      countries[(currentIndex - 1 + countries.length) % countries.length];
    const center = countries[currentIndex];
    const right = countries[(currentIndex + 1) % countries.length];
    return [left, center, right];
  };

  const onTagSelect = (tag: string) => setActiveTag(tag);
  const displayCountries = getDisplayCountries();

  return (
    <section className="w-full bg-transparent text-white max-w-7xl mx-auto mt-20 px-4 sm:px-6 md:px-10 py-10 mb-6">
      <div className="flex flex-col items-center mb-6 gap-6 md:flex-row md:justify-between md:items-start md:mb-2 md:gap-10">
        <h1 className="text-[24px] sm:text-[28px] md:text-[50px] font-bold whitespace-nowrap text-center md:text-left">
          HAPPENING IN
        </h1>

        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2">
            <button
              onClick={goLeft}
              className="bg-[#4B4B4B] rounded-[10px] w-8 h-8 flex items-center justify-center">
              <FaAngleLeft className="text-[#FF4D2A]" />
            </button>

            <div className="flex items-center gap-1 sm:gap-2 text-center">
              <span className="text-[14px] sm:text-[16px] md:text-[24px] text-[#FF4D2A]/20">
                {displayCountries[0]}
              </span>
              <span className="text-[20px] sm:text-[24px] md:text-[40px] font-bold text-[#FF4D2A]">
                {displayCountries[1]}
              </span>
              <span className="text-[14px] sm:text-[16px] md:text-[24px] text-[#FF4D2A]/20">
                {displayCountries[2]}
              </span>
            </div>

            <button
              onClick={goRight}
              className="bg-[#4B4B4B] rounded-[10px] w-8 h-8 flex items-center justify-center">
              <FaAngleRight className="text-[#FF4D2A]" />
            </button>
          </div>

          <div className="flex gap-1 sm:gap-2 mt-2">
            {countries.map((_, idx) => (
              <div
                key={idx}
                className={`w-2 h-2 rounded-full ${
                  idx === currentIndex ? "bg-[#FF4D2A]" : "bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col items-center">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
          {tags.slice(0, 6).map((tag) => (
            <button
              key={tag}
              onClick={() => onTagSelect(tag)}
              className={`px-4 sm:px-6 py-2 border rounded-full text-sm transition-all ${
                activeTag === tag
                  ? "border-[#FF4D2A] text-[#FF4D2A]"
                  : "border-white text-white"
              }`}>
              {tag}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-4 sm:mt-6">
          {tags.slice(6, 11).map((tag) => (
            <button
              key={tag}
              onClick={() => onTagSelect(tag)}
              className={`px-4 sm:px-6 py-2 border rounded-full text-sm transition-all ${
                activeTag === tag
                  ? "border-[#FF4D2A] text-[#FF4D2A]"
                  : "border-white text-white"
              }`}>
              {tag}
            </button>
          ))}
        </div>

        <div className="mt-4 sm:mt-6">
          <button
            onClick={() => onTagSelect("Trending for you")}
            className={`px-4 sm:px-6 py-2 border rounded-full text-sm transition-all ${
              activeTag === "Trending for you"
                ? "border-[#FF4D2A] text-[#FF4D2A]"
                : "border-white text-white"
            }`}>
            Trending for you
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewHappeningSection;
