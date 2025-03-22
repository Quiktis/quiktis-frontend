"use client";
import React, { useState } from "react";
import UserInfoBoxes from "@/components/dashboard/UserInfoBoxes";
import SearchBar from "@/components/ui/SearchBar";
import RecentHistoryTable from "@/components/dashboard/RecentHistoryTable";

const HistoryPage = () => {
  const [searchValue, setSearchValue] = useState("");

  const historyData = [
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
  ];

  return (
    <main className="p-4 md:p-8 bg-transparent min-h-screen text-white">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start mb-8 mt-10">
        {/* Left Column */}
        <div className="w-full md:w-[400px]">
          <UserInfoBoxes
            name="Maren Botosh"
            email="maren@example.com"
            phone="(225) 555-0118"
            address="2715 Ash Dr. San Jose, South Dakota 83475"
          />
        </div>
        {/* Right Column */}
        <div className="w-full md:flex-1 flex justify-center md:justify-end">
          <SearchBar
            placeholder="Search any event"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            inputClassName="w-full md:w-[300px]"
          />
        </div>
      </div>

      {/* Recent History Table Section */}
      <div className="mt-10 md:mt-20">
        <RecentHistoryTable
          data={historyData}
          startDate="04/05/2024"
          endDate="04/05/2024"
        />
      </div>
    </main>
  );
};

export default HistoryPage;
