"use client";
import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import EditSection from "./tabs/EditSection";
import BannerSection from "./tabs/BannerSection";
import TickettingSection from "./tabs/TickettingSection";
import ReviewSection from "./tabs/ReviewSection";
import { EventData, TimeData } from "@/constant/customTypes";
import { useUser } from "../context/UserContext";
import { useRouter } from "next/navigation";
import useAxios from "../hooks/useAxios";

const steps = [
  { label: "Edit", link: "edit" },
  { label: "Banner", link: "banner" },
  { label: "Ticketting", link: "ticketting" },
  { label: "Review", link: "review" },
  { label: "blank", link: "review" },
];

function CreateEventPage() {

  const [pageIndex, setPageIndex] = useState(0);
  const { user } = useUser();
  const router = useRouter();
  const { sendRequest } = useAxios();
  const [image, setImage] = useState<File | null>(null);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const searchParams = useSearchParams();
  const [preview, setPreview] = useState<string | null>(null); // For previewing the image
  const tab = searchParams.get("tab") || "edit";

  const [eventData, setEventData] = useState<EventData>({
    title: "",
    description: "",
    categoryId: "",
    startDate: "",
    endDate: "",
    accessType: "",
    eventType: "",
    bannerImage: "",
    //category: "",
    startTime: "",
    endTime: "",
    location: "",
    tickets: [{ name: "", price: 0, description: "", quantity: 0}],
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

  const currentStepIndex = steps.findIndex((step) => step.link === tab);

  const uploadImage = async () => {
    if (!image) {
      alert("Please select an image to upload.");
      return;
    }

    try {
      // Create a FormData object to send the image file
      const formData = new FormData();
      formData.append("file", image); // Assuming `image` is a File object

      // Use the base URL from the environment variable
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    if (!baseUrl) {
      throw new Error("Base URL is not defined in the environment variables.");
    }

    console.log("uploading image to:", `${baseUrl}/media/upload`);
    console.log(user?.token, "user token")

      // Make the POST request to upload the image
      const response = await sendRequest({
        url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/media/upload`,
        method: "POST",
        headers: { 
          "Content-Type": "multipart/form-data", 
          "Authorization": `Bearer ${user?.token}`
        },
        body: formData,
      });

      console.log(response, "response data")
      // Extract the URL from the response
      const imageUrl = response.url;

      // Update the eventData state with the returned URL
      setEventData((prev) => ({
        ...prev,
        bannerImage: imageUrl,
      }));

      console.log("Image uploaded successfully:", imageUrl);
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Failed to upload the image. Please try again.");
    }
  };

  return (
    <>
      <div className="top-[-34em] grid place-items-center absolute w-[85%] mx-auto h-[50em] -z-10">
        <div className="w-full h-[60em] inset-0 radial-gradient-custom blur-3xl opacity-50"></div>
      </div>

      <form className="md:w-[80%] max-md:px-1 mb-8 md:mb-[14em] flex flex-col gap-2 md:gap-6 md:mx-auto">
        <div className="text-[1.4em] font-medium">create a new event</div>

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
                  onClick={() => router.push(`?tab=${item.link}`)}
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
        {tab === "review" && <ReviewSection preview={preview} eventData={eventData} uploadImage={uploadImage}/>}
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
