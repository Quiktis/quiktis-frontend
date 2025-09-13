"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/CustomButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const SearchHeader = () => {
  const router = useRouter();

  return (
    <header className="flex items-center justify-between px-4 sm:px-6 py-4 bg-transparent">
      {/* Left */}
      <div className="flex items-center gap-2">
        <Image
          src="/quiktis-logo.svg"
          alt="Quiktis Logo"
          width={40}
          height={40}
          priority
        />
        <span className="text-white text-base sm:text-lg font-bold">
          Quiktis
        </span>
      </div>

      {/* Middle*/}
      <div className="hidden md:flex items-center gap-2 bg-[#1A1A1A] px-4 py-2 rounded-md w-[350px] lg:w-[450px]">
        <input
          type="text"
          placeholder="Search Event"
          className="bg-transparent outline-none text-white w-full text-sm"
        />
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="text-white hover:text-gray-300 transition-colors"
          aria-label="Notifications"
        >
          <FontAwesomeIcon icon={faBell} size="lg" />
        </button>
        <Button
          onClick={() => router.push("/tickets")}
          className="bg-[#FF4D2A] hover:bg-[#e74423] text-white px-3 sm:px-4 py-2 rounded-md text-sm"
        >
          Get Tickets
        </Button>
      </div>
    </header>
  );
};

export default SearchHeader;
