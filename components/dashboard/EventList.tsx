"use client";

import React from "react";
import { MdOutlineAnalytics } from "react-icons/md";
import { CiCircleRemove } from "react-icons/ci";

interface Event {
  id: number;
  name: string;
  date: string;
  location: string;
  status: string;
  thumbnail?: string;
}

const dummyEvents: Event[] = [
  {
    id: 1,
    name: "Talent Show",
    date: "May 23, 2024",
    location: "Los Angeles",
    status: "Up Coming",
    thumbnail: "/images/placeholder.png",
  },
  {
    id: 2,
    name: "Talent Show",
    date: "May 23, 2024",
    location: "Los Angeles",
    status: "Up Coming",
    thumbnail: "/images/placeholder.png",
  },
  {
    id: 3,
    name: "Talent Show",
    date: "May 23, 2024",
    location: "Los Angeles",
    status: "Up Coming",
    thumbnail: "/images/placeholder.png",
  },
  {
    id: 4,
    name: "Talent Show",
    date: "May 23, 2024",
    location: "Los Angeles",
    status: "Up Coming",
    thumbnail: "/images/placeholder.png",
  },
  {
    id: 5,
    name: "Talent Show",
    date: "May 23, 2024",
    location: "Los Angeles",
    status: "Up Coming",
    thumbnail: "/images/placeholder.png",
  },
  {
    id: 6,
    name: "Talent Show",
    date: "May 23, 2024",
    location: "Los Angeles",
    status: "Up Coming",
    thumbnail: "/images/placeholder.png",
  },
];

const EventList: React.FC = () => {
  return (
    <div className="mt-8">
      <div className="hidden md:block overflow-x-auto">
        <div className="bg-[#111111] rounded-lg p-6 w-full">
          <table className="min-w-full text-left">
            <tbody className="divide-y-2 divide-gray-700">
              {dummyEvents.map((event) => (
                <tr key={event.id} className="hover:bg-black/20">
                  <td className="px-4 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-500 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-white">{event.name}</p>
                        <p className="text-sm text-gray-400">{event.date}</p>
                      </div>
                    </div>
                  </td>

                  <td className="px-4 py-6 text-sm text-gray-300">
                    {event.location}
                  </td>

                  <td
                    className="px-4 py-6 text-sm"
                    style={{ paddingLeft: "30px" }}>
                    {event.status === "Up Coming" && (
                      <span className="px-3 py-1 border border-blue-400 text-blue-400 rounded-[5px] text-xs font-medium">
                        {event.status}
                      </span>
                    )}
                  </td>

                  <td className="px-4 py-6">
                    <div className="flex justify-end items-center gap-4">
                      <div className="flex flex-col items-center">
                        <button
                          title="Analytics"
                          className="text-white hover:opacity-75 transition-opacity">
                          <MdOutlineAnalytics size={18} />
                        </button>
                        <span className="text-xs text-gray-400 mt-1">
                          analytics
                        </span>
                      </div>
                      <div className="flex flex-col items-center">
                        <button
                          title="Remove"
                          className="text-white hover:opacity-75 transition-opacity">
                          <CiCircleRemove size={18} />
                        </button>
                        <span className="text-xs text-gray-400 mt-1">
                          remove
                        </span>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="md:hidden space-y-4">
        {dummyEvents.map((event) => (
          <div
            key={event.id}
            className="bg-[#111111] rounded-lg p-4 flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gray-500 flex-shrink-0"></div>
              <div>
                <p className="font-semibold text-white text-lg">{event.name}</p>
                <p className="text-sm text-gray-400">{event.date}</p>
              </div>
            </div>
            <div className="text-gray-300">{event.location}</div>
            <div>
              {event.status === "Up Coming" && (
                <span className="px-3 py-1 border border-blue-400 text-blue-400 rounded-[5px] text-xs font-medium">
                  {event.status}
                </span>
              )}
            </div>
            <div className="flex justify-between">
              <button
                title="Analytics"
                className="flex items-center gap-2 text-white hover:opacity-75 transition-opacity">
                <MdOutlineAnalytics size={18} />
                <span className="text-xs">analytics</span>
              </button>
              <button
                title="Remove"
                className="flex items-center gap-2 text-white hover:opacity-75 transition-opacity">
                <CiCircleRemove size={18} />
                <span className="text-xs">remove</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventList;
