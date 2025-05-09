"use client";

import React, { useState } from "react";
import CartItem from "@/components/checkout/CartItem";
import AttendeeDetails from "@/components/checkout/AttendeeDetails";

export default function CheckoutPage() {
  const [quantity, setQuantity] = useState(1);
  const pricePerTicket = 2000;
  const total = pricePerTicket * quantity;

  return (
    <main className="min-h-screen bg-transparent text-white py-12">
      <div className="space-y-8">
        <div className="flex items-center space-x-4">
          <img
            src="/event-ticket.svg"
            alt="Event Tickets"
            className="h-12 w-12"
          />
          <h1 className="text-3xl font-semibold">My Cart</h1>
        </div>

        <CartItem
          imageUrl="/maskgirl.png"
          title="Africa's fashion industry."
          category="Gaming"
          location="Lagos, Nigeria"
          organizer="Summer Crew Events"
          organizerAvatar="/pp.png"
          ticketTypes={["Standard", "VIP", "Premium"]}
          quantity={quantity}
          onMinus={() => setQuantity((q) => Math.max(1, q - 1))}
          onPlus={() => setQuantity((q) => q + 1)}
        />

        <div className="flex justify-center items-center space-x-4 my-4">
          <span className="text-lg">Qty:</span>
          <span className="text-xl font-medium text-blue-500">{quantity}</span>
          <span className="text-lg">Total:</span>
          <span className="text-xl font-medium text-blue-500">NGN {total}</span>
        </div>

        <div className="pt-8">
          <h2 className="font-semibold text-white mb-2">
            <span className="text-4xl">Attendee Details</span>{" "}
            <span className="text-4xl text-white font-normal">
              (Optional)
            </span>
          </h2>
          <p className="text-white mb-6">Confirm recipient details</p>
          <div className="w-full md:w-6/10">
             <AttendeeDetails />
          </div>
        </div>

        <div className="mt-8 flex justify-end">
  <button
    className="
      px-8 py-4 
      bg-[#FF4D2A] 
      text-white 
      rounded-lg 
      hover:bg-[#e6391a] 
      transition-colors 
      shadow-[0_0_20px_rgba(255,77,42,0.6)] 
      active:shadow-[0_0_5px_rgba(255,77,42,0.3)]
    "
  >
    Pay NGN2000
  </button>
</div>
      </div>
    </main>
  );
}
