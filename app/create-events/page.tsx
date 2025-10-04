"use client";
import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import EditSection from "./tabs/EditSection";
import BannerSection from "./tabs/BannerSection";
import TickettingSection from "./tabs/TickettingSection";
import ReviewSection from "./tabs/ReviewSection";
import { EventData, TimeData } from "@/constant/customTypes";
import { useUser } from "../context/UserContext";

const steps = [
  { label: "Edit", link: "edit" },
  { label: "Banner", link: "banner" },
  { label: "Ticketting", link: "ticketting" },
  { label: "Review", link: "review" },
  { label: "blank", link: "review" },
];

const STORAGE_KEY = "create-event-data";

function CreateEventPage() {
  const [pageIndex, setPageIndex] = useState(0);
  const { user } = useUser();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const searchParams = useSearchParams();
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string>(""); // validation error display
  const tab = searchParams.get("tab") || "edit";

  // 🔹 Load eventData from localStorage or default
  const [eventData, setEventData] = useState<EventData>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch {
          return defaultEventData();
        }
      }
    }
    return defaultEventData();
  });

  function defaultEventData(): EventData {
    return {
      title: "",
      description: "",
      categoryId: "24ea55de-3ee8-4a6f-9697-051739eb446f",
      startDate: "",
      endDate: "",
      accessType: "free",
      eventType: "single",
      bannerImage: "",
      startTime: "",
      endTime: "",
      location: "",
      tickets: [{ name: "", price: 0, description: "", quantity: 1 }],
    };
  }

  const [timeData, setTimeData] = useState<TimeData>({
    startTime: { hour: null, minute: null, period: null },
    endTime: { hour: null, minute: null, period: null },
  });

  // 🔹 Persist eventData to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(eventData));
  }, [eventData]);

  const handleEventDataChange = (name: string, value: any) => {
    setEventData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTimeChange = (
    field: "startTime" | "endTime",
    timeField: "hour" | "minute" | "period",
    value: string | number | null
  ) => {
    setTimeData((prev) => {
      const updatedField = { ...prev[field], [timeField]: value };

      const formattedTime = `${
        updatedField.hour ? String(updatedField.hour).padStart(2, "0") : "--"
      }:${updatedField.minute ? String(updatedField.minute).padStart(2, "0") : "--"} ${
        updatedField.period || ""
      }`;

      setEventData((prevEventData) => ({
        ...prevEventData,
        [field]: formattedTime.trim(),
      }));

      return { ...prev, [field]: updatedField };
    });
  };

  const currentStepIndex = steps.findIndex((step) => step.link === tab);

  // 🔹 Validation function
  const validateEventData = (): boolean => {
    if (!eventData.title) return setError("Title is required"), false;
    if (!eventData.description) return setError("Description is required"), false;
    if (!eventData.startDate) return setError("Start date is required"), false;
    if (!eventData.endDate) return setError("End date is required"), false;
    if (!eventData.startTime) return setError("Start time is required"), false;
    if (!eventData.endTime) return setError("End time is required"), false;
    if (!eventData.location) return setError("Location is required"), false;
    if (!image) return setError("Banner image is required"), false;

    // tickets validation
    if (!eventData.tickets.length || !eventData.tickets[0].name) {
      return setError("At least one ticket with a name is required"), false;
    }
    setError("");
    return true;
  };

  const createEvent = async (): Promise<void> => {
    if (!validateEventData()) return;

    setLoading(true);
    const proxyFormData = new FormData();
    if (image) proxyFormData.append("files", image);
    proxyFormData.append("title", eventData.title);
    proxyFormData.append("categoryId", eventData.categoryId);
    proxyFormData.append("description", eventData.description);
    proxyFormData.append("accessType", eventData.accessType);
    proxyFormData.append("eventType", eventData.eventType);
    proxyFormData.append("startDate", eventData.startDate);
    proxyFormData.append("endDate", eventData.endDate);
    proxyFormData.append("location", eventData.location);
    proxyFormData.append("startTime", eventData.startTime);
    proxyFormData.append("endTime", eventData.endTime);
    proxyFormData.append("tickets", JSON.stringify(eventData.tickets));

    try {
      const createEventResponse = await fetch("/api/events", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
        body: proxyFormData,
      });

      const result = await createEventResponse.json();

      if (result.status === "success") {
        // clear storage after success
        localStorage.removeItem(STORAGE_KEY);
        router.push("/my-events");
      } else {
        alert(result.message || "Failed to create event");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to create event");
    }
    setLoading(false);
  };

  return (
    <>
      <form className="w-full lg:w-[80%] mb-8 flex flex-col gap-6 mx-auto">
        <div className="text-[1.4em] font-medium">Create a New Event</div>

        {error && <div className="text-red-500 text-sm">{error}</div>}

        {/* Steps Progress */}
        <div className="grid grid-cols-5 place-items-center py-3 pb-10">
          {steps.map((item, index) => (
            <div key={index} className="grid w-full">
              <div className="w-full grid place-items-end gap-3">
                <div
                  className={`w-full h-[2px] ${
                    index <= currentStepIndex ? "bg-primary" : "bg-[#ffffff36]"
                  }`}
                ></div>
                <div className="grid place-items-center gap-2">
                  <div
                    className={`${
                      item.label === "blank" ? "bg-transparent" : "bg-white"
                    } h-4 w-4 rounded-full`}
                  ></div>
                  <p
                    className={`${
                      item.label === "blank"
                        ? "text-transparent"
                        : index <= currentStepIndex
                        ? ""
                        : "text-[#6F6F6F]"
                    } font-medium max-md:hidden`}
                  >
                    {item.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {tab === "edit" && (
          <EditSection
            setPageIndex={setPageIndex}
            timeData={timeData}
            eventData={eventData}
            setEventData={setEventData}
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
            handleTimeDataChange={handleTimeChange}
            handleEventDataChange={handleEventDataChange}
          />
        )}
        {tab === "banner" && (
          <BannerSection preview={preview} setPreview={setPreview} setImage={setImage} />
        )}
        {tab === "ticketting" && (
          <TickettingSection eventData={eventData} handleEventDataChange={handleEventDataChange} />
        )}
        {tab === "review" && (
          <ReviewSection
            preview={preview}
            eventData={eventData}
            loading={loading}
            onCreateEvent={createEvent}
          />
        )}
      </form>
    </>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div></div>}>
      <CreateEventPage />
    </Suspense>
  );
}
