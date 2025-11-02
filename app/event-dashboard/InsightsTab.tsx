import React from "react";

interface MetricCardProps {
  iconSrc: string;
  label: string;
  value: number;
}

const MetricCard: React.FC<MetricCardProps> = ({ iconSrc, label, value }) => {
  return (
    <div
      className="flex items-center justify-between px-4 py-3"
      style={{
        height: "79px",
        borderRadius: "15px",
        background: "#FFFFFF03",
        border: "1px solid #9194994F",
        backdropFilter: "blur(15px)",
      }}
    >
      <div className="flex items-center gap-[4.91px]">
        <img
          src={iconSrc}
          alt={label}
          className="object-contain"
          style={{
            width: "25px",
            height: "25px",
          }}
        />
        <span
          style={{
            fontFamily: "Inter",
            fontSize: "20.31px",
            fontWeight: 500,
            lineHeight: "100%",
            letterSpacing: "0%",
            color: "#919499",
          }}
        >
          {label}
        </span>
      </div>
      <span
        style={{
          fontFamily: "Inter",
          fontSize: "20.31px",
          fontWeight: 500,
          lineHeight: "100%",
          letterSpacing: "0%",
          color: "#FFFFFF",
        }}
      >
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
        <h1
          className="uppercase mb-12 sm:mb-16 text-[40px] md:text-[96px] text-left text-[var(--Color-7,#FFF8EC)] md:text-white"
          style={{
            fontFamily: "Silkscreen",
            fontWeight: 700,
            lineHeight: "80%",
            letterSpacing: "-20%",
          }}
        >
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
