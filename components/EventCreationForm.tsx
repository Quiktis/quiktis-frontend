import React from "react";
import InputField from "./ui/InputFields";
import Button from "./ui/Button";

const CreateEventForm: React.FC = () => {
  return (
    <div className="mx-auto border border-primary rounded-[20px] p-8 shadow-md w-full">
      <h2 className="text-2xl text-white font-bold  mb-2">Create Event</h2>
      <p className="text-white mb-6">
        This section contains basic details of your event.
      </p>

      <form className="space-y-10">
        <div className="flex w-full justify-between">
            <div className="flex flex-col gap-10 w-[70%]">
                <InputField
                label="Event Name"
                type="text"
                placeholder="Enter event name"
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
            required
          />
          <InputField
            label="Location"
            type="text"
            placeholder="Input location"
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