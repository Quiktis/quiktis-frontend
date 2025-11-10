import React from "react";
import SafeImage from "@/components/SafeImage";

interface EventThumbnailProps {
  src: string;
  alt: string;
  variant: "mobile" | "desktop";
}

export default function EventThumbnail({
  src,
  alt,
  variant,
}: EventThumbnailProps) {
  if (variant === "mobile") {
    return (
      <div className="flex-shrink-0">
        <div className="w-[86px] h-[86px] rounded-md overflow-hidden">
          <SafeImage
            src={src}
            alt={alt}
            width={86}
            height={86}
            className="w-full h-full object-cover"
            unoptimized
          />
        </div>
      </div>
    );
  }

  // Desktop variant
  return (
    <div className="flex-shrink-0 -mt-3 -mr-3">
      <div className="overflow-hidden w-[156px] h-[156px] rounded-[11.82px]">
        <SafeImage
          src={src}
          alt={alt}
          width={156}
          height={156}
          className="w-full h-full object-cover"
          unoptimized
        />
      </div>
    </div>
  );
}
