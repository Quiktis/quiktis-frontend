"use client";

import type { NextPage } from "next";
import { Plus, MapPin } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { Queries } from "@/ApiServices/queries";
import { useParams } from "next/navigation";
import { useStore } from "@/app/lib/store";
import { formatDateShort, getDayFromISO, getWeekday, getTime, formatDate } from "@/app/utils/utils";
import Image from "next/image";
import SafeImage from "@/components/SafeImage";

const InviteGuestIcon = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <img
    src="/icons/invite-onclick-guest.svg"
    alt="Invite Guest Icon"
    className={className}
    style={style}
  />
);

const ShareEventIcon = ({ className }: { className?: string }) => (
  <img
    src="/icons/share-onclick-event.svg"
    alt="Share Event Icon"
    className={className}
  />
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <img
    src="/icons/facebook-onclick.svg"
    alt="Facebook Icon"
    className={className}
  />
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <img
    src="/icons/instagram-onclick.svg"
    alt="Instagram Icon"
    className={className}
  />
);

const XIcon = ({ className }: { className?: string }) => (
  <img src="/icons/twitter-onclick.svg" alt="X Icon" className={className} />
);

const CreatorIcon = ({ className }: { className?: string }) => (
  <img
    src="/icons/creator-onclick-icon.svg"
    alt="Creator Icon"
    className={className}
  />
);

const GuestIcon = ({ className }: { className?: string }) => (
  <img
    src="/icons/guest-onclick-icon.svg"
    alt="Guest Icon"
    className={className}
  />
);

const PublicIcon = ({ className }: { className?: string }) => (
  <img
    src="/icons/public-onclick.svg"
    alt="Public Icon"
    className={className}
  />
);

const ProfileImage = ({
  className,
  alt,
}: {
  className?: string;
  alt?: string;
}) => (
  <img
    src="/icons/Profile-img.svg"
    alt={alt ?? "Profile Image"}
    className={className}
  />
);

const fallbackCopyText = (text: string) => {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed";
  ta.style.left = "-9999px";
  document.body.appendChild(ta);
  ta.select();
  try {
    const ok = document.execCommand("copy");
    document.body.removeChild(ta);
    return ok;
  } catch {
    document.body.removeChild(ta);
    return false;
  }
};

type StackedGlassLinkBarsProps = {
  topText: string;
  topCopyUrl?: string;
  behindText: string;
  peekBehind?: number;
  behindFontSize?: string;
  className?: string;
};

const StackedGlassLinkBars: React.FC<StackedGlassLinkBarsProps> = ({
  topText,
  topCopyUrl,
  behindText,
  peekBehind = 0,
  behindFontSize = "20px",
  className = "",
}) => {
  const timerRef = useRef<number | null>(null);
  const [copyStatus, setCopyStatus] = useState("Copy");
  

  useEffect(() => {
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, []);

  const handleCopy = async () => {
    const text = topCopyUrl ?? topText;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const ok = fallbackCopyText(text);
        if (!ok) throw new Error("fallback copy failed");
      }
      setCopyStatus("Copied!");
    } catch (err) {
      console.error("copy failed", err);
      setCopyStatus("Failed!");
    } finally {
      if (timerRef.current) window.clearTimeout(timerRef.current);
      timerRef.current = window.setTimeout(() => setCopyStatus("Copy"), 2000);
    }
  };

  

  return (
    <div className={`relative ${className}`}>

      <div className="flex justify-between px-5 pr-6.5 md:px-8 bg-[#ffffff28] py-4 mb-4.5 mt-2.5">
        <span className="font-medium text-white md:text-lg truncate max-w-[65%]">{topText}</span>

        <button className="white font-medium text-white md:text-lg" onClick={handleCopy}>
          {copyStatus}
        </button>
      </div>
    </div>
  );
};

type Host = {
  name: string;
  email: string;
  role: "Creator" | "Guest";
};

const HostItem = ({ host }: { host: Host }) => (
  <div
    className="flex items-center justify-between p-3 rounded-lg"
    style={{
      background: "#FFFFFF05",
      border: "0.33px solid #91949926",
      backdropFilter: "blur(10.33px)",
    }}
  >
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center overflow-hidden">
        <ProfileImage
          className="w-full h-full object-cover rounded-full"
          alt={host.name}
        />
      </div>
      <div>
        <p className="font-medium text-white max-md:text-[0.9em] truncate max-sm:max-w-[85%] md:text-lg font-inter">
          {host.name}
        </p>
        <p className="max-sm:text-[0.7em] truncate max-sm:max-w-[90%] text-[#666666] font-inter"
        
        >
          {host.email}
        </p>
      </div>
    </div>
    <span
      className={`font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2`}
      style={{
        width: "151px",
        height: "42px",
        ...(host.role === "Creator"
          ? {
              background: "rgba(123, 255, 0, 0.06)",
              color: "#7BFF00",
            }
          : {
              background: "rgba(247, 179, 179, 0.06)",
              color: "#F74FB3",
            }),
      }}
    >
      {host.role === "Creator" ? (
        <CreatorIcon className="w-4 h-4" />
      ) : (
        <GuestIcon className="w-4 h-4" />
      )}
      {host.role}
    </span>
  </div>
);

