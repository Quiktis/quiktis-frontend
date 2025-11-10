import React from "react";
import Image from "next/image";

type EventHeaderProps = {
  title: string;
  dateDay: string;
  dateMonth: string;
  dayOfWeek: string;
  fullDate: string;
  timeRange: string;
  locationName: string;
  locationCity: string;
};

export default function EventHeader({
  title,
  dateDay,
  dateMonth,
  dayOfWeek,
  fullDate,
  timeRange,
  locationName,
  locationCity,
}: EventHeaderProps) {
  return (
    <div>
      {/* Event Title */}
      <h1 className="text-[54.11px] leading-none text-white m-0 font-normal font-[Instrument_Serif]">
        {title}
      </h1>

      <div className="h-[42px]" />

      <div className="space-y-[27px]">
        {/* Date & Time */}
        <div className="flex items-start gap-5">
          {/* Date Box */}
          <div className="w-14 h-14 rounded-[17.87px] border border-[#F8F8F824] flex flex-col overflow-hidden bg-transparent p-0 relative">
            {/* Month label */}
            <div className="w-full bg-[#91949966] h-[18px] flex items-center justify-center flex-shrink-0">
              <span className="font-semibold text-[8.28px] leading-none text-white">
                {dateMonth}
              </span>
            </div>
            {/* Day number */}
            <div className="flex-1 w-full flex items-center justify-center">
              <span className="font-semibold text-[23.19px] leading-none text-white">
                {dateDay}
              </span>
            </div>
          </div>

          {/* Date & Time text */}
          <div>
            <p className="font-semibold text-[20px] leading-[28px] text-white m-0">
              {fullDate}
            </p>
            <p className="font-medium text-[20px] leading-[28px] text-[#D8D8D8] m-0">
              {timeRange}
            </p>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-start gap-5">
          {/* Location Icon Box */}
          <div className="w-14 h-14 rounded-[17.87px] border border-[#F8F8F824] flex items-center justify-center bg-transparent p-0 relative">
            <Image
              src="/icons/location-create.svg"
              alt="Location"
              width={20}
              height={25}
              className="object-contain"
              unoptimized={true}
            />
          </div>

          {/* Location text */}
          <div>
            <p className="font-semibold text-[20px] leading-[28px] text-white m-0">
              {locationName}
            </p>
            <p className="font-medium text-[20px] leading-[28px] text-[#D8D8D8] m-0">
              {locationCity}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
