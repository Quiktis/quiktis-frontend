"use client";

import React, { useState } from "react";
import Image from "next/image";

type SettingKey = "ticket" | "approval" | "capacity";

const EventCreationPage: React.FC = () => {
  const [eventSettings, setEventSettings] = useState<
    Record<SettingKey, boolean>
  >({
    ticket: false,
    approval: false,
    capacity: false,
  });

  const [selectedThemeColor, setSelectedThemeColor] = useState("#55FF0099");
  const [showColorPicker, setShowColorPicker] = useState(false);

  const themeColors = [
    "#55FF0099",
    "#3b82f6",
    "#8b5cf6",
    "#f59e0b",
    "#ef4444",
    "#ec4899",
    "#06b6d4",
    "#84cc16",
  ];

  const toggleSetting = (setting: SettingKey) => {
    setEventSettings((prev) => ({ ...prev, [setting]: !prev[setting] }));
  };

  const handleColorSelect = (color: string) => {
    setSelectedThemeColor(color);
    setShowColorPicker(false);
  };

  return (
    <div className="bg-[#131517] min-h-screen text-white font-sans p-4 sm:p-8 flex items-center justify-center relative overflow-hidden">
      <main className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 relative z-10">
        {/* Left Column */}
        <div className="lg:col-span-2 flex flex-col items-center gap-6 relative">
          <div className="w-full max-w-sm aspect-square rounded-3xl flex flex-col justify-end relative overflow-hidden group">
            <Image
              src="/spiral-img.svg"
              alt="Event cover background"
              fill
              className="absolute inset-0 object-cover"
              unoptimized
            />
            <button
              type="button"
              className="relative z-10 w-full flex items-center justify-center gap-2 py-4 px-6 bg-white/10 backdrop-blur-xl hover:bg-white/20 transition-colors duration-300 rounded-b-[24px]"
            >
              <Image
                src="/icons/img-img-create.svg"
                alt="Add event cover"
                width={20}
                height={20}
              />
              <span>Add event cover</span>
            </button>
          </div>

          {/* Theme Selector */}
          <div className="relative w-full max-w-sm">
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 py-3 px-6 bg-[#FFFFFF0F] backdrop-blur-[20px] rounded-[10px] text-white font-medium transition-transform duration-200"
              onClick={() => setShowColorPicker(!showColorPicker)}
            >
              <div className="w-6 h-6 p-1 rounded-full bg-transparent flex items-center justify-center relative overflow-hidden border-2 border-gray-500">
                <div
                  className="w-full h-full rounded-full"
                  style={{
                    background: `conic-gradient(from 0deg, ${selectedThemeColor} 0deg, ${selectedThemeColor} 180deg, #7BFF004D 180deg, #7BFF004D 360deg)`,
                  }}
                />
              </div>
              <span className="font-medium">Choose Theme</span>
            </button>

            {showColorPicker && (
              <div className="absolute top-full mt-2 left-0 right-0 bg-[#1f2031] border border-gray-700 rounded-xl p-4 z-50">
                <div className="grid grid-cols-4 gap-3">
                  {themeColors.map((color) => (
                    <button
                      key={color}
                      type="button"
                      className="w-10 h-10 rounded-full border-2 border-transparent transition-colors duration-200 flex items-center justify-center"
                      style={{ backgroundColor: color }}
                      onClick={() => handleColorSelect(color)}
                      aria-label={`Select color ${color}`}
                    >
                      {selectedThemeColor === color && (
                        <div className="w-3 h-3 bg-white rounded-full" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          {/* Public badge */}
          <div>
            <span className="inline-flex items-center gap-3 bg-[#FFFFFF0F] backdrop-blur-[20px] py-2 px-5 rounded-[7px] text-base font-medium text-gray-200">
              <Image
                src="/icons/global-icon.svg"
                alt="global"
                width={20}
                height={20}
              />
              Public
            </span>
          </div>

          {/* Event Name */}
          <input
            type="text"
            placeholder="Event Name Here..."
            className="font-thin bg-transparent placeholder-gray-600 focus:outline-none w-full text-[#FFFFFF38]"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 100,
              fontSize: "54.11px",
              lineHeight: "100%",
              letterSpacing: "0%",
            }}
            aria-label="Event name"
          />

          {/* Start and End */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-grow flex flex-col gap-4">
              <div className="flex items-center justify-between bg-[#FFFFFF0F] p-4 rounded-[10px] backdrop-blur-[20px]">
                <span className="text-gray-400 font-medium">Start</span>
                <div className="flex items-center gap-0.5">
                  <span className="bg-[#FFFFFF0F] py-1 px-3 text-white font-semibold rounded-l-[7px]">
                    Tue, Sep 9
                  </span>
                  <span className="bg-[#FFFFFF0F] py-1 px-3 text-white font-semibold rounded-r-[7px]">
                    8:00PM
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between bg-[#FFFFFF0F] p-4 rounded-[10px] backdrop-blur-[20px]">
                <span className="text-gray-400 font-medium">End</span>
                <div className="flex items-center gap-0.5">
                  <span className="bg-[#FFFFFF0F] py-1 px-3 text-white font-semibold rounded-l-[7px]">
                    Tue, Sep 9
                  </span>
                  <span className="bg-[#FFFFFF0F] py-1 px-3 text-white font-semibold rounded-r-[7px]">
                    8:00PM
                  </span>
                </div>
              </div>
            </div>

            {/* Timezone */}
            <div className="bg-[#FFFFFF0F] p-4 rounded-[10px] flex flex-col justify-around items-start sm:w-40 flex-shrink-0">
              <Image
                src="/icons/envelope-icon.svg"
                alt="timezone"
                width={20}
                height={20}
              />
              <div className="text-sm text-left">
                <div className="font-semibold text-gray-200">GMT+01:00</div>
                <div className="text-gray-400">Lagos</div>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center bg-[#FFFFFF0F] p-4 rounded-[10px] gap-4">
            <Image
              src="/icons/location-create.svg"
              alt="location"
              width={20}
              height={20}
            />
            <div>
              <p className="font-medium text-gray-200">Select Event Location</p>
              <p className="text-xs text-gray-500">
                Offline location or virtual link
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="flex items-center bg-[#FFFFFF0F] p-4 rounded-[10px] gap-4">
            <Image
              src="/icons/add-create.svg"
              alt="description"
              width={20}
              height={20}
            />
            <p className="font-medium text-gray-200">Add Event Description</p>
          </div>

          {/* Event Settings */}
          <div>
            <h3 className="text-lg font-semibold text-gray-300 mb-3">
              Event Settings
            </h3>
            <div className="bg-[#FFFFFF0F] rounded-[10px] overflow-hidden">
              {/* Ticket */}
              <div>
                <div
                  role="button"
                  onClick={() => toggleSetting("ticket")}
                  className="flex items-center p-3 gap-4 cursor-pointer"
                >
                  <Image
                    src="/icons/ticket-create.svg"
                    alt="ticket"
                    width={20}
                    height={20}
                  />
                  <span className="font-medium text-gray-200">Ticket</span>
                </div>
                <div className="h-px bg-[#AAAAAA24] mx-3"></div>
              </div>

              {/* Approval */}
              <div>
                <div
                  role="button"
                  onClick={() => toggleSetting("approval")}
                  className="flex items-center p-3 gap-4 cursor-pointer"
                >
                  <Image
                    src="/icons/approval-create.svg"
                    alt="approval"
                    width={20}
                    height={20}
                  />
                  <span className="font-medium text-gray-200">Approval</span>
                </div>
                <div className="h-px bg-[#AAAAAA24] mx-3"></div>
              </div>

              {/* Capacity */}
              <div
                role="button"
                onClick={() => toggleSetting("capacity")}
                className="flex items-center p-3 gap-4 cursor-pointer"
              >
                <Image
                  src="/icons/approval-create.svg"
                  alt="capacity"
                  width={20}
                  height={20}
                />
                <span className="font-medium text-gray-200">Set Capacity</span>
              </div>
            </div>
          </div>

          {/* Submit */}
          <button
            type="button"
            className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-gray-200 transition-colors text-lg"
          >
            Create Event
          </button>
        </div>
      </main>
    </div>
  );
};

export default EventCreationPage;
