"use client";
import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import EditSection from "./tabs/EditSection";
import BannerSection from "./tabs/BannerSection";
import TickettingSection from "./tabs/TickettingSection";
import ReviewSection from "./tabs/ReviewSection";
import { EventData, TimeData } from "@/constant/customTypes";
import { useUser } from "@/app/context/UserContext";
import { useRouter } from "next/navigation";
import useAxios from "@/app/hooks/useAxios";
import { usePathname } from "next/navigation";

interface TimeField {
  hour: number | null;
  minute: number | null;
  period: "AM" | "PM" | null;
}

const steps = [
  { label: "Edit", link: "edit" },
  { label: "Banner", link: "banner" },
  { label: "Ticketting", link: "ticketting" },
  { label: "Review", link: "review" },
  { label: "blank", link: "review" },
];

function EditEventPage() {

  const [pageIndex, setPageIndex] = useState(0);
  const { user } = useUser();
  const router = useRouter();
  const { sendRequest, loading } = useAxios();
  const [image, setImage] = useState<File | null>(null);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const searchParams = useSearchParams();
  const [preview, setPreview] = useState<string | null>(null); // For previewing the image
  const tab = searchParams.get("tab") || "edit";
  const pathname = usePathname();
  const eventId = pathname?.split("/edit-event/")[1];

  const [eventData, setEventData] = useState<EventData>({
    title: "",
    description: "",
    categoryId: "",
    startDate: "",
    endDate: "",
    accessType: "free",
    eventType: "single",
    bannerImage: "",
    //category: "",
    startTime: "",
    endTime: "",
    location: "",
    tickets: [{ name: "", price: 0, description: "", quantity: 1}],
  });

  const [timeData, setTimeData] = useState<TimeData>({
    startTime: {
      hour: null,
      minute: null,
      period: null,
    },
    endTime: {
      hour: null,
      minute: null,
      period: null,
    },
  });

  const handleEventDataChange = (name: string, value: any) => {
    setEventData((prev) => ({
      ...prev,
      [name]: value,
    }));
    //console.log("Event Data Updated:", eventData);
  };

  useEffect(() => {
    console.log("Event Data Updated:", eventData);
  }, [eventData]); // This runs whenever eventData changes

  useEffect(() => {
    console.log("Time Data Updated:", timeData);
  }, [timeData]);

  const handleTimeChange = (
    field: "startTime" | "endTime",
    timeField: "hour" | "minute" | "period",
    value: string | number | null
  ) => {
    setTimeData((prev) => {
      const updatedField = {
        ...prev[field],
        [timeField]: value,
      };

      // Format the time string incrementally
      const formattedTime = `${
        updatedField.hour ? String(updatedField.hour).padStart(2, "0") : "--"
      }:${
        updatedField.minute
          ? String(updatedField.minute).padStart(2, "0")
          : "--"
      } ${updatedField.period || ""}`;

      // Update the eventData state with the partial or complete time
      setEventData((prevEventData) => ({
        ...prevEventData,
        [field]: formattedTime.trim(),
      }));

      return {
        ...prev,
        [field]: updatedField,
      };
    });
  };

  useEffect(() => {
  const fetchEvents = async () => {
    console.log(eventId);

    try {
      const response = await sendRequest({
        url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/events/${eventId}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      });

      console.log("Events response:", response);

      if (response.status === "success") {
        const event = response.data.event;

        // ---- Map API response directly into your state ----
        setEventData({
          title: event.title,
          description: event.description,
          categoryId: event.category?.id ?? "",
          startDate: event.startDate,
          endDate: event.endDate,
          accessType: event.accessType,
          eventType: event.eventType,
          bannerImage: event.bannerImage,
          startTime: event.startTime,
          endTime: event.endTime,
          location: event.location,
          tickets:
            event.tickets?.map((ticket: any) => ({
              name: ticket.name,
              price: ticket.price,
              description: ticket.description ?? "",
              quantity: ticket.quantity,
            })) ?? [{ name: "", price: 0, description: "", quantity: 1 }],
        });

        setStartDate(event.startDate ? new Date(event.startDate) : null);
        setEndDate(event.endDate ? new Date(event.endDate) : null);
        setPreview(event.bannerImage ? event.bannerImage : "")

        // ---- Map times into timeData ----
        const parseTime = (timeStr: string): TimeField => {
          if (!timeStr) return { hour: null, minute: null, period: null };
          const [time, periodRaw] = timeStr.split(" "); // e.g. "04:06 AM"
          const [hourStr, minuteStr] = time.split(":");
          let period: "AM" | "PM" | null = null;
          if (periodRaw === "AM" || periodRaw === "PM") {
            period = periodRaw;
          }
          return {
            hour: parseInt(hourStr, 10),
            minute: parseInt(minuteStr, 10),
            period: period,
          };
        };

        setTimeData({
          startTime: parseTime(event.startTime),
          endTime: parseTime(event.endTime),
        });
      } else {
        console.error("Failed to fetch event details:", response.message);
      }
    } catch (error) {
      console.error("Error fetching event details", error);
    }
  };

  fetchEvents();
}, [eventId, user?.token]);

  const currentStepIndex = steps.findIndex((step) => step.link === tab);

  const uploadImage = async () => {
    if (loading) return;
    if (!image) {
      console.log("No new image uploaded, proceeding to update event");
      
    }

    let imageUrl = eventData.bannerImage

    try {
      // Create a FormData object to send the image file
      const formData = new FormData();
      if (image) {formData.append("files", image); // Assuming `image` is a File object

      // Use the base URL from the environment variable
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    if (!baseUrl) {
      throw new Error("Base URL is not defined in the environment variables.");
    }

    console.log("uploading image to:", `${baseUrl}/medias/upload`);
    console.log(user, "user data")
    console.log(user?.token, "user token")

      // Make the POST request to upload the image
      const response = await sendRequest({
        url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/medias/upload`,
        method: "POST",
        headers: { 
          //"Content-Type": "multipart/form-data", 
          "Authorization": `Bearer ${user?.token}`
        },
        body: formData,
      });

      console.log(response, "response data")
      console.log(response.status, "status")
      // Extract the URL from the response

      if (response.status !== "success") { 
        console.log(response, "- Event creation failed response")
        return alert("Failed to create event. Please try again.");}
      //const imageUrl = response.data.files[0].cloudinaryUrl


      // after uploading the image
imageUrl = response.data.files[0].cloudinaryUrl;}

// update state for future use (fine)
setEventData((prev) => ({
  ...prev,
  bannerImage: imageUrl,
}));

// Keep tickets in eventData, but exclude it from the payload body
const { tickets, ...rest } = eventData;

const eventPayload = {
  ...rest,
  bannerImage: imageUrl,
};

console.log("event payload that is being sent:", eventPayload);

const updateEventResponse = await sendRequest({
  url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/events/${eventId}`,
  method: "PATCH",
  headers: { 
    "Content-Type": "application/json", 
    "Authorization": `Bearer ${user?.token}`
  },
  body: eventPayload, // use the variable
});
      console.log(updateEventResponse, "response data")

      if (updateEventResponse.status === "success") router.push("/my-events");

      if (updateEventResponse.status !== "success") { 
        console.log(updateEventResponse, "- Event update operation failed response")
        alert("Failed to update event. Please try again.");}

      return;

    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Failed to update event. Please try again.");
      return;
    }
  };

  return (
    <>
      <div className="top-[-34em] grid place-items-center absolute w-[85%] mx-auto h-[50em] -z-10">
        <div className="w-full h-[60em] inset-0 radial-gradient-custom blur-3xl opacity-50"></div>
      </div>

      <form className="w-full lg:w-[80%] max-md:px-1 mb-8 md:mb-[14em] flex flex-col gap-2 md:gap-6 md:mx-auto">
        <div className="text-[1.4em] font-medium">Edit event</div>

        <div className="grid max-md:grid-cols-[1fr_1fr_1fr_1fr_0.7fr]  grid-cols-5 place-items-center py-3 pb-10">
          {steps.map((item, index) => (
            <div key={index} className="grid w-full">
              <div className="w-full grid place-items-end gap-3">
                {/* Progress Line */}
                <div
                  className={`w-full h-[2px] ${
                    index <= currentStepIndex
                      ? "bg-primary h-[2px]"
                      : "bg-[#ffffff36]"
                  }`}
                ></div>

                {/* Step Circle */}
                <div className="grid place-items-center gap-2 md:mr-[-1.75em] z-30">
                  <button
                  //onClick={() => router.push(`?tab=${item.link}`)}
                    type="button"
                    className={`${
                      item.label === "blank"
                        ? "bg-transparent max-md:hidden"
                        : "bg-white"
                    } h-4 w-4 rounded-full grid place-items-center mt-[-1.6em]`}
                  >
                    <div
                      className={`h-2 w-2 rounded-full ${
                        index <= currentStepIndex
                          ? "bg-gray-300"
                          : "bg-gray-300"
                      } ${item.label === "blank" ? "bg-transparent" : ""}`}
                    ></div>
                  </button>

                  {/* Label */}
                  <p
                    className={`${
                      item.label == "blank"
                        ? "text-transparent"
                        : index <= currentStepIndex
                        ? ""
                        : "text-[#6F6F6F]"
                    }
                    }  font-medium max-md:hidden`}
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
          <TickettingSection
            eventData={eventData}
            handleEventDataChange={handleEventDataChange}
          />
        )}
        {tab === "review" && <ReviewSection preview={preview} eventData={eventData} loading={loading} uploadImage={uploadImage}/>}
      </form>
    </>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div></div>}>
      <EditEventPage />
    </Suspense>
  );
}
