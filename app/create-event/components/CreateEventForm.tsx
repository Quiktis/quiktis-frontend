import React from "react";
import { Switch } from "@/components/ui/Switch";
import { MapPin, Ticket, Shield, Users } from "lucide-react";
import CustomDatePicker2 from "@/components/ui/CustomDatePicker2";
import CustomTimePicker2 from "@/components/ui/CustomTimePicker2";
import { TimeUnit, NewEventData } from "@/constant/customTypes";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { Ticket as TicketType } from "@/app/types";



type EventData = {
  eventName: string
  description: string
  startDate: Date | null   // yyyy-mm-dd
  endDate: Date | null
  startTime: TimeUnit | null  // HH:mm
  endTime: TimeUnit | null
  location: string
  eventType: "paid" | "free" | string
  coverImage?: File | null | string | any
  eventTheme?: string
  approvalRequired?: boolean
  eventCapacity?: number
  tickets?: TicketType[]
}

interface CreateEventFormProps {
  eventData: EventData;
  setEventData: React.Dispatch<React.SetStateAction<EventData>>;
  eventSettings: string;
  setEventSettings: React.Dispatch<React.SetStateAction<string>>;
  handleInputChange: (field: keyof NewEventData, value: string | boolean | number | null | File) => void;
  handleTicketChange: (field: keyof TicketType, value: string | number) => void;
  loading: boolean;
  addTicket: () => void;
  removeTicket: (index: number) => void;
  handleSubmit: () => void;
  ticket: TicketType;
}

