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
      question: "What is Quiktis?",
      answer:
        "Quiktis is a decentralized ticketing platform that makes event tickets fraud-proof, easy to transfer, and simple to use.",
    },
    {
      question: "How is Quiktis different from other ticketing apps?",
      answer:
        "We cut out fake tickets, reduce high fees, and introduce Event Identity—a digital profile that showcases your event history."
    },
    {
      question: "Do I need crypto to buy a ticket?",
      answer:
        "No! You can pay with your card or bank just like any other platform. Crypto is optional for those who want it.",
    },
    {
      question: "What if I lose my ticket?",
      answer: "Don’t worry—your ticket is always stored in your Quiktis account. You can re-download it anytime.",
    },
    {
      question: "Can I resell or transfer my ticket?",
      answer:
        "Yes. Tickets can be resold or transferred securely, with organizers setting the rules to keep things fair."
    },
    {
      question: "What is Event Identity?",
      answer:
        "It’s your cultural fingerprint on Quiktis—an on-chain record of the events you attend or host, unlocking rewards and community access while protecting your privacy.",
    },
  ];

  const filteredFAQs = faqData.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const leftFAQs = filteredFAQs.slice(0, 3);
  const rightFAQs = filteredFAQs.slice(3, 6);

  return (
    <main className="bg-transparent text-white min-h-screen flex flex-col">
      <div className="container mx-auto max-sm:px-0 py-10 px-6 flex-1 flex flex-col">
        <div className="flex max-sm:justify-center justify-between items-start flex-wrap gap-8 flex-1 md:flex-none">
          <div className="max-sm:text-center text-left">
            <h1 className="text-[80px] max-sm:text-6xl md:text-[100px] font-extrabold">
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
              className="w-[240px] md:w-[380px] -mt-6 max-sm:mt-[-3em] max-sm:max-w-[80vw] max-sm:h-[100px] object-contain max-sm:mb-[1em]"
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
                    p-3 px-6 max-sm:py-4
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
                    p-3 px-6 max-sm:py-4
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
