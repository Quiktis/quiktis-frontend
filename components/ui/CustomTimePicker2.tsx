import React, { useEffect, useState } from "react"
import Image from "next/image"
import { IoMdClose } from "react-icons/io"

export type TimeUnit = {
  hour: number | null
  minute: number | null
  period: "AM" | "PM" | null
}

interface CustomTimePickerProps {
  timeData: {
    startTime: TimeUnit | null
    endTime: TimeUnit | null
  }
  field: "startTime" | "endTime"
  handleTimeDataChange: (
    field: "startTime" | "endTime",
    timeField: "hour" | "minute" | "period",
    value: number | "AM" | "PM"
  ) => void
}

const CustomTimePicker2: React.FC<CustomTimePickerProps> = ({
  timeData,
  field,
  handleTimeDataChange,
}) => {
  const [showPicker, setShowPicker] = useState(false)
  const [displayTime, setDisplayTime] = useState("")

  // Local selectedTime used for instant UI feedback (avoids stale values)
  const [selectedTime, setSelectedTime] = useState<TimeUnit>({
    hour: null,
    minute: null,
    period: null,
  })

  const getCurrentTime = (): TimeUnit => {
    const now = new Date()
    let hour = now.getHours()
    const minute = now.getMinutes()
    const period = hour >= 12 ? "PM" : "AM"
    hour = hour % 12
    hour = hour === 0 ? 12 : hour
    return { hour, minute, period }
  }

  // Normalize incoming parent value to guaranteed TimeUnit (no undefined)
  const normalize = (t: TimeUnit | null | undefined): TimeUnit => ({
    hour: t && typeof t.hour === "number" && !Number.isNaN(t.hour) ? t.hour : null,
    minute: t && typeof t.minute === "number" && !Number.isNaN(t.minute) ? t.minute : null,
    period: t && (t.period === "AM" || t.period === "PM") ? t.period : null,
  })

  // Keep local selectedTime synced with parent (but always normalized)
  useEffect(() => {
    const incoming = normalize(timeData[field])
    setSelectedTime(incoming)
  }, [timeData, field])

  // Build display string: if nothing selected -> show system time (fallback)
  // otherwise show partial/complete selection using placeholders for missing parts
  useEffect(() => {
    const { hour, minute, period } = selectedTime

    const anySelected = hour !== null || minute !== null || period !== null

    if (!anySelected) {
      const sys = getCurrentTime()
      const hh = String(sys.hour).padStart(2, "0")
      const mm = String(sys.minute).padStart(2, "0")
      setDisplayTime(`${hh}:${mm} ${sys.period}`)
      return
    }

    // Use placeholders for missing parts instead of "undefined"/"null"
    const hh = hour !== null && !Number.isNaN(hour) ? String(hour).padStart(2, "0") : "--"
    const mm = minute !== null && !Number.isNaN(minute) ? String(minute).padStart(2, "0") : "--"
    const pp = period !== null ? period : "--"

    setDisplayTime(`${hh}:${mm} ${pp}`)
  }, [selectedTime])

  const togglePicker = () => setShowPicker((s) => !s)

  // safe parse helper for selects
  const safeParseInt = (val: string) => {
    const n = parseInt(val, 10)
    return Number.isNaN(n) ? null : n
  }

  const handleSelect = (
    type: "hour" | "minute" | "period",
    value: number | "AM" | "PM"
  ) => {
    // update local selectedTime immediately for instant UI feedback
    setSelectedTime((prev) => {
      const updated = { ...prev, [type]: value as any }
      return updated
    })

    // push update to parent
    handleTimeDataChange(field, type, value)

    // determine updated full-time to know whether to auto-close
    const current = normalize(timeData[field])
    // but prefer the newly-selected local value (parent might still be async)
    const updated = {
      ...current,
      ...((type === "hour" || type === "minute") ? { [type]: value as number } : { [type]: value }),
    } as TimeUnit

    // only close when all required parts are present and valid
    if (
      updated.hour !== null &&
      !Number.isNaN(updated.hour) &&
      updated.minute !== null &&
      !Number.isNaN(updated.minute) &&
      (updated.period === "AM" || updated.period === "PM")
    ) {
      setTimeout(() => setShowPicker(false), 150)
    }
  }

  // Derived 'current' used for select values (never undefined)
  const current = normalize(timeData[field])

  return (
    <div className="relative inline-blockw-full z-50">
      <div className="flex items-center shadow-sm rounded-r-lg overflow-hidden">
        <button
          type="button"
          onClick={togglePicker}
          className="grid place-items-center  px-5 py-2 h-full w-full bg-[#FFFFFF0F]/10 transition"
          aria-label={`Open ${field} picker`}
        >
          

          {`${displayTime}`}
        </button>

      </div>

      {showPicker && (
        <div className="absolute top-14 md:left-0 left-[-5em] bg-[#1b1b1b] rounded-xl shadow-lg border border-[#ffffff56] z-20 p-4 min-w-[18rem]">
          <div className="grid w-full">
            <button
              type="button"
              onClick={() => setShowPicker(false)}
              className="text-white ml-auto"
              aria-label="Close time picker"
            >
              <IoMdClose size={18} />
            </button>
          </div>

          <div className="flex flex-col gap-5 mt-2">
            {/* Hour & Minute */}
            <div className="flex gap-3">
              <div>
                <label className="block mb-2 font-medium text-white">Hour</label>
                <select
                  value={
                    // prefer local selectedTime but fall back to normalized parent
                    selectedTime.hour !== null ? String(selectedTime.hour) : (current.hour !== null ? String(current.hour) : "")
                  }
                  onChange={(e) => {
                    const parsed = safeParseInt(e.target.value)
                    if (parsed === null) return
                    handleSelect("hour", parsed)
                  }}
                  className="w-24 p-2 border border-[#ffffff56] text-white rounded-md bg-[#1b1b1b] focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option value="" disabled>
                    Select
                  </option>
                  {Array.from({ length: 12 }, (_, i) => i + 1).map((h) => (
                    <option key={h} value={String(h)}>
                      {String(h).padStart(2, "0")}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block mb-2 font-medium text-white">Minute</label>
                <select
                  value={
                    selectedTime.minute !== null ? String(selectedTime.minute) : (current.minute !== null ? String(current.minute) : "")
                  }
                  onChange={(e) => {
                    const parsed = safeParseInt(e.target.value)
                    if (parsed === null) return
                    handleSelect("minute", parsed)
                  }}
                  className="w-24 p-2 border border-[#ffffff56] text-white rounded-md bg-[#1b1b1b] focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option value="" disabled>
                    Select
                  </option>
                  {Array.from({ length: 60 }, (_, m) => (
                    <option key={m} value={String(m)}>
                      {String(m).padStart(2, "0")}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* AM/PM */}
            <div className="grid grid-cols-1 gap-3">
              {(["AM", "PM"] as const).map((period) => (
                <button
                  key={period}
                  type="button"
                  onClick={() => handleSelect("period", period)}
                  className={`px-4 py-2 rounded-md border text-sm font-semibold ${
                    (selectedTime.period ?? current.period) === period
                      ? "bg-white text-black border-white"
                      : "bg-transparent text-white border-[#ffffff56] hover:bg-white/10"
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
  )
}

export default CustomTimePicker2
