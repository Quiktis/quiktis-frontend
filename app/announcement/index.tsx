"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  FaBold,
  FaItalic,
  FaListUl,
  FaListOl,
  FaImage as FaImageIcon,
} from "react-icons/fa";

import DashboardNav from "@/components/dashboard/DashboardNav";
import Button from "@/components/ui/CustomButton";
import InputField from "@/components/ui/InputFields";
import FavoriteEvents from "@/components/dashboard/FavoriteEvents";

const AnnouncementPage = () => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = () => {
    console.log("Announcement Sent:", { title, message });
  };

  return (
    <main
      className="relative min-h-screen text-white py-8 overflow-x-hidden"
      style={{
        backgroundImage: "url('/gradient.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <DashboardNav />

      <div className="flex flex-col md:flex-row items-start justify-between gap-8 mt-6 px-4 sm:px-6">
        {/* LEFT COLUMN */}
        <div className="flex-1 w-full max-w-7xl">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-4">
              Announcement
            </h1>
            <p className="text-base md:text-lg mb-8 max-w-2xl">
              After entering the subject and content and clicking “Send,” ticket
              holders are notified.
            </p>
          </div>

          {/* Event Title */}
          <div className="mb-24">
            <label
              htmlFor="eventTitle"
              className="block text-white font-semibold mb-2 text-lg">
              Event Title
            </label>
            <div className="max-w-lg">
              <InputField
                name="eventTitle"
                label=""
                type="text"
                placeholder="Input Event Title here"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-[#FF4D2A] font-semibold mb-2 text-lg">
              Message body
            </label>
            <div className="max-w-lg">
              <div
                className="rounded-md p-4 w-full"
                style={{ backgroundColor: "rgba(255,255,255,0.2)" }}>
                <textarea
                  className="w-full h-32 p-2 bg-transparent text-white placeholder-white/60 rounded-md outline-none resize-none"
                  placeholder="Enter an announcement"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <div
                  className="flex items-center gap-4 p-2 mt-2 rounded-md"
                  style={{ backgroundColor: "rgba(198,198,206,0.2)" }}>
                  <button
                    type="button"
                    className="p-1 hover:text-orange-400 transition-colors"
                    title="Bold">
                    <FaBold />
                  </button>
                  <button
                    type="button"
                    className="p-1 hover:text-orange-400 transition-colors"
                    title="Italic">
                    <FaItalic />
                  </button>
                  <button
                    type="button"
                    className="p-1 hover:text-orange-400 transition-colors"
                    title="Bulleted List">
                    <FaListUl />
                  </button>
                  <button
                    type="button"
                    className="p-1 hover:text-orange-400 transition-colors"
                    title="Numbered List">
                    <FaListOl />
                  </button>
                  <button
                    type="button"
                    className="p-1 hover:text-orange-400 transition-colors"
                    title="Insert Image">
                    <FaImageIcon />
                  </button>
                </div>
              </div>

              <div className="flex justify-end mt-4">
                <Button onClick={handleSend} type="button">
                  Sent Update
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="w-full md:w-auto flex flex-col items-center md:items-end gap-6">
          <div className="relative -top-24 hidden md:block">
            <Image
              src="/speaker.png"
              alt="Megaphone"
              width={400}
              height={400}
              priority
            />
          </div>

          <div className="w-full md:w-[450px]">
            <FavoriteEvents />
          </div>
        </div>
      </div>
    </main>
  );
};

export default AnnouncementPage;
