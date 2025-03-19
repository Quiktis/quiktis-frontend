"use client"
import CreateEventForm from '@/components/EventCreationForm'
import EventsOperations from '@/components/EventsOperations'
import ProfileCard from '@/components/ProfileCard'
import Statistics from '@/components/Statistics'
import Image from 'next/image'
import React from 'react'
const images = [
    {
        image: '/ladies.png',
        width: 600,
        height: 300
    }, {
        image: '/30k.png',
        width: 300,
        height: 300
    }, {
        image: '/dance1.png',
        width: 400,
        height: 300
    }, {
        image: '/africa.png',
        width: 600,
        height: 300
    }, {
        image: '/igo.png',
        width: 400,
        height: 300
    }, {
        image: '/party.jpg',
        width: 500,
        height: 300
    }, {
        image: '/camera.png',
        width: 200,
        height: 300
    }, {
        image: '/party1.png',
        width: 500,
        height: 300
    }, {
        image: '/show.png',
        width: 600,
        height: 300
    }, 
    {
        image: '/show.png',
        width: 600,
        height: 300
    }, 
]
const CreateEvent = () => {
  return (
    <main className='flex flex-col gap-5 w-full relative'>
             <div className='flex md:flex-row flex-col gap-20 shrink-0 relative w-full justify-center items-center h-full'>
                <Image
                src={'/502.png'}
                alt='502'
                width={369}
                height={300}
                className='absolute -z-50 -top-20 '
                />
                <div className='w-[50%] flex justify-center items-center'>
                 <ProfileCard/>
                </div>
                <div className='w-[40%] flex justify-center items-center'>
                   <EventsOperations/>
                </div>
            </div>
            <CreateEventForm/>
            <div className=' flex flex-wrap gap-3 relative w-full'>
                {
                    images.map((image, index) => (
                        <div key={index} className='w-[19%]'>
                            <Image
                            src={image.image}
                            alt={image.image}
                            width={image.width}
                            height={image.height}
                            />
                        </div>
                    ))
                }
            </div>
            <Statistics/>
            <Image
            src={'/chart.png'}
            alt='chart'
            width={1448}
            height={600}
            className='mt-10'
            />
    </main>
  )
}

export default CreateEvent