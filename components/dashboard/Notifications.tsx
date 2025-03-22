"use client";
import React from "react";

const notificationsData = [
  {
    id: 1,
    label: "EVENT UPDATE",
    title:
      "HEADLINE LOREM IPSUM DOLOR SIT AMET CONSECTETUR. MORBI UT",
    subheading:
      "Sub heading. Lorem ipsum dolor sit amet consectetur.",
    date: "May 23, 2024",
    position: "left1",
  },
  {
    id: 2,
    label: "ALERT",
    title:
      "HEADLINE LOREM IPSUM DOLOR SIT AMET CONSECTETUR. MORBI UT",
    subheading:
      "Sub heading. Lorem ipsum dolor sit amet consectetur.",
    date: "May 23, 2024",
    position: "right",
  },
  {
    id: 3,
    label: "EVENT UPDATE",
    title:
      "HEADLINE LOREM IPSUM DOLOR SIT AMET CONSECTETUR. MORBI UT",
    subheading:
      "Sub heading. Lorem ipsum dolor sit amet consectetur.",
    date: "May 23, 2024",
    position: "left2",
  },
];

const Notifications: React.FC = () => {
  return (
    <section className="relative w-full h-[900px] p-8 text-white">
      <h3 className="text-2xl font-bold uppercase tracking-wide mb-8">
        Notification
      </h3>
      {/* Background SVG */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg width="100%" height="100%">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#A6A7AD" />
              <stop offset="100%" stopColor="#13161B" />
            </linearGradient>
          </defs>
          <path
            d="
              M 640,216
              h 50
              a 15 15 0 0 1 15 15
              v 50
              a 15 15 0 0 0 15 15
              h 150 
              a 15 15 0 0 1 15 15
              v 40
            "
            stroke="url(#lineGradient)"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="
              M 400,463
              h -50
              a 15 15 0 0 0 -15 15
              v 50
              a 15 15 0 0 1 -15 15
              h -150
              a 15 15 0 0 0 -15 15
              v 40
            "
            stroke="url(#lineGradient)"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>

      {notificationsData.map((notif) => {
        let desktopPositionClasses = "";
        if (notif.position === "left1") {
          desktopPositionClasses = "sm:left-10 sm:top-[120px]";
        } else if (notif.position === "right") {
          desktopPositionClasses = "sm:right-10 sm:top-[350px]";
        } else if (notif.position === "left2") {
          desktopPositionClasses = "sm:left-10 sm:top-[600px]";
        }
        let labelColor = "#2E9000";
        if (notif.label === "ALERT") {
          labelColor = "#E80000";
        }

        return (
          <div
            key={notif.id}
            className={`
              relative sm:absolute z-10
              ${desktopPositionClasses}
              w-full sm:w-[600px]
              p-6
              bg-black/30
              rounded-[20px]
              border border-[#F68B61]
              shadow-[0_0_20px_rgba(246,139,97,0.7)]
            `}
          >
            <span
              className="font-semibold text-sm uppercase"
              style={{ color: labelColor }}
            >
              {notif.label}
            </span>
            <h4 className="text-lg font-bold mt-2 leading-5">
              {notif.title}
            </h4>
            <p className="text-gray-400 text-sm mt-2">
              {notif.subheading}
            </p>
            <div className="text-gray-300 text-xs mt-3">
              {notif.date}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Notifications;
