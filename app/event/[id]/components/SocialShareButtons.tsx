"use client";

import React from "react";
import { FacebookIcon, InstagramIcon, XIcon } from "./OverviewIcons";

type SocialShareButtonsProps = {
  onFacebookClick?: () => void;
  onInstagramClick?: () => void;
  onXClick?: () => void;
};

export const SocialShareButtons: React.FC<SocialShareButtonsProps> = ({
  onFacebookClick,
  onInstagramClick,
  onXClick,
}) => {
  return (
    <>
      <div className="flex items-center gap-0 mt-[30px] sm:mt-4 md:hidden">
        <a href="#" onClick={onFacebookClick} className="p-2">
          <FacebookIcon className="w-[23.05px] h-[20.89px] opacity-100" />
        </a>
        <a href="#" onClick={onInstagramClick} className="p-2">
          <InstagramIcon className="w-[23.05px] h-[20.89px] opacity-100" />
        </a>
        <a href="#" onClick={onXClick} className="p-2">
          <XIcon className="w-[23.05px] h-[20.89px] opacity-100" />
        </a>
      </div>

      <div className="hidden md:flex items-center justify-end -mt-[30px]">
        <div className="flex gap-px">
          <a href="#" onClick={onFacebookClick} className="p-2">
            <FacebookIcon className="w-[23.72px] h-[23.72px] opacity-100" />
          </a>
          <a href="#" onClick={onInstagramClick} className="p-2">
            <InstagramIcon className="w-[23.72px] h-[23.72px] opacity-100" />
          </a>
          <a href="#" onClick={onXClick} className="p-2">
            <XIcon className="w-[23.72px] h-[23.72px] opacity-100" />
          </a>
        </div>
      </div>
    </>
  );
};

export default SocialShareButtons;
export type { SocialShareButtonsProps };
