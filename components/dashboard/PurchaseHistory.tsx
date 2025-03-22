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
  ];

  return (
    <div className="p-4">
      <h3 className="text-white text-2xl uppercase font-bold mb-4">
        Purchase History
      </h3>

      {/* Desktop Table View (Unchanged) */}
      <div className="hidden md:block relative bg-white/10 backdrop-blur-sm rounded-xl p-6 overflow-hidden">
        {/* Top white line */}
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-[1px] bg-white" />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-b from-transparent to-black" />

        {/* Table Headers */}
        <div className="flex items-center justify-between mb-2">
          <div className="w-1/5 text-white font-bold text-sm">Package</div>
          <div className="w-1/5 text-white font-bold text-sm text-center">
            Price
          </div>
          <div className="w-1/5 text-white font-bold text-sm text-center">
            Venue
          </div>
          <div className="w-1/5 text-white font-bold text-sm text-center">
            Date & Time
          </div>
          <div className="w-1/5 text-white font-bold text-sm text-center">
            Ticket Type
          </div>
        </div>

        <hr className="border border-gray-600 mb-2" />

        {/* Table Content */}
        <div className="max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
          {purchases.map((item, index) => (
            <React.Fragment key={item.id}>
              <div className="flex items-center justify-between py-3">
                <div className="w-1/5 flex items-center gap-2">
                  <div className="w-10 h-10 overflow-hidden rounded-md flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <span className="text-white text-sm">{item.name}</span>
                </div>

                <div className="w-1/5 text-white text-sm text-center">
                  {item.price}
                </div>

                <div className="w-1/5 text-white text-sm text-center">
                  {item.venue}
                </div>

                <div className="w-1/5 text-white text-sm text-center">
                  {item.dateTime}
                </div>

                <div className="w-1/5 text-white text-sm text-center">
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

      {/* Mobile View - Stacked Cards */}
      <div className="md:hidden flex flex-col gap-4">
        {purchases.map((item) => (
          <div
            key={item.id}
            className="bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-md"
          >
            {/* Image */}
            <div className="w-full h-40 overflow-hidden rounded-md mb-3">
              <Image
                src={item.image}
                alt={item.name}
                width={300}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Event Name & Price */}
            <h4 className="text-white text-lg font-bold mb-1">{item.name}</h4>
            <p className="text-[#FF4D2A] font-semibold mb-2">💰 {item.price}</p>

            {/* Venue & Date/Time */}
            <p className="text-white text-sm mb-1">📍 {item.venue}</p>
            <p className="text-white text-sm mb-2">🗓 {item.dateTime}</p>

            {/* Ticket Type */}
            <span
              className={`text-white text-xs font-semibold px-3 py-1 rounded-full ${
                item.ticketType === "VIP"
                  ? "bg-yellow-500"
                  : item.ticketType === "Regular"
                  ? "bg-blue-500"
                  : "bg-red-500"
              }`}
            >
              🔖 {item.ticketType}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PurchaseHistory;
