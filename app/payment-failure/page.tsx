import Image from "next/image";
import Link from "next/link";
import { IoReload } from "react-icons/io5"; 
import { FcHome } from "react-icons/fc";

export default function PaymentFailurePage() {
  return (
    <div className="min-h-screen bg-transparent text-white">
      <div className="relative w-full">
        {/* Header */}
        <div className="text-center py-8 relative z-20">
          <h1 className="text-4xl font-bold mb-2">Payment Failed</h1>
          <p className="text-gray-300 text-sm">
            Your transaction was unsuccessful. Please try again.
          </p>
        </div>

        {/* Main Content */}
        <div
          className="flex flex-col md:flex-row w-full"
          style={{ marginTop: "1rem" }} 
        >
          {/* Left Side */}
          <div className="w-full md:w-1/2 flex items-start justify-start z-10">
            <div
              className="relative w-[140%] h-[500px] md:h-[130%]"
              style={{ marginTop: "-5rem" }} 
            >
              <Image
                src="/thinkingman.png"
                alt="Person thinking"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full md:w-1/2 flex flex-col justify-start pt-16 md:pt-14 px-4 md:px-12">
            <div className="space-y-6">
              <div className="grid grid-cols-2">
                <span>Event Name</span>
                <span className="font-medium">Afro Vibes Concert 2025</span>
              </div>
              <div className="grid grid-cols-2">
                <span>Date and Time</span>
                <span className="font-medium">April 15, 2025 — 7:00 PM</span>
              </div>
              <div className="grid grid-cols-2">
                <span>Location</span>
                <span className="font-medium">Lagos Convention Center</span>
              </div>
              <div className="grid grid-cols-2">
                <span>Ticket ID</span>
                <span className="font-medium">#TXN-20394821</span>
              </div>
              <div className="grid grid-cols-2">
                <span>Number of Tickets</span>
                <span className="font-medium">2 General Admission</span>
              </div>
              <div className="grid grid-cols-2">
                <span>Total Paid</span>
                <span className="font-medium">
                  ₦10,000 <span className="text-red-500">(Failed)</span>
                </span>
              </div>

              <div className="flex flex-col md:flex-row gap-0 justify-start w-full">
                <Link
                  href="/retry"
                  className="flex items-center justify-center gap-1 bg-[#FF4D2A] text-white md:text-sm text-[10px] py-4 px-12 rounded-md font-medium shadow-[0_0_25px_rgba(255,77,42,0.8)] hover:shadow-[0_0_30px_rgba(255,77,42,1)] transition-shadow">
                  Retry
                  <IoReload className="h-3 w-3" />
                </Link>

                <Link
                  href="/"
                  className="flex items-center justify-center gap-1 bg-transparent text-white md:text-sm text-[10px] py-3 px-3 rounded-md font-medium w-full">
                  Go Home
                  <FcHome className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
