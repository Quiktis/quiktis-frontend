import React from "react";
import DiscoverActive from "./DiscoverActive";

type Props = {
  searchParams?: Promise<{
    state?: string;
  }>;
};

export default async function Page(props: Props) {
  const searchParams = await props.searchParams;
  const state = (searchParams?.state ?? "active").toLowerCase();

  if (state === "active") {
    return <DiscoverActive />;
  }

  // fallback: render active if anything else
  return <DiscoverActive />;
}
