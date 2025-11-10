import React from "react";
import Image from "next/image";

interface EmptyStateProps {
  activeFilter: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ activeFilter }) => {
  return (
    <section className="mb-[120px]">
      <div className="flex justify-between items-center mb-6 md:mb-[53px] gap-4">
        <div className="pl-4 md:pl-0">
          <h2 className="text-white text-[18px] md:text-[32px] font-medium mb-1 leading-none tracking-normal">
            Popular Events
          </h2>
          <p className="text-[#666666] text-[14px] md:text-[32px] font-medium leading-none tracking-normal">
            {activeFilter}
          </p>
        </div>
        <button
          className="font-medium text-[11.8px] text-[#D2DDDA] md:hidden 
            flex items-center justify-center flex-shrink-0
            w-[80px] h-8 rounded-[59.01px]
            bg-white/[0.06] backdrop-blur-[11.8px]"
        >
          View All
        </button>

        {/* Desktop View All */}
        <button
          className="hidden md:inline-flex font-medium text-base text-[#D2DDDA]
            w-[135px] h-[42px] rounded-[100px]
            bg-white/[0.06] backdrop-blur-[20px]
            items-center justify-center"
        >
          View All
        </button>
      </div>

      <div className="flex flex-col items-start justify-start mt-[84px]">
        <div className="mb-[37px]">
          <Image
            src="/inactive_events.svg"
            alt="No events illustration"
            width={353}
            height={120}
            className="object-contain w-[188.3081px] h-[64.0636px] md:w-[353px] md:h-[120px]"
            priority
          />
        </div>
        <div className="text-left">
          <h2
            className="font-medium text-[#919499] text-[17.8px] md:text-[33.36px] 
            leading-[100%] tracking-[-0.04em] mb-[11px] font-inter"
          >
            No event at this time
          </h2>
          <p
            className="block md:hidden font-medium text-[#919499] text-[10.68px] 
            leading-[13.37px] tracking-[-0.04em] font-poppins"
          >
            No event is live at this time, check back or take a bold move
            <br />
            Host your own event now
          </p>
          <p
            className="max-w-md hidden md:block font-inter font-medium text-[19px] 
            leading-[25.07px] tracking-[-0.04em] text-[#919499]"
          >
            No event is live at this time, check back or take a bold move
            <br />
            Host your own event free!
          </p>
        </div>
      </div>
    </section>
  );
};

export default EmptyState;
export type { EmptyStateProps };
