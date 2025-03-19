import React from 'react'
import EventsCard from './EventsCard'
import { Events } from '@/constant/events'

const AllEvents = ({title}: {title?:string}) => {
  return (
    <div className='flex flex-col gap-5 mt-10'>
       {title && <h1 className='uppercase text-[40px] font-bold'>{title}</h1>}
      <div className='w-full flex flex-wrap gap-10 mt-10 justify-center'>
            {
                Events.map((event, index)=> {
                    return (
                        <EventsCard
                        key={index}
                        image={event.image}
                        alt={event.alt}
                        heading={event.heading}
                        title={event.title}
                        description={event.description}
                        country={event.country}
                        price={event.price}
                        slug={event.slug}
                        date={event.date}
                        onClick={()=>{''}}
                        />
                    )
                })
            }
        </div>
    </div>
  )
}

export default AllEvents