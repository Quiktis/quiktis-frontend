"use client";
import React from "react";

const tags = [
  "Online",
  "Free",
  "Today",
  "Music",
  "This Weekend",
  "Food and Drinks",
  "Online",
];

export default function TagFilters() {
  const handleTagClick = (tag: string) => {
    console.log("Selected tag:", tag);
  };

  return (
    <div className="flex flex-wrap gap-2 sm:gap-4">
      {tags.map((tag, index) => (
        <button
          key={index}
          onClick={() => handleTagClick(tag)}
          className="
            px-4 py-2 sm:px-6 sm:py-3 
            text-base sm:text-lg 
            rounded-md 
            bg-white/10 
            backdrop-blur-md 
            text-white 
            hover:bg-[#FF4D2A]/20 
            transition-colors 
            duration-200
          "
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
