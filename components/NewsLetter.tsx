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
          className="-left-10 sm:-left-20 relative"
        />

        <div className="h-[250px] rounded-[40px] w-full p-6 sm:pl-[50px] md:pl-[70px] border-2 shadow flex flex-col gap-3 justify-center absolute z-50 newsletter-bg text-center sm:text-left">
          <h1 className="text-[32px] sm:text-[40px] md:text-[50px] leading-none text-white">
            Get the latest updates from <span className="text-primary">Quiktis</span>
          </h1>
          <p className="text-sm sm:text-base">
            Subscribe to our newsletter and be the first to get the latest updates from{" "}
            <span className="text-primary">Quiktis</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full">
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

        {/* Right Image */}
        <Image
          src={"/mask-green.svg"}
          alt="mask-green"
          width={200}
          height={200}
          className="-right-10 sm:-right-20 absolute"
        />
      </div>
    </div>
  );
};

export default NewsLetter;
