"use client";

import React, { useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";

interface CancelDeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
}

const CancelDeleteModal: React.FC<CancelDeleteModalProps> = ({
  isOpen,
  onClose,
  onDelete,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cancel-delete-title"
      style={{
        borderRadius: "17.41px",
        background: "#181B1EED",
        border: "0.5px solid #66666633",
        backdropFilter: "blur(7.4598px)",
      }}
    >
      <div
        className="flex flex-col items-center justify-center"
        style={{ width: "500px", padding: "40px" }}
      >
        <h2
          id="cancel-delete-title"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontStyle: "normal",
            fontSize: "35.2px",
            lineHeight: "121%",
            letterSpacing: "0%",
            textAlign: "center",
            color: "#FFFFFF",
            margin: 0,
          }}
        >
          Confirm Delete
        </h2>

        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
            fontStyle: "normal",
            fontSize: "21.12px",
            lineHeight: "121%",
            letterSpacing: "0%",
            textAlign: "center",
            color: "#919499",
            marginTop: "10px",
            marginBottom: "8px",
            maxWidth: "400px",
          }}
        >
          By clicking delete, you confirm you want Quiktis to remove your event.
        </p>

        <div className="my-8 flex items-center justify-center" aria-hidden>
          <Image
            src="/icons/cancel-delete-registration.svg"
            alt="Cancel delete graphic"
            width={160}
            height={160}
            style={{ display: "block", maxWidth: "160px", height: "auto" }}
          />
        </div>

        <div
          className="flex flex-col items-center justify-center w-full"
          style={{ gap: "15px" }}
        >
          {/* CANCEL button */}
          <button
            onClick={onClose}
            style={{
              borderRadius: "176.01px",
              background: "#FFFFFF",
              width: "436.51px",
              height: "65.13px",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            aria-label="Cancel"
          >
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                fontSize: "28.16px",
                lineHeight: "121%",
                color: "#000000",
              }}
            >
              Cancel
            </span>
          </button>

          {/* DELETE button */}
          <button
            onClick={onDelete}
            style={{
              borderRadius: "176.01px",
              background: "#FF000017",
              width: "436.51px",
              height: "65.13px",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            aria-label="Delete"
          >
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                fontSize: "28.16px",
                lineHeight: "121%",
                color: "#FF0000",
              }}
            >
              Delete
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

