"use client";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import Link from "next/link";
import NewsLetter2 from "./NewsLetter2";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  const pathname = usePathname();
  const excludeFooterPaths = ["/login", "/register"];
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
  ];
  if (excludeFooterPaths.includes(pathname)) return null;

  return (
    <>
      {!hiddenPaths.includes(pathname) && (
        <section className="relative w-full mb-[5em]">
          <div className="absolute left-0 right-0 h-[40em] sm:h-[50em] md:h-[80em] top-[-22em] translate-x-0 md:translate-x-[35vw] radial-gradient-blue blur-[18px] md:blur-3xl opacity-50"></div>
          <NewsLetter2 
  containerClass="relative w-full max-w-[85%] md:max-w-4xl mx-auto px-0 md:px-6 sm:px-10 md:py-20 mt-[5em]" 
/>

        </section>
      )}
      <footer className="relative mt-8 text-white max-md:w-full w-[80%] mx-auto px-6 sm:px-8 md:px-12 py-8">
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
              <Link href="/my-ticket" className="hover:text-[#FF4D2A]">
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
              <Link href="/event-viewing" className="hover:text-[#FF4D2A]">
                Get Tickets
              </Link>
              <Link href="/faq" className="hover:text-[#FF4D2A]">
                FAQs
              </Link>
              <Link href="/search" className="hover:text-[#FF4D2A]">
                Genres
              </Link>
              <Link href="/history" className="hover:text-[#FF4D2A]">
                News
              </Link>
            </div>
          </div>

          {/* Column 3 */}
          <div className="md:w-1/3 flex flex-col text-center md:text-left">
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <div className="flex flex-col gap-4">
              <div className="flex flex-row items-center justify-center md:justify-start gap-4">
                <Link
                  href="https://instagram.com/quiktis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FF4D2A] flex items-center gap-2">
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                </Link>
                <Link
                  href="https://linkedin.com/company/quiktis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FF4D2A] flex items-center gap-2">
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
                </Link>
                <Link
                  href="https://x.com/QuiktisTik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FF4D2A] flex items-center gap-2">
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
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
              <div className="flex items-center justify-center md:justify-start gap-2">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <span>Lagos, Nigeria</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute pointer-events-none w-[70%] sm:w-[75%] h-[26em] top-[-3em] left-0 md:right-0 md:left-auto radial-gradient-purple blur-3xl opacity-50"></div>
      </footer>
    </>
  );
}
