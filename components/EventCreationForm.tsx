import React from "react";
import InputField from "./ui/InputFields";
import Button from "./ui/Button";
import { useState } from "react";
import useAxios from "@/app/hooks/useAxios";
import Dropdown from "./ui/DropDown";

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


const body_2 = {
  "title": "Summer Music Festival",
  "description": "Join us for an unforgettable summer music festival featuring top artists from around the world.",
  "venue": {
    "name": "Central Park",
    "address": "59th St to 110th St, New York, NY",
    "coordinates": {
      "latitude": 40.785091,
      "longitude": -73.968285
    }
  },
  "dateTime": "2025-07-15T18:00:00.000Z",
  "ticketTypes": [
    {
      "name": "General Admission",
      "price": 50,
      "quantity": 1000,
      "available": 1000,
      "maxPerTransaction": 4
    },
    {
      "name": "VIP Pass",
      "price": 150,
      "quantity": 200,
      "available": 200,
      "maxPerTransaction": 2
    }
  ],
  "organizer": "64f8e8f8e4b0f4a9c8f8e8f8",
//   "status": "published",
  "tags": ["music", "festival", "summer"],
  "images": [
    "http://localhost:8081/media/9400644aaae3447c8682f48bb3bc3ffbg"
  ]
}


const CreateEventForm: React.FC = () => {
  const [eventName, setEventName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [ticketType, setTicketType] = useState("");
  const [eventImageUrl, setEventImageUrl] = useState("");
  const [category, setCategory] = useState("");
  const [startTime, setStartTime] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [selected, setSelected] = useState("");
  

  const { sendRequest, loading, error } = useAxios();

    const handleSubmit= async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("sending request")
        try {
          const response = await sendRequest({
            url: `https://api2-quiktis.onrender.com/events`, // Use environment variable for base URL
            method: "POST",
            body: {
              eventName,
              description,
              date,
              ticketType,
              category,
              StartAt: startTime,
              location,
              websiteUrl,
              price,
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
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <Dropdown 
            options={["General Admission","VIP Pass"]} 
            label={"Ticket Type"} selected={ticketType}
            onChange={setTicketType}
            placeholder="Select ticket type"
          />
          <Dropdown 
            options={["Category 1","Category 2"]} 
            label={"Category"} selected={category}
            onChange={setCategory}
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
            value={location}
            onChange={(e) => setLocation(e.target.value)}
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
          value={websiteUrl}
          onChange={(e) => setWebsiteUrl(e.target.value)}
          placeholder="Input website link"
        />
        <p className="text-gray-500 text-sm border border-primary rounded-[10px] p-2">
          {"The event will first go to pre-approval, we’ll send you a notification before publishing."}"
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