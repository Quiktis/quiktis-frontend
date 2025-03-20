import React from "react";
import EventsCard from "./EventsCard";
import { Events } from "@/constant/events";

// Define the type for an event object
type EventType = {
  _id?: string; 
  image?: string;
  alt?: string;
  heading?: string;
  title?: string;
  description?: string;
  country?: string;
  venue?: any;
  price?: string;
  slug?: string;
  dateTime?: string;
};

interface AllEventsProps {
  title?: string;
  events?: EventType[];
}

const formatDate = (dateString: string): string => {
  if (!dateString) return "Invalid date";

  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const AllEvents: React.FC<AllEventsProps> = ({ title, events = Events }) => {
  return (
    <div className="flex flex-col gap-5 mt-10">
      {title && <h1 className="uppercase text-[40px] font-bold">{title}</h1>}
      <div className="w-full flex flex-wrap gap-10 mt-10 justify-center">
        {events.map((eventItem, index) => (
          <EventsCard
            key={index}
            eventId={eventItem._id?? ""}
            image={eventItem.image?? "/africa.png"}
            alt={eventItem.alt?? ""}
            heading={eventItem.title?? ""}
            title={eventItem.title?? ""}
            description={eventItem.description?? ""}
            country={eventItem.venue? `${eventItem.venue.name}` : ""}
            price={eventItem.price?? ""}
            slug={eventItem.slug?? ""}
            date={eventItem.dateTime? formatDate(eventItem.dateTime): ""}
            onClick={() => {}}
          />
        ))}
      </div>
    </div>
  );
};

export default AllEvents;
