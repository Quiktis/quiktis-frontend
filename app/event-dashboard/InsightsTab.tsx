import React from "react";
import Image from "next/image";

interface MetricCardProps {
  iconSrc: string;
  label: string;
  value: number;
}

const MetricCard: React.FC<MetricCardProps> = ({ iconSrc, label, value }) => {
  return (
    <div
      className="flex items-center justify-between px-4 py-3 h-[79px] rounded-[15px] border border-[#9194994F] bg-[#FFFFFF03]"
      style={{
        backdropFilter: "blur(15px)",
      }}
    >
      <div className="flex items-center gap-[4.91px]">
        <Image
          src={iconSrc}
          alt={label}
          width={25}
          height={25}
          className="object-contain"
        />
        <span className="text-[#919499] font-medium text-[20.31px] leading-none">
          {label}
        </span>
      </div>
      <span className="text-white font-medium text-[20.31px] leading-none">
        {value}
      </span>
    </div>
  );
};

export default function InsightsTab() {
  const metrics = [
    { iconSrc: "/icons/Insight-events.svg", label: "Events", value: 20 },
    { iconSrc: "/icons/Insight-tickets.svg", label: "Tickets", value: 20 },
    { iconSrc: "/icons/Insight-attendees.svg", label: "Attendees", value: 20 },
    { iconSrc: "/icons/Insight-sales.svg", label: "Sales", value: 20 },
  ];

  return (
    <div className="min-h-screen pb-60">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 pt-[90px]">
        {/* DARE Header */}
        <h1 className="uppercase mb-12 sm:mb-16 text-[40px] md:text-[96px] text-left text-[var(--Color-7,#FFF8EC)] md:text-white font-[Silkscreen] font-bold leading-[80%] tracking-[-0.2em]">
          DARE
        </h1>

        <div className="space-y-[34px]">
          {metrics.map((metric, index) => (
            <MetricCard
              key={index}
              iconSrc={metric.iconSrc}
              label={metric.label}
              value={metric.value}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
