"use client";

import React, { useEffect, useRef, useState } from "react";

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

export const StackedGlassLinkBars: React.FC<StackedGlassLinkBarsProps> = ({
  topText,
  topCopyUrl,
  behindText,
  peekBehind = 0,
  behindFontSize = "20px",
  className = "",
}) => {
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

  const baseWidth =
    typeof window !== "undefined" && window.innerWidth < 640
      ? 311.29168701171875
      : 490;

  const barBaseStyle: React.CSSProperties = {
    background: "#FFFFFF0F",
    backdropFilter:
      typeof window !== "undefined" && window.innerWidth < 640
        ? "blur(12.746599197387695px)"
        : "blur(20px)",
    WebkitBackdropFilter:
      typeof window !== "undefined" && window.innerWidth < 640
        ? "blur(12.746599197387695px)"
        : "blur(20px)",
    width: `${baseWidth}px`,
    height:
      typeof window !== "undefined" && window.innerWidth < 640
        ? "38.87712860107422px"
        : "61px",
    margin: "0 -1rem",
    paddingLeft: "25px",
    paddingRight:
      typeof window !== "undefined" && window.innerWidth < 640
        ? "20px"
        : "62px",
    gap: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxSizing: "border-box",
  };

  const copyAreaWidth = 60;

  const topTextStyle: React.CSSProperties = {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    flexGrow: 1,
    flexShrink: 1,
    maxWidth: `calc(${baseWidth}px - 32px - 16px - ${copyAreaWidth}px)`,
  };

  const copyStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    flexShrink: 0,
    width: `${copyAreaWidth}px`,
  };

  const behindTextStyle: React.CSSProperties = {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "clip",
    flexGrow: 1,
    flexShrink: 1,
    maxWidth: `calc(${baseWidth}px - 32px - 16px - ${copyAreaWidth}px)`,
  };

  return (
    <div className={`relative ${className}`} style={{ minWidth: 0 }}>
      <div
        aria-hidden="true"
        className="-mb-[18.6px]"
        style={{
          ...barBaseStyle,
          position: "absolute",
          left: 0,
          top: 0 + peekBehind,
          zIndex: 0,
          overflow: "visible",
          pointerEvents: "none",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
          <div
            style={{
              flex: "1 1 auto",
              maxWidth: `calc(100% - ${copyAreaWidth}px)`,
            }}
          >
            <span
              className="font-inter font-medium leading-[100%] text-[#D2DDDA]"
              style={{
                ...behindTextStyle,
                fontSize:
                  typeof window !== "undefined" && window.innerWidth < 640
                    ? "12.75px"
                    : behindFontSize,
              }}
            >
              {behindText}
            </span>
          </div>

          <div
            style={{
              width: `${copyAreaWidth}px`,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <span
              className="font-inter font-medium leading-[100%] text-[#D2DDDA]"
              style={{
                ...copyStyle,
                visibility: "hidden",
                fontSize:
                  typeof window !== "undefined" && window.innerWidth < 640
                    ? "12.75px"
                    : "20px",
              }}
            >
              Copy
            </span>
          </div>
        </div>
      </div>

      <div
        role="region"
        aria-label="Event link"
        style={{
          ...barBaseStyle,
          position: "relative",
          zIndex: 10,
          overflow: "hidden",
        }}
      >
        <span
          className="font-inter font-medium leading-[100%] text-[#D2DDDA]"
          style={{
            ...topTextStyle,
            fontSize:
              typeof window !== "undefined" && window.innerWidth < 640
                ? "12.75px"
                : "20px",
          }}
        >
          {topText}
        </span>

        <div
          className="font-inter font-medium leading-[100%] text-[#D2DDDA]"
          style={{
            ...copyStyle,
            fontSize:
              typeof window !== "undefined" && window.innerWidth < 640
                ? "12.75px"
                : "20px",
          }}
          onClick={handleCopy}
        >
          {copyStatus}
        </div>
      </div>
    </div>
  );
};

export default StackedGlassLinkBars;
export type { StackedGlassLinkBarsProps };
