"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { FaLocationDot } from "react-icons/fa6";
import { RiFileCopy2Fill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useUser } from "@/app/context/UserContext";
import { EventData } from "@/constant/customTypes";
import { IoTicket } from "react-icons/io5";
import styles from "./page.module.css";

const tags = [
  { tag: "Syracuse Events" },
  { tag: "Syracuse Events" },
  { tag: "Things To Do in Syracuse" },
  { tag: "#tech" },
  { tag: "#trending" },
  { tag: "#thingsToDo" },
];

const socials = [
  { icon: <FaFacebook size={24} />, href: "" },
  { icon: <FaInstagram size={24} />, href: "" },
  { icon: <FaTwitter size={24} />, href: "" },
  { icon: <FaLinkedin size={24} />, href: "" },
];

const attendees = [
  "/user1.jpg",
  "/user2.png",
  "/user3.png",
  "/user4.png",
  "/user5.jpg",
];

function formatDateToText(dateString: string): string {
  const [day, month, year] = dateString.split("/").map(Number);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const fullYear = 2000 + year;
  const ordinalSuffix = (n: number) => {
    if (n > 3 && n < 21) return "th";
    switch (n % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };
  return `${day}${ordinalSuffix(day)} ${monthNames[month - 1]} ${fullYear}`;
}

export default function ManageEventViewingPage() {
  const router = useRouter();
  const { user } = useUser();

  const eventData = {
    title: "Event Title ",
    description: "Your event description here.",
    startDate: "01/01/24",
    endDate: "01/02/24",
    startTime: "10:00 AM",
    endTime: "12:00 PM",
    eventType: "Conference",
    accessType: "Public",
    bannerImage: "/banner.png",
    location: "Event Location",
    categoryId: "music-123",
    tickets: [
      {
        name: "General Admission",
        price: 0,
        quantity: 100,
        description: "Free entry for all",
      },
    ],
  };



  return (
    <div className="flex flex-col gap-9 w-full mt-4">
      <section className="flex flex-col md:grid grid-cols-1 md:h-[20em] lg:h-[30em] h-[40em] lg:gap-11 gap-6">
        <div className="relative w-full h-full">
          <Image
            src="/party1.png"
            alt="Event header"
            layout="fill"
            objectFit="cover"
            className="rounded-[30px]"
            unoptimized
          />
        </div>
      </section>

      <section>
        <div className="w-full flex flex-wrap md:gap-[4em] h-max justify-between">
          <div className="h-full max-sm:w-1/2">
            <h1 className="text-[40px] max-sm:text-[1.1rem] font-primary font-bold max-w-full w-fit">
              {eventData.title}
            </h1>
            <p className="text-gray-500 font-secondary max-sm:text-sm">
              By Mention Creator {user.name}
            </p>
          </div>

          <div className="h-full my-auto md:w-fit max-sm:w-1/2">
            <div className="flex flex-col items-center justify-center text-[#FF4D2A]">
              <div className="flex items-center gap-2 font-bold text-[1.6rem] max-sm:text-[1rem]">
                <span>Get Ticket $70</span>
                <IoTicket className="max-sm:w-5 max-sm:h-5 w-7 h-7" />
              </div>

              <span className="text-[1.1rem] font-medium text-center w-full max-sm:text-sm">
                53 tickets sold
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="relative flex flex-col gap-3 lg:grid grid-cols-[65%_32%] lg:gap-11">
          <div
            className={`
              relative z-10
              h-fit w-fit
              max-md:px-4 md:px-9 lg:px-16
              py-3 lg:py-9
              shadow-xl
              ${styles.glassOverride}
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
                <p className="text-gray-200 text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur. Odio praesent
                  elementum vivamus aliquet est. Libero diam quisque elementum
                  pharetra risus egestas at egestas. Vestibulum venenatis
                  dignissim viverra est amet porta amet ipsum viverra. Lectus
                  morbi egestas viverra sit blandit nulla odio semper. Quam
                  hendrerit venenatis arcu urna cras tempus maecenas. Sed diam
                  quam et volutpat enim mattis etiam diam pharetra. Gravida
                  viverra ut elementum nunc urna donec. Purus a sit senectus
                  elit.
                </p>
              </div>

              <div>
                <h2 className="text-[#FF4D2A] text-3xl font-bold mb-3">
                  DATE &amp; TIME
                </h2>
                <p className="text-gray-300 text-sm">
                  Saturday, June 22 · 8am – 6pm WAT
                </p>
              </div>

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
                <p className="text-gray-200 text-xl font-medium">
                  Share with loved ones
                </p>
                <div className="flex gap-4">
                  {socials.map((s, i) => (
                    <Link
                      key={i}
                      href={s.href}
                      className="text-[#FF4D2A] hover:text-[#FF4D2A]/80 transition-colors">
                      {s.icon}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <FaLocationDot size={18} className="text-[#FF4D2A]" />
                <span>2118 Thornridge Cir, Syracuse, Connecticut 35624</span>
              </div>
            </div>
          </div>

          <div className="mt-3 lg:mt-0 flex max-sm:flex-col lg:grid h-full w-full grid-rows-[63.5%_31%] lg:gap-11 gap-6">
            <div className="relative w-full h-[16em] lg:h-full">
              <Image
                src="/map.png"
                alt="party 1"
                layout="fill"
                objectFit="cover"
                className="rounded-[30px]"
                objectPosition="50% 80%"
                unoptimized
              />
            </div>
            <div className="relative w-full h-[16em] lg:h-full bg-white rounded-[30px] px-8 py-7 text-black flex flex-col gap-2">
              <h2 className="text-[1.3em] font-semibold">Locate</h2>
              <p className="text-gray-800">{eventData.location}</p>
              <button className="mt-1 w-fit text-primary flex gap-2">
                <RiFileCopy2Fill size={20} className="my-auto" /> Copy Location
              </button>
              <Button
                onClick={() => {}}
                className="font-secondary mr-0 ml-auto mb-0 mt-auto text-[16px] w-full h-fit flex items-center justify-center py-3 px-2 bg-primary">
                Open Map
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="flex justify-between items-center w-full max-sm:px-1 max-sm:gap-1">
          <div className="flex items-center cursor-pointer max-sm:gap-1">
            <div className="flex -space-x-3">
              {attendees.map((src, i) => (
                <Image
                  key={i}
                  src={src}
                  alt={`Attendee ${i + 1}`}
                  width={30} 
                  height={30}
                  className="rounded-full ring-2 ring-black transition-transform duration-200 hover:-translate-y-1 max-sm:w-[28px] max-sm:h-[28px]"
                  unoptimized
                />
              ))}
            </div>
            <Link
              href="/attendees"
              className="ml-2 text-base text-white hover:text-gray-300 max-sm:text-xs max-sm:ml-1">
              View all attendees
            </Link>
          </div>

          <Button className="bg-red-600 hover:bg-red-700 text-white flex items-center gap-2 px-3 py-1 max-sm:px-2 max-sm:py-1 max-sm:text-xs max-sm:gap-1">
            <span>Cancel event</span>
            <MdDelete size={14} className="max-sm:w-3 max-sm:h-3" />
          </Button>
        </div>
      </section>
    </div>
  );
}
