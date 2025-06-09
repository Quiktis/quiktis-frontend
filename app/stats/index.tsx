"use client";

import React from "react";
import DashboardNav from "@/components/dashboard/DashboardNav";
import EventStats from "@/components/dashboard/EventStats";
import TicketTypeChart from "@/components/eventstats/TicketTypeChart";
import CheckInTable from "@/components/eventstats/CheckInTable";
import NoCheckInTable from "@/components/eventstats/NoCheckInTable";
import ComparisonSection from "@/components/eventstats/ComparisonSection";

export default function EventsStatsPage() {
  const ticketTypeData = {
    labels: ["Ticket 1", "Ticket 2", "Ticket 3", "Ticket 4", "Ticket 5"],
    values: [50, 90, 70, 100, 80],
  };

  const checkedIn = Array(6).fill({
    name: "Terry Botosh",
    ticketType: "Ticket name",
    time: "20:19",
    status: true,
  });

  const notCheckedIn = Array(5).fill({
    name: "Paituy Lubin",
    ticketType: "Ticket name",
  });

  return (
    <main className="relative bg-transparent text-white min-h-screen py-12">
      <div className="py-4 mb-8">
        <DashboardNav />
      </div>

      <div className="relative">
        <div className="absolute top-0 right-0 flex space-x-4">
          <div className="relative z-0">
            <div
              style={{ zIndex: -1 }}
              className="absolute top-[-150px] right-[-150px] w-[1200px] h-[1200px] gradient-blur"></div>

            <div className="relative w-[250px] h-[250px] mt-7 ml-[-40px]">
              <img
                src="/Maskgroup.png"
                alt="Maskgroup"
                className="w-full h-full object-contain hidden md:block"
              />

              <img
                src="/decor-chart.png"
                alt="Chart Decor"
                className="absolute top-[60px] left-[-60px] w-[80px] h-[80px] hidden md:block"
              />

              <img
                src="/decor-percent.png"
                alt="Percent Decor"
                className="absolute top-[60px] right-[-50px] w-[80px] h-[80px] hidden md:block"
              />

              <img
                src="/decor-icon.png"
                alt="Icon Decor"
                className="absolute bottom-[-100px] left-[45%] transform -translate-x-1/2 w-[80px] h-[80px] hidden md:block"
              />
            </div>
          </div>
        </div>

        <div className="space-y-8 pt-6">
          <div className="max-w-2xl">
            <h1 className="text-6xl font-bold mb-4">EVENT STATISTICS</h1>
            <p className="text-white text-lg">
              Stay Ahead of the Curve with Quiktis’ Cutting‑Edge Solutions
            </p>
          </div>

          <div className="h-12" />

          <EventStats />

          <section>
            <TicketTypeChart
              labels={ticketTypeData.labels}
              values={ticketTypeData.values}
            />
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <CheckInTable data={checkedIn} />
            <NoCheckInTable data={notCheckedIn} />
          </section>

          <ComparisonSection
            previousImage="/event1.png"
            currentImage="/event2.png"
            previous={{ ticketSales: 80, engagement: 90, attendance: 75 }}
            current={{ ticketSales: 65, engagement: 78, attendance: 88 }}
          />
        </div>
      </div>
    </main>
  );
}
