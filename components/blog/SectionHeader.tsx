// components/SectionHeader.tsx
import React from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => (
  <div className="relative w-full mb-12 overflow-hidden md:overflow-visible">
    {/* Blue gradient background */}
    <div
      className="
        absolute
        left-1/2 top-[-30vw]
        w-[100vw] h-[60vw]
        transform -translate-x-1/2
        -z-10 radial-gradient-blue blur-3xl opacity-30 

        md:top-[-15em]
        md:w-[50em] md:h-[30em]
      "></div>

    {/* Left-aligned title, larger size */}
    <h1 className="text-6xl md:text-7xl font-bold mb-4 text-white text-left">
      {title}
    </h1>

    {/* Left-aligned paragraph, full width on all screen sizes */}
    {subtitle && (
      <p className="text-gray-300 text-base text-left w-full">{subtitle}</p>
    )}
  </div>
);

export default SectionHeader;
