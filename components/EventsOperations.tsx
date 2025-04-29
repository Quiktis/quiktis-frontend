"use client";
import React from "react";
import { FaPlus, FaCog, FaChartBar, FaBell } from "react-icons/fa";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const operations = [
  {
    title: "Create Event",
    href: "/create-events",
    icon: <FaPlus size={24} />,
  }
];

const EventsOperations = () => {
  const router = useRouter();

  return (
    <div className="flex justify-between w-full mt-3 px-4">
      <ul className="flex gap-[3em]">
        <li>
        <Link href={"#"} className="text-[1.1em]">My Profile</Link>
        </li>
        <li>
        <Link href={"#"} className="text-[1.1em]">My Tickets</Link>
        </li>
        <li>
        <Link href={"#"} className="text-[1.1em]">Notification</Link>
        </li>
        <li>
        <Link href={"#"} className="text-[1.1em]">Reviews</Link>
        </li>
      </ul>
      {operations.map((op, index) => (
        <Button
          key={index}
          onClick={() => router.push(`${op.href}`)}
          className="px-[2.2em] py-5 w-fit h-fit rounded-[20px] bg-primary flex leading-none items-center justify-center gap-3 icon transition-all text-[16px] duration-300 shadow-xl shadow-[#ff4e2a42]">
          <Image src="/icons/event.svg" height={24} width={24} alt="icon"/>
          <span className="text-lg font-medium">{op.title}</span>
        </Button>
      ))}
    </div>
  );
};

export default EventsOperations;
