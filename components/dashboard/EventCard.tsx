"use client";

import React from "react";
import Image from "next/image";
import { IoTicketSharp } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { formatToHumanReadableDate } from "@/app/utils/utilities";

interface EventCardProps {
  title: string;
  subtitle?: string;
  description?: string;
  date: Date;
  location?: string;
  price?: number | string;
  image?: string;
  time: string;

}



const EventCard: React.FC<EventCardProps> = ({
  title,
  subtitle,
  description,
  date,
  location,
  price,
  image,
}) => {
  const router = useRouter();

  return (
    <div className="w-full md:max-w-[320px] h-auto flex flex-col gap-1 mt-3">
      {/* Image Section */}
      <div className="relative">
        <Image
          src={`${image}`}
          alt={title}
          width={320}
          height={280} 
          className="rounded-[15px] object-cover w-full h-[280px] md:w-[320px] md:h-[280px]"
          unoptimized={true}
        />
        <div className="absolute top-[8px] right-[8px] flex items-center justify-center w-[65px] h-[28px] p-[10px] rounded-[8px] bg-[#FFFFFF26] gap-[10px] text-white text-sm">
          {`₦${price}`}
        </div>
        <div className="absolute bottom-2 right-2">
          {/*<button
            onClick={(e) => {
              e.stopPropagation();
              //router.push(getTicketUrl);
            }}
            className="bg-primary flex gap-2 justify-center text-white py-2 items-center rounded-[10px] px-3 text-sm">
            Get Ticket <IoTicketSharp size={16} />
          </button>*/}
        </div>
      </div>

      <div className="mt-6 flex flex-col">
        <h2 className="text-[1.2em] font-bold">{title}</h2>
        {/*<h4 className="text-[#666666] text-[12px]">{subtitle}</h4>*/}
        {/*<p className="hidden text-[12px]">{description}</p>*/}
      </div>

      <div className="flex justify-between items-center w-full">
        <p className="text-xs text-[#dcdcdc] md:text-sm">{formatToHumanReadableDate(`${date}`)}</p>
        <p className="text-xs text-[#dcdcdc] md:text-sm">{location}</p>
      </div>
    </div>
  );
};

export default EventCard;
