import React from "react";
import CheckoutFree from "./checkout-free";
import CheckoutPaid from "./checkout-paid";

type Props = {
  searchParams?: {
    state?: string;
  };
};

export default function Page({ searchParams }: Props) {
  const state = (searchParams?.state ?? "free").toLowerCase();

  if (state === "paid") {
    return <CheckoutPaid />;
  }

  return <CheckoutFree />;
}
