import React from "react";

interface FilterToggleProps {
  activeFilter: "upcoming" | "past";
  onFilterChange: (filter: "upcoming" | "past") => void;
}

export default function FilterToggle({
  activeFilter,
  onFilterChange,
}: FilterToggleProps) {
  return (
    <div
      className="flex items-center gap-2 w-[177.97px] h-[44.15px] rounded-[67.93px] bg-[#25272959] p-[6px]"
      style={{
        backdropFilter: "blur(6.792630195617676px)",
      }}
    >
      <button
        onClick={() => onFilterChange("upcoming")}
        className="font-inter font-semibold text-[13.59px] leading-[121%] tracking-[-0.04em] border-0 cursor-pointer transition-all duration-300 ease-in-out rounded-[67.93px]"
        style={{
          width: activeFilter === "upcoming" ? "98.4931411743164px" : "auto",
          height: activeFilter === "upcoming" ? "31.24610137939453px" : "auto",
          background: activeFilter === "upcoming" ? "#9194993D" : "transparent",
          color: activeFilter === "upcoming" ? "#FFFFFF" : "#919499",
          padding: activeFilter === "upcoming" ? "8px 16px" : "8px 12px",
        }}
      >
        Upcoming
      </button>
      <button
        onClick={() => onFilterChange("past")}
        className="font-inter font-semibold text-[13.59px] leading-[121%] tracking-[-0.04em] border-0 cursor-pointer transition-all duration-300 ease-in-out rounded-[67.93px]"
        style={{
          width: activeFilter === "past" ? "98.4931411743164px" : "auto",
          height: activeFilter === "past" ? "31.24610137939453px" : "auto",
          background: activeFilter === "past" ? "#9194993D" : "transparent",
          color: activeFilter === "past" ? "#FFFFFF" : "#919499",
          padding: activeFilter === "past" ? "8px 16px" : "8px 12px",
        }}
      >
        Past
      </button>
    </div>
  );
}
