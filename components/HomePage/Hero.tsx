"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import Button from "../ui/CustomButton";
import { useRouter } from "next/navigation";

const company = [
  { name: "Company A", logo: "/co-work.png" },
  { name: "Company B", logo: "/greener.png" },
  { name: "Company C", logo: "/saas.png" },
  { name: "Company D", logo: "/dorfus.png" },
  { name: "Company E", logo: "/ask.png" },
];

const Hero = () => {
  const router = useRouter();

  useEffect(() => {
    const existingStyle = document.getElementById("marquee-styles");
    if (!existingStyle) {
      const style = document.createElement("style");
      style.id = "marquee-styles";
      style.innerHTML = `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        
        @keyframes marquee2 {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        
        .animate-marquee2 {
          animation: marquee2 25s linear infinite;
        }
      `;
      document.head.appendChild(style);
    }

    return () => {
      const style = document.getElementById("marquee-styles");
      if (style) {
        document.head.removeChild(style);
      }
    };
  }, []);

  return (
    <div className="flex flex-col gap-14">
      <div className="relative h-auto min-h-[524px] flex flex-col md:flex-row justify-center items-center gap-8 py-8 md:py-0">
        <div className="flex flex-col justify-center gap-2 text-[17px] w-full md:w-[590px] px-4 md:px-0 text-center md:text-left">
          <p>From Concept to Curtain Call...</p>
          <h1 className="text-[40px] md:text-[50px] leading-none font-[900] font-inter">
            Quiktis Has You Covered
          </h1>
          <p>
            Stay Ahead of the Curve with Quiktis&apos; Cutting-Edge Solutions
          </p>
          <Button
            onClick={() => router.push("/events")}
            className="bg-primary w-full sm:w-1/2 py-3 mt-4 rounded-md mx-auto md:mx-0">
            Explore Events
          </Button>
        </div>

        <div className="relative w-full md:w-auto flex justify-center md:justify-end mt-6 md:mt-0">
          <Image
            src="/Ellipse.png"
            alt="Event Ellipse"
            width={300}
            height={300}
            objectFit="cover"
            className="hidden md:block absolute -z-50 left-36 top-5"
          />
          <Image
            src="/events.png"
            alt="Event"
            width={849}
            height={500}
            objectFit="cover"
            className="w-full md:w-auto"
          />
        </div>

        <div className="hidden md:flex w-[70%] justify-between absolute bottom-0 -left-36">
          <Image src="/star1.png" alt="star1" width={150} height={150} />
          <Image src="/star2.png" alt="star2" width={150} height={150} />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10 px-4 md:px-0">
        <div className="w-full md:w-auto flex justify-center md:justify-start">
          <Image
            src="/dance.png"
            alt="Dance"
            width={470}
            height={570}
            objectFit="cover"
            className="w-full md:w-auto"
          />
        </div>

        <div className="relative w-full md:w-[800px] h-auto md:h-[265px] flex flex-col gap-1 text-center md:text-left mt-4 md:mt-0">
          <h2 className="text-[20px] text-primary uppercase">
            Welcome to Quiktis
          </h2>
          <h1 className="text-[25px] font-bold uppercase leading-7">
            Where Event Experiences Are Revolutionized!
          </h1>
          <p className="text-[16px] leading-5">
            At Quiktis, we&apos;re on a mission to transform the way events are
            managed and experienced. With our cutting-edge ticketing platform,
            we&apos;re dedicated to simplifying the intricate world of event
            management, making it easier and more enjoyable for both organizers
            and attendees alike.
          </p>

          <Image
            src="/event-ticket.svg"
            alt="Event Ticket"
            width={430}
            height={5360}
            objectFit="cover"
            className="hidden md:block absolute right-0 mt-28 -z-50"
          />
        </div>
      </div>

      <div className="w-full overflow-hidden py-6 bg-transparent">
        <div className="relative flex">
          <div className="flex animate-marquee whitespace-nowrap">
            {company.map((item, index) => (
              <div key={index} className="flex mx-8 items-center">
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={147}
                  height={60}
                  className="h-16 object-contain"
                />
              </div>
            ))}
          </div>

          <div className="flex animate-marquee2 whitespace-nowrap absolute left-full">
            {company.map((item, index) => (
              <div key={`dup-${index}`} className="flex mx-8 items-center">
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={147}
                  height={60}
                  className="h-16 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
