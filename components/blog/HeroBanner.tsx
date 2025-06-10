<<<<<<< HEAD
// app/components/blog/HeroBanner.tsx
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
        /* Base mobile pull-up */
        -mt-36
        /* Small phones landscape → slightly less pull, keeps text below nav */
        sm:-mt-24
        /* Extra-small phones (≤375px) override to minimal pull */
        max-[375px]:-mt-24

        /* Reset on tablet+ */
        md:mt-0

        h-[30vh] sm:h-[40vh] md:h-[60vh] lg:h-[80vh]
        overflow-hidden bg-cover bg-center
      `}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Dark overlay to reduce brightness */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

      <div
        className={`
          relative px-4 max-w-3xl mx-auto text-center z-10

          /* Base padding */
          pt-8
          /* Small phones */
          sm:pt-12
          /* Tablet+ */
          md:pt-24

          /* Extra-small phones (≤375px): push down more so text clears nav */
          max-[375px]:pt-16
        `}
      >
        <h1
          className={`
            /* Base mobile */
            text-2xl
            /* Small phones */
            sm:text-3xl
            /* Tablet+ */
            md:text-5xl lg:text-6xl

            /* Extra-small phones: shrink title */
            max-[375px]:text-xl

            font-bold text-white leading-tight
          `}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className={`
              /* Base spacing */
              mt-2

              /* Base mobile */
              text-sm
              /* Small phones */
              sm:text-base
              /* Tablet+ */
              md:text-xl

              /* Extra-small phones: shrink subtitle */
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
=======
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
>>>>>>> 1c28eb03d8b868877cdffd66f40c2c7f3ac069fc
