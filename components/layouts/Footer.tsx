"use client";
import { usePathname } from "next/navigation";
import Logo from "../Logo";
import Link from "next/link";
import NewsLetter from "../NewsLetter";

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
  const excludeFooterPaths = ["/login", "/register", "/auth/google/callback"];
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
    "/auth/google/callback"
  ];
  if (excludeFooterPaths.includes(pathname)) return null;

  return (
    <>
      {!hiddenPaths.includes(pathname) && <NewsLetter />}
      <footer className="mt-8 text-white w-full px-6 sm:px-8 md:px-12 py-8">
        <div className="flex flex-col md:flex-row md:justify-between gap-8 w-full">
          {/* Column 1 */}
          <div className="flex-shrink-0 md:w-1/5 flex justify-center md:justify-start">
            <Logo />
          </div>

          {/* Column 2 */}
          <div className="md:w-2/5 flex flex-wrap gap-12 justify-center md:justify-start">
            <div className="flex flex-col space-y-2 text-center md:text-left">
              <Link href="/" className="hover:text-[#FF4D2A]">
                Home
              </Link>
              <Link href="/history" className="hover:text-[#FF4D2A]">
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
              <Link href="/my-tickets" className="hover:text-[#FF4D2A]">
                News
              </Link>
            </div>
          </div>

          {/* Column 3 */}
          <div className="md:w-1/3 flex flex-col text-center md:text-left">
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4">
                <Link
                  href="https://instagram.com/quiktis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FF4D2A] flex items-center gap-2">
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                  <span>@Quiktis</span>
                </Link>
                <Link
                  href="https://linkedin.com/company/quiktis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FF4D2A] flex items-center gap-2">
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
                  <span>@Quiktis</span>
                </Link>
                <Link
                  href="https://twitter.com/quiktis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FF4D2A] flex items-center gap-2">
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                  <span>@Quiktis</span>
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
      </footer>
    </>
  );
}
