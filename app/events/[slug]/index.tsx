"use client"
import AllEvents from '@/components/AllEvents'
import DescriptionCard from '@/components/DescriptionCard'
import Button from '@/components/ui/Button'
import Image from 'next/image'
import React from 'react'
import { IoCopy, IoTicketSharp } from 'react-icons/io5'

const EventViewing = () => {
  return (
    <div>
            <div className='flex gap-10'>
                <Image
                src={'/party1.png'}
                alt='party'
                width={950}
                height={550}
                className='bg-cover rounded-[20px] object-cover w-[950px] h-[550px]'
                />
                <Image
                src={'/igo.png'}
                alt='party'
                width={450}
                height={550}
                className='bg-cover rounded-[20px] object-cover w-[4 50px] h-[550px]'
                />
            </div>
            <div className='flex justify-between mt-10 '>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-[50px] font-[900] leading-10'>Event Title Lorem ipsum <br/>
                    Dolor Sit Smet </h1>
                    <p className='text-[#AAAAAA]'>By mention Creator</p>
                </div>
                <div className='flex flex-col justify-end items-end'>
                    <Button className='bg-primary flex gap-3 justify-center text-white py-3 items-center rounded-[15px]' onClick={()=>""}>
                    Get Ticket $70
                    <IoTicketSharp />
                  </Button>
                </div>
            </div>
            <div className='flex gap-10 mt-10 h-[750px]'>
                <DescriptionCard/>
                <div className='flex flex-col justify-center items-center gap-5 w-[450px] h-[750px]'>
                    <Image
                    src={'/map.png'}
                    alt='map'
                    width={350}
                    height={250}
                    />
                    <div className='p-3 flex flex-col gap-4 bg-white w-[350px] h-[200px] rounded-[20px] justify-center'>
                      <h1 className='text-black text-[22px] font-bold'>Locate</h1>
                      <p className='text-[15px] text-gray-500'>2118 Thornridge Cir. Syracuse, Connecticut 35624</p>
                      <div className='flex text-[#F68B61] gap-4 items-center'><IoCopy size={22} />Copy location</div>
                      <Button 
                      onClick={()=> "Copy location"}
                      className='w-full py-3 bg-primary'>Open Map</Button>
                    </div>
                </div>
            </div>
            <div className='w-full flex gap-4'>
              <Button onClick={() => {}} className='w-[50%] rounded-[10px] py-4 bg-primary'>Buy with Card</Button>
              <Button 
          onClick={() => {}} 
          className='w-[50%] py-4 rounded-[10px] text-white' 
          style={{ background: 'linear-gradient(90deg, #30677C 0%, #6C0EB9 100%)' }}
        >
          Buy with Crypto
        </Button>
            </div>
            <div className='mt-10'>
                <Image
                src={'/coin.png'}
                alt='coin'
                width={1458}
                height={700}
                />
            </div>
            <AllEvents title='NFT TICKETS'/> 
    </div>
  )
}

export default EventViewing