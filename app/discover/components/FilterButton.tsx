import React from "react";

interface FilterButtonProps {
  label: string;
  isActive?: boolean;
  onClick: () => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({
  label,
  isActive = false,
  onClick,
}) => (
  <button
    onClick={onClick}
    className={`flex-1 md:flex-none rounded-[8.4px] font-medium transition-colors duration-200
      ${isActive ? "text-[#D2DDDA]" : "text-[#666666]"} 
      text-[14px] md:text-xl w-full md:w-[120px] h-9 md:h-10 
      flex items-center justify-center
      bg-white/[0.06] backdrop-blur-[24px]`}
  >
    {label}
  </button>
);

export default FilterButton;
export type { FilterButtonProps };
