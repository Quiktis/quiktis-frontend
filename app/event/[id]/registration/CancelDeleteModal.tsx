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
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-[rgba(24,27,30,0.93)]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cancel-delete-title"
      style={{
        backdropFilter: "blur(7.4598px)",
        WebkitBackdropFilter: "blur(7.4598px)",
      }}
    >
      <div className="relative mx-4 flex w-full max-w-[90vw] sm:max-w-[500px] flex-col items-center p-6 sm:p-10 rounded-[17.41px] bg-[#181B1E]">
        <h2
          id="cancel-delete-title"
          className="text-[24px] sm:text-[35.2px] font-inter font-semibold leading-[121%] text-center text-white m-0"
        >
          Confirm Delete
        </h2>

        <p className="text-[14px] sm:text-[21.12px] mt-2 sm:mt-[10px] mb-2 sm:mb-[8px] max-w-[280px] sm:max-w-[400px] font-inter font-medium leading-[121%] text-center text-[#919499]">
          By clicking delete, you confirm you want Quiktis to remove your event.
        </p>

        <div
          className="my-4 sm:my-8 flex items-center justify-center"
          aria-hidden
        >
          <Image
            src="/icons/cancel-delete-registration.svg"
            alt="Cancel delete graphic"
            width={160}
            height={160}
            className="w-[100px] h-[100px] sm:w-[160px] sm:h-[160px] block h-auto"
          />
        </div>

        <div className="flex flex-col items-center justify-center w-full gap-3 sm:gap-[15px]">
          <button
            onClick={onClose}
            className="w-full sm:w-[436.51px] h-[50px] sm:h-[65.13px] rounded-[176.01px] bg-white border-none flex items-center justify-center"
            aria-label="Cancel"
          >
            <span className="text-[18px] sm:text-[28.16px] font-inter font-medium leading-[121%] text-black">
              Cancel
            </span>
          </button>

          <button
            onClick={onDelete}
            className="w-full sm:w-[436.51px] h-[50px] sm:h-[65.13px] rounded-[176.01px] bg-[#FF000017] border-none flex items-center justify-center"
            aria-label="Delete"
          >
            <span className="text-[18px] sm:text-[28.16px] font-inter font-medium leading-[121%] text-[#FF0000]">
              Delete
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CancelDeleteModal;
export type { CancelDeleteModalProps };
