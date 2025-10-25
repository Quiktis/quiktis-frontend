"use client";
import React from "react";
import { useEffect } from "react";
import Image from "next/image";
import { CldImage } from "next-cloudinary";
import Button from "@/components/ui/Button";
import { IoTicketSharp } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { RiFileCopy2Fill } from "react-icons/ri";
import Link from "next/link";
import { useState } from "react";
import UpcomingEvents from "@/components/UpcomingEvents";
import { usePathname } from "next/navigation";
import { BsPlus } from "react-icons/bs";
import { useGetEventById } from "@/ApiServices/queries";
import {
  formatToHumanReadableDate,
  formatToHumanReadableTime,
} from "@/app/utils/utilities";

interface Ticket {
  id?: string | null;
  createdAt?: string;       
  name: string
  price: number
  description?: string
  quantity: number
  soldCount?: number
  isActive?: boolean
  saleStartDate?: string | null
  saleEndDate?: string | null
}

// Helper function to render text with line breaks
const renderTextWithLineBreaks = (
  text: string | null | undefined
): React.ReactNode => {
  if (!text) return "";

  return text.split("\n").map((line, index) => (
    <React.Fragment key={index}>
      {line}
      {index < text.split("\n").length - 1 && <br />}
    </React.Fragment>
  ));
};

