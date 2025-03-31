"use client";
import { useState } from "react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import TrustedBrands from "@/components/TrustedBrands";
import Button from "@/components/ui/Button";
import { FiArrowLeft, FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import ComingUpNext from "@/components/ComingUpNext";
import Footer from "@/components/NewFooter";
import NewHeader from "@/components/NewHeader";
import { strongPoints } from "../constant";
import Sidebar from "@/components/Sidebar";

const locations = ["Nigeria", "USA", "United Kingdom"];

const firstRowFilters = [
  "All",
  "Trending for you",
  "Today",
  "Online",
  "This weekend",
  "Music",
];
const secondRowFilters = [
  "Shows",
  "Festival",
  "Food & Drinks",
  "Happening now",
  "Games",
];

interface renderFilterProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  filters: string[];
}
const RenderFilterRow: React.FC<renderFilterProps> = ({
  filters,
  setActiveFilter,
  activeFilter,
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {filters.map((filter) => (
        <Button
          key={filter}
          className={`py-2 px-6 border rounded-full transition-colors ${
            filter === activeFilter
              ? "border-[#FF4D2A] text-[#FF4D2A]"
              : "border-gray-600 text-gray-300 hover:border-[#FF4D2A] hover:text-[#FF4D2A]"
          }`}
          onClick={() => setActiveFilter(filter)}>
          {filter}
        </Button>
      ))}
    </div>
  );
};

