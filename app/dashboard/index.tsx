"use client"
import CreateEventForm from '@/components/EventCreationForm'
import EventsOperations from '@/components/EventsOperations'
import ProfileCard from '@/components/ProfileCard'
import Statistics from '@/components/Statistics'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import React from 'react'
import InputField from '@/components/ui/InputFields'
import { useUser } from '../context/UserContext'

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
    const { user } = useUser();
  return (
    <main className='flex flex-col gap-5 w-full relative min-h-screen'>
             <div className='flex md:flex-row flex-col gap-20 shrink-0 relative w-full justify-center items-center h-full'>
                <Image
                src={'/502.png'}
                alt='502'
                width={369}
                height={300}
                className='absolute -z-50 -top-20'
                />
                <div className='w-full'>
                <EventsOperations/>
                
               
                <ProfileCard name={user.name?? ""} email={user.email?? ""} age={user.age?? ""}/>
                </div>
                
            </div>
            <section className='mt-[3em]'>
                    <h2 className='text-[2em] font-medium mb-[1em]'>Profile Settings</h2>
                    <div className="grid grid-cols-[6em_auto] my-auto gap-[0.8em] w-fit h-fit">
                          <div className="relative w-[5em] h-[5em] mx-auto sm:mx-0">
                                <Image
                                  src="/jax.png"
                                  alt="Jaxson Siphron"
                                  width={100}
                                  height={100}
                                  className="rounded-full border-2 border-white object-cover"
                                />
                              </div>
                              <div className="h-fit my-auto">
                              <div className="flex max-md:gap-3 gap-[3em] justify-between ">
                              
                              <div className="flex flex-col">
                                <h2 className="text-xl font-semibold w-fit">{/*Jaxson Siphron*/user.name}</h2>
                                <p className="text-gray-300 text-xs sm:text-sm w-fit">
                                  {/*Jaxsonsiphron@gmail.com*/ user.email}
                                </p>
                              
                            </div>
                            <hr className="my-4 border-gray-400 mt-3"></hr>
                              </div>
                            
                            
                            
                          </div>
                          </div>
                    <div className='my-4 mt-[3em] w-[65%] flex flex-col gap-[3em]'>
                        <div className='grid grid-cols-2 gap-5'>
                        <InputField label='First Name'/>
                        <InputField label='Last Name'/>
                        </div>
                        <div className='grid grid-cols-[auto_16em] gap-5'>
                        <InputField label='Email'/>
                        <Button className='grid items-center'>Update Email Address</Button>
                        </div>
                        
                    </div>
                </section>
            {/*<CreateEventForm/>*/}
            <div className=' flex flex-wrap gap-3 relative w-full mt-[5em]'>
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
            {/*<Statistics/>
            <Image
            src={'/chart.png'}
            alt='chart'
            width={1448}
            height={600}
            className='mt-10'
            />*/}
    </main>
  )
}

export default CreateEvent