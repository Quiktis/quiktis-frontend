"use client";

import React from "react";
import Image from "next/image";

interface StatCardProps {
  title: string;
  value: string;
  underlineColor: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  underlineColor,
}) => {
  return (
    <div
      className={`bg-[#1B1B1B] rounded-lg px-10 py-12 flex-1 text-center shadow-lg border-b-4 ${underlineColor}`}>
      <p className="text-5xl font-bold text-white">{value}</p>
      <p className="text-lg text-gray-400 mt-3">{title}</p>
    </div>
  );
};

const EventStats: React.FC = () => {
  const stats = [
    {
      title: "Total Events",
      value: "600+",
      underlineColor: "border-[#FF4D2A]",
    },
    { title: "Published", value: "400", underlineColor: "border-blue-500" },
    { title: "In Progress", value: "100", underlineColor: "border-pink-500" },
  ];

  return (
    <section className="relative w-full mt-12 flex flex-col items-center">
      <div className="flex flex-col md:flex-row gap-10 w-full max-w-7xl text-center z-10">
        {stats.map((stat, idx) => (
          <StatCard
            key={idx}
            title={stat.title}
            value={stat.value}
            underlineColor={stat.underlineColor}
          />
        ))}
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2 md:left-[10px] md:transform-none bottom-[50px] z-0">
        <div className="w-[450px] h-[450px] bg-[#FF4D2A] opacity-30 blur-3xl rounded-full"></div>
      </div>

      <div className="w-full flex justify-center z-0 mt-[-100px]">
        <Image
          src="/semicircle.png"
          alt="Semicircle Decoration"
          width={1200}
          height={600}
          className="object-contain mb-30"
        />
      </div>
    </section>
  );
};

export default EventStats;
