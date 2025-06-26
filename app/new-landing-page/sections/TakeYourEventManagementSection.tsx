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
    <div className={`${containerClass} grid place-items-center md:mt-[6em] lg:mt-[10em] max-sm:px-[1em] md:px-[3em] lg:px-[6em] z-50`}>
        <h1 className='max-sm:text-left text-center max-sm:font-medium text-[1.5em] lg:text-[2.7em] font-medium font-inter max-sm:w-full'>Take your event management {<br></br>} to the next level</h1>
        <p className='max-sm:text-left  text-center mt-5'>{`Streamline your entire event journey — from planning to post-event`}{<br></br>} <span className='mt-0 max-sm:pt-[1em]'>{`analytics — with powerful tools built for modern organizers.`}</span></p>
        <BrandList brands={brands} brandHeightClass='h-[15em]' brandWidthClass='w-[18em]' speed='slow'/>
        <Link  href="/create-events" className='flex justify-center gap-3 bg-primary items-center w-full rounded-lg px-[1.9em]  md:w-fit py-4 shadow-xl shadow-[#ff4e2a42] icon z-50'>
                    
                    <Image src="/icons/event.svg" height={24} width={24} alt="icon"/>
                    <p className='my-auto'>Create Event</p>
                </Link>
    </div>
  )
}
