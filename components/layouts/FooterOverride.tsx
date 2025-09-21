// components/layouts/FooterOverride.tsx
"use client";

import { usePathname } from "next/navigation";
import Footer3 from "@/components/Footer3";

const FooterOverride: React.FC = () => {
  const pathname = usePathname() || "";

  const hideFooterOn = ["/events-active", "/events/create-event"];

  const shouldHide = hideFooterOn.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`)
  );

  if (shouldHide) return null;

  return <Footer3 />;
};

export default FooterOverride;
