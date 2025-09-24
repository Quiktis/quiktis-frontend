import React from "react";
import DiscoverActive from "./DiscoverActive";

type Props = {
  searchParams?: {
    state?: string;
  };
};

export default function Page({ searchParams }: Props) {
  const state = (searchParams?.state ?? "active").toLowerCase();

  if (state === "active") {
    return <DiscoverActive />;
  }

  // fallback: render active if anything else
  return <DiscoverActive />;
}
