"use client";

import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function DynamicImage({
  src,
  containerClass = "",
  alt,
  objectFit = "cover",
  imageClass = "",
  priority = false,
  unoptimized = false,
}: {
  src: string;
  containerClass?: string;
  alt?: string;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down" | string;
  imageClass?: string;
  priority?: boolean;
  unoptimized?: boolean;
}) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative w-full h-full ${containerClass}`}>
      {(!isImageLoaded || hasError) && (
        <div
          className={`absolute inset-0 bg-[#1f1f1f] ${
            !hasError ? "animate-pulse" : ""
          } rounded-[30px] z-0`}
        />
      )}

      {src && !hasError && (
        <Image
          src={src}
          alt={alt || "Dynamic Image"}
          fill
          objectFit={objectFit}
          className={imageClass}
          onLoad={() => setIsImageLoaded(true)}
          onError={() => setHasError(true)}
          unoptimized={unoptimized}
          priority={priority}
        />
      )}
    </div>
  );
}
