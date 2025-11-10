import React from "react";

interface AmountCardProps {
  label?: string;
  amount?: string;
  isEmpty?: boolean;
}

export default function AmountCard({
  label,
  amount,
  isEmpty = false,
}: AmountCardProps) {
  if (isEmpty) {
    return (
      <div
        className="w-[245px] h-[174px] rounded-[10px] border border-[#373737B2] bg-[#FFFFFF05] flex-shrink-0 flex-grow-0"
        style={{
          backdropFilter: "blur(10px)",
        }}
      ></div>
    );
  }

  return (
    <div
      className="flex flex-col justify-center w-[244px] h-[174px] rounded-[10px] border border-[#373737B2] bg-[#FFFFFF05] flex-shrink-0 flex-grow-0 p-6"
      style={{
        backdropFilter: "blur(10px)",
      }}
    >
      <p className="font-inter font-medium text-[20px] leading-[100%] text-[#666666] mb-3">
        {label}
      </p>
      <h3 className="font-inter font-medium text-[36px] leading-[100%] text-[#FFFFFF]">
        {amount}
      </h3>
    </div>
  );
}
