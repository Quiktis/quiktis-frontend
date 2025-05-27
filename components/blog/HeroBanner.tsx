import React from "react";

interface HeroBannerProps {
  backgroundImage: string;
  title: string;
  subtitle?: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({
  backgroundImage,
  title,
  subtitle,
}) => {
  return (
    <section
      className="relative flex items-center justify-center text-center h-[60vh] md:h-[80vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative px-4 max-w-3xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-sm sm:text-base md:text-lg text-white/90">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default HeroBanner;
