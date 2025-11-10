import React from "react";
import Image from "next/image";

type Event = {
  id: number;
  title: string;
  date: string;
  time: string;
  venue: string;
  location: string;
  imageUrl: string;
};

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <>
      {/* Mobile Layout */}
      <div className="md:hidden">
        <div className="p-3 box-border rounded-xl border-none bg-transparent backdrop-filter-none">
          <div className="flex gap-3 items-start">
            <div className="flex-shrink-0">
              <div className="w-[86px] h-[86px] rounded-md overflow-hidden relative">
                <Image
                  src={event.imageUrl}
                  alt={event.title}
                  fill
                  className="object-cover"
                  sizes="86px"
                />
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-between min-w-0 min-h-[86px]">
              <div>
                <h3 className="text-white text-[18px] font-semibold leading-tight break-words">
                  {event.title}
                </h3>
              </div>

              <div className="mt-auto pt-3">
                <div className="text-gray-400 text-[13px] font-medium">
                  {event.date}, {event.time}
                </div>

                <div className="flex items-center gap-1 text-gray-400 mt-1">
                  <span
                    className="font-inter font-medium text-[13px] truncate"
                    title={`${event.venue} - ${event.location}`}
                  >
                    {event.venue} - {event.location}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex space-x-4">
        <div className="w-[91.019px] h-[91.019px] rounded-[6.9px] overflow-hidden relative flex-shrink-0">
          <Image
            src={event.imageUrl}
            alt={event.title}
            fill
            className="object-cover"
            sizes="91px"
          />
        </div>
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold text-white">{event.title}</h3>
          </div>
          <div>
            <p className="text-base font-medium text-[#666666]">
              {event.date}, {event.time}
            </p>
            <p className="text-base font-medium -mt-2 text-[#666666]">
              {event.venue} - {event.location}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventCard;
export type { Event, EventCardProps };
