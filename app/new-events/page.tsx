"use client"
import React, {useState, Suspense} from "react";
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
  { label: "blank", link: "" },
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

    const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const searchParams = useSearchParams();
    const tab = searchParams.get("tab") || "edit";

    const currentStepIndex = steps.findIndex((step) => step.link === tab);

  return (
    <>
      <div className="grid left-auto top-[-34em] right-auto place-items-center absolute w-full h-[50em] -z-10">
        <div className="w-full h-[60em] inset-0 radial-gradient-custom blur-3xl opacity-50"></div>
      </div>

      <form className="md:px-[3em] max-md:px-1 mb-[20em] flex flex-col gap-6">
        <div className="text-[1.4em] font-medium">create a new event</div>

        <div className="grid grid-cols-5 place-items-center py-6">
  {steps.map((item, index) => (
    <div key={index} className="grid w-full">
      <div className="w-full grid place-items-end gap-3">
        {/* Progress Line */}
        <div
          className={`w-full h-[2px] ${
            index <= currentStepIndex ? "bg-primary h-[2px]" : "bg-[#ffffff36]"
          }`}
        ></div>

        {/* Step Circle */}
        <div className="grid place-items-center gap-2 mr-[-1.2em] z-30">
        {item.label != "blank" && <button
          type="button"
          className="bg-white h-4 w-4 rounded-full grid place-items-center mt-[-1.6em]"
        >
          <div
            className={`h-2 w-2 rounded-full ${
              index <= currentStepIndex ? "bg-gray-300" : "bg-gray-300"
            }`}
          ></div>
        </button>}

        {/* Label */}
        <p className={`${item.label == "blank" ? "text-transparent" : ""}`}>{item.label}</p>
        </div>
        
      </div>
    </div>
  ))}
</div>


        {tab === "edit" && <EditSection 
          eventData={eventData} 
          setEventData={setEventData} 
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />}

        {tab === "banner" && <BannerSection />}
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
