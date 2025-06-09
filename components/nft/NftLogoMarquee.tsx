// components/nft/NftLogoMarquee.tsx
"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";

interface NftLogoMarqueeProps {
  logos: string[];
}

const NftLogoMarquee: React.FC<NftLogoMarqueeProps> = ({ logos }) => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  // Prepare items with name and src, duplicated for seamless loop
  const items = [...logos, ...logos].map((src) => {
    // Extract name from path and format it nicely
    let name = src.split("/").pop()?.split(".")[0] || "";
    
    // Determine if this is a logoipsum image
    const isLogoIpsum = name.toLowerCase().includes("logoipsum");
    
    // Capitalize first letter and format specific names
    if (name.toLowerCase() === "metamask") {
      name = "MetaMask";
    } else if (name.toLowerCase() === "walletconnect") {
      name = "Wallet Connect";
    } else if (name.toLowerCase() === "coinbase") {
      name = "Coinbase";
    } else if (isLogoIpsum) {
      name = ""; // Empty name for logoipsum images
    }
    
    return { src, name, isLogoIpsum };
  });

  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;
    let pos = 0;
    const speed = 1;
    const resetAt = el.scrollWidth / 2;

    const loop = () => {
      pos -= speed;
      if (Math.abs(pos) >= resetAt) pos = 0;
      el.style.transform = `translateX(${pos}px)`;
      requestAnimationFrame(loop);
    };
    loop();
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <div
        ref={marqueeRef}
        className="flex items-center whitespace-nowrap py-3"
        style={{ willChange: "transform" }}>
        {items.map((logo, idx) => (
          <div key={idx} className="flex flex-shrink-0 items-center mx-6">
            <Image 
              src={logo.src} 
              alt={logo.name || "Logo"} 
              width={logo.isLogoIpsum ? 100 : 40} 
              height={logo.isLogoIpsum ? 100 : 40} 
              className="object-contain"
            />
            {logo.name && (
              <span className="ml-2 text-gray-400 text-sm font-medium">
                {logo.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NftLogoMarquee;
