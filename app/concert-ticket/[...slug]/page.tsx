"use client";
import React, {useState, useEffect, Suspense} from "react";
import useAxios from "@/app/hooks/useAxios";
import {useUser} from "@/app/context/UserContext";
import ConcertTicket from "@/components/concert-ticket";
import { Event } from "@/constant/customTypes";
import { useParams } from "next/navigation";
import { formatToHumanReadableDate, formatToHumanReadableTime} from "@/app/utils/utilities";

 function Home() {
  const { sendRequest } = useAxios();
  const { user } = useUser();
  const params = useParams();
  const [event, setEvent] = useState<Event | null>(null);
  const slug = params.slug as string[];
  const eventId = slug[0]; // First parameter

  useEffect(() => {

      const fetchEvents = async () => {
        try {
          console.log("Fetching event details for eventId:", eventId);
          const response = await sendRequest({
            url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/events/${eventId}`,
            method: "GET",
            headers: {
              Authorization: `Bearer ${user?.token}`,
            },
          });
  
          if (response.status === "success") {
            const eventData = response.data.event;
            setEvent(eventData);
  
          } else {
            console.error("Failed to fetch event details:", response.message);
          }
        } catch (error) {
          console.error("Error fetching event details", error);
        }
      };

  
      fetchEvents();
    }, []);




  return (
    <main className="flex min-h-screen flex-col items-center justify-start pt-16 px-5">
      <ConcertTicket
        eventName={event?.title?? ""}
        eventCreator={event?.organiser?.name?? ""}
        date={formatToHumanReadableDate(event?.startDate ?? "")}
        time={formatToHumanReadableTime(event?.startTime ?? "")}
        venue={event?.location ?? ""}
        ticketType={event?.tickets?.[0]?.name ?? ""}
        ticketHolder={`${user.name?? ""}`}
        //ticketNumber="ETK-2049-AFRO"
      />
    </main>
  );
}


export default function Page() {
  return (
    <Suspense fallback={<div></div>}>
      <Home />
    </Suspense>
  );
}
