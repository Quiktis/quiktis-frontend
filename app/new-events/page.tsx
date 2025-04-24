"use client"
import React, {useState} from "react";
import InputField from "@/components/ui/InputFields";
import Dropdown from "@/components/ui/DropDown";
import Button from "@/components/ui/Button";

const steps = [
  { label: "Edit", link: "edit" },
  { label: "Banner", link: "banner" },
  { label: "Ticketting", link: "ticketting" },
  { label: "Review", link: "review" },
];

export default function index() {
  const [eventData, setEventData] = useState({
      eventTitle: "",
      description: "",
      date: "",
      ticketType: "",
      eventImageUrl: "", // This will be set after image upload
      category: "",
      startTime: "",
      location: "",
      price: "",
      websiteUrl: "",
    });

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
      <div className="grid left-auto top-[-34em] right-auto place-items-center absolute w-full h-[50em] -z-10">
        <div className="w-full h-[60em] inset-0 radial-gradient-custom blur-3xl opacity-50"></div>
      </div>

      <form className="md:px-[3em] max-md:px-1 mb-[20em] flex flex-col gap-6">
        <div className="text-[1.4em] font-medium">create a new event</div>

        <div className="grid grid-cols-4 place-items-center py-6">
          {steps.map((item, index) => (
            <div key={index} className="grid w-full">
              <div className="w-full grid place-items-center gap-3">
                <div className="w-full bg-primary h-[1px]"></div>
                <button type="button" className="bg-white h-4 w-4 rounded-full grid place-items-center mt-[-1.6em]">
                  <div className="bg-gray-300 h-2 w-2 rounded-full"></div>
                </button>
                <p>{item.label}</p>
              </div>
            </div>
          ))}
        </div>

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
            options={["General Admission", "VIP Pass"]}
            selected={eventData.ticketType}
            onChange={(value) => handleDropdownChange("ticketType", value)}
            placeholder="Select ticket type"
          />
            </div>
          </section>
        </section>

        <section className="w-full mt-[4em] relative">
        <div className="w-[54em] h-[54em] mt-[2em] left-0 -z-10  inset-0 radial-gradient-blue blur-3xl opacity-30 absolute"></div>
          <h1 className="text-[1.7em] mb-5 ml-[6em]">Date & Time</h1>
          <section className="flex flex-col gap-5 pl-[4.55em]">
            <div className="flex gap-[2.2em]">
              <label className="">Event Type</label>
              <div className="flex gap-2">
                <input type="radio" name="event"></input> <p>Single Event</p>
              </div>
              <div className="flex gap-2">
                <input type="radio" name="event"></input> <p>Recurring Event</p>
              </div>
            </div>

            <div className="flex gap-[2.2em]">
              <p>Sessions</p>

              <div className="grid grid-cols-2 w-[79.7%] gap-[5em]">
              <div className="flex flex-col gap-6">
                <div className="max-w-[16em]">
                  <p>Start Date</p>
                  <InputField 
                    name="startDate"
                    type="date"
                    onChange={handleInputChange}
                  />
                 
                </div>

                <div className="max-w-[16em]">
                  <p>Start Time</p>
                  <InputField 
                  name="startTime"
                  onChange={handleInputChange}
                  type="time"/>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <div className="max-w-[16em]">
                  <p>End Date</p>
                  <InputField 
                  name="endDate"
                  onChange={handleInputChange}
                  type="date"/>
                </div>

                <div className="max-w-[16em]">
                  <p>End Time</p>
                  <InputField 
                  name="endTime"
                  onChange={handleInputChange}
                  type="time"/>
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
                className="p-2 bg-inherit border border-[#ffffff4f] rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none resize-none"
                //value={eventData.description}
                //onChange={handleInputChange}
                //required
              />
            </div>
          </div>
          <div className="grid w-[72.2%]  mt-[2em]">
          <Button children="Save and Continue" className="w-fit mr-0 ml-auto"/>
          </div>
          
        </section>
      </form>
    </>
  );
}
