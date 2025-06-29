"use client";
import React from "react";
import Image from "next/image";
import SearchForm from "@/components/search/SearchForm";
import NewEventCard from "@/components/search/NewEventCard";
import Filters from "@/components/search/Filters";
import { Event } from "@/constant/customTypes";
import { useEffect, useState } from "react"; 
import useAxios from "../hooks/useAxios";

export default function SearchPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const { sendRequest } = useAxios();


   useEffect(() => {
        const fetchAllEvents = async () => {
          try {
            const response = await sendRequest({
              url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/events`,
              method: "GET",
            });
    
            //console.log("Events response:", response);
    
            if (response.status === "success") {
              setEvents(response.data.events);
              //console.log("Upcoming events - ", comingUpNext)
            } else {
              console.error("Failed to fetch events:", response.message);
            }
          } catch (error) {
            console.error("Error fetching events:", error);
          }
        };
    
        fetchAllEvents();
      }, []);
  
        useEffect(() => {
        console.log("Updated upcoming events:", events);
      }, [events]);


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
              {events.map((event, index) => (
                <NewEventCard
                  key={index}
              image={event.bannerImage ?? ""}
              title={event.title} 
              event={event}
              description={event.description ?? ""}
              price={event.tickets?.[0]?.price ?? ""}
              eventId={event.id ?? ""}
              startDate={event.startDate ?? ""}
              startTime={event.startTime ?? ""}
              eventSlug={event.slug ?? ""}
              location={event.location ?? ""}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
