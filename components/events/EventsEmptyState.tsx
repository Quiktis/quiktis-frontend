"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FiPlus } from "react-icons/fi";

const socials = [
  {
    icon: "/discord-new.svg",
    link: "https://discord.gg/TmavF8QCu5",
    alt: "discord-link",
  },
  {
    icon: "/instagram-new.svg",
    link: "https://instagram.com/quiktis",
    alt: "instagram-link",
  },
  {
    icon: "/twitter-new.svg",
    link: "https://x.com/quiktishq",
    alt: "twitter-link",
  },
  {
    icon: "/linkedin-new.svg",
    link: "https://linkedin.com/company/quiktis",
    alt: "linkedin-link",
  },
  {
    icon: "/facebook-new.svg",
    link: "https://www.facebook.com/share/1BnfVxgh29/",
    alt: "facebook-link",
  },
];

export default function EventsEmptyState({
  tab,
  hideFooter = false,
}: {
  tab?: "upcoming" | "past";
  hideFooter?: boolean;
}) {
  const title =
    tab === "past" ? "No Cultural Footprint yet." : "No upcoming Events";
  const subtitle =
    tab === "past"
      ? "Be the spark that starts the next cultural moment.."
      : "No Cultural Footprint yet. Be the spark that starts the next cultural moment..";

  return (
    <div className=" text-white" style={{ backgroundColor: "#131517" }}>
      <div className="w-[95%] lg:w-[90%] xl:w-[85%] mx-auto">
        <div className="flex flex-col items-center justify-center  py-8">
          <div className="mb-10 -mt-20 md:-mt-6">
            <Image
              src="/inactive_events.svg"
              alt="No events illustration"
              width={320}
              height={200}
              className="object-contain"
              unoptimized={true}
            />
          </div>

          <div className="text-center">
            <h2 className="mb-4 font-medium text-[34px] leading-[100%] tracking-[-0.04em] text-[#919499] font-inter">
              {title}
            </h2>
            <p className="mb-8 font-medium text-[22px] leading-[25.07px] tracking-[-0.04em] text-gray-400 max-w-md font-[Poppins]">
              {subtitle}
            </p>
          </div>

          {tab !== "past" && (
            <Link
              href={"/create-event"}
              className="bg-[#252729] hover:bg-[#2A2C30] text-[#919499] px-6 py-3 rounded-xl transition-colors flex items-center gap-3"
              aria-label="Create event"
            >
              <div className="bg-[#2A2C30] rounded-full p-1.5">
                <FiPlus className="h-4 w-4" />
              </div>
              <span className="text-[16px]">Create event</span>
            </Link>
          )}
        </div>
      </div>

      {!hideFooter && (
        <footer className=" max-sm:text-[0.85em] text-[0.94em] mb-0 mt-auto pt-10 sm:pt-6 md:pt-8 lg:pt-[6rem] xl:pt-[8rem] pb-8">
          <hr className="w-[85%] mx-auto border-0 border-t border-gray-800" />
          <section className="max-md:flex-col gap-6 max-md:justify-center max-md:text-center max-md:w-fit w-[85%] mx-auto flex justify-between mt-6 text-[#919499]">
            <div className="flex gap-5">
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

            <div className="md:flex gap-4 max-md:w-fit max-md:mx-auto hidden">
              {socials.map((item, index) => (
                <Link
                  key={index}
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

          <section className="w-[85%] mx-auto flex justify-between mt-5 text-[#919499]">
            <div className="flex gap-4 max-md:w-fit max-md:mx-auto md:hidden">
              {socials.map((item, index) => (
                <Link
                  key={index}
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

          <div className="bg-[#181B1E] rounded-2xl max-md:mt-[2em] p-6 flex flex-col lg:flex-row items-start lg:items-center justify-between max-w-[95%] md:max-w-[85%] mx-auto mt-[2em]">
            <div className="flex max-md:flex-col items-start gap-4 mb-4 lg:mb-0">
              <div className="bg-[#919499] rounded-md p-3 flex-shrink-0 my-auto">
                <Image
                  src="/help-icon.svg"
                  height={20}
                  width={20}
                  alt="icon"
                  unoptimized={true}
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Call for help!</h3>
                <p className="text-gray-400 text-sm">
                  Need any help? Get in touch with our team to expert to support
                  you.
                </p>
              </div>
            </div>
            <Link
              href={"/contact"}
              className=" text-black hover:bg-gray-700 px-6 py-2 rounded-md font-medium transition text-center bg-white hover:text-white max-md:w-[100%]"
            >
              Contact us
            </Link>
          </div>
        </footer>
      )}
    </div>
  );
}
