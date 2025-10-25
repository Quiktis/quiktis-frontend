"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoTicketSharp } from "react-icons/io5";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { Event } from "@/constant/customTypes";
import { formatToHumanReadableDate, truncateText } from "@/app/utils/utilities";
import { start } from "repl";
import { CldImage } from "next-cloudinary";

interface NewEventCardProps {
 
   image: string;
  title: string;
  description: string;
  event: Event;
  price: number | string;
  eventId: string;
  startDate: string; 
  startTime: string; 
  eventSlug: string; 
  location: string; 
}

const NewEventCard: React.FC<NewEventCardProps> = ({
  image,
  title,
  description,
  event, 
  price,
  eventId,
  startDate,
  startTime,   
  eventSlug,
  location
}) => {
  const router = useRouter();

  return (
    <div className="w-full md:max-w-[300px] h-auto flex flex-col gap-[15px]">
      <div className="relative">
        <CldImage
          src={image}
          alt={title}
          width={300}
          height={300}
          className="rounded-[15px] object-cover w-full aspect-square"
        />
        <div className="absolute top-[8px] right-[8px] flex items-center justify-center w-[65px] h-[28px] rounded-[8px] bg-[#FFFFFF26] text-white text-sm">
          {price ?? ""}
        </div>
        {startDate && new Date(startDate) > new Date() ? <div className="absolute bottom-2 right-2">
          <Link
           href={`/checkout/${eventId}`}
            className="bg-primary flex gap-2 justify-center text-white py-2 px-3 rounded-[10px] text-sm">
            Get Ticket <IoTicketSharp size={16} />
          </Link>
        </div> : null}
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-[16px] font-bold">{title}</h2>
        <h4 className="text-[#666666] text-[12px]">{truncateText(description?? "", 90)}</h4>

      </div>

      <div className="flex flex-row justify-between items-center gap-2">
        <div className="text-[10px] text-left">
          <p>{formatToHumanReadableDate(startDate, startTime)}</p>
        </div>
        <h4 className="text-[10px] text-gray-400 text-center flex-1">
          {event.location?? ""}
        </h4>
        <Link
          href={`/event-viewing/${eventId}`}
          className="text-[10px] flex items-center border border-gray-500 rounded-md px-2 py-1 transition-all hover:bg-gray-700">
          Read more <FaLongArrowAltRight size={10} />
        </Link>
      </div>
    </div>
  );
};

export default NewEventCard;
