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
    <div className="flex flex-wrap gap-4">
      {tags.map((tag, index) => (
        <button
          key={index}
          onClick={() => handleTagClick(tag)}
          className="
            px-6 py-3 
            text-lg
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
