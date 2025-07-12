"use client";
import React from "react";
import { useEffect } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { IoTicketSharp } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { RiFileCopy2Fill } from "react-icons/ri";
import Link from "next/link";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import manageStyles from "@/app/manage-event-viewing/page.module.css";
import UpcomingEvents from "@/components/UpcomingEvents";
import { useUser } from "@/app/context/UserContext";
import useAxios from "@/app/hooks/useAxios";
import { usePathname } from "next/navigation";
import { Event } from "@/constant/customTypes";
import {
  formatToHumanReadableDate,
  formatToHumanReadableTime,
} from "@/app/utils/utilities";

const tags = [
  { tag: "Syracuse Events" },
  { tag: "Syracuse Events" },
  { tag: "Things To Do in Syracuse" },
  { tag: "#tech" },
  { tag: "#trending" },
  { tag: "#thingsToDo" },
];

// Helper function to render text with line breaks
const renderTextWithLineBreaks = (text) => {
  if (!text) return "";
  
  return text.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      {index < text.split('\n').length - 1 && <br />}
    </React.Fragment>
  ));
};

export default function EventViewingPage() {
  const [email, setEmail] = useState("");
  const icons = Array(5).fill(<FaStar className="text-yellow-500" />);
  const [rating, setRating] = useState(0);
  const { user } = useUser();
  const { sendRequest } = useAxios();
  const pathname = usePathname();
  const [event, setEvent] = useState<Event>();

  const eventId = pathname?.split("/event-viewing/")[1];
  const [copied, setCopied] = useState(false);

  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(
        `${process.env.NEXT_PUBLIC_CURRENT_URL}/event-viewing/${eventId}`
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error("Failed to copy!", err);
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

  useEffect(() => {
    const fetchEvents = async () => {
      console.log(eventId);
      try {
        const response = await sendRequest({
          url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/events/${eventId}`,
          method: "GET",
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        });

        console.log("Events response:", response);

        if (response.status === "success") {
          console.log("Event data:", response.data.event);
          setEvent(response.data.event);
        } else {
          console.error("Failed to fetch event details:", response.message);
        }
      } catch (error) {
        console.error("Error fetching event details", error);
      }
    };

    fetchEvents();
  }, []);

  const bannerImageSrc = event?.bannerImage || "";

  return (
    <div className="w-full space-y-5 lg:w-[90%] mx-auto">
      <section className="flex flex-col md:grid grid-cols-1 md:h-[20em] lg:h-[30em] h-[40em] lg:gap-11 gap-6">
        <div className="relative w-full h-full">
          {/* Placeholder while loading or on error */}
          {(!isImageLoaded || hasError) && (
            <div
              className={`absolute inset-0 bg-[#1f1f1f] ${
                !hasError ? "animate-pulse" : ""
              } rounded-[30px] z-0`}
            />
          )}
          {bannerImageSrc && !hasError && (
            <Image
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
        <div className="w-full flex flex-wrap md:flex-nowrap md:gap-[4em] h-auto">
          <div className="h-full text-center md:text-left">
            <h1 className="text-[32px] sm:text-[36px] md:text-[40px] font-primary font-bold whitespace-normal">
              {event?.title || "Event Title"}
            </h1>
            <p className="text-gray-500 font-secondary text-sm md:text-base">
              Organized by {event?.organiser?.name || "Event Organiser"}
            </p>
          </div>

          <div className="grid h-full w-full md:w-fit mt-4 md:mt-0 md:ml-auto">
            <Link href={`/checkout/${eventId}`}>
              <span className="text-[#FF4D2A] max-sm:hidden text-[1em] sm:text-[1.2em] md:text-[1.3em] font-semibold flex items-center justify-center gap-2 cursor-pointer hover:no-underline">
                Get Ticket {event?.tickets?.[0]?.price ?? ""}{" "}
                <IoTicketSharp size={20} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="relative ">
        <div className="absolute w-[73%] h-[65em] top-[-12em] radial-gradient blur-3xl opacity-50"></div>

        <div className="relative flex flex-col gap-3 lg:grid grid-cols-[65%_32%] h-[max-content] w-full lg:gap-11">
          <div
            className={`
              max-sm:mb-[1.5em]
              relative z-10
              h-fit w-fit
              max-md:px-4 md:px-9 lg:px-16
              py-3 lg:py-9
              shadow-xl
              ${manageStyles.glassOverride}
            `}>
            <div
              className="
                absolute w-[500px] h-[500px]
                rounded-full
                bg-[#FF4D2A]/35
                filter blur-[100px]
                top-1/2 left-1/2
                transform -translate-x-1/2 -translate-y-1/2
                pointer-events-none
                
              "
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                borderRadius: "24px",
                borderTop: "1px solid rgba(255,255,255,0.8)",
                borderLeft: "1px solid rgba(255,255,255,0.8)",
                borderRight: "1px solid rgba(255,255,255,0.8)",
                borderBottom: "none",
                maskImage:
                  "linear-gradient(to bottom, white 0%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, white 0%, transparent 100%)",
              }}
            />

            <div className="relative space-y-8">
              <div>
                <h2 className="text-[#FF4D2A] text-3xl font-bold mb-3">
                  DESCRIPTION
                </h2>
                <p className="text-white text-sm leading-relaxed whitespace-pre-wrap">
                  {renderTextWithLineBreaks(event?.description || "")}
                </p>
              </div>

              <div>
                <h2 className="text-[#FF4D2A] text-3xl font-bold mb-3">
                  DATE &amp; TIME
                </h2>

                <div className="flex flex-wrap gap-x-6 gap-y-3 items-center text-white text-sm">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/icons/date.png"
                      alt="Calendar icon"
                      width={18}
                      height={18}
                    />
                    <span>
                      {event && formatToHumanReadableDate(event?.startDate)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MdOutlineAccessTimeFilled size={18} />
                    <span>
                      {event &&
                        `${formatToHumanReadableTime(
                          event.startTime
                        )} - ${formatToHumanReadableTime(event.startTime)}`}
                    </span>
                  </div>
                </div>
              </div>

              {/* TAGS */}
              <div>
                <h2 className="text-[#FF4D2A] text-3xl font-bold mb-3">TAGS</h2>
                <div className="flex flex-wrap gap-1 text-sm">
                  {tags.map((item, idx) => (
                    <Link
                      key={idx}
                      href="#"
                      className="
                        px-2 py-1
                        bg-white/10 backdrop-blur-sm
                        rounded-xl mb-1
                        hover:bg-white/20 transition
                      ">
                      <span className="text-body-txt">{item.tag}</span>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-white text-xl font-medium">
                  Share with loved ones
                </p>
                <div className="flex gap-4">
                  {/*socials.map((s, i) => (
                    <Link
                      key={i}
                      href={s.href}
                      className="text-[#FF4D2A] hover:text-[#FF4D2A]/80 transition-colors">
                      {s.icon}
                    </Link>
                  ))*/}
                  <button
                    onClick={handleCopy}
                    className="bg-primary flex gap-2 text-white px-4 py-3 rounded-md hover:bg-opacity-80 transition">
                    <FaLink className="my-auto" />{" "}
                    {copied ? "Copied!" : "Copy Link"}
                  </button>
                </div>
              </div>

              {/* ADDRESS */}
              <div className="flex items-center gap-2 text-white text-sm">
                <FaLocationDot size={18} className="text-[#FF4D2A]" />
                <span>{event?.location ?? ""}</span>
              </div>
            </div>
          </div>

          <div className="-mt-2 flex flex-col gap-7">
            <div className="relative w-full h-[27em] rounded-[30px] overflow-hidden">
              <Image
                src="/map.png"
                alt="Map view"
                fill
                objectFit="cover"
                objectPosition="50% 80%"
                unoptimized
              />
            </div>
            <div className="bg-white rounded-[30px] px-8 py-6 text-black flex flex-col gap-3">
              <h2 className="text-[1.3em] font-semibold">Locate</h2>
              <p className="text-black">{event?.location ?? ""}</p>
              <button className="inline-flex items-center text-primary gap-2">
                <RiFileCopy2Fill size={20} /> Copy Location
              </button>

              <Button
                onClick={() => {}}
                className="mt-auto text-[16px] w-full py-3 px-4 bg-primary font-secondary">
                Open Map
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="max-sm:flex flex-col grid grid-cols-2 gap-[1.8em] mt-3 relative z-10">
        <Link href={`/checkout/${eventId}`}>
          <div className="w-full">
            <button className="font-secondary text-[1.2em] w-full h-fit flex items-center justify-center gap-2 py-4 px-2 bg-primary shadow-xl shadow-[#eeab8536] cursor-pointer rounded-md hover:opacity-90 transition-all">
              Buy with Card <IoTicketSharp size={20} />
            </button>
          </div>
        </Link>
        <Link href={`/checkout/${eventId}`}>
          <div className="w-full">
            <button className="font-secondary text-[1.2em] w-full h-fit flex items-center justify-center gap-2 py-4 px-2 bg-gradient-to-r from-blue-500 to-purple-600 shadow-xl shadow-[#85d5ee36] cursor-pointer rounded-md hover:opacity-90 transition-all">
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

      <UpcomingEvents />
    </div>
  );
}
