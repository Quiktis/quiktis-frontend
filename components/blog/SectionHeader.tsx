import React from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => (
  <div className="relative max-w-4xl mb-12 overflow-hidden md:overflow-visible">
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
    <h1 className="text-5xl font-bold mb-4 text-white">{title}</h1>
    {subtitle && <p className="text-gray-300 text-lg">{subtitle}</p>}
  </div>
);

export default SectionHeader;
