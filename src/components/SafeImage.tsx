"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";

interface SafeImageProps extends Omit<ImageProps, "src"> {
  src?: string | null;
  fallback?: string;
}

export default function SafeImage({
  src,
  fallback = "/login-gradient.png", // put your placeholder image
  alt,
  ...props
}: SafeImageProps) {
  const [error, setError] = useState(false);

  return (
    <Image
      {...props}
      src={error || !src ? fallback : src}
      alt={alt}
      onError={() => setError(true)}
      unoptimized
    />
  );
}
