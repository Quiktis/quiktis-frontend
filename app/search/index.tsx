"use client";
import React from "react";
import Image from "next/image";

import SearchHeader from "@/components/search/SearchHeader";
import SearchForm from "@/components/search/SearchForm";
import TagFilters from "@/components/search/TagFilters";
import RecentSearches from "@/components/search/RecentSearches";

export default function SearchPage() {
  return (
    <div className="relative min-h-screen flex flex-col text-white bg-transparent overflow-hidden">
      <Image
        src="/gradient.png"
        alt="Background Gradient"
        fill
        className="object-cover object-center pointer-events-none -z-10"
        priority
      />

      <SearchHeader />

      <main className="container mx-auto px-6 md:px-12 py-10 flex-grow">
        {/* Top Section */}
        <div className="mb-8 flex flex-col md:flex-row items-start gap-8 md:gap-40">
          <div className="flex-1">
            <h1 className="text-5xl md:text-7xl font-bold">SEARCH...</h1>
            <p className="text-base md:text-lg mt-2">
              Stay Ahead of the Curve with Quiktis’ Cutting-Edge Solutions
            </p>
          </div>
          <div className="mt-8 md:mt-0 md:ml-auto">
            <TagFilters />
          </div>
        </div>

        <SearchForm />

        <div className="mt-12">
          <RecentSearches />
        </div>
      </main>
    </div>
  );
}
