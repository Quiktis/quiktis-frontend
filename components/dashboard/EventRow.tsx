"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import useAxios from "@/app/hooks/useAxios";
import { useUser } from "@/app/context/UserContext";

export type EventStatus = "Upcoming" | "Live" | "Ended" | "Canceled";

type Ticket = {
  id: string;
  createdAt: string;
  name: string;
  price: number;
  quantity: number;
  soldCount: number;
  isActive: boolean;
  saleStartDate: string | null;
  saleEndDate: string | null;
};

function calculateTotalRevenue(tickets: Ticket[]): string {
  let totalRevenue = 0;

  for (const ticket of tickets) {
    const revenue = ticket.price * ticket.soldCount;
    totalRevenue += revenue;
  }

  return `₦${totalRevenue}`;
}

function getConcatenatedTicketNames(tickets: { name: string }[]): string {
  const concatenated = tickets.map((ticket) => ticket.name).join(", ");

  if (concatenated.length <= 26) {
    return concatenated;
  }

  return concatenated.slice(0, 8) + "...";
}

function formatToHumanReadableDate(dateString: string, time: string): string {
  const date = new Date(dateString);

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const formattedDate = date.toLocaleDateString(undefined, options);

  const cleanedTime = time.replace(/^0/, "");

  return `${formattedDate} — ${cleanedTime}`;
}

export interface Event {
  title: string;
  id: string;
  name: string;
  slug: string;
  startDate: string;
  startTime: string;
  location: string;
  revenue: string;
  ticketTypes: string;
  status: EventStatus;
  tickets: Ticket[];
}

interface EventRowProps {
  event: Event;
}

const statusStyles: Record<EventStatus, string> = {
  Upcoming: "text-green-500",
  Live: "text-red-500",
  Ended: "text-white",
  Canceled: "text-white",
};

const EventRow: React.FC<EventRowProps> = ({ event }) => {
  const router = useRouter();
  const { sendRequest } = useAxios();
  const { user } = useUser();

  const [revenue, setRevenue] = useState("₦0");

  const handleRowClick = () => {
    router.push(`/event-viewing/${event.slug}`);
  };

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await sendRequest({
          url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/orders/event/${event.id}`,
          method: "GET",
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        });

        if (response.status !== "success") {
          console.log("Failed to fetch orders. Response:", response);
          return;
        }

        const orders = response.data.orders || [];

        const paidOrders = orders.filter(
          (order: any) => order.status === "paid"
        );

        const pendingOrders = orders.filter(
          (order: any) => order.status === "pending"
        );

        const totalRevenue = paidOrders.reduce((sum: number, order: any) => {
          return sum + Number(order.totalPrice);
        }, 0);

        setRevenue(`₦${totalRevenue}`);

        console.log("paid orders: ", paidOrders);
        console.log("pending orders: ", pendingOrders);

      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, [event.id, user?.token]);

  return (
    <tr
      onClick={handleRowClick}
      className="hover:bg-[#ffffff13] transition duration-300 cursor-pointer"
    >
      <td className="w-3/12 px-1 md:px-4 py-1 md:py-3 whitespace-nowrap">
        {event.title}
      </td>
      <td className="w-2/12 px-1 md:px-4 py-1 md:py-3 whitespace-nowrap">
        {formatToHumanReadableDate(event.startDate, event.startTime)}
      </td>
      <td className="w-2/12 px-1 md:px-4 py-1 md:py-3 whitespace-nowrap">
        {event.location}
      </td>
      <td className="w-2/12 px-1 md:px-4 py-1 md:py-3 whitespace-nowrap text-center">
        {revenue}
      </td>
      <td className="w-2/12 px-1 md:px-4 py-1 md:py-3 whitespace-nowrap text-center">
        {getConcatenatedTicketNames(event.tickets)}
      </td>
      <td className="w-1/12 px-1 md:px-4 py-1 md:py-3 whitespace-nowrap">
        <span
          className={`
            inline-flex items-center
            text-[8px] md:text-xs font-medium
            ${statusStyles[event.status] ?? ""}
          `}
        >
          {event.status ?? ""}
        </span>
      </td>
    </tr>
  );
};

export default EventRow;
