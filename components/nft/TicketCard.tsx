// components/nft/TicketCard.tsx
"use client";

import React from "react";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import Link from "next/link";

export default function TicketCard() {
  const [isLoved, setIsLoved] = React.useState(false);
  const toggleLove = () => setIsLoved((prev) => !prev);

  return (
    <div className="bg-[#111111] rounded-xl overflow-hidden shadow-lg flex flex-col">
      {/* Ticket image */}
      <div className="relative p-3 pt-5">
        <div className="relative rounded-lg overflow-hidden">
          <Image
            src="/christmasconcert.jpg"
            alt="Christmas Concert"
            width={300}
            height={200}
            className="w-full h-[150px] object-cover"
          />
          <button
            onClick={toggleLove}
            aria-label={isLoved ? "Remove from favorites" : "Add to favorites"}
            className="absolute bottom-2 right-2 bg-[#00000080] p-1.5 rounded-full hover:bg-[#000000a0] transition">
            <FaHeart
              size={20}
              className={isLoved ? "text-[#F58560]" : "text-gray-400"}
            />
          </button>
        </div>
      </div>

      {/* Ticket details */}
      <div className="p-3 flex-1 flex flex-col">
        <h3 className="font-bold text-lg mb-1">Christmas Concert</h3>
        <p className="text-sm text-white mb-3">Muson Center, Lagos</p>

        {/* Price and date */}
        <div className="flex justify-between items-center mb-4">
          <span className="text-[#FF4D2A] font-bold text-lg">$500</span>
          <span className="text-sm text-[#F68B61]">31/12/2026 18:00</span>
        </div>

        {/* View button */}
        <div className="mt-auto">
          <Link href="/concert-ticket" className="w-full block">
            <button className="w-full bg-transparent border border-transparent text-white px-4 py-2 rounded-md text-sm hover:bg-[#1a1a1a] transition cursor-pointer">
              View
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
