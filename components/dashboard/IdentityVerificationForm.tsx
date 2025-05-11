// components/dashboard/IdentityVerificationForm.tsx
"use client";
import React, { useState } from "react";

const IdentityVerificationForm: React.FC = () => {
  const [cardType, setCardType] = useState("");
  const [frontImage, setFrontImage] = useState<string | null>(null);
  const [backImage, setBackImage] = useState<string | null>(null);

  const handleFileUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    side: "front" | "back"
  ) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (side === "front") setFrontImage(e.target?.result as string);
        else setBackImage(e.target?.result as string);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <section className="mt-12 w-full">
      {/* Direct container with no padding to align left */}
      <div className="">
        {/* Main Heading */}
        <h2 className="text-3xl font-bold mb-8 text-white">
          Complete profile to Create Events
          <span className="text-[#FF4D2A]">*</span>
        </h2>

        {/* Card Type Selection */}
        <div className="mb-8">
          <label className="block text-[#FF4D2A] mb-2">Identity Card</label>

          <div className="relative inline-block w-64">
            <select
              value={cardType}
              onChange={(e) => setCardType(e.target.value)}
              className={`
        w-full
        bg-transparent               /* closed = transparent */
        border border-gray-600
        rounded-md
        p-3
        pr-10                        /* room for our arrow */
        appearance-none              /* hide native arrow */
        focus:outline-none
        focus:border-[#FF4D2A]       /* focus = orange border only */
        focus:bg-black                /* open/focused bg = black */
        focus:text-white              /* open/focused text = white */
        ${
          cardType
            ? "text-white" /* real selection = white */
            : "text-[#AAAAAA]" /* placeholder = gray */
        }
      `}>
              <option value="" disabled>
                Card Type
              </option>
              <option value="identity">Identity Card</option>
              <option value="business">Business Card</option>
            </select>

            {/* custom down-arrow */}
            <div
              className={`
        pointer-events-none
        absolute inset-y-0 right-0
        flex items-center
        pr-3
        ${
          cardType
            ? "text-white" /* after select → white arrow */
            : "text-[#AAAAAA]" /* placeholder → gray arrow */
        }
      `}>
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Front & Back Upload Sections */}
        <div className="space-y-12">
          {/* Front Picture */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Front Picture
            </h3>
            <div className="relative w-full h-64 border-2 border-dashed border-[#FF4D2A] rounded-lg flex items-center justify-center cursor-pointer overflow-hidden">
              <input
                type="file"
                accept="image/*"
                className="absolute inset-0 opacity-0 cursor-pointer"
                onChange={(e) => handleFileUpload(e, "front")}
              />
              {frontImage ? (
                <img
                  src={frontImage}
                  alt="Front Preview"
                  className="object-cover w-full h-full"
                />
              ) : (
                <div className="text-center">
                  <button
                    type="button"
                    className="bg-[#FF4D2A] text-white px-4 py-2 rounded-lg mb-2">
                    Browse Files
                  </button>
                  <p className="text-white mt-2">
                    🗂 Drag & drop identity card or Business Card here
                  </p>
                  <p className="text-[#CCCCCC] text-xs mt-2">
                    Supported image format: JPEG, JPG, PNG. Max size: 50MB
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Back Picture */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Back Picture
            </h3>
            <div className="relative w-full h-64 border-2 border-dashed border-[#FF4D2A] rounded-lg flex items-center justify-center cursor-pointer overflow-hidden">
              <input
                type="file"
                accept="image/*"
                className="absolute inset-0 opacity-0 cursor-pointer"
                onChange={(e) => handleFileUpload(e, "back")}
              />
              {backImage ? (
                <img
                  src={backImage}
                  alt="Back Preview"
                  className="object-cover w-full h-full"
                />
              ) : (
                <div className="text-center">
                  <button
                    type="button"
                    className="bg-[#FF4D2A] text-white px-4 py-2 rounded-lg mb-2">
                    Browse Files
                  </button>
                  <p className="text-white mt-2">
                    🗂 Drag & drop identity card or Business Card here
                  </p>
                  <p className="text-[#CCCCCC] text-xs mt-2">
                    Supported image format: JPEG, JPG, PNG. Max size: 50MB
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdentityVerificationForm;
