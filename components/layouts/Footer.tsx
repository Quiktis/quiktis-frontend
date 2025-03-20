"use client"
import { usePathname } from "next/navigation";
import Logo from "../Logo";
import Link from "next/link";
import NewsLetter from "../NewsLetter";

const Footer = () => {
  const pathname = usePathname();
  const excludePaths = ['/login', '/register'];
  const hiddenPaths = ["/event-viewing", "/dashboard", "/history"];
  if(excludePaths.includes(pathname)) return null;
  return (
    <footer className=" text-white flex flex-col justify-between h-full gap-20 relative pb-[2em]">
        {!hiddenPaths.includes(pathname) && <NewsLetter/>}
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <Logo />
          </div>

          <div className="mb-6 md:mb-0">
            <div className="grid md:grid-cols-2 w-full gap-y-2">
              <Link href="home" className="hover:text-quikitsOrange">Home</Link>
              <Link href="tickets" className="hover:text-quikitsOrange">Get Tickets</Link>
              <Link href="pages" className="hover:text-quikitsOrange">Pages</Link>
              <Link href="faqs" className="hover:text-quikitsOrange">FAQs</Link>
              <Link href="event" className="hover:text-quikitsOrange">Event</Link>
              <Link href="genres" className="hover:text-quikitsOrange">Genres</Link>
              <Link href="help" className="hover:text-quikitsOrange">Help</Link>
              <Link href="news" className="hover:text-quikitsOrange">News</Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <ul className="flex gap-10">
              <li className="mb-2 flex items-center space-x-2">
                <i className="fab fa-instagram"></i>
                <a href="https://instagram.com/quiktis" target="_blank" rel="noopener noreferrer" className="hover:text-quikitsOrange">@Quikits</a>
              </li>
            </ul>
            <ul>
              <li className="mb-2 flex items-center space-x-2">
                <i className="fas fa-envelope"></i>
                <a href="mailto:support@quikits.com" className="hover:text-quikitsOrange">support@quikits.com</a>
              </li>
              <li className="mb-2 flex items-center space-x-2">
                <i className="fas fa-map-marker-alt"></i>
                <span>Lagos, Nigeria</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-phone"></i>
                <span>+234 123 4567 890</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;