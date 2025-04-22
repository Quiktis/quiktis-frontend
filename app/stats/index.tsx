"use client";

import React from "react";
import DashboardNav from "@/components/dashboard/DashboardNav";
import StatsCard from "@/components/eventstats/StatsCard";
import TicketTypeChart from "@/components/eventstats/TicketTypeChart";
import CheckInTable from "@/components/eventstats/CheckInTable";
import NoCheckInTable from "@/components/eventstats/NoCheckInTable";
import ComparisonSection from "@/components/eventstats/ComparisonSection";
import Image from "next/image";

export default function EventsStatsPage() {
  const statsData = {
    totalTicketsSold: 700,
    totalAttendees: 700,
    totalIncome: 700,
    totalEventsHosted: 700,
  };

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

  const comparison = {
    previousImage: "/images/prev-event-thumb.png",
    currentImage: "/images/curr-event-thumb.png",
    previous: { ticketSales: 60, engagement: 68, attendance: 75 },
    current: { ticketSales: 85, engagement: 78, attendance: 88 },
  };

  return (
    <main className="bg-transparent text-white min-h-screen py-12">
      <div className="py-4">
        <DashboardNav />
      </div>

      <div className="relative">
        <div className="absolute top-0 right-0 flex space-x-4">
          <div className="relative w-[410px] h-[410px] mx-auto mt-[-40px] ml-[-60px]">
            <img
              src="/Maskgroup.png"
              alt="Maskgroup"
              className="w-full h-full object-contain hidden md:block"
            />

            <img
              src="/decor-chart.png"
              alt="Chart Decor"
              className="absolute top-[85px] left-[-90px] w-[100px] h-[100px] hidden md:block"
            />

            <img
              src="/decor-percent.png"
              alt="Percent Decor"
              className="absolute top-[85px] right-[-70px] w-[100px] h-[100px] hidden md:block"
            />

            <img
              src="/decor-icon.png"
              alt="Icon Decor"
              className="absolute bottom-[-170px] left-1/2 transform -translate-x-1/2 w-[100px] h-[100px] hidden md:block"
            />
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

          <section className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-12 max-w-2xl">
            <StatsCard
              label="Total Tickets Sold"
              value={statsData.totalTicketsSold}
            />
            <StatsCard
              label="Total Attendees"
              value={statsData.totalAttendees}
            />
            <StatsCard label="Total Income" value={statsData.totalIncome} />
            <StatsCard
              label="Total Events Hosted"
              value={statsData.totalEventsHosted}
            />
          </section>

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
