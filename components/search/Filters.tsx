import React, { useState } from "react";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";

const FILTER_ICON_SRC = "/icons/searchfilter.png";

function FilterPanel({ onClose }: { onClose?: () => void }) {
  const [priceOptions, setPriceOptions] = useState<string[]>([]);
  const [dateOptions, setDateOptions] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  const toggleFilter = (
    state: string[],
    setState: React.Dispatch<React.SetStateAction<string[]>>,
    option: string
  ) =>
    setState((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );

  return (
    <div className="relative rounded-lg p-4 backdrop-blur-md text-white space-y-6">
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl leading-none"
          aria-label="Close filters">
          &times;
        </button>
      )}

      <h2 className="text-xl font-bold mb-4">Filters</h2>

      <div className="mb-6">
        <h3 className="text-[#0072FF] text-sm font-bold mb-2">Price</h3>
        <div className="space-y-2 text-sm">
          {["free", "paid"].map((opt) => (
            <label
              key={opt}
              className="flex items-center gap-2 cursor-pointer group">
              <input
                type="checkbox"
                checked={priceOptions.includes(opt)}
                onChange={() =>
                  toggleFilter(priceOptions, setPriceOptions, opt)
                }
                className="
                  h-4 w-4 border-2 border-white rounded-sm bg-transparent/10
                  checked:bg-transparent checked:border-[#FF4D2A] checked:accent-[#FF4D2A]
                  focus:ring-0 focus:ring-offset-0 cursor-pointer
                  transition-colors hover:border-[#FF4D2A]
                  [color-scheme:dark]
                "
              />
              <span className="text-base md:text-sm text-gray-300 group-hover:text-white capitalize">
                {opt}
              </span>
            </label>
          ))}
        </div>
        <hr className="mt-4 border-gray-600" />
      </div>

      <div className="mb-6">
        <h3 className="text-[#0072FF] text-sm font-bold mb-2">Date</h3>
        <div className="space-y-2 text-sm">
          {["today", "tomorrow", "week", "weekend", "pick"].map((opt) => (
            <label
              key={opt}
              className="flex items-center gap-2 cursor-pointer group">
              <input
                type="checkbox"
                checked={dateOptions.includes(opt)}
                onChange={() => toggleFilter(dateOptions, setDateOptions, opt)}
                className="
                  h-4 w-4 border-2 border-white rounded-sm bg-transparent/10
                  checked:bg-transparent checked:border-[#FF4D2A] checked:accent-[#FF4D2A]
                  focus:ring-0 focus:ring-offset-0 cursor-pointer
                  transition-colors hover:border-[#FF4D2A]
                  [color-scheme:dark]
                "
              />
              <span className="text-base md:text-sm text-gray-300 group-hover:text-white capitalize">
                {opt.replace("-", " ")}
              </span>
            </label>
          ))}
        </div>
        <hr className="mt-4 border-gray-600" />
      </div>

      <div className="mb-6">
        <h3 className="text-[#0072FF] text-sm font-bold mb-2">Category</h3>
        <div className="space-y-2 text-sm">
          {[
            "Entertainment Events",
            "Sports Events",
            "Educational Events",
            "Business & Professional events",
            "Cultural & Community events",
            "Expos & Markets",
            "Virtual & Hybrid events",
          ].map((cat) => (
            <label
              key={cat}
              className="flex items-center gap-2 cursor-pointer group">
              <input
                type="checkbox"
                checked={categories.includes(cat)}
                onChange={() => toggleFilter(categories, setCategories, cat)}
                className="
                  h-4 w-4 border-2 border-white rounded-sm bg-transparent/10
                  checked:bg-transparent checked:border-[#FF4D2A] checked:accent-[#FF4D2A]
                  focus:ring-0 focus:ring-offset-0 cursor-pointer
                  transition-colors hover:border-[#FF4D2A]
                  [color-scheme:dark]
                "
              />
              <span className="text-base md:text-sm text-gray-300 group-hover:text-white">
                {cat}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Filters() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="md:hidden flex items-center w-full gap-2 py-2 px-0">
        <div className="flex-1 flex items-center bg-white rounded-[10px] px-3 py-2">
          <CiSearch size={20} className="text-gray-700" />
          <input
            type="text"
            placeholder="Search"
            className="ml-2 flex-1 bg-transparent focus:outline-none text-gray-700 text-base"
          />
        </div>

        <button
          onClick={() => setIsOpen(true)}
          className="flex-shrink-0 flex items-center justify-center bg-[#4b4b4b] rounded-[10px] p-2"
          aria-label="Open filters">
          <Image src={FILTER_ICON_SRC} width={28} height={28} alt="Filters" />
        </button>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
      {isOpen && (
        <div className="fixed inset-x-0 bottom-0 h-[80vh] bg-black rounded-t-[25px] z-50 overflow-auto">
          <FilterPanel onClose={() => setIsOpen(false)} />
        </div>
      )}
      <div className="hidden md:block">
        <FilterPanel />
      </div>
    </>
  );
}
