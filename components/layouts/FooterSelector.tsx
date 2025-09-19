"use client";

import { usePathname } from "next/navigation";

import Footer from "./Footer";
import NewFooter from "../NewFooter";
import BlogFooter from "./BlogFooter";

const FooterSelector: React.FC = () => {
  const pathname = usePathname();

  // 1. If on “/” or “/new-landing-page”, use the landing‐page footer:
  if (pathname === "/" || pathname === "/new-landing-page") {
    return <NewFooter />;
  }

  // 2. If the path starts with “/blog”, use the blog footer:
  if (pathname.startsWith("/blog")) {
    return <BlogFooter />;
  }

  // 3. Otherwise, fall back to the original footer:
  return <Footer />;
};

export default FooterSelector;
