"use client";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";

const FavoriteEvents: React.FC = () => {
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
    <div className="p-2 sm:p-3">
      <h3 className="text-white text-lg sm:text-xl font-bold mb-1 text-center md:text-left">
        Favorite Events
      </h3>
      <div className="flex flex-col gap-1">
        {favoriteEvents.map((event) => (
          <div
            key={event.id}
            className="flex flex-col sm:flex-row items-center justify-between p-2">
            {/* Left Section */}
            <div className="flex items-center gap-2">
              <div className="w-16 h-16 sm:w-16 sm:h-16 overflow-hidden rounded-md">
                <Image
                  src={event.image}
                  alt={event.name}
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-semibold text-base sm:text-base">
                  {event.name}
                </span>
                <span className="text-gray-400 text-xs sm:text-sm">
                  {event.subTitle}
                </span>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <span className="text-white text-xs sm:text-sm">
                {event.date}
              </span>
              <button aria-label="Favorite" className="p-2 sm:p-1">
                <FaHeart className="text-[#FF4D2A]" size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteEvents;
