"use client"
import React, {useState} from 'react'
import InputField from "@/components/ui/InputFields";
import Dropdown from "@/components/ui/DropDown";
import Button from "@/components/ui/Button";
import CustomDatePicker from "@/components/ui/CustomDatePicker";
import CustomTimePicker from "@/components/ui/CustomTimePicker";
import { useRouter } from 'next/navigation';
import { EventData, TimeData } from '@/constant/customTypes';
import { generateId } from '@/app/utils/utilities';


interface EditSectionProps {
  eventData: EventData;
  timeData: TimeData;
  handleTimeDataChange: (field: "startTime" | "endTime", timeField: "hour" | "minute" | "period", value: string | any) => void;
  setEventData: React.Dispatch<React.SetStateAction<EventData>>;
  startDate: Date | null;
  setStartDate: React.Dispatch<React.SetStateAction<Date | null>>;
  endDate: Date | null;
  setEndDate: React.Dispatch<React.SetStateAction<Date | null>>;
  handleEventDataChange: (name: string, value: any) => void;
  setPageIndex: React.Dispatch<React.SetStateAction<number>>;

}


const EditSection: React.FC<EditSectionProps> = ({
  eventData,
  timeData,
  handleTimeDataChange,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  handleEventDataChange,
  setPageIndex,
}) => {

  const router = useRouter();
    

   // Validation function
   const isFormValid = () => {
    // Check if all required fields in eventData are filled
    const requiredFields = ["title", "eventType", "location", "description"];
    const isEventDataValid = requiredFields.every((field) => eventData[field as keyof EventData]);

    // Check if startDate and endDate are set
    const isDateValid = startDate !== null && endDate !== null;

    // Check if startTime and endTime are fully set
    const isTimeValid =
      timeData.startTime.hour !== null &&
      timeData.startTime.minute !== null &&
      timeData.startTime.period !== null &&
      timeData.endTime.hour !== null &&
      timeData.endTime.minute !== null &&
      timeData.endTime.period !== null;

    return isEventDataValid && isDateValid && isTimeValid;
  };

  // Handle button click
  const handleNext = () => {
    if (isFormValid()) {
      handleEventDataChange("categoryId", "86443225-e1b9-454c-a080-787d014ae5ba");
      router.push(`?tab=banner`);
    } else {
      alert("Please fill in all required fields before proceeding.");
    }
  };
    
         // Handle changes in input fields
          const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            handleEventDataChange(e.target.name, e.target.value)
          };

          const formatDate = (date: Date) =>
            `${String(date.getDate()).padStart(2, "0")}/${String(
              date.getMonth() + 1
            ).padStart(2, "0")}/${String(date.getFullYear()).slice(-2)}`;
    
  return (
    <>
         <section className="w-full md:mt-[4em] relative">
          <div className="w-[63em] h-[63em] right-0 left-auto mt-[-20em] -z-10  inset-0 radial-gradient-custom blur-3xl opacity-30 absolute "></div>
          <h1 className="max-md:text-[1.3em]  text-[1.7em] mb-5 md:ml-[6em]">Event Details</h1>
          <section className="flex flex-col gap-3 md:gap-5">
            <div className="flex flex-col md:grid grid-cols-[9em_60%] gap-5">
              <label className="my-auto mr-0 md:ml-auto">Event Title</label>
              <InputField 
                name="title"
                placeholder="Enter the name of your event" 
                value={eventData.title}
                onChange={handleInputChange} />
            </div>

            {/*<div className="flex flex-col md:grid grid-cols-[9em_60%] gap-5">
              <label className="my-auto mr-0 md:ml-auto">Event Category</label>
              <Dropdown
            options={["Category 1", "Category 2"]}
            selected={eventData.category}
            onChange={(value) => handleEventDataChange("category", value)}
            placeholder="Please select one"
          />
            </div>*/}
          </section>
        </section>

        <section className="w-full mt-[4em] relative">
        <div className="w-[30em] h-[30em] mt-[2em] left-0 -z-10  inset-0 radial-gradient-blue blur-3xl max-md:hidden opacity-30 absolute"></div>
          <h1 className="max-md:text-[1.3em] text-[1.7em] mb-5 md:ml-[6em]">Date & Time</h1>
          <section className="flex flex-col gap-5 md:pl-[3.8em]">
            <div className="flex flex-col md:grid grid-cols-[6em_60%] gap-5 max-md:mb-4">
              <label className="">Event Type</label>
              <div className="flex gap-6 md:gap-4">
              <div className="flex gap-2">
                <input type="radio" name="eventType" checked={eventData.eventType == "single" } value={"single"} onChange={handleInputChange}></input> <p>Single Event</p>
              </div>
              <div className="flex gap-2">
                <input type="radio" name="eventType" checked={eventData.eventType == "recurring" } value={"recurring"} onChange={handleInputChange}></input> <p>Recurring Event</p>
              </div>
              </div>
            </div>

            <div className="grid gap-[2.2em] w-[84.5%]">
            <div className="flex flex-col md:grid grid-cols-[5em_auto] gap-5">
              <p className="mr-0 md:ml-auto">Sessions</p>
              <div className="flex flex-col md:grid grid-cols-2 w-[100%] gap-[2em] md:gap-[5em]">
              <div className="flex md:flex-col gap-4 justify-between md:gap-6">
                <div className="md:max-w-[16em] w-full">
                  <p className="mb-2">Start Date</p>

                  <CustomDatePicker selectedDate={startDate}
                  onDateSelect={(date) => {
                    setStartDate(date);
                    handleEventDataChange("startDate", date);
                    // Reset end date if it's before new start
                    if (endDate && date > endDate) {
                      setEndDate(null);
                    }
                  }}/>
                 
                </div>

                <div className="max-w-[16em]">
                  <p className="mb-2">Start Time</p>
                  <CustomTimePicker
                  field="startTime"
                  timeData={timeData}
                  handleTimeDataChange={handleTimeDataChange}
                   />
                </div>
              </div>

              <div className="flex md:flex-col gap-4 justify-between md:gap-6">
              <div className="max-w-[16em]">
                  <p className="mb-2">End Date</p>

                  <CustomDatePicker
                  selectedDate={endDate}
                  onDateSelect={(date) => {
                    setEndDate(date);
                    handleEventDataChange("endDate", date)}
                  }
                  minDate={startDate || undefined}/>
                 
                </div>

                <div className="max-w-[16em]">
                  <p className="mb-2">End Time</p>
                  <CustomTimePicker 
                  field='endTime'
                  timeData={timeData}
                  handleTimeDataChange={handleTimeDataChange}
                  />
                </div>
              </div>
              </div>
              </div>
              

              
              
            </div>
          </section>
        </section>

        <section className="w-full mt-[4em]">
          <h1 className="max-md:text-[1.3em] text-[1.7em] mb-5 md:ml-[6em]">Location</h1>
          <section className="flex flex-col gap-5">
            <div className="flex flex-col md:grid grid-cols-[9em_60%] gap-5">
              <label className="my-auto md:mr-0 md:ml-auto md:text-right">
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
          <h1 className="max-md:text-[1.3em] text-[1.7em] mb-5 md:ml-[6em]">Additional Information</h1>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col md:grid grid-cols-[9em_60%] gap-5">
              <label className="my-auto mr-0 md:ml-auto md:text-right mt-0 mb-auto">
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
          <Button  onClick={handleNext}  className="w-fit mr-0 md:ml-auto bg-primary px-7 py-3">Save & Continue</Button>
          </div>
    </>
  )
}


export default EditSection;