"use client";

import React, { useState, useEffect, useRef } from "react";

const fallbackCopyText = (text: string) => {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed";
  ta.style.left = "-9999px";
  document.body.appendChild(ta);
  ta.select();
  try {
    const ok = document.execCommand("copy");
    document.body.removeChild(ta);
    return ok;
  } catch {
    document.body.removeChild(ta);
    return false;
  }
};

type StackedGlassLinkBarsProps = {
  topText: string;
  topCopyUrl?: string;
  behindText: string;
  peekBehind?: number;
  behindFontSize?: string;
  className?: string;
};

export default function StackedGlassLinkBars({
  topText,
  topCopyUrl,
  behindText,
  peekBehind = 0,
  behindFontSize = "10px",
  className = "",
}: StackedGlassLinkBarsProps) {
  const timerRef = useRef<number | null>(null);
  const [copyStatus, setCopyStatus] = useState("Copy");

  useEffect(() => {
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, []);

  const handleCopy = async () => {
    const text = topCopyUrl ?? topText;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const ok = fallbackCopyText(text);
        if (!ok) throw new Error("fallback copy failed");
      }
      setCopyStatus("Copied!");
    } catch (err) {
      console.error("copy failed", err);
      setCopyStatus("Failed!");
    } finally {
      if (timerRef.current) window.clearTimeout(timerRef.current);
      timerRef.current = window.setTimeout(() => setCopyStatus("Copy"), 2000);
    }
  };

  const copyAreaWidth = 40;

  return (
    <div className={`relative min-w-0 w-full ${className}`}>
      {/* Behind bar */}
      <div
        aria-hidden="true"
        className="absolute left-0 z-0 w-full h-[28px] bg-white/[0.06] backdrop-blur-[20px] flex items-center justify-between px-[10px] gap-2 pointer-events-none overflow-visible"
        style={{ top: `${peekBehind}px` }}
      >
        <div className="flex items-center w-full">
          <div
            className="flex-1 overflow-hidden"
            style={{ maxWidth: `calc(100% - ${copyAreaWidth}px)` }}
          >
            <span
              className="font-medium text-[#D2DDDA] leading-none whitespace-nowrap overflow-hidden text-clip font-inter"
              style={{
                fontSize: behindFontSize,
              }}
            >
              {behindText}
            </span>
          </div>

          <div
            className="flex justify-center"
            style={{ width: `${copyAreaWidth}px` }}
          >
            <span className="invisible font-medium text-[11px] text-[#D2DDDA] leading-none flex items-center justify-center">
              Copy
            </span>
          </div>
        </div>
      </div>

      {/* Top bar */}
      <div
        role="region"
        aria-label="Event link"
        className="relative z-10 bg-white/[0.06] backdrop-blur-[20px] w-full h-[28px] px-[10px] gap-2 flex items-center justify-between overflow-hidden"
      >
        <span className="font-medium text-[11px] leading-none text-[#D2DDDA] whitespace-nowrap overflow-hidden text-ellipsis flex-1">
          {topText}
        </span>

        <div
          className="font-medium text-[11px] leading-none text-[#D2DDDA] flex items-center justify-center cursor-pointer flex-shrink-0"
          style={{ width: `${copyAreaWidth}px` }}
          onClick={handleCopy}
        >
          {copyStatus}
        </div>
      </div>
    </div>
  );
}
