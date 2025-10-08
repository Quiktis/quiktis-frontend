import React from "react";
import { IoMdCheckmark } from "react-icons/io";

interface CheckInRow {
  name: string;
  status: boolean;
  ticketType: string;
  time: string;
}

interface CheckInTableProps {
  data: CheckInRow[];
}

const CheckInTable: React.FC<CheckInTableProps> = ({ data }) => {
  const paddedData = [...data];
  while (paddedData.length < 70) {
    paddedData.push({
      name: "Terry Botosh",
      ticketType: "Ticket name",
      time: "20:19",
      status: true,
    });
  }

  return (
    <div className="bg-[#111111] rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-4">Check‑in Status</h3>

      <div
        className="overflow-y-auto max-h-[400px] pr-2"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "#FF4D2A transparent",
        }}>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-gray-400 text-sm">
              <th className="pb-2 font-medium">Name</th>
              <th className="pb-2 font-medium">Status</th>
              <th className="pb-2 font-medium">Ticket Type</th>
              <th className="pb-2 font-medium">Time</th>
            </tr>
          </thead>
          <tbody>
            {paddedData.map((row, i) => (
              <tr key={i} className="border-b border-white text-sm">
                <td className="py-3">{row.name}</td>
                <td className="py-3 text-[#FF4D2A]">
                  {row.status && <IoMdCheckmark size={20} />}
                </td>
                <td className="py-3">{row.ticketType}</td>
                <td className="py-3">{row.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <style jsx>{`
        div::-webkit-scrollbar {
          width: 4px;
        }
        div::-webkit-scrollbar-thumb {
          background-color: #ff4d2a;
          border-radius: 10px;
        }
        div::-webkit-scrollbar-track {
          background: transparent;
        }
      `}</style>
    </div>
  );
};

export default CheckInTable;
