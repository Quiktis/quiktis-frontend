"use client";

import { useEffect, useState } from "react";


export default function VerifyAccountPage() {

  //const { setUser } = useUser();


  const [dots, setDots] = useState(".");
 
 
 
 

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev === "." ? ".." : prev === ".." ? "..." : "."));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  

  return (
    <section className="min-h-[90vh] grid place-items-center">
      <div className="flex flex-col gap-3 justify-center min-w-[15em] text-center px-8 py-6 bg-[#7a7a7a1c] border border-gray-600 rounded-md shadow-md">
          <h1>Check your email for the verification link{dots}</h1>
 
      </div>
    </section>
  );
};
