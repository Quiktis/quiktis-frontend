"use client";
import Image from "next/image";
import React from "react";

interface ReviewCardProps {
  title: string;
  date: string;
  content: string;
  image?: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  title,
  date,
  content,
  image = "/beautifulwoman.png",
}) => {
  return (
    <div
      className="
        bg-transparent 
        rounded-lg 
        border border-[#AAAAAA] 
        p-4 
        text-white 
        transition-all 
        duration-200 
        hover:border-2 
        hover:border-[#FF4D2A] 
        hover:cursor-pointer
      ">
      {/* Top Section */}
      <div className="flex items-start">
        <div className="mr-3">
          <Image
          height={10}
          width={10}
            src={image}
            alt={title}
            className="w-10 h-10 rounded-full object-cover border border-white"
          />
        </div>
        <div>
          <h3 className="font-bold text-sm">{title}</h3>
          <p className="text-xs text-gray-400">{date}</p>
        </div>
      </div>

      <div className="mt-3">
        <p className="text-sm text-gray-300 leading-relaxed">{content}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
