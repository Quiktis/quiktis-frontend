"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaPen,
} from "react-icons/fa";
import ProfileImageUploader from "./ProfileImageUploader/ProfileImageUploader";


interface ProfileCardProps {
  name: string;
  email: string;
  age?: any;
  location?: string;
  preview: string | null; 
  setPreview: React.Dispatch<React.SetStateAction<string | null>>; 
  setImage: React.Dispatch<React.SetStateAction<File | null>>;
}

const ProfileCard: React.FC<ProfileCardProps> = (
  {
    name, 
    email, 
    age, 
    location,
    setImage,
    preview,
    setPreview,
  }) => {

  return (
    <div className="grid relative w-full md:w-[fit-content] newsletter-bg rounded-[40px] bg-gradient-to-br from-[#4f3130] to-[#323232] px-3 md:px-[3.8em] py-5 md:py-[3em] text-white shadow-lg h-fit ">
      {/* Top Section */}
      <div className="grid grid-cols-[5.1em_auto] md:grid-cols-[7em_auto] my-auto gap-[0.8em] max-md:w-[90%] max-md:mx-auto w-fit h-fit">
      <ProfileImageUploader 
        preview={preview}
        setPreview={setPreview}
        setImage={setImage}
      />
          <div className="h-fit my-auto">
          <div className="flex max-md:gap-3 gap-[3em] justify-between ">
          
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold w-fit">{/*Jaxson Siphron*/name}</h2>
            <p className="text-gray-300 text-xs sm:text-sm w-fit">
              {/*Jaxsonsiphron@gmail.com*/ email}
            </p>
          </div>
          <div className="hidden justify-center gap-4 h-fit my-auto">
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

        <div className="w-[6em] max-md:w-[0em]"></div>
        </div>
        <hr className="my-4 border-gray-400 mt-5"></hr>
          </div>
        
        
        
      </div>
      {/* Bottom Section */}
      { !age && !location ? null :  <div className="flex gap-14 justify-center w-full items-center text-gray-300 uppercase text-xs">
      {age && <div className="flex flex-col gap-2">
          <h3 className="block text-gray-400">Age</h3>
          <div className="flex flex-row sm:flex-col gap-1">
          
          
          <p className="text-2xl font-bold text-white">{age}</p>
          
          </div>
        </div>}
        {location &&  <div className="flex flex-col gap-2">
          <h1 className="block text-gray-400">Location</h1>
          <p className="text-2xl font-bold text-white">{location}</p>
        </div>}
      </div>}
    </div>
  );
};

export default ProfileCard;
