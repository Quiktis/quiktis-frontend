"use client";
import React from "react";
import { FaPlus } from "react-icons/fa";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useUser } from "@/app/context/UserContext";

const operations = [
  {
    title: "Create Event",
    href: "/create-events",
    icon: <FaPlus size={24} />,
  },
];

const navLinks = [
  { path: "/dashboard", label: "My Profile", roles: ["user", "organizer"] },
  { path: "/my-events", label: "My Events", roles: ["organizer"] },
  { path: "/my-tickets", label: "My Tickets", roles: ["user", "organizer"] },
  { path: "/notifications", label: "Notification", roles: ["user", "organizer"] },
  { path: "/reviews", label: "Reviews", roles: ["user", "organizer"] },
];

const EventsOperations = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { user } = useUser();

  if (!user) return null; // optionally show loading/skeleton if user not loaded

  return (
    <div className="max-sm:hidden flex justify-between w-full mt-3 my-3">
      <ul className="flex gap-[2.5em] h-fit my-auto">
        {navLinks
          .filter((link) => {
            console.log(user.role, link.roles);
            return (user.email)}
          ) // ✅ filter by user role with type guard
          .map((link) => (
            <li key={link.path}>
              <div className="group flex flex-col items-center">
                <Link href={link.path} className="text-[1.1em]">
                  {link.label}
                </Link>
                {pathname === link.path ? (
                  <div className="h-[3px] w-[75%] bg-primary mt-[0.35em] rounded-full ml-0 mr-auto"></div>
                ) : (
                  <div className="h-[3px] w-[75%] bg-gray-300 mt-[0.35em] rounded-full opacity-0 group-hover:opacity-100 transition-opacity ml-0 mr-auto"></div>
                )}
              </div>
            </li>
          ))}
      </ul>

      {operations.map((op, index) => (
        <Button
          key={index}
          onClick={() => router.push(op.href)}
          className="hidden px-[2em] py-4 w-fit h-fit rounded-[20px] bg-primary lg:flex leading-none items-center justify-center gap-3 icon transition-all text-[16px] duration-300 shadow-xl shadow-[#ff4e2a42]"
        >
          <Image src="/icons/event.svg" height={24} width={24} alt="icon" />
          <span className="text-lg font-medium">{op.title}</span>
        </Button>
      ))}
    </div>
  );
};

export default EventsOperations;
