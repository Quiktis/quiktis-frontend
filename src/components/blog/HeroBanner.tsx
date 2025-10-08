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
        /* Small phones landscape → slightly less pull, keeps text below nav */
        sm:-mt-24
        /* Extra-small phones (≤375px) override to minimal pull */
        max-[375px]:-mt-12
        md:mt-0
        h-[45vh] sm:h-[45vh] md:h-[60vh] lg:h-[80vh]
        overflow-hidden bg-cover bg-center
      `}
      style={{ backgroundImage: `url(${backgroundImage})` }}>
      {/* Dark overlay - reduced opacity on mobile */}
      <div className="absolute inset-0 bg-black md:bg-opacity-60 bg-opacity-30 z-0"></div>

      <div
        className={`
          relative px-4 max-w-3xl mx-auto text-center z-10
          pt-16
          /* Small phones */
          sm:pt-20
          /* Tablet+ */
          md:pt-24
          /* Extra-small phones (≤375px): push down more so text clears nav */
          max-[375px]:pt-24
        `}>
        <h1
          className={`
            /* Base mobile */
            text-lg
            /* Small phones */
            sm:text-2xl
            /* Tablet+ */
            md:text-5xl lg:text-6xl
            /* Extra-small phones: shrink title further */
            max-[375px]:text-base
            /* iPhone 12 Pro and similar devices */
            max-[390px]:text-base

            font-bold text-white leading-tight
          `}>
          {title}
        </h1>
        {subtitle && (
          <p
            className={`
              mt-2
              /* Base mobile */
              text-xs
              /* Small phones */
              sm:text-base
              /* Tablet+ */
              md:text-xl
              /* Extra-small phones: shrink subtitle */
              max-[375px]:text-[0.65rem]
              text-white
            `}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default HeroBanner;
