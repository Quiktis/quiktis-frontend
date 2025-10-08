"use client";

import React, { useState } from "react";

interface FilterTabsProps {
  tabs: string[];
}

const FilterTabs: React.FC<FilterTabsProps> = ({ tabs }) => {
  const [active, setActive] = useState<string>(tabs[0]);

  return (
    <div className="flex justify-center space-x-4 mt-8">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          className={`px-4 py-2 rounded-full text-sm font-medium
            ${
              active === tab
                ? "bg-red-600 text-white"
                : "bg-gray-800 text-gray-400 hover:bg-gray-700"
            }`}>
          {tab}
        </button>
      ))}
    </div>
  );
};

export default FilterTabs;
