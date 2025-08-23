"use client";
import React, { useEffect } from "react";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import InputField from "@/components/ui/InputFields";
import CurrencySelector from "@/components/ui/CurrencySelector";
import { IoIosAdd } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";
import { EventData } from "@/constant/customTypes";
import QuantityCounter from "@/components/QuantityCounter";

interface TickettingSectionProps {
  eventData: EventData;
  handleEventDataChange: (name: string, value: any, ) => void;
}

const TickettingSection: React.FC<TickettingSectionProps> = ({
  eventData,
  handleEventDataChange,
}) => {
  const router = useRouter();
  

  const handleTicketChange = (
    index: number,
    field: "name" | "price" | "quantity" | "description",
    value: string | number
  ) => {
    const updatedTickets = [...eventData.tickets];
    updatedTickets[index][field] = value as never;
    handleEventDataChange("tickets", updatedTickets); // Update the eventData with the new tickets array
  };

  const addTicket = () => {
    const updatedTickets = [
      ...eventData.tickets,
      { name: "", price: "", description: "", quantity: 1 },
    ];
    handleEventDataChange("tickets", updatedTickets);
  };

  /*const handleCurrencyChange = (index: number, currency: string) => {
    const updated = [...eventData.tickets];
    updated[index].currency = currency;
    handleEventDataChange("tickets", updated);
  };*/

const validateTickets = (tickets: any[]): { isValid: boolean; error?: string } => {
  // Check if access type is selected
  if (!eventData.accessType) {
    return { isValid: false, error: "Please select an event type (Free or Paid)" };
  }

  // Validate each ticket
  for (let i = 0; i < tickets.length; i++) {
    const ticket = tickets[i];
    
    // Check ticket name
    if (!ticket.name?.trim()) {
      return { 
        isValid: false, 
        error: `Ticket ${i + 1}: Name is required` 
      };
    }
    
    // Check quantity
    if (ticket.quantity < 1) {
      return { 
        isValid: false, 
        error: `Ticket ${i + 1}: Quantity must be at least 1` 
      };
    }

    // Check price for paid events
    if (eventData.accessType === "paid" && (!ticket.price || ticket.price <= 0)) {
      return { 
        isValid: false, 
        error: `Ticket ${i + 1}: Price must be greater than 0` 
      };
    }
  }

  return { isValid: true };
};

const handleContinue = () => {
  const validation = validateTickets(eventData.tickets);
  
  if (!validation.isValid) {
    alert(validation.error);
    return;
  }

  router.push(`?tab=review`);
};

  const deleteTicket = (index: number) => {
    if (index === 0) return; // prevent deleting the first
    const updated = [...eventData.tickets];
    updated.splice(index, 1);
    handleEventDataChange("tickets", updated);
  };

  useEffect(() => {
    if (eventData.accessType !== "paid") {
      
      const needsReset = eventData.tickets.some(t => Number(t.price) !== 0);
      if (needsReset) {
        eventData.tickets.forEach((_, idx) =>
          handleTicketChange(idx, "price", 0)
        );
      }
    }
  }, [eventData.accessType]);  
  
  


  return (
    <div className="relative flex flex-col gap-6 w-full lg:w-fit">
      <div className="w-[30em] h-[30em] block max-sm:hidden lg:w-[50em] lg:h-[50em] mt-[8em] ml-[-9em] left-0 -z-10 inset-0 radial-gradient-blue max-md:hidden blur-3xl opacity-30 absolute"></div>
      <h1 className="max-md:text-[1.3em] text-[1.7em]">
        What type of event are you running?
      </h1>

      <section className="flex max-md:flex-col gap-[1em] md:gap-[2em] mb-[2.5em]">
        <button
          type="button"
          onClick={() => handleEventDataChange("accessType", "paid")}
          className={`flex gap-5 border max-md:px-3 px-6 py-3 md:py-4 rounded-md
            ${
              eventData.accessType === "paid"
                ? "border-primary max-md:border-primary"
                : "border-[#fff0] max-md:border-[#ffffff2d]"
            } 
            hover:border-gray-400 transition-all`}
        >
          <Image
            src="/icons/paid-ticket.svg"
            alt="icon"
            height={32}
            width={32}
          />
          <div>
            <h1 className="text-[1.1em] font-semibold w-fit">Ticketed Event</h1>
            <p className="text-left max-md:text-[0.9em]">
              My event requires tickets for entry
            </p>
          </div>
        </button>

        <button
          type="button"
          onClick={() => handleEventDataChange("accessType", "free")}
          className={`flex gap-5 border px-6 max-md:px-3 py-3 md:py-4 rounded-md
            ${
              eventData.accessType === "free"
                ? "border-primary max-md:border-primary"
                : "border-[#fff0] max-md:border-[#ffffff2d]"
            } 
            hover:border-gray-400 transition-all`}
        >
          <Image
            src="/icons/free-ticket.svg"
            alt="icon"
            height={32}
            width={32}
          />
          <div>
            <h1 className="text-[1.1em] font-semibold w-fit">Free Event</h1>
            <p className="text-left">{`I’m running a free event`}</p>
          </div>
        </button>
      </section>


        <section className="flex flex-col gap-5 mb-5">
          <h1 className="text-[1.7em] max-md:text-[0.9em]">
            What tickets are you selling?
          </h1>

          {eventData.tickets.map((ticket, index) => (
            <div
              key={index}
              className="flex flex-col md:grid grid-cols-[2fr_1fr_12em_1em] gap-2 max-md:gap-6">
              <div className="flex flex-col gap-3 lg:w-[80%] w-full">
                <label className="text-[1.1em] font-semibold">
                  Ticket Type
                </label>
                <InputField
                required
                  placeholder="Ticket Name e.g. General Admission"
                  value={ticket.name}
                  onChange={(e) =>
                    handleTicketChange(index, "name", e.target.value)
                  }
                  className="max-md:w-[100%]"
                />
              </div>
              {eventData.accessType === "paid" && (
                <div className="flex flex-col gap-3">
                  <label className="text-[1.1em] font-semibold">Ticket Price</label>
                  <div className="flex items-center">
                    <input
                    required
                      type="number"
                      min="0"
                      placeholder="₦0.00"
                      className="p-3 border border-[#ffffff56] bg-transparent rounded-md w-full md:w-[12em] focus:ring-2 focus:outline-none"
                      value={ticket.price}
                      onChange={(e) =>
                        handleTicketChange(index, "price", parseInt(e.target.value))
                      }
                      onKeyDown={(e) => {
                        const invalidKeys = ['e','E','+','-','.'];
                        if (invalidKeys.includes(e.key)) e.preventDefault();
                      }}
                    />
                   
                  </div>
                </div>
              )}


              
              <div className="flex flex-col gap-3">
                <label className="text-[1.1em] font-semibold">
                  Quantity
                </label>
                <div className="flex items-center">
                 
                <input
                required
                  type="number"
                  min="1"
                  placeholder="Enter quantity"
                  className="p-3 border border-[#ffffff56] bg-transparent rounded-md w-full md:w-[12em] focus:ring-2 focus:outline-none"
                  value={ticket.quantity}
                  onChange={(e) => {
                    // Allow user to clear field temporarily
                    handleTicketChange(index, "quantity", parseInt(e.target.value));
                  }}
                  onBlur={(e) => {
                    // If input is empty on blur, reset to "1"
                    if (e.target.value.trim() === "") {
                      handleTicketChange(index, "quantity", parseInt("1"));
                    }
                  }}
                  onKeyDown={(e) => {
                    const invalidKeys = ['e', 'E', '+', '-', '.'];
                    if (invalidKeys.includes(e.key)) {
                      e.preventDefault();
                    }
                  }}
                />



                  {index !== 0 && (
                    <button
                      type="button"
                      onClick={() => deleteTicket(index)}
                      className="hover:bg-[#ffffff17] md:hidden gap-1 text-white rounded-md p-4 grid place-items-center w-fit mb-0 mt-auto"
                    >
                      <AiOutlineDelete
                        size={20}
                        color="white"
                        className="my-auto"
                      />
                    </button>
                  )}

                  
                </div>
              </div>
              {index !== 0 && (
                <button
                  type="button"
                  onClick={() => deleteTicket(index)}
                  className="hover:bg-[#ffffff17] gap-1 text-white max-md:hidden rounded-md p-4 grid place-items-center w-fit mb-0 mt-auto"
                >
                  <AiOutlineDelete
                    size={20}
                    color="white"
                    className="my-auto"
                  />
                </button>
              )}
              <hr className="border-[#ffffff27] border-[0.5px] md:hidden"></hr>
            </div>
          ))}

          

          <button
            type="button"
            onClick={addTicket}
            className="hover:bg-[#ffffff17] flex gap-1 text-white rounded-md py-3 px-7 font-medium w-fit mr-0 ml-auto"
          >
            <IoIosAdd size={22} color="white" className="my-auto" /> Add another
            ticket
          </button>
        </section>
      

      <div className="flex gap-4 w-fit mr-0 md:ml-auto">
        <button
          onClick={() => router.push(`?tab=banner`)}
          type="button"
          className="py-2 px-4 font-medium"
        >
          Back
        </button>
        <Button
          onClick={handleContinue}
          className="w-fit px-7 py-3 font-medium bg-primary"
        >Save & Continue</Button>
      </div>
    </div>
  );
};

export default TickettingSection;
