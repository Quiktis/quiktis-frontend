import React from 'react'
import Image from 'next/image'
import { strongPoints } from '@/constant/strongPoints';

export default function StrongPointsSection() {
  return (
    <section className="max-sm:px-0 px-3 lg:px-[5em] gap-5 py-[6em] md:py-[10em]">
            <div className="flex flex-col justify-center md:grid md:grid-cols-2 lg:grid-cols-3 gap-[2.5em] w-fit mx-auto max-sm:w-[95%]">
              {strongPoints.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-5 mb-7 w-full items-center text-center">
                  <Image
                    unoptimized={true}
                    src={item.iconUrl}
                    alt={item.title}
                    width={80}
                    height={80}
                  />
                  <p className={`${index === strongPoints.length - 1 ? "" : "text-[#1e1e1e]"}`}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
  )
}
