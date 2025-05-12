import React from "react";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";

interface CartItemProps {
  imageUrl: string;
  title: string;
  category: string;
  location: string;
  organizer: string;
  organizerAvatar: string;
  ticketTypes: string[];
  quantity: number;
  onMinus: () => void;
  onPlus: () => void;
}

const CartItem: React.FC<CartItemProps> = ({
  imageUrl,
  title,
  category,
  location,
  organizer,
  organizerAvatar,
  ticketTypes,
  quantity,
  onMinus,
  onPlus,
}) => {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-center gap-y-6 lg:gap-x-20 px-4 sm:px-6 py-5 rounded-xl backdrop-blur-md bg-white/5 border border-white/5">
      <div className="flex items-center space-x-4 sm:space-x-5 min-w-0 w-full lg:min-w-[260px]">
        <Image
          src={imageUrl}
          alt="Event"
          width={72}
          height={72}
          className="rounded-md object-cover"
        />
        <div className="flex-1">
          <h3 className="font-semibold text-[#FF4D2A] text-lg whitespace-nowrap">
            {title}
          </h3>
          <p className="text-gray-300 text-base leading-tight">{category}</p>
          <p className="text-gray-300 text-base leading-tight">{location}</p>
        </div>
      </div>

      <div className="flex items-center space-x-3 w-full justify-start lg:justify-center lg:min-w-[220px]">
        <Image
          src={organizerAvatar}
          alt="Organizer"
          width={32}
          height={32}
          className="rounded-full object-cover"
        />
        <span className="text-white text-base">{organizer}</span>
      </div>

      <div className="w-full lg:w-auto lg:min-w-[170px] relative flex justify-start lg:justify-center items-center">
        <select className="appearance-none bg-transparent border border-white/20 rounded-md px-4 py-2 text-base text-white focus:outline-none w-full lg:w-[170px]">
          <option disabled selected>
            Ticket Type
          </option>
          {ticketTypes.map((type) => (
            <option key={type} value={type} className="bg-black text-white">
              {type}
            </option>
          ))}
        </select>
        <IoIosArrowDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white pointer-events-none" />
      </div>

      <div className="flex items-center justify-center lg:justify-end space-x-3 w-full lg:min-w-[140px] mt-2 lg:mt-0 mx-auto">
        <button
          onClick={onMinus}

          className={`w-10 h-10 rounded-full border flex items-center justify-center bg-transparent text-xl
      ${
        quantity === 1
          ? "border-gray-500/30 text-gray-500 cursor-not-allowed" 
          : "border-white/30 text-white" 
      }`}
          disabled={quantity === 1} 
        >
          –
        </button>
        <div className="w-10 h-10 rounded-md bg-[#313131] text-white flex items-center justify-center text-base font-medium">
          {quantity}
        </div>
        <button
          onClick={onPlus}
          className="w-10 h-10 rounded-full border border-white/30 text-white flex items-center justify-center bg-transparent text-xl">
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
