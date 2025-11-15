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
      <h1 className="text-[32px] sm:text-[38px] md:text-[44px] lg:text-[54.11px] leading-none text-white m-0 font-normal font-[Instrument_Serif]">
        {title}
      </h1>

      <div className="h-[24px] sm:h-[30px] md:h-[36px] lg:h-[42px]" />

      <div className="space-y-[27px]">
        {/* Date & Time */}
        <div className="flex items-start gap-5">
          <div className="w-14 h-14 rounded-[17.87px] border border-[#F8F8F824] flex flex-col overflow-hidden bg-transparent p-0 relative">
            <div className="w-full bg-[#91949966] h-[18px] flex items-center justify-center flex-shrink-0">
              <span className="font-semibold text-[8.28px] leading-none text-white">
                {dateMonth}
              </span>
            </div>
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
          <div className="w-[48px] h-[48px] sm:w-[52px] sm:h-[52px] md:w-[56px] md:h-[56px] lg:w-14 lg:h-14 rounded-[14px] sm:rounded-[16px] md:rounded-[17.87px] border border-[#F8F8F824] flex items-center justify-center bg-transparent p-0 relative">
            <Image
              src="/icons/location-create.svg"
              alt="Location"
              width={20}
              height={25}
              className="object-contain w-[16px] sm:w-[18px] md:w-[20px] h-auto"
              unoptimized={true}
            />
          </div>

          <div>
            <p className="font-semibold text-[16px] sm:text-[18px] md:text-[20px] leading-[24px] sm:leading-[26px] md:leading-[28px] text-white m-0">
              {locationName}
            </p>
            <p className="font-medium text-[16px] sm:text-[18px] md:text-[20px] leading-[24px] sm:leading-[26px] md:leading-[28px] text-[#D8D8D8] m-0">
              {locationCity}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
