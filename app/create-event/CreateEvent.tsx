"use client"

import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import { Textarea } from "@/components/ui/Textarea"
import { Switch } from "@/components/ui/Switch"
import { Calendar, MapPin, ImageIcon, Settings, Ticket, Shield, Users, Bell, Search } from "lucide-react"

import CustomDatePicker2 from "@/components/ui/CustomDatePicker2"
import CustomTimePicker2 from "@/components/ui/CustomTimePicker2"
import { TimeData, TimeUnit } from "@/constant/customTypes"

import Input from "@/components/ui/Input"
import Button from "@/components/ui/Button"
import Label from "@/components/ui/Label"



interface EventData {
  name: string
  startDate: Date | null
  startTime: TimeUnit | null
  endDate: Date | null
  endTime: TimeUnit | null
  location: string
  description: string
  isPaid: boolean
  requiresApproval: boolean
  seatCapacity: number
  isPublic: boolean
  coverImage: File | null
  theme: string
}

const THEME_COLORS = [
  { name: "Orange", color: "#FF6B35" },
  { name: "Blue", color: "#4A90E2" },
  { name: "Green", color: "#7ED321" },
  { name: "Purple", color: "#9013FE" },
  { name: "Pink", color: "#F5A623" },
  { name: "Red", color: "#D0021B" },
  { name: "Teal", color: "#50E3C2" },
  { name: "Indigo", color: "#5856D6" },
]

const now = new Date()

const getTimeData = (date: Date): TimeData["startTime"] => {
  let hour = date.getHours()
  const minute = date.getMinutes()
  const period = hour >= 12 ? "PM" : "AM"

  // convert to 12-hour format
  hour = hour % 12
  hour = hour === 0 ? 12 : hour

  return {
    hour,
    minute,
    period,
  }
}

const createEvent = async (eventData: EventData) => {
  const formData = new FormData()

  Object.entries(eventData).forEach(([key, value]) => {
    if (key === "coverImage") {
      if (value) formData.append("coverImage", value)
    } else {
      formData.append(key, String(value))
    }
  })

  const response = await fetch("/api/events", {
    method: "POST",
    body: formData,
  })

  if (!response.ok) {
    throw new Error("Failed to create event")
  }

  return response.json()
}