const SectionHeader = ({
  title,
  subtitle,
  titleClassName,
  subtitleClassName,
  buttonText,
}: {
  title: string;
  subtitle: string;
  titleClassName: string;
  subtitleClassName: string;
  buttonText?: string;
}) => (
  <div className="flex items-center justify-between mb-[47px] max-sm:mb-6">
    <div>
      <h2 className="font-medium max-md:text-lg md:text-2xl text-white">{title}</h2>
      <p className="max-md:text-[0.9em] max-sm:text-[0.7em]">{subtitle}</p>
    </div>
    {buttonText && (
      <button
        className="flex items-center gap-3 transition-colors bg-[#FFFFFF0F] py-3 max-sm:py-2 max-sm:px-2 max-sm:pr-3 px-4 pr-5 rounded-md"
      >
        <div
          className="w-8 h-8 max-sm:w-6 max-sm:h-6 rounded-full flex items-center justify-center"
          style={{ backgroundColor: "rgba(49, 46, 129, 0.5)" }}
        >
          <Plus size={18} className="text-indigo-400" />
        </div>
        <span className="font-inter max-sm:text-[0.8em] font-medium text-[#D2DDDA]"
        >
          {buttonText}
        </span>
      </button>
    )}
  </div>
);

const OnclickOverviewPage: NextPage = () => {
  const { id: eventId } = useParams();
  const origin =
    typeof window !== "undefined" ? window.location.origin : "";
  
  const { getEventById } = Queries(eventId as string);

  const { data, isLoading, error } = getEventById;

  const eventData = data?.data;

  const { user } = useStore();

  const hosts: Host[] = [
    {
      name: user?.name??"",
      email: user?.email??"",
      role: "Creator",
    },
    /*{
      name: "Dare Sobaloju Pamilerin",
      email: "Pamilerincaleb@gmail.com",
      role: "Guest",
    },*/
  ];

const shareUrl = `${origin}/events/view/${eventData?.event.slug}`;

  const handleShare = async (url: string) => {
    
    if (navigator.share) {
      try {
        await navigator.share({
         
          url,
        });
        console.log("Event shared successfully!");
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      // fallback for unsupported browsers
      await navigator.clipboard.writeText(url);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <div className="bg-[#131517] min-h-screen p-4 sm:p-6 md:p-8 text-gray-300 font-sans flex items-center justify-center">
      <div className="max-w-4xl mx-auto w-full mt-24">
        <div className="bg-[#FFFFFF05] border-[0.33px] border-[#91949926] rounded-[11.66px] backdrop-blur-[13.11px] p-6 max-sm:p-4">
          <div className="max-sm:mb-4 mb-6 flex justify-start">
            <div className=" gap-3 w-[80vw] md:w-[490px] grid grid-cols-2">
              <button onClick={() => handleShare(shareUrl)}
                className="flex items-center gap-2 rounded-xl backdrop-blur-[13.11px] hover:bg-white/10 transition-colors bg-[#FFFFFF0F] max-sm:py-2.5 py-3 pl-2 pr-6 max-sm:px-3 w-full max-sm:text-[0.9em]"
                >
               
                  <Image src="/invite-guests.svg" className="max-sm:max-w-[20px] max-sm:max-h-[20px]" alt="icon" height={30} width={30}/>
                <span className="font-inter font-semibold text-[#D2DDDA] max-sm:font-[0.6em]">Invite Guest</span>
              </button>

               <button onClick={() => handleShare(shareUrl)}
                className="flex items-center gap-2 rounded-xl backdrop-blur-[13.11px] hover:bg-white/10 transition-colors bg-[#FFFFFF0F] py-3 max-sm:py-2.5 pl-2 pr-6 max-sm:px-3 w-full max-sm:text-[0.9em]"
               
              >
               
                  <Image src="/share-event.svg" className="max-sm:max-w-[20px] max-sm:max-h-[20px]" alt="icon" height={30} width={30}/>
                <span className="font-inter font-semibold text-[#D2DDDA] max-sm:font-[0.6em]">Share Event</span>
              </button>
              



            </div>
          </div>

          <main className="flex flex-col lg:flex-row gap-8 max-sm:gap-4">
            <div className="flex-none w-full lg:w-[490px]">
              <div
                className="bg-[#CE5620] max-sm:w-[80vw] w-full h-[fit] rounded-[18.62px]  flex flex-col justify-between max-sm:overflow-x-hidden"
                
              >
                <div className="flex flex-row gap-4 md:gap-6 px-4 pt-4 max-sm:px-2.5 max-sm:pt-2.5">
                  <div>
                    <SafeImage
                      alt="Event cover image"
                      src={`${eventData?.event.coverImage ?? "/spiral-img.svg"}`}
                      width={232}
                      height={232}
                      className="max-sm:w-[40vw] max-sm:h-[40vw] w-[17em] h-[17em] max-md:object-contain object-cover"
                      style={{ borderRadius: "16.75px" }}
                    />
                  </div>
                  <div className="flex-grow flex flex-col justify-start gap-4">
                    <h1
                      className="font-normal text-white"
                      style={{
                        fontFamily: "Instrument Serif",
                        fontSize: "30px",
                        lineHeight: "1.2",
                      }}
                    >
                      {eventData?.event.eventName?? ""}
                    </h1>
                    <div className="flex items-center gap-3">
                      <div className="w-[33.81px] h-[33.81px] flex-shrink-0 flex flex-col items-center justify-center border-[0.72px] border-[#F8F8F824] rounded-[10.79px] overflow-hidden">
                        <div className="w-full text-center bg-[#91949966]">
                          <span className="text-[6px] text-white/80 font-semibold block leading-tight pt-0.5">
                            {new Date(eventData?.event?.startDate?? "").toLocaleString("en-US", { month: "short" })}
                          </span>
                        </div>
                        <span className="text-[15px] font-semibold text-white block flex-grow flex items-center -mt-0.5">
                          {new Date(eventData?.event?.startDate??"").getDate()}
                        </span>
                      </div>
                      <div>
                        <p
                          className="font-semibold text-white"
                          style={{ fontSize: "11.35px" }}
                        >
                          {formatDate(eventData?.event.startDate?? "")}
                        </p>
                        <p
                          className="font-medium"
                          style={{ fontSize: "11.35px", color: "#D8D8D8" }}
                        >
                         {getTime(eventData?.event.startDate?? "")}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-[33.81px] h-[33.81px] flex-shrink-0 flex items-center justify-center border-[0.72px] border-[#F8F8F824] rounded-[10.79px]">
                        <MapPin size={16} className="text-white" />
                      </div>
                      <div>
                        <p
                          className="font-semibold"
                          style={{ fontSize: "10.55px", color: "#FFFFFF" }}
                        >
                          Offline Location
                        </p>
                        <p
                          className="font-medium"
                          style={{ fontSize: "10.55px", color: "#D8D8D8" }}
                        >
                          {eventData?.event.location?? ""}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-white mt-0 p-4 max-sm:p-2.5">
                  <p className="text-xs font-inter fom-medium">
                    Hosted
                  </p>
                  <p className="font-inter font-medium max-sm:text-[0.8em] text-[0.9em]">{user?.name ?? ""}
                  </p>
                </div>

                <div>
                  <StackedGlassLinkBars
                    topText={shareUrl}
                    topCopyUrl={shareUrl}
                    behindText="Where Africa startup find oppurtunity"
                    peekBehind={0} // can be used overlap and show the text behind
                    behindFontSize="20px"
                  />
                </div>
              </div>
            </div>

            <div className="hidden max-sm:gap-2 gap-4 w-[80vw] md:w-[490px] max-sm:grid grid-cols-3">
              <button
                className="font-inter flex items-center justify-center md:font-semibold text-white transition-colors max-sm:text-[0.72em] bg-[#FFFFFF0F] max-sm:px-1.5 max-sm:py-2 px-2 py-2.5 rounded-md"
                
              >
                
                
                  Edit Event
                
              </button>
              <button
                className="font-inter flex items-center justify-center md:font-semibold text-white transition-colors max-sm:text-[0.72em] bg-[#FFFFFF0F] max-sm:px-1.5 max-sm:py-2 px-2 py-2.5 rounded-md"
                
              >
                
                  Change Image
                
              </button>
              <button onClick={() => handleShare(shareUrl)}
                 className="font-inter flex items-center justify-center md:font-semibold text-white transition-colors max-sm:text-[0.72em] bg-[#FFFFFF0F] max-sm:px-1.5 max-sm:py-2  px-2 py-2.5 rounded-md"
                
              >
                
                  Share Event
                
              </button>
            </div>

            <aside className="p-0 rounded-2xl flex-none w-full md:w-fit">
              <h3 className="text-lg font-medium text-white mb-4">
                When and Where
              </h3>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-[56px] h-[56px] flex-shrink-0 flex flex-col items-center justify-center border-[1.19px] border-[#F8F8F824] rounded-[17.87px] overflow-hidden">
                  <div className="w-full text-center bg-[#91949966]">
                    <span className="text-[8.28px] text-white-600 font-semibold block leading-tight py-0.5">
                      {new Date(eventData?.event?.startDate?? "").toLocaleString("en-US", { month: "short" })}
                    </span>
                  </div>
                  <span className="text-2xl font-semibold text-white block flex-grow flex items-center -mt-1">
                    {new Date(eventData?.event?.startDate??"").getDate()}
                  </span>
                </div>
                <div>
                  <p
                    className="font-semibold text-white"
                    style={{ fontSize: "11.35px" }}
                  >
                    {formatDate(eventData?.event.startDate?? "")}
                  </p>
                  <p
                    className="font-medium"
                    style={{ fontSize: "11.35px", color: "#D8D8D8" }}
                  >
                    {getTime(eventData?.event.startDate?? "")}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-[55.37px] h-[55.37px] flex-shrink-0 flex items-center justify-center border-[1.18px] border-[#F8F8F824] rounded-[17.67px]">
                  <MapPin className="text-white" size={27} />
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">
                    Offline Location
                  </p>
                  <p className="text-xs text-[#D8D8D8]">
                    {eventData?.event.location?? ""}
                  </p>
                </div>
              </div>
            </aside>
          </main>

          <div className="mt-7 flex items-center justify-between">
            <div className=" max-sm:gap-2 gap-4 w-[80vw] md:w-[490px] grid grid-cols-3 max-sm:hidden">
              <button
                className="font-inter flex items-center justify-center md:font-semibold text-white transition-colors max-sm:text-[0.72em] bg-[#FFFFFF0F] max-sm:px-1.5 max-sm:py-2 px-2 py-2.5 rounded-md"
                
              >
                
                
                  Edit Event
                
              </button>
              <button
                className="font-inter flex items-center justify-center md:font-semibold text-white transition-colors max-sm:text-[0.72em] bg-[#FFFFFF0F] max-sm:px-1.5 max-sm:py-2 px-2 py-2.5 rounded-md"
                
              >
                
                  Change Image
                
              </button>
              <button onClick={() => handleShare(shareUrl)}
                 className="font-inter flex items-center justify-center md:font-semibold text-white transition-colors max-sm:text-[0.72em] bg-[#FFFFFF0F] max-sm:px-1.5 max-sm:py-2  px-2 py-2.5 rounded-md"
                
              >
                
                  Share Event
                
              </button>
            </div>
            <div className="flex items-center gap-1 max-md:hidden">
              <a href="#" className="p-2">
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a href="#" className="p-2">
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href="#" className="p-2">
                <XIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <section style={{ marginTop: "62px" }}>
          <SectionHeader
            title="Add Hosts"
            subtitle="Co-host, add guest and event manager"
            titleClassName="text-white font-medium text-[40px] leading-[121%] tracking-[-0.05em]"
            subtitleClassName="text-[#919499] font-medium text-[24px] leading-none"
            buttonText="Add guest"
          />
          <div className="flex flex-col" style={{ gap: "21px" }}>
            {hosts.map((host, index) => (
              <HostItem key={index} host={host} />
            ))}
          </div>
        </section>

        <hr className="mt-[144px] mb-[50px] border-gray-800" />

        <section style={{ marginBottom: "107px" }}>
          <SectionHeader
            title="Edit Visibility"
            subtitle="Determine how people find your event"
            titleClassName="text-white font-medium text-[40px] leading-[121%] tracking-[-0.05em]"
            subtitleClassName="text-[#919499] font-medium text-[24px] leading-none"
          />
          <div
            className="flex items-center justify-between p-4 rounded-lg"
            style={{
              background: "#FFFFFF05",
              border: "0.33px solid #91949926",
              backdropFilter: "blur(10.33px)",
            }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center">
                <ProfileImage className="w-full h-full object-cover rounded-full" />
              </div>
              <div>
                <p className="font-medium text-white max-md:text-[0.9em] truncate max-sm:max-w-[85%] md:text-lg font-inter">
                  Personal
                </p>
                <p  className="max-sm:text-[0.7em] max-sm:max-w-[90%] text-[#666666] font-inter"
                  
                >
                  All your events listed to be public
                </p>
              </div>
            </div>
            <button
              className="flex items-center justify-center gap-2 text-sm transition-colors"
              style={{
                width: "135px",
                height: "42px",
                borderRadius: "7px",
                background: "#FFFFFF05",
                backdropFilter: "blur(20px)",
              }}
            >
              <div className="flex items-center gap-1">
                {" "}
                <PublicIcon className="w-5 h-5" />
                <span className="font-inter font-medium text-white md:text-lg">
                  Public
                </span>
              </div>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OnclickOverviewPage;
