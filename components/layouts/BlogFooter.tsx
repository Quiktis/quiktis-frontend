"use client";

import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";
import Link from "next/link";
import BlogNewsletter from "@/components/BlogNewsletter";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faYoutube,
  faLinkedin,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function BlogFooter(): JSX.Element {
  const pathname = usePathname();

  const excludeFooterPaths = [
    "/login",
    "/register",
    "/auth/google/callback",
    "/new-landing-page",
    "/",
   
  ];
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
    "/my-events",
    "/about",
    "/blogview",
    "/404",
    "/checkout",
    "/stats",
    "/nfts",
    "/nfts-notification",
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
    "/auth/google/callback",
     "/terms"
  ];
  const extraPaddingPaths = ["/blog"];

  const year = new Date().getFullYear();

  if (excludeFooterPaths.includes(pathname)) return <></>;


  return (
    <>
      {!hiddenPaths.includes(pathname) && (
        <section className="relative w-full mb-[5em]">
          {/*<BlogNewsletter />*/}
        </section>
      )}

      <footer
        className={`relative mt-8 text-white w-full ${
          extraPaddingPaths.includes(pathname)
            ? "px-32 max-md:px-4"
            : "max-sm:px-6 max-md:px-8 px-12 py-8"
        }`}>
        {/* three columns */}
        <div className="grid place-items-center md:flex flex-wrap max-md:flex-wrap md:flex-nowrap  gap-4 w-full">
          {/* Column 1 */}
          <div className="w-full sm:w-1/2 md:w-1/5 flex justify-center md:justify-start">
            <Logo />
          </div>

          {/* Column 2 */}
          <div className="w-full sm:w-1/2 max-ms:w-full md:w-2/5 flex flex-col">
            <div className="flex flex-wrap gap-4 md:gap-12 justify-center md:justify-start">
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
                <Link href="/faq" className="hover:text-[#FF4D2A]">
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
          </div>

          {/* Column 3 */}
          <div className="w-full sm:w-1/2 md:w-1/3 flex flex-col text-center md:text-left">
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <div className="flex flex-col gap-4">
              <div className="flex flex-row items-center justify-center md:justify-start gap-4">
                <Link
                  href="https://instagram.com/quiktis"
                  target="_blank"
                  rel="noopener"
                  className="hover:text-[#FF4D2A] flex items-center gap-2">
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                </Link>
                <Link
                  href="https://linkedin.com/company/quiktis"
                  target="_blank"
                  rel="noopener"
                  className="hover:text-[#FF4D2A] flex items-center gap-2">
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
                </Link>
                <Link
                  href="https://x.com/QuiktisTik"
                  target="_blank"
                  rel="noopener"
                  className="hover:text-[#FF4D2A] flex items-center gap-2">
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                </Link>
                <Link
                  href="https://discord.gg/TmavF8QCu5"
                  target="_blank"
                  rel="noopener"
                  className="hover:text-[#FF4D2A] flex items-center gap-2">
                  <FontAwesomeIcon icon={faDiscord} size="lg" />
                </Link>
                <Link
                  href="https://www.facebook.com/share/1BnfVxgh29/"
                  target="_blank"
                  rel="noopener"
                  className="hover:text-[#FF4D2A] flex items-center gap-2">
                  <FontAwesomeIcon icon={faFacebook} size="lg" />
                </Link>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Link
                  href="mailto:support@quiktis.com"
                  className="hover:text-[#FF4D2A] flex items-center gap-2">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span>support@quiktis.com</span>
                </Link>
              </div>

              {/* <div className="flex md:hidden items-center justify-center mt-4">
                <div
                  className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl px-4 py-1 shadow-lg text-white text-sm font-semibold whitespace-nowrap transition-all duration-200 hover:backdrop-blur-xl"
                  style={{ WebkitBackdropFilter: "blur(12px)" }}
                >
                  Powered By BlockChain
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* <div className="hidden md:flex justify-center mt-6">
          <div
            className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl px-4 py-1 shadow-lg text-white text-sm font-semibold whitespace-nowrap transition-all duration-200 hover:backdrop-blur-xl"
            style={{ WebkitBackdropFilter: "blur(12px)" }}>
            Powered By BlockChain
          </div>
        </div> */}

        <div className="flex max-sm:justify-between justify-center items-center max-md:space-x-1 space-x-2 mt-[3em] text-base">
          <Link
            href="/legal/terms"
            className="hover:text-[#FF4D2A] transition-colors max-md:text-[0.82em] w-fit">
            Terms of Service
          </Link>
          <span className="text-white/50">|</span>
          <Link
            href="/legal/privacy-policy"
            className="hover:text-[#FF4D2A] transition-colors mx-auto w-fit max-md:text-[0.82em]">
            Privacy Policy
          </Link>
          <span className="text-white/50 block">|</span>
          <Link
            href="/legal/cookies-policy"
            className="hover:text-[#FF4D2A] transition-colors mr-0 ml-auto w-fit max-md:text-[0.82em]">
            Cookies Policy
          </Link>
        </div>

        {/* Radial gradient background */}
        <div className="flex gap-1 mx-auto mt-10 max-md:mt-5 w-fit">
          <p className="text-gray-300 max-md:text-[0.82em]">&copy; {year} Quiktis Limited</p>
          <p className="text-gray-300 max-md:text-[0.82em]">All rights reserved</p>
        </div>

        {/* Radial gradient */}
        <div
          className="absolute pointer-events-none w-[70%] sm:w-[75%] h-[26em]
                     top-[-3em] left-0 md:right-0 md:left-auto
                     radial-gradient-purple blur-3xl opacity-50"
        />
      </footer>
    </>
  );
}
