import axios from "axios";
import { NewEventData } from "@/constant/customTypes";

function formatDate(date: Date | null): string | null {
  if (!date) return null;
  return date.toISOString().split("T")[0]; // yyyy-mm-dd
}

function formatTime(time: any): string | null {
  if (!time) return null;
  const hour24 =
    time.period === "PM" && time.hour < 12
      ? time.hour + 12
      : time.period === "AM" && time.hour === 12
      ? 0
      : time.hour;
  return `${String(hour24).padStart(2, "0")}:${String(time.minute).padStart(2, "0")}`;
}

export const createNewEvent = async (eventData: NewEventData) => {
  // Normalize tickets
  const normalizedTickets = (eventData.tickets || []).map((ticket) => {
    if (eventData.eventType === "free") {
      return {
        ...ticket,
        price: 0,
        quantity: 100000,
      };
    }
    return {
      ...ticket,
      price: ticket.price || 0,
      quantity: 100000, // fixed quantity for all
    };
  });

  const payload = {
    eventName: eventData.eventName,
    description: eventData.description,
    startDate: formatDate(eventData.startDate),
    endDate: formatDate(eventData.endDate),
    startTime: formatTime(eventData.startTime),
    endTime: formatTime(eventData.endTime),
    location: eventData.location,
    eventType: eventData.eventType,
    coverImage: eventData.coverImage || "https://placehold.co/600x400",
    eventTheme: eventData.eventTheme,
    approvalRequired: eventData.approvalRequired,
    eventCapacity: eventData.eventCapacity,
    tickets: normalizedTickets,
  };

  console.log(payload)

  const res = await axios.post("/api/events", payload, {
    withCredentials: true, // ensures auth cookie/token is sent
  });

  return res.data;
};
