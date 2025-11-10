import React from "react";

interface TabButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
  width?: string;
}

export default function TabButton({
  label,
  isActive,
  onClick,
  width = "auto",
}: TabButtonProps) {
  const getDesktopWidth = () => {
    if (width !== "auto") return width;

    switch (label) {
      case "Events":
        return "102px";
      case "Payments":
        return "155.69px";
      case "Insights":
        return "132px";
      default:
        return "auto";
    }
  };

  return (
    <button onClick={onClick} className="relative">
      <div
        className="transition-colors cursor-pointer flex items-center justify-center px-5 md:px-5 h-[48px] md:h-[43px] rounded-[7.11px] bg-[#FFFFFF05] w-auto md:w-[var(--desktop-width)]"
        style={
          {
            "--desktop-width": getDesktopWidth(),
            backdropFilter: "blur(20.307693481445312px)",
          } as React.CSSProperties
        }
      >
        <span
          className="text-[18px] md:text-[20.31px] font-inter font-medium leading-[100%] whitespace-nowrap"
          style={{
            color: isActive ? "#FFFFFF" : "#666666",
          }}
        >
          {label}
        </span>
      </div>
      {/* Active underline */}
      {isActive && (
        <div className="absolute left-0 w-full h-[2px] bg-white z-[2] -bottom-[22px]" />
      )}
    </button>
  );
}
