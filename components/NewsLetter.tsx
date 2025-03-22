"use client";
import Image from "next/image";
import React from "react";
import Button from "./ui/Button";
import Input from "./ui/Input";

const NewsLetter = () => {
  return (
    <section className="w-full px-6 sm:px-10 py-20 overflow-hidden -mb-20">
      <div className="relative w-full flex justify-between items-center">
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
        <div className="relative w-full rounded-[40px] p-6 sm:p-[50px] bg-white bg-opacity-10 backdrop-blur-[40px] border border-white border-opacity-20 shadow-lg text-white text-center sm:text-left">
          <h1 className="text-[40px] sm:text-[48px] font-serif font-semibold leading-tight">
            Get the latest updates from{" "}
            <span className="text-primary">Quiktis</span>
          </h1>
          <p className="mt-4 text-[14px] sm:text-[16px] leading-relaxed">
            Subscribe to our newsletter and be the first to get the latest updates
            from <span className="text-primary">Quiktis</span>
          </p>

          {/* Input & Button */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full max-w-[600px] mx-auto">
            <Input
              value={""}
              onChange={() => {}}
              type="email"
              placeholder="Input email here"
              className="bg-opacity-15 bg-white py-3 border border-[#CBCAD7] text-white placeholder-gray-500 rounded-[15px] px-4 sm:px-20"
            />
            <Button
              className="py-3 rounded-[15px] bg-primary px-6 sm:px-10 text-white"
              onClick={() => {}}
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
