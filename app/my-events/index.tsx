"use client";

import React, { useRef } from "react";
import DashboardNav from "@/components/dashboard/DashboardNav";
import EventStats from "@/components/dashboard/EventStats";
import EventCard from "@/components/dashboard/EventCard";
import EventList from "@/components/dashboard/EventList";
import Button from "@/components/ui/Button";
import { FaCirclePlus } from "react-icons/fa6";
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
    getTicketUrl: "#",
    readMoreUrl: "#",
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
    getTicketUrl: "#",
    readMoreUrl: "#",
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
    getTicketUrl: "#",
    readMoreUrl: "#",
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
    getTicketUrl: "#",
    readMoreUrl: "#",
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
    getTicketUrl: "#",
    readMoreUrl: "#",
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
    getTicketUrl: "#",
    readMoreUrl: "#",
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
    getTicketUrl: "#",
    readMoreUrl: "#",
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
    getTicketUrl: "#",
    readMoreUrl: "#",
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
            <div className="relative flex items-center">
              <div className="border-l-4 border-[#FF4D2A]">
                <select
                  ref={selectRef}
                  className="appearance-none bg-[#202020] text-[#F68B61] py-1 px-3 md:py-2 md:px-10 pl-3 focus:outline-none focus:ring-2 focus:ring-primary text-xs md:text-base">
                  <option
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.7)",
                      color: "#F68B61",
                      padding: "0.5rem 1.5rem",
                    }}>
                    Today
                  </option>
                  <option>This Week</option>
                  <option>This Month</option>
                </select>
              </div>
              <div
                className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                onClick={handleArrowClick}>
                <MdKeyboardArrowDown size={24} color="#F68B61" />
              </div>
            </div>
            <Button className="w-[120px] h-[32px] md:w-[160px] md:h-[40px] rounded-[6.52px] bg-[#F68B61] text-white flex items-center gap-1 justify-center text-xs md:text-base">
              <FaCirclePlus size={14} color="white" /> Create Event
            </Button>
          </div>
        </div>
        <p className="mt-2 text-gray-400 text-xs md:text-sm">
          This section lets you view, explore, create, and manage tickets.
        </p>
      </div>

      <div className="mt-8">
        <EventStats />
      </div>

      <div className="mt-16" />

      <h1 className="text-3xl font-bold mb-6">NFT TICKETS</h1>

      <section className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
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
            readMoreUrl={event.readMoreUrl}
          />
        ))}
      </section>

      <div className="mt-12 md:mt-[100px]">
        <EventList />
      </div>
    </main>
  );
};

export default MyEvents;
