import React from 'react'
import BrandList from '@/components/TrustedBrands'
import Link from 'next/link'
import Image from 'next/image';


const brands: string[] = [
   "slide1.png",
   "slide2.png",
   "slide3.png",
   "slide4.png",
   "slide3.png",
   "slide2.png",
  ];

export default function TakeYourEventManagementSection({ containerClass }: { containerClass?: string }) {
  return (
    <div className={`${containerClass} grid place-items-center md:mt-[6em] lg:mt-[10em] max-sm:px-[1em] md:px-[3em] lg:px-[6em]`}>
        <h1 className='text-center text-[2.7em] font-medium font-inter'>Take your event management {<br></br>} to the next level</h1>
        <p className='text-center mt-5'>{`Streamline your entire event journey — from planning to post-event`}{<br></br>} {`analytics — with powerful tools built for modern organizers.`}</p>
        <BrandList brands={brands} brandHeightClass='h-[15em]' brandWidthClass='w-[18em]' speed='slow'/>
        <Link  href="/create-event" className='flex justify-center gap-3 bg-primary items-center w-full rounded-lg px-[1.9em]  md:w-fit py-4 shadow-xl shadow-[#ff4e2a42] icon'>
                    
                    <Image src="/icons/event.svg" height={24} width={24} alt="icon"/>
                    <p className='my-auto'>Create Event</p>
                </Link>
    </div>
  )
}
