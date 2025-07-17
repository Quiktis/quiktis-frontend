"use client";
import Image from "next/image";
import Link from "next/link";
import { IoTicketSharp } from "react-icons/io5";
import { FaFileAlt } from "react-icons/fa";
import { FcHome } from "react-icons/fc";
import { usePathname, useRouter, useParams, useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import useAxios from "@/app/hooks/useAxios";
import { useUser } from "@/app/context/UserContext";
import { Event } from "@/constant/customTypes";
import { OrderResponse } from "@/constant/order";
import { formatToHumanReadableDate } from "@/app/utils/utilities";

function PaymentSuccessPage() {
  const { sendRequest } = useAxios();
  const { user } = useUser();
  const params = useParams();
  const slug = params.slug as string[];
  const orderId = slug[0];
  const searchParams = useSearchParams();
  const trxref = searchParams.get("trxref");

  const [event, setEvent] = useState<Event | null>(null);
  const [eventId, setEventId] = useState<string | null>(null);
  const [totalPaid, setTotalPaid] = useState<number | null>(null);
  const [isApproved, setIsApproved] = useState<boolean | null>(null);
  const [orderDetails, setOrderDetails] = useState<OrderResponse | null>(null);

  useEffect(() => {
    const updatePaymentStatus = async () => {
      try {
        const response = await sendRequest({
          url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/orders/${orderId}/status`,
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
          body: { status: "paid" },
        });

        if (response.status !== "success") {
          console.error("Failed to update payment status:", response.message);
        } else {
          console.log("Payment status updated:", response);
        }
      } catch (error) {
        console.error("Error updating payment status:", error);
      }
    };

    const fetchOrderAndEvent = async () => {
      try {
        const orderRes = await sendRequest({
          url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/orders/${orderId}`,
          method: "GET",
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        });

        if (orderRes.status !== "success") {
          console.error("Failed to fetch order details:", orderRes.message);
          return;
        }

        const order = orderRes.data.order;
        setOrderDetails(order);
        setEventId(order.event.id);
        setTotalPaid(order.totalPrice);
        setIsApproved(true);

        const eventRes = await sendRequest({
          url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/events/${order.event.id}`,
          method: "GET",
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        });

        if (eventRes.status !== "success") {
          console.error("Failed to fetch event details");
          return;
        }

        setEvent(eventRes.data.event);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    updatePaymentStatus();
    fetchOrderAndEvent();
  }, [orderId, user?.token]);

  return (
    <div className="min-h-screen bg-transparent text-white">
      <div className="relative w-full">
        {/* Header */}
        <div className="text-center py-8 relative z-20">
          <h1 className="text-4xl font-bold mb-2">Payment Successful</h1>
          <p className="text-gray-300 text-sm">
            Your ticket has been confirmed. Check your email for details.
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row w-full">
          {/* Left Side */}
          <div className="w-full md:w-1/2 flex items-start justify-start z-10" style={{ marginTop: "-14rem" }}>
            <div className="relative w-[130%] h-[450px] md:h-[120%]">
              <Image
                src="/rocketman.png"
                alt="Person riding a rocket"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full md:w-1/2 flex flex-col justify-start pt-16 md:pt-14 px-4 md:px-12">
            <div className="space-y-6">
              <div className="grid grid-cols-2">
                <span>Event Name</span>
                <span className="font-medium">{event?.title ?? ""}</span>
              </div>
              <div className="grid grid-cols-2">
                <span>Date and Time</span>
                <span className="font-medium">
                  {event && formatToHumanReadableDate(event.startDate, event.startTime)}
                </span>
              </div>
              <div className="grid grid-cols-2">
                <span>Location</span>
                <span className="font-medium">{event?.location ?? ""}</span>
              </div>
              <div className="grid grid-cols-2">
                <span>Ticket ID</span>
                <span className="font-medium">#TXN-{trxref}</span>
              </div>
              <div className="grid grid-cols-2">
                <span>Total Paid</span>
                <span className="font-medium">
                  ₦{totalPaid}{" "}
                  <span className="text-green-500">(Successful)</span>
                </span>
              </div>

              <div className="flex flex-col md:flex-row gap-2 justify-start w-full">
                <Link
                  href={`/concert-ticket/${orderId}`}
                  className="flex items-center justify-center gap-1 bg-[#FF4D2A] text-white md:text-sm text-[10px] py-4 px-3 rounded-md font-medium shadow-[0_0_25px_rgba(255,77,42,0.8)] hover:shadow-[0_0_30px_rgba(255,77,42,1)] transition-shadow w-full"
                >
                  View E-Ticket
                  <IoTicketSharp className="h-3 w-3" />
                </Link>
                <Link
                  href="/download-pdf"
                  className="flex items-center justify-center gap-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white md:text-sm text-[10px] py-4 px-3 rounded-md font-medium shadow-[0_0_25px_rgba(37,99,235,0.8)] hover:shadow-[0_0_30px_rgba(37,99,235,1)] transition-shadow w-full"
                >
                  Download PDF
                  <FaFileAlt className="h-3 w-3" />
                </Link>
                <Link
                  href="/"
                  className="flex items-center justify-center gap-1 bg-transparent text-white md:text-sm text-[10px] py-2 px-3 rounded-md font-medium w-full"
                >
                  Go Home
                  <FcHome className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div className="text-center text-white py-8">Loading...</div>}>
      <PaymentSuccessPage />
    </Suspense>
  );
}
