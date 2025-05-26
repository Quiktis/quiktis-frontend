// components/nft/HeroSection.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import NftLogoMarquee from "./NftLogoMarquee";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  buttonText: string;
  backgroundImage?: string;
  nftImages: string[];
  logos: string[];
}

const positions = [
  { right: "right-10 md:right-20", top: "top-4", bg: "bg-blue-200", z: "z-10" },
  { right: "right-6 md:right-12", top: "top-12", bg: "bg-gray-200", z: "z-20" },
  { right: "right-2 md:right-4", top: "top-20", bg: "bg-teal-400", z: "z-30" },
];

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  buttonText,
  backgroundImage,
  nftImages,
  logos,
}) => {
  // Add state for search query
  const [query, setQuery] = useState("");

  // Format title into three lines
  const formatTitle = (title: string) => {
    const words = title.split(" ");
    return (
      <>
        <div>Find Your</div>
        <div>
          <span className="text-[#FF7E5F]">Favorite NFT</span>
        </div>
        <div>Gallery</div>
      </>
    );
  };

  // Handle search function
  const handleSearch = () => {
    console.log("Searching for:", query);
    // You can add navigation to search page with the query as a parameter
    // Example: router.push(`/search?q=${query}`);
  };

  return (
    <section
      className="flex flex-col justify-between w-full overflow-hidden text-white mt-0 pt-0"
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : {}
      }>
      {/* MAIN HERO */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between py-6 md:py-4">
        {/* Text Column */}
        <div className="w-full md:w-1/2 space-y-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            {formatTitle(title)}
          </h1>
          {subtitle && (
            <p className="text-base md:text-lg text-gray-300">{subtitle}</p>
          )}
          <Link href="/checkout" className="inline-block">
            <button className="mt-4 bg-[#FF4D2A] text-white font-medium py-1.5 md:py-2.5 px-5 md:px-7 rounded-[10px] hover:opacity-90 transition cursor-pointer text-sm md:text-base shadow-[0_0_10px_rgba(255,77,42,0.5)] hover:shadow-[0_0_15px_rgba(255,77,42,0.7)] transition-all duration-300">
              {buttonText}
            </button>
          </Link>
          
          {/* Search Component */}
          <div className="flex items-center gap-2 mt-4">
            <input
              type="text"
              placeholder="Input wallet address"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="
                flex-1 
                bg-white/10 
                backdrop-blur-md 
                border 
                border-[#FF4D2A] 
                text-white 
                placeholder:text-gray-300 
                px-2.5 py-1.5 
                sm:px-3.5 sm:py-2.5 
                text-sm
                rounded-md 
                outline-none
                max-w-[280px]
              "
            />

            <button
              onClick={handleSearch}
              className="
                bg-white/10 
                backdrop-blur-md 
                border 
                border-[#FF4D2A] 
                text-white 
                px-2.5 py-1.5 
                sm:px-3.5 sm:py-2.5 
                rounded-md 
                hover:bg-[#FF4D2A]/20 
                transition-colors 
                duration-200
              "
              aria-label="Search"
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div>

        {/* Stacked NFT Images - Hidden on mobile, visible on md and larger screens */}
        <div className="hidden md:block w-full md:w-1/2 relative h-[220px] md:h-[280px] lg:h-[400px] mt-8 md:mt-0">
          {nftImages.slice(0, 3).map((src, idx) => (
            <div
              key={idx}
              className={`absolute ${positions[idx].right} ${positions[idx].top} w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 ${positions[idx].bg} rounded-3xl shadow-lg ${positions[idx].z}`}>
              <Image
                src={src}
                alt={`NFT ${idx + 1}`}
                fill
                className="object-cover rounded-3xl"
              />
            </div>
          ))}
        </div>
      </div>

      {/* MARQUEE FOOTER */}
      <footer className="w-full px-4 mt-2">
        <NftLogoMarquee logos={logos} />
      </footer>
    </section>
  );
};

export default HeroSection;
// Add a className prop to control spacing
<section className="pt-4 pb-8">
  {" "}
  {/* Reduce top padding */}
  {/* Hero content */}
</section>;
