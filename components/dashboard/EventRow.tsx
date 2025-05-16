import React from "react";

export type EventStatus = "Upcoming" | "Live" | "Ended" | "Canceled";


// Define the Ticket type
type Ticket = {
  id: string;
  createdAt: string;
  name: string;
  price: number;
  quantity: number;
  soldCount: number;
  isActive: boolean;
  saleStartDate: string | null;
  saleEndDate: string | null;
};

// Function to calculate total revenue
function calculateTotalRevenue(tickets: Ticket[]): string {
  let totalRevenue = 0;

  for (const ticket of tickets) {
    const revenue = ticket.price * ticket.soldCount;
    totalRevenue += revenue;
  }

  return (`₦${totalRevenue}`);
}

function getConcatenatedTicketNames(tickets: { name: string }[]): string {
  const concatenated = tickets.map(ticket => ticket.name).join(", ");
  
  if (concatenated.length <= 26) {
    return concatenated;
  }

  return concatenated.slice(0, 8) + "...";
}

function formatToHumanReadableDate(dateString: string, time: string): string {
  const date = new Date(dateString);

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  const formattedDate = date.toLocaleDateString(undefined, options);

  // Clean up the time string — remove leading "0" if present
  const cleanedTime = time.replace(/^0/, "");

  return `${formattedDate} — ${cleanedTime}`;
}





export interface Event {
  title: string;
  id: string;
  name: string;
  startDate: string;
  startTime: string;
  location: string;
  revenue: string;
  ticketTypes: string;
  status: EventStatus;
  tickets: Ticket[];
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
      {event.title}
    </td>
    <td className="w-2/12 px-1 md:px-4 py-1 md:py-3 whitespace-nowrap">
      {formatToHumanReadableDate(event.startDate, event.startTime)}
    </td>
    <td className="w-2/12 px-1 md:px-4 py-1 md:py-3 whitespace-nowrap">
      {event.location}
    </td>
    <td className="w-2/12 px-1 md:px-4 py-1 md:py-3 whitespace-nowrap text-center">
      {calculateTotalRevenue(event.tickets)}
    </td>
    <td className="w-2/12 px-1 md:px-4 py-1 md:py-3 whitespace-nowrap text-center">
      {getConcatenatedTicketNames(event.tickets)}
    </td>
    <td className="w-1/12 px-1 md:px-4 py-1 md:py-3 whitespace-nowrap">
      <span
        className={`
          inline-flex items-center
          text-[8px] md:text-xs font-medium
          ${statusStyles[event.status]?? ""}
        `}>
        {event.status?? ""}
      </span>
    </td>
  </tr>
);

export default EventRow;
