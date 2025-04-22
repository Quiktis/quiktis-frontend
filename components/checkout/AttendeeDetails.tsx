import React from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function AttendeeDetails() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      <div>
        <label className="block text-gray-300 mb-2">Full Name</label>
        <input
          type="text"
          placeholder="Enter your full name here"
          className="w-full bg-transparent border border-gray-600 rounded p-3 placeholder-gray-500"
        />
      </div>

      <div>
        <label className="block text-gray-300 mb-1">
          Email Address
          <span className="text-gray-400 text-sm">
            (This mail would receive a copy of the event ticket)
          </span>
        </label>
        <input
          type="email"
          placeholder="Enter your email address here"
          className="w-full bg-transparent border border-gray-600 rounded p-3 placeholder-gray-500"
        />
      </div>

      <div>
        <label className="block text-gray-300 mb-2">Location</label>
        <input
          type="text"
          placeholder="Input Location"
          className="w-full bg-transparent border border-gray-600 rounded p-3 placeholder-gray-500"
        />
      </div>

      <div className="relative">
        <label className="block text-gray-300 mb-2">Gender</label>
        <select className="w-full appearance-none bg-transparent border border-gray-600 rounded p-3 text-white focus:outline-none">
          <option className="bg-black text-white">Select</option>
          <option className="bg-black text-white">Male</option>
          <option className="bg-black text-white">Female</option>
          <option className="bg-black text-white">Other</option>
        </select>
        <IoIosArrowDown className="absolute right-4 top-[52%] transform -translate-y-1/2 text-white pointer-events-none" />
      </div>
    </div>
  );
}
