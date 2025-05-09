"use client";
import React, { useState } from "react";
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
      { name: "", price: "", currency: "₦" },
    ];
    handleEventDataChange("tickets", updatedTickets);
  };

  /*const handleCurrencyChange = (index: number, currency: string) => {
    const updated = [...eventData.tickets];
    updated[index].currency = currency;
    handleEventDataChange("tickets", updated);
  };*/

  const deleteTicket = (index: number) => {
    if (index === 0) return; // prevent deleting the first
    const updated = [...eventData.tickets];
    updated.splice(index, 1);
    handleEventDataChange("tickets", updated);
  };

  return (
    <div className="relative flex flex-col gap-6 max-md:w-full w-fit">
      <div className="w-[50em] h-[50em] mt-[8em] ml-[-9em] left-0 -z-10 inset-0 radial-gradient-blue max-md:hidden blur-3xl opacity-30 absolute"></div>
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

      {eventData.accessType === "paid" && (
        <section className="flex flex-col gap-5 mb-5">
          <h1 className="text-[1.7em] max-md:text-[0.9em]">
            What tickets are you selling?
          </h1>

          {eventData.tickets.map((ticket, index) => (
            <div
              key={index}
              className="flex flex-col md:grid grid-cols-[2fr_1fr_3em] gap-2 max-md:gap-6">
              <div className="flex flex-col gap-3 md:w-[80%]">
                <label className="text-[1.1em] font-semibold">
                  Ticket Type
                </label>
                <InputField
                  placeholder="Ticket Name e.g. General Admission"
                  value={ticket.name}
                  onChange={(e) =>
                    handleTicketChange(index, "name", e.target.value)
                  }
                  className="max-md:w-[100%]"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-[1.1em] font-semibold">
                  Ticket Price
                </label>
                <div className="flex items-center">
                  <CurrencySelector
                    //value={ticket.currency}
                    /*onChange={(currency) =>
                      handleCurrencyChange(index, currency)
                    }*/
                    className="grid place-items-center rounded-l-md h-[2.7em] w-[2.7em]"
                  />
                  <input
                    type="text"
                    placeholder="0.00"
                    className="p-3 border border-[#ffffff56] bg-transparent rounded-r-md w-full md:w-[12em] focus:ring-2 focus:outline-none"
                    value={ticket.price}
                    onChange={(e) =>
                      handleTicketChange(index, "price", e.target.value)
                    }
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
              <QuantityCounter />
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
      )}

      <div className="flex gap-4 w-fit mr-0 md:ml-auto">
        <button
          onClick={() => router.push(`?tab=banner`)}
          type="button"
          className="py-2 px-4 font-medium"
        >
          Back
        </button>
        <Button
          onClick={() => router.push(`?tab=review`)}
          className="w-fit px-7 font-medium"
        >Save & Continue</Button>
      </div>
    </div>
  );
};

export default TickettingSection;
