"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import {
  FiMessageSquare,
  FiMail,
  FiLinkedin,
  FiPhoneCall,
  FiMapPin,
  FiSend,
} from "react-icons/fi";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, message });
  };

  return (
    <main className="relative min-h-screen text-white">
      <Image
        src="/gradient.png"
        alt="Background Gradient"
        fill
        className="object-cover z-0"
        style={{ filter: "brightness(0.8)" }}
        priority
      />

      <div className="relative z-10 pt-4 pb-10">
        <section className="flex flex-col md:flex-row items-center justify-between gap-6 mt-4">
          <div className="flex-1">
            <h1 className="text-5xl font-bold mb-2">Contact our team</h1>
            <p className="text-base text-gray-200 max-w-xl">
              Got any questions about our product or related issues? We’re here
              to help. Chat to our friendly team 24/7 and get onboard in less
              than 5 minutes.
            </p>
          </div>

          <div className="flex-none transform -translate-x-4">
            <Image
              src="/3dicons.png"
              alt="Arrow Icon"
              width={300}
              height={300}
              className="mx-auto"
              priority
            />
          </div>
        </section>

        <section className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-[#111111]/90 rounded-[20px] shadow-lg">
            <h2 className="text-[30px] font-semibold mb-2 text-[#F68B61]">
              Chat with us
            </h2>
            <p className="text-[11px] text-gray-200 mb-4">
              Start a live chat, or send an email—whatever works best for you.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <FiMessageSquare className="text-primary" />
                <a
                  href="https://your-live-chat-link.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline">
                  Start a live chat
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FiMail className="text-primary" />
                <a
                  href="mailto:support@quiktis.com"
                  className="hover:underline">
                  support@quiktis.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FiLinkedin className="text-primary" />
                <a
                  href="https://www.linkedin.com/company/quiktisupport"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline">
                  QuiktisSupport
                </a>
              </li>
            </ul>
          </div>

          <div className="p-6 bg-[#111111]/90 rounded-[20px] shadow-lg">
            <h2 className="text-[30px] font-semibold mb-2 text-[#F68B61]">
              Call us
            </h2>
            <p className="text-[11px] text-gray-200 mb-4">
              Our lines are open Mon-Fri from 8am to 5pm.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <FiPhoneCall className="text-primary" />
                <a href="tel:12995560908" className="hover:underline">
                  1299 556-0908
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FiPhoneCall className="text-primary" />
                <a href="tel:12995560098" className="hover:underline">
                  1299 556-0098
                </a>
              </li>
            </ul>
          </div>

          <div className="p-6 bg-[#111111]/90 rounded-[20px] shadow-lg">
            <h2 className="text-[30px] font-semibold mb-2 text-[#F68B61]">
              Visit us
            </h2>
            <p className="text-[11px] text-gray-200 mb-4">
              Meet our team at our Lagos HQ.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <FiMapPin className="text-primary" />
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline">
                  6301 Elgin St. Celina, Delaware
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FiMail className="text-primary" />
                <a
                  href="mailto:support@quiktis.com"
                  className="hover:underline">
                  support@quiktis.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FiLinkedin className="text-primary" />
                <a
                  href="https://www.linkedin.com/company/quiktisupport"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline">
                  QuiktisSupport
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-left text-4xl font-bold mb-6">Message Us</h2>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Input Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full p-3 border border-[#3e3a39] bg-transparent rounded-[10px] text-white focus:ring-2 focus:ring-orange-500 focus:outline-none"
                />
                <label className="absolute -top-2 left-3 px-1 text-[14px] text-[#FF4D2A] bg-[#111111]">
                  Full Name
                </label>
              </div>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Input Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full p-3 border border-[#3e3a39] bg-transparent rounded-[10px] text-white focus:ring-2 focus:ring-orange-500 focus:outline-none"
                />
                <label className="absolute -top-2 left-3 px-1 text-[14px] text-[#FF4D2A] bg-[#111111]">
                  Email Address
                </label>
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div className="relative">
                <textarea
                  rows={5}
                  placeholder="Leave us a message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full p-3 border border-[#3e3a39] bg-transparent rounded-[10px] text-white focus:ring-2 focus:ring-orange-500 focus:outline-none resize-none"
                />
                <label className="absolute -top-2 left-3 px-1 text-[14px] text-[#FF4D2A] bg-[#111111]">
                  Message
                </label>
              </div>
              <div className="flex justify-end mt-4">
                <Button
                  type="submit"
                  className="flex items-center bg-primary py-3 px-6 text-white font-semibold rounded-md hover:bg-primary/90 transition-colors">
                  <span className="mr-2">Send Message</span>
                  <FiSend />
                </Button>
              </div>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
};

export default ContactPage;
