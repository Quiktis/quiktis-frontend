'use client'
import React from 'react';
import { useState, useEffect } from 'react';
import { Event } from '@/constant/customTypes';
import useAxios from '@/app/hooks/useAxios';
import NewEventCard from './search/NewEventCard';

export default function UpcomingEvents() {

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
    <section className="py-[3.5em]">
        <h1 className="text-3xl font-bold mb-6">Upcoming Events</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {events.length > 0 && events.map((event, index) => (
            <NewEventCard
              key={index}
              image={event.bannerImage ?? ""}
              title={event.title} 
              event={event}
              description={event.description ?? ""}
              price={event.tickets?.[0]?.price ?? ""}
              eventId={event.eventId ?? ""}
              startDate={event.startDate ?? ""}
              startTime={event.startTime ?? ""}
              eventSlug={event.slug ?? ""}
              location={event.location ?? ""}
            />
          ))}
        </div>
      </section>
  )
}
