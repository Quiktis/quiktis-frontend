import React from "react";

interface DateDisplayProps {
  date: string;
  weekday: string;
  isLive?: boolean;
  variant: "mobile" | "desktop";
}

export default function DateDisplay({
  date,
  weekday,
  isLive = false,
  variant,
}: DateDisplayProps) {
  if (variant === "mobile") {
    return (
      <div className="flex items-center justify-between mb-3">
        <div className="text-left">
          <div className="text-white font-semibold text-base">{date}</div>
          <div className="text-gray-400 text-sm">{weekday}</div>
        </div>
        {isLive && (
          <div className="text-red-500 font-semibold text-sm">LIVE.</div>
        )}
      </div>
    );
  }

  // Desktop variant
  return (
    <div
      className="rounded-[15px] p-6 text-left flex flex-col justify-between w-[222px] h-[234px] border-[0.5px] border-[#91949926] bg-[#15181B3D]"
      style={{
        backdropFilter: "blur(15px)",
      }}
    >
      <div>
        <div className="text-white font-medium text-[20px] leading-none mb-2">
          {date}
        </div>
        <div className="text-[#666666] font-medium text-[20px] leading-none">
          {weekday}
        </div>
      </div>
      {isLive && (
        <div className="text-[#FF0000] font-medium text-[32px] leading-none">
          LIVE.
        </div>
      )}
    </div>
  );
}
