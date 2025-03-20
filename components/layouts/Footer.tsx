"use client"
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
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  const pathname = usePathname();

  const excludeFooterPaths = ["/login", "/register"];
  const hiddenPaths = ["/event-viewing", "/dashboard", "/history"];
  if (excludeFooterPaths.includes(pathname)) return null;

  return (
    <>
    {!hiddenPaths.includes(pathname) && <NewsLetter/>}
    <footer className="mt-8 text-white w-full px-12 py-8">
      
      <div className="flex flex-col md:flex-row md:justify-between gap-8 w-full">
        {/* Column 1*/}
        <div className="flex-shrink-0 md:w-1/5">
          <Logo />
        </div>

        {/* Column 2*/}
        <div className="md:w-2/5 flex flex-wrap gap-16 justify-center md:ml-[-20px]">
          <div className="flex flex-col space-y-2">
            <Link href="/" className="hover:text-[#FF4D2A]">
              Home
            </Link>
            <Link href="/my-tickets" className="hover:text-[#FF4D2A]">
              Pages
            </Link>
            <Link href="/events" className="hover:text-[#FF4D2A]">
              Event
            </Link>
            <Link href="/help" className="hover:text-[#FF4D2A]">
              Help
            </Link>
          </div>
          <div className="flex flex-col space-y-2">
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

        {/* Column 3*/}
        <div className="md:w-1/3 flex flex-col">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>

          <div className="flex flex-wrap items-center gap-4 mb-4">
            <div className="flex items-center gap-2">
              <Link
                href="https://facebook.com/quiktis"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FF4D2A]">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </Link>
              <span>@Quiktis</span>
            </div>
            <div className="flex items-center gap-2">
              <Link
                href="https://instagram.com/quiktis"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FF4D2A]">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </Link>
              <span>@Quiktis</span>
            </div>
            <div className="flex items-center gap-2">
              <Link
                href="https://linkedin.com/company/quiktis"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FF4D2A]">
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </Link>
              <span>@Quiktis</span>
            </div>
            <div className="flex items-center gap-2">
              <Link
                href="https://twitter.com/quiktis"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FF4D2A]">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </Link>
              <span>@Quiktis</span>
            </div>
            <div className="flex items-center gap-2">
              <Link
                href="https://youtube.com/quiktis"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FF4D2A]">
                <FontAwesomeIcon icon={faYoutube} size="lg" />
              </Link>
              <span>@Quiktis</span>
            </div>
          </div>

          <ul className="flex flex-col gap-y-2">
            <li className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faEnvelope} />
              <a
                href="mailto:support@quiktis.com"
                className="hover:text-[#FF4D2A]">
                support@quiktis.com
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span>01, Location Street, Location State, Country</span>
            </li>
            <li className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faPhone} />
              <span>+234 123 4567 890</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
    </>
  );
}
