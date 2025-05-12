"use client";

import React, { useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { IoTicketSharp } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { RiFileCopy2Fill } from "react-icons/ri";
import NewEventCard from "@/components/search/NewEventCard";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import manageStyles from "@/app/manage-event-viewing/page.module.css";

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

const relatedEvents = [
  {
    title: "Africa's fashion industry is growing to meet global demand.",
    subtitle: "Africa Talks",
    description:
      "Lorem ipsum dolor sit amet consectetur. Massa tempor sed purus nisi facilisis tortor pretium nisi. Dolor turpis varius aliquam euismod cras. Ultrices purus sed et morbi neque iaculis nam...",
    date: "May 23, 2024",
    location: "South Kenyatta",
    price: "$20",
    image: "africa.png",
    getTicketUrl: "/checkout",
    readMoreUrl: "/manage-event-viewing",
  },
  {
    title: "Africa's fashion industry is growing to meet global demand.",
    subtitle: "Africa Talks",
    description:
      "Lorem ipsum dolor sit amet consectetur. Massa tempor sed purus nisi facilisis tortor pretium nisi. Dolor turpis varius aliquam euismod cras. Ultrices purus sed et morbi neque iaculis nam...",
    date: "May 23, 2024",
    location: "South Kenyatta",
    price: "$20",
    image: "dj.png",
    getTicketUrl: "/checkout",
    readMoreUrl: "/manage-event-viewing",
  },
  {
    title: "Africa's fashion industry is growing to meet global demand.",
    subtitle: "Africa Talks",
    description:
      "Lorem ipsum dolor sit amet consectetur. Massa tempor sed purus nisi facilisis tortor pretium nisi. Dolor turpis varius aliquam euismod cras. Ultrices purus sed et morbi neque iaculis nam...",
    date: "May 23, 2024",
    location: "South Kenyatta",
    price: "$20",
    image: "camera.png",
    getTicketUrl: "/checkout",
    readMoreUrl: "/manage-event-viewing",
  },
  {
    title: "Africa's fashion industry is growing to meet global demand.",
    subtitle: "Africa Talks",
    description:
      "Lorem ipsum dolor sit amet consectetur. Massa tempor sed purus nisi facilisis tortor pretium nisi. Dolor turpis varius aliquam euismod cras. Ultrices purus sed et morbi neque iaculis nam...",
    date: "May 23, 2024",
    location: "South Kenyatta",
    price: "$20",
    image: "party1.png",
    getTicketUrl: "/checkout",
    readMoreUrl: "/manage-event-viewing",
  },
  {
    title: "Africa's fashion industry is growing to meet global demand.",
    subtitle: "Africa Talks",
    description:
      "Lorem ipsum dolor sit amet consectetur. Massa tempor sed purus nisi facilisis tortor pretium nisi. Dolor turpis varius aliquam euismod cras. Ultrices purus sed et morbi neque iaculis nam...",
    date: "May 23, 2024",
    location: "South Kenyatta",
    price: "$20",
    image: "conf.png",
    getTicketUrl: "/checkout",
    readMoreUrl: "/manage-event-viewing",
  },
  {
    title: "Africa's fashion industry is growing to meet global demand.",
    subtitle: "Africa Talks",
    description:
      "Lorem ipsum dolor sit amet consectetur. Massa tempor sed purus nisi facilisis tortor pretium nisi. Dolor turpis varius aliquam euismod cras. Ultrices purus sed et morbi neque iaculis nam...",
    date: "May 23, 2024",
    location: "South Kenyatta",
    price: "$20",
    image: "dance.png",
    getTicketUrl: "/checkout",
    readMoreUrl: "/manage-event-viewing",
  },
  {
    title: "Africa's fashion industry is growing to meet global demand.",
    subtitle: "Africa Talks",
    description:
      "Lorem ipsum dolor sit amet consectetur. Massa tempor sed purus nisi facilisis tortor pretium nisi. Dolor turpis varius aliquam euismod cras. Ultrices purus sed et morbi neque iaculis nam...",
    date: "May 23, 2024",
    location: "South Kenyatta",
    price: "$20",
    image: "wed.png",
    getTicketUrl: "/checkout",
    readMoreUrl: "/manage-event-viewing",
  },
  {
    title: "Africa's fashion industry is growing to meet global demand.",
    subtitle: "Africa Talks",
    description:
      "Lorem ipsum dolor sit amet consectetur. Massa tempor sed purus nisi facilisis tortor pretium nisi. Dolor turpis varius aliquam euismod cras. Ultrices purus sed et morbi neque iaculis nam...",
    date: "May 23, 2024",
    location: "South Kenyatta",
    price: "$20",
    image: "show.png",
    getTicketUrl: "/checkout",
    readMoreUrl: "/manage-event-viewing",
  },
];

export const PaidEventViewingComponent = () => {
  const [email, setEmail] = useState("");
  const icons = Array(5).fill(<FaStar className="text-yellow-500" />);
  const [rating, setRating] = useState(0);

  return (
    <>
      <section className="flex flex-col md:grid grid-cols-1 md:h-[20em] lg:h-[30em] h-[40em] lg:gap-11 gap-6">
        <div className="relative w-full h-full">
          <Image
            src={"/party1.png"}
            alt="Event header"
            layout="fill"
            objectFit="cover"
            className="rounded-[30px]"
            unoptimized
          />
        </div>
      </section>

      <section>
        <div className="w-full flex max-sm:flex-wrap md:gap-[4em] h-[max-content]">
          <div className="h-full">
            <h1 className="text-[40px] font-primary font-bold whitespace-nowrap">
              Event Title Lorem ipsum Dolor Sit Smet
            </h1>
            <p className="text-gray-500 font-secondary">By mention Creator</p>
          </div>
          <div className="grid h-full mr-0 md:ml-auto mt-4 md:mt-0 md:w-fit w-full">
            <Link
              href="/concert-ticket"
              className="
    inline-flex 
    items-center 
    gap-2 
    bg-[#191919] 
    text-[#FF4D2A] 
    font-semibold 
    px-6 
    py-3 
    rounded-[15px] 
    shadow-lg 

    /* enable transforms & smooth transition */
    transform 
    transition-transform 
    duration-200 
    ease-out

    /* on hover: fade + lift */
    hover:opacity-90 
    hover:-translate-y-1
  ">
              View Ticket <IoTicketSharp size={20} className="text-white" />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="absolute w-[73%] h-[65em] top-[-12em] radial-gradient blur-3xl opacity-50"></div>
        <div className="relative flex flex-col gap-3 lg:grid grid-cols-[65%_32%] h-[max-content] w-full lg:gap-11">
          <div
            className={`
              relative z-10
              h-fit w-fit
              max-md:px-4 md:px-9 lg:px-16
              py-3 lg:py-9
              shadow-xl
              ${manageStyles.glassOverride}
            `}>
            <div className="absolute w-[500px] h-[500px] rounded-full bg-[#FF4D2A]/35 filter blur-[100px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                borderRadius: "24px",
                borderTop: "1px solid rgba(255,255,255,0.8)",
                borderLeft: "1px solid rgba(255,255,255,0.8)",
                borderRight: "1px solid rgba(255,255,255,0.8)",
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
                <p className="text-white text-sm leading-relaxed">
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
                <div className="flex flex-wrap gap-x-6 gap-y-3 items-center text-white text-sm">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/icons/date.png"
                      alt="Calendar icon"
                      width={18}
                      height={18}
                    />
                    <span>Friday, June 27th 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MdOutlineAccessTimeFilled size={18} />
                    <span>9:00 AM - 4:00 PM UTC</span>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-[#FF4D2A] text-3xl font-bold mb-3">TAGS</h2>
                <div className="flex flex-wrap gap-1 text-sm">
                  {tags.map((item, idx) => (
                    <Link
                      key={idx}
                      href="#"
                      className="
                        px-2 py-1 bg-white/10 backdrop-blur-sm rounded-xl mb-1
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

              <div className="flex items-center gap-2 text-white text-sm">
                <FaLocationDot size={18} className="text-[#FF4D2A]" />
                <span>2118 Thornridge Cir, Syracuse, Connecticut 35624</span>
              </div>
            </div>
          </div>

          <div className="-mt-2 flex flex-col gap-7">
            <div className="relative w-full h-[25em] rounded-[30px] overflow-hidden">
              <Image
                src="/map.png"
                alt="Map view"
                layout="fill"
                objectFit="cover"
                objectPosition="50% 80%"
                unoptimized
              />
            </div>
            <div className="bg-white rounded-[30px] px-8 py-6 text-black flex flex-col gap-3">
              <h2 className="text-[1.3em] font-semibold">Locate</h2>
              <p className="text-black">Podium, Lagos</p>
              <button className="inline-flex items-center text-primary gap-2">
                <RiFileCopy2Fill size={20} /> Copy Location
              </button>
              <Button className="mt-auto text-[16px] w-full py-3 px-4 bg-primary font-secondary">
                Open Map
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="max-sm:flex flex-col grid grid-cols-2 gap-6 mt-3 relative z-10">
        <Link href="/checkout">
          <button className="font-secondary text-[1.2em] w-full py-4 bg-primary shadow-xl rounded-md hover:opacity-90 transition-all flex items-center justify-center gap-2">
            Buy with Card <IoTicketSharp size={20} />
          </button>
        </Link>
        <Link href="/checkout">
          <button className="font-secondary text-[1.2em] w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 shadow-xl rounded-md hover:opacity-90 transition-all flex items-center justify-center gap-2">
            Buy with Crypto
            <Image
              src="/icons/crypto.png"
              alt="Crypto icon"
              width={20}
              height={20}
            />
          </button>
        </Link>
      </section>

      <section className="mt-16">
        <h1 className="text-3xl font-bold mb-6">Upcoming Events</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {relatedEvents.map((event, index) => (
            <NewEventCard
              key={index}
              title={event.title}
              subtitle={event.subtitle}
              description={event.description}
              date={event.date}
              location={event.location}
              price={event.price}
              image={event.image}
              getTicketUrl={event.getTicketUrl}
              readMoreUrl={event.readMoreUrl}
            />
          ))}
        </div>
      </section>
    </>
  );
};
