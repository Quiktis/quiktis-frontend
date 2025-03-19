"use client"
import Image from 'next/image'
import React from 'react'
import SearchBar from '../ui/SearchBar'

const upnext = [
    {
        title: 'Dinner Dates',
        image: '/dinner.png'
    }, {
        title: 'Club',
        image: '/club.png'
    }, {
        title: 'Talents',
        image: '/talents.png'
    }, {
        title: 'Ladies',
        image: '/ladies.png'
    },
]

const UpNext = () => {
  return (
    <div className='flex md:flex-row flex-col gap-5 w-full justify-center items-center mt-40'>
        <div className='w-[50%] h-[349px] flex flex-col gap-10'>
            <h1 className='text-[30px] font-primary font-bold'>UP NEXT</h1>
            <h1 className='text-[40px] font-primary font-bold'>EXPLORE A WIDE RANGE OF EVENTS FROM ALL AROUND THE WORLD</h1>
            <SearchBar
            placeholder='Search Event'
            value=''
            onChange={()=> {''}}
            />
        </div>
        <div className='grid grid-cols-2 gap-x-20 w-[50%]'>
              {
                upnext.map((next, index) => {
                    return (
                        <div key={index} className={`${(next.title === 'Club') && 'mt-20'} ${(next.title === 'Ladies') && 'mt-20'} ${(next.title === 'Dinner Dates 1' || next.title === 'Talents') && 'mt-10'} relative`}>
                            <Image
                            src={next.image}
                            alt={next.title}
                            width={300}
                            height={300}
                            />
                             <div className={`absolute ${next.title === 'Club' || next.title === 'Ladies' ? 'bottom-0' : 'bottom-10'} text-[24px] font-primary font-bold w-full h-[70px] flex justify-center items-center m-auto bg-white rounded-b-[20px] newsletter-bg`}>
                                {next.title}
                            </div>
                        </div>
                    )
                })
              }
        </div>
        
    </div>
  )
}

export default UpNext