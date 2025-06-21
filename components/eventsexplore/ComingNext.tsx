"use client";

import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { IoArrowForward, IoTicket } from "react-icons/io5";

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
}

export default function ComingNext(): JSX.Element {
  const events: Event[] = [
    {
      id: 1,
      title: "Africa's fashion industry.",
      date: "May 23, 2024",
      time: "13:20",
      location: "Lagos, Nigeria",
      image: "party1.png",
    },
    {
      id: 2,
      title: "Africa's fashion industry.",
      date: "May 23, 2024",
      time: "13:20",
      location: "Lagos, Nigeria",
      image: "party1.png",
    },
    {
      id: 3,
      title: "Africa's fashion industry.",
      date: "May 23, 2024",
      time: "13:20",
      location: "Lagos, Nigeria",
      image: "party1.png",
    },
  ];

  return (
    <div className="w-full">
      {/* MOBILE*/}
      <div className="md:hidden flex overflow-x-auto gap-4 snap-x snap-mandatory scrollbar-hide px-4">
        {events.map((event) => (
          <Card
            key={event.id}
            className="
              bg-black
              border-[6px] border-[#FF4D2A]
              rounded-3xl
              overflow-hidden
              shadow-[0_0_25px_rgba(255,77,42,0.8)]
              relative
              flex-shrink-0
              w-[90vw]    /* Wider on mobile */
              snap-center
            ">
            <CardContent className="p-4 relative">
              {/* IMAGE */}
              <div className="relative mb-4">
                <Image
                  src={`/${event.image}`}
                  alt={event.title}
                  width={400}
                  height={300}
                  className="w-full h-60 object-cover rounded-lg"
                  priority
                />
              </div>

              {/* TITLE */}
              <h3 className="text-white text-2xl font-semibold mb-2">
                {event.title}
              </h3>

              <p className="text-white/70 text-base mb-1">{event.date}</p>

              <div className="flex justify-between items-center text-white/70 text-base mb-4">
                <p>{event.time}</p>
                <p>{event.location}</p>
              </div>

              <div className="flex flex-col gap-2">
                <Button
                  href="/event-viewing"
                  className="
                    flex items-center justify-center
                    w-full          
                    px-3 py-1.5
                    bg-transparent
                    border border-white
                    text-white
                    hover:bg-white hover:text-black
                    rounded-full
                    cursor-pointer
                    text-sm
                    relative
                    z-10
                  ">
                  <span>Read more</span>
                  <IoArrowForward className="ml-2 h-4 w-4" />
                </Button>

                <Button
                  href="/concert-ticket"
                  className="
                    flex items-center justify-center
                    w-full            
                    px-3 py-1.5
                    bg-[#FF4D2A]
                    hover:bg-[#e6441f]
                    text-white
                    rounded-[10px]
                    cursor-pointer
                    text-sm
                    relative
                    z-10
                  ">
                  <span>Get Ticket</span>
                  <IoTicket className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="hidden md:grid md:grid-cols-3 gap-6 px-4 py-8">
        {events.map((event) => (
          <Card
            key={event.id}
            className="
              bg-black
              border-[6px] border-[#FF4D2A]
              rounded-3xl
              overflow-hidden
              shadow-[0_0_25px_rgba(255,77,42,0.8)]
              relative
            ">
            <CardContent className="p-4 relative">
              {/* IMAGE */}
              <div className="relative mb-4">
                <Image
                  src={`/${event.image}`}
                  alt={event.title}
                  width={400}
                  height={300}
                  className="w-full h-60 object-cover rounded-lg"
                  priority
                />
              </div>

              {/* TITLE */}
              <h3 className="text-white text-2xl font-semibold mb-2">
                {event.title}
              </h3>

              <p className="text-white/70 text-base mb-1">{event.date}</p>

              <div className="flex justify-between items-center text-white/70 text-base mb-4">
                <p>{event.time}</p>
                <p>{event.location}</p>
              </div>

              <div className="flex justify-between items-center">
                <Button
                  href="/event-viewing"
                  className="
                    flex items-center justify-center
                    px-3 py-1.5
                    bg-transparent
                    border border-white
                    text-white
                    hover:bg-white hover:text-black
                    rounded-full
                    cursor-pointer
                    text-sm
                    relative
                    z-10
                  ">
                  <span>Read more</span>
                  <IoArrowForward className="ml-2 h-4 w-4" />
                </Button>

                <Button
                  href="/concert-ticket"
                  className="
                    flex items-center justify-center
                    px-3 py-1.5
                    bg-[#FF4D2A]
                    hover:bg-[#e6441f]
                    text-white
                    rounded-[10px]
                    cursor-pointer
                    text-sm
                    relative
                    z-10
                  ">
                  <span>Get Ticket</span>
                  <IoTicket className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

