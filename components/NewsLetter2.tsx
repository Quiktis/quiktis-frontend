"use client";

import React from "react";
import Image from "next/image";
import Button from "./ui/Button";
import Input from "./ui/Input";


interface NewsLetterProps {
    containerClass?: string;
}
const NewsLetter2: React.FC<NewsLetterProps> = ({ containerClass }) => {
  return (
    <section className={`${containerClass}`}>
      

      <div className="relative z-10 w-full mx-auto flex flex-col">
        <h2 className="text-white text-left max-sm:text-center sm:text-[2em] gap-3 font-semibold mb-6 leading-tight text-[2em]">
          JOIN THE <span className="font-bold">FUTURE NOW</span>
        </h2>

        <div
          className="
            grid
            w-full 
            bg-white-900
            backdrop-filter 
            bg-clip-padding
           
            backdrop-blur-lg
            bg-opacity-0 
            border 
            border-[#ff4e2aa6]
            rounded-md 
            py-[7em]
            sm:py-[5em]
            max-sm:py-[2.5em]
            px-7
            max-sm:px-5
            text-white
            text-center
          
          

            
          ">
          <h1 className="text-[1.3em] md:text-[2.2em] font-semibold leading-tight">
            GET THE LATEST UPDATE FROM QUIKTIS
          </h1>

          <p className="mt-4 text-[14px] sm:text-[16px] leading-relaxed">
            Subscribe to our newsletter and be the first to get the latest
            updates from QUIKTIS
          </p>

          <div className="flex flex-col md:grid grid-cols-[auto_6em] sm:flex-row gap-4 mt-8 w-full mx-auto justify-center">
            <Input
              value=""
              onChange={() => {}}
              type="email"
              placeholder="Input Email Here ..."
              className="
                bg-gray-100 py-3 
                border border-[#CBCAD7] 
                text-gray-700 placeholder-gray-500 
                rounded-[5px] px-4 sm:px-6 
                w-full
              "
            />
            <Button
              className="
                py-3 rounded-[5px] bg-red-500 
                px-[4em] sm:px-10 text-white font-semibold
              "
              onClick={() => {}}>
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter2;
