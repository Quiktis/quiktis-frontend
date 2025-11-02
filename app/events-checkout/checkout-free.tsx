"use client";

import Image from "next/image";
import { MapPin, Copy, Share2, Mail, Phone } from "lucide-react";
import { useState, useRef, useEffect } from "react";

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
  behindFontSize = "10px",
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

  const copyAreaWidth = 40;

  const barBaseStyle: React.CSSProperties = {
    background: "rgba(255, 255, 255, 0.06)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    width: "100%",
    height: "28px",
    paddingLeft: "10px",
    paddingRight: "10px",
    gap: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxSizing: "border-box",
    borderRadius: "0px",
  };

  const topTextStyle: React.CSSProperties = {
    fontFamily: "Inter",
    fontWeight: 500,
    fontSize: "11px",
    lineHeight: "100%",
    verticalAlign: "middle",
    color: "#D2DDDA",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    flexGrow: 1,
    flexShrink: 1,
  };

  const copyStyle: React.CSSProperties = {
    fontFamily: "Inter",
    fontWeight: 500,
    fontSize: "11px",
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
    fontSize: behindFontSize,
    lineHeight: "100%",
    verticalAlign: "middle",
    color: "#D2DDDA",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "clip",
    flexGrow: 1,
    flexShrink: 1,
  };

  return (
    <div
      className={`relative ${className}`}
      style={{ minWidth: 0, width: "100%" }}
    >
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

export default function CheckoutFree() {
  const [copied, setCopied] = useState(false);
  const [showTicketPopup, setShowTicketPopup] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState<string | null>(null);
  const [ticketQty, setTicketQty] = useState(1);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };

  const handleTicketSelect = (ticketType: string) => {
    setSelectedTicket(ticketType);
    setTicketQty(1);
  };

  const incrementQty = () => setTicketQty((prev) => prev + 1);
  const decrementQty = () => setTicketQty((prev) => (prev > 1 ? prev - 1 : 1));

  const handleBuyTicket = () => {
    console.log(`Buying ${ticketQty} x ${selectedTicket}`);
    setShowTicketPopup(false);
    setSelectedTicket(null);
    setTicketQty(1);
  };

  return (
    <div className="bg-[#131517] min-h-screen text-gray-300 font-sans p-4 sm:p-6 md:p-8">
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Hide scrollbar but keep scroll functionality */
        .hide-scrollbar {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE and Edge */
        }

        .hide-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
      `}</style>
      <div className="max-w-[1250px] mx-auto pt-28 px-4 sm:px-6 md:px-12 lg:px-16 pb-24">
        <main className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* TOP HEADER */}
            <section>
              <div
                role="button"
                aria-label="Public"
                tabIndex={0}
                style={{
                  width: 135,
                  height: 42,
                  background: "#FFFFFF0F",
                  backdropFilter: "blur(20px)",
                  borderRadius: 7,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 2,
                  padding: "0 12px",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    width: 22,
                    height: 22,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flex: "0 0 auto",
                  }}
                >
                  <Image
                    src="/icons/global-icon.svg"
                    alt="Public"
                    width={22}
                    height={22}
                    priority
                  />
                </div>
                <span
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 500,
                    fontStyle: "normal",
                    fontSize: 20,
                    lineHeight: "100%",
                    color: "#D2DDDA",
                    display: "inline-block",
                    textAlign: "center",
                  }}
                >
                  Public
                </span>
              </div>

              <div style={{ height: "39px" }} />

              <h1
                style={{
                  fontFamily: "Instrument Serif",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontSize: "54.11px",
                  lineHeight: "100%",
                  letterSpacing: 0,
                  color: "#FFFFFF",
                  margin: 0,
                  verticalAlign: "middle",
                }}
              >
                Africa Startup Conference
              </h1>

              <div style={{ height: "42px" }} />

              <div>
                <div className="flex items-start gap-5">
                  {/* Date container */}
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: 17.87,
                      border: "1.19px solid #F8F8F824",
                      display: "flex",
                      flexDirection: "column",
                      background: "transparent",
                      position: "relative",
                      overflow: "hidden",
                      padding: 0,
                    }}
                  >
                    {/* Sept*/}
                    <div
                      style={{
                        width: "100%",
                        background: "#91949966",
                        height: 18,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontWeight: 600,
                          fontStyle: "normal",
                          fontSize: 8.28,
                          lineHeight: 1,
                          color: "#FFFFFF",
                          letterSpacing: 0,
                          verticalAlign: "middle",
                        }}
                      >
                        Sept
                      </span>
                    </div>
                    <div
                      style={{
                        flex: 1,
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontWeight: 600,
                          fontStyle: "normal",
                          fontSize: 23.19,
                          lineHeight: 1,
                          color: "#FFFFFF",
                          letterSpacing: 0,
                          verticalAlign: "middle",
                        }}
                      >
                        30
                      </span>
                    </div>
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 600,
                        fontStyle: "normal",
                        fontSize: 20,
                        lineHeight: "28px",
                        letterSpacing: 0,
                        color: "#FFFFFF",
                        margin: 0,
                        verticalAlign: "middle",
                      }}
                    >
                      Thursday, Sep 23
                    </p>
                    <p
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 500,
                        fontStyle: "normal",
                        fontSize: 20,
                        lineHeight: "28px",
                        letterSpacing: 0,
                        color: "#D8D8D8",
                        margin: 0,
                        verticalAlign: "middle",
                      }}
                    >
                      7:00 PM - 8:30 PM GMT+1
                    </p>
                  </div>
                </div>

                <div style={{ height: "27px" }} />

                <div className="flex items-start gap-5">
                  {/* Location icon container */}
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: 17.87,
                      border: "1.19px solid #F8F8F824",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "transparent",
                      padding: 0,
                      position: "relative",
                    }}
                  >
                    <Image
                      src="/icons/location-create.svg"
                      alt="Location"
                      width={20}
                      height={25}
                      className="object-contain"
                      unoptimized={true}
                    />
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 600,
                        fontStyle: "normal",
                        fontSize: 20,
                        lineHeight: "28px",
                        letterSpacing: 0,
                        color: "#FFFFFF",
                        margin: 0,
                        verticalAlign: "middle",
                      }}
                    >
                      Stable Africa
                    </p>
                    <p
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 500,
                        fontStyle: "normal",
                        fontSize: 20,
                        lineHeight: "28px",
                        letterSpacing: 0,
                        color: "#D8D8D8",
                        margin: 0,
                        verticalAlign: "middle",
                      }}
                    >
                      Lagos Nigeria
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <div style={{ height: "2px" }} />

            {/* Header block: (left) + (right) */}
            <div
              style={{
                width: 739,
                minHeight: 362,
                borderRadius: 8.67,
                border: "0.29px solid #91949926",
                background: "#FFFFFF05",
                backdropFilter: "blur(8.67px)",
                padding: "22px",
                display: "flex",
                alignItems: "flex-start",
                gap: "22px",
              }}
            >
              {/* Orange card */}
              <div>
                <div
                  style={{
                    width: 283.1206359863281,
                    height: 227.0742950439453,
                    background: "#CE5620",
                    borderRadius: 10.76,
                    padding: "15px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div className="flex gap-2.5">
                    <div
                      className="flex-shrink-0"
                      style={{ width: 125, height: 125 }}
                    >
                      <div className="relative w-full h-full rounded-xl overflow-hidden">
                        <Image
                          src="/spiral-img.svg"
                          alt="Event decorative graphic"
                          fill
                          className="object-cover"
                          priority
                        />
                      </div>
                    </div>

                    <div
                      className="flex-grow flex flex-col"
                      style={{ gap: "7px" }}
                    >
                      <h1
                        className="font-normal text-white"
                        style={{
                          fontFamily: "Instrument Serif",
                          fontWeight: 400,
                          fontSize: 19,
                          lineHeight: "17px",
                          letterSpacing: 0,
                          verticalAlign: "middle",
                        }}
                      >
                        Africa Startup
                        <br />
                        Conference
                      </h1>

                      {/* Date */}
                      <div
                        className="flex items-center"
                        style={{ gap: "5.5px" }}
                      >
                        <div
                          style={{
                            width: 19,
                            height: 19,
                            borderRadius: 5.5,
                            border: "0.42px solid #F8F8F824",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            overflow: "hidden",
                            background: "transparent",
                          }}
                        >
                          <div
                            style={{
                              width: "100%",
                              background: "rgba(145, 148, 153, 0.4)",
                              textAlign: "center",
                              lineHeight: 1,
                              height: 6,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0,
                            }}
                          >
                            <span
                              style={{
                                fontFamily: "Inter, sans-serif",
                                fontWeight: 600,
                                fontSize: 2.89,
                                textAlign: "center",
                                marginTop: "3px",
                                color: "#FFFFFF",
                              }}
                            >
                              Sept
                            </span>
                          </div>
                          <div
                            style={{
                              flex: 1,
                              width: "100%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <span
                              style={{
                                fontFamily: "Inter, sans-serif",
                                fontWeight: 600,
                                fontSize: 8.09,
                                color: "#FFFFFF",
                              }}
                            >
                              30
                            </span>
                          </div>
                        </div>

                        <div>
                          <p
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontWeight: 600,
                              fontSize: 7,
                              lineHeight: "8px",
                              letterSpacing: 0,
                              color: "#FFFFFF",
                              margin: 0,
                              verticalAlign: "middle",
                            }}
                          >
                            Thursday, Sep 23
                          </p>
                          <p
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontWeight: 500,
                              fontSize: 7,
                              lineHeight: "8px",
                              letterSpacing: 0,
                              color: "#D8D8D8",
                              margin: 0,
                              verticalAlign: "middle",
                            }}
                          >
                            7:00 PM - 8:30 PM GMT+1
                          </p>
                        </div>
                      </div>

                      {/* Location */}
                      <div
                        className="flex items-center"
                        style={{ gap: "5.5px" }}
                      >
                        <div
                          style={{
                            width: 19,
                            height: 19,
                            borderRadius: 5.5,
                            border: "0.42px solid #F8F8F824",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            background: "transparent",
                          }}
                        >
                          <MapPin size={9.5} className="text-white" />
                        </div>
                        <div>
                          <p
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontWeight: 600,
                              fontSize: 6,
                              lineHeight: "8px",
                              letterSpacing: 0,
                              color: "#FFFFFF",
                              margin: 0,
                              verticalAlign: "middle",
                            }}
                          >
                            Offline Location
                          </p>
                          <p
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontWeight: 500,
                              fontSize: 6,
                              lineHeight: "8px",
                              letterSpacing: 0,
                              color: "#D8D8D8",
                              margin: 0,
                              verticalAlign: "middle",
                            }}
                          >
                            Stable Africa, Lagos, Nigeria
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div style={{ marginTop: "1px" }}>
                    <p
                      style={{
                        fontFamily: "Inter",
                        fontWeight: 500,
                        fontStyle: "normal",
                        fontSize: "5.78px",
                        lineHeight: "100%",
                        letterSpacing: 0,
                        color: "#FFFFFF8A",
                        margin: 0,
                        marginBottom: "2px",
                        verticalAlign: "middle",
                      }}
                    >
                      Hosted
                    </p>
                    <p
                      style={{
                        fontFamily: "Inter",
                        fontWeight: 500,
                        fontStyle: "normal",
                        fontSize: "8.09px",
                        lineHeight: "100%",
                        letterSpacing: 0,
                        color: "#FFFFFF",
                        margin: 0,
                        verticalAlign: "middle",
                      }}
                    >
                      Dare Sobaloju
                    </p>
                  </div>

                  <div
                    style={{
                      marginTop: "7px",
                      marginLeft: "-15px",
                      marginRight: "-15px",
                    }}
                  >
                    <StackedGlassLinkBars
                      topText="Quiktis.com/xytrh"
                      topCopyUrl="Quiktis.com/xytrh"
                      behindText="Where Africa startup find oppurtunity"
                      peekBehind={0}
                      behindFontSize="8.5px"
                    />
                  </div>
                </div>

                <button
                  style={{
                    marginTop: 16,
                    width: 82.625,
                    height: 25.423076629638672,
                    background: "#FFFFFF0F",
                    backdropFilter: "blur(5.970637321472168px)",
                    WebkitBackdropFilter: "blur(5.970637321472168px)",
                    borderRadius: 5.31,
                    border: "0.15px solid #91949926",
                    opacity: 1,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 500,
                    fontStyle: "normal",
                    fontSize: "9.24px",
                    lineHeight: "100%",
                    color: "#D2DDDA",
                    cursor: "pointer",
                  }}
                >
                  Share Event
                </button>
              </div>

              {/* Right */}
              <div
                className="flex flex-col gap-4"
                style={{ flex: 1, paddingTop: "50px" }}
              >
                <div className="flex items-center gap-3">
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 9.5,
                      border: "0.69px solid #F8F8F824",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      overflow: "hidden",
                      background: "transparent",
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        background: "#91949966",
                        textAlign: "center",
                        lineHeight: 1,
                        height: 10,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontWeight: 600,
                          fontSize: "6px",
                          color: "#FFFFFF",
                        }}
                      >
                        Sept
                      </span>
                    </div>
                    <div
                      style={{
                        flex: 1,
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontWeight: 600,
                          fontSize: "11px",
                          color: "#FFFFFF",
                        }}
                      >
                        30
                      </span>
                    </div>
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 600,
                        fontSize: 12,
                        lineHeight: "15px",
                        letterSpacing: 0,
                        color: "#FFFFFF",
                        margin: 0,
                        verticalAlign: "middle",
                      }}
                    >
                      Thursday, Sep 23
                    </p>
                    <p
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 500,
                        fontSize: 12,
                        lineHeight: "15px",
                        letterSpacing: 0,
                        color: "#D8D8D8",
                        margin: 0,
                        verticalAlign: "middle",
                      }}
                    >
                      7:00 PM - 8:30 PM GMT+1
                    </p>
                  </div>
                </div>

                {/* Location block */}
                <div className="flex items-center gap-3">
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 9.5,
                      border: "0.69px solid #F8F8F824",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "transparent",
                    }}
                  >
                    <MapPin size={15} className="text-gray-200" />
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 600,
                        fontSize: 12,
                        lineHeight: "15px",
                        letterSpacing: 0,
                        color: "#FFFFFF",
                        margin: 0,
                        verticalAlign: "middle",
                      }}
                    >
                      Offline Location
                    </p>
                    <p
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 500,
                        fontSize: 12,
                        lineHeight: "15px",
                        letterSpacing: 0,
                        color: "#D8D8D8",
                        margin: 0,
                        verticalAlign: "middle",
                      }}
                    >
                      Stable Africa, Lagos, Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-center" style={{ gap: "8px" }}>
                  <div
                    style={{ width: 60, flexShrink: 0, marginLeft: "-14px" }}
                  >
                    <Image
                      src="/icons/Profile-img.svg"
                      alt="Profile"
                      width={60}
                      height={60}
                      style={{ flexShrink: 0 }}
                    />
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 600,
                        fontSize: 24,
                        lineHeight: "121%",
                        letterSpacing: 0,
                        color: "#FFFFFF",
                        margin: 0,
                      }}
                    >
                      Dare Sobaloju Pamilerin
                    </p>
                    <p
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 500,
                        fontSize: 13.5,
                        lineHeight: "121%",
                        letterSpacing: 0,
                        color: "#666666",
                        margin: 0,
                      }}
                    >
                      Pamilerincaleb@gmail.com
                    </p>
                  </div>
                </div>

                <div className="pt-1 flex">
                  <button
                    onClick={() => setShowTicketPopup(true)}
                    style={{
                      width: 320,
                      height: 36,
                      background: "#FFFFFF0F",
                      backdropFilter: "blur(11.56px)",
                      // borderRadius: 8,
                      border: "none",
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 500,
                      fontSize: 17,
                      lineHeight: "100%",
                      letterSpacing: 0,
                      color: "#D2DDDA",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      verticalAlign: "middle",
                      alignSelf: "flex-start",
                    }}
                    className="hover:bg-[#FFFFFF15] transition"
                  >
                    Buy Ticket
                  </button>
                </div>
              </div>
            </div>

            <div style={{ height: "8px" }} />

            {/* About Section */}
            <div style={{ maxWidth: 680 }}>
              <h2
                style={{
                  fontFamily: "Instrument Serif",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontSize: "26px",
                  lineHeight: "100%",
                  letterSpacing: 0,
                  color: "#FFFFFF8A",
                  margin: 0,
                  marginBottom: "18px",
                  verticalAlign: "middle",
                }}
              >
                About
              </h2>
              <div
                style={{
                  whiteSpace: "normal",
                  wordBreak: "break-word",
                }}
              >
                <h3
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 500,
                    fontStyle: "normal",
                    fontSize: "20px",
                    lineHeight: "32px",
                    letterSpacing: 0,
                    color: "#FFFFFF",
                    margin: 0,
                    marginBottom: "20px",
                    verticalAlign: "middle",
                  }}
                >
                  About the Masterclass
                </h3>
                <p
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 500,
                    fontStyle: "medium",
                    fontSize: "19px",
                    lineHeight: "30px",
                    letterSpacing: 0,
                    color: "#FFFFFF",
                    margin: 0,
                    marginBottom: "20px",
                    verticalAlign: "middle",
                    whiteSpace: "normal",
                    wordBreak: "break-word",
                  }}
                >
                  Perfecting Storytelling With Data is a collaborative
                  masterclass
                  <br />
                  by Dataleum and Surulere Toastmasters Club designed to bridge
                  <br />
                  the gap between technical data skills and effective
                  communication.
                  <br />
                  In today&apos;s workplace, analyzing data is only half the
                  job; being able to
                  <br />
                  translate those insights into compelling stories that drive
                  decisions
                  <br />
                  is what sets professionals apart.
                  <br />
                  In this session, participants will learn how to:
                </p>
                <ul
                  style={{
                    listStyleType: "disc",
                    paddingLeft: 28,
                    margin: 0,
                    marginBottom: "8px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "2px",
                  }}
                >
                  {[
                    "Develop a simple, functional dashboard to visualize insights.",
                    "Understand how Artificial Intelligence (AI) is shaping Analytics through practical examples.",
                    "Apply storytelling techniques to transform numbers into narratives.",
                    "Present data clearly, confidently, and persuasively.",
                    "Strengthen public speaking skills to engage any audience.",
                  ].map((text) => (
                    <li
                      key={text}
                      style={{
                        fontFamily: "Inter",
                        fontWeight: 500,
                        fontStyle: "medium",
                        fontSize: "19px",
                        lineHeight: "30px",
                        letterSpacing: 0,
                        color: "#FFFFFF",
                        verticalAlign: "middle",
                        display: "list-item",
                        whiteSpace: "normal",
                        wordBreak: "break-word",
                      }}
                    >
                      {text}
                    </li>
                  ))}
                </ul>
                <p
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 500,
                    fontStyle: "medium",
                    fontSize: "19px",
                    lineHeight: "30px",
                    letterSpacing: 0,
                    color: "#FFFFFF",
                    margin: 0,
                    verticalAlign: "middle",
                    whiteSpace: "normal",
                    wordBreak: "break-word",
                  }}
                >
                  Whether you&apos;re a data professional, or business leader,
                  this masterclass will help you move from raw numbers to
                  meaningful dialogue.
                </p>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1 space-y-6 lg:sticky lg:top-6">
            {/* Poster image */}
            <div
              className="relative overflow-hidden bg-[#242424]"
              style={{
                width: 350,
                height: 390,
                borderRadius: 45,
              }}
            >
              <Image
                src="/spiral-img.svg"
                alt="Event poster"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Hosted block */}
            <div style={{ marginTop: "28px" }}>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  fontSize: 24,
                  lineHeight: "100%",
                  letterSpacing: 1,
                  color: "#FFFFFF8A",
                  margin: 0,
                  marginBottom: "26px",
                  verticalAlign: "middle",
                }}
              >
                Hosted
              </p>
              <h4
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  fontSize: 30,
                  lineHeight: "100%",
                  letterSpacing: 0,
                  color: "#FFFFFF",
                  margin: 0,
                  marginBottom: "40px",
                  verticalAlign: "middle",
                }}
              >
                Dare Sobaloju
              </h4>

              <div className="flex items-center gap-3 mb-10">
                <div className="flex -space-x-2">
                  <Image
                    src="/profile-going-1.svg"
                    alt="Profile 1"
                    width={30.6}
                    height={30.4}
                    className="rounded-full"
                  />
                  <Image
                    src="/profile-going-2.svg"
                    alt="Profile 2"
                    width={30.6}
                    height={30.4}
                    className="rounded-full"
                  />
                  <Image
                    src="/profile-going-3.svg"
                    alt="Profile 3"
                    width={30.6}
                    height={30.4}
                    className="rounded-full"
                  />
                </div>
                <span
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 500,
                    fontSize: 19,
                    lineHeight: "28px",
                    letterSpacing: 0,
                    color: "#FFFFFF",
                    verticalAlign: "middle",
                  }}
                >
                  200k going
                </span>
              </div>

              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  fontSize: 24,
                  lineHeight: "100%",
                  letterSpacing: 0,
                  color: "#919499",
                  margin: 0,
                  verticalAlign: "middle",
                }}
              >
                Contact Organizers
              </p>
            </div>
          </div>
        </main>
      </div>

      {/* Ticket Popup Overlay */}
      {showTicketPopup && (
        <div
          className="hide-scrollbar"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "#131517F7",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            overflow: "auto",
          }}
          onClick={() => setShowTicketPopup(false)}
        >
          <div
            className="hide-scrollbar"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "transparent",
              maxWidth: "600px",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "40px",
              paddingTop: selectedTicket ? "20px" : "40px",
              paddingBottom: "40px",
              maxHeight: "90vh",
              overflow: "auto",
              transition: "padding-top 0.3s ease-in-out",
            }}
          >
            {/* Back Button */}
            <button
              onClick={() => setShowTicketPopup(false)}
              style={{
                alignSelf: "flex-start",
                width: 124,
                height: 42,
                background: "transparent",
                border: "1px solid #373737",
                borderRadius: 5,
                boxSizing: "border-box",
                flexShrink: 0,
                minWidth: 124,
                whiteSpace: "nowrap",
                fontFamily: "Inter",
                fontWeight: 500,
                fontSize: 20,
                fontStyle: "medium",
                lineHeight: "100%",
                color: "#FFFFFF",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              <svg
                width="4.46"
                height="8.11"
                viewBox="0 0 5 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 8L1 4.5L4 1"
                  stroke="#FFFFFF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Back
            </button>

            <div style={{ textAlign: "center" }}>
              <h2
                style={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontSize: 36,
                  lineHeight: "96%",
                  letterSpacing: 0,
                  textAlign: "center",
                  color: "#FFFFFF",
                  margin: 0,
                  marginBottom: "12px",
                }}
              >
                Choose Ticket Type
              </h2>
              <p
                style={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontSize: 21.12,
                  lineHeight: "121%",
                  letterSpacing: 0,
                  textAlign: "center",
                  color: "#919499",
                  margin: 0,
                }}
              >
                Pick your ticket preference and go
                <br />
                though our payment gateway
              </p>
            </div>

            {/* Ticket Options */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              {/* Regular Ticket */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => handleTicketSelect("Regular")}
                  style={{
                    width: "100%",
                    maxWidth: 600,
                    height: 69,
                    background: "#FFFFFF05",
                    backdropFilter: "blur(10.33px)",
                    WebkitBackdropFilter: "blur(10.33px)",
                    border: "0.26px solid rgba(81, 81, 81, 0.3)",
                    borderRadius: 9.19,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0 32px",
                    cursor: "pointer",
                    transition: "all 0.3s ease-in-out",
                  }}
                  onMouseEnter={(e) => {
                    if (selectedTicket !== "Regular") {
                      e.currentTarget.style.background =
                        "rgba(255, 255, 255, 0.08)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedTicket !== "Regular") {
                      e.currentTarget.style.background = "#FFFFFF05";
                    }
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Inter",
                      fontWeight: 500,
                      fontSize: 24,
                      lineHeight: "121%",
                      letterSpacing: 0,
                      color: "#FFFFFF",
                    }}
                  >
                    Regular
                  </span>
                  <span
                    style={{
                      fontFamily: "Inter",
                      fontWeight: 700,
                      fontSize: 24,
                      lineHeight: "121%",
                      letterSpacing: 0,
                      color: "#FFFFFF",
                    }}
                  >
                    ₦1<span style={{ fontWeight: 500 }}>000</span>
                  </span>
                </div>

                {selectedTicket === "Regular" && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "26px",
                      paddingLeft: 0,
                      alignSelf: "flex-start",
                      marginTop: "4px",
                      animation: "slideDown 0.3s ease-in-out",
                      width: "100%",
                      maxWidth: 600,
                    }}
                  >
                    <div
                      style={{
                        width: 183,
                        height: 69,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        background: "#FFFFFF05",
                        backdropFilter: "blur(10.33px)",
                        WebkitBackdropFilter: "blur(10.33px)",
                        border: "0.26px solid rgba(81, 81, 81, 0.3)",
                        borderRadius: 9.19,
                        padding: "0 24px",
                        flexShrink: 0,
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "Inter",
                          fontWeight: 500,
                          fontSize: 24,
                          lineHeight: "121%",
                          letterSpacing: 0,
                          color: "#FFFFFF",
                        }}
                      >
                        Qty
                      </span>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "4px",
                          }}
                        >
                          <button
                            onClick={incrementQty}
                            style={{
                              background: "transparent",
                              border: "none",
                              width: 9,
                              height: 6.75,
                              cursor: "pointer",
                              padding: 0,
                              lineHeight: 1,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: "#919499",
                            }}
                          >
                            <svg
                              width="9"
                              height="7"
                              viewBox="0 0 9 7"
                              fill="none"
                            >
                              <path d="M4.5 0L9 6.75H0L4.5 0Z" fill="#919499" />
                            </svg>
                          </button>
                          <span
                            style={{
                              fontFamily: "Inter",
                              fontWeight: 500,
                              fontSize: 20,
                              lineHeight: "121%",
                              letterSpacing: 0,
                              color: "#FFFFFF",
                              textAlign: "center",
                              minWidth: 20,
                            }}
                          >
                            {ticketQty}
                          </span>
                          <button
                            onClick={decrementQty}
                            style={{
                              background: "transparent",
                              border: "none",
                              width: 9,
                              height: 6.75,
                              cursor: "pointer",
                              padding: 0,
                              lineHeight: 1,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: "#919499",
                            }}
                          >
                            <svg
                              width="9"
                              height="7"
                              viewBox="0 0 9 7"
                              fill="none"
                            >
                              <path
                                d="M4.5 6.75L0 0H9L4.5 6.75Z"
                                fill="#919499"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div
                      style={{
                        flex: 1,
                        height: 69,
                        display: "flex",
                        alignItems: "center",
                        paddingLeft: "24px",
                        background: "#FFFFFF05",
                        backdropFilter: "blur(10.33px)",
                        WebkitBackdropFilter: "blur(10.33px)",
                        border: "0.26px solid #515151",
                        borderRadius: 9.19,
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "Inter",
                          fontWeight: 500,
                          fontSize: 24,
                          lineHeight: "121%",
                          letterSpacing: 0,
                          color: "#FFFFFF",
                        }}
                      >
                        Drink, accommodation
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* VIP Ticket */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => handleTicketSelect("VIP")}
                  style={{
                    width: "100%",
                    maxWidth: 600,
                    height: 69,
                    background: "#FFFFFF05",
                    backdropFilter: "blur(10.33px)",
                    WebkitBackdropFilter: "blur(10.33px)",
                    border: "0.26px solid rgba(81, 81, 81, 0.3)",
                    borderRadius: 9.19,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0 32px",
                    cursor: "pointer",
                    transition: "all 0.3s ease-in-out",
                  }}
                  onMouseEnter={(e) => {
                    if (selectedTicket !== "VIP") {
                      e.currentTarget.style.background =
                        "rgba(255, 255, 255, 0.08)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedTicket !== "VIP") {
                      e.currentTarget.style.background = "#FFFFFF05";
                    }
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Inter",
                      fontWeight: 500,
                      fontSize: 24,
                      lineHeight: "121%",
                      letterSpacing: 0,
                      color: "#FFFFFF",
                    }}
                  >
                    VIP
                  </span>
                  <span
                    style={{
                      fontFamily: "Inter",
                      fontWeight: 700,
                      fontSize: 24,
                      lineHeight: "121%",
                      letterSpacing: 0,
                      color: "#FFFFFF",
                    }}
                  >
                    ₦5<span style={{ fontWeight: 500 }}>000</span>
                  </span>
                </div>

                {selectedTicket === "VIP" && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "26px",
                      paddingLeft: 0,
                      alignSelf: "flex-start",
                      marginTop: "4px",
                      animation: "slideDown 0.3s ease-in-out",
                      width: "100%",
                      maxWidth: 600,
                    }}
                  >
                    <div
                      style={{
                        width: 183,
                        height: 69,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        background: "#FFFFFF05",
                        backdropFilter: "blur(10.33px)",
                        WebkitBackdropFilter: "blur(10.33px)",
                        border: "0.26px solid rgba(81, 81, 81, 0.3)",
                        borderRadius: 9.19,
                        padding: "0 24px",
                        flexShrink: 0,
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "Inter",
                          fontWeight: 500,
                          fontSize: 24,
                          lineHeight: "121%",
                          letterSpacing: 0,
                          color: "#FFFFFF",
                        }}
                      >
                        Qty
                      </span>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "4px",
                          }}
                        >
                          <button
                            onClick={incrementQty}
                            style={{
                              background: "transparent",
                              border: "none",
                              width: 9,
                              height: 6.75,
                              cursor: "pointer",
                              padding: 0,
                              lineHeight: 1,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: "#919499",
                            }}
                          >
                            <svg
                              width="9"
                              height="7"
                              viewBox="0 0 9 7"
                              fill="none"
                            >
                              <path d="M4.5 0L9 6.75H0L4.5 0Z" fill="#919499" />
                            </svg>
                          </button>
                          <span
                            style={{
                              fontFamily: "Inter",
                              fontWeight: 500,
                              fontSize: 20,
                              lineHeight: "121%",
                              letterSpacing: 0,
                              color: "#FFFFFF",
                              textAlign: "center",
                              minWidth: 20,
                            }}
                          >
                            {ticketQty}
                          </span>
                          <button
                            onClick={decrementQty}
                            style={{
                              background: "transparent",
                              border: "none",
                              width: 9,
                              height: 6.75,
                              cursor: "pointer",
                              padding: 0,
                              lineHeight: 1,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: "#919499",
                            }}
                          >
                            <svg
                              width="9"
                              height="7"
                              viewBox="0 0 9 7"
                              fill="none"
                            >
                              <path
                                d="M4.5 6.75L0 0H9L4.5 6.75Z"
                                fill="#919499"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div
                      style={{
                        flex: 1,
                        height: 69,
                        display: "flex",
                        alignItems: "center",
                        paddingLeft: "24px",
                        background: "#FFFFFF05",
                        backdropFilter: "blur(10.33px)",
                        WebkitBackdropFilter: "blur(10.33px)",
                        border: "0.26px solid #515151",
                        borderRadius: 9.19,
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "Inter",
                          fontWeight: 500,
                          fontSize: 24,
                          lineHeight: "121%",
                          letterSpacing: 0,
                          color: "#FFFFFF",
                        }}
                      >
                        Drink, accommodation
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* VVIP Ticket */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => handleTicketSelect("VVIP")}
                  style={{
                    width: "100%",
                    maxWidth: 600,
                    height: 69,
                    background: "#FFFFFF05",
                    backdropFilter: "blur(10.33px)",
                    WebkitBackdropFilter: "blur(10.33px)",
                    border: "0.26px solid rgba(81, 81, 81, 0.3)",
                    borderRadius: 9.19,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0 32px",
                    cursor: "pointer",
                    transition: "all 0.3s ease-in-out",
                  }}
                  onMouseEnter={(e) => {
                    if (selectedTicket !== "VVIP") {
                      e.currentTarget.style.background =
                        "rgba(255, 255, 255, 0.08)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedTicket !== "VVIP") {
                      e.currentTarget.style.background = "#FFFFFF05";
                    }
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Inter",
                      fontWeight: 500,
                      fontSize: 24,
                      lineHeight: "121%",
                      letterSpacing: 0,
                      color: "#FFFFFF",
                    }}
                  >
                    VVIP
                  </span>
                  <span
                    style={{
                      fontFamily: "Inter",
                      fontWeight: 700,
                      fontSize: 24,
                      lineHeight: "121%",
                      letterSpacing: 0,
                      color: "#FFFFFF",
                    }}
                  >
                    ₦6<span style={{ fontWeight: 500 }}>000</span>
                  </span>
                </div>

                {selectedTicket === "VVIP" && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "26px",
                      paddingLeft: 0,
                      alignSelf: "flex-start",
                      marginTop: "4px",
                      animation: "slideDown 0.3s ease-in-out",
                      width: "100%",
                      maxWidth: 600,
                    }}
                  >
                    <div
                      style={{
                        width: 183,
                        height: 69,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        background: "#FFFFFF05",
                        backdropFilter: "blur(10.33px)",
                        WebkitBackdropFilter: "blur(10.33px)",
                        border: "0.26px solid rgba(81, 81, 81, 0.3)",
                        borderRadius: 9.19,
                        padding: "0 24px",
                        flexShrink: 0,
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "Inter",
                          fontWeight: 500,
                          fontSize: 24,
                          lineHeight: "121%",
                          letterSpacing: 0,
                          color: "#FFFFFF",
                        }}
                      >
                        Qty
                      </span>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "4px",
                          }}
                        >
                          <button
                            onClick={incrementQty}
                            style={{
                              background: "transparent",
                              border: "none",
                              width: 9,
                              height: 6.75,
                              cursor: "pointer",
                              padding: 0,
                              lineHeight: 1,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: "#919499",
                            }}
                          >
                            <svg
                              width="9"
                              height="7"
                              viewBox="0 0 9 7"
                              fill="none"
                            >
                              <path d="M4.5 0L9 6.75H0L4.5 0Z" fill="#919499" />
                            </svg>
                          </button>
                          <span
                            style={{
                              fontFamily: "Inter",
                              fontWeight: 500,
                              fontSize: 20,
                              lineHeight: "121%",
                              letterSpacing: 0,
                              color: "#FFFFFF",
                              textAlign: "center",
                              minWidth: 20,
                            }}
                          >
                            {ticketQty}
                          </span>
                          <button
                            onClick={decrementQty}
                            style={{
                              background: "transparent",
                              border: "none",
                              width: 9,
                              height: 6.75,
                              cursor: "pointer",
                              padding: 0,
                              lineHeight: 1,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: "#919499",
                            }}
                          >
                            <svg
                              width="9"
                              height="7"
                              viewBox="0 0 9 7"
                              fill="none"
                            >
                              <path
                                d="M4.5 6.75L0 0H9L4.5 6.75Z"
                                fill="#919499"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div
                      style={{
                        flex: 1,
                        height: 69,
                        display: "flex",
                        alignItems: "center",
                        paddingLeft: "24px",
                        background: "#FFFFFF05",
                        backdropFilter: "blur(10.33px)",
                        WebkitBackdropFilter: "blur(10.33px)",
                        border: "0.26px solid #515151",
                        borderRadius: 9.19,
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "Inter",
                          fontWeight: 500,
                          fontSize: 24,
                          lineHeight: "121%",
                          letterSpacing: 0,
                          color: "#FFFFFF",
                        }}
                      >
                        Drink, accommodation
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Buy Button */}
            {selectedTicket && (
              <button
                onClick={handleBuyTicket}
                style={{
                  width: "100%",
                  background: "#FFFFFF",
                  border: "none",
                  borderRadius: 12,
                  padding: "20px",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  fontSize: 18,
                  color: "#131517",
                  cursor: "pointer",
                  marginTop: "8px",
                }}
              >
                Buy
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
