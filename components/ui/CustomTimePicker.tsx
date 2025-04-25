import React, { useState } from "react";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";

const CustomTimePicker: React.FC = () => {
  const [showPicker, setShowPicker] = useState(false);
  const [selectedHour, setSelectedHour] = useState<number | null>(null);
  const [selectedMinute, setSelectedMinute] = useState<number | null>(null);
  const [selectedPeriod, setSelectedPeriod] = useState<"AM" | "PM" | null>(null);

  const togglePicker = () => setShowPicker((prev) => !prev);

  const handleSelect = (
    type: "hour" | "minute" | "period",
    value: number | "AM" | "PM"
  ) => {
    if (type === "hour") setSelectedHour(value as number);
    else if (type === "minute") setSelectedMinute(value as number);
    else setSelectedPeriod(value as "AM" | "PM");

    // Auto-close if all selected
    const allSet = {
      hour: type === "hour" ? true : selectedHour !== null,
      minute: type === "minute" ? true : selectedMinute !== null,
      period: type === "period" ? true : selectedPeriod !== null,
    };

    if (allSet.hour && allSet.minute && allSet.period) {
      setTimeout(() => setShowPicker(false), 100); // a slight delay feels smoother
    }
  };

  /*const handleSelect = (type: "hour" | "minute" | "period", value: number | "AM" | "PM") => {
    if (type === "hour") setSelectedHour(value as number);
    else if (type === "minute") setSelectedMinute(value as number);
    else setSelectedPeriod(value as "AM" | "PM");
  };*/

  const selectedTime =
    selectedHour !== null &&
    selectedMinute !== null &&
    selectedPeriod !== null
      ? `${String(selectedHour).padStart(2, "0")}:${String(selectedMinute).padStart(2, "0")} ${selectedPeriod}`
      : "";

  return (
    <div className="relative inline-block font-inter text-sm">
      <div className="flex">
        <button
          type="button"
          onClick={togglePicker}
          className="grid place-items-center h-[3.4em] w-[3.55em] bg-white rounded-l-md"
        >
          <Image src="/icons/clock.svg" alt="clock" width={26} height={26} />
        </button>
        <input
          type="text"
          value={selectedTime}
          readOnly
          placeholder="HH:MM"
          className="font-inter p-3 border bg-inherit border-[#ffffff56] rounded-r-md focus:ring-2 focus:outline-none w-[7em] md:w-[13.67em]"
        />
      </div>

      {showPicker && (
        <div className="absolute top-14 md:left-0 left-[-5em] bg-[#1b1b1b] rounded-xl shadow-lg border border-[#ffffff56] z-20 p-4">
          <div className="grid w-full">
            <button
              type="button"
              onClick={() => setShowPicker(false)}
              className="text-white ml-auto"
            >
              <IoMdClose size={18} />
            </button>
          </div>

          <div className="flex flex-col gap-5 mt-2">
            {/* Hour Select */}
            <div className="flex gap-3">
            <div>
              <label className="block mb-2 font-medium text-white">Hour</label>
              <select
                value={selectedHour ?? ""}
                onChange={(e) => handleSelect("hour", parseInt(e.target.value))}
                className="w-24 p-2 border border-[#ffffff56] text-white rounded-md bg-[#1b1b1b] focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="" disabled>Select</option>
                {Array.from({ length: 12 }, (_, i) => i + 1).map((h) => (
                  <option key={h} value={h}>
                    {String(h).padStart(2, "0")}
                  </option>
                ))}
              </select>
            </div>

            {/* Minute Select */}
            <div>
              <label className="block mb-2 font-medium text-white">Minute</label>
              <select
                value={selectedMinute ?? ""}
                onChange={(e) => handleSelect("minute", parseInt(e.target.value))}
                className="w-24 p-2 border border-[#ffffff56] text-white rounded-md bg-[#1b1b1b] focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="" disabled>Select</option>
                {Array.from({ length: 60 }, (_, m) => (
                  <option key={m} value={m}>
                    {String(m).padStart(2, "0")}
                  </option>
                ))}
              </select>
            </div>
            </div>
            

            {/* AM/PM Toggle Buttons */}
            
              <div className="grid grid-cols-1 gap-3">
                {["AM", "PM"].map((period) => (
                  <button
                    key={period}
                    type="button"
                    onClick={() => handleSelect("period", period as "AM" | "PM")}
                    className={`px-4 py-2 rounded-md border text-sm font-semibold ${
                      selectedPeriod === period
                        ? "bg-white text-black border-white"
                        : "bg-transparent text-white border-[#ffffff56]"
                    }`}
                  >
                    {period}
                  </button>
                ))}
              </div>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomTimePicker;
