"use client";
import React from "react";
import { usePathname } from "next/navigation";
const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const paddingRemovedPath = ["/", "/blog", "/nfts-notification", "/contact", "/search"];

  //px-20 max-md:px-5

  return (
    <div
      className={`w-full mx-auto flex flex-col gap-10 min-h-screen ${
        paddingRemovedPath.includes(pathname) ? "" : "px-20 max-md:px-5"
      }`}>
      {children}
    </div>
  );
};

export default PageWrapper;
