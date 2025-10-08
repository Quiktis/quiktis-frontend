"use client";

import type { NextPage } from "next";
import { Plus, MapPin } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

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

  const barBaseStyle: React.CSSProperties = {
    background: "#FFFFFF0F",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    width: "490px",
    height: "61px",
    margin: "0 -1rem",
    paddingLeft: "32px",
    paddingRight: "62px",
    gap: "20px",
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box",
  };

  const copyAreaWidth = 60;

  const topTextStyle: React.CSSProperties = {
    fontFamily: "Inter",
    fontWeight: 500,
    fontSize: "20px",
    lineHeight: "100%",
    color: "#D2DDDA",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    flexGrow: 1,
    maxWidth: `calc(490px - 32px - 62px - ${copyAreaWidth}px)`,
  };

  const copyStyle: React.CSSProperties = {
    fontFamily: "Inter",
    fontWeight: 500,
    fontSize: "20px",
    lineHeight: "100%",
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
    fontSize: behindFontSize,
    lineHeight: "100%",
    color: "#D2DDDA",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "clip",
    flexGrow: 1,
    maxWidth: `calc(490px - 32px - 62px - ${copyAreaWidth}px)`,
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
        <p
          style={{
            fontFamily: "Inter",
            fontWeight: 500,
            fontSize: "24px",
            lineHeight: "121%",
            color: "#FFFFFF",
          }}
        >
          {host.name}
        </p>
        <p
          style={{
            fontFamily: "Inter",
            fontWeight: 500,
            fontSize: "12.98px",
            lineHeight: "121%",
            color: "#666666",
          }}
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
  <div className="flex items-center justify-between mb-[47px]">
    <div>
      <h2 className={titleClassName}>{title}</h2>
      <p className={subtitleClassName}>{subtitle}</p>
    </div>
    {buttonText && (
      <button
        className="flex items-center gap-3 pl-3 pr-4 transition-colors"
        style={{
          width: "178px",
          height: "60px",
          borderRadius: "9.19px",
          border: "0.26px solid #91949926",
          background: "#FFFFFF0F",
          backdropFilter: "blur(10.33px)",
        }}
      >
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center"
          style={{ backgroundColor: "rgba(49, 46, 129, 0.5)" }}
        >
          <Plus size={20} className="text-indigo-400" />
        </div>
        <span
          style={{
            fontFamily: "Inter",
            fontWeight: 500,
            fontSize: "20px",
            lineHeight: "100%",
            color: "#D2DDDA",
          }}
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
      <div className="max-w-4xl mx-auto w-full mt-24">
        <div className="bg-[#FFFFFF05] border-[0.33px] border-[#91949926] rounded-[11.66px] backdrop-blur-[13.11px] p-6">
          <div className="mb-6 flex justify-start">
            <div className="flex items-center gap-3">
              <button
                className="flex items-center gap-4 rounded-[11.66px] backdrop-blur-[13.11px] hover:bg-white/10 transition-colors"
                style={{
                  width: "237.89px",
                  height: "55.97px",
                  border: "0.33px solid #91949926",
                  background: "#FFFFFF0F",
                  justifyContent: "flex-start",
                  padding: "0 10px",
                }}
              >
                <div
                  className="rounded-lg flex-shrink-0 relative overflow-hidden"
                  style={{
                    backgroundColor: "rgba(255, 242, 0, 0.5)",
                    width: "33.438px",
                    height: "33.438px",
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
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 500,
                    fontSize: "17.27px",
                    lineHeight: "100%",
                    color: "#D2DDDA",
                  }}
                >
                  Invite Guest
                </span>
              </button>
              <button
                className="flex items-center gap-4 rounded-[11.66px] backdrop-blur-[13.11px] hover:bg-white/10 transition-colors"
                style={{
                  width: "237.89px",
                  height: "55.97px",
                  border: "0.33px solid #91949926",
                  background: "rgba(255, 255, 255, 0.06)",
                  justifyContent: "flex-start",
                  padding: "0 10px",
                }}
              >
                <div
                  className="rounded-lg flex-shrink-0 flex items-center justify-center"
                  style={{
                    backgroundColor: "rgba(111, 79, 242, 0.14)",
                    width: "32.730px",
                    height: "32.730px",
                  }}
                >
                  <ShareEventIcon className="w-full h-full object-contain" />
                </div>
                <span
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 500,
                    fontSize: "17.27px",
                    lineHeight: "100%",
                    color: "#D2DDDA",
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
                className="bg-[#CE5620] w-full h-[393px] rounded-[18.62px] p-4 flex flex-col justify-between"
                style={{
                  background: "#CE5620",
                  borderRadius: "18.62px",
                  padding: "1rem",
                }}
              >
                <div className="flex flex-row gap-4">
                  <div
                    className="flex-shrink-0"
                    style={{ width: "232px", height: "230.08px" }}
                  >
                    <img
                      src="/spiral-img.svg"
                      alt="Event decorative graphic"
                      className="w-full h-full object-cover"
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
                      Africa Startup
                      <br />
                      Conference
                    </h1>
                    <div className="flex items-center gap-3">
                      <div className="w-[33.81px] h-[33.81px] flex-shrink-0 flex flex-col items-center justify-center border-[0.72px] border-[#F8F8F824] rounded-[10.79px] overflow-hidden">
                        <div className="w-full text-center bg-[#91949966]">
                          <span className="text-[6px] text-white/80 font-semibold block leading-tight pt-0.5">
                            Sept
                          </span>
                        </div>
                        <span className="text-[15px] font-semibold text-white block flex-grow flex items-center -mt-0.5">
                          30
                        </span>
                      </div>
                      <div>
                        <p
                          className="font-semibold text-white"
                          style={{ fontSize: "11.35px" }}
                        >
                          Thursday, Sep 23
                        </p>
                        <p
                          className="font-medium"
                          style={{ fontSize: "11.35px", color: "#D8D8D8" }}
                        >
                          7:00 PM - 8:30 PM GMT+1
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
                      fontSize: "10px",
                      color: "#FFFFFF8A",
                    }}
                  >
                    Hosted
                  </p>
                  <p
                    style={{
                      fontFamily: "Inter",
                      fontWeight: 500,
                      fontSize: "14px",
                      color: "#FFFFFF",
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
                    peekBehind={0} // can be used overlap and show the text behind
                    behindFontSize="20px"
                  />
                </div>
              </div>
            </div>

            <aside className="p-0 rounded-2xl flex-none w-full md:w-[341.37px]">
              <h3 className="text-lg font-medium text-white mb-4">
                When and Where
              </h3>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-[56px] h-[56px] flex-shrink-0 flex flex-col items-center justify-center border-[1.19px] border-[#F8F8F824] rounded-[17.87px] overflow-hidden">
                  <div className="w-full text-center bg-[#91949966]">
                    <span className="text-[8.28px] text-white-600 font-semibold block leading-tight py-0.5">
                      Sept
                    </span>
                  </div>
                  <span className="text-2xl font-semibold text-white block flex-grow flex items-center -mt-1">
                    30
                  </span>
                </div>
                <div>
                  <p
                    className="font-semibold text-white"
                    style={{ fontSize: "11.35px" }}
                  >
                    Thursday, Sep 23
                  </p>
                  <p
                    className="font-medium"
                    style={{ fontSize: "11.35px", color: "#D8D8D8" }}
                  >
                    7:00 PM - 8:30 PM GMT+1
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
                    Stable Africa, Lagos, Nigeria
                  </p>
                </div>
              </div>
            </aside>
          </main>

          <div className="mt-8 flex items-center justify-between">
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
            <div className="flex items-center gap-1">
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
                <p
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 500,
                    fontSize: "24px",
                    lineHeight: "121%",
                    color: "#FFFFFF",
                  }}
                >
                  Personal
                </p>
                <p
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 500,
                    fontSize: "12.98px",
                    lineHeight: "121%",
                    color: "#666666",
                  }}
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
                <span
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 500,
                    fontSize: "20px",
                    lineHeight: "100%",
                    color: "#FFFFFF",
                  }}
                >
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
