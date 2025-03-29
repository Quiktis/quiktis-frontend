"use client";

import { useRef } from "react";
import Image from "next/image";

const brands: string[] = [
  "/brand1.svg",
  "/brand3.svg",
  "/brand4.svg",
  "/brand5.svg",
  "/brand6.svg",
  "/brand1.svg",
  "/brand5.svg",
];

interface TrustedBrandsProps {
  containerClass?: string;
}

const TrustedBrands: React.FC<TrustedBrandsProps> = ({ containerClass }) => {
  const marqueeRef = useRef<HTMLDivElement | null>(null);

  const handleMouseEnter = () => {
    if (marqueeRef.current) {
      marqueeRef.current.style.animationPlayState = "paused";
    }
  };

  const handleMouseLeave = () => {
    if (marqueeRef.current) {
      marqueeRef.current.style.animationPlayState = "running";
    }
  };

  return (
    <div className={`overflow-hidden py-6 relative w-full ${containerClass}`}>
      <div
        ref={marqueeRef}
        className="flex whitespace-nowrap animate-marquee w-max"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {[...brands, ...brands].map((logo, index) => (
          <div
            className="relative w-[10em] h-[1.3em] mx-6 flex-shrink-0"
            key={index}
          >
            <Image
              unoptimized
              src={logo}
              alt={`Brand ${index + 1}`}
              fill={true}
              className="hover:scale-105 transition-transform duration-300 w-full h-full object-contain"
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedBrands;
