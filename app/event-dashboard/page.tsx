"use client";
import { useState, useEffect } from "react";
import EventsTab from "./EventsTab";
import InsightsTab from "./InsightsTab";
import PaymentTab from "./PaymentTab";
import TabButton from "./components/TabButton";

export default function EventDashboard() {
  const [activeTab, setActiveTab] = useState("events");
  const [isLoaded, setIsLoaded] = useState(false);

  // Load saved
  useEffect(() => {
    const savedTab = localStorage.getItem("eventDashboardTab");
    if (savedTab) {
      setActiveTab(savedTab);
    }
    setIsLoaded(true);
  }, []);

  // Save tab
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    localStorage.setItem("eventDashboardTab", tab);
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] relative">
      {/* Background */}
      <div className="bg-[#1C1E20]/40 absolute inset-0" />
      <div
        className="absolute inset-0 right-0 left-0"
        style={{
          backgroundImage: `url('/texture.png')`,
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
          opacity: 0.25,
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* EventTabToggle component */}
        <div className="pt-24 sm:pt-28 md:pt-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-8">
            <div className="relative w-full">
              <div className="flex gap-2 md:gap-3 relative justify-start">
                <TabButton
                  label="Events"
                  isActive={activeTab === "events"}
                  onClick={() => handleTabChange("events")}
                  width="auto"
                />

                <TabButton
                  label="Payments"
                  isActive={activeTab === "payments"}
                  onClick={() => handleTabChange("payments")}
                  width="auto"
                />

                <TabButton
                  label="Insights"
                  isActive={activeTab === "insights"}
                  onClick={() => handleTabChange("insights")}
                  width="auto"
                />
              </div>

              {/* Horizontal line*/}
              <div className="absolute left-1/2 -translate-x-1/2 w-screen max-w-[1508.5px] h-0 border-t border-[#91949924] z-[1] -bottom-[22px]" />
            </div>
          </div>
        </div>

        {isLoaded && (
          <>
            {activeTab === "events" && <EventsTab />}
            {activeTab === "insights" && <InsightsTab />}
            {activeTab === "payments" && <PaymentTab />}
          </>
        )}
      </div>
    </div>
  );
}
