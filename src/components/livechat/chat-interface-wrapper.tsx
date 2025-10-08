"use client";

import React from "react";
import Image from "next/image";
import ChatInterface from "./chat-interface";

export default function ChatInterfaceWrapper() {
  return (
    <div className="flex flex-col w-full">
      {/* Profile header */}
      <div
        className="
          flex flex-col items-start gap-2
          px-2 py-3
          sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-4 sm:py-4
          mb-4
        ">
        <div className="flex items-center gap-2 sm:gap-3">
          <div
            className="
              h-10 w-10 sm:h-12 sm:w-12
              rounded-full overflow-hidden
              border border-gray-700
            ">
            <Image
              src="/jax.png"
              alt="Profile"
              width={48}
              height={48}
              className="rounded-full"
            />
          </div>
          <div>
            <h3 className="text-white text-sm sm:text-base font-medium">
              Jaxson Siphron
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm">
              Jaxsonsiphron@gmail.com
            </p>
          </div>
        </div>

        {/* Status */}
        <div
          className="
            flex items-center justify-between w-full
            gap-3
            sm:w-auto sm:justify-start sm:gap-9
          ">
          <div className="flex items-center gap-1">
            <div className="h-2 w-2 rounded-full bg-green-500" />
            <span className="text-gray-300 text-xs sm:text-sm">Online</span>
          </div>
          <button
            className="
              bg-transparent text-white
              text-xs sm:text-sm
              py-1 px-2 sm:py-1 sm:px-3
              rounded-md
              flex items-center gap-1
              border border-white
            "
            aria-label="Stop chat">
            <span style={{ fontSize: 12, lineHeight: 1 }}>×</span>
            <span>Stop chat</span>
          </button>
        </div>
      </div>

      {/* Chat */}
      <ChatInterface />
    </div>
  );
}
