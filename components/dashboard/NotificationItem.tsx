"use client";
import React from "react";

interface NotificationItemProps {
  text: string;
  highlight?: string;
  subText?: string;
  time: string;
}

const NotificationItem: React.FC<NotificationItemProps> = ({
  text,
  highlight,
  subText,
  time,
}) => {
  return (
    <li className="py-4 border-b border-gray-800">
      {/* Main Text */}
      <div className="text-white text-base">
        {text}
        {highlight && <span className="text-[#FF4D2A]"> {highlight}</span>}
      </div>
      <div className="mt-1 text-gray-400 text-sm">{time}</div>
      {subText && <p className="text-gray-400 mt-1 text-sm">{subText}</p>}
    </li>
  );
};

export default NotificationItem;
