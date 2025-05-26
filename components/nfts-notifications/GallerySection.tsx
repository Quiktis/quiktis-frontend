// components/nfts-notifications/GallerySection.tsx
"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";

export default function GallerySection() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  const gallery = [
    { src: "/igo.png", alt: "IGO event" },
    { src: "/party1.png", alt: "Party scene 1" },
    { src: "/camera.png", alt: "Camera recording crowd" },
    {
      src: "/happy-birthday-party-toasting-champagne.png",
      alt: "Birthday party toast",
    },
    { src: "/party.jpg", alt: "People celebrating party" },
    // Duplicate items for seamless loop
    { src: "/igo.png", alt: "IGO event" },
    { src: "/party1.png", alt: "Party scene 1" },
    { src: "/camera.png", alt: "Camera recording crowd" },
    {
      src: "/happy-birthday-party-toasting-champagne.png",
      alt: "Birthday party toast",
    },
    { src: "/party.jpg", alt: "People celebrating party" },
  ];

  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;

    const speed = 0.5; // Moderate speed
    const containerWidth = el.scrollWidth / 2; // Width of the non-duplicated content
    let pos = containerWidth; // Start from the end for right-to-left

    const animate = () => {
      pos -= speed; // Move left
      if (pos <= 0) {
        pos = containerWidth; // Reset to the end seamlessly
      }
      el.style.transform = `translateX(-${containerWidth - pos}px)`; // Adjust transform for right-to-left
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      // Cleanup if needed, e.g., cancelAnimationFrame
    };
  }, [gallery]); // Re-run effect if gallery items change, though not strictly necessary here

  return (
    <div className="w-full overflow-hidden mb-8">
      <div
        ref={marqueeRef}
        className="flex whitespace-nowrap"
        style={{ willChange: "transform" }}
      >
        {gallery.map((img, i) => (
          <div
            key={`img-${i}`}
            className="overflow-hidden rounded relative min-w-[200px] h-[200px] mx-2"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
