"use client";

import React from "react";
import Image from "next/image";
import { IoTicketSharp } from "react-icons/io5";
import { useRouter } from "next/navigation";

interface EventCardProps {
  title: string;
  subtitle: string;
  description: string;
  date: string;
  location: string;
  price: string;
  image: string;
  getTicketUrl?: string;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  subtitle,
  description,
  date,
  location,
  price,
  image,
  getTicketUrl = "#",
}) => {
  const router = useRouter();

  return (
    <div className="w-full md:max-w-[320px] h-auto flex flex-col gap-[15px]">
      {/* Image Section */}
      <div className="relative">
        <Image
          src={`/${image}`}
          alt={title}
          width={320}
          height={280} // Reduced height from 320 to 280
          className="rounded-[15px] object-cover w-full h-[280px] md:w-[320px] md:h-[280px]"
        />
        <div className="absolute top-[8px] right-[8px] flex items-center justify-center w-[65px] h-[28px] p-[10px] rounded-[8px] bg-[#FFFFFF26] gap-[10px] text-white text-sm">
          {price}
        </div>
        <div className="absolute bottom-2 right-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              router.push(getTicketUrl);
            }}
            className="bg-primary flex gap-2 justify-center text-white py-2 items-center rounded-[10px] px-3 text-sm">
            Get Ticket <IoTicketSharp size={16} />
          </button>
        </div>
      </div>

      {/* Textual Content */}
      <div className="flex flex-col gap-2">
        {/* Reduced title font size */}
        <h2 className="text-[14px] font-bold">{title}</h2>
        <h4 className="text-[#666666] text-[12px]">{subtitle}</h4>
        <p className="hidden text-[12px]">{description}</p>
      </div>

      {/* Date and Location on a single row with space between */}
      <div className="flex justify-between items-center w-full">
        <p className="text-xs text-[#dcdcdc] md:text-sm">{date}</p>
        <p className="text-xs text-[#dcdcdc] md:text-sm">{location}</p>
      </div>
    </div>
  );
};

export default EventCard;
