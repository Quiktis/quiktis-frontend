"use client";

import React from "react";
import { CreatorIcon, GuestIcon, ProfileImage } from "./OverviewIcons";

export type Host = {
  name: string;
  email: string;
  role: "Creator" | "Guest";
};

type HostItemProps = {
  host: Host;
};

export const HostItem: React.FC<HostItemProps> = ({ host }) => (
  <div
    className="flex items-center justify-between p-3 sm:p-4 rounded-lg gap-3 
      bg-[#FFFFFF05] border-[0.33px] border-[#91949926]"
    style={{
      backdropFilter: "blur(10.33px)",
      WebkitBackdropFilter: "blur(10.33px)",
    }}
  >
    <div className="flex items-center gap-1.5 sm:gap-3 flex-1 min-w-0">
      <div className="w-[27.636px] h-[27.636px] sm:w-12 sm:h-12 rounded-full flex-shrink-0 flex items-center justify-center overflow-hidden bg-yellow-400">
        <ProfileImage
          className="w-full h-full object-cover rounded-full"
          alt={host.name}
        />
      </div>
      <div className="flex-1 min-w-0">
        <p className="truncate text-[14.5px] sm:text-[clamp(14px,3.5vw,24px)] leading-[121%] text-[#FFFFFF] font-medium font-inter">
          {host.name}
        </p>
        <p className="truncate text-[12px] sm:text-[clamp(10px,2.5vw,12.98px)] leading-[121%] text-[#666666] font-medium font-inter">
          {host.email}
        </p>
      </div>
    </div>
    <span
      className={
        `font-medium py-1.5 px-3 sm:px-4 flex items-center justify-center gap-1 sm:gap-1 flex-shrink-0 min-w-fit font-inter ` +
        `w-[111px] h-[30.87417px] rounded-[3.68px] ` +
        (host.role === "Creator"
          ? `bg-[#7BFF000F] text-[#FFFFFF]`
          : `bg-[#F74FB30F] text-[#FFFFFF]`) +
        ` text-[14.3px] leading-[121%] ` +
        ` sm:w-[151px] sm:h-[42px] sm:rounded-[5px] sm:cursor-pointer sm:justify-center sm:text-[20px] sm:leading-[121%] sm:font-medium`
      }
    >
      {host.role === "Creator" ? (
        <CreatorIcon className="w-[11.761589px] h-[11.761589px] sm:w-4 sm:h-4" />
      ) : (
        <GuestIcon className="w-[11.761589px] h-[11.761589px] sm:w-4 sm:h-4" />
      )}
      {host.role}
    </span>
  </div>
);

export default HostItem;
