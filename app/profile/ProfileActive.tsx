"use client";

import { useGetAllUserEvents } from "@/ApiServices/queries";
import { useStore } from "../lib/store";
import Image from "next/image";
import SafeImage from "@/components/SafeImage";
import { EventData } from "../types";
import { formatDate, getTime } from "../utils/utils";
import { useRouter } from "next/navigation";
import Link from "next/link";

import React from "react";

interface ProfileActiveProps {
  user?: {
    name: string;
    profileImage: string;
    joinedDate: string;
    eventsOrganized: number;
    eventsAttended: number;
  };
}

const ProfileActive: React.FC<ProfileActiveProps> = () => {

  const { user, logout } = useStore();

  const router = useRouter();

  const {
            data: eventsData,
            isLoading: loadingEvent,
            isError: errorEvent,
          } = useGetAllUserEvents();

  const events = eventsData?.data.events

  const handleLogout = () => {
    logout();
    router.push("/")
  }

  return (
    <div className="min-h-screen bg-[#131517] text-white p-6">
      <div className="max-w-4xl mx-auto w-full mt-[5em] md:mt-[8em] space-y-6">
        {/* Profile Header */}
        <header className="mb-8 md:mb-[3.5em] -ml-3">
          <div className="flex items-center gap-2 md:gap-4 ">
            <div className="relative">
              <Image
                src="/icons/Profile-img.svg"
                alt={user?.name ?? ""}
                height={18}
                width={18}
                unoptimized
                className="w-20 h-20 max-md:w-[50px] max-md:h-[50px] rounded-full object-contain"
              />
            </div>
            <div className="flex-1">
              <h1
              className="font-inter font-medium text-xl md:text-2xl lg:text-4xl text-white"
                
              >
                {user?.name}
              </h1>
              {/*<div className="flex items-center space-x-2">
                <img
                  src="/icons/calender-profile.svg"
                  alt="Calendar"
                  className="w-4 h-4"
                />
                <span
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 500,
                    fontSize: "20px",
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    color: "#919499",
                  }}
                >
                  {/*Joined {user.joinedDate}/
                </span>
              </div>*/}
            </div>
          </div>
        </header>

        <main>
          {/* Cultural Identity Section */}
          <div style={{ marginBottom: "115px" }}>
            <h2 className="font-inter font-medium text-white mb-3 text-lg md:text-3xl">
              Your Cultural Identity
            </h2>
            <div
              className="flex items-center space-x-2"
              style={{ marginTop: "17px" }}
            >
              <img
                src="/icons/calender-profile.svg"
                alt="Calendar"
                className="w-4 h-4"
              />
              <span
              className="font-inter font-medium text-[#919499]"
               
              >
                {`${events?.length}`} organized
              </span>
              <span
                className="font-inter font-medium text-[#919499]"
              >
                |
              </span>
              <span
                className="font-inter font-medium text-white"
              >
                {0} Attended
              </span>
            </div>

            {/* Event List */}
            <div className="flex flex-col gap-8 mt-[3em]">
              {events && events.map((event: EventData, index) => (
                <div
                  key={event.id}
                  className="flex space-x-4"
                >
                  <SafeImage
                                  src={event.coverImage}
                                  alt={`${event.eventName} poster`}
                                  width={156}
                                  height={156}
                                  className=" object-cover w-[75px] h-[75px] md:w-[80px] md:h-[80px] rounded-md"
                                  unoptimized
                                />
                 
                  <div
                    className="flex flex-col gap-3"
                  >
                    <Link
                      href ={`/event/${event.eventId}`} 
                      className="cursor-pointer hover:underline "
                      >
                      <h3
                        className="font-inter font-semibold text-white"
                      >
                        {event.eventName}
                      </h3>
                    </Link>
                     <div>
                      {event?.startDate && <p
                        style={{
                          fontFamily: "Inter",
                          fontWeight: 400,
                          fontSize: "16px",
                          lineHeight: "100%",
                          letterSpacing: "0%",
                          color: "#919499",
                          margin: 0,
                          marginBottom: "4px",
                        }}
                      >
                        {formatDate(event?.startDate?? "")}, {getTime(event.startDate?? "")}
                      </p>}
                      <p
                        style={{
                          fontFamily: "Inter",
                          fontWeight: 400,
                          fontSize: "16px",
                          lineHeight: "100%",
                          letterSpacing: "0%",
                          color: "#919499",
                          margin: 0,
                        }}
                      >
                        {event.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Buttons Section */}
          <div style={{ marginBottom: "60px" }}>
            <div
              className="flex justify-between items-center"
              style={{ marginTop: "286.47px" }}
            >
              <button
              className="px-4 py-3 text-white border border-gray-500 rounded-md w-fit"
              onClick={handleLogout}
             
              >
                Logout
              </button>

              <button
                className="px-4 flex gap-2 items-center py-3 text-[#131517] bg-white border border-gray-500 rounded-md w-fit"
                
              >
                <img
                  src="/icons/diamond-profile.svg"
                  alt="Diamond"
                  className="w-5 h-5 text-[#131517] my-auto"
                />
                View Reward
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProfileActive;
