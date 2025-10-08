"use client";
import Input from "../ui/CustomInput";

import React, { useState } from "react";
import GenderDropdown from "@/src/components/checkout/gender-dropdown";

export default function AttendeeDetails({
  email,
  setEmail,
  fullName,
  setFullname,
  location,
  setLocation,
}: {
  email: string;
  setEmail: any;
  fullName: string;
  setFullname: any;
  location: string;
  setLocation: any;
}) {
  const [gender, setGender] = useState("");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      {/* Full Name */}
      <div className="grid">
        <Input
          required={true}
          value={fullName}
          onChange={(e) => setFullname(e.target.value)}
          label="Full Name"
          type="text"
          placeholder="Enter your full name here"
          className="w-full bg-transparent border border-gray-600 rounded p-3 placeholder-gray-500"
        />
      </div>

      {/* Email Address */}
      <div>
        <div className="flex items-center gap-2 text-sm"></div>
        <Input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
          label={
            <p className="space-x-2">
              <label className="text-gray-300">Email Address</label>
              <span className="text-gray-400 text-xs">
                (This mail would receive a copy of the event ticket)
              </span>
            </p>
          }
          type="email"
          placeholder="Enter your email address here"
          className="w-full bg-transparent border border-gray-600 rounded p-3 placeholder-gray-500"
        />
      </div>

      {/* Location */}
      <div>
        <Input
          label="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          type="text"
          placeholder="Input Location"
          className="w-full bg-transparent border border-gray-600 rounded p-3 placeholder-gray-500"
        />
      </div>

      {/* Gender */}
      <div>
        <label className="block text-gray-300 mb-2">Gender</label>
        <GenderDropdown value={gender} onChange={setGender} />
      </div>
    </div>
  );
}
