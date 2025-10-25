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
import { useGetEventById } from "@/ApiServices/queries";

export default function CheckoutPage() {
  const [quantity, setQuantity] = useState(1);
  const [selectedTicketId, setSelectedTicketId] = useState("");
  const [attendeeEmail, setAttendeeEmail] = useState("")
  const [fullName, setFullname] = useState("");
  const [location, setLocation] = useState("");

  const { sendRequest, loading, setLoading } = useAxios();
  const [cryptoLoading, setCryptoLoading] = useState(false);
  const [fiatLoading, setFiatLoading] = useState(false);
  const pathname = usePathname();

  const slug = useMemo(() => pathname?.split("/checkout/")[1] ?? "", [pathname]);

  const {
          data: event,
          isLoading: loadingEvent,
          isError: errorEvent,
        } = useGetEventById(slug);

  const selectedTicket = useMemo(() => {
    return event?.tickets?.find((t: any) => t.id === selectedTicketId);
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


  const handleQuantityChange = (newQty: number) => {
    if (newQty > 0) setQuantity(newQty);
  };



  const handleOrderInitiation = async () => {
    if (fiatLoading) return;

    if (!attendeeEmail ) {
      alert("Please enter your email and full name")
      return
    }

    if (!slug || !selectedTicket?.id) {
      console.error("Missing required data to proceed with order.");
      alert('please select a ticket type')
      return;
    }

    setFiatLoading(true);

    try {
      console.log("initiating order...");
      const orderResponse = await sendRequest({
        url: `${process.env.NEXT_PUBLIC_PAYMENT_API}/orders/initiate`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          /*Authorization: `Bearer ${user.token}`,*/
        },
        body: { eventId: slug },
      });

      if (orderResponse?.status !== "success") {
        console.error("Failed to initiate order:", orderResponse);
        return;
      }

      const orderId = orderResponse.data.order.id;
      console.log(orderId, " - Order ID");
      console.log(selectedTicket.id, " - ticketId");
      console.log(quantity, " - quantity");

      console.log("sending order items...");
      const itemResponse = await sendRequest({
        url: `${process.env.NEXT_PUBLIC_PAYMENT_API}/order-items`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          //Authorization: `Bearer ${user.token}`,
        },
        body: {
          orderId,
          ticketId: selectedTicket.id,
          quantity,
        },
      });

      if (itemResponse?.status !== "success") {
        console.log("Failed to create order items:", itemResponse);
        return;
      }


      console.log("initializing payment...");
      console.log("response body: ", { orderId, email: attendeeEmail });
      const paymentResponse = await sendRequest({
        url: `${process.env.NEXT_PUBLIC_PAYMENT_API}/payment/initialize`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          //Authorization: `Bearer ${user.token}`,
        },
        body: { orderId, email: attendeeEmail },
      });

      const paymentUrl = paymentResponse?.data?.url;
      if (paymentResponse.success && paymentUrl) {
        window.location.href = paymentUrl;
      } else {
        console.error("Payment initialization failed:", paymentResponse);
      }
    } catch (error) {
      console.log("Error processing order:", error);
    } finally {
      setFiatLoading(false);
    }
  };


   const handleCryptoOrderInitiation = async () => {
    if (cryptoLoading) return;

    //if (!attendeeEmail ) alert("Please enter your email and full name")

    if (!slug || !selectedTicket?.id) {
      console.error("Missing required data to proceed with order.");
      alert('please select a ticket type')
      return;
    }

    setCryptoLoading(true);

    try {
      console.log("initiating order...");
      const orderResponse = await sendRequest({
        url: `${process.env.NEXT_PUBLIC_PAYMENT_API}/orders/initiate`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          /*Authorization: `Bearer ${user.token}`,*/
        },
        body: { eventId: slug },
      });

      if (orderResponse?.status !== "success") {
        console.error("Failed to initiate order:", orderResponse);
        return;
      }

      const orderId = orderResponse.data.order.id;
      console.log(orderId, " - Order ID");
      console.log(selectedTicket.id, " - ticketId");
      console.log(quantity, " - quantity");

      console.log("sending order items...");
      const itemResponse = await sendRequest({
        url: `${process.env.NEXT_PUBLIC_PAYMENT_API}/order-items`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          //Authorization: `Bearer ${user.token}`,
        },
        body: {
          orderId,
          ticketId: selectedTicket.id,
          quantity,
        },
      });

      if (itemResponse?.status !== "success") {
        console.log("Failed to create order items:", itemResponse);
        return;
      }


      console.log("initializing payment...");
      console.log("response body: ", { orderId, email: attendeeEmail });
      const paymentResponse = await sendRequest({
        url: `${process.env.NEXT_PUBLIC_PAYMENT_API}/payment/initialize`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          //Authorization: `Bearer ${user.token}`,
        },
        body: { orderId, email: attendeeEmail, type: "crypto", paymentToken: "USDC"},
      });

      const paymentUrl = paymentResponse?.data?.paymentUrl;
      if (paymentResponse.success && paymentUrl) {
        window.location.href = paymentUrl;
      } else {
        console.error("Payment initialization failed:", paymentResponse);
      }
    } catch (error) {
      console.log("Error processing order:", error);
    } finally {
      setCryptoLoading(false);
    }
  };

  useEffect(() => {
  if (!event?.tickets) return;

  const stillExists = event.tickets.some((t: any) => t.id === selectedTicketId);

  if (!stillExists) {
    setSelectedTicketId(""); // reset selection if ticket is no longer valid
  }
}, [event, selectedTicketId]);

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

          <div className="mt-8 flex gap-3 justify-end">
            <Button
              type="button"
              onClick={handleOrderInitiation}
              loading={fiatLoading}
              loaderClass="my-auto ml-[0.2em]"
              className="px-8 py-4 bg-[#FF4D2A] text-white rounded-lg hover:bg-[#e6391a] transition-colors shadow-[0_0_20px_rgba(255,77,42,0.6)] active:shadow-[0_0_5px_rgba(255,77,42,0.3)]"
            >
              Pay NGN {total} {`(Bank)`}
            </Button>

            <Button
              type="button"
              onClick={handleCryptoOrderInitiation}
              loading={cryptoLoading}
              loaderClass="my-auto ml-[0.2em]"
              className="px-8 py-4 bg-[#3729f1] text-white rounded-lg hover:bg-[#4424d1] transition-colors shadow-[0_0_20px_rgba(255,77,42,0.6)] active:shadow-[0_0_5px_rgba(255,77,42,0.3)]"
            >
              Pay NGN {total} {`(Crypto)`}
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
