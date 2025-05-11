import React from "react";
import { FaFileAlt } from "react-icons/fa";
import Image from "next/image";

const data = [
  {
    name: "Rachael Adams",
    date: "April 15, 2025 — 7:00 PM",
    amount: "₦3,000",
    payment: "Card",
    ticket: "Regular",
    status: "Used",
    avatar: "/headphonegirl.png",
  },
  {
    name: "Rachael Adams",
    date: "April 15, 2025 — 7:00 PM",
    amount: "₦3,000",
    payment: "Crypto",
    ticket: "VIP", 
    status: "Used",
    avatar: "/headphonegirl.png",
  },

  ...Array(14).fill({
    name: "Rachael Adams",
    date: "April 15, 2025 — 7:00 PM",
    amount: "₦3,000",
    payment: "Card",
    ticket: "Regular",
    status: "Used",
    avatar: "/headphonegirl.png",
  }),
];

export default function AttendeesTable() {
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-white text-xl font-semibold">Attendees</h2>
        <button className="flex items-center gap-2 bg-[#FF4D2A] text-white px-4 py-2 rounded-md text-sm hover:brightness-110 transition">
          <FaFileAlt className="text-base" />
          Download xls
        </button>
      </div>

      <table className="w-full table-auto text-sm text-left">
        <thead className="text-white border-b border-gray-600">
          <tr>
            <th className="py-3 px-4">Name</th>
            <th className="py-3 px-4">Date & Time Purchased</th>
            <th className="py-3 px-4">Amount</th>
            <th className="py-3 px-4">Payment Method</th>
            <th className="py-3 px-4">Ticket Type(s)</th>
            <th className="py-3 px-4">Status</th>
          </tr>
        </thead>

        <tbody className="text-white">
          {data.map((attendee, index) => (
            <tr
              key={index}
              className="border-b border-gray-800 hover:bg-[#1C1C1C] transition">
              <td className="py-3 px-4 flex items-center gap-2">
                <Image
                  src={attendee.avatar}
                  alt={attendee.name}
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                {attendee.name}
              </td>
              <td className="py-3 px-4">{attendee.date}</td>
              <td className="py-3 px-4">{attendee.amount}</td>
              <td className="py-3 px-4">{attendee.payment}</td>
              <td className="py-3 px-4">{attendee.ticket}</td>
              <td className="py-3 px-4 text-white">{attendee.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
