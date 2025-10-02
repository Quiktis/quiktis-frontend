"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const recentSearches = [
  "Science & Technology",
  "Food and Drinks",
  "Lagos",
  "Latest Events",
  "What's Trending",
];

export default function RecentSearches() {
  return (
    <div className="flex flex-col gap-3 sm:gap-4">
      <h2 className="font-semibold text-base sm:text-lg text-white">
        Recent Searches
      </h2>
      <ul className="flex flex-col gap-1 sm:gap-2">
        {recentSearches.map((search, index) => (
          <li key={index} className="flex items-center gap-2 py-1">
            <FontAwesomeIcon
              icon={faSearch}
              className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400"
            />
            <span className="text-xs sm:text-sm text-white">{search}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
