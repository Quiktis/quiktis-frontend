// app/events/page.jsx
"use client";

import React from "react";
import Image from "next/image";
import { IoTicketSharp } from "react-icons/io5";
import { FaLongArrowAltRight } from "react-icons/fa";
import NewHappeningSection from "@/components/eventsexplore/NewHappeningSection";
import NewEventCard from "@/components/search/NewEventCard";
import Button from "@/components/ui/Button";
import SearchBar from "@/components/ui/SearchBar";
import GlowStyles from "@/components/eventsexplore/GlowWrapper.module.css";

// ← Import the new AI‐tool "Coming Next" component
import ComingNext from "@/components/eventsexplore/ComingNext";

const events = [
  {
    title: "Africa's fashion industry is growing to meet global demand.",
    subtitle: "Africa Talks",
    description:
      "Lorem ipsum dolor sit amet consectetur. Massa tempor sed purus nisi facilisis tortor pretium nisi. Dolor turpis varius aliquam euismod cras. Ultrices purus sed et morbi neque iaculis nam...",
    date: "May 23, 2024",
    location: "South Kenyatta",
    price: "$20",
    image: "africa.png",
    getTicketUrl: "/checkout",
    readMoreUrl: "/event-viewing",
  },
  {
    title: "Africa's fashion industry is growing to meet global demand.",
    subtitle: "Africa Talks",
    description:
      "Lorem ipsum dolor sit amet consectetur. Massa tempor sed purus nisi facilisis tortor pretium nisi. Dolor turpis varius aliquam euismod cras. Ultrices purus sed et morbi neque iaculis nam...",
    date: "May 23, 2024",
    location: "South Kenyatta",
    price: "$20",
    image: "dj.png",
    getTicketUrl: "/checkout",
    readMoreUrl: "/event-viewing",
  },
  {
    title: "Africa's fashion industry is growing to meet global demand.",
    subtitle: "Africa Talks",
    description:
      "Lorem ipsum dolor sit amet consectetur. Massa tempor sed purus nisi facilisis tortor pretium nisi. Dolor turpis varius aliquam euismod cras. Ultrices purus sed et morbi neque iaculis nam...",
    date: "May 23, 2024",
    location: "South Kenyatta",
    price: "$20",
    image: "camera.png",
    getTicketUrl: "/checkout",
    readMoreUrl: "/event-viewing",
  },
  {
    title: "Africa's fashion industry is growing to meet global demand.",
    subtitle: "Africa Talks",
    description:
      "Lorem ipsum dolor sit amet consectetur. Massa tempor sed purus nisi facilisis tortor pretium nisi. Dolor turpis varius aliquam euismod cras. Ultrices purus sed et morbi neque iaculis nam...",
    date: "May 23, 2024",
    location: "South Kenyatta",
    price: "$20",
    image: "party1.png",
    getTicketUrl: "/checkout",
    readMoreUrl: "/event-viewing",
  },
  {
    title: "Africa's fashion industry is growing to meet global demand.",
    subtitle: "Africa Talks",
    description:
      "Lorem ipsum dolor sit amet consectetur. Massa tempor sed purus nisi facilisis tortor pretium nisi. Dolor turpis varius aliquam euismod cras. Ultrices purus sed et morbi neque iaculis nam...",
    date: "May 23, 2024",
    location: "South Kenyatta",
    price: "$20",
    image: "conf.png",
    getTicketUrl: "/checkout",
    readMoreUrl: "/event-viewing",
  },
  {
    title: "Africa's fashion industry is growing to meet global demand.",
    subtitle: "Africa Talks",
    description:
      "Lorem ipsum dolor sit amet consectetur. Massa tempor sed purus nisi facilisis tortor pretium nisi. Dolor turpis varius aliquam euismod cras. Ultrices purus sed et morbi neque iaculis nam...",
    date: "May 23, 2024",
    location: "South Kenyatta",
    price: "$20",
    image: "dance.png",
    getTicketUrl: "/checkout",
    readMoreUrl: "/event-viewing",
  },
  {
    title: "Africa's fashion industry is growing to meet global demand.",
    subtitle: "Africa Talks",
    description:
      "Lorem ipsum dolor sit amet consectetur. Massa tempor sed purus nisi facilisis tortor pretium nisi. Dolor turpis varius aliquam euismod cras. Ultrices purus sed et morbi neque iaculis nam...",
    date: "May 23, 2024",
    location: "South Kenyatta",
    price: "$20",
    image: "wed.png",
    getTicketUrl: "/checkout",
    readMoreUrl: "/event-viewing",
  },
  {
    title: "Africa's fashion industry is growing to meet global demand.",
    subtitle: "Africa Talks",
    description:
      "Lorem ipsum dolor sit amet consectetur. Massa tempor sed purus nisi facilisis tortor pretium nisi. Dolor turpis varius aliquam euismod cras. Ultrices purus sed et morbi neque iaculis nam...",
    date: "May 23, 2024",
    location: "South Kenyatta",
    price: "$20",
    image: "show.png",
    getTicketUrl: "/checkout",
    readMoreUrl: "/event-viewing",
  },
];

const EventsPage = () => {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <div className="flex flex-col md:flex-row gap-20 justify-center items-center w-full px-6">
        <div className="w-full md:w-1/2 flex flex-col gap-8">
          <h1 className="md:text-[90px] text-2xl font-[900]">Events</h1>
          <h4 className="text-[19px]">
            Stay Ahead of the Curve with Quiktis&apos; Cutting-Edge
            <br /> Solutions
          </h4>
          <div className="flex flex-col gap-2">
            <p>Search any event</p>
            <SearchBar
              placeholder="Search Event"
              value=""
              onChange={() => {}}
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center items-center">
          <Image
            src={"/young-people-enjoying-street-food.png"}
            alt="young-people-enjoying-street-food"
            width={700}
            height={600}
            className="bg-cover object-cover w-full h-auto"
          />
        </div>
      </div>

      <div className="w-full h-[2px] bg-[#FF4D2A] my-16" />

      <NewHappeningSection />

      <div className="flex flex-col gap-5 mt-10">
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {events.map((event, index) => (
            <NewEventCard
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
        </div>
      </div>

      {/* ← Replace the old inline Coming Next JSX with this single component: */}
      <h1 className="text-white text-4xl font-bold pb-2 pt-6 pl-0 pr-4 uppercase tracking-wide">
        COMING NEXT
      </h1>
      <ComingNext />
    </main>
  );
};

export default EventsPage;
