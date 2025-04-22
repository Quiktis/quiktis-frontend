import React from "react";

interface NoCheckInRow {
  name: string;
  ticketType: string;
}

interface NoCheckInTableProps {
  data: NoCheckInRow[];
}

const NoCheckInTable: React.FC<NoCheckInTableProps> = ({ data }) => {
  const paddedData = [...data];
  while (paddedData.length < 245) {
    paddedData.push({
      name: "Paituy Lubin",
      ticketType: "Ticket name",
    });
  }

  return (
    <div className="bg-[#111111] rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-4">
        Attendees who haven’t checked in ({paddedData.length})
      </h3>

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
              <th className="pb-2 font-medium">Ticket Type</th>
            </tr>
          </thead>
          <tbody>
            {paddedData.map((row, i) => (
              <tr key={i} className="text-sm border-b border-white mt-3">
                <td className="py-3">{row.name}</td>
                <td className="py-3">{row.ticketType}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <style jsx>{`
        div::-webkit-scrollbar {
          width: 4px; /* reduced from 6px */
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

export default NoCheckInTable;
