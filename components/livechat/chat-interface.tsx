"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";

type Message = {
  id: number;
  sender: "user" | "other";
  text: string;
  time: string;
};

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "other",
      text: "Hello, how can we help you today?",
      time: "3:15 pm",
    },
    {
      id: 2,
      sender: "user",
      text: "ipsum dolor sit amet consectetur…",
      time: "3:15 pm",
    },
    {
      id: 3,
      sender: "other",
      text: "ipsum dolor sit amet consectetur endum…bib",
      time: "3:15 pm",
    },
    {
      id: 4,
      sender: "user",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.",
      time: "3:15 pm",
    },
    {
      id: 5,
      sender: "other",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.",
      time: "3:15 pm",
    },
    {
      id: 6,
      sender: "user",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.",
      time: "3:15 pm",
    },
  ]);

  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    const msg: Message = {
      id: messages.length + 1,
      sender: "user",
      text: newMessage,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setMessages((prev) => [...prev, msg]);
    setNewMessage("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col w-full h-[500px] sm:h-[600px] rounded-[20px] overflow-hidden bg-[#111111]">
      {/* Message list */}
      <div className="flex-1 overflow-y-auto p-2 sm:p-3 space-y-3">
        {messages.map((m, i) => {
          const isUser = m.sender === "user";
          const prev = messages[i - 1];
          const showAvatar =
            i === 0 || prev.sender !== m.sender || prev.time !== m.time;

          return (
            <div
              key={m.id}
              className={`flex ${
                isUser ? "justify-start" : "justify-end"
              } items-end gap-2`}>
              {isUser && showAvatar && (
                <div className="flex-shrink-0 h-5 w-5 sm:h-6 sm:w-6 rounded-full overflow-hidden mt-1">
                  <Image
                    src="/mansmile.png"
                    alt="Andrew Tjay avatar"
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                </div>
              )}
              <div className={`flex flex-col ${isUser ? "" : "items-end"}`}>
                {showAvatar && (
                  <div className="flex items-center gap-1 text-xs mb-1">
                    {isUser ? (
                      <span className="text-white">Andrew Tjay</span>
                    ) : (
                      <span className="text-[#F68B61]">Chat bot</span>
                    )}
                    <span className="text-[#888888]">· {m.time}</span>
                  </div>
                )}
                <div
                  className={`
                    max-w-[180px] sm:max-w-[240px] md:max-w-[360px]
                    px-3 sm:px-4 py-2
                    text-sm sm:text-base
                    rounded-[10px]
                    ${
                      isUser
                        ? "bg-[#222222] text-white"
                        : "bg-[#563629] text-white"
                    }
                  `}>
                  {m.text}
                </div>
              </div>
            </div>
          );
        })}
        <div ref={messagesEndRef} />
      </div>

      {/* Input area */}
      <div className="p-3 sm:p-4">
        <div className="flex items-center justify-center gap-2 sm:gap-3">
          <input
            type="text"
            placeholder="Type your message here"
            className="w-full sm:w-3/4 bg-[#222222] text-[#777777] placeholder-[#777777] text-sm sm:text-base rounded-full py-2 px-3 sm:px-4 focus:outline-none"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            onClick={handleSendMessage}
            className="bg-[#FF5722] text-white p-2 rounded-full flex-shrink-0"
            aria-label="Send message">
            <FaLocationArrow size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
