import React from "react";

interface StatsCardProps {
  label: string;
  value: number | string;
}

const StatsCard: React.FC<StatsCardProps> = ({ label, value }) => (
  <div
    className="
      bg-[#111111]
      rounded-lg
      p-12           /* increased padding */
      flex flex-col
      items-center
      text-center
      min-h-[200px] /* ensure a minimum height */
    ">
    <span className="text-gray-300 text-xl">{label}</span> {/* larger label */}
    <span className="text-6xl font-bold mt-6">{value}</span>{" "}
    {/* bigger number */}
  </div>
);

export default StatsCard;
