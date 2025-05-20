"use client";

import React, { useRef, useState, useEffect } from "react";
import DashboardNav from "@/components/dashboard/DashboardNav";
import MyEventsTable from "@/components/dashboard/MyEventsTable";
import type { Event as TableEvent } from "@/components/dashboard/EventRow";
import EventCard from "@/components/dashboard/EventCard";
import { MdKeyboardArrowDown } from "react-icons/md";
import useAxios from "../hooks/useAxios";
import { useUser } from "../context/UserContext";
import { Event } from "@/constant/customTypes";
import EventsOperations from "@/components/EventsOperations";


const MyEvents = () => {
  //const selectRef = useRef<HTMLSelectElement>(null);
  const [events, setEvents] = useState([]);
  const { sendRequest } = useAxios();
  const { user } = useUser();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await sendRequest({
          url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/events/organiser/${user.userId}`,
          method: "GET",
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        });

        console.log("Events response:", response);

        if (response.status === "success") {
          setEvents(response.data.events);
        } else {
          console.error("Failed to fetch events:", response.message);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);


  return (
    <main className="bg-transparent text-white min-h-screen flex flex-col gap-5 w-full relative sm:w-[88%] lg:w-[90%] mx-auto">
      <div className="">
        <EventsOperations />
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
        <MyEventsTable events={events} />
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

        <section className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[2.2em] max-w-7xl mx-auto relative z-10">
            {events.map((event: Event, index: number) => (
            <EventCard
              key={index}
              title={event.title}
              //subtitle={event.subtitle}
              description={event.description}
              date={new Date(event.startDate)}
              location={event.location}
              price={event.tickets?.[0]?.price ?? 0}
              image={event.bannerImage}
              time={event.startTime}
              //getTicketUrl={event.getTicketUrl}
            />
            ))}
        </section>
      </div>
    </main>
  );
};

export default MyEvents;
