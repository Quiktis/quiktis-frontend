"use client";

import React from "react";

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
        className="relative mx-4 flex w-full max-w-sm flex-col items-center p-8"
        style={{
          borderRadius: "17.41px",
          background: "#181B1EED",
          border: "0.5px solid #66666633",
          backdropFilter: "blur(7.4598px)",
        }}
      >
        <h2
          id="cancel-delete-title"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: "35.2px",
            lineHeight: "121%",
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
            fontSize: "21.12px",
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

        <div className="my-6 flex items-center justify-center" aria-hidden>
          <img
            src="/icons/cancel-delete-registration.svg"
            alt="Cancel delete graphic"
            width={120}
            height={120}
            style={{ display: "block", maxWidth: "120px", height: "auto" }}
          />
        </div>

        <div className="flex w-full flex-col" style={{ gap: "15px" }}>
          {/* CANCEL */}
          <button
            onClick={onClose}
            className="w-full"
            style={{
              borderRadius: "176.01px",
              background: "#FFFFFF",
              padding: "12px 0",
              border: "none",
            }}
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

          {/* DELETE */}
          <button
            onClick={onDelete}
            className="w-full"
            style={{
              borderRadius: "176.01px",
              background: "#FF000017",
              padding: "12px 0",
              border: "none",
            }}
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
