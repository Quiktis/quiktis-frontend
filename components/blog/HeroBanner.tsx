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
      className={`
        relative flex items-center justify-center text-center
        -mt-36
        sm:-mt-24
        max-[375px]:-mt-24
        md:mt-0
        h-[30vh] sm:h-[40vh] md:h-[60vh] lg:h-[80vh]
        overflow-hidden bg-cover bg-center
      `}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

      <div
        className={`
          relative px-4 max-w-3xl mx-auto text-center z-10
          pt-8
          sm:pt-12
          md:pt-24
          max-[375px]:pt-16
        `}
      >
        <h1
          className={`
            text-2xl
            sm:text-3xl
            md:text-5xl lg:text-6xl
            max-[375px]:text-xl

            font-bold text-white leading-tight
          `}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className={`
              mt-2
              text-sm
              sm:text-base
              md:text-xl
              max-[375px]:text-xs

              text-white
            `}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default HeroBanner;
