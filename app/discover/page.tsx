import React from "react";
import DiscoverActive from "./DiscoverActive";
import DiscoverInactive from "./DiscoverInActive";

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

  if (state === "inactive") {
    return <DiscoverInactive />;
  }

  return <DiscoverActive />;
}
