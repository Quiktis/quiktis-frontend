import React from "react";
import Image from "next/image";
import Link from "next/link";

interface FeatureBlockProps {
  imageSrc: string;
  imageAlt?: string;
  dateLabel: string;
  heading: string;
  copy: string;
  readMoreHref: string;
  reverse?: boolean;
}

export default function FeatureBlock({
  imageSrc,
  imageAlt = "Feature image",
  dateLabel,
  heading,
  copy,
  readMoreHref,
  reverse = false,
}: FeatureBlockProps) {
  const flexDir = reverse ? "md:flex-row-reverse" : "md:flex-row";

  return (
    <section className="w-full">
      <div className={`flex flex-col ${flexDir} w-full`}>
        <div className="w-full md:w-[55%]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={800}
            height={600}
            className="object-cover w-full h-[320px]"
          />
        </div>
        <div className="w-full md:w-[45%] flex flex-col justify-center px-4">
          <span className="text-xs uppercase text-gray-400 mb-1">
            {dateLabel}
          </span>
          <h2 className="text-base md:text-lg font-medium text-white leading-snug mb-2">
            {heading}
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed mb-0">
            {copy}{" "}
            <Link
              href={readMoreHref}
              className="text-blue-400 font-medium hover:no-underline">
              read more
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
