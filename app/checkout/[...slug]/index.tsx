"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import CartItem from "@/components/checkout/CartItem";
import AttendeeDetails from "@/components/checkout/AttendeeDetails";
import { usePathname } from "next/navigation";
import useAxios from "@/app/hooks/useAxios";
import { useUser } from "@/app/context/UserContext";
import { Event } from "@/constant/customTypes";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const [quantity, setQuantity] = useState(1);
  const { sendRequest } = useAxios();
  const { user } = useUser();
  const pathname = usePathname();
  const eventId = pathname?.split("/checkout/")[1];
  const [event, setEvent] = useState<Event | null>(null);
  const [selectedTicketId, setSelectedTicketId] = useState("");
  const router = useRouter()

  const selectedTicket = useMemo(() => {
    return event?.tickets?.find(t => t.id === selectedTicketId);
  }, [event, selectedTicketId]);
  
  const total = useMemo(() => {
    return (selectedTicket?.price ?? 0) * quantity;
  }, [selectedTicket, quantity]);
  
  const [checkoutDetails, setCheckoutDetails] = useState({
    eventId: "",
    ticketType: "",
    quantity: 1,
    attendeeDetails: {
      name: "",
      email: "",
      phone: "",
    },
    totalPrice: 0,
  });

  const handleQuantityChange = (newQty: number) => {
    if (newQty < 1) return;
    setQuantity(newQty);
  };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await sendRequest({
          url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/events/${eventId}`,
          method: "GET",
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        });

        if (response.status === "success") {
          const eventData = response.data.event;
  setEvent(eventData);

  // Ensure the first ticket exists before setting
  if (eventData.tickets.length > 0) {
    setSelectedTicketId(eventData.tickets[0].id);
  }
        } else {
          console.error("Failed to fetch event details:", response.message);
        }
      } catch (error) {
        console.error("Error fetching event details", error);
      }
    };

    fetchEvents();
  }, []);

  // Keep checkout details in sync with changes
  useEffect(() => {
    setCheckoutDetails(prev => ({
      ...prev,
      eventId: eventId ?? "",
      ticketType: selectedTicketId,
      quantity: quantity,
      totalPrice: total,
    }));
  }, [selectedTicketId, quantity, total, eventId]);



  const handleOrderInitiation = async () => {

    const responseBody = {
      eventId: event?.id,
     
    };
    console.log("Response body for order initiation:", responseBody);
    try {
      console.log("Initiating order with details:", responseBody);
      const response = await sendRequest({
        url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/orders/initiate`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
        body: responseBody,
      });
       
      if (response?.status === "success") {
        console.log("Order initiated successfully:", response.data);
        const orderCompletion = await sendRequest({
          url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/orders/complete`,
          method: "POST",
          headers: {
            Authorization: `Bearer ${user?.token}`
          },
          body: {
            orderId: response.data.order.id
          }
        })

        if (orderCompletion.status === "success") {
          console.log("Order completed successful");
          router.push(`/payment-success/${event?.id}/${orderCompletion.data.order.id}`)
        }
        
        else {console.error("Failed to complete order:", response);
          
        }
      } else {
        console.error("Failed to initiate order:", response);
      }
    } catch (error) {
      console.error("Error initiating order:", error);
    }
  }
  const debugClick = () => console.log("🛠️  Debug button click!");

  return (
    <main className="min-h-screen bg-transparent text-white py-12  z-50 w-full lg:w-[90%] mx-auto">
      <div className="space-y-8">
        <div className="flex items-center space-x-4">
          <img
            src="/eventticket.png"
            alt="Event Tickets"
            className="h-24 w-24 md:h-32 md:w-32 object-contain"
          />
          <h1 className="text-4xl md:text-5xl font-bold">My Cart</h1>
        </div>

        <CartItem
          event={event}
          selectedTicketId={selectedTicketId}
          onTicketChange={(id) => setSelectedTicketId(id)}
          organizerAvatar="/pp.png"
          ticketTypes={event?.tickets ?? []}
          quantity={quantity}
          onMinus={() => handleQuantityChange(quantity - 1)}
          onPlus={() => handleQuantityChange(quantity + 1)}
        />

        <div className="flex justify-center items-center space-x-4 my-4">
          <span className="text-xl">Qty:</span>
          <span className="text-2xl font-bold text-blue-500">{quantity}</span>
          <span className="text-xl">Total:</span>
          <span className="text-2xl font-bold text-blue-500">NGN {total}</span>
        </div>

        <div className="w-full md:w-[80%]">
          <div className="pt-8">
            <h2 className="font-semibold text-white mb-2">
              <span className="text-4xl">Attendee Details</span>{" "}
              <span className="text-4xl text-white font-normal">(Optional)</span>
            </h2>
            <p className="text-white mb-6">Confirm recipient details</p>
            <AttendeeDetails />
          </div>

          <div className="mt-8 flex justify-end">
            
              <button 
              type="button"
              onClick={handleOrderInitiation}
              className="px-8 py-4 bg-[#FF4D2A] text-white rounded-lg hover:bg-[#e6391a] transition-colors shadow-[0_0_20px_rgba(255,77,42,0.6)] active:shadow-[0_0_5px_rgba(255,77,42,0.3)]">
                Pay NGN {total}
              </button>
           
          </div>

          
        </div>
      </div>
    </main>
  );
}
