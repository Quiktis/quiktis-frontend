import React, { useState } from "react";
import Image from "next/image";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

interface CustomDatePickerProps {
  selectedDate: Date | null;
  onDateSelect: (date: Date) => void;
  minDate?: Date;
  label?: string;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  selectedDate,
  onDateSelect,
  minDate,
  label,
}) => {
  const today = new Date();
  const [showPicker, setShowPicker] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const togglePicker = () => setShowPicker((prev) => !prev);

  const getDaysInMonth = (year: number, month: number): number =>
    new Date(year, month + 1, 0).getDate();

  const getFirstDayOfMonth = (year: number, month: number): number =>
    new Date(year, month, 1).getDay();

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDayIndex = getFirstDayOfMonth(currentYear, currentMonth);

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((prev) => prev - 1);
    } else {
      setCurrentMonth((prev) => prev - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((prev) => prev + 1);
    } else {
      setCurrentMonth((prev) => prev + 1);
    }
  };

  const isBeforeMinDate = (date: Date) =>
    minDate && date < new Date(minDate.setHours(0, 0, 0, 0));

  const formatDate = (date: Date) =>
    `${String(date.getDate()).padStart(2, "0")}/${String(
      date.getMonth() + 1
    ).padStart(2, "0")}/${String(date.getFullYear()).slice(-2)}`;

  return (
    <div className="relative inline-block font-inter">
      <div className="flex">
        <button
          type="button"
          onClick={togglePicker}
          className="grid place-items-center h-[3.1em] w-[3.1em] bg-white rounded-l-md"
        >
          <Image
            src="/icons/calendar.svg"
            alt="icon"
            height={24}
            width={24}
            className="m-auto"
          />
        </button>
        <input
          type="text"
          disabled
          value={selectedDate ? formatDate(selectedDate) : ""}
          placeholder="DD/MM/YY"
          className="p-3 border border-[#ffffff56] bg-transparent rounded-r-md w-[6.5em] md:w-[12em] focus:ring-2 focus:outline-none"
        />
      </div>

      {showPicker && (
        <div className="absolute top-12 left-0 bg-[#1b1b1b] text-white rounded shadow p-4 z-10 w-72">
          <div className="flex justify-between mb-2 items-center">
            <button type="button" onClick={handlePrevMonth}>
              &lt;
            </button>
            <span className="font-semibold">
              {new Date(currentYear, currentMonth).toLocaleString("default", {
                month: "long",
                year: "numeric",
              })}
            </span>
            <button type="button" onClick={handleNextMonth}>
              &gt;
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1 text-center mb-2 text-sm">
            {daysOfWeek.map((day) => (
              <div key={day} className="font-medium">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1 text-center">
            {Array.from({ length: firstDayIndex }).map((_, i) => (
              <div key={`empty-${i}`} />
            ))}

            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1;
              const date = new Date(currentYear, currentMonth, day);
              const isDisabled = isBeforeMinDate(date);

              return (
                <button
                  type="button"
                  key={day}
                  onClick={() => {
                    if (!isDisabled) {
                      onDateSelect(date);
                      setShowPicker(false);
                    }
                  }}
                  className={`py-1 rounded text-sm ${
                    isDisabled
                      ? "text-gray-500 cursor-not-allowed"
                      : "hover:bg-blue-500 hover:text-white"
                  }`}
                  disabled={isDisabled}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomDatePicker;
