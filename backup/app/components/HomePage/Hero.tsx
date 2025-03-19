"use client"
import Image from 'next/image'
import React from 'react'
import Button from '../ui/Button'
import { useRouter } from 'next/navigation'

const company = [
    {
        name: 'Company A',
        logo: '/co-work.png',
    }, {
        name: 'Company B',
        logo: '/greener.png',
    }, {
        name: 'Company C',
        logo: '/saas.png',
    }, {
        name: 'Company D',
        logo: '/dorfus.png',
    }, {
        name: 'Company E',
        logo: '/ask.png',
    },
]
const Hero = () => {
    const router = useRouter()
  return (
    <div className='flex flex-col gap-14'>
           <div className='relative h-[524px] flex flex-col justify-center items-center md:flex-row gap-8'>
        <div className='flex flex-col  justify-center gap-2 text-[17px] w-[590px]'>
           <p>From Concept to Curtain Call...</p>
           <h1 className='text-[50px] leading-none font-[900] font-inter '>Quiktis Has You Covered</h1>
           <p>Stay Ahead of the Curve with Quiktis&apos; Cutting-Edge Solutions</p>
           <Button onClick={()=> {router.push('/events')}} className=' bg-primary w-1/2 py-3 mt-4 rounded-md'>Explore Events</Button>
        </div>
        <div className='relative'>
        <Image
                src={'/Ellipse.png'}
                alt='Event'
                width={300}
                height={300}
                objectFit='cover'
                className='absolute -z-50 left-36 top-5'
            />
            <Image
                src={'/events.png'}
                alt='Event'
                width={849}
                height={500}
                objectFit='cover'
                className=''
            />
        </div>
       <div className='w-[70%] md:flex justify-between hidden absolute bottom-0 -left-36'>
                <Image
                src={'/star1.png'}
                alt='star1'
                width={150}
                height={150}
                />
                <Image
                src={'/star2.png'}
                alt='star1'
                width={150}
                height={150}
                />
       </div>
    </div>
    <div className='flex md:flex-row flex-col justify-center items-center gap-10'>
            <Image
                src={'/dance.png'}
                alt='Rectangle'
                width={470}
                height={570}
                objectFit='cover'
            />
            <div className='w-[800px] h-[265px] flex flex-col gap-1'>
                <h2 className='text-[20px] text-primary uppercase'>Welcome to Quiktis </h2>
                <h1 className='text-[25px] font-bold uppercase leading-7 '>Where Event Experiences 
                Are Revolutionized!</h1>
                <p className='text-[16px] leading-5'>At Quiktis, we&apos;re on a mission to transform the way events are managed and experienced. With our cutting-edge ticketing platform, we&apos;re dedicated to simplifying the intricate world of event management, making it easier and more enjoyable for both organizers and attendees alike.</p>
                <Image
                src={'/event-ticket.svg'}
                alt='Rectangle'
                width={430}
                height={5360}
                objectFit='cover'
                className='right-0 mt-28 -z-50 absolute'
                />
            </div>
       </div>
       <div className='flex gap-36 z-50 '>
            {
                    company.map((item, index) => (
                        <div key={index} className='flex gap-6 w-full animate-scroll'>
                            <Image
                                src={item.logo}
                                alt={item.name}
                                width={147}
                                height={280}
                            />
                        </div>
                    ))
                }
       </div>
    </div>
    
  )
}

export default Hero