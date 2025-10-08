import React from "react";
import Image from "next/image";
import { FaDollarSign, FaChartLine, FaUsers } from "react-icons/fa";

interface ComparisonSectionProps {
  previousImage: string;
  currentImage: string;
  previous: {
    ticketSales: number;
    engagement: number;
    attendance: number;
  };
  current: {
    ticketSales: number;
    engagement: number;
    attendance: number;
  };
}

const ComparisonSection: React.FC<ComparisonSectionProps> = ({
  previousImage,
  currentImage,
  previous,
  current,
}) => {
  const metrics = [
    {
      icon: <FaDollarSign className="text-white text-xl" />,
      label: "TICKET SALES",
      prev: previous.ticketSales,
      curr: current.ticketSales,
    },
    {
      icon: <FaChartLine className="text-white text-xl" />,
      label: "ENGAGEMENT",
      prev: previous.engagement,
      curr: current.engagement,
    },
    {
      icon: <FaUsers className="text-white text-xl" />,
      label: "ATTENDANCE",
      prev: previous.attendance,
      curr: current.attendance,
    },
  ];

  return (
    <div className="bg-[#111111] rounded-lg p-6">
      <h2 className="text-center text-white text-xl font-semibold uppercase mb-10">
        COMPARISON WITH LAST EVENT
      </h2>

      <div className="flex justify-center items-center gap-[80px] md:gap-[120px] mb-12">
        <div className="flex items-center gap-2">
          <span className="text-[10px] md:text-sm uppercase text-white">
            Previous Events
          </span>
          <Image
            src={previousImage}
            width={60}
            height={120}
            alt="Previous Event"
            className="rounded-md object-cover"
          />
        </div>

        <div className="flex items-center gap-2">
          <Image
            src={currentImage}
            width={60}
            height={120}
            alt="Current Event"
            className="rounded-md object-cover"
          />
          <span className="text-[10px] md:text-sm uppercase text-white">
            Current Event
          </span>
        </div>
      </div>

      <div className="flex flex-row justify-between items-center gap-2 mt-6 flex-wrap md:flex-nowrap">
        <div className="flex flex-col gap-6 flex-1 items-end min-w-[80px]">
          {metrics.map(({ prev }, i) => (
            <div
              key={i}
              className="relative h-6 md:h-8 bg-[#0F1A24] w-[100px] md:w-[180px] flex justify-end"
              style={{
                borderTopLeftRadius: "15px",
                borderTopRightRadius: "15px",
                borderBottomLeftRadius: "15px",
                borderBottomRightRadius: "15px",
              }}>
              <div
                className="h-full flex items-center justify-start pl-2 text-black text-[10px] md:text-xs font-bold"
                style={{
                  width: `${prev}%`,
                  backgroundColor: "#F68B61",
                  borderTopRightRadius: "0px",
                  borderBottomRightRadius: "0px",
                  borderTopLeftRadius: "15px",
                  borderBottomLeftRadius: "15px",
                }}>
                {prev}%
              </div>
            </div>
          ))}
        </div>

        <div
          className="flex flex-col items-center justify-center w-[80px] md:w-[120px] py-2 md:py-4 space-y-3 md:space-y-4 shrink-0"
          style={{
            background: `linear-gradient(to bottom,
        rgba(255,255,255,0) 0%,
        rgba(255,255,255,0.2) 20%,
        rgba(255,255,255,0.2) 80%,
        rgba(255,255,255,0) 100%)`,
          }}>
          {metrics.map(({ icon, label }, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center gap-1">
              <div className="text-white text-base md:text-xl">{icon}</div>
              <div
                className="text-[10px] md:text-xs font-medium uppercase"
                style={{ color: "rgba(255,255,255,0.86)" }}>
                {label}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-6 flex-1 items-start min-w-[80px]">
          {metrics.map(({ curr }, i) => (
            <div
              key={i}
              className="relative h-6 md:h-8 bg-[#0F1A24] w-[100px] md:w-[180px] flex justify-start"
              style={{
                borderTopLeftRadius: "15px",
                borderTopRightRadius: "15px",
                borderBottomLeftRadius: "15px",
                borderBottomRightRadius: "15px",
              }}>
              <div
                className="h-full flex items-center justify-end pr-2 text-black text-[10px] md:text-xs font-bold"
                style={{
                  width: `${curr}%`,
                  backgroundColor: "#46AAF2",
                  borderTopRightRadius: "15px",
                  borderBottomRightRadius: "15px",
                  borderTopLeftRadius: "0px",
                  borderBottomLeftRadius: "0px",
                }}>
                {curr}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComparisonSection;
