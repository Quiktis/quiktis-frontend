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

const ProfileHeader: React.FC = () => {
  return (
    <div className="relative w-full h-[300px] sm:h-[250px] newsletter-bg rounded-[40px] bg-gradient-to-br from-[#4f3130] to-[#323232] p-6 text-white shadow-lg flex justify-center flex-col gap-10 pt-16">
      <div className="flex flex-col sm:flex-row w-full gap-4 sm:gap-28 items-center">
        {/* Profile Info */}
        <div className="flex items-center gap-5">
          <div className="relative w-20 h-20 mx-auto sm:mx-0">
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
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold">Jaxson Siphron</h2>
            <p className="text-gray-300 text-sm">Jaxsonsiphron@gmail.com</p>
          </div>
        </div>
        {/* Social Links */}
        <div className="flex justify-center gap-4">
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
        {/* Decorative Border (Desktop Only) */}
        <div className="hidden sm:block absolute border left-32 w-[72%] top-32 border-[#AAAAAA]"></div>
      </div>
      {/* Bottom Section */}
      <div className="flex gap-14 justify-center w-full items-center text-gray-300 uppercase text-xs">
        <div className="flex flex-col gap-2">
          <h3 className="block text-gray-400">Age</h3>
          <div className="flex flex-row sm:flex-col gap-1">
            <p className="text-2xl font-bold text-white">2</p>
            <p className="text-2xl font-bold text-white">8</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="block text-gray-400">Location</h1>
          <p className="text-2xl font-bold text-white">South Florine</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
