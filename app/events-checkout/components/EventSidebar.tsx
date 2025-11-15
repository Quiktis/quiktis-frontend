import React from "react";
import Image from "next/image";

export default function EventSidebar() {
  return (
    <div className="lg:col-span-1 space-y-4 sm:space-y-5 md:space-y-6 lg:sticky lg:top-6 w-full">
      {/* Poster image */}
      <div className="relative overflow-hidden bg-[#242424] w-full max-w-[350px] h-[300px] sm:h-[340px] md:h-[370px] lg:h-[390px] rounded-[32px] sm:rounded-[38px] md:rounded-[45px] mx-auto lg:mx-0">
        <Image
          src="/spiral-img.svg"
          alt="Event poster"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Hosted block */}
      <div className="mt-5 sm:mt-6 md:mt-7">
        <p className="font-medium text-[20px] sm:text-[22px] md:text-2xl leading-none tracking-[1px] text-white/[0.54] m-0 mb-[20px] sm:mb-[23px] md:mb-[26px]">
          Hosted
        </p>
        <h4 className="font-medium text-[24px] sm:text-[27px] md:text-[30px] leading-none text-white m-0 mb-7 sm:mb-8 md:mb-10">
          Dare Sobaloju
        </h4>

        <div className="flex items-center gap-2.5 sm:gap-3 mb-7 sm:mb-8 md:mb-10">
          <div className="flex -space-x-2">
            <Image
              src="/profile-going-1.svg"
              alt="Profile 1"
              width={30.6}
              height={30.4}
              className="rounded-full w-[26px] sm:w-[28px] md:w-[30.6px] h-auto"
            />
            <Image
              src="/profile-going-2.svg"
              alt="Profile 2"
              width={30.6}
              height={30.4}
              className="rounded-full w-[26px] sm:w-[28px] md:w-[30.6px] h-auto"
            />
            <Image
              src="/profile-going-3.svg"
              alt="Profile 3"
              width={30.6}
              height={30.4}
              className="rounded-full w-[26px] sm:w-[28px] md:w-[30.6px] h-auto"
            />
          </div>
          <span className="font-medium text-[16px] sm:text-[17px] md:text-[19px] leading-[24px] sm:leading-[26px] md:leading-[28px] text-white">
            200k going
          </span>
        </div>

        {/* Contact */}
        <p className="font-medium text-[20px] sm:text-[22px] md:text-2xl leading-none text-[#919499] m-0">
          Contact Organizers
        </p>
      </div>
    </div>
  );
}
