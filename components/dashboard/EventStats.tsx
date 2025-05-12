"use client";

import React from "react";

interface Stat {
  title: string;
  value: string;
  color: string; 
}

const stats: Stat[] = [
  { title: "Total Events", value: "600", color: "#FF4D2A" },
  { title: "Published", value: "400", color: "#3B82F6" },
  { title: "Total Attendees", value: "782", color: "#EC4899" },
  { title: "Revenue Earned", value: "$23,000", color: "#A855F7" },
  { title: "Tickets Sold", value: "826", color: "#22C55E" },
  { title: "Upcoming Events", value: "34", color: "#EC4899" },
];

const StatCard: React.FC<Stat> = ({ title, value, color }) => (
  <div className="relative group cursor-pointer overflow-hidden bg-[#1B1B1B] rounded-lg h-56 shadow-lg">
    <div
      className="absolute bottom-0 left-0 w-full h-1 group-hover:h-[90%] transition-[height] duration-500 ease-in-out"
      style={{ backgroundColor: color, zIndex: 0 }}
    />

    {/* content */}
    <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
      <p className="text-4xl md:text-5xl font-bold text-white">{value}</p>
      <p className="mt-2 text-sm md:text-lg text-gray-400">{title}</p>
    </div>
  </div>
);

const EventStats: React.FC = () => (
  <section className="w-full mt-12">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
      {stats.map((s, i) => (
        <StatCard key={i} title={s.title} value={s.value} color={s.color} />
      ))}
    </div>
  </section>
);

export default EventStats;
