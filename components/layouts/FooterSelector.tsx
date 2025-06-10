<<<<<<< HEAD
// components/layout/FooterSelector.tsx
"use client";

import { usePathname } from "next/navigation";

import Footer from "./Footer"; // “original” footer – imports NewsLetter.tsx
import NewFooter from "../NewFooter"; // “landing‐page” footer – imports NewsLetter2.tsx
import BlogFooter from "./BlogFooter"; // “blog” footer – imports BlogNewsletter.tsx

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
=======
// components/layout/FooterSelector.tsx
"use client";

import { usePathname } from "next/navigation";

import Footer from "./Footer"; // “original” footer – imports NewsLetter.tsx
import NewFooter from "../NewFooter"; // “landing‐page” footer – imports NewsLetter2.tsx
import BlogFooter from "./BlogFooter"; // “blog” footer – imports BlogNewsletter.tsx

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
>>>>>>> 1c28eb03d8b868877cdffd66f40c2c7f3ac069fc
