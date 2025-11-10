"use client";

import React from "react";
import { PublicIcon, ProfileImage } from "./OverviewIcons";
import { SectionHeader } from "./SectionHeader";

type VisibilitySectionProps = {
  title?: string;
  description?: string;
  onVisibilityToggle?: () => void;
};

export const VisibilitySection: React.FC<VisibilitySectionProps> = ({
  title = "Personal",
  description = "All your events listed to be public",
  onVisibilityToggle,
}) => {
  return (
    <section className="mb-[50px] sm:mb-[107px]">
      <div className="mb-1 sm:hidden">
        <h2 className="font-inter font-medium text-[23.72px] leading-[121%] tracking-[-0.05em] text-white">
          Edit Visibility
        </h2>
        <p className="font-inter font-medium text-[14.23px] leading-[100%] text-[#919499] align-middle mt-1">
          Determine how people find your event
        </p>
      </div>

      <SectionHeader
        title="Edit Visibility"
        subtitle="Determine how people find your event"
        titleClassName="hidden sm:block text-white font-medium text-[clamp(20px,5vw,40px)] leading-[121%] tracking-[-0.05em]"
        subtitleClassName="hidden sm:block text-[#919499] font-medium text-[clamp(12px,3.5vw,24px)] leading-none mt-1"
      />
      <div
        className="flex items-center justify-between p-3 sm:p-4 rounded-lg gap-3 
          bg-[#FFFFFF05] border-[0.33px] border-[#91949926]"
        style={{
          backdropFilter: "blur(10.33px)",
          WebkitBackdropFilter: "blur(10.33px)",
        }}
      >
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex-shrink-0 flex items-center justify-center bg-yellow-400">
            <ProfileImage className="w-full h-full object-cover rounded-full" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="truncate font-inter font-medium text-[15.91px] sm:text-[clamp(14px,3.5vw,24px)] leading-[121%] text-white">
              {title}
            </p>
            <p className="truncate font-inter font-medium text-[12px] sm:text-[clamp(10px,2.5vw,12.98px)] leading-[121%] text-[#666666]">
              {description}
            </p>
          </div>
        </div>
        <button
          onClick={onVisibilityToggle}
          className="flex items-center justify-center gap-1.5 sm:gap-2 text-sm transition-colors flex-shrink-0 
            px-3 sm:px-4 min-w-fit h-9 rounded-[7px] bg-[#FFFFFF05]"
          style={{
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          <PublicIcon className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="font-inter font-medium text-[13.26px] sm:text-[clamp(12px,3vw,20px)] leading-[100%] text-[#D2DDDA] sm:text-white align-middle">
            Public
          </span>
        </button>
      </div>
    </section>
  );
};

export default VisibilitySection;
export type { VisibilitySectionProps };
