import React from "react";

interface CreateEventButtonProps {
  onClick: () => void;
}

export default function CreateEventButton({ onClick }: CreateEventButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center gap-2 w-[140px] h-[40px] md:w-[195px] md:h-[52px] rounded-[8.34px] bg-[#252729]"
    >
      <svg
        width="23.355449676513672"
        height="23.355449676513672"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.75829 17.5166C13.5954 17.5166 17.5166 13.5954 17.5166 8.75829C17.5166 3.92122 13.5954 0 8.75829 0C3.92122 0 0 3.92122 0 8.75829C0 13.5954 3.92122 17.5166 8.75829 17.5166Z"
          fill="#919499"
          fillOpacity="0.25"
        />
        <path
          d="M8.75879 4.86572V12.6509M12.6514 8.7583H4.86621"
          stroke="#919499"
          strokeWidth="1.16777"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
      </svg>
      <span className="font-inter font-medium text-[14px] md:text-[18.72px] leading-[121%] text-[#919499]">
        Create event
      </span>
    </button>
  );
}
