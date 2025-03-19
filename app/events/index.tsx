"use client"
import AllEvents from '@/components/AllEvents'
import HappeningSection from '@/components/HomePage/Happening'
import Button from '@/components/ui/Button'
import SearchBar from '@/components/ui/SearchBar'
import Image from 'next/image'
import React from 'react'
import { IoTicketSharp } from 'react-icons/io5'

const EventsPage = () => {
  return (
    <main className='min-h-screen'>
        <div className='flex md:flex-row flex-col gap-20 justify-center items-center w-full'>
            <div className='flex flex-col gap-8 w-1/2'>
                <h1 className='md:text-[90px] text-2xl font-[900]'>Events</h1>
                <h4 className='text-[20px]'>Stay Ahead of the Curve with Quiktis&apos; Cutting-Edge<br/> Solutions</h4>
                <div className='flex flex-col gap-2'>
                    <p>Search any event</p>
                    <SearchBar
                        placeholder='Search Event'
                        value=''
                        onChange={()=> {''}}
                        />
                </div>
            </div>
            <div className='w-1/2 flex justify-center items-center'>
                <Image
                src={'/young-people-enjoying-street-food.png'}
                alt='young-people-enjoying-street-food'
                width={700}
                height={600}
                className='bg-cover object-cover'
                />
            </div>
        </div>
        <HappeningSection/>
        <AllEvents/>
        <div className='flex flex-col gap-5 mt-10'>
                <h1 className='uppercase text-[30px] font-bold'>Coming Next</h1>
                <div className='w-full flex gap-10'>
                    {
                        [1,2,3].map((next, idx)=> {
                            return (
                                <div key={idx}
                                className='p-4 border-5 border-primary rounded-[30px] bg-black flex flex-col gap-3 shadow-custom-red w-[420px] h-auto'
                                >
                                <Image
                                    src={'/party1.png'}
                                    alt='party 1'
                                    width={420}
                                    height={300}
                                    className='rounded-[30px] '
                                />
                                <h1 className='text-[20px]'>Africa’s fashion industry.</h1>
                                <div className='flex justify-between'>
                                            <h1>May 23, 2024<br/>
                                            13:20</h1>
                                        <h1>Lagos,Nigeria</h1>
                                </div>
                                <Button className='bg-primary flex gap-3 justify-center text-white py-3 items-center rounded-[15px]' onClick={()=>{}}>
                                                Get Ticket
                                                <IoTicketSharp />
                                            </Button>
                                </div>
                            )
                        })
                    }
                
                </div>
        </div>
    </main>
  )
}

export default EventsPage