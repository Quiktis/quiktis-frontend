"use client";

import React from "react";
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
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cancel-delete-title"
    >
      <div
        className="relative mx-4 flex w-full max-w-sm flex-col items-center p-6 md:p-8"
        style={{
          borderRadius: "17.41px",
          background: "#181B1EED",
          border: "0.5px solid #66666633",
          backdropFilter: "blur(7.4598px)",
        }}
      >
        <h2
          id="cancel-delete-title"
          className="text-[24px] md:text-[35.2px]"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            lineHeight: "121%",
            textAlign: "center",
            color: "#FFFFFF",
            margin: 0,
          }}
        >
          Confirm Delete
        </h2>

        <p
          className="text-[16px] md:text-[21.12px]"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
            lineHeight: "121%",
            textAlign: "center",
            color: "#919499",
            marginTop: "12px",
            marginBottom: "12px",
            maxWidth: "340px",
          }}
        >
          Cancel and permanently delete this event. This operation cannot be
          undone. If there are any registered guests, we will notify them that
          the event has been canceled.
        </p>

        <div
          className="my-4 md:my-6 flex items-center justify-center"
          aria-hidden
        >
          <Image
            src="/icons/cancel-delete-registration.svg"
            alt="Cancel delete graphic"
            width={120}
            height={120}
            className="w-[100px] h-[100px] md:w-[120px] md:h-[120px]"
          />
        </div>

        <div className="flex w-full flex-col gap-3 md:gap-[15px]">
          {/* CANCEL */}
          <button
            onClick={onClose}
            className="w-full py-3 md:py-4 rounded-[8px] md:rounded-[176.01px] bg-white"
            style={{ border: "none" }}
          >
            <span
              className="text-[18px] md:text-[28.16px]"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                lineHeight: "121%",
                color: "#000000",
              }}
            >
              Cancel
            </span>
          </button>

          {/* DELETE */}
          <button
            onClick={onDelete}
            className="w-full py-3 md:py-4 rounded-[8px] md:rounded-[176.01px] bg-[rgba(255,0,0,0.09)]"
            style={{ border: "none" }}
          >
            <span
              className="text-[18px] md:text-[28.16px]"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
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
