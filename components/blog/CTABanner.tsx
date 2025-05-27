import React from "react";
import Link from "next/link";

interface CTABannerProps {
  primaryAction: { text: string; href: string };
  secondaryAction: { text: string; href: string };
}

const CTABanner: React.FC<CTABannerProps> = ({
  primaryAction,
  secondaryAction,
}) => (
  <section className="bg-[#7E1500] text-white py-16 px-4 md:px-8 lg:px-16 text-center rounded-[15px]">
    <div className="mx-auto" style={{ width: "80%" }}>
      <h2 className="font-bold mb-6">
        <span className="block text-xl md:text-2xl lg:text-3xl">
          Unlock the Potential of Your Campaigns with Our
        </span>
        <span className="block text-lg md:text-xl lg:text-2xl">
          Intuitive Software
        </span>
      </h2>
      <p className="text-[0.75rem] md:text-[0.875rem] mb-8 opacity-90">
        We invite you to embark on this exciting email marketing journey with
        us. At emailgigga, we believe in a collaborative approach, where our
        clients become out partners. Together, we can shape a future where
        mailing possibilities are limitless.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href={primaryAction.href}
          className="bg-white text-[#7E1500] px-6 py-2 rounded-[10px] hover:bg-gray-100 transition-colors font-medium">
          {primaryAction.text}
        </Link>
        <Link
          href={secondaryAction.href}
          className="border border-white text-white px-6 py-2 rounded-[10px] hover:bg-white/10 transition-colors font-medium">
          {secondaryAction.text}
        </Link>
      </div>
    </div>
  </section>
);

export default CTABanner;
