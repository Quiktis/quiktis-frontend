"use client";

import type { NextPage } from "next";
import { Plus, MapPin } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import EventToggle from "@/app/event/[id]/EventToggle";

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

const FacebookIcon = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <img
    src="/icons/facebook-onclick.svg"
    alt="Facebook Icon"
    className={className}
    style={style}
  />
);

const InstagramIcon = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <img
    src="/icons/instagram-onclick.svg"
    alt="Instagram Icon"
    className={className}
    style={style}
  />
);

const XIcon = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <img
    src="/icons/twitter-onclick.svg"
    alt="X Icon"
    className={className}
    style={style}
  />
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

  const baseWidth =
    typeof window !== "undefined" && window.innerWidth < 640
      ? 311.29168701171875
      : 490;

  const barBaseStyle: React.CSSProperties = {
    background: "#FFFFFF0F",
    backdropFilter:
      typeof window !== "undefined" && window.innerWidth < 640
        ? "blur(12.746599197387695px)"
        : "blur(20px)",
    WebkitBackdropFilter:
      typeof window !== "undefined" && window.innerWidth < 640
        ? "blur(12.746599197387695px)"
        : "blur(20px)",
    width: `${baseWidth}px`,
    height:
      typeof window !== "undefined" && window.innerWidth < 640
        ? "38.87712860107422px"
        : "61px",
    margin: "0 -1rem",
    paddingLeft: "25px",
    paddingRight:
      typeof window !== "undefined" && window.innerWidth < 640
        ? "20px" // mobile
        : "62px", // desktop
    gap: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxSizing: "border-box",
  };

  const copyAreaWidth = 60;

  const topTextStyle: React.CSSProperties = {
    fontFamily: "Inter",
    fontWeight: 500,
    fontSize:
      typeof window !== "undefined" && window.innerWidth < 640
        ? "12.75px"
        : "20px",
    lineHeight: "100%",
    verticalAlign: "middle",
    color: "#D2DDDA",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    flexGrow: 1,
    flexShrink: 1,
    maxWidth: `calc(${baseWidth}px - 32px - 16px - ${copyAreaWidth}px)`,
  };

  const copyStyle: React.CSSProperties = {
    fontFamily: "Inter",
    fontWeight: 500,
    fontSize:
      typeof window !== "undefined" && window.innerWidth < 640
        ? "12.75px"
        : "20px",
    lineHeight: "100%",
    verticalAlign: "middle",
    color: "#D2DDDA",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    flexShrink: 0,
    width: `${copyAreaWidth}px`,
  };

  const behindTextStyle: React.CSSProperties = {
    fontFamily: "Inter",
    fontWeight: 500,
    fontSize:
      typeof window !== "undefined" && window.innerWidth < 640
        ? "12.75px"
        : behindFontSize,
    lineHeight: "100%",
    verticalAlign: "middle",
    color: "#D2DDDA",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "clip",
    flexGrow: 1,
    flexShrink: 1,
    maxWidth: `calc(${baseWidth}px - 32px - 16px - ${copyAreaWidth}px)`,
  };

  return (
    <div className={`relative ${className}`} style={{ minWidth: 0 }}>
      <div
        aria-hidden="true"
        style={{
          ...barBaseStyle,
          position: "absolute",
          left: 0,
          top: 0 + peekBehind,
          zIndex: 0,
          overflow: "visible",
          pointerEvents: "none",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
          <div
            style={{
              flex: "1 1 auto",
              maxWidth: `calc(100% - ${copyAreaWidth}px)`,
            }}
          >
            <span style={behindTextStyle}>{behindText}</span>
          </div>

          <div
            style={{
              width: `${copyAreaWidth}px`,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <span style={{ visibility: "hidden", ...copyStyle }}>Copy</span>
          </div>
        </div>
      </div>

      <div
        role="region"
        aria-label="Event link"
        style={{
          ...barBaseStyle,
          position: "relative",
          zIndex: 10,
          overflow: "hidden",
        }}
      >
        <span style={topTextStyle}>{topText}</span>

        <div style={copyStyle} onClick={handleCopy}>
          {copyStatus}
        </div>
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
    className="flex items-center justify-between p-3 sm:p-4 rounded-lg gap-3"
    style={{
      background: "#FFFFFF05",
      border: "0.33px solid #91949926",
      backdropFilter: "blur(10.33px)",
    }}
  >
    <div className="flex items-center gap-1.5 sm:gap-3 flex-1 min-w-0">
      <div className="w-[27.636px] h-[27.636px] sm:w-12 sm:h-12 rounded-full flex-shrink-0 flex items-center justify-center overflow-hidden bg-yellow-400">
        <ProfileImage
          className="w-full h-full object-cover rounded-full"
          alt={host.name}
        />
      </div>
      <div className="flex-1 min-w-0">
        <p
          className="truncate text-[14.5px] sm:text-[clamp(14px,3.5vw,24px)] leading-[121%] text-[#FFFFFF] font-medium"
          style={{ fontFamily: "Inter" }}
        >
          {host.name}
        </p>
        <p
          className="truncate text-[12px] sm:text-[clamp(10px,2.5vw,12.98px)] leading-[121%] text-[#666666] font-medium"
          style={{ fontFamily: "Inter" }}
        >
          {host.email}
        </p>
      </div>
    </div>
    <span
      className={
        `font-medium py-1.5 px-3 sm:px-4 flex items-center justify-center gap-1 sm:gap-1 flex-shrink-0 min-w-fit ` +
        `w-[111px] h-[30.87417px] rounded-[3.68px] ` +
        (host.role === "Creator"
          ? `bg-[#7BFF000F] text-[#FFFFFF]`
          : `bg-[#F74FB30F] text-[#FFFFFF]`) +
        ` text-[14.3px] leading-[121%] ` +
        ` sm:w-[151px] sm:h-[42px] sm:rounded-[5px] sm:cursor-pointer sm:justify-center sm:text-[20px] sm:leading-[121%] sm:font-medium`
      }
      style={{ fontFamily: "Inter" }}
    >
      {host.role === "Creator" ? (
        <CreatorIcon className="w-[11.761589px] h-[11.761589px] sm:w-4 sm:h-4" />
      ) : (
        <GuestIcon className="w-[11.761589px] h-[11.761589px] sm:w-4 sm:h-4" />
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
  <div className="mb-6 sm:flex sm:items-center sm:justify-between sm:mb-[47px]">
    <div className="flex items-center justify-between gap-3 mb-0.5 sm:hidden">
      <h2 className={titleClassName + " flex-1 min-w-0"}>{title}</h2>
      {buttonText && (
        <button
          className={
            "flex items-center justify-center gap-2 px-3 transition-colors flex-shrink-0 whitespace-nowrap " +
            "w-[102.6026px] h-[34.58515px] rounded-[5.3px] border-[0.15px] bg-[#FFFFFF0F] backdrop-blur-[5.9564px]"
          }
          style={{
            borderColor: "#91949926",
            position: "relative",
            top: "12px",
          }}
        >
          <div
            className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: "rgba(49, 46, 129, 0.5)" }}
          >
            <Plus size={18.438} className="text-indigo-400" />
          </div>
          <span
            className="font-inter font-medium text-[11.53px] text-[#D2DDDA] whitespace-nowrap"
            style={{ lineHeight: "100%", display: "block" }}
          >
            {buttonText}
          </span>
        </button>
      )}
    </div>
    <p
      className={
        subtitleClassName +
        " break-words whitespace-normal sm:hidden max-w-[calc(100%_-_140px)]"
      }
      style={{
        wordBreak: "break-word",
        marginTop:
          typeof window !== "undefined" && window.innerWidth < 640
            ? "3px"
            : undefined,
      }}
    >
      {subtitle === "Co-host, add guest and event manager" ? (
        <>
          <span>Co-host, add guest and</span>
          <br className="sm:hidden" />
          <span>event manager</span>
        </>
      ) : (
        subtitle
      )}
    </p>

    <div className="hidden sm:block sm:flex-1">
      <h2 className={titleClassName}>{title}</h2>
      <p className={subtitleClassName}>{subtitle}</p>
    </div>
    {buttonText && (
      <button
        className={
          "hidden sm:flex items-center gap-3 px-3 transition-colors flex-shrink-0 " +
          "sm:w-auto sm:h-[60px] sm:rounded-[9.19px] sm:border-[0.26px] sm:backdrop-blur-[10.33px] sm:justify-start"
        }
        style={{
          borderColor: "#91949926",
          background: "#FFFFFF0F",
        }}
      >
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: "rgba(49, 46, 129, 0.5)" }}
        >
          <Plus size={20} className="text-indigo-400" />
        </div>
        <span
          className="font-inter font-medium text-[clamp(14px,3.5vw,20px)] text-[#D2DDDA]"
          style={{ lineHeight: "100%", display: "block" }}
        >
          {buttonText}
        </span>
      </button>
    )}
  </div>
);

const OnclickOverviewPage: NextPage = () => {
  const hosts: Host[] = [
    {
      name: "Dare Sobaloju Pamilerin",
      email: "Pamilerincaleb@gmail.com",
      role: "Creator",
    },
    {
      name: "Dare Sobaloju Pamilerin",
      email: "Pamilerincaleb@gmail.com",
      role: "Guest",
    },
  ];

  return (
    <div className="bg-[#131517] min-h-screen p-4 sm:p-6 md:p-8 text-gray-300 font-sans flex items-center justify-center">
      <div className="max-w-5xl mx-auto w-full mt-40">
        <div className="mb-8 md:mb-12">
          <EventToggle eventId="123" defaultTab="overview" />
        </div>

        <div
          className="bg-[#FFFFFF05] border-[0.33px] border-[#91949926] rounded-[11.66px] backdrop-blur-[13.11px] p-6"
          style={{
            ...(typeof window !== "undefined" && window.innerWidth < 640
              ? {
                  width: "100%",
                  maxWidth: "397px",
                  height: "auto",
                  minHeight: "600px",
                  borderRadius: "9.56px",
                  border: "0.32px solid #91949926",
                  boxSizing: "border-box",
                }
              : {}),
          }}
        >
          <div
            className="mb-6 sm:mb-6 flex justify-start"
            style={
              typeof window !== "undefined" && window.innerWidth < 640
                ? { marginBottom: "22.95px" }
                : {}
            }
          >
            <div className="flex items-center gap-3">
              <button
                className="flex items-center rounded-[7.43px] sm:rounded-[11.7px] backdrop-blur-[13.11px] hover:bg-white/10 transition-colors w-[151.6173858642578px] h-[35.674678802490234px] sm:w-[237.89px] sm:h-[55.97px] border-[0.21px] sm:border-[0.33px] justify-start px-2 sm:px-[10px]"
                style={{
                  borderColor: "#91949926",
                  background: "rgba(255, 255, 255, 0.06)",
                  borderWidth: "0.21px",
                  borderRadius:
                    typeof window !== "undefined" && window.innerWidth >= 640
                      ? "11.7px"
                      : "7.43px",
                }}
              >
                <div
                  className="flex-shrink-0 relative overflow-hidden w-[20px] h-[20px] sm:w-[33.438px] sm:h-[33.438px] rounded-[5px] sm:rounded-lg"
                  style={{
                    backgroundColor: "rgba(255, 242, 0, 0.5)",
                  }}
                >
                  <InviteGuestIcon
                    className="absolute bottom-0 left-0 w-full"
                    style={{
                      height: "auto",
                      objectFit: "fill",
                    }}
                  />
                </div>
                <span
                  className="font-medium text-[12.5px] sm:text-[17.27px]"
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 500,
                    lineHeight: "100%",
                    color: "#D2DDDA",
                    marginLeft: "3.5px",
                    marginRight: "0px",
                    ...(typeof window !== "undefined" &&
                    window.innerWidth >= 640
                      ? { marginLeft: "6.5px" }
                      : {}),
                  }}
                >
                  Invite Guest
                </span>
              </button>
              <button
                className="flex items-center rounded-[7.43px] sm:rounded-[11.7px] backdrop-blur-[13.11px] hover:bg-white/10 transition-colors w-[151.6173858642578px] h-[35.674678802490234px] sm:w-[237.89px] sm:h-[55.97px] border-[0.21px] sm:border-[0.33px] justify-start px-2 sm:px-[10px]"
                style={{
                  borderColor: "#91949926",
                  background: "rgba(255, 255, 255, 0.06)",
                  borderWidth: "0.21px",
                  borderRadius:
                    typeof window !== "undefined" && window.innerWidth >= 640
                      ? "11.7px"
                      : "7.43px",
                }}
              >
                <div
                  className="flex-shrink-0 flex items-center justify-center w-[20px] h-[20px] sm:w-[32.730px] sm:h-[32.730px] rounded-[5px] sm:rounded-lg"
                  style={{
                    backgroundColor: "rgba(111, 79, 242, 0.14)",
                  }}
                >
                  <ShareEventIcon className="w-full h-full object-contain" />
                </div>
                <span
                  className="font-medium text-[12.5px] sm:text-[17.27px]"
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 500,
                    lineHeight: "100%",
                    color: "#D2DDDA",
                    marginLeft: "3.5px",
                    marginRight: "0px",
                    ...(typeof window !== "undefined" &&
                    window.innerWidth >= 640
                      ? { marginLeft: "6.5px" }
                      : {}),
                  }}
                >
                  Share Event
                </span>
              </button>
            </div>
          </div>

          <main className="flex flex-col md:flex-row gap-[47px]">
            <div className="flex-none w-full md:w-[490px]">
              <div
                className="bg-[#CE5620] w-full sm:w-full h-[250.47067260742188px] sm:h-[393px] rounded-[11.87px] sm:rounded-[18.62px] p-4 flex flex-col justify-between"
                style={{
                  background: "#CE5620",
                  borderRadius: "11.87px",
                  width: "312.29168701171875px",
                  height: "250.47067260742188px",
                  opacity: 1,
                  ...(typeof window !== "undefined" && window.innerWidth >= 640
                    ? {
                        borderRadius: "18.62px",
                        width: undefined,
                        height: undefined,
                      }
                    : {}),
                  padding: "1rem",
                }}
              >
                <div className="flex flex-row gap-4">
                  <div
                    className="flex-shrink-0"
                    style={{
                      width:
                        typeof window !== "undefined" && window.innerWidth < 640
                          ? "147.86px"
                          : "232px",
                      height:
                        typeof window !== "undefined" && window.innerWidth < 640
                          ? "146.64px"
                          : "230.08px",
                    }}
                  >
                    <img
                      src="/spiral-img.svg"
                      alt="Event decorative graphic"
                      className="w-full h-full object-cover"
                      style={{
                        borderRadius: "16.75px",
                        width:
                          typeof window !== "undefined" &&
                          window.innerWidth < 640
                            ? "147.86px"
                            : "232px",
                        height:
                          typeof window !== "undefined" &&
                          window.innerWidth < 640
                            ? "146.64px"
                            : "230.08px",
                      }}
                    />
                  </div>
                  <div
                    className="flex-grow flex flex-col justify-start gap-4"
                    style={
                      typeof window !== "undefined" && window.innerWidth < 640
                        ? { gap: "6px" }
                        : {}
                    }
                  >
                    <h1
                      className="font-normal text-white"
                      style={{
                        fontFamily: "Instrument Serif",
                        fontWeight: 400,
                        fontStyle: "normal",
                        color: "#FFFFFF",
                        width:
                          typeof window !== "undefined" &&
                          window.innerWidth < 640
                            ? "109px"
                            : undefined,
                        height:
                          typeof window !== "undefined" &&
                          window.innerWidth < 640
                            ? "42px"
                            : undefined,
                        fontSize:
                          typeof window !== "undefined" &&
                          window.innerWidth < 640
                            ? "19.15px"
                            : "30px",
                        lineHeight:
                          typeof window !== "undefined" &&
                          window.innerWidth < 640
                            ? "20.82px"
                            : "1.2",
                        letterSpacing: 0,
                        opacity: 1,
                        verticalAlign: "middle",
                      }}
                    >
                      Africa Startup
                      <br />
                      Conference
                    </h1>

                    <div
                      className="flex items-center gap-3"
                      style={
                        typeof window !== "undefined" && window.innerWidth < 640
                          ? { gap: "8px" }
                          : {}
                      }
                    >
                      <div
                        className="w-[33.81px] h-[33.81px] flex-shrink-0 flex flex-col items-center justify-center border-[0.72px] border-[#F8F8F824] rounded-[10.79px] overflow-hidden"
                        style={
                          typeof window !== "undefined" &&
                          window.innerWidth < 640
                            ? {
                                width: "22px",
                                height: "22px",
                                borderRadius: "7px",
                              }
                            : {}
                        }
                      >
                        <div
                          className="w-full text-center bg-[#91949966]"
                          style={
                            typeof window !== "undefined" &&
                            window.innerWidth < 640
                              ? { borderRadius: "7px 7px 0 0" }
                              : {}
                          }
                        >
                          <span
                            className="text-white/80 font-semibold block leading-tight pt-0.5"
                            style={
                              typeof window !== "undefined" &&
                              window.innerWidth < 640
                                ? { fontSize: "3.5px" } // mobile
                                : { fontSize: "6px" } // desktop
                            }
                          >
                            Sept
                          </span>
                        </div>

                        <span
                          className="font-semibold text-white block flex-grow flex items-center -mt-0.5"
                          style={
                            typeof window !== "undefined" &&
                            window.innerWidth < 640
                              ? { fontSize: "9px" } // mobile
                              : { fontSize: "15px" } // desktop
                          }
                        >
                          30
                        </span>
                      </div>

                      <div>
                        <p
                          className="font-semibold text-white"
                          style={
                            typeof window !== "undefined" &&
                            window.innerWidth < 640
                              ? { fontSize: "7.23px" } // mobile
                              : { fontSize: "11.35px" } // desktop
                          }
                        >
                          Thursday, Sep 23
                        </p>
                        <p
                          className="font-medium"
                          style={
                            typeof window !== "undefined" &&
                            window.innerWidth < 640
                              ? { fontSize: "6.5px", color: "#D8D8D8" } // mobile
                              : { fontSize: "11.35px", color: "#D8D8D8" } // desktop
                          }
                        >
                          7:00 PM - 8:30 PM GMT+1
                        </p>
                      </div>
                    </div>
                    <div
                      className="flex items-center gap-3"
                      style={
                        typeof window !== "undefined" && window.innerWidth < 640
                          ? { gap: "8px" }
                          : {}
                      }
                    >
                      <div
                        className="flex-shrink-0 flex items-center justify-center border-[0.72px] border-[#F8F8F824] rounded-[10.79px]"
                        style={
                          typeof window !== "undefined" &&
                          window.innerWidth < 640
                            ? {
                                width: "22px",
                                height: "22px",
                                borderRadius: "7px",
                              }
                            : {
                                width: "33.81px",
                                height: "33.81px",
                                borderRadius: "10.79px",
                              }
                        }
                      >
                        <MapPin
                          size={
                            typeof window !== "undefined" &&
                            window.innerWidth < 640
                              ? 10
                              : 16
                          }
                          className="text-white"
                        />
                      </div>
                      <div>
                        <p
                          className="font-semibold"
                          style={
                            typeof window !== "undefined" &&
                            window.innerWidth < 640
                              ? { fontSize: "7.23px", color: "#FFFFFF" } // mobile
                              : { fontSize: "10.55px", color: "#FFFFFF" } // desktop
                          }
                        >
                          Offline Location
                        </p>
                        <p
                          className="font-medium"
                          style={
                            typeof window !== "undefined" &&
                            window.innerWidth < 640
                              ? { fontSize: "6.3px", color: "#D8D8D8" } // mobile
                              : { fontSize: "10.55px", color: "#D8D8D8" } // desktop
                          }
                        >
                          Stable Africa, Lagos, Nigeria
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-white">
                  <p
                    className="text-xs"
                    style={{
                      fontFamily: "Inter",
                      fontWeight: 500,
                      fontSize:
                        typeof window !== "undefined" && window.innerWidth < 640
                          ? "6.37px" // this is mobile
                          : "10px",
                      lineHeight: "100%",
                      letterSpacing: 0,
                      verticalAlign: "middle",
                      color: "#FFFFFF8A",
                    }}
                  >
                    Hosted
                  </p>
                  <p
                    style={{
                      fontFamily: "Inter",
                      fontWeight: 500,
                      fontSize:
                        typeof window !== "undefined" && window.innerWidth < 640
                          ? "8.92px" // this is mobile
                          : "14px",
                      lineHeight: "100%",
                      letterSpacing: 0,
                      verticalAlign: "middle",
                      color: "#FFFFFF",
                      marginTop: "3px",
                    }}
                  >
                    Dare Sobaloju
                  </p>
                </div>

                <div>
                  <StackedGlassLinkBars
                    topText="Quiktis.com/xytrh"
                    topCopyUrl="Quiktis.com/xytrh"
                    behindText="Where Africa startup find oppurtunity"
                    peekBehind={0}
                    behindFontSize="20px"
                  />
                </div>
              </div>

              <div
                className="mt-4 sm:mt-4 flex items-center justify-start gap-2 md:hidden flex-wrap"
                style={
                  typeof window !== "undefined" && window.innerWidth < 640
                    ? { marginTop: "17.85px" }
                    : {}
                }
              >
                <button
                  className="flex items-center justify-center gap-2 font-semibold text-white transition-colors"
                  style={{
                    width:
                      typeof window !== "undefined" && window.innerWidth <= 375
                        ? "82px"
                        : "91.13818359375px",
                    height: "28.042518615722656px",
                    borderRadius: "5.85px",
                    border: "0.16px solid #91949926",
                    background: "#FFFFFF0F",
                    backdropFilter: "blur(10.33px)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Inter",
                      fontWeight: 500,
                      fontSize:
                        typeof window !== "undefined" &&
                        window.innerWidth <= 375
                          ? "9.5px" // iPhone SE
                          : "10.2px", // iPhone 14 Plus
                      lineHeight: "100%",
                      color: "#D2DDDA",
                    }}
                  >
                    Edit Event
                  </span>
                </button>
                <button
                  className="flex items-center justify-center gap-2 font-semibold text-white transition-colors"
                  style={{
                    width:
                      typeof window !== "undefined" && window.innerWidth <= 375
                        ? "92px" // iPhone SE
                        : "102.61012268066406px", // iPhone 14 Plus and larger
                    height: "28.042518615722656px",
                    borderRadius: "5.85px",
                    border: "0.16px solid #91949926",
                    background: "#FFFFFF0F",
                    backdropFilter: "blur(10.33px)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Inter",
                      fontWeight: 500,
                      fontSize:
                        typeof window !== "undefined" &&
                        window.innerWidth <= 375
                          ? "9.5px" // iPhone SE
                          : "10.2px", // iPhone 14 Plus
                      lineHeight: "100%",
                      color: "#D2DDDA",
                    }}
                  >
                    Change Image
                  </span>
                </button>
                <button
                  className="flex items-center justify-center gap-2 font-semibold text-white transition-colors"
                  style={{
                    width:
                      typeof window !== "undefined" && window.innerWidth <= 375
                        ? "82px" // iPhone SE
                        : "91.13818359375px", // iPhone 14 Plus and larger
                    height: "28.042518615722656px",
                    borderRadius: "5.85px",
                    border: "0.16px solid #91949926",
                    background: "#FFFFFF0F",
                    backdropFilter: "blur(10.33px)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Inter",
                      fontWeight: 500,
                      fontSize:
                        typeof window !== "undefined" &&
                        window.innerWidth <= 375
                          ? "9.5px" // iPhone SE
                          : "10.2px", // iPhone 14 Plus
                      lineHeight: "100%",
                      color: "#D2DDDA",
                    }}
                  >
                    Share Event
                  </span>
                </button>
              </div>
            </div>

            <aside
              className="p-0 rounded-2xl flex-none w-full md:w-[341.37px]"
              style={
                typeof window !== "undefined" && window.innerWidth < 640
                  ? { marginTop: "-4px" }
                  : {}
              }
            >
              <h3
                className="mb-4 sm:mb-4"
                style={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontSize:
                    typeof window !== "undefined" && window.innerWidth < 640
                      ? "20.39px"
                      : "32px",
                  lineHeight: "100%",
                  color: "#FFFFFF",
                  letterSpacing: 0,
                  verticalAlign: "middle",
                  ...(typeof window !== "undefined" && window.innerWidth < 640
                    ? { marginBottom: "17.21px" }
                    : {}),
                }}
              >
                When and Where
              </h3>

              <div
                className="flex items-center gap-2 mb-4 sm:mb-4"
                style={
                  typeof window !== "undefined" && window.innerWidth < 640
                    ? { marginBottom: "17.21px" }
                    : {}
                }
              >
                <div
                  className="flex-shrink-0 flex flex-col items-center justify-center overflow-hidden"
                  style={{
                    width:
                      typeof window !== "undefined" && window.innerWidth < 640
                        ? "40px" // mobile
                        : "56px", // desktop
                    height:
                      typeof window !== "undefined" && window.innerWidth < 640
                        ? "40px" // mobile
                        : "56px", // desktop
                    borderRadius:
                      typeof window !== "undefined" && window.innerWidth < 640
                        ? "14px" // mobile
                        : "17.87px", // desktop
                    border: "1.19px solid #F8F8F824",

                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height:
                        typeof window !== "undefined" && window.innerWidth < 640
                          ? "36%"
                          : "34%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      background: "#91949966",
                      borderTopLeftRadius:
                        typeof window !== "undefined" && window.innerWidth < 640
                          ? "14px"
                          : "15px",
                      borderTopRightRadius:
                        typeof window !== "undefined" && window.innerWidth < 640
                          ? "14px"
                          : "15px",
                      overflow: "hidden",
                    }}
                  >
                    <span
                      style={{
                        display: "block",
                        fontSize:
                          typeof window !== "undefined" &&
                          window.innerWidth < 640
                            ? "5px" // mobile "Sept"
                            : "8px", // desktop "Sept"
                        color: "#FFFFFF",
                        fontWeight: 600,
                        lineHeight: "1",
                        paddingTop: "2px",
                        paddingBottom: "2px",
                      }}
                    >
                      Sept
                    </span>
                  </div>

                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize:
                        typeof window !== "undefined" && window.innerWidth < 640
                          ? "15px"
                          : "23px",
                      fontWeight: 700,
                      color: "#FFFFFF",
                      lineHeight: "1",
                      flex: "1 0 auto",
                    }}
                  >
                    30
                  </span>
                </div>

                <div>
                  <p
                    style={{
                      fontFamily: "Inter",
                      fontWeight:
                        typeof window !== "undefined" && window.innerWidth < 640
                          ? 600 // MOBILE
                          : 600, // DESKTOP
                      fontSize:
                        typeof window !== "undefined" && window.innerWidth < 640
                          ? "12.75px" // MOBILE
                          : "20px", // DESKTOP
                      lineHeight:
                        typeof window !== "undefined" && window.innerWidth < 640
                          ? "17.85px"
                          : "normal",
                      color: "#FFFFFF",
                      margin: 0,
                    }}
                  >
                    Thursday, Sep 23
                  </p>
                  <p
                    style={{
                      fontFamily: "Inter",
                      fontWeight: 500,
                      fontSize:
                        typeof window !== "undefined" && window.innerWidth < 640
                          ? "12.75px"
                          : "16px",
                      lineHeight:
                        typeof window !== "undefined" && window.innerWidth < 640
                          ? "17.85px"
                          : "normal",
                      color: "#D8D8D8",
                      margin: 0,
                    }}
                  >
                    7:00 PM - 8:30 PM GMT+1
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div
                  style={{
                    width:
                      typeof window !== "undefined" && window.innerWidth < 640
                        ? "40px"
                        : "56px",
                    height:
                      typeof window !== "undefined" && window.innerWidth < 640
                        ? "40px"
                        : "56px",
                    borderRadius:
                      typeof window !== "undefined" && window.innerWidth < 640
                        ? "14px"
                        : "17.87px",
                    border: "1.18px solid #F8F8F824",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MapPin
                    className="text-white"
                    size={
                      typeof window !== "undefined" && window.innerWidth < 640
                        ? 20
                        : 24
                    }
                  />
                </div>

                <div>
                  <p
                    style={{
                      fontFamily: "Inter",
                      fontWeight:
                        typeof window !== "undefined" && window.innerWidth < 640
                          ? 600
                          : 500,
                      fontSize:
                        typeof window !== "undefined" && window.innerWidth < 640
                          ? "12.75px"
                          : "20px",
                      lineHeight:
                        typeof window !== "undefined" && window.innerWidth < 640
                          ? "17.85px"
                          : "normal",
                      color: "#FFFFFF",
                      margin: 0,
                    }}
                  >
                    Offline Location
                  </p>
                  <p
                    style={{
                      fontFamily: "Inter",
                      fontWeight: 500,
                      fontSize:
                        typeof window !== "undefined" && window.innerWidth < 640
                          ? "12.75px"
                          : "16px",
                      lineHeight:
                        typeof window !== "undefined" && window.innerWidth < 640
                          ? "17.85px"
                          : "normal",
                      color: "#D8D8D8",
                      margin: 0,
                    }}
                  >
                    Stable Africa, Lagos, Nigeria
                  </p>
                </div>
              </div>
            </aside>
          </main>

          <div
            className="flex items-center mt-4 sm:mt-4 md:hidden"
            style={{
              gap: "0px",
              ...(typeof window !== "undefined" && window.innerWidth < 640
                ? { marginTop: "30px" }
                : {}),
            }}
          >
            <a href="#" className="p-2">
              <FacebookIcon
                style={{
                  width: "23.052631378173828px",
                  height: "20.892269134521484px",
                  opacity: 1,
                }}
              />
            </a>
            <a href="#" className="p-2">
              <InstagramIcon
                style={{
                  width: "23.052631378173828px",
                  height: "20.892269134521484px",
                  opacity: 1,
                }}
              />
            </a>
            <a href="#" className="p-2">
              <XIcon
                style={{
                  width: "23.052631378173828px",
                  height: "20.892269134521484px",
                  opacity: 1,
                }}
              />
            </a>
          </div>

          <div className="mt-8 hidden md:flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                className="flex items-center justify-center gap-2 font-semibold text-white transition-colors"
                style={{
                  width: "143px",
                  height: "44px",
                  borderRadius: "9.19px",
                  border: "0.26px solid #91949926",
                  background: "#FFFFFF0F",
                  backdropFilter: "blur(10.33px)",
                }}
              >
                <span
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "100%",
                    color: "#D2DDDA",
                  }}
                >
                  Edit Event
                </span>
              </button>
              <button
                className="flex items-center justify-center gap-2 font-semibold text-white transition-colors"
                style={{
                  width: "161px",
                  height: "44px",
                  borderRadius: "9.19px",
                  border: "0.26px solid #91949926",
                  background: "#FFFFFF0F",
                  backdropFilter: "blur(10.33px)",
                }}
              >
                <span
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "100%",
                    color: "#D2DDDA",
                  }}
                >
                  Change Image
                </span>
              </button>
              <button
                className="flex items-center justify-center gap-2 font-semibold text-white transition-colors"
                style={{
                  width: "143px",
                  height: "44px",
                  borderRadius: "9.19px",
                  border: "0.26px solid #91949926",
                  background: "#FFFFFF0F",
                  backdropFilter: "blur(10.33px)",
                }}
              >
                <span
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "100%",
                    color: "#D2DDDA",
                  }}
                >
                  Share Event
                </span>
              </button>
            </div>
            <div className="flex items-center">
              <div style={{ display: "flex", gap: "1px" /* DESKTOP gap */ }}>
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
        </div>

        <section
          style={{
            marginTop:
              typeof window !== "undefined" && window.innerWidth < 640
                ? "65px" //mobile
                : "62px", // desktop
          }}
        >
          <SectionHeader
            title="Add Hosts"
            subtitle="Co-host, add guest and event manager"
            titleClassName={
              "text-white font-medium text-[23.06px] leading-[121%] tracking-[-0.05em] sm:text-[clamp(20px,5vw,40px)]"
            }
            subtitleClassName={
              "text-[#919499] font-medium text-[13.83px] leading-[100%] align-middle sm:text-[clamp(12px,3.5vw,24px)] sm:leading-none mt-1 sm:mt-1"
            }
            buttonText="Add guest"
          />
          <div
            className="flex flex-col"
            style={{
              gap:
                typeof window !== "undefined" && window.innerWidth < 640
                  ? "12px"
                  : "16px",
              marginTop:
                typeof window !== "undefined" && window.innerWidth < 640
                  ? "24px"
                  : undefined,
            }}
          >
            {hosts.map((host, index) => (
              <HostItem key={index} host={host} />
            ))}
          </div>
        </section>

        <hr
          className="mt-[50px] sm:mt-[144px] mb-[30px] sm:mb-[50px] border-gray-800"
          style={{
            marginTop:
              typeof window !== "undefined" && window.innerWidth < 640
                ? "106.31px"
                : undefined,
            marginBottom:
              typeof window !== "undefined" && window.innerWidth < 640
                ? "29px"
                : undefined,
          }}
        />

        <section style={{ marginBottom: "50px" }} className="sm:mb-[107px]">
          <div
            className="mb-6 sm:hidden"
            style={{
              marginBottom:
                typeof window !== "undefined" && window.innerWidth < 640
                  ? "4px"
                  : undefined,
            }}
          >
            <h2
              style={{
                fontFamily: "Inter",
                fontWeight: 500,
                fontSize: "23.72px", // mobile
                lineHeight: "121%",
                letterSpacing: "-5%",
                color: "#FFFFFF",
              }}
            >
              Edit Visibility
            </h2>
            <p
              style={{
                fontFamily: "Inter",
                fontWeight: 500,
                fontSize: "14.23px", // mobile
                lineHeight: "100%",
                letterSpacing: 0,
                color: "#919499",
                verticalAlign: "middle",
                marginTop: "4px",
              }}
            >
              Determine how people find your event
            </p>
          </div>
          {/* Desktop header */}
          <SectionHeader
            title="Edit Visibility"
            subtitle="Determine how people find your event"
            titleClassName={
              "hidden sm:block text-white font-medium text-[clamp(20px,5vw,40px)] leading-[121%] tracking-[-0.05em]"
            }
            subtitleClassName={
              "hidden sm:block text-[#919499] font-medium text-[clamp(12px,3.5vw,24px)] leading-none mt-1"
            }
          />
          <div
            className="flex items-center justify-between p-3 sm:p-4 rounded-lg gap-3"
            style={{
              background: "#FFFFFF05",
              border: "0.33px solid #91949926",
              backdropFilter: "blur(10.33px)",
            }}
          >
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex-shrink-0 flex items-center justify-center bg-yellow-400">
                <ProfileImage className="w-full h-full object-cover rounded-full" />
              </div>
              <div className="flex-1 min-w-0">
                <p
                  className="truncate"
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 500,
                    fontSize:
                      typeof window !== "undefined" && window.innerWidth < 640
                        ? "15.91px"
                        : "clamp(14px, 3.5vw, 24px)",
                    lineHeight: "121%",
                    color:
                      typeof window !== "undefined" && window.innerWidth < 640
                        ? "#FFFFFF"
                        : "#FFFFFF",
                  }}
                >
                  Personal
                </p>
                <p
                  className="truncate"
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 500,
                    fontSize:
                      typeof window !== "undefined" && window.innerWidth < 640
                        ? "12px"
                        : "clamp(10px, 2.5vw, 12.98px)",
                    lineHeight: "121%",
                    color:
                      typeof window !== "undefined" && window.innerWidth < 640
                        ? "#666666"
                        : "#666666",
                  }}
                >
                  All your events listed to be public
                </p>
              </div>
            </div>
            <button
              className="flex items-center justify-center gap-1.5 sm:gap-2 text-sm transition-colors flex-shrink-0 px-3 sm:px-4"
              style={{
                minWidth: "fit-content",
                height: "36px",
                borderRadius: "7px",
                background: "#FFFFFF05",
                backdropFilter: "blur(20px)",
              }}
            >
              <PublicIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              <span
                style={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontSize:
                    typeof window !== "undefined" && window.innerWidth < 640
                      ? "13.26px"
                      : "clamp(12px, 3vw, 20px)",
                  lineHeight: "100%",
                  color:
                    typeof window !== "undefined" && window.innerWidth < 640
                      ? "#D2DDDA"
                      : "#FFFFFF",
                  verticalAlign: "middle",
                }}
              >
                Public
              </span>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OnclickOverviewPage;
