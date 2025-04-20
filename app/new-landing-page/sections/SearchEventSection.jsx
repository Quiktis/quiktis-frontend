import React from 'react'
import Link from 'next/link'

export default function SearchEventSection() {
  return (
    <>
        <div className="grid left-auto top-[-34em] right-auto place-items-center absolute z-10 w-full h-[50em] ">
        <div className="w-full h-[60em] inset-0 radial-gradient-custom blur-3xl opacity-50"></div>
      </div>
        <section className="relative z-40 mt-[2em] md:mt-[5em] text-center px-20 max-md:px-5 ">
                <div className="gradient-text flex justify-center flex-col gap-6">
                  <div className="bg-[#acabab21] max-sm:text-[0.9em] max-sm:w-[90%] w-fit mx-auto p-2 shadow-md px-6 rounded-[2em] border border-[#69696948]">
                    Join 850,000+ top organizations and attendees like Apple, OpenAI,
                    and NASA.
                  </div>
                  <h1 className="flex justify-center text-[2.8em] md:max-w-[76%] sm:max-w-[76%] mx-auto max-sm:text-[2.5em] md:text-[3.4em] lg:text-[4em] xl:text-[4.4em] leading-[1.2em] text-center font-bold">
                    Revolutionizing Event Ticketing
                  </h1>
                </div>
                <p className="md:text-[1.2em] mt-3 w-[90%] md:max-w-[60%] mx-auto">{`Quiktis is a decentralized ticketing platform revolutionizing event access across the globe. `}</p>
        
                <form className="mt-[3.5em] relative grid mx-auto place-items-center w-full md:w-[68%] lg:w-[50%] lg:max-w-[40em]">
                  <input
                    placeholder="Search for any event"
                    type="text"
                    className="md:px-8 px-6 py-5 outline-none bg-[#3d2b2b] w-full rounded-[1.6em]"></input>
                  <Link
                    href="/register"
                    className="text-[0.9em] md:text-[1em] absolute cursor-pointer bg-primary px-6 py-3 right-3 rounded-[1em] btn-3d border-1 border-[#eb4b3c] icon">
                    Search
                  </Link>
                </form>
              </section>
    </>
  )
}
