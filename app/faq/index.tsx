"use client";

import React, { useState } from "react";
import SearchBar from "@/components/ui/SearchBar";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { TbMessage } from "react-icons/tb";

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const faqData = [
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, PayPal, and other methods based on location.",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod magna sit amet diam fermentum commodo",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod magna sit amet diam fermentum commodo",
    },
    {
      question: "How can I share feedback about the platform?",
      answer: "Use the feedback form in the settings menu.",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod magna sit amet diam fermentum commodo",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod magna sit amet diam fermentum commodo",
    },
  ];

  const filteredFAQs = faqData.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const leftFAQs = filteredFAQs.slice(0, 3);
  const rightFAQs = filteredFAQs.slice(3, 6);

  return (
    <main className="bg-transparent text-white min-h-screen flex flex-col">
      <div className="container mx-auto py-10 px-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start flex-wrap gap-8 flex-1 md:flex-none">
          <div>
            <h1 className="text-[80px] md:text-[100px] font-extrabold">
              F<span className="mx-1 text-[#FF4D2A]">.</span>A
              <span className="mx-1 text-[#FF4D2A]">.</span>Q
            </h1>
            <p className="text-[16px] mt-0 mb-6 whitespace-normal max-w-xs md:whitespace-nowrap md:max-w-full">
              Looking for help? Here are our most frequently asked questions.
            </p>
            <div className="w-full max-w-[800px] mb-8">
              <SearchBar
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                inputClassName="w-full"
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/Triplequestionmark.png"
              height={250}
              width={380}
              alt="Question Mark"
              className="w-[240px] md:w-[380px] -mt-6"
            />
            <div className="flex gap-6 mt-4">
              <Button
                href="/contact"
                className="bg-[#FF4D2A] hover:bg-[#FF4D2A]/90 transition-colors duration-300 text-sm">
                <div className="flex items-center gap-2">
                  Contact Us
                  <TfiHeadphoneAlt className="w-5 h-5" />
                </div>
              </Button>

              <Button
                href="/live-chat"
                className="bg-[#0072FF] hover:bg-[#0072FF]/90 transition-colors duration-300 text-sm">
                <div className="flex items-center gap-2">
                  Live Chat
                  <TbMessage className="w-5 h-5" />
                </div>
              </Button>
            </div>
          </div>
        </div>

        <div className="relative mt-8 flex-1 md:flex-none">
          <Image
            height={250}
            width={300}
            src="/ellipse2.png"
            alt="Orange Blur"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] opacity-60 blur-sm z-0"
          />
          <Image
            src="/star2.png"
            height={250}
            width={120}
            alt="Star Accent"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] opacity-90 z-0"
            style={{ transform: "translate(-50%, -60%)" }}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
            <div className="flex flex-col gap-4 md:ml-[-20px]">
              {filteredFAQs.length === 0 && <p>No results found.</p>}
              {leftFAQs.map((faq, idx) => (
                <div
                  key={idx}
                  className="
                    p-3
                    rounded-[20px]
                    shadow-md
                    bg-[#1A1A1A]
                    min-h-[120px]
                    flex flex-col justify-center
                    md:transform md:scale-90
                  ">
                  <h2 className="font-semibold text-lg mb-2 text-[#dedede]">
                    {faq.question}
                  </h2>
                  <p className="text-sm text-[#a0a0a0]">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 md:mr-[-20px]">
              {rightFAQs.map((faq, idx) => (
                <div
                  key={idx}
                  className="
                    p-3
                    rounded-[20px]
                    shadow-md
                    bg-[#1A1A1A]
                    min-h-[120px]
                    flex flex-col justify-center
                    md:transform md:scale-90
                  ">
                  <h2 className="font-semibold text-lg mb-2 text-[#dedede]">
                    {faq.question}
                  </h2>
                  <p className="text-sm text-[#a0a0a0]">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
