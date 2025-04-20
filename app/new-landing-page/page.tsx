"use client";
import { useState } from "react";
import React from "react";
import ComingUpNext from "@/components/ComingUpNext";
import Footer from "@/components/NewFooter";
import NewHeader from "@/components/NewHeader";
import Sidebar from "@/components/Sidebar";
import SearchEventSection from "./sections/SearchEventSection";
import StrongPointSection from "./sections/StrongPointSection";
import TrustedBrandSection from "./sections/TrustedBrandSection";
import UnlockSection from "./sections/UnlockSection";
import ExploreEventSection from "./sections/ExploreEventSection";
import TakeYourEventManagementSection from "./sections/TakeYourEventManagementSection";



export default function NewLandingPage() {
  const [SidebarOpen, setSidebarOpen] = useState(false);

  return (
    <main className="relative mt-[-3em]">

      <SearchEventSection />

      <TrustedBrandSection />

      <div className="md:px-[3em]">

      <StrongPointSection />

      <UnlockSection />

      </div>

      <ExploreEventSection containerClass="px-[3em]"/>

      <ComingUpNext containerClass="mt-[6em] w-full mx-auto px-[8em] max-md:px-5" />

      <TakeYourEventManagementSection />
      
      

      
      <Footer />
    </main>
  );
}
