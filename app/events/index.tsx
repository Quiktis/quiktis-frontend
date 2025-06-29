"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import NewHappeningSection from "@/components/eventsexplore/NewHappeningSection";
import NewEventCard from "@/components/search/NewEventCard";
import SearchBar from "@/components/ui/SearchBar";
import { Event } from "@/constant/customTypes";
import useAxios from "../hooks/useAxios";


const EventsPage = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Event[]>([]);
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState<Event[]>([]);
  const { sendRequest } = useAxios();

  // Debounced search effect
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query.trim()) {
        fetchEvents(query);
      } else {
        setResults([]);
      }
    }, 500); // 500ms debounce

    return () => clearTimeout(delayDebounce);
  }, [query]);

  const fetchEvents = async (searchTerm: string) => {
    try {
      setLoading(true);
      const response = await fetch(
        `${
          process.env.NEXT_PUBLIC_API_BASE_URL
        }/events/search?q=${encodeURIComponent(searchTerm)}`
      );
      const data = await response.json();
      if (data?.status === "success") {
        setResults(data.data.events || []);
      }
    } catch (error) {
      console.error("Error fetching events:", error);
    } finally {
      setLoading(false);
    }
  };

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
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onBlur={() => setLoading(false)}
            />
            {query.trim() && (
              <div className="mt-6 space-y-[0.4em] text-left w-full lg:max-w-[32em] h-fit bg-[#202020] p-2 rounded-md shadow-lg">
                {loading && <p className="text-white p-4">Searching...</p>}
                {!loading && results.length > 0 && (
                  <div className="grid gap-4">
                    {results.slice(0, 4).map((event) => (
                      <Link key={event.slug} href={`/event-viewing/${event.slug}`}>
                        <div className="p-3 rounded-lg cursor-pointer transition hover:bg-[#ffffff0e]">
                          <h3 className="text-white font-semibold">
                            {event.title}
                          </h3>
                          <p className="text-gray-300 text-sm">
                            {event.location}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
                {!loading && results.length === 0 && (
                  <p className="text-gray-400 p-4">No events found.</p>
                )}
              </div>
            )}
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

      <div className="flex flex-col gap-5 mt-10 mb-10">
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
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
      </div>

      {/*<h1 className="text-white text-4xl font-bold pb-2 pt-6 uppercase tracking-wide">
        COMING NEXT
      </h1>
      <ComingNext />*/}
    </main>
  );
};

export default EventsPage;
