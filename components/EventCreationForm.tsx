import React from "react";
import InputField from "./ui/InputFields";
import Button from "./ui/Button";
import { useState } from "react";
import useAxios from "@/app/hooks/useAxios";


const body = {
  "name": "Blockchain Summit 2025 DAY 2",
  "description": "A premier event for blockchain enthusiasts and developers.",
  "location": "Lagos Convention Center",
  "image_url": "https://res.cloudinary.com/farmily-production/image/upload/v1735388719/events/ky0sjhfxkdkxtcakiffh.jpg?pid=events/ky0sjhfxkdkxtcakiffh",
  "date": "2025-03-15T00:00:00Z",
  "start_time": "2025-03-15T09:00:00Z",
  "end_time": "2025-03-15T17:00:00Z",
  "currency": "USD",
  "ticket_price": 50.50,
  "total_tickets": 200
}



const CreateEventForm: React.FC = () => {
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventImageUrl, setEventImageUrl] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [currency, setCurrency] = useState("");
  const [ticketPrice, setTicketPrice] = useState("");
  const [totalTickets, setTotalTickets] = useState("");

  const { sendRequest, loading, error } = useAxios();

    const handleSubmit= async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("sending request")
        try {
          const response = await sendRequest({
            url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/events`, // Use environment variable for base URL
            method: "POST",
            body: {
              name: eventName,
              description: eventDescription,
              location: eventLocation,
              image_url: eventImageUrl,
              date: eventDate,
              start_time: startTime,
              end_time: endTime,
              currency: currency,
              ticket_price: ticketPrice,
              total_tickets: totalTickets,
            }
          });
    
          if (response) {
            console.log(response);
            alert("request successful!");
            // Logic
          }
        } catch (error) {
          console.log(error);
        }
      };


  return (
    <div className="mx-auto border border-primary rounded-[20px] p-8 shadow-md w-full">
      <h2 className="text-2xl text-white font-bold  mb-2">Create Event</h2>
      <p className="text-white mb-6">
        This section contains basic details of your event.
      </p>

      <form className="space-y-10" onSubmit={handleSubmit}>
        <div className="flex w-full justify-between">
            <div className="flex flex-col gap-10 w-[70%]">
                <InputField
                label="Event Name"
                type="text"
                placeholder="Enter event name"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                required
                />
                <div className="flex flex-col gap-1">
                        <label className="text-white font-semibold">
                            Description <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            placeholder="Describe your event"
                            rows={6}
                            className="p-2 bg-inherit border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none resize-none"
                            required
                        ></textarea>
                </div>
            </div>
            <div className="bg-white w-[313px] h-auto rounded-[20px]">

           </div>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-white font-semibold">Image</label>
          <div className="border-2 border-dashed border-gray-300 rounded-md h-32 flex items-center justify-center text-gray-500">
            Upload image here
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <InputField
            label="Date"
            type="date"
            placeholder="Choose date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            required
          />
          <InputField
            label="Ticket Type"
            type="text"
            placeholder="Select ticket type"
            
          />
          <InputField
            label="Category"
            type="text"
            placeholder="Select category"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <InputField
            label="Start at"
            type="time"
            placeholder="00:00 AM"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            required
          />
          <InputField
            label="Location"
            type="text"
            placeholder="Input location"
            value={eventLocation}
            onChange={(e) => setEventLocation(e.target.value)}
            required
          />
          <InputField
            label="Price"
            type="number"
            placeholder="Input price"
          />
        </div>
        <InputField
          label="Website URL (Optional)"
          type="url"
          placeholder="Input website link"
        />
        <p className="text-gray-500 text-sm border border-primary rounded-[10px] p-2">
          The event will first go to pre-approval, we’ll send you a notification
          before publishing.
        </p>

        <div className="flex justify-end gap-4">
        <Button
            type="submit"
            onClick={()=> ""}
            className="bg-primary text-white px-12 py-2.5 rounded-md hover:bg-orange-600"
          >
            Submit for pre-approval
          </Button>

          <Button
            type="button"
            onClick={()=> ""}
            className="bg-gray-800 border border-primary text-white px-8 py-3 rounded-md hover:bg-gray-700"
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateEventForm;