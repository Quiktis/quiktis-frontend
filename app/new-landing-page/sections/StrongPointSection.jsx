import React from 'react'
import Image from 'next/image'
import { strongPoints } from '@/constant/strongPoints';

export default function StrongPointsSection() {
  const isHighlighted = (title) => {
    return title === "Smart Contract Automation" || title === "Get Refund on Unused Ticket";
  };

  return (
    <section className="max-sm:px-0 px-3 lg:px-[5em] gap-5 py-[6em] md:py-[10em]">
            <div className="flex max-sm:flex-col justify-center gap-[2.5em] w-fit mx-auto max-sm:w-[90%] flex-wrap">
              {strongPoints.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col gap-5 mb-5 mt-8 items-center text-center w-[25em] max-sm:w-[95%] ${
                    isHighlighted(item.title) ? '' : 'opacity-20'
                  }`}>
                  <Image
                    unoptimized={true}
                    src={item.iconUrl}
                    alt={item.title}
                    width={80}
                    height={80}
                  />
                  <p className='text-xl font-medium'>{item.title}</p>
                  <p className={`${isHighlighted(item.title) ? 'text-white font-medium' : 'text-[#adadad]'}`}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
  )
}
