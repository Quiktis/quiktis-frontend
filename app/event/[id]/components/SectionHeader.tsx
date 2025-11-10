"use client";

import React from "react";
import { Plus } from "lucide-react";

type SectionHeaderProps = {
  title: string;
  subtitle: string;
  titleClassName: string;
  subtitleClassName: string;
  buttonText?: string;
  onButtonClick?: () => void;
};

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  titleClassName,
  subtitleClassName,
  buttonText,
  onButtonClick,
}) => (
  <div className="mb-6 sm:flex sm:items-center sm:justify-between sm:mb-[47px]">
    <div className="flex items-center justify-between gap-3 mb-0.5 sm:hidden">
      <h2 className={titleClassName + " flex-1 min-w-0"}>{title}</h2>
      {buttonText && (
        <button
          onClick={onButtonClick}
          className="flex items-center justify-center gap-2 px-3 transition-colors flex-shrink-0 
            whitespace-nowrap w-[102.60px] h-[34.59px] rounded-[5.3px] 
            border-[0.15px] border-[#91949926] bg-[#FFFFFF0F] relative top-3"
          style={{
            backdropFilter: "blur(5.9564px)",
            WebkitBackdropFilter: "blur(5.9564px)",
          }}
        >
          <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 bg-[#312E81]/50">
            <Plus size={18.438} className="text-indigo-400" />
          </div>
          <span className="font-inter font-medium text-[11.53px] text-[#D2DDDA] whitespace-nowrap leading-[100%] block">
            {buttonText}
          </span>
        </button>
      )}
    </div>
    <p
      className={
        subtitleClassName +
        " break-words whitespace-normal sm:hidden max-w-[calc(100%_-_140px)] mt-[3px] sm:mt-0 break-words"
      }
    >
      {subtitle === "Co-host, add guest and event manager" ? (
        <>
          <span>Co-host, add guest and</span>
          <br className="sm:hidden" />
          <span>event manager</span>
        </>
      ) : (
        subtitle
      )}
    </p>

    <div className="hidden sm:block sm:flex-1">
      <h2 className={titleClassName}>{title}</h2>
      <p className={subtitleClassName}>{subtitle}</p>
    </div>
    {buttonText && (
      <button
        onClick={onButtonClick}
        className="hidden sm:flex items-center gap-3 px-3 transition-colors flex-shrink-0 
          sm:w-auto sm:h-[60px] sm:rounded-[9.19px] sm:border-[0.26px] 
          border-[#91949926] bg-[#FFFFFF0F] sm:justify-start"
        style={{
          backdropFilter: "blur(10.33px)",
          WebkitBackdropFilter: "blur(10.33px)",
        }}
      >
        <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 bg-[#312E81]/50">
          <Plus size={20} className="text-indigo-400" />
        </div>
        <span className="font-inter font-medium text-[clamp(14px,3.5vw,20px)] text-[#D2DDDA] leading-[100%] block">
          {buttonText}
        </span>
      </button>
    )}
  </div>
);

export default SectionHeader;
export type { SectionHeaderProps };
