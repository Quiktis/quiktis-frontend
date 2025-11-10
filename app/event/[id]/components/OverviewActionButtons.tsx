"use client";

import React from "react";
import { InviteGuestIcon, ShareEventIcon } from "./OverviewIcons";

type OverviewActionButtonsProps = {
  onInviteGuest?: () => void;
  onShareEvent?: () => void;
};

export const OverviewActionButtons: React.FC<OverviewActionButtonsProps> = ({
  onInviteGuest,
  onShareEvent,
}) => {
  return (
    <div className="mb-[22.95px] sm:mb-6 flex justify-start">
      <div className="flex items-center gap-3">
        <button
          onClick={onInviteGuest}
          className="flex items-center rounded-[7.43px] sm:rounded-[11.7px] hover:bg-white/10 transition-colors 
            w-[151.62px] h-[35.67px] sm:w-[237.89px] sm:h-[55.97px] 
            border-[0.21px] sm:border-[0.33px] border-[#91949926] 
            bg-[#FFFFFF05] justify-start px-2 sm:px-[10px]"
          style={{
            backdropFilter: "blur(13.11px)",
            WebkitBackdropFilter: "blur(13.11px)",
          }}
        >
          <div className="flex-shrink-0 relative overflow-hidden w-[20px] h-[20px] sm:w-[33.438px] sm:h-[33.438px] rounded-[5px] sm:rounded-lg bg-[#FFF200]/50">
            <InviteGuestIcon className="absolute bottom-0 left-0 w-full h-auto object-fill" />
          </div>
          <span className="font-inter font-medium text-[12.5px] sm:text-[17.27px] leading-[100%] text-[#D2DDDA] ml-[3.5px] sm:ml-[6.5px]">
            Invite Guest
          </span>
        </button>
        <button
          onClick={onShareEvent}
          className="flex items-center rounded-[7.43px] sm:rounded-[11.7px] hover:bg-white/10 transition-colors 
            w-[151.62px] h-[35.67px] sm:w-[237.89px] sm:h-[55.97px] 
            border-[0.21px] sm:border-[0.33px] border-[#91949926] 
            bg-[#FFFFFF05] justify-start px-2 sm:px-[10px]"
          style={{
            backdropFilter: "blur(13.11px)",
            WebkitBackdropFilter: "blur(13.11px)",
          }}
        >
          <div className="flex-shrink-0 flex items-center justify-center w-[20px] h-[20px] sm:w-[32.730px] sm:h-[32.730px] rounded-[5px] sm:rounded-lg bg-[#6F4FF2]/[0.14]">
            <ShareEventIcon className="w-full h-full object-contain" />
          </div>
          <span className="font-inter font-medium text-[12.5px] sm:text-[17.27px] leading-[100%] text-[#D2DDDA] ml-[3.5px] sm:ml-[6.5px]">
            Share Event
          </span>
        </button>
      </div>
    </div>
  );
};

export default OverviewActionButtons;
