"use client";
import { useMutations } from "@/src/ApiServices/hooks/useMutations";
import { registerType } from "@/src/lib/schema";
import { useStore } from "@/src/lib/store";
import { cn } from "@/src/lib/utils";
import { Loader } from "lucide-react";
import Image from "next/image";
import React, { ChangeEvent, useRef, useState } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import { FaImage } from "react-icons/fa";
interface UploadImageProps {
  label?: string;
  id: string;
  error?: FieldError;
  height: string;
  register: UseFormRegister<registerType>;
}

const UploadImage = ({
  label,
  id,
  error,
  height,
  register,
}: UploadImageProps) => {
  const { loading, message } = useStore();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const triggerFileInput = () => fileInputRef.current?.click();
  const upload = useMutations();
  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      await upload.upload(file);
      setPreview("");
    }
  };
  return (
    <div className="flex flex-col w-full">
      {label && (
        <div className="flex items-center justify-between mb-2">
          <label
            htmlFor={id}
            className="mb-2 text-sm font-medium text-[#181819]"
          >
            {label}
          </label>
        </div>
      )}

      {loading ? (
        <>
          <Loader />
        </>
      ) : (
        <button
          type="button"
          onClick={triggerFileInput}
          className={cn(
            "flex flex-col items-center justify-center w-full border-2 cursor-pointer border-dashed rounded-lg",
            preview ? "border-transparent" : "border-gray-300",
            height
          )}
        >
          {preview ? (
            <Image
              src={preview}
              alt="File Preview"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex flex-col items-center justify-center py-6">
              <FaImage className="text-gray-400 text-4xl mb-2" />
              <p className="text-sm text-gray-500">Click to upload file</p>
            </div>
          )}

          <input
            id={id}
            type="file"
            {...register("picture")}
            ref={fileInputRef}
            style={{
              display: "none",
            }}
            onChange={handleFileChange}
          />
          {error && (
            <p className="text-red-500 text-sm mt-1">
              {error.message || message || "An error occured"}
            </p>
          )}
        </button>
      )}
    </div>
  );
};

export default UploadImage;
