"use client";

import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import Image from "next/image";

interface ImageUploaderProps {
  preview: string | null; // Optional prop for preview URL
  setPreview: React.Dispatch<React.SetStateAction<string | null>>; // Optional prop for setting preview URL
  setImage: React.Dispatch<React.SetStateAction<File | null>>;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ setImage, preview, setPreview }) => {
  const [error, setError] = useState<string>("");
  const [isDragging, setIsDragging] = useState<boolean>(false);
  //const [preview, setPreview] = useState<string | null>(null); // For previewing the image

  const handleImageUpload = (file: File | null) => {
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setError("Please upload a valid image file.");
      return;
    }

    const maxSize = 2 * 1024 * 1024; // 2MB
    if (file.size > maxSize) {
      setError("File size must be less than 2MB.");
      return;
    }

    setError("");
    setImage(file); // Store the File object in the state

    // Generate a preview URL for the image
    const previewUrl = URL.createObjectURL(file);
    setPreview(previewUrl);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    handleImageUpload(file);
  };

  const handleDragOver = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    setIsDragging(false);
    const file = event.dataTransfer.files?.[0] || null;
    handleImageUpload(file);
  };

  return (
    <div className="relative flex flex-col">
      <label
        htmlFor="file-upload"
        className={`flex flex-col items-center justify-center max-md:w-full md:w-[50em] h-[7em] border-2 ${
          preview ? "border" : "border-dashed"
        } ${
          isDragging ? "border-blue-500 bg-blue-100" : "border-gray-400"
        } rounded-lg cursor-pointer hover:border-gray-600 transition-all relative`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {preview ? (
          <Image
            src={preview}
            objectFit="contain"
            alt="Uploaded Preview"
            height={100}
            width={100}
            className="rounded-lg"
          />
        ) : (
          <div className="flex flex-col items-center text-gray-500">
            <FaPlus size={25} />
            <p className="text-sm mt-2">
              {isDragging ? "Drop image here" : "Click or drag to upload image"}
            </p>
          </div>
        )}
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
      </label>

      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
};

export default ImageUploader;