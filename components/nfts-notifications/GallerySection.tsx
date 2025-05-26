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

    const speed = 0.5; 
    const containerWidth = el.scrollWidth / 2; 
    let pos = containerWidth; 

    const animate = () => {
      pos -= speed; 
      if (pos <= 0) {
        pos = containerWidth;
      }
      el.style.transform = `translateX(-${containerWidth - pos}px)`; 
      requestAnimationFrame(animate);
    };

    animate();

    return () => {

    };
  }, [gallery]); 

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
