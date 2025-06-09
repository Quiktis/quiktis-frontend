"use client";
import React from "react";
import Image from "next/image";
import SearchForm from "@/components/search/SearchForm";
import NewEventCard from "@/components/search/NewEventCard";
import Filters from "@/components/search/Filters";
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

export default function SearchPage() {
  return (
    <div className="relative min-h-screen flex flex-col text-white bg-transparent overflow-hidden px-20 max-md:px-5">
      <main className="container mx-auto px-6 md:px-12 py-1 md:py-10 flex-grow">
        
        <div className="mb-6">
          <h1 className="text-5xl md:text-7xl font-bold">SEARCH...</h1>
          <p className="text-base md:text-lg mt-2">
            Stay Ahead of the Curve with Quiktis’ Cutting-Edge Solutions
          </p>
        </div>
        <SearchForm />
        <div className="mt-9 md:mt-10 flex flex-col lg:flex-row gap-y-1 lg:gap-y-0 lg:gap-x-10">
          <aside
            className="
              w-full
              lg:w-[250px] xl:w-[300px]
              flex-shrink-0
              md:border-r md:border-gray-600
              md:pr-4 pr-0
            ">
            <Filters />
          </aside>

          <section className="w-full mt-8 lg:mt-0">
            <div className="flex justify-start mb-6">
              <h3 className="text-lg md:text-xl font-semibold">
                <span className="text-white">Search Results for:</span>{" "}
                <span
                  className="text-[#0072FF] underline cursor-pointer"
                  style={{ textDecorationColor: "#0072FF" }}>
                  Davido’s Concert
                </span>
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {events.map((event, idx) => (
                <NewEventCard
                  key={idx}
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
          </section>
        </div>
      </main>
    </div>
  );
}
