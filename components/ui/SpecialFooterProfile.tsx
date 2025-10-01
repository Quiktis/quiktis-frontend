"use client";

import React from "react";
import { BsArrowUpSquare } from "react-icons/bs";

export default function SpecialFooterProfile() {
  return (
    <footer
      className="max-sm:text-[0.85em] text-[0.94em] mb-0 mt-auto pt-6 sm:pt-6 md:pt-6 lg:pt-[4rem] xl:pt-[5rem] pb-6"
      style={{ background: "#131517" }}
    >
      <div
        className="p-4 flex items-center justify-center max-w-[95%] md:max-w-[85%] mx-auto"
        style={{ background: "transparent" }}
      >
        <div className="flex items-center gap-3 text-center">
          <span
            className="font-inter font-medium text-[24px] leading-[96%]"
            style={{
              background:
                "linear-gradient(90deg, #F57B78 0%, #DF3438 22.12%, #FB2E74 64.87%, #F74FB3 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Host your events with Quiktis
          </span>

          <BsArrowUpSquare
            size={28}
            style={{ color: "#F74FB3", flexShrink: 0 }}
            aria-hidden
          />
        </div>
      </div>
    </footer>
  );
}
