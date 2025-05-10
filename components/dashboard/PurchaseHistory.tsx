"use client";
import Image from "next/image";
import React, { useState } from "react";

// Define the type for a purchase item
type Purchase = {
  id: number;
  image: string;
  name: string;
  price: string;
  venue: string;
  dateTime: string;
  ticketType: string;
};

const PurchaseHistory: React.FC = () => {
  const [purchases, setPurchases] = useState<Purchase[]>([]);

  return (
    <div className="p-4">
      <h3 className="text-white text-2xl uppercase font-bold mb-4">
        Purchase History
      </h3>

      <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-6 overflow-hidden">
        {/* Top white line */}
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-[1px] bg-white" />

        {/* Fading sides */}
        <div className="pointer-events-none absolute top-0 left-0 bottom-0 w-[1px] bg-gradient-to-b from-white to-transparent" />
        <div className="pointer-events-none absolute top-0 right-0 bottom-0 w-[1px] bg-gradient-to-b from-white to-transparent" />

        {/* Bottom fade overlay */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-b from-transparent to-black" />

        {/* Table header */}
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

        {/* Table content */}
        <div className="max-h-[300px] overflow-x-auto overflow-y-auto pr-2 custom-scrollbar">
          {purchases.length === 0 ? (
            <div className="text-center text-white text-sm py-6">
              No purchases yet.
            </div>
          ) : (
            purchases.map((item, index) => (
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
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default PurchaseHistory;
