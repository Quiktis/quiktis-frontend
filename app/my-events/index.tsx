"use client";

import React, { useRef } from "react";
import DashboardNav from "@/components/dashboard/DashboardNav";
import MyEventsTable from "@/components/dashboard/MyEventsTable";
import type { Event as TableEvent } from "@/components/dashboard/EventRow";
import EventCard from "@/components/dashboard/EventCard";
import { MdKeyboardArrowDown } from "react-icons/md";

const events = [
  {
    title: "Africa's fashion industry is growing to meet global demand.",
    subtitle: "Africa Talks",
    description:
      "Lorem ipsum dolor sit amet consectetur. Massa tempor sed purus nisi facilisis tortor pretium nisi. Dolor turpis varius aliquam euismod cras. Ultrices purus sed et morbi neque iaculis nam. Lobortis nec diam tincidunt tincidunt sed. Ullamcorper nibh tellus posuere ullamcorper luctus. Ornare nulla ut eros maecenas nulla risus blandit est quis. Mi tincidunt sed",
    date: "May 23, 2024",
    location: "South Kenyatta",
    price: "$20",
    image: "africa.png",
    getTicketUrl: "/checkout",
  },
  {
    title: "Africa's fashion industry is growing to meet global demand.",
    subtitle: "Africa Talks",
    description:
      "Lorem ipsum dolor sit amet consectetur. Massa tempor sed purus nisi facilisis tortor pretium nisi. Dolor turpis varius aliquam euismod cras. Ultrices purus sed et morbi neque iaculis nam. Lobortis nec diam tincidunt tincidunt sed. Ullamcorper nibh tellus posuere ullamcorper luctus. Ornare nulla ut eros maecenas nulla risus blandit est quis. Mi tincidunt sed",
    date: "May 23, 2024",
    location: "South Kenyatta",
    price: "$20",
    image: "dj.png",
    getTicketUrl: "/checkout",
  },
  {
    title: "Africa's fashion industry is growing to meet global demand.",
    subtitle: "Africa Talks",
    description:
      "Lorem ipsum dolor sit amet consectetur. Massa tempor sed purus nisi facilisis tortor pretium nisi. Dolor turpis varius aliquam euismod cras. Ultrices purus sed et morbi neque iaculis nam. Lobortis nec diam tincidunt tincidunt sed. Ullamcorper nibh tellus posuere ullamcorper luctus. Ornare nulla ut eros maecenas nulla risus blandit est quis. Mi tincidunt sed",
    date: "May 23, 2024",
    location: "South Kenyatta",
    price: "$20",
    image: "camera.png",
    getTicketUrl: "/checkout",
  },
  {
    title: "Africa's fashion industry is growing to meet global demand.",
    subtitle: "Africa Talks",
    description:
      "Lorem ipsum dolor sit amet consectetur. Massa tempor sed purus nisi facilisis tortor pretium nisi. Dolor turpis varius aliquam euismod cras. Ultrices purus sed et morbi neque iaculis nam. Lobortis nec diam tincidunt tincidunt sed. Ullamcorper nibh tellus posuere ullamcorper luctus. Ornare nulla ut eros maecenas nulla risus blandit est quis. Mi tincidunt sed",
    date: "May 23, 2024",
    location: "South Kenyatta",
    price: "$20",
    image: "party1.png",
    getTicketUrl: "/checkout",
  },
  {
    title: "Africa's fashion industry is growing to meet global demand.",
    subtitle: "Africa Talks",
    description:
      "Lorem ipsum dolor sit amet consectetur. Massa tempor sed purus nisi facilisis tortor pretium nisi. Dolor turpis varius aliquam euismod cras. Ultrices purus sed et morbi neque iaculis nam. Lobortis nec diam tincidunt tincidunt sed. Ullamcorper nibh tellus posuere ullamcorper luctus. Ornare nulla ut eros maecenas nulla risus blandit est quis. Mi tincidunt sed",
    date: "May 23, 2024",
    location: "South Kenyatta",
    price: "$20",
    image: "conf.png",
    getTicketUrl: "/checkout",
  },
  {
    title: "Africa's fashion industry is growing to meet global demand.",
    subtitle: "Africa Talks",
    description:
      "Lorem ipsum dolor sit amet consectetur. Massa tempor sed purus nisi facilisis tortor pretium nisi. Dolor turpis varius aliquam euismod cras. Ultrices purus sed et morbi neque iaculis nam. Lobortis nec diam tincidunt tincidunt sed. Ullamcorper nibh tellus posuere ullamcorper luctus. Ornare nulla ut eros maecenas nulla risus blandit est quis. Mi tincidunt sed",
    date: "May 23, 2024",
    location: "South Kenyatta",
    price: "$20",
    image: "dance.png",
    getTicketUrl: "/checkout",
  },
  {
    title: "Africa's fashion industry is growing to meet global demand.",
    subtitle: "Africa Talks",
    description:
      "Lorem ipsum dolor sit amet consectetur. Massa tempor sed purus nisi facilisis tortor pretium nisi. Dolor turpis varius aliquam euismod cras. Ultrices purus sed et morbi neque iaculis nam. Lobortis nec diam tincidunt tincidunt sed. Ullamcorper nibh tellus posuere ullamcorper luctus. Ornare nulla ut eros maecenas nulla risus blandit est quis. Mi tincidunt sed",
    date: "May 23, 2024",
    location: "South Kenyatta",
    price: "$20",
    image: "wed.png",
    getTicketUrl: "/checkout",
  },
  {
    title: "Africa's fashion industry is growing to meet global demand.",
    subtitle: "Africa Talks",
    description:
      "Lorem ipsum dolor sit amet consectetur. Massa tempor sed purus nisi facilisis tortor pretium nisi. Dolor turpis varius aliquam euismod cras. Ultrices purus sed et morbi neque iaculis nam. Lobortis nec diam tincidunt tincidunt sed. Ullamcorper nibh tellus posuere ullamcorper luctus. Ornare nulla ut eros maecenas nulla risus blandit est quis. Mi tincidunt sed",
    date: "May 23, 2024",
    location: "South Kenyatta",
    price: "$20",
    image: "show.png",
    getTicketUrl: "/checkout",
  },
];

