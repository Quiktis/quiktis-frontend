"use client";
import Image from "next/image";
import React from "react";
import Button from "./ui/Button";
import Input from "./ui/Input";

const NewsLetter = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-12">
      <div className="relative flex justify-between items-center w-full -z-50">
        {/* Left Image */}
        <Image
          src={"/mask-fade.svg"}
          alt="mask-fade"
          width={200}
          height={200}
          className="absolute left-0 sm:-left-10 md:-left-20"
        />

        {/* Newsletter Content - Glassmorphism background fully covering everything */}
        <div className="relative w-full flex justify-center">
          <div className="w-full max-w-[900px] rounded-[40px] border-2 shadow-lg backdrop-blur-md bg-white/10 text-center sm:text-left p-6 sm:p-10 flex flex-col gap-4 z-50">
            <h1 className="text-[32px] sm:text-[40px] md:text-[50px] leading-none text-white">
              Get the latest updates from <span className="text-primary">Quiktis</span>
            </h1>
            <p className="text-sm sm:text-base text-white">
              Subscribe to our newsletter and be the first to get the latest updates from{" "}
              <span className="text-primary">Quiktis</span>
            </p>

            {/* Input & Button */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full justify-center sm:justify-start">
              <Input
                value={""}
                onChange={() => {}}
                type="email"
                placeholder="Input email here"
                className="bg-opacity-15 bg-white py-3 border border-[#CBCAD7] text-white placeholder-gray-500 rounded-[15px] px-6 sm:px-12 md:px-20"
              />
              <Button className="py-3 rounded-[15px] bg-primary px-10 sm:px-14" onClick={() => {}}>
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <Image
          src={"/mask-green.svg"}
          alt="mask-green"
          width={200}
          height={200}
          className="absolute right-0 sm:-right-10 md:-right-20"
        />
      </div>
    </div>
  );
};

export default NewsLetter;
