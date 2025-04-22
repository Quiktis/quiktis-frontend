"use client";

import React, { useState } from "react";
import CartItem from "@/components/checkout/CartItem";
import AttendeeDetails from "@/components/checkout/AttendeeDetails";

export default function CheckoutPage() {
  const [quantity, setQuantity] = useState(1);
  const pricePerTicket = 200;
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
          <h2 className="text-2xl font-semibold">
            Attendee Details <span className="text-gray-400">(Optional)</span>
          </h2>
          <p className="text-gray-400">Confirm recipient details</p>
          <AttendeeDetails />
        </div>
      </div>
    </main>
  );
}
