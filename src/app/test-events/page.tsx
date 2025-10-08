"use client";

import type { NextPage } from "next";
import React, { useState } from "react";

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

const ShareEventIcon = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <img
    src="/icons/share-onclick-event.svg"
    alt="Share Event Icon"
    className={className}
    style={style}
  />
);

const AddRegistrationIcon = ({ className }: { className?: string }) => (
  <img
    src="/icons/add-icon-registration.svg"
    alt="Add Registration Icon"
    className={className}
  />
);

const FullNameRegistrationIcon = ({ className }: { className?: string }) => (
  <img
    src="/icons/full-name-registration.svg"
    alt="Full Name Icon"
    className={className}
  />
);

const CancelRegistrationIcon = ({ className }: { className?: string }) => (
  <img
    src="/icons/cancel-registration.svg"
    alt="Cancel Registration Icon"
    className={className}
  />
);

const CountingRegistrationIcon = ({ className }: { className?: string }) => (
  <img
    src="/icons/counting-registration.svg"
    alt="Counting Registration Icon"
    className={className}
  />
);

const EventSettings: NextPage = () => {
  const [customQuestion, setCustomQuestion] = useState("");
  const [registrationEmail, setRegistrationEmail] = useState("");

  const headerStyle = {
    fontFamily: "Inter",
    fontWeight: 500,
    fontSize: "28px",
    lineHeight: "100%",
    color: "#FFFFFF",
  };

  const inputContainerStyle = {
    borderRadius: "9.19px",
    background: "#FFFFFF05",
    border: "0.33px solid #91949926",
    backdropFilter: "blur(10.33px)",
  };

  const inputTextStyle = {
    fontFamily: "Inter",
    fontWeight: 500,
    fontSize: "20px",
    lineHeight: "100%",
    letterSpacing: "-0.05em",
    color: "#919499",
  };

  return (
    <div className="min-h-screen bg-[#131517] text-white p-6">
      <div className="max-w-4xl mx-auto w-full mt-24 space-y-6">
        <div className="flex justify-start" style={{ marginBottom: "50px" }}>
          <div className="flex items-center gap-3">
            <button
              className="flex items-center gap-4 rounded-[11.66px] backdrop-blur-[13.11px] hover:bg-white/10 transition-colors cursor-pointer"
              style={{
                width: "237.89px",
                height: "55.97px",
                border: "0.33px solid #91949926",
                background: "#FFFFFF05",
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
              className="flex items-center gap-4 rounded-[11.66px] backdrop-blur-[13.11px] hover:bg-white/10 transition-colors cursor-pointer"
              style={{
                width: "237.89px",
                height: "55.97px",
                border: "0.33px solid #91949926",
                background: "#FFFFFF05",
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

        <div className="space-y-4">
          <h2
            className="text-white"
            style={{
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: "28px",
              lineHeight: "100%",
            }}
          >
            Tickets
          </h2>

          <div
            className="p-6 flex items-center justify-between"
            style={{
              marginTop: "30px",
              borderRadius: "15px",
              border: "0.5px solid #9194994F",
              backdropFilter: "blur(15px)",
              backgroundColor: "transparent",
            }}
          >
            <div className="flex flex-col gap-4">
              <h3
                className="text-white"
                style={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontSize: "28px",
                  lineHeight: "100%",
                  letterSpacing: "-0.05em",
                }}
              >
                Cards
              </h3>
              <p
                className="text-[#919499] max-w-2xl"
                style={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontSize: "18px",
                  lineHeight: "100%",
                  letterSpacing: "-0.05em",
                }}
              >
                Start selling tickets to your events. Major credit and debit
                cards are always accepted
              </p>
              <button
                className="text-black font-medium transition hover:opacity-80 flex items-center justify-center"
                style={{
                  width: "196px",
                  height: "49px",
                  borderRadius: "7.78px",
                  backgroundColor: "#FFFFFF",
                }}
              >
                Get Started
              </button>
            </div>
            <button
              className="flex items-center justify-center"
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
              }}
            >
              <AddRegistrationIcon className="w-full h-full object-cover" />
            </button>
          </div>

          <div
            className="px-4 py-3 flex items-center justify-between"
            style={{
              marginTop: "46px",
              borderRadius: "9.19px",
              background: "#FFFFFF05",
              border: "0.33px solid #91949926",
              backdropFilter: "blur(10.33px)",
            }}
          >
            <div className="flex items-center gap-4">
              <span
                className="text-white"
                style={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontSize: "24px",
                  lineHeight: "121%",
                }}
              >
                Event Type
              </span>
              <span
                className="text-[#707070]"
                style={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontSize: "24px",
                  lineHeight: "121%",
                }}
              >
                Free
              </span>
              <span
                className="flex items-center justify-center px-4 py-2"
                style={{
                  borderRadius: "100px",
                  backgroundColor: "#E4751F1A",
                }}
              >
                <span
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 500,
                    fontSize: "20px",
                    lineHeight: "121%",
                    color: "#FF994A",
                  }}
                >
                  Approval required
                </span>
              </span>
            </div>

            <div className="flex items-center gap-1">
              <CountingRegistrationIcon className="w-6 h-6" />
              <span
                className="text-[#919499]"
                style={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontSize: "20px",
                  lineHeight: "121%",
                }}
              >
                0
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-4" style={{ marginTop: "36px" }}>
          <h2
            className="text-white"
            style={{
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: "28px",
              lineHeight: "100%",
            }}
          >
            Registration Questions
          </h2>

          <div
            className="px-4 py-3 flex flex-wrap gap-3"
            style={{
              paddingTop: "17px",
              paddingBottom: "17px",
              borderRadius: "9.19px",
              background: "#FFFFFF05",
              border: "0.33px solid #91949926",
              backdropFilter: "blur(10.33px)",
            }}
          >
            <span
              className="flex items-center gap-2 px-4 py-2"
              style={{
                borderRadius: "100px",
                backgroundColor: "#6F4FF21A",
              }}
            >
              <FullNameRegistrationIcon className="w-5 h-5" />
              <span
                style={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontSize: "20px",
                  lineHeight: "121%",
                  color: "#6F4FF2",
                }}
              >
                Full Name
              </span>
            </span>

            <div
              className="flex items-center px-4 py-2"
              style={{
                borderRadius: "100px",
                backgroundColor: "#FB2E741A",
              }}
            >
              <span
                style={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontSize: "20px",
                  lineHeight: "121%",
                  color: "#FB2E74",
                  marginRight: "40px",
                }}
              >
                Email Address
              </span>
              <span
                style={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontSize: "20px",
                  lineHeight: "121%",
                  color: "#FFFFFF36",
                }}
              >
                Required
              </span>
            </div>

            <span
              className="flex items-center px-4 py-2"
              style={{
                borderRadius: "100px",
                backgroundColor: "#E4751F1A",
              }}
            >
              <span
                style={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontSize: "20px",
                  lineHeight: "121%",
                  color: "#FF994A",
                }}
              >
                Phone Number
              </span>
            </span>
          </div>
        </div>

        <div className="space-y-2" style={{ marginTop: "49px" }}>
          <h2 className="text-white" style={headerStyle}>
            Custom Question
          </h2>
          <input
            placeholder="Input your questions here...."
            value={customQuestion}
            onChange={(e) => setCustomQuestion(e.target.value)}
            className="w-full bg-transparent text-white focus:outline-none focus:ring-0 px-4 py-3"
            style={{
              ...inputContainerStyle,
              ...inputTextStyle,
              color: customQuestion ? "#FFFFFF" : inputTextStyle.color,
              paddingTop: "15px",
              paddingBottom: "15px",
              marginTop: "17px",
            }}
          />
        </div>

        <div className="space-y-2" style={{ marginTop: "46px" }}>
          <h2 className="text-white" style={headerStyle}>
            Registration email
          </h2>
          <textarea
            value={registrationEmail}
            onChange={(e) => setRegistrationEmail(e.target.value)}
            className="w-full bg-transparent text-white focus:outline-none focus:ring-0 px-4 py-3"
            style={{
              ...inputContainerStyle,
              ...inputTextStyle,
              minHeight: "200px",
              color: registrationEmail ? "#FFFFFF" : inputTextStyle.color,
              paddingTop: "15px",
              paddingBottom: "15px",
              marginTop: "17px",
            }}
          />
        </div>

        {/* Cancel Event (Unchanged for brevity) */}
        <div className="space-y-2 pt-4" style={{ marginTop: "49px" }}>
          <h2
            className="text-white"
            style={{
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: "28px",
              lineHeight: "100%",
              letterSpacing: "-0.05em",
            }}
          >
            Cancel Event
          </h2>
          <p
            className="max-w-3xl"
            style={{
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: "20px",
              lineHeight: "100%",
              letterSpacing: "-0.05em",
              color: "#919499",
              marginTop: "7px",
            }}
          >
            Cancel and permanently delete this event. This operation cannot be
            undone. If there are any registered guests, we will notify them that
            the event has been canceled.
          </p>
          <button
            className="inline-flex items-center justify-center gap-4 transition-colors px-6"
            style={{
              marginTop: "55px",
              width: "312px",
              height: "77px",
              borderRadius: "22.38px",
              backgroundColor: "#FF00000F",
            }}
          >
            <CancelRegistrationIcon className="w-8 h-8" />
            <span
              style={{
                fontFamily: "Inter",
                fontWeight: 500,
                fontSize: "32px",
                lineHeight: "100%",
                letterSpacing: "-0.05em",
                color: "#FF0000",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Cancel Event
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventSettings;
