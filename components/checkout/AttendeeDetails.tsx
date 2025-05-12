"use client";

import React, { useState } from "react";
import GenderDropdown from "@/components/checkout/gender-dropdown";

export default function AttendeeDetails() {
  const [gender, setGender] = useState("");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      {/* Full Name */}
      <div>
        <label className="block text-gray-300 text-sm mb-2">Full Name</label>
        <input
          type="text"
          placeholder="Enter your full name here"
          className="w-full bg-transparent border border-gray-600 rounded p-3 placeholder-gray-500"
        />
      </div>

      {/* Email Address */}
      <div>
        <div className="flex items-center gap-2 text-sm mb-2">
          <label className="text-gray-300">Email Address</label>
          <span className="text-gray-400 text-xs">
            (This mail would receive a copy of the event ticket)
          </span>
        </div>
        <input
          type="email"
          placeholder="Enter your email address here"
          className="w-full bg-transparent border border-gray-600 rounded p-3 placeholder-gray-500"
        />
      </div>

      {/* Location */}
      <div>
        <label className="block text-gray-300 text-sm mb-2">Location</label>
        <input
          type="text"
          placeholder="Input Location"
          className="w-full bg-transparent border border-gray-600 rounded p-3 placeholder-gray-500"
        />
      </div>

      {/* Gender */}
      <div>
        <label className="block text-gray-300 text-sm mb-2">Gender</label>
        <GenderDropdown value={gender} onChange={setGender} />
      </div>
    </div>
  );
}
