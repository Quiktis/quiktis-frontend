"use client";

import { useState } from "react";
import { TimeData, TimeUnit } from "@/constant/customTypes";
import { Ticket } from "../types";
import { useStore } from "../lib/store";
import { Mutations } from "../../ApiServices/mutations";
import CoverImageUploader from "./components/CoverImageUploader";
import ThemeSelector from "./components/ThemeSelector";
import CreateEventForm from "./components/CreateEventForm";

// 🎨 Theme colors for event theme picker
const themeColors = [
  { name: "Orange", color: "#FF6B35" },
  { name: "Blue", color: "#4A90E2" },
  { name: "Green", color: "#7ED321" },
  { name: "Purple", color: "#9013FE" },
  { name: "Pink", color: "#F5A623" },
  { name: "Red", color: "#D0021B" },
  { name: "Teal", color: "#50E3C2" },
  { name: "Indigo", color: "#5856D6" },
];

const now = new Date();

type EventData = {
  eventName: string;
  description: string;
  startDate: Date | null;
  endDate: Date | null;
  startTime: TimeUnit | null;
  endTime: TimeUnit | null;
  location: string;
  eventType: "paid" | "free" | string;
  coverImage?: File | null | string | any;
  eventTheme?: string;
  approvalRequired?: boolean;
  eventCapacity?: number;
  tickets?: Ticket[];
};

// Utility to format Date → yyyy-mm-dd
const formatDate = (date: Date | null) => {
  if (!date) return "";
  return date.toISOString().split("T")[0];
};

// Utility to convert time object → "HH:mm AM/PM"
const formatTime = (time: TimeUnit | null): string => {
  if (!time) return "";

  const hour = time.hour ?? 0;
  const minute = time.minute ?? 0;
  const period = time.period ?? "AM";

  const formattedHour = hour.toString().padStart(2, "0");
  const formattedMinute = minute.toString().padStart(2, "0");

  return `${formattedHour}:${formattedMinute} ${period}`;
};

export default function CreateEventPage() {
  const [eventData, setEventData] = useState<EventData>({
    eventName: "",
    startDate: now,
    startTime: null,
    endDate: now,
    endTime: null,
    location: "",
    description: "",
    eventType: "free",
    approvalRequired: false,
    eventCapacity: 0,
    coverImage: null,
    eventTheme: themeColors[0].color,
    tickets: [],
  });

  const { createEvent } = Mutations();
  const { loading } = useStore();
  const [eventSettings, setEventSettings] = useState("");
  const [showThemeSelector, setShowThemeSelector] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [ticket, setTicket] = useState<Ticket>({
    name: "",
    description: "",
    price: 0,
    quantity: 0,
  });

  // ---------------------
  // Handlers
  // ---------------------
  const handleInputChange = (
    field: keyof EventData,
    value: string | boolean | number | null | File
  ) => {
    setEventData((prev) => ({
      ...prev,
      [field]: value as any,
    }));
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleInputChange("coverImage", file);

      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleThemeSelect = (color: string) => {
    handleInputChange("eventTheme", color);
    setShowThemeSelector(false);
  };

  const handleTicketChange = (field: keyof Ticket, value: string | number) => {
    setTicket((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const addTicket = () => {
    if (eventData.eventType === "free") {
      if (!ticket.name) return;
      setEventData((prev: any) => ({
        ...prev,
        tickets: [...(prev.tickets || []), ticket],
      }));
      setTicket({ name: "", description: "", price: 0, quantity: 100000 });
    } else {
      if (!ticket.name || !ticket.price) return;
      setEventData((prev: any) => ({
        ...prev,
        tickets: [...(prev.tickets || []), ticket],
      }));
      setTicket({ name: "", description: "", price: 0, quantity: 100000 });
    }
  };

  const removeTicket = (index: number) => {
    setEventData((prev: any) => ({
      ...prev,
      tickets: prev.tickets?.filter((_: Ticket, i: number) => i !== index),
    }));
  };

  // ---------------------
  // Submit handler
  // ---------------------
  const handleSubmit = () => { 
    // Validation 
    if (!eventData.eventName.trim()) return alert("Please enter an event name."); if (!eventData.startDate || !eventData.endDate) return alert("Please select start and end dates."); if (!eventData.startTime || !eventData.endTime) return alert("Please select start and end times."); if (!eventData.location.trim()) return alert("Please enter a location."); if (!eventData.description.trim()) return alert("Please add a description."); if (!eventData.eventType) return alert("Please choose if event is Free or Paid."); if ( eventData.eventType === "paid" && (!eventData.tickets || eventData.tickets.length === 0) ) return alert("Please add at least one ticket for a paid event."); if (!eventData.coverImage) return alert("Please upload a cover image."); const payload = { eventName: eventData.eventName, description: eventData.description, startDate: formatDate(eventData.startDate), endDate: formatDate(eventData.endDate), startTime: formatTime(eventData.startTime), endTime: formatTime(eventData.endTime), location: eventData.location, eventType: eventData.eventType as "free" | "paid", eventTheme: eventData.eventTheme, approvalRequired: eventData.approvalRequired, eventCapacity: eventData.eventCapacity, tickets: eventData.tickets?.map((t) => ({ ...t, description: t.description ?? "", })), file: eventData.coverImage as File, // 👈 pass File for upload 
    }; createEvent(payload); };


  return (
    <div className="relative min-h-screen text-white max-md:mb-[4em]">
      <div className="flex flex-col gap-4 lg:grid grid-cols-[1fr_1.5fr] lg:gap-8 p-1 md:p-8 w-[95%] lg:w-[90%] xl:max-w-[80%] mx-auto pt-[6em] md:pt-[10em]">
        {/* Left Column */}
        <div className="w-full lg:w-[300px] xl:w-[400px] space-y-6">
          <CoverImageUploader
            imagePreview={imagePreview}
            handleImageUpload={handleImageUpload}
          />

          <ThemeSelector
            showThemeSelector={showThemeSelector}
            setShowThemeSelector={setShowThemeSelector}
            handleThemeSelect={handleThemeSelect}
            eventTheme={eventData.eventTheme}
            themeColors={themeColors}
          />
        </div>

        {/* Right Column */}
        <CreateEventForm
          eventData={eventData}
          setEventData={setEventData}
          eventSettings={eventSettings}
          setEventSettings={setEventSettings}
          handleInputChange={handleInputChange}
          handleTicketChange={handleTicketChange}
          loading={loading}
          addTicket={addTicket}
          removeTicket={removeTicket}
          handleSubmit={handleSubmit}
          ticket={ticket}
        />
      </div>
    </div>
  );
}
