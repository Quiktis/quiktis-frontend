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

const comingNext = [
  {
    image: "party1.png",
    title: "Africa’s fashion industry.",
    date: "May 23, 2024",
    time: "13:20",
    location: "Lagos, Nigeria",
    readMoreUrl: "/event-viewing",
    getTicketUrl: "/checkout",
  },
  {
    image: "party1.png",
    title: "Africa’s fashion industry.",
    date: "May 23, 2024",
    time: "13:20",
    location: "Lagos, Nigeria",
    readMoreUrl: "/event-viewing",
    getTicketUrl: "/checkout",
  },
  {
    image: "party1.png",
    title: "Africa’s fashion industry.",
    date: "May 23, 2024",
    time: "13:20",
    location: "Lagos, Nigeria",
    readMoreUrl: "/event-viewing",
    getTicketUrl: "/checkout",
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
      <div className="flex flex-col gap-5 mt-10">
        <h1 className="uppercase text-[30px] font-bold">Coming Next</h1>

        <div className="md:hidden overflow-x-auto scrollbar-hide">
          <div className="flex gap-5">
            {comingNext.map((evt, idx) => (
              <div
                key={idx}
                className={`${GlowStyles.glowWrapper} w-[320px] sm:w-[420px] flex-shrink-0`}>
                <div className="relative z-10 p-4 border-[6px] border-[#FF4D2A] bg-black rounded-[30px] flex flex-col gap-3">
                  <Image
                    src={`/${evt.image}`}
                    alt={evt.title}
                    width={420}
                    height={300}
                    className="rounded-[30px]"
                  />
                  <h1 className="text-[20px] font-semibold text-white">
                    {evt.title}
                  </h1>
                  <div className="flex justify-between text-sm text-gray-400">
                    <div>
                      {evt.date}
                      <br />
                      {evt.time}
                    </div>
                    <div>{evt.location}</div>
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <button
                      onClick={() => (window.location.href = evt.readMoreUrl)}
                      className="px-4 py-2 text-sm border border-white text-white rounded-[15px] flex items-center gap-1">
                      Read more <FaLongArrowAltRight size={10} />
                    </button>
                    <div className="w-4" />
                    <button
                      onClick={() => (window.location.href = evt.getTicketUrl)}
                      className="px-4 py-2 text-sm bg-[#FF4D2A] text-white rounded-[10px] flex items-center gap-1 ml-auto">
                      Get Ticket <IoTicketSharp size={12} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:flex gap-5">
          {comingNext.map((evt, idx) => (
            <div key={idx} className={`${GlowStyles.glowWrapper} w-[420px]`}>
              <div className="relative z-10 p-4 border-[6px] border-[#FF4D2A] bg-black rounded-[30px] flex flex-col gap-3">
                <Image
                  src={`/${evt.image}`}
                  alt={evt.title}
                  width={420}
                  height={300}
                  className="rounded-[30px]"
                />
                <h1 className="text-[20px] font-semibold text-white">
                  {evt.title}
                </h1>
                <div className="flex justify-between text-sm text-gray-400">
                  <div>
                    {evt.date}
                    <br />
                    {evt.time}
                  </div>
                  <div>{evt.location}</div>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <button
                    onClick={() => (window.location.href = evt.readMoreUrl)}
                    className="px-4 py-2 text-sm border border-white text-white rounded-[15px] flex items-center gap-1">
                    Read more <FaLongArrowAltRight size={10} />
                  </button>
                  <div className="w-4" />
                  <button
                    onClick={() => (window.location.href = evt.getTicketUrl)}
                    className="px-4 py-2 text-sm bg-[#FF4D2A] text-white rounded-[10px] flex items-center gap-1 ml-auto">
                    Get Ticket <IoTicketSharp size={12} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default EventsPage;
