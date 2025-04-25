'use client';
import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import InputField from '@/components/ui/InputFields';
import CurrencySelector from '@/components/ui/CurrencySelector';
import { IoIosAdd } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";

export default function TickettingSection() {
  const router = useRouter();
  const [selected, setSelected] = useState<'ticketed' | 'free' | null>(null);

  const [tickets, setTickets] = useState([
    { name: '', price: '', currency: '₦' }
  ]);

  const handleTicketChange = (
    index: number,
    field: 'name' | 'price' | 'currency',
    value: string
  ) => {
    const updatedTickets = [...tickets];
    updatedTickets[index][field] = value;
    setTickets(updatedTickets);
  };

  const addTicket = () => {
    setTickets([...tickets, { name: '', price: '', currency: '₦' }]);
  };

  const handleCurrencyChange = (index: number, currency: string) => {
    const updated = [...tickets];
    updated[index].currency = currency;
    setTickets(updated);
  };
  
  const deleteTicket = (index: number) => {
    if (index === 0) return; // prevent deleting the first
    const updated = [...tickets];
    updated.splice(index, 1);
    setTickets(updated);
  };


  return (
    <div className='relative flex flex-col gap-6 w-fit'>
      <div className="w-[50em] h-[50em] mt-[8em] ml-[-9em] left-0 -z-10 inset-0 radial-gradient-blue blur-3xl opacity-30 absolute"></div>
      <h1 className="text-[1.7em]">What type of event are you running?</h1>

      <section className='flex gap-[2em] mb-[2.5em]'>
        <button
          type='button'
          onClick={() => setSelected('ticketed')}
          className={`flex gap-5 border px-6 py-4 rounded-md 
            ${selected === 'ticketed' ? 'border-primary' : 'border-[#fff0]'} 
            hover:border-gray-400 transition-all`}
        >
          <Image src="/icons/paid-ticket.svg" alt='icon' height={32} width={32} />
          <div>
            <h1 className='text-[1.1em] font-semibold w-fit'>Ticketed Event</h1>
            <p>My event requires tickets for entry</p>
          </div>
        </button>

        <button
          type='button'
          onClick={() => setSelected('free')}
          className={`flex gap-5 border px-6 py-4 rounded-md 
            ${selected === 'free' ? 'border-primary' : 'border-[#fff0]'} 
            hover:border-gray-400 transition-all`}
        >
          <Image src="/icons/free-ticket.svg" alt='icon' height={32} width={32} />
          <div>
            <h1 className='text-[1.1em] font-semibold w-fit'>Free Event</h1>
            <p>{`I’m running a free event`}</p>
          </div>
        </button>
      </section>

      {selected === 'ticketed' && (
        <section className='flex flex-col gap-5 mb-5'>
          <h1 className="text-[1.7em]">What tickets are you selling?</h1>

         
            
          {tickets.map((ticket, index) => (
  <div key={index} className='grid grid-cols-[2fr_1fr_3em] gap-2'>
    <div className='flex flex-col gap-3 w-[80%]'>
      <label className='text-[1.1em] font-semibold'>Ticket Type</label>
      <InputField
        placeholder='Ticket Name e.g. General Admission'
        value={ticket.name}
        onChange={(e) => handleTicketChange(index, 'name', e.target.value)}
      />
    </div>

    <div className='flex flex-col gap-3'>
      <label className='text-[1.1em] font-semibold'>Ticket Price</label>
      <div className='flex items-center'>
        <CurrencySelector
          value={ticket.currency}
          onChange={(currency) => handleCurrencyChange(index, currency)}
          className='grid place-items-center rounded-l-md h-[2.7em] w-[2.7em]'
        />
        <input
          type="text"
          placeholder="0.00"
          className="p-3 border border-[#ffffff56] bg-transparent rounded-r-md w-[12em] focus:ring-2 focus:outline-none"
          value={ticket.price}
          onChange={(e) => handleTicketChange(index, 'price', e.target.value)}
        />
        
      </div>
    </div>

    
    {index !== 0 && (
          <button
            type="button"
            onClick={() => deleteTicket(index)}
            className='hover:bg-[#ffffff17] gap-1 text-white rounded-md p-4 grid place-items-center w-fit mb-0 mt-auto'
          >
            <AiOutlineDelete size={20} color='white' className='my-auto' />
          </button>
        )}
    
  </div>
))}
          


          <button
            type="button"
            onClick={addTicket}
            className='hover:bg-[#ffffff17] flex gap-1 text-white rounded-md py-3 px-7 font-medium w-fit mr-0 ml-auto'
          >
            <IoIosAdd size={22} color='white' className='my-auto' /> Add another ticket
          </button>
        </section>
      )}

      <div className='flex gap-4 w-fit mr-0 ml-auto'>
        <button onClick={() => router.push(`?tab=banner`)} type="button" className='py-2 px-4 font-medium'>
          Back
        </button>
        <Button
          onClick={() => router.push(`?tab=review`)}
          children="Save & Continue"
          className="w-fit px-7 font-medium"
        />
      </div>
    </div>
  );
}
