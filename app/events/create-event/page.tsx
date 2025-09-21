"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import CreateEventInactive from "@/components/events/CreateEventInactive";
// import CreateEventActive from "@/components/events/CreateEventActive";

export default function CreateEventPage() {
  const searchParams = useSearchParams();
  const isActive = (searchParams?.get("active") ?? "false") === "true";

  return (
    <div className="min-h-screen bg-[#131517] text-white">
      <main className="w-[90%] lg:w-[85%] mx-auto pt-20 md:pt-28 pb-10">
        {isActive ? <CreateEventActive /> : <CreateEventInactive />}
      </main>
    </div>
  );
}
