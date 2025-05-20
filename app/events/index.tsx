"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { IoTicketSharp } from "react-icons/io5";
import { FaLongArrowAltRight } from "react-icons/fa";
import NewHappeningSection from "@/components/eventsexplore/NewHappeningSection";
import NewEventCard from "@/components/search/NewEventCard";
import Button from "@/components/ui/Button";
import SearchBar from "@/components/ui/SearchBar";
import GlowStyles from "@/components/eventsexplore/GlowWrapper.module.css";
import { relatedEvents as events } from "@/constant/relatedEvents";
import { Event } from "@/constant/customTypes";

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
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<Event[]>([])
  const [loading, setLoading] = useState(false)


  // Debounced search effect
    useEffect(() => {
      const delayDebounce = setTimeout(() => {
        if (query.trim()) {
          fetchEvents(query)
        } else {
          setResults([])
        }
      }, 500) // 500ms debounce
  
      return () => clearTimeout(delayDebounce)
    }, [query])
  
    const fetchEvents = async (searchTerm: any) => {
      try {
        setLoading(true)
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/events/search?q=${encodeURIComponent(searchTerm)}`)
        const data = await response.json()
        if (data?.status === 'success') {
          setResults(data.data.events || [])
        }
      } catch (error) {
        console.error('Error fetching events:', error)
      } finally {
        setLoading(false)
      }
    }

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
            onBlur={(e) => setLoading(false)}
            />
            {query.trim() && (
                  <div className="mt-6 space-y-[0.4em] text-left w-full lg:max-w-[32em] h-fit  bg-[#202020] p-2 rounded-md shadow-lg">
                    {loading && <p className="text-white p-4">Searching...</p>}
                    {!loading && results.length > 0 && (
                      <div className="grid gap-4">
                        {results.slice(0, 4).map((event) => (
                          <Link key={event.id} href={`/event-viewing/${event.id}`}>
                            <div className=" p-3 rounded-lg cursor-pointer transition hover:bg-[#ffffff0e]">
                              <h3 className="text-white font-semibold">{event.title}</h3>
                              <p className="text-gray-300 text-sm">{event.location}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                    {!loading && query.trim() && results.length === 0 && (
                      <p className="text-gray-400 p-4">No events found.</p>
                    )}
                  </div>)}
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
