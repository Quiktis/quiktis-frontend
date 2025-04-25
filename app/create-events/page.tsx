"use client";
import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import EditSection from "./tabs/EditSection";
import BannerSection from "./tabs/BannerSection";
import TickettingSection from "./tabs/TickettingSection";
import ReviewSection from "./tabs/ReviewSection";

const steps = [
  { label: "Edit", link: "edit" },
  { label: "Banner", link: "banner" },
  { label: "Ticketting", link: "ticketting" },
  { label: "Review", link: "review" },
  { label: "blank", link: "review" },
];

type EventData = {
  eventTitle: string;
  description: string;
  date: string;
  ticketType: string;
  eventImageUrl: string;
  category: string;
  startTime: string;
  location: string;
  price: string;
  websiteUrl: string;
};

function CreateEventPage() {
  const [eventData, setEventData] = useState<EventData>({
    eventTitle: "",
    description: "",
    date: "",
    ticketType: "",
    eventImageUrl: "",
    category: "",
    startTime: "",
    location: "",
    price: "",
    websiteUrl: "",
  });

  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const searchParams = useSearchParams();
  const tab = searchParams.get("tab") || "edit";

  const currentStepIndex = steps.findIndex((step) => step.link === tab);

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
                      type="button"
                      className={`${ item.label === "blank" ? "bg-transparent max-md:hidden" :"bg-white"} h-4 w-4 rounded-full grid place-items-center mt-[-1.6em]`}
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
                      item.label == "blank" ? "text-transparent" : index <= currentStepIndex ? "" : "text-[#6F6F6F]"}
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
            eventData={eventData}
            setEventData={setEventData}
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
          />
        )}

        {tab === "banner" && <BannerSection setSelectedImage={setSelectedImage}/>}
        {tab === "ticketting" && <TickettingSection />}
        {tab === "review" && <ReviewSection />}
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
