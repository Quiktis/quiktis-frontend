"use client";
import Image from "next/image";
import React from "react";

const PurchaseHistory = () => {
  const purchases = [
    {
      id: 1,
      image: "/event1.png",
      name: "Event 1",
      price: "$100",
      venue: "Venue 1",
      dateTime: "Aug 5, 2024 | 2:00PM",
      ticketType: "VVIP",
    },
    {
      id: 2,
      image: "/event2.png",
      name: "Event 2",
      price: "$120",
      venue: "Venue 2",
      dateTime: "Aug 6, 2024 | 3:00PM",
      ticketType: "Regular",
    },
    {
      id: 3,
      image: "/event3.png",
      name: "Event 3",
      price: "$90",
      venue: "Venue 3",
      dateTime: "Aug 7, 2024 | 4:00PM",
      ticketType: "VIP",
    },
    {
      id: 4,
      image: "/event1.png",
      name: "Event 4",
      price: "$110",
      venue: "Venue 4",
      dateTime: "Aug 8, 2024 | 5:00PM",
      ticketType: "VVIP",
    },
    {
      id: 5,
      image: "/event2.png",
      name: "Event 5",
      price: "$130",
      venue: "Venue 5",
      dateTime: "Aug 9, 2024 | 6:00PM",
      ticketType: "Regular",
    },
    {
      id: 6,
      image: "/event3.png",
      name: "Event 6",
      price: "$95",
      venue: "Venue 6",
      dateTime: "Aug 10, 2024 | 7:00PM",
      ticketType: "VIP",
    },
    {
      id: 7,
      image: "/event1.png",
      name: "Event 7",
      price: "$105",
      venue: "Venue 7",
      dateTime: "Aug 11, 2024 | 8:00PM",
      ticketType: "VVIP",
    },
    {
      id: 8,
      image: "/event2.png",
      name: "Event 8",
      price: "$115",
      venue: "Venue 8",
      dateTime: "Aug 12, 2024 | 9:00PM",
      ticketType: "Regular",
    },
  ];

  return (
    <div className="p-4">
      <h3 className="text-white text-2xl uppercase font-bold mb-4">
        Purchase History
      </h3>

      {/* Glassmorphic  */}
      <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-6 overflow-hidden">
        {/* Top white line */}
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-[1px] bg-white" />

        {/* Fading sides */}
        <div className="pointer-events-none absolute top-0 left-0 bottom-0 w-[1px] bg-gradient-to-b from-white to-transparent" />
        <div className="pointer-events-none absolute top-0 right-0 bottom-0 w-[1px] bg-gradient-to-b from-white to-transparent" />

        {/* Bottom fade overlay */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-b from-transparent to-black" />

        <div className="flex flex-col sm:flex-row items-start gap-2 mb-2">
          <div className="w-full sm:w-1/5 text-white font-bold text-xs sm:text-sm">
            Package
          </div>
          <div className="w-full sm:w-1/5 text-white font-bold text-xs sm:text-sm text-center">
            Price
          </div>
          <div className="w-full sm:w-1/5 text-white font-bold text-xs sm:text-sm text-center">
            Venue
          </div>
          <div className="w-full sm:w-1/5 text-white font-bold text-xs sm:text-sm text-center">
            Date & Time
          </div>
          <div className="w-full sm:w-1/5 text-white font-bold text-xs sm:text-sm text-center">
            Ticket Type
          </div>
        </div>

        <hr className="border border-gray-600 mb-2" />

        <div className="max-h-[300px] overflow-x-auto overflow-y-auto pr-2 custom-scrollbar">
          {purchases.map((item, index) => (
            <React.Fragment key={item.id}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-3 gap-2">
                <div className="flex w-full sm:w-1/5 items-center gap-2">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 overflow-hidden rounded-md flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <span className="text-white text-xs sm:text-sm">
                    {item.name}
                  </span>
                </div>
                <div className="w-full sm:w-1/5 text-white text-xs sm:text-sm text-left sm:text-center">
                  {item.price}
                </div>
                <div className="w-full sm:w-1/5 text-white text-xs sm:text-sm text-left sm:text-center">
                  {item.venue}
                </div>
                <div className="w-full sm:w-1/5 text-white text-xs sm:text-sm text-left sm:text-center">
                  {item.dateTime}
                </div>
                <div className="w-full sm:w-1/5 text-white text-xs sm:text-sm text-left sm:text-center">
                  {item.ticketType}
                </div>
              </div>
              {index < purchases.length - 1 && (
                <hr className="border border-gray-600" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PurchaseHistory;
