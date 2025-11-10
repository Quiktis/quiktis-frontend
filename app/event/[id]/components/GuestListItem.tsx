import React from "react";
import { CountingIcon } from "./Icons";

interface Guest {
  name: string;
  status: "Guest approved" | "Guest pending";
  id: number;
}

interface GuestListItemProps {
  guest: Guest;
}

const GuestListItem: React.FC<GuestListItemProps> = ({ guest }) => {
  const isApproved = guest.status === "Guest approved";

  return (
    <div
      className="px-4 py-3 flex flex-col items-start gap-3 
        md:flex-row md:items-center rounded-[9.19px]
        bg-[#FFFFFF05] border-[0.33px] border-[#91949926] 
        backdrop-blur-[10.33px]"
    >
      {/* Name */}
      <div className="md:min-w-[200px]">
        <span className="text-white font-inter font-medium text-2xl leading-[121%]">
          {guest.name}
        </span>
      </div>

      {/* Status Badge */}
      <div className="mt-1 md:mt-0 md:absolute md:left-[220px] md:ml-[10px]">
        <div
          className={`inline-flex h-[42px] md:w-[191px] rounded-full 
            items-center justify-center px-4
            ${isApproved ? "bg-[#7BFF001A]" : "bg-[#FF994A1A]"}`}
        >
          <span
            className={`font-inter font-medium leading-[121%] 
              text-sm md:text-[20px]
              ${isApproved ? "text-[#7BFF00]" : "text-[#FF994A]"}`}
          >
            {guest.status}
          </span>
        </div>
      </div>

      {/* Count */}
      <div className="flex items-center gap-1 self-end md:self-auto md:ml-auto">
        <CountingIcon className="w-6 h-6" />
        <span className="text-[#919499] text-[20px]">{guest.id}</span>
      </div>
    </div>
  );
};

export default GuestListItem;
export type { Guest, GuestListItemProps };
