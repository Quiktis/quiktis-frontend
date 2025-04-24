import React, { useState } from "react";

export default function Filters() {
  const [priceOptions, setPriceOptions] = useState<string[]>([]);
  const [dateOptions, setDateOptions] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  const toggleFilter = (
    state: string[],
    setState: React.Dispatch<React.SetStateAction<string[]>>,
    option: string
  ) => {
    setState((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  return (
    <div className="rounded-lg p-4 backdrop-blur-md text-white space-y-6">
      <h2 className="text-xl font-bold mb-4">Filters</h2>

      <div className="mb-6">
        <h3 className="text-white text-sm font-bold mb-2">Price</h3>
        <div className="space-y-2 text-sm">
          {["free", "paid"].map((option) => (
            <label
              key={option}
              className="flex items-center gap-2 cursor-pointer group">
              <input
                type="checkbox"
                checked={priceOptions.includes(option)}
                onChange={() =>
                  toggleFilter(priceOptions, setPriceOptions, option)
                }
                className="h-4 w-4 border-2 border-white rounded-sm bg-transparent/10 
                         checked:bg-transparent checked:border-[#FF4D2A] checked:accent-[#FF4D2A]
                         focus:ring-0 focus:ring-offset-0 cursor-pointer
                         transition-colors hover:border-[#FF4D2A]
                         [color-scheme:dark]"
              />
              <span className="text-gray-300 group-hover:text-white capitalize">
                {option}
              </span>
            </label>
          ))}
        </div>
        <hr className="mt-4 border-gray-600" />
      </div>

      <div className="mb-6">
        <h3 className="text-white text-sm font-bold mb-2">Date</h3>
        <div className="space-y-2 text-sm">
          {["today", "tomorrow", "week", "weekend", "pick"].map((option) => (
            <label
              key={option}
              className="flex items-center gap-2 cursor-pointer group">
              <input
                type="checkbox"
                checked={dateOptions.includes(option)}
                onChange={() =>
                  toggleFilter(dateOptions, setDateOptions, option)
                }
                className="h-4 w-4 border-2 border-white rounded-sm bg-transparent/10 
                         checked:bg-transparent checked:border-[#FF4D2A] checked:accent-[#FF4D2A]
                         focus:ring-0 focus:ring-offset-0 cursor-pointer
                         transition-colors hover:border-[#FF4D2A]
                         [color-scheme:dark]"
              />
              <span className="text-gray-300 group-hover:text-white capitalize">
                {option.replace("-", " ")}
              </span>
            </label>
          ))}
        </div>
        <hr className="mt-4 border-gray-600" />
      </div>

      <div className="mb-6">
        <h3 className="text-white text-sm font-bold mb-2">Category</h3>
        <div className="space-y-2 text-sm">
          {[
            "Entertainment Events",
            "Sports Events",
            "Educational Events",
            "Business & Professional events",
            "Cultural & Community events",
            "Expos & Markets",
            "Virtual & Hybrid events",
          ].map((category) => (
            <label
              key={category}
              className="flex items-center gap-2 cursor-pointer group">
              <input
                type="checkbox"
                checked={categories.includes(category)}
                onChange={() =>
                  toggleFilter(categories, setCategories, category)
                }
                className="h-4 w-4 border-2 border-white rounded-sm bg-transparent/10 
                         checked:bg-transparent checked:border-[#FF4D2A] checked:accent-[#FF4D2A]
                         focus:ring-0 focus:ring-offset-0 cursor-pointer
                         transition-colors hover:border-[#FF4D2A]
                         [color-scheme:dark]"
              />
              <span className="text-gray-300 group-hover:text-white">
                {category}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
