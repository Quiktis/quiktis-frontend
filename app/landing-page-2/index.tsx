import React from "react";
import Image from "next/image";
import Header3 from "@/components/Header3";
import Footer3 from "@/components/Footer3";



export default function LandingPage2() {
  return (
    <>

      <main className="relative ">
        <div className="absolute grid w-full min-h-[max-content] top-0 bottom-0 left-0 right-0 ">
          <div className="grid w-screen h-screen mx-auto mb-0 mt-auto">
            <div className=" pointer-events-none radial-gradient-1 blur-3xl opacity-50 w-[80vw] h-[76vh] lg:w-[65vw] lg:h-[40em] pt-[4em] lg:pt-[6em] mr-[0em] ml-auto max-sm:mb-[7.7em] mb-[-8em] mt-auto"></div>
</div>
        </div>

        <div className="absolute grid w-full h-screen top-0 bottom-0 left-0 right-0 mb-0 mt-auto -z-0">
          <div className="grid w-screen mx-auto">
            <div className=" pointer-events-none radial-gradient-2 blur-3xl opacity-50 w-[60vw] h-[77vh] pt-[1em] mr-0 lg:mr-[16em] ml-auto mb-0 mt-auto"></div>
          </div>
        </div>

        <div className="absolute grid w-full h-screen top-0 bottom-0 left-0 right-0 -z-10">
          <div className="grid w-screen mx-auto">
            <div className=" pointer-events-none radial-gradient-3 blur-3xl opacity-50 w-[60vw] h-[80vh] lg:w-[25em] lg:h-[45em] pt-0 lg:pt-[10em] mr-0 ml-auto my-auto" />
          </div>
        </div>

        <section className="grid h-fit w-full place-items-center pt-[8em] md:pt-[9.5em] max-sm:pb-0 pb-[3em]">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-[1.3fr_1fr] gap-[2em] w-[95%] lg:w-[90%] xl:w-[85%] mx-auto">
            {/*Column 1 */}
            <div className="my-auto text-center lg:text-left z-50">
              <h2 className="text-[2.5em] md:text-[3em] xl:text-[4em] h-fit leading-[1.05em] font-[520] font-inter text-gray-50">
                Experience
                <br />
                <span className="font-instrument-serif-i">events</span> That
                <br />
                <span className="inline-block pr-[5px] mt-[-2em] bg-gradient-to-r from-[#F57B78] via-[#DF3438] via-[#FB2E74] to-[#F74FB3] bg-clip-text text-transparent tracking-[-4.19px] font-semibold">
                  shape tomorrow
                </span>
              </h2>
              <p className="mt-5 max-sm:text-[0.95em] text-lg w-[100%] xl:max-w-[80%]">
                Tickets to experiences that build the future. <br></br>Are you
                on it? Get tickets now.
              </p>

              <div className="flex max-sm:flex-col gap-2 mt-[2em] md:mt-[4em] mx-auto lg:mx-0 w-fit z-30">
                <button className="hover:bg-[#ce0a5c] hover:text-white transition flex gap-2 font-geist font-medium max-sm:px-9 px-5 py-3 shadow-md bg-white text-black rounded-md z-30">
                  <div className="w-[10px] h-[10px] rounded-full items-center my-auto hover:bg-white bg-[#71EA00] shadow-[0_0_10px_rgba(123,255,0,0.5)]"></div>
                  <p className="my-auto">Create your first event</p>
                </button>
                <button className="z-30 font-geist font-medium flex gap-2 hover:bg-gray-50/10 transition max-sm:px-9 px-5 py-3 border-[1px] border-gray-100/30 rounded-md ">
                  <Image
                    src="/incognito.svg"
                    alt="image"
                    height={22}
                    width={22}
                  />{" "}
                  <p className="my-auto">Schedule a demo</p>
                </button>
              </div>
            </div>

            {/*Column 2 */}
            <div>
              <Image
                src="/ghost.png"
                alt="image"
                height={500}
                width={500}
                className="max-sm:max-w-[40%] max-w-[30%] lg:max-w-[65%] object-contain mx-auto lg:mr-0 lg:ml-auto z-50"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer3 />
    </>
  );
}
