import React from "react";
import Image from "next/image";

interface ActionButtonProps {
  icon: string;
  iconBgColor: string;
  text: string;
  onClick?: () => void;
  iconAlt?: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  icon,
  iconBgColor,
  text,
  onClick,
  iconAlt = "icon",
}) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-4 rounded-[11.66px] backdrop-blur-[13.11px] 
        hover:bg-white/10 transition-colors cursor-pointer flex-none
        w-[237.89px] h-[55.97px] border-[0.33px] border-[#91949926]
        bg-[#FFFFFF05] justify-start px-[10px]"
    >
      <div
        className="rounded-lg flex-shrink-0 relative overflow-hidden 
          w-[33.438px] h-[33.438px] flex items-center justify-center"
        style={{ backgroundColor: iconBgColor }}
      >
        <Image
          src={icon}
          alt={iconAlt}
          width={33}
          height={33}
          className="object-contain"
        />
      </div>
      <span className="font-inter font-medium text-[17.27px] text-[#D2DDDA]">
        {text}
      </span>
    </button>
  );
};

export default ActionButton;
export type { ActionButtonProps };
