"use client"
import Image from 'next/image'
import React from 'react'
import Button from './ui/Button'
import Input from './ui/Input'

const NewsLetter = () => {
  return (
    <div className='w-full '>
        <div className='flex justify-between w-full -z-50 relative'>
            <Image
            src={'/mask-fade.svg'}
            alt='mask-fade'
            width={200}
            height={200}
            className='-left-20 relative'
            />
             <Image
            src={'/mask-green.svg'}
            alt='mask-fade'
            width={200}
            height={200}
            className='-right-20 absolute'
            />
     <div className='h-[250px] rounded-[40px]  w-full pl-[70px] border-2 shadow flex flex-col gap-3 justify-center absolute z-50 newsletter-bg'>
                <h1 className='text-[50px] leading-none text-white'>Get the latest updates from <span className='text-primary'>Quiktis</span></h1>
                <p>Subscribe to our newsletter and be the first to get the latest updates from <span className='text-primary'>Quiktis</span></p>
                <div className='flex gap-6 w-full'>
                <Input
                  value={''}
                  onChange={()=> {''}}
                  type="email"
                  placeholder="Input email here"
                  className="bg-opacity-15 bg-white py-3 border border-[#CBCAD7] text-white placeholder-gray-500 rounded-[15px] px-20"
                />
                    <Button className='py-3 rounded-[15px] bg-primary px-14' onClick={()=> {''}}>Subscribe</Button>
                </div>
    </div>
        </div>
    </div>
  )
}

export default NewsLetter