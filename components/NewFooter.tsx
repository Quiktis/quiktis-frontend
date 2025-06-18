"use client";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import Link from "next/link";
import NewsLetter2 from "./NewsLetter2";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faDiscord,
  faFacebook,
  faTwitter,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const socials = [
  {
    icon: faInstagram,
    link: "https://instagram.com/quiktis",
  },
  {
    icon: faLinkedin,
    link: "https://linkedin.com/company/quiktis", // Add your Discord link here
  },
  {
    icon: faTwitter,
    link: "https://x.com/QuiktisTik", // Add your Discord link here
  },
  {
    icon: faDiscord,
    link: "https://discord.gg/TmavF8QCu5", // Add your Discord link here
  },
  {
    icon: faFacebook,
    link: "https://www.facebook.com/share/1BnfVxgh29/", // Add your Discord link here
  },
];

export default function Footer() {
  const pathname = usePathname();
  const excludeFooterPaths = ["/signin", "/register"];
  const hiddenPaths = [
    "/event-viewing",
    "/faq",
    "/history",
    "/my-tickets",
    "/search",
    "/contact",
    "/event-creator",
    "/notifications",
    "/reviews",
    "/announcement",
    "/announcement",
    "/create-events",
    "/my-events",
    "/blog",
    "/blogview",
    "/nfts",
    "/nfts-notification",
    "/about",
    "/checkout",
    "/stats",
    "/payment-success",
    "/payment-failure",
    "/live-chat",
    "/manager-event-viewing",
    "/event-viewing-square",
    "/manage-event-viewing",
    "/paid-event-viewing",
    "/tickets",
    "/concert-ticket",
    "/attendees",
    "/write-review",
    "/dashboard",
  ];
  if (excludeFooterPaths.includes(pathname)) return null;

  return (
    <>
      {!hiddenPaths.includes(pathname) && (
        <section className="relative w-full mb-[5em]">
          <div className="grid grid-cols-[1fr_1.6fr] w-full absolute h-[70em] top-[-10em]">
            <div></div>
            {/*<div className=" h-full w-full  translate-x-0  radial-gradient-blue blur-[18px] md:blur-3xl opacity-50"></div>*/}
          </div>
          <NewsLetter2 containerClass="relative w-full md:px-[8em] mx-auto px-0 md:px-6 sm:px-10 md:py-20 mt-[5em]" />
        </section>
      )}
      <footer className="z-10 relative mt-8 text-white max-md:w-full w-[80%] mx-auto px-6 sm:px-8 md:px-12 py-8">
        <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-8 w-full">
          {/* Column 1 */}
          <div className="flex-shrink-0 md:w-1/5 flex justify-center md:justify-start">
            <Logo />
          </div>

          {/* Column 2 */}
          <div className="md:w-2/5 flex flex-wrap gap-4 md:gap-12 justify-center md:justify-start">
            <div className="flex flex-col space-y-2 text-center md:text-left">
              <Link href="/" className="hover:text-[#FF4D2A]">
                Home
              </Link>
              <Link href="/my-events" className="hover:text-[#FF4D2A]">
                Pages
              </Link>
              <Link href="/events" className="hover:text-[#FF4D2A]">
                Event
              </Link>
              <Link href="/contact" className="hover:text-[#FF4D2A]">
                Help
              </Link>
            </div>
            <div className="flex flex-col space-y-2 text-center md:text-left">
              <Link href="/checkout" className="hover:text-[#FF4D2A]">
                Get Tickets
              </Link>
              <Link href="/concert-ticket" className="hover:text-[#FF4D2A]">
                FAQs
              </Link>
              <Link href="/nfts" className="hover:text-[#FF4D2A]">
                Genres
              </Link>
              <Link href="/blog" className="hover:text-[#FF4D2A]">
                Blog
              </Link>
            </div>
          </div>

          {/* Column 3 */}
          <div className="md:w-1/3 flex flex-col text-center md:text-left">
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <div className="flex flex-col gap-4">
              <div className="flex flex-row items-center justify-center md:justify-start gap-4">
                {socials.map((item, index) => (
                  <Link
                    href={item.link}
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#FF4D2A] flex items-center gap-2">
                    <FontAwesomeIcon icon={item.icon} size="lg" />
                  </Link>
                ))}
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Link
                  href="mailto:support@quiktis.com"
                  className="hover:text-[#FF4D2A] flex items-center gap-2">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span>support@quiktis.com</span>
                </Link>
              </div>
              {/* Glassmorphism Powered By The BlockChain */}
              <div className="flex items-center justify-center md:justify-start mt-1">
                <div
                  className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl px-4 py-1 shadow-lg text-white text-sm font-semibold whitespace-nowrap cursor-pointer transition-all duration-200 hover:backdrop-blur-xl"
                  style={{ WebkitBackdropFilter: "blur(12px)" }}>
                  Powered By BlockChain
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute pointer-events-none w-[70%] sm:w-[75%] h-[26em] top-[-3em] left-0 md:right-0 md:left-auto radial-gradient-purple blur-3xl opacity-50"></div>
      </footer>
    </>
  );
}
