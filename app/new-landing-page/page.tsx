"use client";
import { useState, useEffect } from "react";
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
import useAxios from "../hooks/useAxios";



export default function NewLandingPage() {
  const [SidebarOpen, setSidebarOpen] = useState(false);
  const [comingUpNext, setComingUpNext] = useState([])
  const { sendRequest } = useAxios();

  useEffect(() => {
      const fetchEvents = async () => {
        try {
          const response = await sendRequest({
            url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/events`,
            method: "GET",
          });
  
          console.log("Events response:", response);
  
          if (response.status === "success") {
            setComingUpNext(response.data.events);
            console.log("Upcoming events - ", comingUpNext)
          } else {
            console.error("Failed to fetch events:", response.message);
          }
        } catch (error) {
          console.error("Error fetching events:", error);
        }
      };
  
      fetchEvents();
    }, []);

    useEffect(() => {
  console.log("Updated upcoming events:", comingUpNext);
}, [comingUpNext]);


  return (
    <main className="relative mt-[-3em]">

      <SearchEventSection />

      <TrustedBrandSection />

      <div className="md:px-[3em]">

      <StrongPointSection />

      <UnlockSection />

      </div>

      <ExploreEventSection containerClass="px-[3em] max-md:px-[0em]"/>

      <ComingUpNext events={[...comingUpNext.slice(1), comingUpNext[0]].slice(0, 4)} containerClass="mt-[6em] w-full mx-auto px-[8em] max-md:px-5" />

      <TakeYourEventManagementSection />
      
      
    </main>
  );
}
