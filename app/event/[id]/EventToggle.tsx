"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type TabType = "overview" | "registration" | "guest";

interface EventToggleProps {
  eventId: string;
  defaultTab?: TabType;
}

const EventToggle: React.FC<EventToggleProps> = ({
  eventId,
  defaultTab = "overview",
}) => {
  const pathname = usePathname();

  const getActiveTab = (): TabType => {
    if (pathname.includes("/registration")) return "registration";
    if (pathname.includes("/guest")) return "guest";
    return "overview";
  };

  const activeTab = getActiveTab();

  const tabs: Array<{ id: TabType; label: string; href: string }> = [
    { id: "overview", label: "Overview", href: `/event/${eventId}` },
    {
      id: "registration",
      label: "Registration",
      href: `/event/${eventId}/registration`,
    },
    { id: "guest", label: "Guest", href: `/event/${eventId}/guest` },
  ];

  const getButtonWidth = (
    tabId: TabType,
    isMobile: boolean = false
  ): { mobile: string; desktop: string } => {
    switch (tabId) {
      case "overview":
        return { mobile: "110px", desktop: "137.08px" };
      case "registration":
        return { mobile: "130px", desktop: "155.69px" };
      case "guest":
        return { mobile: "95px", desktop: "97.31px" };
      default:
        return { mobile: "auto", desktop: "auto" };
    }
  };

  return (
    <div className="relative w-full">
      <div className="flex gap-2 md:gap-3 relative">
        {tabs.map((tab) => {
          const widths = getButtonWidth(tab.id);
          return (
            <Link key={tab.id} href={tab.href}>
              <div className="relative">
                <div
                  className="transition-colors cursor-pointer flex items-center justify-center rounded-[7.11px] bg-[#FFFFFF05]"
                  style={{
                    backdropFilter: "blur(20.307693481445312px)",
                    WebkitBackdropFilter: "blur(20.307693481445312px)",
                  }}
                >
                  <style jsx>{`
                    div {
                      width: ${widths.mobile};
                      height: 52px; /* larger mobile height */
                    }
                    @media (min-width: 768px) {
                      div {
                        width: ${widths.desktop};
                        height: 42.31px; /* keep desktop unchanged */
                      }
                    }
                  `}</style>
                  <span
                    className="font-inter font-medium text-[18px] md:text-[20.31px] leading-[100%] tracking-[0%] align-middle"
                    style={{
                      color: activeTab === tab.id ? "#FFFFFF" : "#666666",
                    }}
                  >
                    {tab.label}
                  </span>
                </div>
                {activeTab === tab.id && (
                  <div className="absolute left-0 w-full h-[1.5px] md:h-[2px] bg-white z-[2] -bottom-[14px]">
                    <style jsx>{`
                      @media (min-width: 768px) {
                        div {
                          bottom: -22px;
                        }
                      }
                    `}</style>
                  </div>
                )}
              </div>
            </Link>
          );
        })}
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 w-screen max-w-[1508.5px] h-0 border-t border-[#91949924] z-[1] -bottom-[14px]">
        <style jsx>{`
          @media (min-width: 768px) {
            div {
              bottom: -22px;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default EventToggle;