const OnclickRegistrationPage: NextPage = () => {
  const [customQuestion, setCustomQuestion] = useState("");
  const [registrationEmail, setRegistrationEmail] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenCancel = () => setIsModalOpen(true);
  const handleCloseCancel = () => setIsModalOpen(false);

  const handleConfirmDelete = () => {
    console.log("Delete confirmed.");
    setIsModalOpen(false);
  };

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
        {/* Invite & Share */}
        <div className="flex justify-start overflow-x-auto md:overflow-visible mb-[50px]">
          <div className="flex items-center gap-3 whitespace-nowrap">
            <button
              className="flex items-center gap-4 rounded-[11.66px] backdrop-blur-[13.11px] hover:bg-white/10 transition-colors cursor-pointer flex-none"
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
                <Image
                  src="/icons/invite-onclick-guest.svg"
                  alt="Invite Guest Icon"
                  fill
                  className="object-contain"
                  sizes="33px"
                />
              </div>
              <span
                style={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontSize: "17.27px",
                  color: "#D2DDDA",
                }}
              >
                Invite Guest
              </span>
            </button>

            <button
              className="flex items-center gap-4 rounded-[11.66px] backdrop-blur-[13.11px] hover:bg-white/10 transition-colors cursor-pointer flex-none"
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
                <Image
                  src="/icons/share-onclick-event.svg"
                  alt="Share Event Icon"
                  width={33}
                  height={33}
                  className="object-contain"
                />
              </div>
              <span
                style={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontSize: "17.27px",
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
            style={{ fontFamily: "Inter", fontWeight: 500, fontSize: 28 }}
          >
            Tickets
          </h2>
          <div
            className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
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
                className="text-white text-[17.59px] md:text-[28px] font-medium leading-[100%]"
                style={{ fontFamily: "Inter", letterSpacing: "-5%" }}
              >
                Cards
              </h3>
              <p
                className="text-[#919499] max-w-2xl text-[11px] md:text-[18px] font-medium leading-[100%]"
                style={{ fontFamily: "Inter", letterSpacing: "-5%" }}
              >
                Start selling tickets to your events. Major credit and debit
                cards are always accepted
              </p>
              <button
                className="text-[#131517] font-medium transition hover:opacity-80 flex items-center justify-center bg-white w-[107.7662px] h-[26.94155px] rounded-[4.28px] md:w-[196px] md:h-[49px] md:rounded-[7.78px] text-[10.26px] md:text-[18.67px] leading-[100%]"
                style={{ fontFamily: "Inter", letterSpacing: "-4%" }}
              >
                Get Started
              </button>
            </div>

            <button
              className="hidden lg:flex items-center justify-center"
              style={{ width: 48, height: 48, borderRadius: "50%" }}
            >
              <Image
                src="/icons/add-icon-registration.svg"
                alt="add"
                width={48}
                height={48}
                className="object-cover"
              />
            </button>
          </div>

          <div
            className="px-4 py-3 flex flex-row items-center justify-between"
            style={{
              marginTop: "46px",
              borderRadius: "9.19px",
              background: "#FFFFFF05",
              border: "0.33px solid #91949926",
              backdropFilter: "blur(10.33px)",
            }}
          >
            <div className="flex flex-wrap items-center gap-2 md:gap-4">
              <span className="text-white font-[500] text-[18px] md:text-[24px]">
                Event Type
              </span>
              <span className="text-[#707070] font-[500] text-[18px] md:text-[24px]">
                Free
              </span>
              <span
                className="flex items-center justify-center rounded-full px-3 py-1 md:px-4 md:py-2"
                style={{ backgroundColor: "#E4751F1A" }}
              >
                <span className="text-[#FF994A] text-[14px] md:text-[20px]">
                  Approval required
                </span>
              </span>
            </div>
            <div className="flex items-center gap-1 flex-shrink-0 md:ml-4">
              <Image
                src="/icons/counting-registration.svg"
                alt="count"
                width={24}
                height={24}
                className="w-5 h-5 md:w-6 md:h-6"
              />
              <span className="text-[#919499] text-[16px] md:text-[20px]">
                0
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-4" style={{ marginTop: 36 }}>
          <h2 className="text-white" style={{ fontSize: 28, fontWeight: 500 }}>
            Registration Questions
          </h2>

          <div
            className="px-4 py-3 flex flex-wrap gap-3"
            style={{
              paddingTop: 17,
              paddingBottom: 17,
              borderRadius: 9.19,
              background: "#FFFFFF05",
              border: "0.33px solid #91949926",
              backdropFilter: "blur(10.33px)",
            }}
          >
            <span
              className="flex items-center gap-2 px-4 py-2"
              style={{ borderRadius: 100, backgroundColor: "#6F4FF21A" }}
            >
              <Image
                src="/icons/full-name-registration.svg"
                alt="full name"
                width={20}
                height={20}
              />
              <span style={{ color: "#6F4FF2", fontSize: 20 }}>Full Name</span>
            </span>

            <div
              className="flex items-center px-4 py-2"
              style={{ borderRadius: 100, backgroundColor: "#FB2E741A" }}
            >
              <span style={{ color: "#FB2E74", fontSize: 20, marginRight: 40 }}>
                Email Address
              </span>
              <span style={{ color: "#FFFFFF36", fontSize: 20 }}>Required</span>
            </div>

            <span
              className="flex items-center px-4 py-2"
              style={{ borderRadius: 100, backgroundColor: "#E4751F1A" }}
            >
              <span style={{ color: "#FF994A", fontSize: 20 }}>
                Phone Number
              </span>
            </span>
          </div>
        </div>

        <div className="space-y-2" style={{ marginTop: 49 }}>
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

        {/* Registration Email */}
        <div className="space-y-2" style={{ marginTop: 46 }}>
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

        {/* Cancel Event */}
        <div className="space-y-2 pt-4" style={{ marginTop: 49 }}>
          <h2
            className="text-white"
            style={{ fontFamily: "Inter", fontWeight: 500, fontSize: 28 }}
          >
            Cancel Event
          </h2>
          <p
            style={{
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: 20,
              color: "#919499",
              marginTop: 7,
              width: "95%",
              lineHeight: 1.15,
            }}
          >
            <span style={{ display: "block" }}>
              Cancel and permanently delete this event. This operation cannot be
              undone. If there are
            </span>
            <span style={{ display: "block", marginTop: 6 }}>
              any registered guests, we will notify them that the event has been
              canceled.
            </span>
          </p>

          <button
            onClick={handleOpenCancel}
            className="inline-flex items-center justify-start gap-4 transition-colors px-6"
            style={{
              marginTop: "55px",
              width: "312px",
              height: "77px",
              borderRadius: "22.38px",
              backgroundColor: "#FF00000F",
            }}
          >
            <Image
              src="/icons/cancel-registration.svg"
              alt="cancel"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span
              style={{
                fontFamily: "Inter",
                fontWeight: 500,
                fontSize: 32,
                color: "#FF0000",
              }}
            >
              Cancel Event
            </span>
          </button>
        </div>
      </div>

      <CancelDeleteModal
        isOpen={isModalOpen}
        onClose={handleCloseCancel}
        onDelete={handleConfirmDelete}
      />
    </div>
  );
};

export default OnclickRegistrationPage;