export default function EventViewingPage() {



  const pathname = usePathname();


  const eventId = pathname?.split("/event-viewing/")[1];
  const [copied, setCopied] = useState(false);

  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const {
        data: event,
        isLoading: loadingEvent,
        isError: errorEvent,
      } = useGetEventById(eventId);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(
        `${process.env.NEXT_PUBLIC_CURRENT_URL}/event-viewing/${eventId}`
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      //console.error("Failed to copy!", err);
    }
  };

  const shareUrl = `${process.env.NEXT_PUBLIC_CURRENT_URL}/events`;
  const redirectUri = `${process.env.NEXT_PUBLIC_CURRENT_URL}/events`;

  const socials = [
    {
      icon: <FaFacebook size={24} />,
      href: `https://www.facebook.com/dialog/share?app_id=1381213999628071&display=popup&href=${shareUrl}&redirect_uri=${redirectUri}`,
    },
    { icon: <FaInstagram size={24} />, href: "" },
    { icon: <FaTwitter size={24} />, href: "" },
    { icon: <FaLinkedin size={24} />, href: "" },
    {
      icon: <FaLink size={24} />,
      href: `${process.env.NEXT_PUBLIC_CURRENT_URL}/event-viewing/${eventId}`,
    },
  ];

 

  const handleShare = async () => {
    
    if (navigator.share) {
      try {
        await navigator.share({
         
          url: `${process.env.NEXT_PUBLIC_CURRENT_URL}/event-viewing/${eventId}`,
        });
        console.log("Event shared successfully!");
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      // fallback for unsupported browsers
      await navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_CURRENT_URL}/event-viewing/${eventId}`);
      alert("Link copied to clipboard!");
    }
  };

  const bannerImageSrc = event?.bannerImage || "";

  return (
    <div className="w-full space-y-5 lg:w-[90%] mx-auto">
      <section className="flex flex-col md:grid grid-cols-1 md:h-[20em] lg:h-[30em] h-fit lg:gap-11 gap-6">
        <div className="relative w-full h-full max-md:h-[36vh]">
          {/* Placeholder while loading or on error */}
          {(!isImageLoaded || hasError) && (
            <div
              className={`absolute inset-0 bg-[#1f1f1f] ${
                !hasError ? "animate-pulse" : ""
              } rounded-[30px] z-0`}
            />
          )}
          {bannerImageSrc && !hasError && (
            <CldImage
              src={bannerImageSrc}
              alt="Banner Image"
              fill
              objectFit="cover"
              className="rounded-[30px]"
              onLoad={() => setIsImageLoaded(true)}
              onError={() => setHasError(true)}
              unoptimized
              priority
            />
          )}
        </div>
      </section>
      <section>
        <div className="w-full flex flex-wrap md:flex-nowrap md:gap-[4em] h-auto mb-6">
          <div className="h-full text-center md:text-left">
            {event?.startDate && new Date(event.startDate) < new Date() && (
  <p className="px-3 py-1 text-sm bg-primary text-white rounded-md w-fit">
    Event ended
  </p>
)}
            <h1 className="text-[32px] max-md:text-2xl md:text-[40px] font-primary font-bold whitespace-normal">
              {event?.title || "Event Title"}
            </h1>
            
            <p className="text-gray-500 font-secondary text-sm md:text-base text-left">
              Organized by {event?.organiser?.name || "Event Organiser"}
            </p>
          </div>

          {event?.startDate && !(new Date(event?.startDate)) ?<div className="max-md:hidden grid h-full w-full md:w-fit mt-4 md:mt-0 md:ml-auto">
            <Link href={`/checkout/${eventId}`}>
              <span className="text-[#FF4D2A] max-sm:hidden text-[1em] sm:text-[1.2em] md:text-[1.3em] font-semibold flex items-center justify-center gap-2 cursor-pointer hover:no-underline">
                Get Ticket{" "}
                {event?.tickets && event.tickets.length > 0
                  ? Math.min(...event.tickets.map((ticket: Ticket) => ticket.price))
                  : 0}{" "}
                <IoTicketSharp size={20} />
              </span>
            </Link>
          </div>: null}
        </div> 
      </section>

      <section className="relative">
        <div className="absolute max-md:w-full w-[73%] h-[65em] top-[-12em] radial-gradient blur-3xl opacity-50"></div>
        <div className="relative flex flex-col gap-3 lg:grid grid-cols-[65%_32%] h-fit w-full lg:gap-11 mb-10">
          <div className="h-fit w-full max-sm:p-4 max-md:p-8 md:px-16 md:py-9 glass-bg shadow-xl shadow-white md:rounded-[40px] rounded-3xl font-secondary">
            {event?.description && (
              <div>
                <h1 className="max-md:text-xl text-2xl lg:text-3xl mb-1 font-primary text-primary font-bold max-w-[100%] lg:max-w-[80%]">
                  DESCRIPTION
                </h1>
                <p className="">{event?.description || ""}</p>
              </div>
            )}

            <h1 className="mt-6 max-md:text-xl text-2xl lg:text-3xl font-primary text-primary font-bold max-w-[100%] lg:max-w-[80%]">
              DATE & TIME
            </h1>
            <div className="flex gap-3 w-full max-sm:flex-wrap sm:flex-wrap">
              <p className="text-gray-300">
                {event?.startDate
                  ? formatToHumanReadableDate(event.startDate)
                  : ""}
                , {event?.startTime || ""}
              </p>
              <button className="text-gray-300 mr-0 max-sm:ml-0 sm:ml-0  md:ml-auto flex  gap-1 text-primary">
                <BsPlus size={24} className="m-auto" /> Add to Calender
              </button>
            </div>

            {/*event?.tags && (
              <>
                <h1 className="mt-6 max-md:text-xl text-2xl lg:text-[40px] font-primary text-primary font-bold max-w-[100%] lg:max-w-[80%]">
                  TAGS
                </h1>
                <div className="flex flex-wrap gap-2">
                  {event?.tags?.map((item, index) => (
                    <Link
                      key={index}
                      href="#"
                      className="bg-[#ffffff18] max-md:text-sm px-2 py-2 md:px-4 md:py-3 shadow-2xl rounded-xl mb-1 hover:border-2 hover:border-white border-2 border-[transparent]"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </>
            )*/}

            <h1 className="mt-6 max-md:text-xl text-2xl lg:3xl font-primary text-primary font-bold max-w-[100%] lg:max-w-[80%]">
              TICKETS
            </h1>
            <div>
              {event?.tickets && event?.tickets.map((item: any, index: number) => (
                <p key={index}>
                  <span className="font-medium">{item.name}</span> -{" "}
                  {item.price === 0 ? "Free" : `₦${item.price}`}
                </p>
              ))}
            </div>

            <h1 className="mt-6 max-md:text-[1.1em] text-[1.5em] lg:text-[25px] font-primary font-medium max-w-[100%] lg:max-w-[80%]">
              Share with loved ones
            </h1>
            <div className="max-md:flex-col flex gap-4 flex-wrap">
              <div>
                <span className="mt-4 flex gap-4 text-primary">
                  {socials.map((item, index) => (
                    <Link key={index} href="#" className="hover:text-white">
                      {item.icon}
                    </Link>
                  ))}
                </span>
                <p className="mt-6 flex gap-3">
                  <FaLocationDot
                    size={20}
                    className="my-auto text-primary max-md:text-sm"
                  />{" "}
                  {event?.location || ""}
                </p>
              </div>

              <Button
                onClick={handleCopy}
                className="mr-0 md:ml-auto mb-3 max-md:mt-3 mt-auto  text-[16px] max-md:w-full w-[150px] h-fit flex items-center justify-center py-3 px-2 drop-shadow-custom-red bg-primary "
              >
                Copy Link
              </Button>
            </div>
          </div>
          <div className="mt-3 lg:mt-0 max-sm:flex grid md:grid-cols-2 lg:grid-cols-1 max-sm:flex-col lg:grid w-full grid-rows-1 lg:grid-rows-2 lg:gap-11 gap-6">
            <div className="relative w-full h-[16em] lg:h-full">
              <Image
                src={"/map.png"}
                alt="party 1"
                fill
                objectFit="cover"
                className="rounded-[30px]"
                objectPosition="50% 80%"
                unoptimized
              />
            </div>
            <div className="relative w-full max-md:h-[100%] lg:h-fit bg-white rounded-[30px] px-8 py-7 text-black flex flex-col gap-2 ">
              <div className="space-y-4 my-auto">
                <h2 className="text-[1.3em] font-semibold">Locate</h2>
                <p className=" text-gray-800">{event?.location || ""}</p>
                <button className="mt-1 w-fit text-primary flex gap-2">
                  <RiFileCopy2Fill size={20} className="my-auto" /> Copy
                  Location
                </button>
                <Button
                  onClick={() => {}}
                  className="font-secondary mr-0 ml-auto mb-0 mt-auto  text-[16px] w-full h-fit flex items-center justify-center py-3 px-2 bg-primary "
                >
                  Open Map
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {event?.startDate && new Date(event.startDate) > new Date() ? (
  <section className="w-full max-sm:flex flex-col grid grid-cols-2 gap-[1.8em] mt-3 relative z-10">
    <Link href={`/checkout/${eventId}`}>
      <div className="w-full">
        <button className="font-secondary max-md:text-lg text-xl w-full h-fit flex items-center justify-center gap-2 py-4 px-2 bg-primary shadow-xl shadow-[#eeab8536] cursor-pointer rounded-md hover:opacity-90 transition-all">
          Buy with Card / Transfer <IoTicketSharp size={20} />
        </button>
      </div>
    </Link>
    <Link href={`/checkout/${eventId}`}>
      <div className="w-full">
        <button className="font-secondary max-md:text-lg text-xl w-full h-fit flex items-center justify-center gap-2 py-4 px-2 bg-gradient-to-r from-blue-500 to-purple-600 shadow-xl shadow-[#85d5ee36] cursor-pointer rounded-md hover:opacity-90 transition-all">
          Buy with Crypto
          <Image
            src="/icons/crypto.png"
            alt="Crypto icon"
            width={20}
            height={20}
          />
        </button>
      </div>
    </Link>
  </section>
) : null}

      <UpcomingEvents />
    </div>
  );
}
