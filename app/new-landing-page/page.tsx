import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import TrustedBrands from '@/components/TrustedBrands'

const strongPoints = [
  {
    title: "Security Built on the Blockchain",
    description: "Blockchain-powered security for tamper-proof transactions and total transparency—no middlemen, no compromises.",
    iconUrl: "/strong_point1.png"
  },
  {
    title: "Decentralized Identity",
    description: "No third parties, no data breaches—just you, in control.",
    iconUrl: "/strong_point2.png"
  },
  {
    title: "Smart Contract Automation",
    description: "Streamline operations with automated smart contracts.",
    iconUrl: "/strong_point3.png"
  },
  {
    title: "Community Governance",
    description: "Participate in decentralized decision-making through voting.",
    iconUrl: "/strong_point6.png"
  },
  {
    title: "Asset Tokenization",
    description: "Digitally tokenize real-world assets for efficient management.",
    iconUrl: "/strong_point5.png"
  },
  {
    title: "Get Refund on Unsed Ticket",
    description: "Unused ticket? No worries. Easily request a refund—fast, secure, and hassle-free.",
    iconUrl: "/strong_point6.png"
  }
]

export default function page() {
  return (
    <main className='relative'>
    <div className='grid left-auto top-[-20em] right-auto place-items-center absolute z-10 w-full h-[50em]'>
            <div className="w-full h-[60em] inset-0 radial-gradient-custom blur-3xl opacity-50"></div>
        </div>
      <header className='relative z-40 mx-auto flex justify-between mt-[1.4em] md:mt-[4em] w-[100%] lg:w-[95%] lg:max-w-[70em] md:bg-[#acabab21] lg:px-3 md:px-7 px-5 py-6 lg:py-3 rounded-[1.3em] shadow-[#0723424D] md:shadow-2xl'>
        
        <div className='my-auto lg:px-8'>
          <Image unoptimized={true} src='/new_logo.svg' className='w-[80px]' alt='Logo' width={120} height={60} />
        </div>
        <ul className='relative z-20 gap-9 my-auto hidden md:flex tablet-hidden'>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/events">Explore Events</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
            <li><Link href="/register">Newsletter</Link></li>
        </ul>
        <Link href="/" className='lg:block cursor-pointer bg-primary px-6 py-3 rounded-[1em] btn-3d border-1 border-[#eb4b3c] hidden'>Get Started</Link>
        <div className='relative h-[30px] w-[30px] my-auto block md:hidden tablet-block'>
          <Image unoptimized={true} src="/ep_menu.svg" alt='menu' layout='fill' objectFit='contain' />
          </div>
        
      </header>
      <section className='relative z-40 mt-[2em] md:mt-[5em] text-center'>
      <div className="gradient-text flex justify-center flex-col gap-6">
        <div className='bg-[#acabab21] max-sm:text-[0.7em] w-fit mx-auto p-2 shadow-md px-6 rounded-[2em] border border-[#69696948]'>Join 850,000+ top organizations and attendees like Apple, OpenAI, and NASA.</div>
          <h1 className="flex justify-center text-[2.8em] md:max-w-[76%] sm:max-w-[76%] mx-auto max-sm:text-[2.5em] md:text-[3.4em] lg:text-[4.4em] leading-[1.2em] text-center  font-bold">
          Revolutionizing Event Ticketing
          </h1>
        </div>
        <p className='md:text-[1.2em] mt-3 w-[90%] md:max-w-[60%] mx-auto' >{`Quiktis is a decentralized ticketing platform revolutionizing event 
        access across the globe. `}</p>

        <form className='mt-[3.5em] relative grid mx-auto place-items-center w-full md:w-[68%] lg:w-[50%] lg:max-w-[40em]'>
          <input placeholder='Enter your Email' type='text' className='md:px-8 px-6 py-5 outline-none bg-[#79797965] w-full rounded-[1.6em]'></input>
          <Link href="/" className='text-[0.9em] md:text-[1em] absolute cursor-pointer bg-primary px-6 py-3 right-3 rounded-[1em] btn-3d border-1 border-[#eb4b3c]'>Join for free</Link>
        </form>
      </section>



      <section className='mt-[6em] md:mt-[10em]'>
        <p className='text-center'>Trusted by world leaders</p>
        <TrustedBrands containerClass='my-2'/>
      </section>

      <section className='max-sm:px-0 px-3 lg:px-[5em] gap-5 py-[6em] md:py-[10em]'>
        <div className='flex flex-col justify-center md:grid md:grid-cols-2 lg:grid-cols-3 gap-[2.5em] w-fit mx-auto max-sm:w-[95%]'>
          {strongPoints.map((item, index) => (
            <>
            <div key={index} className='flex flex-col gap-3 mb-7 w-full'>
              <div className='grid grid-cols-[40px_auto] gap-3'>
                <Image unoptimized={true} src={item.iconUrl} alt={item.title} width={40} height={40} />
                <h1 className='my-auto text-[1.1em] md:text-[1.2em] font-semibold'>{item.title}</h1>
              </div>
              <p className=''>{item.description}</p>
            </div>
            </>
          ))}
        </div>
      </section>

      <section className='pb-[10em] relative'>
      <div className="absolute w-[80%] h-[80em] top-[-19em] left-[-30vw] inset-0 radial-gradient-blue blur-3xl opacity-50"></div>
      <div className="absolute w-[20%] max-sm:h-[20em] h-[35em] lg:h-[60em] top-[-19em] inset-0 radial-gradient-red-light blur-3xl opacity-50 left-[50vw] rotate-[-30deg]"></div>
        <div className='z-30 relative px-9 py-5 md:px-12 md:py-9 border-2 border-[#ffffff27] glass-bg-light bg-[#ffffff13] rounded-[1em] flex flex-col md:grid grid-cols-2 gap-4'>
          <div className='flex flex-col gap-4 md:gap-7'>
            <h1 className='text-[1.3em] md:text-[2em] font-semibold'>Unlock the Power of Ticketing Today!</h1>
            <p>Join us on the journey to the decentralized future.</p>
          </div>
          <div className='w-full grid place-items-center'>
            <button type="button" className='md:mr-0 md:ml-auto bg-primary w-full md:w-fit py-3 px-4 h-fit text-black rounded-xl'>Connect Wallet</button>
          </div>
        </div>

        <div className='relative z-50 flex flex-col lg:grid grid-cols-2 mt-[5em] md:mt-[9.4em] gap-[5em]'>
          <div className='flex flex-col justify-center h-fit'>
            <Image unoptimized={true} src='/landing_page_chart.png' alt='Illustration 1' className='  w-full' width={320} height={320} />
            <h1 className='mt-[-2em] md:mt-[-10em] md:text-center  lg:text-left text-[1.5em] lg:mt-[-4em] lg:text-[2.5em] font-semibold'>POWER TO EVENT ORGANIZERS AND ATTENDEES</h1>
            <p className='mt-4 text-left md:text-center lg:text-left '>{`Organizers get seamless ticketing, real-time event tracking, and secure payments. Attendees enjoy easy access, smooth check-ins, and a hassle-free experience.`}</p>
          </div>
          <div className='grid place-items-center'>
            <Image unoptimized={true} src='/woman_partying.png' alt='Illustration 2' className='w-full' width={320} height={320} />
          
          </div>

        </div>
      </section>
    </main>
  )
}
