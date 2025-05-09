"use client";

import React, { useState, useMemo } from "react";
import { IoCloseSharp } from "react-icons/io5";
//import { FaPlus } from "react-icons/fa";
//import Image from "next/image";

interface ImageUploaderProps {
  preview: string | null; // Optional prop for preview URL
  setPreview: React.Dispatch<React.SetStateAction<string | null>>; // Optional prop for setting preview URL
  setImage: React.Dispatch<React.SetStateAction<File | null>>;
  label?: any;
  containerClass?: string;
}

// ImageUploader component
const ImageUploader: React.FC<ImageUploaderProps> = ({
  setImage,
  preview,
  setPreview,
  label,
  containerClass = "",
}) => {
  const [error, setError] = useState<string>(""); 
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [fileName, setFileName] = useState<string | null>(null); // Store file name

  // Generate a unique ID for each instance of the component that persists across renders
  const uniqueId = useMemo(() => 
    `file-upload-${Math.random().toString(36).substring(2, 9)}`, 
  []); 

  const handleImageUpload = (file: File | null): void => {
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
    setImage(file); 
    setFileName(file.name);

    // Generate a preview URL for the image
    const previewUrl = URL.createObjectURL(file);
    setPreview(previewUrl);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0] || null;
    handleImageUpload(file);
    event.target.value = ""; // Allow re-uploading the same file
  };

  const handleDragOver = (event: React.DragEvent<HTMLLabelElement>): void => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (): void => {
    setIsDragging(false);
  };

  const handleDrop = (event: React.DragEvent<HTMLLabelElement>): void => {
    event.preventDefault();
    setIsDragging(false);
    const file = event.dataTransfer.files?.[0] || null;
    handleImageUpload(file);
  };

  // Function to clear image and preview
  const handleClearImage = (): void => {
    setPreview(null);
    setImage(null);
    setFileName(null) // Reset the File object state
  };

  return (
    <div className="relative flex flex-col">
      <label
        htmlFor={uniqueId}
        className={`relative flex flex-col items-center justify-center w-full h-full border-2 py-8 ${
          preview ? "border" : "border-dashed"
        } ${isDragging ? "border-blue-500 bg-[#ffffff0c]" : "border-gray-400"} rounded-lg cursor-pointer hover:border-gray-600 transition-all relative ${containerClass}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {preview ? (
          <div className="relative w-[7em] h-[7em] grid overflow-hidden rounded-lg">
            <img
              src={preview}
              alt="Uploaded Preview"
              className="w-full h-full rounded-lg object-cover"
            />
          </div>
        ) : label ? (
          label
        ) : (
          <div className="flex flex-col items-center text-gray-500">
            {/* Plus icon using HTML/CSS instead of React Icons */}
            <div className="flex items-center justify-center w-6 h-6 border-2 border-gray-400 rounded-full">
              <span className="text-xl font-bold leading-none">+</span>
            </div>
            <p className="text-sm mt-2">
              {isDragging ? "Drop image here" : "Click or drag to upload image"}
            </p>
          </div>
        )}
        <input
          id={uniqueId}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />

        {/* Close icon button to clear the image */}
        
      </label>
      {fileName && (
        <p className="text-gray-400 text-sm mt-2">
          <span className="font-medium">File:  </span> {fileName}
        </p>
      )}
      {preview && (
          <button
            type="button"
            className="absolute top-4 right-4"
            onClick={handleClearImage}
          >
            <IoCloseSharp className="text-gray-400" size={25} />
          </button>
        )}
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
};

export default ImageUploader;
