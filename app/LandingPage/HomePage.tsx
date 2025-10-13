import React from "react";
import Image from "next/image";
import { strongPoints } from "@/constant/strongPoints";
import Link from "next/link";

export default function HomePage() {
  return (
    <>

    {/* Dotted background pattern */}
    <div
        className=" absolute inset-0 right-0 left-0 z-0"
        style={{
           
          backgroundImage: `url('/texture.png')`,
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
          opacity: 0.23,
        }}
      />

       <div
        className="max-sm:hidden absolute inset-0 right-0 left-0 max-md:top-[100vw] z-0"
        style={{
           
          backgroundImage: `url('/z-hero.png')`,
          backgroundSize: "100vw",
          backgroundRepeat: "no-repeat",
          //opacity: 0.95,
        }}
      />
    
      <div className="grid left-auto top-[-40em] right-auto place-items-center absolute w-full h-[50em]">
        <div className="w-[80%] h-[60em] inset-0 radial-gradient-custom blur-3xl opacity-50"></div>
      </div>

      <div>
        <section className="grid w-full max-md:items-center md:w-[95%] lg:w-[78%] xl:w-[73%]  md:max-w-6xl mx-auto md:min-h-screen max-md:mb-0 md:mb-[25vh] lg:mb-[40vh] xl:mb-[65vh] mt-3">
          <div className="relative flex flex-col py-32 max-md:pb-[0.4em] px-4 overflow-hidden max-sm:w-fit max-sm:mx-auto w-fit max-md:mx-auto mr-0 mx-auto h-fit my-auto">
            {/* Background gradient */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-700/30 via-pink-500/20 to-transparent blur-3xl" />

            <p className="bg-[#acabab21] font-inter w-fit max-md:text-[0.5em] p-1 text-[0.85em] lg:text-[0.9em] shadow-md px-4 mb-5 rounded-[2em] border border-[#69696948]">
              <span className="letter-spacing-[-0.04em]">⭐⭐⭐⭐⭐</span> Review from our customer and our trusted partners
            </p>

            <h1 className="text-[1.8em] md:text-[2.6em] lg:text-[3em] xl:text-[3.65em] 3xl:text-[4em] leading-tight mb-4 font-geist font-[300] text-white letter-spacing-[-0.02em] max-md:w-fit">
              Ticketing Built to <br /> Shape Tomorrow
            </h1>

            <p className="text-white/50 max-w-lg mb-8 text-[0.95em] md:text-[1em] xl:text-[1.3em] max-md:w-fit">
              Experience events that build the future.{<br></br>} Are you on it? Get
              tickets now.
            </p>

            <div className="flex gap-4 max-md:w-fit">
              <Link href={"/register"} className="bg-white poppins-medium text-black font-medium max-sm:text-[0.9em] max-sm:px-5 max-sm:py-2 px-6 py-3 rounded-full hover:bg-gray-200 transition">
                Get started →
              </Link >
              <Link href="/register" className="border poppins-medium opacity-[35%] border-gray-500 max-sm:text-[0.9em] max-sm:px-5 max-sm:py-2 px-6 py-3 rounded-full hover:border-white transition">
                Book Demo
              </Link>
            </div>
          </div>
        </section>

        <section>
            <Image
            unoptimized={true}
            src="/z-hero.png"
            alt="hero image"
            width={1200}
            height={600}
            className="w-full h-auto max-md:block md:hidden relative z-10 -mt-3"
          />
        </section>



        <section className="mx-sm:w-[95%] max-w-[90%] mx-auto max-sm:px-0 px-3 lg:px-[5em] gap-5 md:pt-[9em] pb-[6em]">
            <div className="max-md:flex flex-col grid lg:grid-cols-3 justify-center gap-[4.5em] w-fit mx-auto max-sm:w-[90%] flex-wrap">
              {strongPoints.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col gap-5 w-[100%] max-sm:w-[95%]`}>
                    <div className="flex gap-2">
                        <Image
                    unoptimized={true}
                    src={item.iconUrl}
                    alt={item.title}
                    width={40}
                    height={40}
                  />
                  <p className='max-sm:text-[0.95em] font-medium h-fit my-auto'>{item.title}</p>
                    </div>
                  
                  <p className={`text-white/30 text-[0.95em] font-medium`}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <div className="bg-[#181B1E] relative z-50 rounded-2xl p-6 flex flex-col lg:flex-row items-start lg:items-center justify-between max-w-[95%] md:max-w-[85%] mx-auto mb-[4em]">
                      <div className="bg-[#181B1E] flex max-md:flex-col items-start gap-4 mb-4 lg:mb-0">
                        <div className="flex gap-2">
                            <div className="bg-[#919499] rounded-md p-3 flex-shrink-0 my-auto">
                          <Image src="/help-icon.svg" height={20} width={20} alt="icon" />
                          
                        </div>
                        <h3 className="max-sm:block hidden my-auto md:text-lg font-semibold">Call for help!</h3>
                        </div>
                        
                        <div>
                          <h3 className="max-sm:hidden block text-lg font-semibold mb-1">Call for help!</h3>
                          <p className="text-gray-400 text-sm">
                            Need any help? Get in touch with our team to expert to support you.
                          </p>
                        </div>
                      </div>
                      <Link href={"/contact"} className=" text-black hover:bg-gray-700 px-6 py-2 rounded-md font-medium transition text-center bg-white hover:text-white max-md:w-[100%]">
                        Contact us
                      </Link>
                    </div>
      </div>
    </>
  );
}
