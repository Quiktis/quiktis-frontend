"use client";

import React, { useState } from "react";
import Button from "./ui/Button";
import Input from "./ui/Input";
import { FiArrowRight } from "react-icons/fi";

const BlogNewsletter: React.FC = () => {
  const [email, setEmail] = useState("");

  return (
    <section
      className="w-full relative overflow-hidden min-h-[350px] px-0 flex items-center justify-center"
      style={{
        backgroundImage: "url(/blog/blognewletter.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0" />

      {/* Content wrapper */}
      <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between px-4 sm:px-10 py-20">
        <h2
          className="
            text-white
            text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px]
            font-semibold
            leading-snug
            text-center max-sm:text-center md:text-left
            mb-6 md:mb-0
            md:max-w-[50%]
          ">
          Subscribe to our newsletter to
          <br />
          get latest news on your inbox.
        </h2>

        <form
          className="
            flex flex-col gap-4 w-full       
            md:flex-row md:gap-2 md:w-auto   
            items-center
          ">
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email"
            className="
              w-full                         
              py-3 px-4
              bg-white bg-opacity-90
              text-black placeholder-gray-600
              border border-gray-300 rounded-md
              text-base
              md:w-[240px]                   
            "
          />

          <Button
            className="
              w-[230px] mx-auto              
              py-3 px-4
              bg-[#FF4D2A] hover:bg-opacity-90
              text-white rounded-md
              flex items-center justify-center gap-1
              text-base min-w-[120px]
              md:w-auto                     
            "
            onClick={() => console.log(email)}>
            Subscribe <FiArrowRight className="text-lg" />
          </Button>
        </form>
      </div>
    </section>
  );
};

export default BlogNewsletter;
