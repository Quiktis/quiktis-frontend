import React, { useState } from "react";
import InputField from "./ui/InputFields";
import Button from "./ui/Button";
import useAxios from "@/app/hooks/useAxios";
import Dropdown from "./ui/DropDown";
import ImageUploader from "./ImageUploader";

const CreateEventForm: React.FC = () => {
  const [eventData, setEventData] = useState({
    eventName: "",
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

  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const { sendRequest, loading, error } = useAxios();

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

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      let imageUrl = eventData.eventImageUrl;

      // Upload image if selected
      if (selectedImage) {
        const imageFormData = new FormData();
        imageFormData.append("file", selectedImage);

        const uploadResponse = await sendRequest({
          url: "https://api2-quiktis.onrender.com/upload", // Adjust to actual image upload endpoint
          method: "POST",
          body: imageFormData,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        if (uploadResponse?.imageUrl) {
          imageUrl = uploadResponse.imageUrl;
        }
      }

      // Send event data with the uploaded image URL
      const response = await sendRequest({
        url: "https://api2-quiktis.onrender.com/events",
        method: "POST",
        body: { ...eventData, eventImageUrl: imageUrl },
      });

      if (response) {
        console.log(response);
        alert("Event created successfully!");
      }
    } catch (error) {
      console.log(error);
      alert("An error occurred while creating the event.");
    }
  };

  return (
    <div className="mx-auto border border-primary rounded-[20px] p-8 shadow-md w-full">
      <h2 className="text-2xl text-white font-bold mb-2">Create Event</h2>
      <p className="text-white mb-6">This section contains basic details of your event.</p>

      <form className="space-y-10" onSubmit={handleSubmit}>
        <div className="flex w-full justify-between gap-10">
          <div className="flex flex-col gap-10 w-[70%]">
            <InputField
              label="Event Name"
              type="text"
              name="eventName"
              placeholder="Enter event name"
              value={eventData.eventName}
              onChange={handleInputChange}
              required
            />
            <div className="flex flex-col gap-1">
              <label className="text-white font-semibold">
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                name="description"
                placeholder="Describe your event"
                rows={6}
                className="p-2 bg-inherit border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none resize-none"
                value={eventData.description}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="bg-white w-[30%] h-auto rounded-[20px]"></div>
        </div>

        {/* Image Upload */}
        <div className="flex flex-col gap-1">
          <label className="text-white font-semibold">Image</label>
          <ImageUploader onImageSelect={setSelectedImage} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <InputField
            label="Date"
            type="date"
            name="date"
            placeholder="Choose date"
            value={eventData.date}
            onChange={handleInputChange}
            required
          />
          <Dropdown
            options={["General Admission", "VIP Pass"]}
            label="Ticket Type"
            selected={eventData.ticketType}
            onChange={(value) => handleDropdownChange("ticketType", value)}
            placeholder="Select ticket type"
          />
          <Dropdown
            options={["Category 1", "Category 2"]}
            label="Category"
            selected={eventData.category}
            onChange={(value) => handleDropdownChange("category", value)}
            placeholder="Select category"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <InputField
            label="Start at"
            type="time"
            name="startTime"
            placeholder="00:00 AM"
            value={eventData.startTime}
            onChange={handleInputChange}
            required
          />
          <InputField
            label="Location"
            type="text"
            name="location"
            placeholder="Input location"
            value={eventData.location}
            onChange={handleInputChange}
            required
          />
          <InputField
            label="Price"
            type="number"
            name="price"
            placeholder="Input price"
            value={eventData.price}
            onChange={handleInputChange}
          />
        </div>

        <InputField
          label="Website URL (Optional)"
          type="url"
          name="websiteUrl"
          value={eventData.websiteUrl}
          onChange={handleInputChange}
          placeholder="Input website link"
        />

        <p className="text-gray-500 text-sm border border-primary rounded-[10px] p-2">
          {"The event will first go to pre-approval, we’ll send you a notification before publishing."}
        </p>

        <div className="flex justify-end gap-4">
          <Button
            type="submit"
            className="bg-primary text-white px-12 py-2.5 rounded-md hover:bg-orange-600"
          >
            {loading ? "Submitting..." : "Submit for pre-approval"}
          </Button>

          <Button
            type="button"
            onClick={() => console.log("Cancelled")}
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
