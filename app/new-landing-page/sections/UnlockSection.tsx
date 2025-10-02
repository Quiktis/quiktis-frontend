import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function UnlockSection() {
  return (
    <section className="pb-[10em] relative px-20 max-md:px-5">
      <div className="absolute w-[80%] h-[80em] top-[-19em] left-[-30vw] inset-0 radial-gradient-blue blur-3xl opacity-50"></div>
      <div className="absolute w-[20%] max-sm:h-[20em] h-[35em] lg:h-[60em] top-[-19em] inset-0 radial-gradient-red-light blur-3xl opacity-50 left-[50vw] rotate-[-30deg]"></div>
      <div className="z-30 relative px-9 py-5 md:px-12 md:py-9 border-2 border-[#ffffff27] glass-bg-light bg-[#ffffff13] rounded-[1em] flex flex-col md:grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-4 md:gap-7">
          <h1 className="text-[1.3em] md:text-[2em] font-semibold">
            Unlock the Power of Ticketing Today!
          </h1>
          <p>Join us on the journey to the decentralized future.</p>
        </div>
        <div className="w-full grid place-items-center">
          <Link
            href="/register"
            className="font-medium max-sm:text-center md:mr-0 md:ml-auto bg-primary w-full md:w-fit py-3 px-4 h-fit text-black rounded-xl">
            Sign Up
          </Link>
        </div>
      </div>

      <div className="relative z-50 flex flex-col lg:grid grid-cols-2 mt-[5em] md:mt-[9.4em] gap-[5em]">
        <div className="flex flex-col justify-center h-fit">
          <div className="w-full h-[220px] sm:h-auto overflow-hidden rounded-xl">
            <Image
              unoptimized={true}
              src="/landing_page_chart.png"
              alt="Illustration 1"
              className="w-full h-full object-cover object-center sm:w-auto sm:h-auto sm:max-w-[420px] sm:object-contain"
              width={320}
              height={320}
            />
          </div>
          <h1 className="mt-[-2em] md:mt-[-10em] md:text-center lg:text-left text-[1.5em] lg:mt-[-4em] lg:text-[2.5em] font-semibold">
            POWER TO EVENT ORGANIZERS AND ATTENDEES
          </h1>
          <p className="mt-4 text-left md:text-center lg:text-left">{`Organizers get seamless ticketing, real-time event tracking, and secure payments. Attendees enjoy easy access, smooth check-ins, and a hassle-free experience.`}</p>
        </div>
        <div className="grid place-items-center">
          <Image
            unoptimized={true}
            src="/woman_partying.png"
            alt="Illustration 2"
            className="w-full"
            width={320}
            height={320}
          />
        </div>
      </div>
    </section>
  );
}
