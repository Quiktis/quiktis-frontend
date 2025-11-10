"use client";

import type { NextPage } from "next";
import React from "react";
import EventToggle from "@/app/event/[id]/EventToggle";
import { OverviewActionButtons } from "./components/OverviewActionButtons";
import { SectionHeader } from "./components/SectionHeader";
import { HostItem, type Host } from "./components/OverviewHostItem";
import { EventDisplayCard } from "./components/EventDisplayCard";
import { EditEventButtons } from "./components/EditEventButtons";
import { WhenAndWhere } from "./components/WhenAndWhere";
import { SocialShareButtons } from "./components/SocialShareButtons";
import { VisibilitySection } from "./components/VisibilitySection";

const OnclickOverviewPage: NextPage = () => {
  const hosts: Host[] = [
    {
      name: "Dare Sobaloju Pamilerin",
      email: "Pamilerincaleb@gmail.com",
      role: "Creator",
    },
    {
      name: "Dare Sobaloju Pamilerin",
      email: "Pamilerincaleb@gmail.com",
      role: "Guest",
    },
  ];

  return (
    <div className="bg-[#131517] min-h-screen p-4 sm:p-6 md:p-8 text-gray-300 font-sans flex items-center justify-center">
      <div className="max-w-5xl mx-auto w-full mt-40">
        <div className="mb-8 md:mb-12">
          <EventToggle eventId="123" defaultTab="overview" />
        </div>

        <div
          className="bg-[#FFFFFF05] border-[0.33px] border-[#91949926] rounded-[11.66px] p-6
            w-full max-w-[397px] h-auto min-h-[600px] sm:max-w-none sm:min-h-0
            sm:rounded-[11.66px] sm:border-[0.33px]"
          style={{
            backdropFilter: "blur(13.11px)",
            WebkitBackdropFilter: "blur(13.11px)",
          }}
        >
          <OverviewActionButtons />

          <main className="flex flex-col md:flex-row gap-[47px]">
            <div className="flex-none w-full md:w-[490px]">
              <EventDisplayCard
                title="Africa Startup
Conference"
                eventDate="Thursday, Sep 23"
                eventTime="7:00 PM - 8:30 PM GMT+1"
                locationType="Offline Location"
                locationDetails="Stable Africa, Lagos, Nigeria"
                hostName="Dare Sobaloju"
                eventLink="Quiktis.com/xytrh"
                eventDescription="Where Africa startup find oppurtunity"
              />

              <EditEventButtons />
            </div>

            <WhenAndWhere
              eventDate="Thursday, Sep 23"
              eventTime="7:00 PM - 8:30 PM GMT+1"
              locationType="Offline Location"
              locationDetails="Stable Africa, Lagos, Nigeria"
            />
          </main>

          <SocialShareButtons />
        </div>

        <section className="mt-[65px] sm:mt-[62px]">
          <SectionHeader
            title="Add Hosts"
            subtitle="Co-host, add guest and event manager"
            titleClassName={
              "text-white font-medium text-[23.06px] leading-[121%] tracking-[-0.05em] sm:text-[clamp(20px,5vw,40px)]"
            }
            subtitleClassName={
              "text-[#919499] font-medium text-[13.83px] leading-[100%] align-middle sm:text-[clamp(12px,3.5vw,24px)] sm:leading-none mt-1 sm:mt-1"
            }
            buttonText="Add guest"
          />
          <div className="flex flex-col gap-3 sm:gap-4 mt-6 sm:mt-0">
            {hosts.map((host, index) => (
              <HostItem key={index} host={host} />
            ))}
          </div>
        </section>

        <hr className="mt-[106.31px] sm:mt-[144px] mb-[29px] sm:mb-[50px] border-gray-800" />

        <VisibilitySection />
      </div>
    </div>
  );
};

export default OnclickOverviewPage;
