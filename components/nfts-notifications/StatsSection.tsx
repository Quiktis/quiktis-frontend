// components/nfts-notifications/StatsSection.tsx
"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";

export default function StatsSection() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  
  // Items to display in the marquee
  const items: ("stat" | { src: string; alt: string })[] = [
    { src: "/ladies.png", alt: "Ladies toasting" },
    "stat",
    { src: "/dance1.png", alt: "Dancer at party" },
    { src: "/africa.png", alt: "Group of friends" },
    // Duplicate items for seamless loop
    { src: "/ladies.png", alt: "Ladies toasting" },
    "stat",
    { src: "/dance1.png", alt: "Dancer at party" },
    { src: "/africa.png", alt: "Group of friends" },
  ];

  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;
    
    let pos = 0;
    const speed = 0.5; // Moderate speed - not too fast, not too slow
    const containerWidth = el.scrollWidth / 2;
    
    const animate = () => {
      pos += speed; // Move Right
      if (pos >= containerWidth) { // Check if content has moved completely past the right edge
        pos = 0; // Reset to the beginning seamlessly
      }
      el.style.transform = `translateX(-${pos}px)`; // Standard transform for left-to-right
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <div className="w-full overflow-hidden mb-8">
      <div 
        ref={marqueeRef}
        className="flex whitespace-nowrap"
        style={{ willChange: "transform" }}
      >
        {items.map((item, idx) =>
          item === "stat" ? (
            <div
              key={`stat-${idx}`}
              className="bg-[#FF4D2A] rounded flex flex-col items-center justify-center text-center p-6 min-w-[200px] h-[200px] mx-2">
              <span className="text-sm">OVER</span>
              <span className="text-5xl font-bold my-2">30K</span>
              <span className="text-sm">EVENT TICKETS SOLD</span>
            </div>
          ) : (
            <div key={`img-${idx}`} className="overflow-hidden rounded relative min-w-[200px] h-[200px] mx-2">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
              />
            </div>
          )
        )}
      </div>
    </div>
  );
}
