import React from "react";
import Image from "next/image";
// switch to react-icons instead of Heroicons
import { AiFillHeart } from "react-icons/ai";
import { FaStar } from "react-icons/fa";

interface NftEventCardProps {
  id: number;
  title: string;
  category: string;
  price: string;
  rating: number;
  ticketsLeft: number;
  image: string;
}

const NftEventCard: React.FC<NftEventCardProps> = ({
  title,
  category,
  price,
  rating,
  ticketsLeft,
  image,
}) => (
  <div className="bg-[#1A1A1A] rounded-2xl overflow-hidden shadow-lg">
    {/* Image + Heart */}
    <div className="relative">
      <Image
        src={image}
        alt={title}
        width={400}
        height={240}
        className="w-full h-48 object-cover"
      />
      <button className="absolute bottom-2 right-2 bg-gray-900 bg-opacity-50 p-2 rounded-full">
        <AiFillHeart className="h-6 w-6 text-red-500" />
      </button>
    </div>

    {/* Content */}
    <div className="p-4 space-y-2">
      <h3 className="text-white text-lg font-semibold">{title}</h3>
      <p className="text-gray-400 text-sm">{category}</p>

      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold text-red-500">{price}</span>
        <div className="flex items-center text-sm">
          <span className="text-orange-400">{rating}</span>
          <FaStar className="h-4 w-4 text-orange-400 ml-1" />
          <span className="ml-2 text-gray-400">{ticketsLeft} tickets left</span>
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <button className="text-gray-200 hover:underline">View</button>
        <button className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg">
          Buy
        </button>
      </div>
    </div>
  </div>
);

export default NftEventCard;
