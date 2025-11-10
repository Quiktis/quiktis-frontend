import React from "react";
import Image from "next/image";

export default function PublicBadge() {
  return (
    <div
      role="button"
      aria-label="Public"
      tabIndex={0}
      className="w-[135px] h-[42px] bg-white/[0.0588] backdrop-blur-[20px] rounded-[7px] inline-flex items-center justify-center gap-[2px] px-3 cursor-pointer"
    >
      <div className="w-[22px] h-[22px] flex items-center justify-center flex-shrink-0">
        <Image
          src="/icons/global-icon.svg"
          alt="Public"
          width={22}
          height={22}
          priority
        />
      </div>
      <span className="font-medium text-[20px] leading-none text-[#D2DDDA] inline-block text-center">
        Public
      </span>
    </div>
  );
}
