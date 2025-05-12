"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "./ui/Button";
import Input from "./ui/Input";

const NewsLetter = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <section className="w-full relative overflow-hidden">
      <div className="px-6 sm:px-10 py-20">
        <div className="relative w-full">
          <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 opacity-40 blur-[150px] -translate-x-1/2 -translate-y-1/2 z-0" />

          <div className="relative z-10 -translate-y-10 flex justify-between items-center">
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

            <div className="relative w-full rounded-[20px] p-6 sm:p-[50px] bg-white bg-opacity-10 backdrop-blur-[40px] border border-white border-opacity-20 shadow-lg text-white text-center sm:text-left">
              <h1 className="text-[32px] sm:text-[48px] font-serif font-semibold leading-tight">
                Get the latest updates from{" "}
                <span className="text-primary">Quiktis</span>
              </h1>
              <p className="mt-4 text-[14px] sm:text-[16px] leading-relaxed">
                Subscribe to our newsletter and be the first to get the latest
                updates from <span className="text-primary">Quiktis</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full max-w-[600px]">
                <Input
                  value={email}
                  onChange={handleEmailChange}
                  type="email"
                  placeholder="Input email here"
                  className="bg-[#FFFFFF99] text-left placeholder:text-left py-3 border border-[#CBCAD7] text-white placeholder-gray-500 rounded-[10px] pl-5 pr-4 sm:pl-8 sm:pr-20"
                />
                <Button
                  className="py-3 rounded-[10px] bg-[#FF4D2A] bg-opacity-60 hover:bg-opacity-100 text-white px-6 sm:px-10"
                  onClick={() => console.log(email)}>
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
