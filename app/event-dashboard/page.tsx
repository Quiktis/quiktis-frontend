"use client";
import { useState, useEffect } from "react";
import EventsTab from "./EventsTab";
import InsightsTab from "./InsightsTab";
import PaymentTab from "./PaymentTab";

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
                <button
                  onClick={() => handleTabChange("events")}
                  className="relative"
                >
                  <div
                    className="transition-colors cursor-pointer flex items-center justify-center px-5 h-[52px] md:h-[43px] md:w-[102px]"
                    style={{
                      borderRadius: "7.11px",
                      background: "#FFFFFF05",
                      backdropFilter: "blur(20.307693481445312px)",
                    }}
                  >
                    <span
                      className={"text-[18px] md:text-[20.31px]"}
                      style={{
                        fontFamily: "Inter",
                        fontWeight: 500,
                        lineHeight: "100%",
                        letterSpacing: "0%",
                        verticalAlign: "middle",
                        color: activeTab === "events" ? "#FFFFFF" : "#666666",
                      }}
                    >
                      Events
                    </span>
                  </div>
                  {/* Active underline */}
                  {activeTab === "events" && (
                    <div
                      className="absolute left-0 w-full h-[2px] bg-white z-[2]"
                      style={{ bottom: "-22px" }}
                    />
                  )}
                </button>

                {/* Payments Button */}
                <button
                  onClick={() => handleTabChange("payments")}
                  className="relative"
                >
                  <div
                    className="transition-colors cursor-pointer flex items-center justify-center px-5 h-[52px] md:h-[42.31px] md:w-[155.69px]"
                    style={{
                      borderRadius: "7.11px",
                      background: "#FFFFFF05",
                      backdropFilter: "blur(20.307693481445312px)",
                    }}
                  >
                    <span
                      className={"text-[18px] md:text-[20.31px]"}
                      style={{
                        fontFamily: "Inter",
                        fontWeight: 500,
                        lineHeight: "100%",
                        letterSpacing: "0%",
                        verticalAlign: "middle",
                        color: activeTab === "payments" ? "#FFFFFF" : "#666666",
                      }}
                    >
                      Payments
                    </span>
                  </div>
                  {/* Active underline */}
                  {activeTab === "payments" && (
                    <div
                      className="absolute left-0 w-full h-[2px] bg-white z-[2]"
                      style={{ bottom: "-22px" }}
                    />
                  )}
                </button>

                {/* Insights Button */}
                <button
                  onClick={() => handleTabChange("insights")}
                  className="relative"
                >
                  <div
                    className="transition-colors cursor-pointer flex items-center justify-center px-5 h-[52px] md:h-[43px] md:w-[132px]"
                    style={{
                      borderRadius: "7.11px",
                      background: "#FFFFFF05",
                      backdropFilter: "blur(20.307693481445312px)",
                    }}
                  >
                    <span
                      className={"text-[18px] md:text-[20.31px]"}
                      style={{
                        fontFamily: "Inter",
                        fontWeight: 500,
                        lineHeight: "100%",
                        letterSpacing: "0%",
                        verticalAlign: "middle",
                        color: activeTab === "insights" ? "#FFFFFF" : "#666666",
                      }}
                    >
                      Insights
                    </span>
                  </div>
                  {/* Active underline */}
                  {activeTab === "insights" && (
                    <div
                      className="absolute left-0 w-full h-[2px] bg-white z-[2]"
                      style={{ bottom: "-22px" }}
                    />
                  )}
                </button>
              </div>

              {/* Horizontal line*/}
              <div
                className="absolute left-1/2 -translate-x-1/2 w-screen max-w-[1508.5px] h-0 border-t border-[#91949924] z-[1]"
                style={{
                  bottom: "-22px",
                }}
              />
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
