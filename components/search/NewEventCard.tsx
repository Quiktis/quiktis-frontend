"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoTicketSharp } from "react-icons/io5";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useRouter } from "next/navigation";

interface NewEventCardProps {
  title: string;
  subtitle: string;
  description: string;
  date: string;
  location: string;
  price: string;
  image: string;
  getTicketUrl?: string;
  readMoreUrl?: string;
}

const NewEventCard: React.FC<NewEventCardProps> = ({
  title,
  subtitle,
  description,
  date,
  location,
  price,
  image,
  getTicketUrl = "#",
  readMoreUrl = "#",
}) => {
  const router = useRouter();

  return (
    <div className="w-full md:max-w-[300px] h-auto flex flex-col gap-[15px]">
      <div className="relative">
        <Image
          src={`/${image}`}
          alt={title}
          width={300}
          height={300}
          className="rounded-[15px] object-cover w-full aspect-square"
        />
        <div className="absolute top-[8px] right-[8px] flex items-center justify-center w-[65px] h-[28px] rounded-[8px] bg-[#FFFFFF26] text-white text-sm">
          {price}
        </div>
        <div className="absolute bottom-2 right-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              router.push(getTicketUrl);
            }}
            className="bg-primary flex gap-2 justify-center text-white py-2 px-3 rounded-[10px] text-sm">
            Get Ticket <IoTicketSharp size={16} />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-[16px] font-bold">{title}</h2>
        <h4 className="text-[#666666] text-[12px]">{subtitle}</h4>
        <p className="text-[12px]">{description}</p>
      </div>

      <div className="flex flex-row justify-between items-center gap-2">
        <div className="text-[10px] text-left">
          <p>{date.split(",")[0]},</p>
          <p>{date.split(",")[1]}</p>
        </div>
        <h4 className="text-[10px] text-gray-400 text-center flex-1">
          {location}
        </h4>
        <Link
          href={readMoreUrl}
          className="text-[10px] flex items-center border border-gray-500 rounded-md px-2 py-1 transition-all hover:bg-gray-700">
          Read more <FaLongArrowAltRight size={10} />
        </Link>
      </div>
    </div>
  );
};

export default NewEventCard;
