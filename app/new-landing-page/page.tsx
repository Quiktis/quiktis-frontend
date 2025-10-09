"use client";
import { useState, useEffect } from "react";
import React from "react";
//import ComingUpNext from "@/components/ComingUpNext";
import Footer from "@/components/NewFooter";
import NewHeader from "@/components/NewHeader";
import Sidebar from "@/components/Sidebar";
import SearchEventSection from "./sections/SearchEventSection";
import StrongPointSection from "./sections/StrongPointSection";
import TrustedBrandSection from "./sections/TrustedBrandSection";
import UnlockSection from "./sections/UnlockSection";
import ExploreEventSection from "./sections/ExploreEventSection";
import TakeYourEventManagementSection from "./sections/TakeYourEventManagementSection";
import useAxios from "../hooks/useAxios";
import { Event } from "@/constant/customTypes";
import Image from "next/image";
import { formatToHumanReadableDate, formatToHumanReadableTime } from "@/app/utils/utilities";
import { FiArrowRight } from "react-icons/fi";
import { CldImage } from 'next-cloudinary';


export default function NewLandingPage() {
  const [SidebarOpen, setSidebarOpen] = useState(false);
  const [comingUpNext, setComingUpNext] = useState([])
  const { sendRequest } = useAxios();

  const [showCookieBanner, setShowCookieBanner] = useState(false);

  useEffect(() => {
    // Check if cookie consent is already saved
    const consentGiven = localStorage.getItem("cookieConsent");
    if (!consentGiven) {
      setShowCookieBanner(true);
    }
  }, []);


  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setShowCookieBanner(false);
  };


  useEffect(() => {
      const fetchEvents = async () => {
        try {
          const response = await sendRequest({
            url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/events`,
            method: "GET",
          });
  
          //console.log("Events response:", response);
  
          if (response.status === "success") {
            setComingUpNext(response.data.events);
            //console.log("Upcoming events - ", comingUpNext)
          } else {
            console.error("Failed to fetch events:", response.message);
          }
        } catch (error) {
          console.error("Error fetching events:", error);
        }
      };
  
      fetchEvents();
    }, []);

    useEffect(() => {
  //console.log("Updated upcoming events:", comingUpNext);
}, [comingUpNext]);






  return (
    <main className="relative mt-[-3em]">

      <SearchEventSection />

      <TrustedBrandSection />

      <div className="md:px-[3em]">

      <StrongPointSection />

      <UnlockSection />

      </div>

      <ExploreEventSection containerClass="px-[3em] max-md:px-[0em]"/>

      {/*<ComingUpNext events={[...comingUpNext.slice(1), comingUpNext[0]].slice(0, 4)} containerClass="mt-[6em] w-full mx-auto px-[8em] max-md:px-5" />*/}




      <section className={`relative py-10 mt-[6em] w-full mx-auto px-[8em] max-md:px-5`}>
            <div className="grid grid-cols-[1fr_2.2fr] w-[80%] absolute h-[50em]">
              <div></div>
              <div className="block max-md:hidden h-full w-full md:w-[40%] lg:w-full translate-x-0 radial-gradient-red-light blur-[18px] md:blur-3xl opacity-50 max-sm:hidden"></div>
            </div>
      
            {comingUpNext.length > 0 && 
              <div id="up-next" className="relative z-10 container mx-auto text-white">
                <h2 className="md:text-[1.8em] lg:text-[2.2em] mb-8">Coming Up Next</h2>
      
                <div className="md:grid grid-cols-1 lg:grid-cols-1 gap-4 max-sm:space-y-[2em]">
                  {[...comingUpNext.slice(1), comingUpNext[0]].slice(0, 5).map((event: Event) => (
                    <div
                      key={event?.id ?? ""}
                      className="grid flex-wrap lg:grid-cols-2 xl:grid-cols-[0.9fr_0.5fr_1fr] gap-4 items-center p-4 border border-[#ffffff60] rounded-[5px] bg-transparent"
                    >
                      {/* Left */}
                      <div className="flex gap-3 w-fit">
                        <div className="relative w-[7.5em] h-[7.5em] rounded-[5px] overflow-hidden flex-shrink-0">
                          {event?.bannerImage && (
                            <CldImage
                            key={event?.id ?? ""}
                              src={event?.bannerImage}
                              alt={event.title}
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              className="object-cover"
                            />
                          )}
                        </div>
                        <div className="my-auto">
                          <h3 className="text-[#FF1400] font-bold text-sm md:text-base lg:text-[1.4em] max-w-[10em] md:leading-8">
                            {event?.title}
                          </h3>
                          <p className="py-2">{event?.location ?? ""}</p>
                          <p>{formatToHumanReadableTime(event?.startTime ?? "")}</p>
                        </div>
                      </div>
      
                      {/* Center */}
                      <div className="hidden xl:flex justify-center">
                        <p className="text-white text-[1.1em]">
                          {formatToHumanReadableDate(event?.startDate)}
                        </p>
                      </div>
      
                      {/* Right */}
                      <div className="flex justify-center gap-4 md:grid grid-cols-2 max-sm:flex-col sm:flex-col">
                        <a
                          href={`/event-viewing/${event?.slug ?? ""}`}
                          className="lg:w-fit border border-gray-700 text-gray-400 hover:text-white rounded-[5px] text-xs md:text-sm py-4 px-8 flex justify-center"
                        >
                          Read more <FiArrowRight className="h-4 w-4 ml-1 mt-[0.2em]" />
                        </a>
                          
                          
                        <a
                          href={new Date(event?.startDate) < new Date() ? "#up-next" : `/checkout/${event?.slug ?? ""}`}
                          className="bg-[#ff4d2a] lg:w-fit hover:bg-[#ff4d2a]/90 text-white font-medium rounded-[5px] text-xs md:text-sm py-4 px-8 flex justify-center"
                        >
                           {(new Date(event?.startDate) < new Date()) ? "ENDED" : <><span className="flex items-center">GET TICKET <FiArrowRight className="h-4 w-4 ml-1 transform rotate-45" /></span></>}
                          
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            }
          </section>

      <TakeYourEventManagementSection />

       {showCookieBanner && (
        <div className="fixed grid max-md:bottom-2 bottom-[2.3em] left-0 w-full items-center z-50 shadow-lg">
          <div className="flex max-md:flex-col gap-6 justify-between max-md:w-[96%] w-[80%] m-auto h-fit bg-[#131313] border border-gray-300/50 text-white px-8 py-7 rounded-lg max-md:px-4 max-md:py-6">
            <p className="my-auto max-md:text-sm">
              We use cookies to improve your experience on our site. By
              continuing, you accept our{" "}
              <a
                href="/legal/cookies-policy"
                className="underline text-blue-400 hover:text-blue-300"
              >
                cookie policy
              </a>.
            </p>

            <div className="flex max-md:flex-col gap-5 w-fit max-md:w-full">
              <button
                onClick={acceptCookies}
                className="bg-primary text-white px-6 py-2 rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      
      
    </main>
  );
}