export default function NewLandingPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentLocationIndex, setCurrentLocationIndex] = useState(0);
  const [SidebarOpen, setSidebarOpen] = useState(false);

  const handlePrevLocation = () => {
    setCurrentLocationIndex((prev) =>
      prev === 0 ? locations.length - 1 : prev - 1
    );
  };

  const handleNextLocation = () => {
    setCurrentLocationIndex((prev) =>
      prev === locations.length - 1 ? 0 : prev + 1
    );
  };

  const getLocationStyles = (index: number) => {
    const isActive = index === currentLocationIndex;
    return isActive
      ? "text-[#FF4D2A] text-2xl md:text-5xl font-bold"
      : "text-gray-300 text-base md:text-lg";
  };

  return (
    <main className="relative ">
      <Sidebar
        onSidebarClose={() => setSidebarOpen(false)}
        isOpen={SidebarOpen}
      />
      <div className="grid left-auto top-[-20em] right-auto place-items-center absolute z-10 w-full h-[50em]">
        <div className="w-full h-[60em] inset-0 radial-gradient-custom blur-3xl opacity-50"></div>
      </div>
      <NewHeader onSidebarOpen={() => setSidebarOpen(true)} />
      <section className="relative z-40 mt-[2em] md:mt-[5em] text-center">
        <div className="gradient-text flex justify-center flex-col gap-6">
          <div className="bg-[#acabab21] max-sm:text-[0.9em] max-sm:w-[90%] w-fit mx-auto p-2 shadow-md px-6 rounded-[2em] border border-[#69696948]">
            Join 850,000+ top organizations and attendees like Apple, OpenAI,
            and NASA.
          </div>
          <h1 className="flex justify-center text-[2.8em] md:max-w-[76%] sm:max-w-[76%] mx-auto max-sm:text-[2.5em] md:text-[3.4em] lg:text-[4.4em] leading-[1.2em] text-center font-bold">
            Revolutionizing Event Ticketing
          </h1>
        </div>
        <p className="md:text-[1.2em] mt-3 w-[90%] md:max-w-[60%] mx-auto">{`Quiktis is a decentralized ticketing platform revolutionizing event access across the globe. `}</p>

        <form className="mt-[3.5em] relative grid mx-auto place-items-center w-full md:w-[68%] lg:w-[50%] lg:max-w-[40em]">
          <input
            placeholder="Enter your Email"
            type="text"
            className="md:px-8 px-6 py-5 outline-none bg-[#79797965] w-full rounded-[1.6em]"></input>
          <Link
            href="/register"
            className="text-[0.9em] md:text-[1em] absolute cursor-pointer bg-primary px-6 py-3 right-3 rounded-[1em] btn-3d border-1 border-[#eb4b3c] icon">
            Join for free
          </Link>
        </form>
      </section>

      <section className="mt-[6em] md:mt-[10em]">
        <p className="text-center">Trusted by world leaders</p>
        <TrustedBrands containerClass="my-2" />
      </section>

      <section className="max-sm:px-0 px-3 lg:px-[5em] gap-5 py-[6em] md:py-[10em]">
        <div className="flex flex-col justify-center md:grid md:grid-cols-2 lg:grid-cols-3 gap-[2.5em] w-fit mx-auto max-sm:w-[95%]">
          {strongPoints.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 mb-7 w-full items-center text-center">
              <Image
                unoptimized={true}
                src={item.iconUrl}
                alt={item.title}
                width={100}
                height={100}
              />
              <p className="">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-[10em] relative">
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
            <button
              type="button"
              className="md:mr-0 md:ml-auto bg-primary w-full md:w-fit py-3 px-4 h-fit text-black rounded-xl">
              Sign Up
            </button>
          </div>
        </div>

        <div className="relative z-50 flex flex-col lg:grid grid-cols-2 mt-[5em] md:mt-[9.4em] gap-[5em]">
          <div className="flex flex-col justify-center h-fit">
            <Image
              unoptimized={true}
              src="/landing_page_chart.png"
              alt="Illustration 1"
              className="w-full"
              width={320}
              height={320}
            />
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

      <section className="relative w-full text-white md:mt-[15em] ">
        <Image
          src="/landing_mockup2.png"
          alt="Decorative background swirl"
          width={100}
          height={100}
          className="absolute object-contain w-[25em] right-0 left-auto mr-[-10em]"
          unoptimized={true}
        />
        <div className="absolute w-full h-[80em] top-[-19em] translate-x-[50vw] tr inset-0 radial-gradient-custom blur-3xl opacity-50"></div>
        <div className="relative z-10 w-full mx-auto">
          <h1 className="mt-[-2em] mb-[1.4em] md:mt-[-10em] text-left max-sm:mx-auto sm:mx-auto w-fit md:max-w-[46%] md:ml-0 lg:text-left text-[1.5em] lg:mt-[-4em] lg:text-[2.5em] font-semibold">
            EXPLORE EVENTS FROM ALL AROUND THE WORLD
          </h1>
          <div className="bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-gray-100/30 px-8 pt-12 pb-16 min-h-[350px]">
            <div className="flex flex-col items-center justify-center space-y-10">
              <div className="flex items-center justify-center flex-wrap gap-12">
                <h1 className="text-xl md:text-3xl font-bold">HAPPENING IN</h1>
                <Button
                  className="relative z-50 w-8 h-8 bg-white text-[#FF4D2A] flex items-center justify-center rounded-[10px]"
                  onClick={handlePrevLocation}>
                  <FiArrowLeft size={16} />
                </Button>
                <div className="flex items-center gap-2">
                  {locations.map((location, index) => (
                    <span
                      key={location}
                      className={getLocationStyles(index)}
                      style={
                        index === currentLocationIndex
                          ? {}
                          : { filter: "blur(1px)" }
                      }>
                      {location}
                    </span>
                  ))}
                </div>
                <Button
                  className="relative z-50 w-8 h-8 bg-white text-[#FF4D2A] flex items-center justify-center rounded-[10px]"
                  onClick={handleNextLocation}>
                  <FiArrowRight size={16} />
                </Button>
              </div>
              <RenderFilterRow
                filters={firstRowFilters}
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
              />
              <div className="mb-10">
                <RenderFilterRow
                  filters={secondRowFilters}
                  activeFilter={activeFilter}
                  setActiveFilter={setActiveFilter}
                />
              </div>
            </div>
          </div>
          <div className="mt-6">
            <button className="bg-primary hover:bg-red-600 text-black font-semibold py-2 px-6 rounded-[10px] flex justify-center gap-2">
              Get Started
              <FiArrowUpRight />
            </button>
          </div>
        </div>
      </section>
      <ComingUpNext containerClass="mt-[6em] w-full md:w-[80%] mx-auto" />
      <Footer />
    </main>
  );
}
