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
        -z-10 radial-gradient-blue max-sm:hidden max-md:hidden block blur-3xl opacity-30 

        md:top-[-15em]
        md:w-[50em] md:h-[30em]
      "></div>

    {/* Left-aligned*/}
    <h1 className="max-sm:text-2xl max-md:text-3xl text-6xl md:text-7xl font-bold mb-4 text-white text-left">
      {title}
    </h1>

    {/* Left-aligned paragraph*/}
    {subtitle && (
      <p className="text-gray-300 text-base text-left w-full">{subtitle}</p>
    )}
  </div>
);

export default SectionHeader;
