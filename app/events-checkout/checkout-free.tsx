"use client";

import { useState } from "react";
import StackedGlassLinkBars from "./components/StackedGlassLinkBars";
import PublicBadge from "./components/PublicBadge";
import EventHeader from "./components/EventHeader";
import EventDetailsCard from "./components/EventDetailsCard";
import AboutSection from "./components/AboutSection";
import EventSidebar from "./components/EventSidebar";
import TicketOption from "./components/TicketOption";

export default function CheckoutFree() {
  const [copied, setCopied] = useState(false);
  const [showTicketPopup, setShowTicketPopup] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState<string | null>(null);
  const [ticketQty, setTicketQty] = useState(1);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };

  const handleTicketSelect = (ticketType: string) => {
    setSelectedTicket(ticketType);
    setTicketQty(1);
  };

  const incrementQty = () => setTicketQty((prev) => prev + 1);
  const decrementQty = () => setTicketQty((prev) => (prev > 1 ? prev - 1 : 1));

  const handleBuyTicket = () => {
    console.log(`Buying ${ticketQty} x ${selectedTicket}`);
    setShowTicketPopup(false);
    setSelectedTicket(null);
    setTicketQty(1);
  };

  return (
    <div className="bg-[#131517] min-h-screen text-gray-300 font-sans p-3 sm:p-4 md:p-6 lg:p-8">
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Hide scrollbar but keep scroll functionality */
        .hide-scrollbar {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE and Edge */
        }

        .hide-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
      `}</style>
      <div className="max-w-[1250px] mx-auto pt-16 sm:pt-20 md:pt-24 lg:pt-28 px-3 sm:px-4 md:px-8 lg:px-12 xl:px-16 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
        <main className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {/* Left Section */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            <PublicBadge />

            <EventHeader
              title="Africa Startup Conference"
              dateDay="30"
              dateMonth="Sept"
              dayOfWeek="Thursday, Sep 23"
              fullDate="Thursday, Sep 23"
              timeRange="7:00 PM - 8:30 PM GMT+1"
              locationName="Stable Africa"
              locationCity="Lagos Nigeria"
            />

            <EventDetailsCard
              onBuyTicketClick={() => setShowTicketPopup(true)}
            />

            <AboutSection />
          </div>

          {/* Right Section */}
          <EventSidebar />
        </main>
      </div>

      {/* Ticket Popup Overlay */}
      {showTicketPopup && (
        <div
          className="hide-scrollbar fixed inset-0 w-screen h-screen bg-[#131517F7] z-[9999] flex items-center justify-center p-3 sm:p-5 overflow-auto"
          onClick={() => setShowTicketPopup(false)}
        >
          <div
            className="hide-scrollbar bg-transparent w-full max-w-[1250px] flex flex-col items-start pt-12 sm:pt-16 md:pt-20 pb-6 sm:pb-10 max-h-[160vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 sm:mb-6 -mt-[40px] sm:-mt-[60px] md:-mt-[72px]">
              <button
                onClick={() => setShowTicketPopup(false)}
                className="w-[100px] sm:w-[124px] h-[38px] sm:h-[42px] bg-transparent border border-[#373737] rounded-[5px] shrink-0 min-w-[100px] sm:min-w-[124px] whitespace-nowrap font-medium text-lg sm:text-xl leading-none text-white cursor-pointer flex items-center justify-center gap-2"
              >
                <svg
                  width="4.46"
                  height="8.11"
                  viewBox="0 0 5 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 8L1 4.5L4 1"
                    stroke="#FFFFFF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Back
              </button>
            </div>

            <div className="w-full max-w-[600px] flex flex-col gap-6 sm:gap-8 md:gap-10 self-center px-3 sm:px-0">
              <div className="text-center">
                <h2 className="font-medium text-4xl leading-[96%] text-center text-white m-0 mb-3">
                  Choose Ticket Type
                </h2>
                <p className="font-medium text-[21.12px] leading-[121%] text-center text-[#919499] m-0">
                  Pick your ticket preference and go
                  <br />
                  though our payment gateway
                </p>
              </div>

              {/* Ticket Options */}
              <div className="flex flex-col gap-4">
                <TicketOption
                  name="Regular"
                  price="1"
                  priceAmount="000"
                  isSelected={selectedTicket === "Regular"}
                  onSelect={() => handleTicketSelect("Regular")}
                  quantity={ticketQty}
                  onIncrementQty={incrementQty}
                  onDecrementQty={decrementQty}
                />

                <TicketOption
                  name="VIP"
                  price="5"
                  priceAmount="000"
                  isSelected={selectedTicket === "VIP"}
                  onSelect={() => handleTicketSelect("VIP")}
                  quantity={ticketQty}
                  onIncrementQty={incrementQty}
                  onDecrementQty={decrementQty}
                />

                <TicketOption
                  name="VVIP"
                  price="6"
                  priceAmount="000"
                  isSelected={selectedTicket === "VVIP"}
                  onSelect={() => handleTicketSelect("VVIP")}
                  quantity={ticketQty}
                  onIncrementQty={incrementQty}
                  onDecrementQty={decrementQty}
                />
              </div>

              {/* Buy Button */}
              {selectedTicket && (
                <button
                  onClick={handleBuyTicket}
                  className="w-full bg-white border-none rounded-xl px-5 py-5 font-semibold text-lg text-[#131517] cursor-pointer mt-2"
                >
                  Buy
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
