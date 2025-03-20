"use client";
import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoTicketSharp } from "react-icons/io5";
import React from "react";

const upcomingEvents = [
  {
    id: 1,
    image: "/party1.png",
    title: "Africa's fashion industry.",
    date: "May 23, 2024",
    time: "13:20",
    location: "Lagos, Nigeria",
  },
  {
    id: 2,
    image: "/party1.png",
    title: "Africa's fashion industry.",
    date: "May 23, 2024",
    time: "13:20",
    location: "Lagos, Nigeria",
  },
  {
    id: 3,
    image: "/party1.png",
    title: "Africa's fashion industry.",
    date: "May 23, 2024",
    time: "13:20",
    location: "Lagos, Nigeria",
  },
];

const ComingNext: React.FC = () => {
  return (
    <section className="p-4">
      <h3 className="text-white text-2xl font-bold uppercase mb-6">
        COMING NEXT
      </h3>
      <div className="flex flex-wrap gap-6 justify-center">
        {upcomingEvents.map((event) => (
          <div
            key={event.id}
            className="w-[300px] min-h-[400px] border-[4px] border-[#ff4d2a] rounded-xl overflow-hidden bg-transparent shadow-[0_0_30px_rgba(255,77,42,0.8)]">
            <div className="relative h-40 w-full">
              <Image
                src={event.image}
                alt="Event Image"
                fill
                className="object-cover rounded-t-xl"
              />
            </div>
            <div className="p-4">
              <h4 className="text-white font-semibold text-base mb-3">
                {event.title}
              </h4>
              <div className="flex text-[12px] text-gray-400 mb-4">
                <div className="w-1/2">
                  <div>{event.date}</div>
                  <div>{event.time}</div>
                </div>
                <div className="w-1/2 text-right">{event.location}</div>
              </div>
              <div className="flex justify-center gap-4">
                <button className="flex items-center gap-1 border border-white bg-transparent text-white px-3 py-1 rounded-[12px] whitespace-nowrap">
                  Read more <FaLongArrowAltRight className="text-white" />
                </button>
                <button className="flex items-center gap-1 bg-[#ff4d2a] text-white px-3 py-1 rounded-[5px] whitespace-nowrap">
                  Get Ticket <IoTicketSharp className="text-white" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ComingNext;
