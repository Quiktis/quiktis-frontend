"use client";

import { usePathname } from "next/navigation";

<<<<<<< HEAD
import Footer from "./Footer"; // “original” footer –
import NewFooter from "../NewFooter"; // “landing‐page” footer 
import BlogFooter from "./BlogFooter"; // “blog” footer 
=======
import Footer from "./Footer";
import NewFooter from "../NewFooter";
import BlogFooter from "./BlogFooter";
>>>>>>> ade50ccfe9fa68b1e783f07ef19b27e399cc5307

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
