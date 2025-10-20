"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import UpcomingActive from "@/components/events/UpcomingActive";
import PastActive from "@/components/events/PastActive";
import EventsEmptyState from "@/components/events/EventsEmptyState";
import Link from "next/link";
import Image from "next/image";
import SpecialFooterPast from "@/components/ui/SpecialFooterPast";
import { useUser } from "../context/UserContext";
import { Queries } from "../../ApiServices/queries";
import { GetAllEventsResponse, EventData } from "../types";

const socials = [
  { icon: "/discord-new.svg", link: "https://discord.gg/TmavF8QCu5", alt: "discord" },
  { icon: "/instagram-new.svg", link: "https://instagram.com/quiktis", alt: "instagram" },
  { icon: "/twitter-new.svg", link: "https://x.com/quiktishq", alt: "twitter" },
  { icon: "/linkedin-new.svg", link: "https://linkedin.com/company/quiktis", alt: "linkedin" },
  { icon: "/facebook-new.svg", link: "https://www.facebook.com/share/1BnfVxgh29/", alt: "facebook" },
];

export default function EventsActivePage() {
  const { user, logout } = useUser();
  const searchParams = useSearchParams();
  const { getAllUserEvents } = Queries();

  // 🟢 Extract active tab (upcoming or past)
  const currentTab =
    (searchParams?.get("tab") as "upcoming" | "past") ?? "upcoming";

  // 🟢 Handle loading/error states
  if (getAllUserEvents.isLoading)
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-400">
        Loading events...
      </div>
    );

  if (getAllUserEvents.isError)
    return (
      <div className="flex items-center justify-center min-h-screen text-red-400">
        Failed to load events.
      </div>
    );

  const events = getAllUserEvents.data?.data?.events || [];
const now = new Date();

const upcomingEvents = events.filter((event) => {
  const start = new Date(event.startDate);
  return start >= now;
});

const pastEvents = events.filter((event) => {
  const end = new Date(event.endDate);
  return end < now;
});

const displayedEvents =
  currentTab === "upcoming" ? upcomingEvents : pastEvents;


    
 currentTab === "upcoming" ? upcomingEvents : pastEvents;

 console.log("All events:", events.map(e => ({
  name: e.eventName,
  start: e.startDate,
  end: e.endDate,
  id: e.eventId
})));

  return (
    <>

    <div className="grid left-auto top-[-34em] right-auto place-items-center absolute w-full h-[50em]">
        <div className="w-screen h-[35em] inset-0 radial-gradient-purple-new blur-3xl opacity-50"></div>
      </div>


    <div
      className="flex flex-col min-h-screen text-white pb-8 md:pb-12"
      style={{ backgroundColor: "#131517" }}
    >
      <main className="flex-1 w-[90%] lg:w-[90%] xl:w-[85%] mx-auto">
        {/* ✅ Conditional rendering for Upcoming/Past */}
        {events.length > 0 ? (
            <UpcomingActive 
            events={events} 
            />
          )
         : (
          <EventsEmptyState
            tab={currentTab}
            //title={
            //  currentTab === "upcoming"
            //    ? "No Upcoming Events"
             //   : "No Past Events Yet"
            //}
            hideFooter={currentTab === "past"}
          />
        )}
      </main>

      {/* ✅ Conditional Footer */}
      {currentTab === "past" ? (
        <SpecialFooterPast />
      ) : (
        <footer className="max-sm:text-[0.85em] text-[0.94em] mb-0 mt-auto pt-10 sm:pt-6 md:pt-8 lg:pt-[6rem] xl:pt-[8rem] pb-8">
          <hr className="w-[85%] mx-auto border-0 border-t border-gray-800" />
          <section className="max-md:flex-col gap-6 max-md:justify-center max-md:text-center max-md:w-fit w-[85%] mx-auto flex justify-between mt-6 text-[#919499]">
            <div className="flex gap-5">
              <p className="flex gap-[0.8px] items-center">
                <Image
                  src="/New logo.png"
                  alt="Quiktis Logo"
                  width={21}
                  height={21}
                  priority
                  className="cursor-pointer object-contain bg-cover"
                  unoptimized={true}
                />
                <span>uiktis</span>
              </p>

              <Link href="#">Discover</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="#">Help</Link>
              {user?.userId && <button onClick={logout}>Logout</button>}
            </div>

            <div className="md:flex gap-4 max-md:w-fit max-md:mx-auto hidden">
              {socials.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    alt={item.alt}
                    src={item.icon}
                    height={22}
                    width={22}
                    className="h-[18px] w-[18px] object-contain"
                    unoptimized={true}
                  />
                </Link>
              ))}
            </div>
          </section>

          <section className="w-[85%] mx-auto flex justify-between mt-5 text-[#919499]">
            <div className="flex gap-4 max-md:w-fit max-md:mx-auto md:hidden">
              {socials.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    alt={item.alt}
                    src={item.icon}
                    height={22}
                    width={22}
                    className="h-[18px] w-[18px] object-contain"
                    unoptimized={true}
                  />
                </Link>
              ))}
            </div>
          </section>

          <div className="bg-[#181B1E] rounded-2xl max-md:mt-[2em] p-6 flex flex-col lg:flex-row items-start lg:items-center justify-between max-w-[95%] md:max-w-[85%] mx-auto mt-[2em]">
            <div className="flex max-md:flex-col items-start gap-4 mb-4 lg:mb-0">
              <div className="bg-[#919499] rounded-md p-3 flex-shrink-0 my-auto">
                <Image
                  src="/help-icon.svg"
                  height={20}
                  width={20}
                  alt="icon"
                  unoptimized={true}
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Call for help!</h3>
                <p className="text-gray-400 text-sm">
                  Need any help? Get in touch with our team to support you.
                </p>
              </div>
            </div>
            <Link
              href="/contact"
              className="text-black hover:bg-gray-700 px-6 py-2 rounded-md font-medium transition text-center bg-white hover:text-white max-md:w-[100%]"
            >
              Contact us
            </Link>
          </div>
        </footer>
      )}
    </div>
    </>
  );
}