export default function CreateEventPage() {
  const [eventData, setEventData] = useState<EventData>({
    name: "",
    startDate: now,
    startTime: null,
    endDate: now,
    endTime: null,
    location: "",
    description: "",
    isPaid: false,
    requiresApproval: false,
    seatCapacity: 0,
    isPublic: true,
    coverImage: null,
    theme: THEME_COLORS[0].color,
  })

  const [showThemeSelector, setShowThemeSelector] = useState(false)
  const [imagePreview, setImagePreview] = useState<string | null>(null)

  const createEventMutation = useMutation({
    mutationFn: createEvent,
    onSuccess: (data) => {
      console.log("Event created successfully:", data)
    },
    onError: (error) => {
      console.error("Error creating event:", error)
    },
  })

  const handleInputChange = (field: keyof EventData, value: string | boolean | number | File | null) => {
    setEventData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      handleInputChange("coverImage", file)

      const reader = new FileReader()
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleThemeSelect = (color: string) => {
    handleInputChange("theme", color)
    setShowThemeSelector(false)
  }

  const handleSubmit = () => {
    createEventMutation.mutate(eventData)
  }

  return (
    <div className="relative min-h-screen text-white">
     

      {/* Main Content */}
      <div className=" flex flex-col gap-4  lg:grid grid-cols-[1fr_1.5fr] lg:gap-8 p-1 md:p-8 w-[95%] lg:w-[90%] xl:max-w-[80%] mx-auto pt-[6em] md:pt-[10em]">
        {/* Left Column */}
        <div className="w-full lg:w-[300px] xl:w-[400px] space-y-6">
          {/* Event Cover */}
          <div className="relative overflow-hidden">
            <div className="w-full h-[300px] lg:h-[300px] xl:h-[400px] rounded-[2.5em] overflow-hidden bg-gradient-to-br from-orange-200 via-orange-300 to-red-400">
              {imagePreview ? (
                <img
                  src={imagePreview || "/cover-image-placeholder.png"}
                  alt="Event cover"
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src="/cover-image-placeholder.png"
                  alt="Event cover with gradient waves"
                  className="w-full h-full object-cover"
                />
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="cover-image-upload"
              />
              <label
                htmlFor="cover-image-upload"
                className="absolute bottom-0 left-0 right-0 transform flex items-center gap-2 bg-[#FFFFFF0F] backdrop-blur-sm shadow-md text-white px-4 py-4 rounded-b-[2.5em] hover:bg-black/10 transition-colors cursor-pointer justify-center"
              >
                <span className="w-fit mx-auto flex gap-1 items-center text-black"><ImageIcon className="w-4 h-4" />
                Add event cover</span>
              </label>
            </div>
          </div>

          {/* Choose Theme */}
          <div className="relative">
            <button
              onClick={() => setShowThemeSelector(!showThemeSelector)}
              className="z-30 flex items-center gap-3 bg-[#FFFFFF0F] backdrop-blur-xl text-white px-4 py-3 rounded-lg hover:bg-[#3a3d4a] transition-colors w-full text-center "
            >
              <span className="w-fit mx-auto">Choose Theme</span>
            </button>

            {showThemeSelector && (
              <div className="absolute top-full mt-2 left-0 right-0 bg-[#2a2d3a] rounded-2xl p-4 z-10 border border-gray-700">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-400">Select Theme Color</span>
                  <button onClick={() => setShowThemeSelector(false)} className="text-gray-400 hover:text-white">
                    <Calendar className="w-4 h-4" />
                  </button>
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {THEME_COLORS.map((theme) => (
                    <button
                      key={theme.name}
                      onClick={() => handleThemeSelect(theme.color)}
                      className={`w-12 h-12 rounded-full border-2 transition-all hover:scale-110 ${
                        eventData.theme === theme.color ? "border-white shadow-lg" : "border-transparent"
                      }`}
                      style={{ backgroundColor: theme.color }}
                      title={theme.name}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1 space-y-4">
          {/* Public Toggle */}
          <div className="flex items-center gap-2 bg-[#FFFFFF0F] backdrop-blur-xl  px-4 py-2 rounded-lg w-fit">
            <div className="w-4 h-4 bg-gray-600 rounded grid place-items-center">
              <div className="w-2 h-2 bg-white rounded"></div>
            </div>
            <span className="text-sm text-white">Public</span>
          </div>

          {/* Event Name */}
          <div className="max-sm:pt-[1em]">
            <Input
            style={{
              fontSize: "3em"
            }}
              placeholder="Event Name Here..."
              value={eventData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className="z-30 py-2 bg-transparent font-instrument-serif-i border-none font-light placeholder:text-gray-500 px-0 focus-visible:ring-0 "
            />
          </div>

          {/* Date and Time */}
          <div className="grid gap-4 max-md:grid-cols-1 md:grid-cols-[75%_25%]">
              <div className="space-y-4 font-inter">
              <div className="relative z-50 max-sm:block flex items-center bg-[#FFFFFF0F] backdrop-blur-xl rounded-xl py-1 max-sm:p-3 max-sm:space-y-2 pl-6 pr-1 w-full ">
                 <span className=" w-[7em]  ">Start</span>
                <div className="flex items-center gap-4 flex-1">
                  <div className="grid grid-cols-2 max-sm:w-[100%] min-w-[18em] gap-1 h-[max-content] mr-0 ml-auto">
                    <div className="rounded-sm text-white min-w-[120px] w-full h-full">


                    <CustomDatePicker2 selectedDate={eventData.startDate}
                                      onDateSelect={(date: any) => {
                                        handleInputChange("startDate", date);
                                        // Reset end date if it's before new start
                                        //if (endDate && date > endDate) {
                                          //setEndDate(null);
                                        //}
                                      }}/>
                  </div>
                  <div className=" rounded-sm text-white min-w-[120px] w-full h-full ">
                    <CustomTimePicker2
                        timeData={{
                          startTime: eventData.startTime,
                          endTime: eventData.endTime,
                        }}
                        field="startTime"
                        handleTimeDataChange={(field, timeField, value) => {
                          setEventData((prev) => ({
                            ...prev,
                            [field]: {
                              ...((prev[field] as TimeUnit) || { hour: null, minute: null, period: null }),
                              [timeField]: value,
                            },
                          }))
                        }}
                      />

                  </div>
                  </div>
                </div>
              </div>


              <div className="relative z-40 max-sm:block flex items-center bg-[#FFFFFF0F] backdrop-blur-xl rounded-xl py-1 max-sm:p-3 max-sm:space-y-2 pl-6 pr-1 w-full">
                <span className=" w-[7em]  ">End</span>
                <div className="flex items-center gap-4 flex-1">
                  <div className="grid grid-cols-2 max-sm:w-[100%] min-w-[18em] gap-1 h-[max-content] mr-0 ml-auto">
                    <div className="rounded-sm text-white min-w-[120px] w-full h-full">


                    <CustomDatePicker2 selectedDate={eventData.endDate}
                                      onDateSelect={(date: any) => {
                                        handleInputChange("endDate", date);
                                        // Reset end date if it's before new start
                                        //if (endDate && date > endDate) {
                                          //setEndDate(null);
                                        //}
                                      }}/>
                  </div>
                  <div className="rounded-sm text-white min-w-[120px] w-full h-full">
                    <CustomTimePicker2
                        timeData={{
                          startTime: eventData.startTime,
                          endTime: eventData.endTime,
                        }}
                        field="endTime"
                        handleTimeDataChange={(field, timeField, value) => {
                          setEventData((prev) => ({
                            ...prev,
                            [field]: {
                              ...((prev[field] as TimeUnit) || { hour: null, minute: null, period: null }),
                              [timeField]: value,
                            },
                          }))
                        }}
                      />

                  </div>
                  </div>
                </div>
            </div>

          
            </div>

            <div className="bg-[#FFFFFF0F] grid backdrop-blur-xl rounded-xl  w-full h-full px-3 py-3 font-inter max-md:hidden">
              <div className="mb-0 mt-auto flex flex-col leading-5"> 
                <span>GMT+0100 </span>
                <span>Lagos</span>
                </div>
            </div>
          </div>
          

          {/* Location */}
          <div className="bg-[#FFFFFF0F] backdrop-blur-xl p-4 rounded-2xl">
            <div className="flex items-center gap-2 text-gray-400">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Select Event Location</span>
            </div>
            {/*<Input
              placeholder="Offline location or virtual link"
              value={eventData.location}
              onChange={(e) => handleInputChange("location", e.target.value)}
              className="bg-transparent border-none text-white placeholder:text-gray-500 p-0 focus-visible:ring-0"
            />*/}
          </div>

          {/* Description */}
          <div className="bg-[#FFFFFF0F] backdrop-blur-xl p-4 py-2 rounded-2xl">

            <Input
              placeholder="Add Event Description"
              value={eventData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              className="bg-transparent border-none text-white placeholder:text-gray-500 p-0 focus-visible:ring-0 resize-none"
            />
          </div>

          {/* Event Settings */}
          <div className="space-y-4 max-sm:pt-[2em]">
            <h3 className="text-lg font-medium text-white">Event Settings</h3>

            <div className="bg-[#FFFFFF0F] backdrop-blur-xl rounded-2xl p-1">
              {/* Ticket Setting */}
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <Ticket className="w-5 h-5 text-gray-400" />
                  <span className="text-white">Ticket</span>
                </div>
                <Switch
                  checked={eventData.isPaid}
                  onCheckedChange={(checked) => handleInputChange("isPaid", checked)}
                />
              </div>

              {/* Admin Approval */}
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-gray-400" />
                  <span className="text-white">Approval</span>
                </div>
                <Switch
                  checked={eventData.requiresApproval}
                  onCheckedChange={(checked) => handleInputChange("requiresApproval", checked)}
                />
              </div>

              {/* Seat Capacity */}
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-gray-400" />
                  <span className="text-white">Set Capacity</span>
                </div>
                <Input
                  type="number"
                  min="0"
                  value={eventData.seatCapacity}
                  onChange={(e) => handleInputChange("seatCapacity", Number.parseInt(e.target.value) || 0)}
                  className="w-20 bg-[#1a1b23] border-gray-600 text-white text-center rounded-lg"
                  placeholder="0"
                />
              </div>
            </div>
          </div>

          {/* Create Event Button */}
          <Button
            onClick={handleSubmit}
            disabled={createEventMutation.isPending}
            className="w-full bg-white text-black hover:bg-gray-100 py-6 text-lg font-medium rounded-2xl"
          >
            {createEventMutation.isPending ? "Creating Event..." : "Create Event"}
          </Button>
        </div>
      </div>
    </div>
  )
}
