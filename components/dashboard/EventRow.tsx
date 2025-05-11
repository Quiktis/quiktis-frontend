// components/dashboard/EventRow.tsx
import React from "react";

export type EventStatus = "Upcoming" | "Live" | "Ended" | "Canceled";

export interface Event {
  id: string;
  name: string;
  dateTime: string;
  location: string;
  revenue: string;
  ticketTypes: string;
  status: EventStatus;
}

interface EventRowProps {
  event: Event;
}

const statusStyles: Record<EventStatus, string> = {
  Upcoming: "text-green-500",
  Live: "text-red-500",
  Ended: "text-white",
  Canceled: "text-white",
};

const EventRow: React.FC<EventRowProps> = ({ event }) => (
  <tr>
    <td className="w-3/12 px-1 md:px-4 py-1 md:py-3 whitespace-nowrap">
      {event.name}
    </td>
    <td className="w-2/12 px-1 md:px-4 py-1 md:py-3 whitespace-nowrap">
      {event.dateTime}
    </td>
    <td className="w-2/12 px-1 md:px-4 py-1 md:py-3 whitespace-nowrap">
      {event.location}
    </td>
    <td className="w-2/12 px-1 md:px-4 py-1 md:py-3 whitespace-nowrap text-center">
      {event.revenue}
    </td>
    <td className="w-2/12 px-1 md:px-4 py-1 md:py-3 whitespace-nowrap text-center">
      {event.ticketTypes}
    </td>
    <td className="w-1/12 px-1 md:px-4 py-1 md:py-3 whitespace-nowrap">
      <span
        className={`
          inline-flex items-center
          text-[8px] md:text-xs font-medium
          ${statusStyles[event.status]}
        `}>
        {event.status}
      </span>
    </td>
  </tr>
);

export default EventRow;
