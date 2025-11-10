"use client";

import React from "react";
import { MapPin } from "lucide-react";

type WhenAndWhereProps = {
  eventDate: string;
  eventTime: string;
  locationType: string;
  locationDetails: string;
};

export const WhenAndWhere: React.FC<WhenAndWhereProps> = ({
  eventDate,
  eventTime,
  locationType,
  locationDetails,
}) => {
  return (
    <aside
      className="p-0 rounded-2xl flex-none w-full md:w-[341.37px]"
      style={
        typeof window !== "undefined" && window.innerWidth < 640
          ? { marginTop: "-4px" }
          : {}
      }
    >
      <h3
        className="font-inter font-medium leading-[100%] text-[#FFFFFF]"
        style={{
          fontSize:
            typeof window !== "undefined" && window.innerWidth < 640
              ? "20.39px"
              : "32px",
          marginBottom:
            typeof window !== "undefined" && window.innerWidth < 640
              ? "17.21px"
              : "1rem",
        }}
      >
        When and Where
      </h3>

      <div
        className="flex items-center gap-2"
        style={{
          marginBottom:
            typeof window !== "undefined" && window.innerWidth < 640
              ? "17.21px"
              : "1rem",
        }}
      >
        <div
          className="flex-shrink-0 flex flex-col items-center justify-center overflow-hidden"
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
                  typeof window !== "undefined" && window.innerWidth < 640
                    ? "5px"
                    : "8px",
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
            className="font-inter m-0 text-[#FFFFFF]"
            style={{
              fontWeight:
                typeof window !== "undefined" && window.innerWidth < 640
                  ? 600
                  : 600,
              fontSize:
                typeof window !== "undefined" && window.innerWidth < 640
                  ? "12.75px"
                  : "20px",
              lineHeight:
                typeof window !== "undefined" && window.innerWidth < 640
                  ? "17.85px"
                  : "normal",
            }}
          >
            {eventDate}
          </p>
          <p
            className="font-inter font-medium m-0 text-[#D8D8D8]"
            style={{
              fontSize:
                typeof window !== "undefined" && window.innerWidth < 640
                  ? "12.75px"
                  : "16px",
              lineHeight:
                typeof window !== "undefined" && window.innerWidth < 640
                  ? "17.85px"
                  : "normal",
            }}
          >
            {eventTime}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div
          className="flex items-center justify-center rounded-[17.87px] border-[1.18px] border-[#F8F8F824]"
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
          }}
        >
          <MapPin
            className="text-white"
            size={
              typeof window !== "undefined" && window.innerWidth < 640 ? 20 : 24
            }
          />
        </div>

        <div>
          <p
            className="font-inter m-0 text-[#FFFFFF]"
            style={{
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
            }}
          >
            {locationType}
          </p>
          <p
            className="font-inter font-medium m-0 text-[#D8D8D8]"
            style={{
              fontSize:
                typeof window !== "undefined" && window.innerWidth < 640
                  ? "12.75px"
                  : "16px",
              lineHeight:
                typeof window !== "undefined" && window.innerWidth < 640
                  ? "17.85px"
                  : "normal",
            }}
          >
            {locationDetails}
          </p>
        </div>
      </div>
    </aside>
  );
};

export default WhenAndWhere;
export type { WhenAndWhereProps };
