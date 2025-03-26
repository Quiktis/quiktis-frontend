"use client";
import React, { useState } from "react";
import SearchBar from "@/components/ui/SearchBar";
import Button from "@/components/ui/Button";

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
    <main className="bg-transparent text-white min-h-screen">
      <div className="container mx-auto py-10 px-6">
        {/* Top Section */}
        <div className="flex justify-between items-start flex-wrap gap-8">
          <div>
            <h1 className="text-[80px] md:text-[100px] font-extrabold">
              F<span className="mx-1 text-[#FF4D2A]">.</span>A
              <span className="mx-1 text-[#FF4D2A]">.</span>Q
            </h1>
            <p className="text-[20px] mt-2 mb-6 whitespace-normal max-w-xs md:whitespace-nowrap md:max-w-full">
              Looking for help? Here are our most frequently asked questions.
            </p>
            <div className="w-full max-w-[500px] mb-8">
              <SearchBar
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                inputClassName="w-full"
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/Triplequestionmark.png"
              alt="Question Mark"
              className="w-[250px] md:w-[300px]"
            />
            <div className="flex gap-4 mt-4">
              <Button
                className="bg-[#FF4D2A] hover:bg-[#FF4D2A]/90 transition-colors duration-300 text-sm"
                onClick={() => alert("Contact Us clicked")}>
                Contact Us
              </Button>
              <Button
                className="bg-[#FF4D2A] hover:bg-[#FF4D2A]/90 transition-colors duration-300 text-sm"
                onClick={() => alert("Live Chat clicked")}>
                Live Chat
              </Button>
            </div>
          </div>
        </div>

        {/* FAQ GRID SECTION */}
        <div className="relative flex flex-col md:flex-row gap-8 mt-8">
          <img
            src="/ellipse2.png"
            alt="Orange Blur"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] opacity-60 blur-sm z-0"
          />
          <img
            src="/star2.png"
            alt="Star Accent"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] opacity-90 z-0"
            style={{ transform: "translate(-50%, -60%)" }}
          />
          <div className="relative z-10 flex flex-col gap-4 w-full md:w-1/2">
            {filteredFAQs.length === 0 && <p>No results found.</p>}
            {leftFAQs.map((faq, index) => (
              <div
                key={index}
                className="p-4 rounded-lg shadow-md bg-[#1A1A1A]">
                <h2 className="font-semibold text-xl mb-2">{faq.question}</h2>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="relative z-10 flex flex-col gap-4 w-full md:w-1/2">
            {rightFAQs.map((faq, index) => (
              <div
                key={index}
                className="p-4 rounded-lg shadow-md bg-[#1A1A1A]">
                <h2 className="font-semibold text-xl mb-2">{faq.question}</h2>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
