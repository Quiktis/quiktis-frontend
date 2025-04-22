"use client";
import React, { useState } from "react";
import Button from "./ui/Button";
import Input from "./ui/Input";

interface NewsLetterProps {
  containerClass?: string;
}

const NewsLetter2: React.FC<NewsLetterProps> = ({ containerClass }) => {
  const [email, setEmail] = useState("");

  return (
    <section className={`${containerClass} px-6`}>
      <h2
        className="
          text-white 
          text-left 
          max-sm:text-center sm:text-[2em]
          font-semibold mb-6 leading-tight text-[2em]
        ">
        JOIN THE <span className="font-bold">FUTURE NOW</span>
      </h2>

      <div
        className="
          bg-gradient-to-r
          from-[#EA4335] via-[#14151F] to-[#EA4335]
          p-[2px]
          rounded-[10px]
          overflow-hidden
          w-full
        ">
        <div
          className="
            bg-[#060606]
            backdrop-filter bg-clip-padding backdrop-blur-lg
            rounded-[10px]
            grid w-full
            py-[7em] sm:py-[5em] max-sm:py-[2.5em]
            px-7 max-sm:px-5
            text-white text-center
          ">
          <h1 className="text-[1.3em] md:text-[2.2em] font-semibold leading-tight">
            GET THE LATEST UPDATE FROM QUIKTIS
          </h1>

          <p className="mt-4 text-[19px] sm:text-[16px] leading-relaxed">
            Subscribe to our newsletter and be the first to get the latest
            updates from QUIKTIS
          </p>

          <div className="flex flex-col md:grid grid-cols-[auto_8em] sm:flex-row gap-4 mt-8 w-full justify-center">
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Input Email Here …"
              className="
                bg-gray-100 py-3
                border border-[#CBCAD7]
                text-gray-700 placeholder-gray-500
                rounded-[5px] px-4 sm:px-6
                w-full
              "
            />
            <Button
              onClick={() => console.log(email)}
              className="
                py-3 rounded-[5px] bg-[#FF1400]
                px-[5em] sm:px-12 text-white font-semibold
                whitespace-nowrap
              ">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter2;
