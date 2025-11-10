"use client";

import React from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { StackedGlassLinkBars } from "./StackedGlassLinkBars";

type EventDisplayCardProps = {
  title: string;
  eventDate: string;
  eventTime: string;
  locationType: string;
  locationDetails: string;
  hostName: string;
  eventLink: string;
  eventDescription: string;
  imageSrc?: string;
};

export const EventDisplayCard: React.FC<EventDisplayCardProps> = ({
  title,
  eventDate,
  eventTime,
  locationType,
  locationDetails,
  hostName,
  eventLink,
  eventDescription,
  imageSrc = "/spiral-img.svg",
}) => {
  return (
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
          <Image
            src={imageSrc}
            alt="Event decorative graphic"
            width={232}
            height={230}
            className="w-full h-full object-cover rounded-[16.75px]"
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
                typeof window !== "undefined" && window.innerWidth < 640
                  ? "109px"
                  : undefined,
              height:
                typeof window !== "undefined" && window.innerWidth < 640
                  ? "42px"
                  : undefined,
              fontSize:
                typeof window !== "undefined" && window.innerWidth < 640
                  ? "19.15px"
                  : "30px",
              lineHeight:
                typeof window !== "undefined" && window.innerWidth < 640
                  ? "20.82px"
                  : "1.2",
              letterSpacing: 0,
              opacity: 1,
              verticalAlign: "middle",
            }}
          >
            {title.split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < title.split("\n").length - 1 && <br />}
              </React.Fragment>
            ))}
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
                typeof window !== "undefined" && window.innerWidth < 640
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
                  typeof window !== "undefined" && window.innerWidth < 640
                    ? { borderRadius: "7px 7px 0 0" }
                    : {}
                }
              >
                <span
                  className="text-white/80 font-semibold block leading-tight pt-0.5"
                  style={
                    typeof window !== "undefined" && window.innerWidth < 640
                      ? { fontSize: "3.5px" }
                      : { fontSize: "6px" }
                  }
                >
                  Sept
                </span>
              </div>

              <span
                className="font-semibold text-white block flex-grow flex items-center -mt-0.5"
                style={
                  typeof window !== "undefined" && window.innerWidth < 640
                    ? { fontSize: "9px" }
                    : { fontSize: "15px" }
                }
              >
                30
              </span>
            </div>

            <div>
              <p
                className="font-semibold text-white"
                style={
                  typeof window !== "undefined" && window.innerWidth < 640
                    ? { fontSize: "7.23px" }
                    : { fontSize: "11.35px" }
                }
              >
                {eventDate}
              </p>
              <p
                className="font-medium"
                style={
                  typeof window !== "undefined" && window.innerWidth < 640
                    ? { fontSize: "6.5px", color: "#D8D8D8" }
                    : { fontSize: "11.35px", color: "#D8D8D8" }
                }
              >
                {eventTime}
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
                typeof window !== "undefined" && window.innerWidth < 640
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
                  typeof window !== "undefined" && window.innerWidth < 640
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
                  typeof window !== "undefined" && window.innerWidth < 640
                    ? { fontSize: "7.23px", color: "#FFFFFF" }
                    : { fontSize: "10.55px", color: "#FFFFFF" }
                }
              >
                {locationType}
              </p>
              <p
                className="font-medium"
                style={
                  typeof window !== "undefined" && window.innerWidth < 640
                    ? { fontSize: "6.3px", color: "#D8D8D8" }
                    : { fontSize: "10.55px", color: "#D8D8D8" }
                }
              >
                {locationDetails}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-white">
        <p
          className="text-xs font-inter font-medium leading-[100%] text-[#FFFFFF8A]"
          style={{
            fontSize:
              typeof window !== "undefined" && window.innerWidth < 640
                ? "6.37px"
                : "10px",
          }}
        >
          Hosted
        </p>
        <p
          className="font-inter font-medium leading-[100%] text-[#FFFFFF] mt-[3px]"
          style={{
            fontSize:
              typeof window !== "undefined" && window.innerWidth < 640
                ? "8.92px"
                : "14px",
          }}
        >
          {hostName}
        </p>
      </div>

      <div>
        <StackedGlassLinkBars
          topText={eventLink}
          topCopyUrl={eventLink}
          behindText={eventDescription}
          peekBehind={0}
          behindFontSize="20px"
        />
      </div>
    </div>
  );
};

export default EventDisplayCard;
export type { EventDisplayCardProps };
