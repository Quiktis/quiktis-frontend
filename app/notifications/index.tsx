"use client";
import React from "react";
import DashboardNav from "@/components/dashboard/DashboardNav";
import NotificationItem from "@/components/dashboard/NotificationItem";

interface Notification {
  id: number;
  text: string;
  highlight?: string;
  subText?: string;
  time: string;
}

const notificationsData: Notification[] = [
  {
    id: 1,
    text: "You just sold a ticket -",
    highlight: "Lil Wayne live in Lagos",
    time: "1 min ago",
  },
  {
    id: 2,
    text: "You just sold 2 tickets -",
    highlight: "Lil Wayne live in Lagos",
    time: "5 min ago",
  },
  {
    id: 3,
    text: "You just sold 2 tickets -",
    highlight: "Lil Wayne live in Lagos",
    time: "8 min ago",
  },
  {
    id: 4,
    text: "Maria Hil sent a review",
    subText: "Nice project",
    time: "2 days ago",
  },
  {
    id: 5,
    text: "Maria Hil sent a review",
    subText: "Nice project",
    time: "2 days ago",
  },
  {
    id: 6,
    text: "Maria Hil sent a review",
    subText: "Nice project",
    time: "2 days ago",
  },
  {
    id: 7,
    text: "You just sold 2 tickets -",
    highlight: "Lil Wayne live in Lagos",
    time: "6 min ago",
  },
  {
    id: 8,
    text: "You just sold a ticket -",
    highlight: "Lil Wayne live in Lagos",
    time: "1 min ago",
  },
  {
    id: 9,
    text: "You just sold 2 tickets -",
    highlight: "Lil Wayne live in Lagos",
    time: "5 min ago",
  },
  {
    id: 10,
    text: "You just sold 2 tickets -",
    highlight: "Lil Wayne live in Lagos",
    time: "8 min ago",
  },
  {
    id: 11,
    text: "Maria Hil sent a review",
    subText: "Nice project",
    time: "2 days ago",
  },
  {
    id: 12,
    text: "You just sold a ticket -",
    highlight: "Lil Wayne live in Lagos",
    time: "1 min ago",
  },
  {
    id: 13,
    text: "You just sold 2 tickets -",
    highlight: "Lil Wayne live in Lagos",
    time: "5 min ago",
  },
  {
    id: 14,
    text: "New Event Added -",
    highlight: "Lorem Ipsum",
    time: "3 days ago",
  },
];

const NotificationsPage = () => {
  return (
    <main className="bg-transparent text-white min-h-screen">
      <div className="py-4">
        <DashboardNav />
      </div>

      <div className="py-10">
        <h1 className="text-4xl font-bold mb-2">Notifications</h1>
        <p className="text-gray-400 mb-6">
          Discover events based on your interests. Food, Shows, Gigs...
        </p>

        <ul className="space-y-2">
          {notificationsData.map((notification) => (
            <NotificationItem
              key={notification.id}
              text={notification.text}
              highlight={notification.highlight}
              subText={notification.subText}
              time={notification.time}
            />
          ))}
        </ul>
      </div>
    </main>
  );
};

export default NotificationsPage;
