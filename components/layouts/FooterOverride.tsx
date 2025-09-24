"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Footer3 from "@/components/Footer3";
import SpecialFooterPast from "@/components/ui/SpecialFooterPast";

const FooterOverride: React.FC = () => {
  const pathname = usePathname() || "";
  const searchParams = useSearchParams();

  // Hide footer completely
  const hideFooterPaths = [
    "/create-event",
    "/events/create-event",
    "/events/create",
  ];
  const isCreatePage = hideFooterPaths.some(
    (p) => pathname === p || pathname.startsWith(`${p}/`)
  );
  if (isCreatePage) return null;

  // Hide footer on /event/[id] pages (onclick detail)
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
    return <SpecialFooterPast />;
  }

  // fallback: normal footer everywhere else
  return <Footer3 />;
};

export default FooterOverride;
