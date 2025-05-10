"use client";

import React, { useState, useMemo } from "react";
import { IoCloseSharp } from "react-icons/io5";
import Cropper from "react-easy-crop";
import { getCroppedImg } from "./cropUtils";
import { IoMdArrowBack } from "react-icons/io";
import { FaPen } from "react-icons/fa";

interface ProfileImageUploaderProps {
  preview: string | null; // Optional prop for preview URL
  setPreview: React.Dispatch<React.SetStateAction<string | null>>; // Optional prop for setting preview URL
  setImage: React.Dispatch<React.SetStateAction<File | null>>;
  label?: string;
  containerClass?: string;
  onSave: (croppedImage: string) => Promise<string | void>;
}

const ProfileImageUploader: React.FC<ProfileImageUploaderProps> = ({
  setImage,
  preview,
  setPreview,
  label = "Upload Profile Picture",
  containerClass = "",
  onSave,
}) => {
  const [error, setError] = useState<string>("");
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);
  const [isCropperVisible, setIsCropperVisible] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  // Generate a unique ID for each instance of the component
  const uniqueId = useMemo(() => 
    `profile-upload-${Math.random().toString(36).substring(2, 9)}`, 
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
    setImage(file); // Store the File object in the state

    // Generate a preview URL for the image
    const previewUrl = URL.createObjectURL(file);
    setPreview(previewUrl);
    setIsCropperVisible(true);
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

  const handleClearImage = (): void => {
    setPreview(null);
    setImage(null); // Reset the File object state
    setIsCropperVisible(false);
  };

  // Function to handle the crop operation and preview the cropped image
  const handleCrop = async () => {
    if (!preview || !croppedAreaPixels) return;
    const croppedImage = await getCroppedImg(preview, croppedAreaPixels) as string;
    setPreview(croppedImage);
    setIsCropperVisible(false);
  };

  const handleCropAndSave = async () => {
    if (!preview || !croppedAreaPixels) return;
    
    try {
      setIsSaving(true);
      const croppedImage = await getCroppedImg(preview, croppedAreaPixels) as string;
      
      // Call the onSave prop with the cropped image
      await onSave(croppedImage);
      
      // Update the preview with the cropped image
      setPreview(croppedImage);
      setIsCropperVisible(false);
    } catch (error) {
      console.error('Error saving profile image:', error);
      alert('Failed to save profile image. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className={`relative flex flex-col md:w-[7em] md:h-[7em] w-[5em] h-[5em] z-[900]`}>
      {preview && !isCropperVisible ? (
          <div className=" z-40 w-[5em] h-[5em] md:w-[7em] md:h-[7em] grid">
            <img
              src={preview}
              alt="Profile Preview"
              className="w-full h-full object-cover rounded-full border-2 border-[#ffefef]"
            />
            {/*<button
              onClick={handleClearImage}
              className="absolute top-0 right-0 p-2 bg-white text-gray-500 rounded-full shadow-md hover:bg-gray-200 transition"
            >
              <IoCloseSharp size={20} />
            </button>*/}
          </div>
        ) : isCropperVisible ?
          <div className="fixed top-[10em] md:top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] lg:w-[25em] w-full h-[25em]  bg-[#1a1a1a] overflow-hidden rounded-lg border border-gray-800 shadow-xl">
            <div className="absolute flex justify-between w-full px-[1.4em] py-[1.2em] z-[100] bg-black">
              <div className="flex gap-3 justify-center">
                <button onClick={handleClearImage}><IoMdArrowBack size={24} /></button>
                <p className=" font-medium my-auto">Edit profile</p>
              </div>

              <button
            onClick={handleCropAndSave}
            disabled={isSaving}
            className="px-[1.5em] py-2 bg-primary rounded-md font-medium"
          >
            {isSaving ? 'Saving...' : 'Save'}
          </button>
              
            </div>
            <Cropper
              
              image={preview || ""}
              crop={crop}
              zoom={zoom}
              aspect={1}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={(croppedArea, croppedAreaPixels) =>
                setCroppedAreaPixels(croppedAreaPixels)
              }
            />
            <div className="absolute bottom-0 left-[50%] transform -translate-x-[50%]  flex justify-between w-full bg-black px-[1em] py-[1.8em] z-[900]"></div>
          </div> : <div className="grid place-items-center md:w-[7em] md:h-[7em] w-[5em] h-[5em] rounded-full border-white border p-1 z-50">
            <img
                          src={'/person.svg'}
                          alt="profile picture"
                          width={100}
                          height={100}
                          className="rounded-full  object-cover max-md:w-[1.7em] max-md:h-[1.7em] w-[3em] h-[3em] z-0 text-white"
                        />
          </div>
        }

      {/*error && <p className="text-red-500 text-sm mt-2">{error}</p>*/}

     
      {!isCropperVisible && <label
        htmlFor={uniqueId}
        className={` w-[1.7em] h-[1.7em] border-2 rounded-full ${
          preview ? "border" : "border-dashed"
        } grid place-items-center bg-white rounded-full cursor-pointer transition-all absolute border-[#e0e0e0] right-1 bottom-0 z-50 text-gray-950`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      ><FaPen size={10} />
        
        <input
          id={uniqueId}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
      </label>}
    </div>
  );
};

export default ProfileImageUploader;
