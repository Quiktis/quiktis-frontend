"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import Button from "@/components/ui/Button";
import { IoImageOutline } from "react-icons/io5";
import { HiUpload } from "react-icons/hi";

export default function WriteReviewIndex() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>, idx: number) => {
    if (!e.target.files) return;
    const newFiles = [...files];
    newFiles[idx] = e.target.files[0];
    setFiles(newFiles);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log({ firstName, email, message, files });
  };

  return (
    <main
      className="
    text-white
    w-full px-4 py-4
    flex justify-center
  ">
      <div
        className="
      w-full max-w-[95vw] 
      bg-[rgba(255,255,255,0.05)]
      backdrop-blur-xl
      rounded-[35px]
      p-10
      border border-[#5e5e5e]
      shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
      relative
    ">
        <h1 className="text-3xl font-bold mb-8">Write a Review</h1>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Name */}
          <div className="relative">
            <label className="absolute -top-3 left-4 bg-[rgba(11,11,11,0.6)] px-1 text-sm text-[#FF4D2A]">
              First Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="
              w-full bg-transparent border border-gray-600
              rounded-lg px-4 py-3 pt-6
              focus:outline-none focus:border-[#FF4D2A]
            "
            />
          </div>

          {/* Email */}
          <div className="relative">
            <label className="absolute -top-3 left-4 bg-[rgba(11,11,11,0.6)] px-1 text-sm text-[#FF4D2A]">
              Email
            </label>
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="
              w-full bg-transparent border border-gray-600
              rounded-lg px-4 py-3 pt-6
              focus:outline-none focus:border-[#FF4D2A]
            "
            />
          </div>

          {/* Upload File and Message in same row */}
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Upload File */}
            <div>
              <label className="flex items-center gap-2 text-sm text-[#FF4D2A] mb-2">
                Upload File
                <HiUpload className="w-5 h-5" />
              </label>
              <div
                className="
                grid grid-cols-2 divide-x-2 divide-gray-600
                border-2 border-dashed border-gray-600
                rounded-lg p-4
              ">
                {[0, 1].map((i) => (
                  <label
                    key={i}
                    className="flex flex-col items-center justify-center h-32 cursor-pointer">
                    <IoImageOutline className="w-6 h-6 text-gray-500 mb-1" />
                    {files[i] ? (
                      <span className="text-gray-300">{files[i].name}</span>
                    ) : (
                      <span className="text-gray-500">Your image</span>
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleFileChange(e, i)}
                    />
                  </label>
                ))}
              </div>
            </div>

            {/* Message */}
            <div className="relative">
              <label className="absolute -top-3 left-4 bg-[rgba(11,11,11,0.6)] px-1 text-sm text-[#FF4D2A]">
                Message
              </label>
              <textarea
                rows={6}
                placeholder="Leave a message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="
                w-full bg-transparent border border-gray-600
                rounded-lg px-4 py-3 pt-6
                focus:outline-none focus:border-[#FF4D2A]
              "
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="md:col-span-2 flex justify-end gap-4 mt-4">
            <Button
              type="button"
              className="border border-gray-600 rounded-lg hover:bg-gray-700 px-6 py-2"
              onClick={() => {
                setFirstName("");
                setEmail("");
                setMessage("");
                setFiles([]);
              }}>
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-[#FF4D2A] rounded-lg hover:opacity-90 px-6 py-2">
              Submit Review
            </Button>
          </div>
        </form>

        {/* Bottom fade-out line */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#494949] to-transparent" />
      </div>
    </main>
  );
}
