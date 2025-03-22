"use client";
import Image from "next/image";
import React from "react";
import Button from "./ui/Button";
import Input from "./ui/Input";

const NewsLetter = () => {
  return (
    <div className="w-full">
      <div className="relative w-full flex justify-center items-center -z-50">
        {/* Background Images */}
        <Image
          src={"/mask-fade.svg"}
          alt="mask-fade"
          width={200}
          height={200}
          className="absolute -left-10 sm:-left-20"
        />
        <Image
          src={"/mask-green.svg"}
          alt="mask-green"
          width={200}
          height={200}
          className="absolute -right-10 sm:-right-20"
        />

        {/* Newsletter Box */}
        <div
          className={`relative w-full max-w-[900px] rounded-[40px] border-2 shadow flex flex-col gap-3 justify-center absolute z-50 newsletter-bg
                      p-4 sm:pl-[70px]
                      h-auto sm:h-[250px]
                      text-center sm:text-left`}
        >
          <h1 className="text-[40px] sm:text-[50px] leading-none text-white">
            Get the latest updates from{" "}
            <span className="text-primary">Quiktis</span>
          </h1>
          <p className="text-[14px] sm:text-[16px]">
            Subscribe to our newsletter and be the first to get the latest updates from{" "}
            <span className="text-primary">Quiktis</span>
          </p>

          {/* Input & Button */}
          <div className="flex flex-col sm:flex-row gap-4 w-full mx-auto sm:mx-0">
            <Input
              value={""}
              onChange={() => {}}
              type="email"
              placeholder="Input email here"
              className="bg-opacity-15 bg-white py-3 border border-[#CBCAD7] text-white placeholder-gray-500 rounded-[15px] px-6 sm:px-20"
            />
            <Button
              className="py-3 rounded-[15px] bg-primary px-6 sm:px-14"
              onClick={() => {}}
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