export default function CreateEventForm({
  eventData,
  setEventData,
  eventSettings,
  setEventSettings,
  handleInputChange,
  loading,
  ticket,
  handleTicketChange,
  addTicket,
  removeTicket,
  handleSubmit,
}: CreateEventFormProps) {
  return (
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
            fontSize: "3em",
          }}
          placeholder="Event Name Here..."
          value={eventData.eventName}
          onChange={(e) => handleInputChange("eventName", e.target.value)}
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
                  <CustomDatePicker2
                    selectedDate={eventData.startDate}
                    onDateSelect={(date: any) => {
                      handleInputChange("startDate", date);
                      // Reset end date if it's before new start
                      //if (endDate && date > endDate) {
                      //setEndDate(null);
                      //}
                    }}
                  />
                </div>
                <div className=" rounded-sm text-white min-w-[120px] w-full h-full ">
                  <CustomTimePicker2
                    timeData={{
                      startTime: eventData.startTime,
                      endTime: eventData.endTime,
                    }}
                    field="startTime"
                    handleTimeDataChange={(field, timeField, value) => {
                      setEventData((prev: any) => ({
                        ...prev,
                        [field]: {
                          ...((prev[field] as TimeUnit) || {
                            hour: null,
                            minute: null,
                            period: null,
                          }),
                          [timeField]: value,
                        },
                      }));
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
                  <CustomDatePicker2
                    selectedDate={eventData.endDate}
                    onDateSelect={(date: any) => {
                      handleInputChange("endDate", date);
                      // Reset end date if it's before new start
                      //if (endDate && date > endDate) {
                      //setEndDate(null);
                      //}
                    }}
                  />
                </div>
                <div className="rounded-sm text-white min-w-[120px] w-full h-full">
                  <CustomTimePicker2
                    timeData={{
                      startTime: eventData.startTime,
                      endTime: eventData.endTime,
                    }}
                    field="endTime"
                    handleTimeDataChange={(field, timeField, value) => {
                      setEventData((prev: any) => ({
                        ...prev,
                        [field]: {
                          ...((prev[field] as TimeUnit) || {
                            hour: null,
                            minute: null,
                            period: null,
                          }),
                          [timeField]: value,
                        },
                      }));
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
        <div className="flex items-center gap-2 text-gray-400 w-full">
          <div className="flex gap-2 w-full">
            <MapPin className="w-4 h-4 my-auto" />
            <span className="text-sm my-auto">Enter Event Location</span>{" "}
          </div>
        </div>
        <Input
          placeholder="Add Event Location"
          value={eventData.location}
          onChange={(e) => handleInputChange("location", e.target.value)}
          className="bg-transparent border-none text-white  mt-2 w-full placeholder:text-gray-500 p-0 focus-visible:ring-0 resize-none"
        />
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
      {/* Event Settings */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Event Settings</h3>

        <div className="flex flex-col w-full">
          {/* Ticket Type Toggle */}
          <section>
            <div className="flex items-center justify-between p-4 md:pt-6.5 px-6  bg-[#FFFFFF0F] backdrop-blur-xl rounded-t-2xl">
              <button
                onClick={() =>
                  eventSettings === "ticket"
                    ? setEventSettings("")
                    : setEventSettings("ticket")
                }
                className="flex items-center gap-3"
              >
                <Ticket className="w-5 h-5 text-gray-400" />
                <span>Ticket</span>
              </button>

              <button
                onClick={() =>
                  eventSettings === "ticket"
                    ? setEventSettings("")
                    : setEventSettings("ticket")
                }
                className="text-gray-500"
              >
                {eventData.eventType === "free" ? "Free" : "Paid"}
              </button>
            </div>

            {eventSettings === "ticket" && (
              <div className="space-y-3 text-left my-5 px-6">
                {/* Ticket Form */}
                <div className="flex items-center justify-between ">
                  <div className="flex flex-col gap-5 w-full">
                    <div className="flex justify-between gap-3">
                      <div className="flex flex-col">
                        <span className="md:text-lg font-medium">Free</span>
                        <span className="text-gray-400 text-[0.85em] max-md:max-w-[95%] max-sm:text-[0.68em]">
                          Your event is currently set for free without revenue
                          on ticket
                        </span>
                      </div>

                      <Switch
                        className="data-[state=checked]:bg-white data-[state=unchecked]:bg-[#4d4d4d] [&>span]:bg-black/90 my-auto"
                        checked={eventData.eventType === "free"}
                        onCheckedChange={(checked) =>
                          handleInputChange(
                            "eventType",
                            checked ? "free" : "paid"
                          )
                        }
                      />
                    </div>

                    <div className="flex justify-between gap-3">
                      <div className="flex flex-col">
                        <span className="md:text-lg font-medium">Paid</span>
                        <span className="text-gray-400 text-[0.85em] max-md:max-w-[95%] max-sm:text-[0.68em]">
                          Click here to set up your paid event
                        </span>
                      </div>

                      <Switch
                        className="data-[state=checked]:bg-white data-[state=unchecked]:bg-[#4d4d4d] [&>span]:bg-black/90 my-auto"
                        checked={eventData.eventType === "paid"}
                        onCheckedChange={(checked) =>
                          handleInputChange(
                            "eventType",
                            checked ? "paid" : "free"
                          )
                        }
                      />
                    </div>

                    <div className="space-y-3">
                      <h4>Ticket type</h4>
                      <Input
                        placeholder="e.g VIP, VVIP, Regular"
                        className="border-0 placeholder:text-gray-500 bg-[#212427] py-3"
                        value={ticket.name}
                        onChange={(e) =>
                          handleTicketChange("name", e.target.value)
                        }
                      />

                      {eventData.eventType !== "free" && (
                        <Input
                          type="number"
                          placeholder="Add price"
                          className="border-0 placeholder:text-gray-500  bg-[#212427] py-3"
                          value={ticket.price || ""}
                          onChange={(e) =>
                            handleTicketChange(
                              "price",
                              parseFloat(e.target.value)
                            )
                          }
                        />
                      )}

                      <Button
                        onClick={addTicket}
                        className="px-5 font-normal py-5 w-fit bg-[#212427] hover:bg-gray-100/10 mt-2"
                      >
                        Add Type
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Ticket List */}
                {eventData.tickets && eventData.tickets?.length > 0 && (
                  <ul className="space-y-2 mt-3">
                    {eventData?.tickets?.map(
                      (ticket: TicketType, index: number) => (
                        <li
                          key={index}
                          className="flex justify-between items-center bg-[#FFFFFF0F] px-3 py-3 rounded-lg"
                        >
                          <span>
                            {ticket.name}{" "}
                            {`${
                              eventData.eventType === "free"
                                ? ""
                                : `- ₦${ticket.price}`
                            }`}
                          </span>
                          <Button
                            className="bg-gray-600/30 hover:bg-red-600/90"
                            size="sm"
                            onClick={() => removeTicket(index)}
                          >
                            Remove
                          </Button>
                        </li>
                      )
                    )}
                  </ul>
                )}
              </div>
            )}
          </section>

          {/* Admin Approval */}
          <section>
            <div className="flex items-center justify-between p-4 px-6 bg-[#FFFFFF0F] backdrop-blur-xl z-50">
              <button
                onClick={() =>
                  eventSettings === "approval"
                    ? setEventSettings("")
                    : setEventSettings("approval")
                }
                className="flex items-center gap-3"
              >
                <Shield className="w-5 h-5 text-gray-400" />
                <span>Approval</span>
              </button>
            </div>

            {eventSettings === "approval" && (
              <div className="space-y-3 text-left my-5 px-6">
                {/* Ticket Form */}

                <div className="flex justify-between gap-3">
                  <div className="flex flex-col">
                    <span className="md:text-lg font-medium">
                      Approval Required
                    </span>
                    <span className="text-gray-400 text-[0.85em] max-md:max-w-[95%] max-sm:text-[0.68em]">
                      Click here to set event approval
                    </span>
                  </div>

                  <Switch
                    className="data-[state=checked]:bg-white data-[state=unchecked]:bg-[#4d4d4d] [&>span]:bg-black/90 my-auto"
                    checked={eventData.approvalRequired}
                    onCheckedChange={(checked) =>
                      handleInputChange("approvalRequired", checked)
                    }
                  />
                </div>
              </div>
            )}
          </section>

          {/* Capacity */}
          <section>
            <div className="flex items-center justify-between p-4 md:pb-6.5  px-6 bg-[#FFFFFF0F] backdrop-blur-xl rounded-b-2xl">
              <button
                onClick={() =>
                  eventSettings === "capacity"
                    ? setEventSettings("")
                    : setEventSettings("capacity")
                }
                className="flex items-center gap-3"
              >
                <Users className="w-5 h-5 text-gray-400" />
                <span>Set Capacity</span>
              </button>
            </div>

            {eventSettings === "capacity" && (
              <div className="space-y-3 text-left my-5 px-6">
                {/* Ticket Form */}

                <div className="flex justify-between gap-3">
                  <div className="flex flex-col">
                    <span className="md:text-lg font-medium">
                      Event Capacity
                    </span>
                    <span className="text-gray-400 text-[0.85em] max-md:max-w-[95%] max-sm:text-[0.68em]">
                      Enter your event capacity here
                    </span>
                  </div>
                </div>
                <Input
                  type="number"
                  placeholder="e.g 100, 150"
                  className="border-0 placeholder:text-gray-500  bg-[#212427] py-3"
                  value={eventData.eventCapacity || ""}
                  onChange={(e) =>
                    handleInputChange(
                      "eventCapacity",
                      parseInt(e.target.value) || 0
                    )
                  }
                />
              </div>
            )}
          </section>
        </div>
      </div>

      {/* Create Event Button */}
      <Button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full bg-white text-black hover:bg-gray-100 py-6 text-lg font-medium rounded-2xl"
      >
        {loading ? "Creating Event..." : "Create Event"}
      </Button>
    </div>
  );
}
