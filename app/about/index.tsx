"use client";

import React from "react";
import Image from "next/image";

const teamMembers = [
  {
    name: "Olivia Rhye",
    role: "Founder & CEO",
    img: "/profile1.png",
    bg: "#C7B9DA",
  },
  {
    name: "Phoenix Baker",
    role: "Engineering Manager",
    img: "/profile2.png",
    bg: "#AA9C75",
  },
  {
    name: "Lana Steiner",
    role: "Product Manager",
    img: "/profile3.png",
    bg: "#D4B5AD",
  },
  {
    name: "Demi Wilkinson",
    role: "Frontend Developer",
    img: "/profile4.png",
    bg: "#BEA887",
  },
  {
    name: "Candice Wu",
    role: "Backend Developer",
    img: "/profile8.png",
    bg: "#A2A8CD",
  },
  {
    name: "Natali Craig",
    role: "Product Designer",
    img: "/profile7.png",
    bg: "#D1BAA9",
  },
  {
    name: "Drew Cano",
    role: "UX Researcher",
    img: "/profile6.png",
    bg: "#CFC3A7",
  },
  {
    name: "Orlando Diggs",
    role: "Customer Success",
    img: "/profile5.png",
    bg: "#D1DFC3",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-transparent text-white min-h-screen">
      <div className="py-10">
        {/* Top*/}
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="md:w-1/2 flex flex-col gap-4 md:mt-[380px] mt-0 px-4">
            <p className="text-base max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit.
            </p>
            <h1
              className="font-extrabold leading-tight"
              style={{ fontSize: "80px", lineHeight: 1 }}>
              <span className="bg-gradient-to-r from-white to-[#111111] bg-clip-text text-transparent block">
                About
              </span>
              <span className="bg-gradient-to-r from-white to-[#111111] bg-clip-text text-transparent block ml-[50px]">
                Quiktis
              </span>
            </h1>
          </div>

          <div className="md:w-1/2 w-full grid grid-cols-3 gap-3 px-4 md:px-0">
            <div
              className="h-40 md:h-[300px] bg-cover bg-left bg-no-repeat"
              style={{
                backgroundImage: "url(/wedding.png)",
              }}
            />

            <div
              className="h-72 md:h-[500px] bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url(/wedding.png)",
              }}
            />

            <div
              className="h-56 md:h-[380px] bg-cover bg-right bg-no-repeat"
              style={{
                backgroundImage: "url(/wedding.png)",
              }}
            />
          </div>
        </div>

        <div className="mt-16" />

        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto text-gray-200 space-y-6 leading-loose text-sm sm:text-base">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
              vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum
              auctor ornare leo, non suscipit magna interdum eu. Curabitur
              pellentesque nibh nibh, at maximus ante fermentum sit amet.
              Pellentesque commodo lacus at sodales sodales. Quisque sagittis
              orci ut diam condimentum, vel euismod erat placerat Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
              Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
              mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
              tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo,
              non suscipit magna interdum eu. Curabitur pellentesque nibh nibh,
              at maximus ante fermentum sit amet. Pellentesque commodo lacus at
              sodales sodales. Quisque sagittis orci ut diam condimentum, vel
              euismod erat placerat Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
              Pellentesque sit amet sapien fringilla, mattis ligula consectetur,
              ultrices mauris. Maecenas vitae mattis tellus. Nullam quis
              imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna
              interdum eu. Curabitur pellentesque nibh nibh, at maximus ante
              fermentum sit amet. Pellentesque commodo lacus at sodales sodales.
              Quisque sagittis orci ut diam condimentum, vel euismod erat
              placerat Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
              sapien fringilla, mattis ligula consectetur, ultrices mauris.
              Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
              Vestibulum auctor ornare leo, non suscipit magna interdum eu.
              Curabitur pellentesque nibh nibh, at maximus ante fermentum sit
              amet. Pellentesque commodo lacus at sodales sodales. Quisque
              sagittis orci ut diam condimentum, vel euismod erat placerat Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
              Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
              mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
              tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo,
              non suscipit magna interdum eu. Curabitur pellentesque nibh nibh,
              at maximus ante fermentum sit amet. Pellentesque commodo lacus at
              sodales sodales. Quisque sagittis orci ut diam condimentum, vel
              euismod erat placerat Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
              Pellentesque sit amet sapien fringilla, mattis ligula consectetur,
              ultrices mauris. Maecenas vitae mattis tellus. Nullam quis
              imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna
              interdum eu. Curabitur pellentesque nibh nibh, at maximus ante
              fermentum sit amet. Pellentesque commodo lacus at sodales sodales.
              Quisque sagittis orci ut diam condimentum, vel euismod erat
              placerat Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
              sapien fringilla, mattis ligula consectetur, ultrices mauris.
              Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
              Vestibulum auctor ornare leo, non suscipit magna interdum eu.
              Curabitur pellentesque nibh nibh, at maximus ante fermentum sit
              amet. Pellentesque commodo lacus at sodales sodales. Quisque
              sagittis orci ut diam condimentum, vel euismod erat placerat Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
              Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
              mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
              tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo,
              non suscipit magna interdum eu. Curabitur pellentesque nibh nibh,
              at maximus ante fermentum sit amet. Pellentesque commodo lacus at
              sodales sodales. Quisque sagittis orci ut diam condimentum, vel
              euismod erat placerat
            </p>
          </div>
        </section>

        {/* Team */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/gradient.png"
              alt="Team Background"
              fill
              className="object-cover w-full h-full"
            />
          </div>
          <div className="relative py-16">
            <div className="max-w-5xl mx-auto text-center px-4">
              <h2 className="text-[32px] sm:text-[36px] font-semibold mb-2">
                Meet our team
              </h2>
              <p className="text-sm text-gray-300 mb-10">
                Our philosophy is simple—hire a team of diverse, passionate
                people and foster a culture that empowers you to do your best
                work.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-12">
                {teamMembers.map((m) => (
                  <div key={m.name} className="flex flex-col items-center">
                    <div
                      className="w-20 h-20 mb-3 relative rounded-full overflow-hidden"
                      style={{ backgroundColor: m.bg }}>
                      <Image
                        src={m.img}
                        alt={m.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="font-medium">{m.name}</p>
                    <p className="text-sm text-[#FF4D2A]">{m.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats*/}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-[32px] sm:text-[36px] font-semibold mb-4">
              Unleash the full power of data
            </h2>
            <p className="text-[18px] sm:text-[20px] text-gray-300 mb-12">
              Everything you need to convert, engage, and retain more users.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-x-8 gap-y-8">
              <div className="px-4">
                <p className="text-[48px] sm:text-[60px] font-extrabold text-[#FF4D2A]">
                  40+
                </p>
                <p className="mt-0.5">Event Managers</p>
              </div>
              <div className="px-4">
                <p className="text-[60px] sm:text-[80px] font-extrabold text-[#FF4D2A]">
                  600+
                </p>
                <p className="mt-0.5">Events</p>
              </div>
              <div className="px-4">
                <p className="text-[48px] sm:text-[60px] font-extrabold text-[#FF4D2A]">
                  4k+
                </p>
                <p className="mt-0.5">Tickets sold</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
