"use client";

import { usePathname } from "next/navigation";

import Footer from "./Footer";
import NewFooter from "../NewFooter";
import BlogFooter from "./BlogFooter";

const FooterSelector: React.FC = () => {
  const pathname = usePathname();

  if (pathname === "/" || pathname === "/new-landing-page") {
    return <NewFooter />;
  }

  if (pathname.startsWith("/blog")) {
    return <BlogFooter />;
  }

  return <Footer />;
};

export default FooterSelector;
