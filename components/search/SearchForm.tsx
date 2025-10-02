"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function SearchForm() {
  const [country, setCountry] = useState("Nigeria");
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", query, "in", country);
  };

  return (
    <div className="flex flex-col gap-3 w-full max-w-[600px] ">
      {/* <Image
        src="/gradient.png"
        alt="Background Gradient"
        fill
        className="object-cover z-0"
        style={{ filter: "brightness(0.8)" }}
        priority
      /> */}
      <div className="flex flex-col">
        <label className="text-xs sm:text-sm text-gray-300 mb-1"></label>
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="
            bg-white/10 
            backdrop-blur-md 
            border 
            border-[#FF4D2A] 
            text-[#FF4D2A] 
            px-3 py-2 
            sm:px-4 sm:py-3 
            rounded-md 
            outline-none 
            w-28 sm:w-32
          "
        >
          <option value="Nigeria">Nigeria</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
        </select>
      </div>

      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Search Event"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="
            flex-1 
            bg-white/10 
            backdrop-blur-md 
            border 
            border-[#FF4D2A] 
            text-white 
            placeholder:text-gray-300 
            px-3 py-2 
            sm:px-4 sm:py-3 
            rounded-md 
            outline-none
          "
        />

        <button
          onClick={handleSearch}
          className="
            bg-white/10 
            backdrop-blur-md 
            border 
            border-[#FF4D2A] 
            text-white 
            px-3 py-2 
            sm:px-4 sm:py-3 
            rounded-md 
            hover:bg-[#FF4D2A]/20 
            transition-colors 
            duration-200
          "
          aria-label="Search"
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
  );
}
