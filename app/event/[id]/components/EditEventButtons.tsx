"use client";

import React from "react";

type EditEventButtonsProps = {
  onEditEvent?: () => void;
  onChangeImage?: () => void;
  onShareEvent?: () => void;
};

export const EditEventButtons: React.FC<EditEventButtonsProps> = ({
  onEditEvent,
  onChangeImage,
  onShareEvent,
}) => {
  return (
    <>
      <div
        className="mt-4 sm:mt-4 flex items-center justify-start gap-2 md:hidden flex-wrap"
        style={
          typeof window !== "undefined" && window.innerWidth < 640
            ? { marginTop: "17.85px" }
            : {}
        }
      >
        <button
          onClick={onEditEvent}
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
            className="font-inter font-medium leading-[100%] text-[#D2DDDA]"
            style={{
              fontSize:
                typeof window !== "undefined" && window.innerWidth <= 375
                  ? "9.5px"
                  : "10.2px",
            }}
          >
            Edit Event
          </span>
        </button>
        <button
          onClick={onChangeImage}
          className="flex items-center justify-center gap-2 font-semibold text-white transition-colors"
          style={{
            width:
              typeof window !== "undefined" && window.innerWidth <= 375
                ? "92px"
                : "102.61012268066406px",
            height: "28.042518615722656px",
            borderRadius: "5.85px",
            border: "0.16px solid #91949926",
            background: "#FFFFFF0F",
            backdropFilter: "blur(10.33px)",
          }}
        >
          <span
            className="font-inter font-medium leading-[100%] text-[#D2DDDA]"
            style={{
              fontSize:
                typeof window !== "undefined" && window.innerWidth <= 375
                  ? "9.5px"
                  : "10.2px",
            }}
          >
            Change Image
          </span>
        </button>
        <button
          onClick={onShareEvent}
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
            className="font-inter font-medium leading-[100%] text-[#D2DDDA]"
            style={{
              fontSize:
                typeof window !== "undefined" && window.innerWidth <= 375
                  ? "9.5px"
                  : "10.2px",
            }}
          >
            Share Event
          </span>
        </button>
      </div>

      <div className="mt-8 hidden md:flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button
            onClick={onEditEvent}
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
            <span className="font-inter font-medium text-[16px] leading-[100%] text-[#D2DDDA]">
              Edit Event
            </span>
          </button>
          <button
            onClick={onChangeImage}
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
            <span className="font-inter font-medium text-[16px] leading-[100%] text-[#D2DDDA]">
              Change Image
            </span>
          </button>
          <button
            onClick={onShareEvent}
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
            <span className="font-inter font-medium text-[16px] leading-[100%] text-[#D2DDDA]">
              Share Event
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default EditEventButtons;
export type { EditEventButtonsProps };