const tableEvents: TableEvent[] = [
  {
    id: "evt-1",
    name: "Afro Vibes Concert 2025",
    dateTime: "April 15, 2025 — 7:00 PM",
    location: "Lagos Convention Center",
    revenue: "₦1,200,000",
    ticketTypes: "Regular, VIP, Early Bird",
    status: "Upcoming",
  },
  {
    id: "evt-2",
    name: "Afro Vibes Concert 2025",
    dateTime: "April 15, 2025 — 7:00 PM",
    location: "Lagos Convention Center",
    revenue: "₦1,200,000",
    ticketTypes: "Regular, VIP, Early Bird",
    status: "Live",
  },
  {
    id: "evt-3",
    name: "Afro Vibes Concert 2025",
    dateTime: "April 15, 2025 — 7:00 PM",
    location: "Lagos Convention Center",
    revenue: "₦1,200,000",
    ticketTypes: "Regular, VIP, Early Bird",
    status: "Ended",
  },
  {
    id: "evt-4",
    name: "Afro Vibes Concert 2025",
    dateTime: "April 15, 2025 — 7:00 PM",
    location: "Lagos Convention Center",
    revenue: "₦1,200,000",
    ticketTypes: "Regular, VIP, Early Bird",
    status: "Canceled",
  },
  {
    id: "evt-5",
    name: "Afro Vibes Concert 2025",
    dateTime: "April 15, 2025 — 7:00 PM",
    location: "Lagos Convention Center",
    revenue: "₦1,200,000",
    ticketTypes: "Regular, VIP, Early Bird",
    status: "Ended",
  },
  {
    id: "evt-6",
    name: "Afro Vibes Concert 2025",
    dateTime: "April 15, 2025 — 7:00 PM",
    location: "Lagos Convention Center",
    revenue: "₦1,200,000",
    ticketTypes: "Regular, VIP, Early Bird",
    status: "Ended",
  },
  {
    id: "evt-7",
    name: "Afro Vibes Concert 2025",
    dateTime: "April 15, 2025 — 7:00 PM",
    location: "Lagos Convention Center",
    revenue: "₦1,200,000",
    ticketTypes: "Regular, VIP, Early Bird",
    status: "Ended",
  },
  {
    id: "evt-8",
    name: "Afro Vibes Concert 2025",
    dateTime: "April 15, 2025 — 7:00 PM",
    location: "Lagos Convention Center",
    revenue: "₦1,200,000",
    ticketTypes: "Regular, VIP, Early Bird",
    status: "Ended",
  },
  {
    id: "evt-9",
    name: "Afro Vibes Concert 2025",
    dateTime: "April 15, 2025 — 7:00 PM",
    location: "Lagos Convention Center",
    revenue: "₦1,200,000",
    ticketTypes: "Regular, VIP, Early Bird",
    status: "Ended",
  },
  {
    id: "evt-10",
    name: "Afro Vibes Concert 2025",
    dateTime: "April 15, 2025 — 7:00 PM",
    location: "Lagos Convention Center",
    revenue: "₦1,200,000",
    ticketTypes: "Regular, VIP, Early Bird",
    status: "Ended",
  },
  {
    id: "evt-11",
    name: "Afro Vibes Concert 2025",
    dateTime: "April 15, 2025 — 7:00 PM",
    location: "Lagos Convention Center",
    revenue: "₦1,200,000",
    ticketTypes: "Regular, VIP, Early Bird",
    status: "Ended",
  },
  {
    id: "evt-12",
    name: "Afro Vibes Concert 2025",
    dateTime: "April 15, 2025 — 7:00 PM",
    location: "Lagos Convention Center",
    revenue: "₦1,200,000",
    ticketTypes: "Regular, VIP, Early Bird",
    status: "Ended",
  },
  {
    id: "evt-5",
    name: "Afro Vibes Concert 2025",
    dateTime: "April 15, 2025 — 7:00 PM",
    location: "Lagos Convention Center",
    revenue: "₦1,200,000",
    ticketTypes: "Regular, VIP, Early Bird",
    status: "Ended",
  },
  {
    id: "evt-13",
    name: "Afro Vibes Concert 2025",
    dateTime: "April 15, 2025 — 7:00 PM",
    location: "Lagos Convention Center",
    revenue: "₦1,200,000",
    ticketTypes: "Regular, VIP, Early Bird",
    status: "Ended",
  },
];

