"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaPen,
} from "react-icons/fa";

const ProfileCard: React.FC = () => {
  return (
    <div className="relative w-full h-[250px] newsletter-bg rounded-[40px] bg-gradient-to-br from-[#4f3130] to-[#323232] p-4 sm:p-6 text-white shadow-lg flex flex-col justify-center gap-6 pt-12 sm:pt-16">
      <div className="flex flex-col sm:flex-row w-full gap-4 sm:gap-28 items-center">
        {/* Left Section */}
        <div className="flex items-center gap-3 sm:gap-5">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto">
            <Image
              src="/jax.png"
              alt="Jaxson Siphron"
              width={80}
              height={80}
              className="rounded-full border-2 border-white object-cover"
            />
            <div className="absolute bottom-0 right-0 bg-white text-gray-700 rounded-full p-1 text-xs">
              <FaPen size={12} />
            </div>
          </div>
          <div className="mt-2 flex flex-col">
            <h2 className="text-lg sm:text-xl font-semibold">
              Jaxson Siphron
            </h2>
            <p className="text-gray-300 text-xs sm:text-sm">
              Jaxsonsiphron@gmail.com
            </p>
          </div>
        </div>
        {/* Right Section: Social Icons */}
        <div className="mt-2 sm:mt-6 flex justify-center gap-3 sm:gap-4">
          <Link href="#" className="hover:text-gray-400">
            <FaFacebook size={20} />
          </Link>
          <Link href="#" className="hover:text-gray-400">
            <FaInstagram size={20} />
          </Link>
          <Link href="#" className="hover:text-gray-400">
            <FaLinkedin size={20} />
          </Link>
          <Link href="#" className="hover:text-gray-400">
            <FaTwitter size={20} />
          </Link>
          <Link href="#" className="hover:text-gray-400">
            <FaYoutube size={20} />
          </Link>
        </div>
        {/* Optional Absolute Border (Desktop Only) */}
        <div className="hidden sm:block absolute border left-[32%] w-[60%] top-32 border-[#AAAAAA]"></div>
      </div>
      {/* Bottom Section */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-14 justify-center w-full items-center text-gray-300 uppercase text-xs">
        <div className="flex flex-col gap-2">
          <h3 className="block text-gray-400">Age</h3>
          <div className="flex flex-col gap-1">
            <p className="text-2xl font-bold text-white">2</p>
            <p className="text-2xl font-bold text-white">8</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="block text-gray-400">Location</h1>
          <p className="text-2xl font-bold text-white">South Florine</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
