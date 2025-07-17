import React, {useState, useEffect} from "react";
import EventRow, { Event } from "./EventRow";


interface MyEventsTableProps {
  events: Event[];
}

const headers = [
  "Event Name",
  "Date & Time",
  "Location",
  "Revenue Generated",
  "Ticket Type(s)",
  "Status",
];

const columnWidths = [
  "w-3/12", 
  "w-2/12", 
  "w-2/12", 
  "w-2/12", 
  "w-2/12", 
  "w-1/12", 
];

const MyEventsTable: React.FC<MyEventsTableProps> = ({ events }) => {

 

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-[#FF4D2A] to-transparent filter blur-3xl opacity-30 -z-10"></div>

      <div className="overflow-x-auto md:overflow-hidden bg-transparent relative">
        <table className="table-auto w-full divide-y divide-gray-700 text-white">
          <thead className="bg-transparent">
            <tr>
              {headers.map((h, i) => {
                const alignment =
                  i === 3 || i === 4 ? "text-center" : "text-left";
                return (
                  <th
                    key={h}
                    scope="col"
                    className={`
                      ${columnWidths[i]}
                      px-1 md:px-4 py-1 md:py-2
                      text-[10px] md:text-xs uppercase tracking-wide text-white
                      whitespace-nowrap
                      ${alignment}
                    `}>
                    {h}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700 bg-transparent text-[10px] md:text-sm">
            {events.map((ev) => (
              <EventRow key={ev.id} event={ev} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyEventsTable;
