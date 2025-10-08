"use client";

import { useRef } from "react";
import Image from "next/image";

interface BrandListProps {
  containerClass?: string;
  brands: Array<string>;
  brandHeightClass?: string;
  brandWidthClass?: string;
  speed?: string;
}

const BrandList: React.FC<BrandListProps> = ({ containerClass, brands, brandHeightClass, brandWidthClass, speed = "normal" }) => {
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
        className={`flex whitespace-nowrap ${speed === "slow" ? "animate-marquee-slow" : "animate-marquee"} w-max`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {[...brands, ...brands].map((logo, index) => (
          <div
            className={`relative ${ brandHeightClass ? brandHeightClass : "h-[1.3em] "} ${ brandWidthClass ? brandWidthClass : "w-[10em]"}  mx-6 flex-shrink-0`}
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

export default BrandList;
