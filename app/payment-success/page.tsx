import Image from "next/image";
import Link from "next/link";
import { IoTicketSharp } from "react-icons/io5";
import { FaFileAlt } from "react-icons/fa";
import { FcHome } from "react-icons/fc";

export default function PaymentSuccessPage() {
  return (
    <div className="min-h-screen bg-transparent text-white">
      {/* Wrapper to allow overlap */}
      <div className="relative w-full">
        {/* Header */}
        <div className="text-center py-8 relative z-20">
          <h1 className="text-4xl font-bold mb-2">Payment Successful</h1>
          <p className="text-gray-300 text-sm">
            Your ticket has been confirmed. Check your email for details.
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row w-full">
          {/* Left Side – Shift up, reduce size, keep flush left */}
          <div
            className="w-full md:w-1/2 flex items-start justify-start z-10"
            style={{ marginTop: "-14rem" }} // shifted up more
          >
            <div className="relative w-[130%] h-[450px] md:h-[120%]">
              {" "}
              {/* reduced size */}
              <Image
                src="/rocketman.png"
                alt="Person riding a rocket"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Side – Payment Details */}
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
                  ₦10,000 <span className="text-green-500">(Successful)</span>
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col md:flex-row gap-2 justify-start w-full">
                <Link
                  href="/concert-ticket"
                  className="flex items-center justify-center gap-1 bg-[#FF4D2A] text-white md:text-sm text-[10px] py-4 px-3 rounded-md font-medium shadow-[0_0_25px_rgba(255,77,42,0.8)] hover:shadow-[0_0_30px_rgba(255,77,42,1)] transition-shadow w-full">
                  View E-Ticket
                  <IoTicketSharp className="h-3 w-3" />
                </Link>
                <Link
                  href="/download-pdf"
                  className="flex items-center justify-center gap-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white md:text-sm text-[10px] py-4 px-3 rounded-md font-medium shadow-[0_0_25px_rgba(37,99,235,0.8)] hover:shadow-[0_0_30px_rgba(37,99,235,1)] transition-shadow w-full">
                  Download PDF
                  <FaFileAlt className="h-3 w-3" />
                </Link>
                <Link
                  href="/"
                  className="flex items-center justify-center gap-1 bg-transparent text-white md:text-sm text-[10px] py-2 px-3 rounded-md font-medium w-full">
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
