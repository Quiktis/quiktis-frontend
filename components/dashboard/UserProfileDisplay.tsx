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

const UserProfileDisplay: React.FC = () => {
  return (
    <div className="relative w-[calc(100%-12px)] md:w-[calc(100%-40px)] max-w-7xl mx-auto rounded-[40px] overflow-hidden shadow-lg bg-white/20 backdrop-blur-md border border-white/30 text-white min-w-0 md:min-w-[700px]">
      <div className="p-8 pt-10">
        <div className="flex flex-col md:flex-row items-center mb-8">
          <div className="relative w-20 h-20 md:w-24 md:h-24 mx-auto md:mx-0 md:mr-8 mb-4 md:mb-0">
            <Image
              src="/jax.png"
              alt="Jaxson Siphron"
              width={96}
              height={96}
              className="rounded-full border-2 border-white object-cover"
              priority
            />
            <div className="absolute bottom-0 right-0 bg-white text-gray-700 rounded-full p-1 text-xs cursor-pointer">
              <FaPen size={12} />
            </div>
          </div>

          <div className="flex flex-col text-center md:text-left md:mt-2">
            <h2 className="text-2xl font-semibold">Jaxson Siphron</h2>
            <p className="text-gray-300 text-sm">Jaxsonsiphron@gmail.com</p>
          </div>

          <div className="flex gap-4 ml-0 md:ml-20 mt-2 md:mt-2 justify-center md:justify-start">
            <Link
              href="#"
              className="hover:text-gray-400 transition duration-200">
              <FaFacebook size={16} />
            </Link>
            <Link
              href="#"
              className="hover:text-gray-400 transition duration-200">
              <FaInstagram size={16} />
            </Link>
            <Link
              href="#"
              className="hover:text-gray-400 transition duration-200">
              <FaLinkedin size={16} />
            </Link>
            <Link
              href="#"
              className="hover:text-gray-400 transition duration-200">
              <FaTwitter size={16} />
            </Link>
            <Link
              href="#"
              className="hover:text-gray-400 transition duration-200">
              <FaYoutube size={16} />
            </Link>
          </div>
        </div>

        <div className="h-px bg-white/50 my-8 ml-0 md:ml-[8rem] w-full md:w-[calc(100%-8rem)]"></div>

        <div className="flex flex-col md:flex-row justify-center md:justify-start gap-6 mt-6 mb-4 ml-0 md:ml-[8rem] text-center md:text-left">
          <div>
            <h3 className="text-gray-400 text-sm uppercase mb-1">Age</h3>
            <p className="text-2xl font-bold tracking-wider">28</p>
          </div>
          <div>
            <h3 className="text-gray-400 text-sm uppercase mb-1">Location</h3>
            <p className="text-2xl font-bold tracking-wider">South Florine</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileDisplay;
