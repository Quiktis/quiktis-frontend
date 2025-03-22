"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

interface HistoryRow {
  id: number;
  event: string;
  date: string;
  price: string;
  venue: string;
  ticketType: string;
  quality: string;
  totalSpent: string;
}

interface RecentHistoryTableProps {
  data?: HistoryRow[];
  startDate: string;
  endDate: string;
}

const RecentHistoryTable: React.FC<RecentHistoryTableProps> = ({
  startDate,
  endDate,
}) => {
  const [start, setStart] = useState(startDate);
  const [end, setEnd] = useState(endDate);

  const handleStartDateChange = () => {
    const newStartDate = prompt("Enter Start Date (MM/DD/YYYY):", start);
    if (newStartDate) setStart(newStartDate);
  };

  const handleEndDateChange = () => {
    const newEndDate = prompt("Enter End Date (MM/DD/YYYY):", end);
    if (newEndDate) setEnd(newEndDate);
  };

  const recentHistory: HistoryRow[] = [
    {
      id: 1,
      event: "African's traditional day",
      date: "04/05/2024",
      price: "$98.00",
      venue: "Southwest Airlines",
      ticketType: "Premium",
      quality: "1",
      totalSpent: "$10,000",
    },
    {
      id: 2,
      event: "African's traditional day",
      date: "04/05/2024",
      price: "$98.00",
      venue: "Southwest Airlines",
      ticketType: "Premium",
      quality: "1",
      totalSpent: "$10,000",
    },
    {
      id: 3,
      event: "African's traditional day",
      date: "04/05/2024",
      price: "$98.00",
      venue: "Southwest Airlines",
      ticketType: "Premium",
      quality: "1",
      totalSpent: "$10,000",
    },
    {
      id: 4,
      event: "African's traditional day",
      date: "04/05/2024",
      price: "$98.00",
      venue: "Southwest Airlines",
      ticketType: "Premium",
      quality: "1",
      totalSpent: "$10,000",
    },
    {
      id: 5,
      event: "African's traditional day",
      date: "04/05/2024",
      price: "$98.00",
      venue: "Southwest Airlines",
      ticketType: "Premium",
      quality: "1",
      totalSpent: "$10,000",
    },
    {
      id: 6,
      event: "African's traditional day",
      date: "04/05/2024",
      price: "$98.00",
      venue: "Southwest Airlines",
      ticketType: "Premium",
      quality: "1",
      totalSpent: "$10,000",
    },
    {
      id: 7,
      event: "African's traditional day",
      date: "04/05/2024",
      price: "$98.00",
      venue: "Southwest Airlines",
      ticketType: "Premium",
      quality: "1",
      totalSpent: "$10,000",
    },
    {
      id: 8,
      event: "African's traditional day",
      date: "04/05/2024",
      price: "$98.00",
      venue: "Southwest Airlines",
      ticketType: "Premium",
      quality: "1",
      totalSpent: "$10,000",
    },
    {
      id: 9,
      event: "African's traditional day",
      date: "04/05/2024",
      price: "$98.00",
      venue: "Southwest Airlines",
      ticketType: "Premium",
      quality: "1",
      totalSpent: "$10,000",
    },
    {
      id: 10,
      event: "African's traditional day",
      date: "04/05/2024",
      price: "$98.00",
      venue: "Southwest Airlines",
      ticketType: "Premium",
      quality: "1",
      totalSpent: "$10,000",
    },
    {
      id: 11,
      event: "African's traditional day",
      date: "04/05/2024",
      price: "$98.00",
      venue: "Southwest Airlines",
      ticketType: "Premium",
      quality: "1",
      totalSpent: "$10,000",
    },
    {
      id: 12,
      event: "African's traditional day",
      date: "04/05/2024",
      price: "$98.00",
      venue: "Southwest Airlines",
      ticketType: "Premium",
      quality: "1",
      totalSpent: "$10,000",
    },
    {
      id: 13,
      event: "African's traditional day",
      date: "04/05/2024",
      price: "$98.00",
      venue: "Southwest Airlines",
      ticketType: "Premium",
      quality: "1",
      totalSpent: "$10,000",
    },
    {
      id: 14,
      event: "African's traditional day",
      date: "04/05/2024",
      price: "$98.00",
      venue: "Southwest Airlines",
      ticketType: "Premium",
      quality: "1",
      totalSpent: "$10,000",
    },
    {
      id: 15,
      event: "African's traditional day",
      date: "04/05/2024",
      price: "$98.00",
      venue: "Southwest Airlines",
      ticketType: "Premium",
      quality: "1",
      totalSpent: "$10,000",
    },
  ];

  return (
    <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-6 overflow-hidden">
      {/* Top white line */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-[1px] bg-white" />
      {/* Fading sides */}
      <div className="pointer-events-none absolute top-0 left-0 bottom-0 w-[1px] bg-gradient-to-b from-white to-transparent" />
      <div className="pointer-events-none absolute top-0 right-0 bottom-0 w-[1px] bg-gradient-to-b from-white to-transparent" />
      {/* Bottom fade overlay */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-b from-transparent to-black" />

      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-white">Recent History</h2>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="flex flex-col">
            <span className="text-xs text-gray-400">Start Date</span>
            <div
              onClick={handleStartDateChange}
              className="flex items-center gap-1 bg-transparent px-2 sm:px-3 py-1 rounded cursor-pointer"
            >
              <span className="text-xs text-white sm:text-sm">{start}</span>
              <FaChevronDown className="text-xs text-gray-400" />
            </div>
          </div>

          {/* End Date Filter */}
          <div className="flex flex-col">
            <span className="text-xs text-gray-400">End Date</span>
            <div
              onClick={handleEndDateChange}
              className="flex items-center gap-1 bg-transparent px-2 sm:px-3 py-1 rounded cursor-pointer"
            >
              <span className="text-xs text-white sm:text-sm">{end}</span>
              <FaChevronDown className="text-xs text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="max-h-[300px] overflow-x-auto overflow-y-auto pr-2 custom-scrollbar">
        <table className="w-full text-left">
          <thead className="border-b border-gray-700">
            <tr>
              <th className="py-1 px-2 sm:py-2 sm:px-4 text-xs sm:text-sm font-bold uppercase text-gray-400">
                Event
              </th>
              <th className="py-1 px-2 sm:py-2 sm:px-4 text-xs sm:text-sm font-bold uppercase text-gray-400">
                Date
              </th>
              <th className="py-1 px-2 sm:py-2 sm:px-4 text-xs sm:text-sm font-bold uppercase text-gray-400">
                Price
              </th>
              <th className="py-1 px-2 sm:py-2 sm:px-4 text-xs sm:text-sm font-bold uppercase text-gray-400">
                Venue
              </th>
              <th className="py-1 px-2 sm:py-2 sm:px-4 text-xs sm:text-sm font-bold uppercase text-gray-400">
                Ticket Type
              </th>
              <th className="py-1 px-2 sm:py-2 sm:px-4 text-xs sm:text-sm font-bold uppercase text-gray-400">
                Quality
              </th>
              <th className="py-1 px-2 sm:py-2 sm:px-4 text-xs sm:text-sm font-bold uppercase text-gray-400">
                Total Spent
              </th>
            </tr>
          </thead>
          <tbody>
            {recentHistory.map((row) => (
              <tr key={row.id} className="border-b border-gray-700">
                <td className="py-1 px-2 sm:py-2 sm:px-4 text-xs sm:text-sm text-white">{row.event}</td>
                <td className="py-1 px-2 sm:py-2 sm:px-4 text-xs sm:text-sm text-white">{row.date}</td>
                <td className="py-1 px-2 sm:py-2 sm:px-4 text-xs sm:text-sm text-white">{row.price}</td>
                <td className="py-1 px-2 sm:py-2 sm:px-4 text-xs sm:text-sm text-white">{row.venue}</td>
                <td className="py-1 px-2 sm:py-2 sm:px-4 text-xs sm:text-sm text-white">{row.ticketType}</td>
                <td className="py-1 px-2 sm:py-2 sm:px-4 text-xs sm:text-sm text-white">{row.quality}</td>
                <td className="py-1 px-2 sm:py-2 sm:px-4 text-xs sm:text-sm text-white">{row.totalSpent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentHistoryTable;
