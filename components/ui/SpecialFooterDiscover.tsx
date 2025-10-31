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
  {
    icon: "/twitter-new.svg",
    link: "https://x.com/quiktishq",
    alt: "twitter",
  },
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

export default function SpecialFooterDiscover() {
  return (
    <footer className="mb-0 mt-auto pb-16" style={{ background: "#131517" }}>
      <div className="md:hidden">
        {/* Call for help section */}
        <div
          className="mx-4 mb-6 p-6 rounded-2xl"
          style={{
            background: "#0D1819",
            border: "none",
          }}
        >
          <div className="flex items-start gap-3 mb-4">
            <div
              className="flex items-center justify-center flex-shrink-0"
              style={{
                width: "27.44px",
                height: "27.44px",
                borderRadius: "3.35px",
                background: "#919499",
              }}
            >
              <Image
                src="/icons/question-mark-discover.svg"
                alt="Help icon"
                width={15}
                height={18}
                className="object-contain"
                unoptimized={true}
              />
            </div>
            <div className="flex-1">
              <h3
                className="mb-1"
                style={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontSize: "16.06px",
                  lineHeight: "121%",
                  letterSpacing: "-5%",
                  color: "#FFFFFF",
                }}
              >
                Call for help!
              </h3>
              <p
                style={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontSize: "10.71px",
                  lineHeight: "121%",
                  letterSpacing: "-5%",
                  color: "#919499",
                }}
              >
                Need any help? Get in touch with our team to expert to support
                you.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="block w-full text-center"
            style={{
              height: "29px",
              borderRadius: "5.65px",
              background: "#FFFFFF",
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: "13.55px",
              lineHeight: "121%",
              letterSpacing: "-5%",
              color: "#000000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Contact us
          </Link>
        </div>

        {/* Horizontal line */}
        <div
          style={{
            height: "0px",
            marginLeft: "42.5px",
            marginRight: "42.5px",
            marginBottom: "24px",
            borderTop: "1px solid #FFFFFF0A",
            opacity: 1,
          }}
        />

        {/* Main footer */}
        <div style={{ paddingLeft: "45px", paddingRight: "16px" }}>
          <div
            className="flex items-center mb-6 flex-wrap"
            style={{ gap: "7px" }}
          >
            <Link
              href="/"
              className="flex items-center gap-1 font-bold"
              style={{
                fontFamily: "Geist",
                fontWeight: 700,
                fontSize: "14px",
                lineHeight: "100%",
                letterSpacing: "-2%",
                color: "#C4C4C4",
              }}
            >
              <Image
                src="/New logo.png"
                alt="Quiktis Logo"
                width={20}
                height={20}
                priority
                className="cursor-pointer object-contain"
                unoptimized={true}
              />
              <span>uiktis</span>
            </Link>

            <Link
              href="/discover"
              style={{
                fontFamily: "Geist",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "100%",
                letterSpacing: "-2%",
                color: "#C4C4C4",
              }}
            >
              Discover
            </Link>
            <Link
              href="/pricing"
              style={{
                fontFamily: "Geist",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "100%",
                letterSpacing: "-2%",
                color: "#C4C4C4",
              }}
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              style={{
                fontFamily: "Geist",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "100%",
                letterSpacing: "-2%",
                color: "#C4C4C4",
              }}
            >
              Help
            </Link>
          </div>

          {/* Social icons mobile */}
          <div className="flex gap-4 mb-6" style={{ paddingLeft: 0 }}>
            {socials.map((item, i) => (
              <Link
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Image
                  alt={item.alt}
                  src={item.icon}
                  height={16}
                  width={16}
                  className="object-contain"
                  unoptimized={true}
                  style={{
                    width: "16px",
                    height: "16px",
                    filter:
                      "brightness(0) saturate(100%) invert(60%) sepia(4%) saturate(317%) hue-rotate(181deg) brightness(95%) contrast(88%)",
                  }}
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Host events CTA  mobile */}
        <div className="w-full flex justify-center pt-2 md:hidden">
          <div className="flex items-center gap-2">
            <span
              className="font-inter font-medium"
              style={{
                fontSize: "16px",
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
              size={20}
              style={{ color: "#F74FB3", flexShrink: 0 }}
              aria-hidden
            />
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:block">
        <hr className="w-[85%] mx-auto border-0 border-t border-gray-800" />

        {/* Top links + socials */}
        <section className="w-[85%] mx-auto flex justify-between mt-6 text-[#919499]">
          <div className="flex gap-5 items-center">
            <Link href="/" className="flex gap-[0.8px] items-center">
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
            </Link>

            <Link href="/discover">Discover</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/contact">Help</Link>
          </div>

          {/* Desktop socials */}
          <div className="flex gap-4">
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

        {/* Host events CTA */}
        <div className="p-4 flex items-center justify-center max-w-[85%] mx-auto mt-[0.6em]">
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
      </div>
    </footer>
  );
}
