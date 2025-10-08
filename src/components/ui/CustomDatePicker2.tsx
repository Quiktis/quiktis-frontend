import React, { useState } from "react"
import Image from "next/image"

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const now = new Date()

interface CustomDatePickerProps {
  selectedDate: Date | null
  onDateSelect: (date: Date) => void
  minDate?: Date
  label?: string
}

type ViewMode = "day" | "month" | "year"

const CustomDatePicker2: React.FC<CustomDatePickerProps> = ({
  selectedDate,
  onDateSelect,
  minDate,
  label,
}) => {
  const today = new Date()
  const [showPicker, setShowPicker] = useState(false)
  const [currentMonth, setCurrentMonth] = useState(today.getMonth())
  const [currentYear, setCurrentYear] = useState(today.getFullYear())
  const [viewMode, setViewMode] = useState<ViewMode>("day")

  const togglePicker = () => setShowPicker((prev) => !prev)

  const getDaysInMonth = (year: number, month: number): number =>
    new Date(year, month + 1, 0).getDate()

  const getFirstDayOfMonth = (year: number, month: number): number =>
    new Date(year, month, 1).getDay()

  const daysInMonth = getDaysInMonth(currentYear, currentMonth)
  const firstDayIndex = getFirstDayOfMonth(currentYear, currentMonth)

  const handlePrev = () => {
    if (viewMode === "day") {
      if (currentMonth === 0) {
        setCurrentMonth(11)
        setCurrentYear((prev) => prev - 1)
      } else {
        setCurrentMonth((prev) => prev - 1)
      }
    } else if (viewMode === "year") {
      setCurrentYear((prev) => prev - 12)
    }
  }

  const handleNext = () => {
    if (viewMode === "day") {
      if (currentMonth === 11) {
        setCurrentMonth(0)
        setCurrentYear((prev) => prev + 1)
      } else {
        setCurrentMonth((prev) => prev + 1)
      }
    } else if (viewMode === "year") {
      setCurrentYear((prev) => prev + 12)
    }
  }

  const isBeforeMinDate = (date: Date) =>
    minDate && date < new Date(minDate.setHours(0, 0, 0, 0))

  const formatDate = (date: Date) =>
  date.toLocaleDateString("en-US", {
    weekday: "short", // Tue
    month: "short",   // Sep
    day: "numeric",   // 9
  })

  return (
    <div className="relative inline-block -50 h-full w-full">
      {label && (
        <label className="block text-sm mb-1 text-gray-300">{label}</label>
      )}

      {/* Trigger */}
      <div className="flex items-center shadow-sm rounded-l-lg overflow-hidden">
        <button
          type="button"
          onClick={togglePicker}
          className="relative z-10 grid place-items-center px-5 py-2 h-full w-full bg-[#FFFFFF0F]/10 transition"
        > {selectedDate
    ? formatDate(selectedDate)
    : label
    ? label
    : formatDate(now)}
    
        </button>

      </div>

      {showPicker && (
        <div className="absolute z-50 top-14 left-0 bg-[#1f1f1f] text-gray-200 rounded-xl shadow-lg border border-gray-700 p-4 w-80 animate-fadeIn">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <button
              type="button"
              onClick={handlePrev}
              className="px-2 py-1 rounded hover:bg-gray-700"
            >
              ←
            </button>

            <div className="flex items-center">
                {viewMode === "day" && (
                <button
                  type="button"
                  onClick={() => setViewMode("month")}
                  className="text-sm text-blue-400  hover:underline mr-[5px]"
                >
                  {new Date(0, currentMonth).toLocaleString("default", {
                    month: "long",
                  })}
                </button>
              )}
              <button
                type="button"
                onClick={() =>
                  setViewMode(viewMode === "year" ? "day" : "year")
                }
                className="text-sm font-semibold hover:underline"
              >
                {currentYear}
              </button>
              
            </div>

            <button
              type="button"
              onClick={handleNext}
              className="px-2 py-1 rounded hover:bg-gray-700"
            >
              →
            </button>
          </div>

          {/* Body */}
          {viewMode === "day" && (
            <>
              {/* Weekdays */}
              <div className="grid grid-cols-7 gap-2 text-center mb-2 text-xs text-gray-400">
                {daysOfWeek.map((day) => (
                  <div key={day} className="font-medium uppercase">
                    {day}
                  </div>
                ))}
              </div>

              {/* Days */}
              <div className="grid grid-cols-7 gap-2 text-center">
                {Array.from({ length: firstDayIndex }).map((_, i) => (
                  <div key={`empty-${i}`} />
                ))}

                {Array.from({ length: daysInMonth }).map((_, i) => {
                  const day = i + 1
                  const date = new Date(currentYear, currentMonth, day)
                  const isDisabled = isBeforeMinDate(date)
                  const isSelected =
                    selectedDate &&
                    date.toDateString() === selectedDate.toDateString()

                  return (
                    <button
                      key={day}
                      type="button"
                      onClick={() => {
                        if (!isDisabled) {
                          onDateSelect(date)
                          setShowPicker(false)
                        }
                      }}
                      className={`h-9 w-9 flex items-center justify-center rounded-md text-sm transition-all
                        ${
                          isDisabled
                            ? "text-gray-600 cursor-not-allowed"
                            : isSelected
                            ? "bg-blue-500 text-white font-medium"
                            : "hover:bg-blue-500 hover:text-white"
                        }`}
                      disabled={isDisabled}
                    >
                      {day}
                    </button>
                  )
                })}
              </div>
            </>
          )}

          {viewMode === "month" && (
            <div className="grid grid-cols-3 gap-3">
              {Array.from({ length: 12 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setCurrentMonth(i)
                    setViewMode("day")
                  }}
                  className={`py-2 rounded-md text-sm hover:bg-blue-500 hover:text-white transition ${
                    i === currentMonth ? "bg-blue-600 text-white" : ""
                  }`}
                >
                  {new Date(0, i).toLocaleString("default", { month: "short" })}
                </button>
              ))}
            </div>
          )}

          {viewMode === "year" && (
            <div className="grid grid-cols-3 gap-3">
              {Array.from({ length: 12 }).map((_, i) => {
                const year = currentYear - 6 + i
                return (
                  <button
                    key={year}
                    onClick={() => {
                      setCurrentYear(year)
                      setViewMode("month")
                    }}
                    className={`py-2 rounded-md text-sm hover:bg-blue-500 hover:text-white transition ${
                      year === currentYear ? "bg-blue-600 text-white" : ""
                    }`}
                  >
                    {year}
                  </button>
                )
              })}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default CustomDatePicker2
