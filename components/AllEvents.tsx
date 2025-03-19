import React from "react";
import EventsCard from "./EventsCard";
import { Events } from "@/constant/events";

// Define the type for an event object
type EventType = {
  image: string;
  alt: string;
  heading: string;
  title: string;
  description: string;
  country: string;
  price: string;
  slug: string;
  date: string;
};

interface AllEventsProps {
  title?: string;
  event?: EventType[];
}

const AllEvents: React.FC<AllEventsProps> = ({ title, event = Events }) => {
  return (
    <div className="flex flex-col gap-5 mt-10">
      {title && <h1 className="uppercase text-[40px] font-bold">{title}</h1>}
      <div className="w-full flex flex-wrap gap-10 mt-10 justify-center">
        {event.map((eventItem, index) => (
          <EventsCard
            key={index}
            image={eventItem.image}
            alt={eventItem.alt}
            heading={eventItem.heading}
            title={eventItem.title}
            description={eventItem.description}
            country={eventItem.country}
            price={eventItem.price}
            slug={eventItem.slug}
            date={eventItem.date}
            onClick={() => {}}
          />
        ))}
      </div>
    </div>
  );
};

export default AllEvents;
