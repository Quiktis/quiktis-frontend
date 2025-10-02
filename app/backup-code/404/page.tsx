"use client"

import Image from "next/image"
import Link from "next/link"
import { IoArrowBack } from "react-icons/io5"
import Button from "@/components/ui/CustomButton" 


export default function NotFoundPage() {
  return (
    <>
      <div className="absolute inset-x-0 top-0 z-10 w-full h-screen bg-[#13060D]"></div>
      
      <div className="min-h-screen flex items-center justify-center p-4 pb-16 relative z-20 overflow-visible">
      {/* Content */}
      <div className="relative z-30 text-center max-w-md mx-auto flex flex-col items-center justify-center gap-6">
        {/* Robot Image */}
        <Image
          src="/robot-404.jpg"
          alt="404 Error Robot"
          width={450}
          height={550}
          className="mx-auto -mt-16 md:-mt-16 -mt-28"
          priority
        />

        {/* Error Message */}
        <p className="text-gray-300 text-lg font-medium tracking-wide">
         { `It looks like you've hit a dead end.`}
        </p>

        {/* Back to Home Button */}
        <Link href="/">
          <Button
            className="bg-transparent border border-white text-white hover:bg-white/10 hover:text-white transition-all duration-300 px-6 py-3 rounded-full backdrop-blur-sm flex items-center justify-center"
          >
            <IoArrowBack className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>

      {/* Bottom Gradient Effect */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#13060D] to-transparent z-10"></div>
    </div>
    </>

  )
}
