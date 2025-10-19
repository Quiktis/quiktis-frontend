import React from "react";
import { ImageIcon } from "lucide-react";

type CoverImageUploaderProps = {
  imagePreview: string | null;
  handleImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function CoverImageUploader({
  imagePreview,
  handleImageUpload,
}: CoverImageUploaderProps) {
  return (
    <div className="relative overflow-hidden">
      <div className="w-full h-[300px] lg:h-[300px] xl:h-[400px] rounded-[2.5em] overflow-hidden bg-gradient-to-br from-orange-200 via-orange-300 to-red-400">
        {imagePreview ? (
          <img
            src={imagePreview || "/cover-image-placeholder.png"}
            alt="Event cover"
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src="/cover-image-placeholder.png"
            alt="Event cover with gradient waves"
            className="w-full h-full object-cover"
          />
        )}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
          id="cover-image-upload"
        />
        <label
          htmlFor="cover-image-upload"
          className="absolute bottom-0 left-0 right-0 transform flex items-center gap-2 bg-[#FFFFFF0F] backdrop-blur-sm shadow-md text-white px-4 py-4 rounded-b-[2.5em] hover:bg-black/10 transition-colors cursor-pointer justify-center"
        >
          <span className="w-fit mx-auto flex gap-1 items-center text-black">
            <ImageIcon className="w-4 h-4" />
            Add event cover
          </span>
        </label>
      </div>
    </div>
  );
}
