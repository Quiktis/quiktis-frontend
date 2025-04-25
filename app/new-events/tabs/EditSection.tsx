"use client"
import React, {useState} from 'react'
import InputField from "@/components/ui/InputFields";
import Dropdown from "@/components/ui/DropDown";
import Button from "@/components/ui/Button";
import CustomDatePicker from "@/components/ui/CustomDatePicker";
import CustomTimePicker from "@/components/ui/CustomTimePicker";
import { useRouter } from 'next/navigation';

export default function EditSection(
    { 
        eventData, 
        setEventData, 
        startDate,
        setStartDate, 
        endDate,
        setEndDate }: { 
    eventData: {
        eventTitle: string;
        description: string;
        date: string;
        ticketType: string;
        eventImageUrl: string; // This will be set after image upload
        category: string;
        startTime: string;
        location: string;
        price: string;
        websiteUrl: string;
    },

    setEventData: (value: ((prevState: typeof eventData) => typeof eventData) | typeof eventData) => void,
    startDate: Date | null,
    setStartDate: (date: Date | null) => void,
    endDate: Date | null,
    setEndDate: (date: Date | null) => void
}) {

  const router = useRouter();
    
    
         // Handle changes in input fields
          const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setEventData((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }));
          };
    
      // Handle dropdown changes
      const handleDropdownChange = (name: string, value: string) => {
        setEventData((prev) => ({
          ...prev,
          [name]: value,
        }));
      };
  return (
    <>
         <section className="w-full mt-[4em] relative">
          <div className="w-[63em] h-[63em] right-0 left-auto mt-[-20em] -z-10  inset-0 radial-gradient-custom blur-3xl opacity-30 absolute"></div>
          <h1 className="text-[1.7em] mb-5 ml-[6em]">Event Details</h1>
          <section className="flex flex-col gap-5">
            <div className="grid grid-cols-[9em_60%] gap-5">
              <label className="my-auto mr-0 ml-auto">Event Title</label>
              <InputField 
                name="eventTitle"
                placeholder="Enter the name of your event" 
                value={eventData.eventTitle}
                onChange={handleInputChange} />
            </div>

            <div className="grid grid-cols-[9em_60%] gap-5">
              <label className="my-auto mr-0 ml-auto">Event Category</label>
              <Dropdown
            options={["Category 1", "Category 2"]}
            selected={eventData.ticketType}
            onChange={(value) => handleDropdownChange("ticketType", value)}
            placeholder="Please select one"
          />
            </div>
          </section>
        </section>

        <section className="w-full mt-[4em] relative">
        <div className="w-[54em] h-[54em] mt-[2em] left-0 -z-10  inset-0 radial-gradient-blue blur-3xl opacity-30 absolute"></div>
          <h1 className="text-[1.7em] mb-5 ml-[6em]">Date & Time</h1>
          <section className="flex flex-col gap-5 pl-[3.8em]">
            <div className="grid grid-cols-[6em_60%] gap-5">
              <label className="">Event Type</label>
              <div className="flex gap-4">
              <div className="flex gap-2">
                <input type="radio" name="event"></input> <p>Single Event</p>
              </div>
              <div className="flex gap-2">
                <input type="radio" name="event"></input> <p>Recurring Event</p>
              </div>
              </div>
            </div>

            <div className="grid gap-[2.2em] w-[90%]">
            <div className="grid grid-cols-[5em_auto] gap-5">
              <p className="mr-0 ml-auto">Sessions</p>
              <div className="grid grid-cols-2 w-[100%] gap-[5em]">
              <div className="flex flex-col gap-6">
                <div className="max-w-[16em]">
                  <p className="mb-2">Start Date</p>

                  <CustomDatePicker selectedDate={startDate}
                  onDateSelect={(date) => {
                    setStartDate(date);
                    // Reset end date if it's before new start
                    if (endDate && date > endDate) {
                      setEndDate(null);
                    }
                  }}/>
                 
                </div>

                <div className="max-w-[16em]">
                  <p className="mb-2">Start Time</p>
                  <CustomTimePicker />
                </div>
              </div>

              <div className="flex flex-col gap-6">
              <div className="max-w-[16em]">
                  <p className="mb-2">End Date</p>

                  <CustomDatePicker
                  selectedDate={endDate}
                  onDateSelect={setEndDate}
                  minDate={startDate || undefined}/>
                 
                </div>

                <div className="max-w-[16em]">
                  <p className="mb-2">End Time</p>
                  <CustomTimePicker />
                </div>
              </div>
              </div>
              </div>
              

              
              
            </div>
          </section>
        </section>

        <section className="w-full mt-[4em]">
          <h1 className="text-[1.7em] mb-5 ml-[6em]">Location</h1>
          <section className="flex flex-col gap-5">
            <div className="grid grid-cols-[9em_60%] gap-5">
              <label className="my-auto mr-0 ml-auto text-right">
                Where will your event take place?
              </label>
              <InputField 
              name="location"
              value={eventData.location}
              onChange={handleInputChange}
              placeholder="Input Location" />
            </div>
          </section>
        </section>

        <section className="w-full mt-[4em]">
          <h1 className="text-[1.7em] mb-5 ml-[6em]">Additional Information</h1>
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-[9em_60%] gap-5">
              <label className="my-auto mr-0 ml-auto text-right mt-0 mb-auto">
                Event Description
              </label>
              <textarea
                name="description"
                value={eventData.description}
                onChange={handleInputChange}
                placeholder="Describe your event"
                rows={6}
                className="p-3 bg-inherit border border-[#ffffff4f] rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none resize-none"
                //value={eventData.description}
                //onChange={handleInputChange}
                //required
              />
            </div>
          </div>
          
          
        </section>
        <div className="grid w-[72.2%]  mt-[2em]">
          <Button  onClick={() => router.push(`?tab=banner`)} children="Save and Continue" className="w-fit mr-0 ml-auto"/>
          </div>
    </>
  )
}
