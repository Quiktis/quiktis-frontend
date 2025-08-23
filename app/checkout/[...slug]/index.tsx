"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import useAxios from "@/app/hooks/useAxios";
import { useUser } from "@/app/context/UserContext";
import CartItem from "@/components/checkout/CartItem";
import AttendeeDetails from "@/components/checkout/AttendeeDetails";
import TicketCard from "@/components/nft/TicketCard";
import { Event } from "@/constant/customTypes";
import Button from "@/components/ui/Button";

export default function CheckoutPage() {
  const [quantity, setQuantity] = useState(1);
  const [event, setEvent] = useState<Event | null>(null);
  const [selectedTicketId, setSelectedTicketId] = useState("");
  const [attendeeEmail, setAttendeeEmail] = useState("")
  const [fullName, setFullname] = useState("");
  const [location, setLocation] = useState("");

  const { sendRequest, loading, setLoading } = useAxios();
  const { user } = useUser();
  const pathname = usePathname();
  const router = useRouter();

  const slug = useMemo(() => pathname?.split("/checkout/")[1] ?? "", [pathname]);

  const selectedTicket = useMemo(() => {
    return event?.tickets?.find((t) => t.id === selectedTicketId);
  }, [event, selectedTicketId]);

  const total = useMemo(() => {
    return (selectedTicket?.price ?? 0) * quantity;
  }, [selectedTicket, quantity]);

  const [checkoutDetails, setCheckoutDetails] = useState({
    eventId: "",
    ticketType: "",
    quantity: 1,
    attendeeDetails: { name: "", email: "", phone: "" },
    totalPrice: 0,
  });

  const authHeader = {
    Authorization: `Bearer ${user?.token}`,
  };

  const handleQuantityChange = (newQty: number) => {
    if (newQty > 0) setQuantity(newQty);
  };

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await sendRequest({
          url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/events/${slug}`,
          method: "GET",
          headers: authHeader,
        });

        if (response.status === "success") {
          const eventData = response.data.event;
          setEvent(eventData);
          if (Array.isArray(eventData.tickets) && eventData.tickets.length > 0) {
  const cheapestTicket = eventData.tickets.reduce((minTicket: Event["tickets"][number], currentTicket: Event["tickets"][number]) =>
    currentTicket.price < minTicket.price ? currentTicket : minTicket
  );
  setSelectedTicketId(cheapestTicket.id);
}

        } else {
          //console.error("Failed to fetch event:", response.message);
        }
      } catch (error) {
        //console.error("Error fetching event:", error);
      }
    };

    if (slug) fetchEvent();
  }, [slug]);

  useEffect(() => {
    if (!event) return;

    setCheckoutDetails((prev) => ({
      ...prev,
      eventId: event.id,
      ticketType: selectedTicketId,
      quantity,
      totalPrice: total,
    }));
  }, [event, selectedTicketId, quantity, total]);

  const handleOrderInitiation = async () => {
    if (loading) return;

    if (!attendeeEmail ) alert("Please enter your email and full name")

    if (!event?.id || !selectedTicket?.id) {
      console.error("Missing required data to proceed with order.");
      return;
    }

    setLoading(true);

    try {
      console.log("initiating order...");
      const orderResponse = await sendRequest({
        url: `${process.env.NEXT_PUBLIC_PAYMENT_API}/orders/initiate`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          /*Authorization: `Bearer ${user.token}`,*/
        },
        body: { eventId: event.id },
      });

      if (orderResponse?.status !== "success") {
        //console.error("Failed to initiate order:", orderResponse);
        return;
      }

      const orderId = orderResponse.data.order.id;
      //console.log(orderId, " - Order ID");
      //console.log(selectedTicket.id, " - ticketId");
      //console.log(quantity, " - quantity");

      //console.log("sending order items...");
      const itemResponse = await sendRequest({
        url: `${process.env.NEXT_PUBLIC_PAYMENT_API}/order-items`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: {
          orderId,
          ticketId: selectedTicket.id,
          quantity,
        },
      });

      if (itemResponse?.status !== "success") {
        //console.log("Failed to create order items:", itemResponse);
        return;
      }


      //console.log("initializing payment...");
      const paymentResponse = await sendRequest({
        url: `${process.env.NEXT_PUBLIC_PAYMENT_API}/payment/initialize`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: { orderId, email: attendeeEmail },
      });

      const paymentUrl = paymentResponse?.data?.url;
      if (paymentResponse.success && paymentUrl) {
        window.location.href = paymentUrl;
      } else {
        //console.error("Payment initialization failed:", paymentResponse);
      }
    } catch (error) {
      //console.log("Error processing order:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-transparent text-white py-12 z-50 w-full lg:w-[90%] mx-auto">
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
          onTicketChange={setSelectedTicketId}
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
            <h2 className="font-semibold text-white mb-2 text-4xl">
              Attendee Details {/*<span className="font-normal">(Optional)</span>*/}
            </h2>
            <p className="text-white mb-6">Confirm recipient details</p>
            <AttendeeDetails 
            email={attendeeEmail} 
            setEmail={setAttendeeEmail}
            fullName={fullName}
            setFullname={setFullname}
            location={location}
            setLocation={setLoading}
            />
          </div>

          <div className="mt-8 flex justify-end">
            <Button
              type="button"
              onClick={handleOrderInitiation}
              loading={loading}
              loaderClass="mt-[0.08em] ml-[-0.005em]"
              className="px-8 py-4 bg-[#FF4D2A] text-white rounded-lg hover:bg-[#e6391a] transition-colors shadow-[0_0_20px_rgba(255,77,42,0.6)] active:shadow-[0_0_5px_rgba(255,77,42,0.3)]"
            >
              Pay NGN {total}
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
