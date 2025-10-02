"use client";
import React from "react";
import Image from "next/image";
import { AiOutlineCalendar } from "react-icons/ai";
import { HiArrowTrendingUp } from "react-icons/hi2"; 
import { IoMdCheckmark } from "react-icons/io";
import DashboardNav from "@/components/dashboard/DashboardNav";
import UserProfileDisplay from "@/components/dashboard/UserProfileDisplay";

const ButtonGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-sm">
      <button
        className="flex items-center gap-2 bg-primary text-white font-semibold text-lg 
                   px-6 py-4 sm:px-8 sm:py-5 rounded-xl shadow-[0_0_20px_#FF4D2A] transition-shadow">
        <AiOutlineCalendar className="w-6 h-6" />
        <span>Create Event</span>
      </button>

      <button
        className="flex items-center gap-2 bg-primary text-white font-semibold text-lg 
                   px-6 py-4 sm:px-8 sm:py-5 rounded-xl shadow-[0_0_20px_#FF4D2A] transition-shadow">
        <HiArrowTrendingUp className="w-6 h-6" />
        <span>Sales Analytics</span>
      </button>
    </div>
  );
};

const EventCreatorDashboard: React.FC = () => {
  return (
    <main className="py-8 min-h-screen text-white">
      <DashboardNav />

      <section className="flex flex-col md:flex-row gap-8 mt-8 items-center md:items-start justify-between">
        <div className="relative w-full md:flex-1 rounded-[40px] overflow-hidden">
          <Image
            src="/502.png"
            alt="Profile Card BG"
            fill
            className="object-cover object-center opacity-20"
          />
          <UserProfileDisplay />
        </div>

        <div className="w-full sm:w-auto flex justify-center mt-4">
          <ButtonGrid />
        </div>
      </section>

      <section className="mt-12 flex flex-col lg:flex-row gap-12">
        <div className="flex-[1.5] w-full">
          <h2 className="text-2xl font-bold mb-6">Profile Settings</h2>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-6">
            <Image
              src="/jax.png"
              alt="User Profile"
              width={60}
              height={60}
              className="rounded-full"
            />
            <div className="text-center sm:text-left">
              <div className="text-white text-xl font-semibold">
                Jaxson Siphron
              </div>
              <div className="text-gray-400">Jaxsomsiphron@gmail.com</div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            <div className="flex flex-col w-full">
              <label className="mb-2 text-[#FF4D2A]">First Name</label>
              <input
                type="text"
                placeholder="Jaxson"
                className="w-full bg-transparent border border-gray-600 rounded-md text-white p-3 
                           focus:outline-none focus:ring-2 focus:ring-[#FF4D2A] transition-colors"
              />
            </div>

            <div className="flex flex-col w-full">
              <label className="mb-2 text-[#FF4D2A]">Last Name</label>
              <input
                type="text"
                placeholder="Siphron"
                className="w-full bg-transparent border border-gray-600 rounded-md text-white p-3 
                           focus:outline-none focus:ring-2 focus:ring-[#FF4D2A] transition-colors"
              />
            </div>
          </div>

          <div className="mt-6 w-full flex flex-col">
            <label className="mb-2 text-[#FF4D2A]">Email</label>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <input
                type="email"
                placeholder="Jaxsomsiphron@gmail.com"
                className="flex-1 bg-transparent border border-gray-600 rounded-md text-white p-3 
                           focus:outline-none focus:ring-2 focus:ring-[#FF4D2A] transition-colors"
              />
              <button
                className="flex items-center justify-center bg-[#FF4D2A] text-white px-4 py-3 
                           rounded-md font-semibold hover:brightness-90 transition-colors">
                <IoMdCheckmark className="w-6 h-6 mr-1" />
                <span>Verify Email Address</span>
              </button>
            </div>
          </div>

          <div className="mt-28 w-full">
            <h2 className="text-2xl font-bold mb-4">Privacy Settings</h2>
            <div className="flex flex-col gap-4">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="h-5 w-5 accent-[#FF4D2A] cursor-pointer"
                />
                <span>Show my email address on my profile</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="h-5 w-5 accent-[#FF4D2A] cursor-pointer"
                />
                <span>Show my birthday on my profile</span>
              </label>
            </div>

            <div className="flex w-full flex-col sm:flex-row justify-end gap-4 mt-6">
              <button className="bg-[#FF4D2A] text-white px-6 py-2 w-full sm:w-32 rounded-md font-semibold hover:brightness-90 transition-colors">
                Save
              </button>
              <button className="border border-[#FF4D2A] text-[#FF4D2A] px-6 py-2 w-full sm:w-32 rounded-md font-semibold hover:bg-[#FF4D2A] hover:text-white transition-colors">
                Cancel
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 flex justify-center sm:justify-end">
          <div className="w-full max-w-sm">
          </div>
        </div>
      </section>
    </main>
  );
};

export default EventCreatorDashboard;
