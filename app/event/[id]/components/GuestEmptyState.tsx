import React from "react";
import Image from "next/image";

const GuestEmptyState: React.FC = () => {
  return (
    <div className="mb-[297.91px]">
      <div className="mb-[37px]">
        <Image
          src="/inactive_events.svg"
          alt="No guests"
          width={330}
          height={112}
          className="opacity-100"
        />
      </div>

      <h2
        className="font-inter font-medium text-[33.36px] leading-[100%] 
        tracking-[-0.04em] text-[#919499] m-0 mb-[11px]"
      >
        No Guests Yet!
      </h2>

      <p
        className="font-poppins font-medium text-[20.02px] leading-[25.07px] 
        tracking-[-0.04em] text-[#919499] m-0"
      >
        Add or share event to help people get started
      </p>
    </div>
  );
};

export default GuestEmptyState;