const MyEvents = () => {
  const selectRef = useRef<HTMLSelectElement>(null);

  const handleArrowClick = () => {
    selectRef.current?.click();
  };

  return (
    <main className="bg-transparent text-white min-h-screen py-10">
      <div className="py-4">
        <DashboardNav />
      </div>

      <div className="mt-10">
        <div
          className="flex flex-row items-center justify-between px-4 py-3 md:px-6 md:py-4 shadow-lg"
          style={{
            borderWidth: "0.5px",
            borderColor: "#F68B61",
            borderRadius: "5px",
            backgroundColor: "#191919",
          }}>
          <h1 className="text-xs md:text-2xl font-bold">Manage Events</h1>
          <div className="flex flex-row items-center gap-4 w-full md:w-auto">
          </div>
        </div>
        <p className="mt-2 text-gray-400 text-xs md:text-sm">
          This section lets you view, explore, create, and manage tickets.
        </p>
      </div>

      <div className="mt-10">
        <h1 className="text-2xl md:text-3xl font-bold">My Events</h1>
      </div>
      <div className="mt-8">
        <MyEventsTable events={tableEvents} />
        <hr className="border-gray-700 mt-1" />
      </div>

      <div className="mt-16 relative">

        <div
          className="absolute bottom-0 left-0 w-[350px] h-[350px] opacity-30 -z-10"
          style={{ backgroundColor: "#FF4D2A", filter: "blur(100px)" }}></div>
        <div
          className="absolute top-0 right-0 w-[350px] h-[350px] opacity-30 -z-10"
          style={{ backgroundColor: "#0072FF", filter: "blur(100px)" }}></div>

        <h1 className="text-3xl font-bold mb-6 relative z-10">MY TICKETS</h1>

        <section className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto relative z-10">
          {events.map((event, index) => (
            <EventCard
              key={index}
              title={event.title}
              subtitle={event.subtitle}
              description={event.description}
              date={event.date}
              location={event.location}
              price={event.price}
              image={event.image}
              getTicketUrl={event.getTicketUrl}
            />
          ))}
        </section>
      </div>
    </main>
  );
};

export default MyEvents;
