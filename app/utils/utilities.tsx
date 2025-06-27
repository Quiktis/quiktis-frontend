import { v4 as uuidv4 } from 'uuid';
import { Ticket } from '@/constant/customTypes';

const generateId = () => {
    const newId = uuidv4();
    return newId
  };


export { generateId }





export function calculateTotalRevenue(tickets: Ticket[]): string {
  let totalRevenue = 0;

  for (const ticket of tickets) {
    const revenue = ticket.price * ticket.soldCount;
    totalRevenue += revenue;
  }

  return (`₦${totalRevenue}`);
}

export function getConcatenatedTicketNames(tickets: { name: string }[]): string {
  const concatenated = tickets.map(ticket => ticket.name).join(", ");
  
  if (concatenated.length <= 26) {
    return concatenated;
  }

  return concatenated.slice(0, 8) + "...";
}

export function getConcatenatedTicketPrices(tickets: { price: any }[]): string {
  const concatenated = tickets.map(ticket => ticket.price).join(", ");
  
  if (concatenated.length <= 26) {
    return concatenated;
  }

  return concatenated.slice(0, 8) + "...";
}

export function formatToHumanReadableDate(dateString: string, time?: string): string {
  const date = new Date(dateString);

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  const formattedDate = date.toLocaleDateString(undefined, options);

  // Only include time if provided
  if (time) {
    // Remove leading zero from the hour part (e.g., "04:09 AM" => "4:09 AM")
    const cleanedTime = time.replace(/^0/, "");
    return `${formattedDate} - ${cleanedTime}`;
  }

  return formattedDate;
}


export function formatToHumanReadableTime(time: string): string {

    // Remove leading zero from the hour part (e.g., "04:09 AM" => "4:09 AM")
    const cleanedTime = time.replace(/^0/, "");
    return `${cleanedTime}`;
}


export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength) + '...';
}