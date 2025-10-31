"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Footer3 from "@/components/Footer3";
import SpecialFooterPast from "@/components/ui/SpecialFooterPast";
import SpecialFooterProfile from "@/components/ui/SpecialFooterProfile";
import SpecialFooterDiscover from "@/components/ui/SpecialFooterDiscover";

const FooterOverride: React.FC = () => {
  const pathname = usePathname() || "";
  const searchParams = useSearchParams();

  const hideFooterPaths = [
    "/create-event",
    "/events/create-event",
    "/events/create",
    "/event",
    "/register",
    "/event-dashboard",
  ];
  const isCreatePage = hideFooterPaths.some(
    (p) => pathname === p || pathname.startsWith(`${p}/`)
  );
  if (isCreatePage) return null;

  // Hide footer on /event/[id] pages
  const isEventDetail = /^\/event\/[^/]+/.test(pathname);
  if (isEventDetail) return null;

  // Render special footer on /events-active?tab=past
  const isEventsActiveRoute =
    pathname === "/events-active" || pathname.startsWith("/events-active/");
  const tab = searchParams?.get("tab") ?? null;
  if (isEventsActiveRoute && tab === "past") {
    return <SpecialFooterPast />;
  }

  // Render special footer for /discover
  const isDiscover =
    pathname === "/discover" || pathname.startsWith("/discover/");
  if (isDiscover) {
    return <SpecialFooterDiscover />;
  }

  // Render special footer for /events-checkout
  const isCheckout =
    pathname === "/events-checkout" || pathname.startsWith("/events-checkout/");
  if (isCheckout) {
    return <SpecialFooterDiscover />;
  }

  // Render special footer for /profile
  const isProfile = pathname === "/profile" || pathname.startsWith("/profile/");
  if (isProfile) {
    return <SpecialFooterProfile />;
  }

  // fallback: normal footer
  return <Footer3 />;
};

export default FooterOverride;
