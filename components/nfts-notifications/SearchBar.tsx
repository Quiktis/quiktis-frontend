"use client";

import React from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  return (
    <div className="mb-8 px-20 max-md:px-5">
      <div className="flex items-center border border-[#F68B61] bg-[#111111] p-2 rounded-lg">
        <input
          type="text"
          placeholder="Search event or Offers"
          className="w-full px-4 py-2 bg-transparent outline-none placeholder:text-gray-400 text-white text-base flex-grow"
        />
        <button className="ml-6 bg-[#F68B61] text-white px-4 py-1.5 rounded-md text-sm inline-flex items-center whitespace-nowrap">
          <FaSearch className="h-4 w-4 mr-1" />
          <span>Search Event</span>
        </button>
      </div>
    </div>
  );
}
