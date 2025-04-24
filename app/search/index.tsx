"use client";
import React from "react";
import Image from "next/image";

import SearchHeader from "@/components/search/SearchHeader";
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
    getTicketUrl: "#",
    readMoreUrl: "#",
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
    getTicketUrl: "#",
    readMoreUrl: "#",
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
    getTicketUrl: "#",
    readMoreUrl: "#",
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
    getTicketUrl: "#",
    readMoreUrl: "#",
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
    getTicketUrl: "#",
    readMoreUrl: "#",
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
    getTicketUrl: "#",
    readMoreUrl: "#",
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
    getTicketUrl: "#",
    readMoreUrl: "#",
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
    getTicketUrl: "#",
    readMoreUrl: "#",
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
    getTicketUrl: "#",
    readMoreUrl: "#",
  },
];

export default function SearchPage() {
  return (
    <div className="relative min-h-screen flex flex-col text-white bg-transparent overflow-hidden">
      <SearchHeader />
      <main className="container mx-auto px-6 md:px-12 py-10 flex-grow">
        <div className="mb-6">
          <h1 className="text-5xl md:text-7xl font-bold">SEARCH...</h1>
          <p className="text-base md:text-lg mt-2">
            Stay Ahead of the Curve with Quiktis’ Cutting-Edge Solutions
          </p>
        </div>
        <SearchForm />
        <div className="mt-10 flex flex-col lg:flex-row gap-10">
          <aside className="w-full lg:w-[250px] xl:w-[300px] flex-shrink-0 border-r border-gray-600 pr-4">
            <Filters />
          </aside>
          <section className="w-full mt-8 lg:mt-0 ml-50">
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
          </section>
        </div>
      </main>
    </div>
  );
}
