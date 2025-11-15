import React from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import StackedGlassLinkBars from "./StackedGlassLinkBars";

type EventDetailsCardProps = {
  onBuyTicketClick: () => void;
};

export default function EventDetailsCard({
  onBuyTicketClick,
}: EventDetailsCardProps) {
  return (
    <div className="w-full max-w-[739px] min-h-[280px] sm:min-h-[320px] md:min-h-[362px] rounded-[6px] sm:rounded-[7px] md:rounded-[8.67px] border-[0.29px] border-[#91949926] bg-white/[0.02] backdrop-blur-[8.67px] p-[14px] sm:p-[18px] md:p-[22px] flex flex-col sm:flex-row items-start gap-[14px] sm:gap-[18px] md:gap-[22px]">
      <div>
        <div className="w-[283.12px] h-[227.07px] bg-[#CE5620] rounded-[10.76px] p-[15px] flex flex-col justify-between">
          {/* Top section */}
          <div className="flex gap-2.5">
            {/* Event Image */}
            <div className="w-[125px] h-[125px] flex-shrink-0">
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  src="/spiral-img.svg"
                  alt="Event decorative graphic"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Event Info Column */}
            <div className="flex-grow flex flex-col gap-[7px]">
              {/* Title */}
              <h1 className="text-[19px] leading-[17px] text-white font-normal font-[Instrument_Serif]">
                Africa Startup
                <br />
                Conference
              </h1>

              {/* Date */}
              <div className="flex items-center gap-[5.5px]">
                <div className="w-[19px] h-[19px] rounded-[5.5px] border-[0.42px] border-[#F8F8F824] flex flex-col items-center justify-center overflow-hidden bg-transparent">
                  <div className="w-full bg-[#91949966] h-[6px] flex items-center justify-center flex-shrink-0">
                    <span className="font-semibold text-[2.89px] text-white mt-[3px]">
                      Sept
                    </span>
                  </div>
                  <div className="flex-1 w-full flex items-center justify-center">
                    <span className="font-semibold text-[8.09px] text-white">
                      30
                    </span>
                  </div>
                </div>

                <div>
                  <p className="font-semibold text-[7px] leading-[8px] text-white m-0">
                    Thursday, Sep 23
                  </p>
                  <p className="font-medium text-[7px] leading-[8px] text-[#D8D8D8] m-0">
                    7:00 PM - 8:30 PM GMT+1
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-[5.5px]">
                <div className="w-[19px] h-[19px] rounded-[5.5px] border-[0.42px] border-[#F8F8F824] flex items-center justify-center bg-transparent">
                  <MapPin size={9.5} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold text-[6px] leading-[8px] text-white m-0">
                    Offline Location
                  </p>
                  <p className="font-medium text-[6px] leading-[8px] text-[#D8D8D8] m-0">
                    Stable Africa, Lagos, Nigeria
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Hosted section */}
          <div className="mt-[1px]">
            <p className="text-[5px] sm:text-[5.5px] md:text-[5.78px] leading-none text-white/[0.54] m-0 mb-[2px] font-inter">
              Hosted
            </p>
            <p className="text-[7px] sm:text-[7.5px] md:text-[8.09px] leading-none text-white m-0 font-inter">
              Dare Sobaloju
            </p>
          </div>

          <div className="-mx-[12px] sm:-mx-[13px] md:-mx-[15px] mt-[5px] sm:mt-[6px] md:mt-[7px]">
            <StackedGlassLinkBars
              topText="Quiktis.com/xytrh"
              topCopyUrl="Quiktis.com/xytrh"
              behindText="Where Africa startup find oppurtunity"
              peekBehind={0}
              behindFontSize="7px"
              className="sm:text-[7.5px] md:text-[8.5px]"
            />
          </div>
        </div>

        {/* Share Event Button */}
        <button className="mt-3 sm:mt-3.5 md:mt-4 w-[70px] sm:w-[76px] md:w-[82.625px] h-[22px] sm:h-[24px] md:h-[25.42px] bg-white/[0.0588] backdrop-blur-[5.97px] rounded-[4.5px] sm:rounded-[5px] md:rounded-[5.31px] border-[0.15px] border-[#91949926] inline-flex items-center justify-center font-medium text-[8px] sm:text-[8.5px] md:text-[9.24px] leading-none text-[#D2DDDA] cursor-pointer">
          Share Event
        </button>
      </div>

      <div className="flex-1 pt-0 sm:pt-[30px] md:pt-[40px] lg:pt-[50px] flex flex-col gap-3 sm:gap-3.5 md:gap-4 w-full sm:w-auto">
        {/* Date info */}
        <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3">
          <div className="w-7 h-7 sm:w-[30px] sm:h-[30px] md:w-8 md:h-8 rounded-[8px] sm:rounded-[8.5px] md:rounded-[9.5px] border-[0.69px] border-[#F8F8F824] flex flex-col items-center justify-center overflow-hidden bg-transparent">
            <div className="w-full bg-[#91949966] h-[8px] sm:h-[9px] md:h-[10px] flex items-center justify-center flex-shrink-0">
              <span className="font-semibold text-[5.5px] sm:text-[5.75px] md:text-[6px] text-white">
                Sept
              </span>
            </div>
            <div className="flex-1 w-full flex items-center justify-center">
              <span className="font-semibold text-[10px] sm:text-[10.5px] md:text-[11px] text-white">
                30
              </span>
            </div>
          </div>
          <div>
            <p className="font-semibold text-[11px] sm:text-[11.5px] md:text-xs leading-[14px] sm:leading-[14.5px] md:leading-[15px] text-white m-0">
              Thursday, Sep 23
            </p>
            <p className="font-medium text-[11px] sm:text-[11.5px] md:text-xs leading-[14px] sm:leading-[14.5px] md:leading-[15px] text-[#D8D8D8] m-0">
              7:00 PM - 8:30 PM GMT+1
            </p>
          </div>
        </div>

        {/* Location info */}
        <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3">
          <div className="w-7 h-7 sm:w-[30px] sm:h-[30px] md:w-8 md:h-8 rounded-[8px] sm:rounded-[8.5px] md:rounded-[9.5px] border-[0.69px] border-[#F8F8F824] flex items-center justify-center bg-transparent">
            <MapPin
              size={13}
              className="text-gray-200 sm:w-[14px] sm:h-[14px] md:w-[15px] md:h-[15px]"
            />
          </div>
          <div>
            <p className="font-semibold text-[11px] sm:text-[11.5px] md:text-xs leading-[14px] sm:leading-[14.5px] md:leading-[15px] text-white m-0">
              Offline Location
            </p>
            <p className="font-medium text-[11px] sm:text-[11.5px] md:text-xs leading-[14px] sm:leading-[14.5px] md:leading-[15px] text-[#D8D8D8] m-0">
              Stable Africa, Lagos, Nigeria
            </p>
          </div>
        </div>

        {/* Host info */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <div className="w-[50px] sm:w-[55px] md:w-[60px] flex-shrink-0 -ml-[10px] sm:-ml-[12px] md:-ml-[14px]">
            <Image
              src="/icons/Profile-img.svg"
              alt="Profile"
              width={60}
              height={60}
              className="flex-shrink-0 w-full h-auto"
            />
          </div>
          <div>
            <p className="font-semibold text-[18px] sm:text-[20px] md:text-2xl leading-[121%] text-white m-0">
              Dare Sobaloju Pamilerin
            </p>
            <p className="font-medium text-[11.5px] sm:text-[12.5px] md:text-[13.5px] leading-[121%] text-[#666666] m-0">
              Pamilerincaleb@gmail.com
            </p>
          </div>
        </div>

        {/* Buy Ticket Button */}
        <div className="pt-1 flex">
          <button
            onClick={onBuyTicketClick}
            className="w-full sm:w-[280px] md:w-[300px] lg:w-[320px] h-8 sm:h-[34px] md:h-9 bg-white/[0.0588] backdrop-blur-[11.56px] border-none font-medium text-[15px] sm:text-[16px] md:text-[17px] leading-none text-[#D2DDDA] cursor-pointer flex items-center justify-center self-start hover:bg-white/[0.082] transition"
          >
            Buy Ticket
          </button>
        </div>
      </div>
    </div>
  );
}
