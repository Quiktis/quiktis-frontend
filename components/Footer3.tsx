"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useUser } from "@/app/context/UserContext";

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

export default function Footer3() {

  const { user, logout } = useUser();
  return (
    <footer className=" max-sm:text-[0.85em] text-[0.94em] mb-[2.5em] mt-auto">
      <hr className="w-[85%] mx-auto border-0 border-t border-gray-800"></hr>
      <section className="max-md:flex-col gap-6 max-md:justify-center max-md:text-center max-md:w-fit w-[85%] mx-auto flex justify-between mt-6 text-[#919499]">
        <div className="flex gap-5">
          <Link href={"/"} className="flex gap-[0.8px]">
            <Image
              src="/New logo.png"
              alt="Quiktis Logo"
              width={21}
              height={21}
              priority
              className="cursor-pointer object-contain bg-cover"
              unoptimized={true}
            />
            uiktis
          </Link>

          <Link href={"#"}>Discover</Link>
          <Link href={"/pricing"}>Pricing</Link>
          <Link href={"/contact"}>Help</Link>
          {user?.userId && <button onClick={logout}>Logout</button>}
        </div>

        <div className="md:flex gap-4 max-md:w-fit max-md:mx-auto hidden">
          {socials.map((item, index) => (
            <Link target="blank" key={index} href={item.link}>
              <Image
                alt={item.alt}
                src={item.icon}
                height={22}
                width={22}
                className="h-[18px] w-[18px] object-contain"
              />
            </Link>
          ))}
        </div>
      </section>
      <section className="w-[85%] mx-auto flex justify-between mt-5 text-[#919499]">
        <div className="flex gap-5 max-md:w-fit max-md:mx-auto">
          <Link href={"/legal/terms"}>Terms</Link>
          <Link href={"/legal/privacy-policy"}>Privacy</Link>
          <Link href={"/legal/security"}>Security</Link>
          
        </div>
      </section>

      <section className="w-[85%] mx-auto flex justify-between mt-5 text-[#919499]">
        <div className="flex gap-4 max-md:w-fit max-md:mx-auto md:hidden">
          {socials.map((item, index) => (
            <Link target="blank" key={index} href={item.link}>
              <Image
                alt={item.alt}
                src={item.icon}
                height={22}
                width={22}
                className="h-[18px] w-[18px] object-contain"
              />
            </Link>
          ))}
        </div>
      </section>
    </footer>
  );
}
