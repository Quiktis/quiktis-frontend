import React from "react";
import Image from "next/image";

export default function EventSidebar() {
  return (
    <div className="lg:col-span-1 space-y-6 lg:sticky lg:top-6">
      {/* Poster image */}
      <div className="relative overflow-hidden bg-[#242424] w-[350px] h-[390px] rounded-[45px]">
        <Image
          src="/spiral-img.svg"
          alt="Event poster"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Hosted block */}
      <div className="mt-7">
        <p className="font-medium text-2xl leading-none tracking-[1px] text-white/[0.54] m-0 mb-[26px]">
          Hosted
        </p>
        <h4 className="font-medium text-[30px] leading-none text-white m-0 mb-10">
          Dare Sobaloju
        </h4>

        {/* Going profiles */}
        <div className="flex items-center gap-3 mb-10">
          <div className="flex -space-x-2">
            <Image
              src="/profile-going-1.svg"
              alt="Profile 1"
              width={30.6}
              height={30.4}
              className="rounded-full"
            />
            <Image
              src="/profile-going-2.svg"
              alt="Profile 2"
              width={30.6}
              height={30.4}
              className="rounded-full"
            />
            <Image
              src="/profile-going-3.svg"
              alt="Profile 3"
              width={30.6}
              height={30.4}
              className="rounded-full"
            />
          </div>
          <span className="font-medium text-[19px] leading-[28px] text-white">
            200k going
          </span>
        </div>

        {/* Contact */}
        <p className="font-medium text-2xl leading-none text-[#919499] m-0">
          Contact Organizers
        </p>
      </div>
    </div>
  );
}
