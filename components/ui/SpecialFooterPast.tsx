"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BsArrowUpSquare } from "react-icons/bs";

const socials = [
  {
    icon: "/discord-new.svg",
    link: "https://discord.gg/TmavF8QCu5",
    alt: "discord",
  },
  {
    icon: "/instagram-new.svg",
    link: "https://instagram.com/quiktis",
    alt: "instagram",
  },
  { icon: "/twitter-new.svg", link: "https://x.com/quiktishq", alt: "twitter" },
  {
    icon: "/linkedin-new.svg",
    link: "https://linkedin.com/company/quiktis",
    alt: "linkedin",
  },
  {
    icon: "/facebook-new.svg",
    link: "https://www.facebook.com/share/1BnfVxgh29/",
    alt: "facebook",
  },
];

export default function SpecialFooterPast() {
  return (
    <footer className="max-sm:text-[0.85em] text-[0.94em] mb-0 mt-auto pt-10 sm:pt-6 md:pt-8 lg:pt-[6rem] xl:pt-[8rem] pb-8">
      <hr className="w-[85%] mx-auto border-0 border-t border-gray-800" />

      {/* Top links + socials */}
      <section className="max-md:flex-col gap-6 max-md:justify-center max-md:text-center max-md:w-fit w-[85%] mx-auto flex justify-between mt-6 text-[#919499]">
        <div className="flex gap-5 items-center">
          <p className="flex gap-[0.8px] items-center">
            <Image
              src="/New logo.png"
              alt="Quiktis Logo"
              width={21}
              height={21}
              priority
              className="cursor-pointer object-contain bg-cover"
              unoptimized={true}
            />
            <span>uiktis</span>
          </p>

          <Link href={"#"}>Discover</Link>
          <Link href={"/pricing"}>Pricing</Link>
          <Link href={"#"}>Help</Link>
        </div>

        {/* Desktop socials */}
        <div className="md:flex gap-4 max-md:w-fit max-md:mx-auto hidden">
          {socials.map((item, i) => (
            <Link
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt={item.alt}
                src={item.icon}
                height={22}
                width={22}
                className="h-[18px] w-[18px] object-contain"
                unoptimized={true}
              />
            </Link>
          ))}
        </div>
      </section>

      {/* Mobile socials */}
      <section className="w-[85%] mx-auto flex justify-between mt-5 text-[#919499]">
        <div className="flex gap-4 max-md:w-fit max-md:mx-auto md:hidden">
          {socials.map((item, i) => (
            <Link
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt={item.alt}
                src={item.icon}
                height={22}
                width={22}
                className="h-[18px] w-[18px] object-contain"
                unoptimized={true}
              />
            </Link>
          ))}
        </div>
      </section>

      {/* Bottom host block */}
      <div className="p-4 flex items-center justify-center max-w-[95%] md:max-w-[85%] mx-auto mt-[1.5em]">
        <div className="flex items-center gap-3 text-center">
          <span
            className="font-inter font-medium text-[24px] leading-[96%]"
            style={{
              background:
                "linear-gradient(90deg, #F57B78 0%, #DF3438 22.12%, #FB2E74 64.87%, #F74FB3 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Host your events with Quiktis
          </span>

          <BsArrowUpSquare
            size={28}
            style={{ color: "#F74FB3", flexShrink: 0 }}
            aria-hidden
          />
        </div>
      </div>
    </footer>
  );
}
