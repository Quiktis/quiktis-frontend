"use client";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";

const FavoriteEvents = () => {
  const favoriteEvents = [
    {
      id: 1,
      name: "Events Name",
      subTitle: "Talent Show",
      date: "May 23, 2024",
      image: "/event1.png",
    },
    {
      id: 2,
      name: "Events Name",
      subTitle: "Talent Show",
      date: "May 23, 2024",
      image: "/event2.png",
    },
    {
      id: 3,
      name: "Events Name",
      subTitle: "Talent Show",
      date: "May 23, 2024",
      image: "/event3.png",
    },
  ];

  return (
    <div className="p-4 sm:p-6">
      <h3 className="text-white text-lg sm:text-xl font-bold mb-4">
        Favorite Events
      </h3>
      <div className="flex flex-col gap-2 sm:gap-4">
        {favoriteEvents.map((event) => (
          <div
            key={event.id}
            className="flex flex-col sm:flex-row items-center justify-between p-2 sm:p-4"
          >
            {/* Left Section */}
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 sm:w-16 sm:h-16 overflow-hidden rounded-md">
                <Image
                  src={event.image}
                  alt={event.name}
                  width={56}
                  height={56}
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-semibold text-sm sm:text-base leading-5">
                  {event.name}
                </span>
                <span className="text-gray-400 text-xs sm:text-sm">
                  {event.subTitle}
                </span>
              </div>
            </div>
            {/* Right Section */}
            <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-4 mt-2 sm:mt-0">
              <span className="text-white text-xs sm:text-sm">
                {event.date}
              </span>
              <FaHeart className="text-[#FF4D2A]" size={18} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteEvents;
