"use client";

import { usePathname } from "next/navigation";
import Footer3 from "@/components/Footer3";

const FooterOverride: React.FC = () => {
  const pathname = usePathname() || "";

  // routes that render their own inline footer
  const hideFooterOn = ["/pricing", "/events-active"];

  const shouldHide = hideFooterOn.some(
    (p) => pathname === p || pathname.startsWith(`${p}/`)
  );

  if (shouldHide) return null;
  return <Footer3 />;
};

export default FooterOverride;
