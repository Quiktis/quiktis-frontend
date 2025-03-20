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
    <div className="flex flex-col gap-4">
      <h2 className="font-semibold text-lg text-white">Recent Searches</h2>
      <ul className="flex flex-col gap-2">
        {recentSearches.map((search, index) => (
          <li key={index} className="flex items-center gap-2 py-1">
            <FontAwesomeIcon
              icon={faSearch}
              className="w-4 h-4 text-gray-400"
            />
            <span className="text-sm text-white">{search}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
