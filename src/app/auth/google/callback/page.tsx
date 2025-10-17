"use client";
import { Suspense } from "react";
import Redirect from "../redirect";

export default function Page() {
  return (
    <Suspense fallback={<div></div>}>
      <Redirect />
    </Suspense>
  );
}
