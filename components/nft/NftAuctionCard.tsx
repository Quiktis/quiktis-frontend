import React from "react";
import Image from "next/image";
import Link from "next/link";

const NftAuctionCard: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <h2 className="text-white text-2xl font-bold mb-4">Tickets</h2>

      {/* Cards Container */}
      <div className="flex flex-col md:flex-row gap-4 items-stretch md:max-h-[200px]">
        {/* Card 1 (Original Left, now with updated right panel) */}
        <div className="flex-1 bg-[#111111] rounded-2xl overflow-hidden shadow-lg p-4">
          {/* Split into image + text columns */}
          <div className="flex flex-col md:flex-row justify-between items-start h-full">
            {/* Left: Artwork */}
            <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
              <Image
                src="/paintart.jpg" // This is the main image for the event/NFT
                alt="Event Art"
                width={400}
                height={200}
                className="object-cover w-full h-40 rounded-[15px]"
              />
            </div>

            {/* Right: Text/details (New Design) */}
            <div className="w-full md:w-1/2 flex flex-col justify-between h-full">
              {/* Top content: Title, Date, Profile */}
              <div>
                <h2 className="text-white text-lg md:text-xl font-bold mb-1">
                  Davido Concert
                </h2>
                <p className="text-gray-400 text-xs md:text-sm mb-3">
                  31/12/2026
                </p>
                {/* Profile section */}
                <div className="flex items-center mb-4">
                  {/* Avatar Container */}
                  <div
                    className="relative w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden mr-3" // Changed to rounded-full
                    style={{
                      border: "1px solid #333", // Subtle border, can be adjusted or removed
                    }}>
                    <Image
                      src="/guyblueshirt.jpg" // Avatar image
                      alt="John Abraham"
                      fill
                      style={{
                        objectFit: "cover", // Cover ensures the image fills the circle
                      }}
                    />
                  </div>
                  <span className="text-white text-sm md:font-medium">
                    John Abraham
                  </span>
                  {/* Green dot removed */}
                </div>
              </div>

              {/* Actions (Buttons at the bottom) */}
              <div className="flex space-x-2 mt-auto">
                <Link href="/event-details-1" className="w-full">
                  <button className="px-2 md:px-3 py-2 bg-[#E53935] hover:bg-[#D32F2F] text-white rounded-lg font-medium text-xs w-full cursor-pointer">
                    Details
                  </button>
                </Link>
                <Link href="/buy-ticket-1" className="w-full">
                  <button className="px-2 md:px-3 py-2 bg-[#FF4D2A] hover:bg-[#F4511E] text-white rounded-lg font-medium text-xs w-full cursor-pointer">
                    Buy Ticket
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 (Original Right, now also with updated right panel) */}
        <div className="flex-1 bg-[#111111] rounded-2xl overflow-hidden shadow-lg p-4 mt-4 md:mt-0">
          {/* Split into image + text columns */}
          <div className="flex flex-col md:flex-row justify-between items-start h-full">
            {/* Left: Artwork */}
            <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
              <Image
                src="/paintart.jpg" // This is the main image for the event/NFT
                alt="Event Art"
                width={400}
                height={200}
                className="object-cover w-full h-40 rounded-[15px]"
              />
            </div>

            {/* Right: Text/details (New Design) */}
            <div className="w-full md:w-1/2 flex flex-col justify-between h-full">
              {/* Top content: Title, Date, Profile */}
              <div>
                <h2 className="text-white text-lg md:text-xl font-bold mb-1">
                  Davido Concert
                </h2>
                <p className="text-gray-400 text-xs md:text-sm mb-3">
                  31/12/2026
                </p>
                {/* Profile section */}
                <div className="flex items-center mb-4">
                  {/* Avatar Container */}
                  <div
                    className="relative w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden mr-3" // Changed to rounded-full
                    style={{
                      border: "1px solid #333", // Subtle border
                    }}>
                    <Image
                      src="/guyblueshirt.jpg" // Avatar image
                      alt="John Abraham"
                      fill
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <span className="text-white text-sm md:font-medium">
                    John Abraham
                  </span>
                </div>
              </div>

              {/* Actions (Buttons at the bottom) */}
              <div className="flex space-x-2 mt-auto">
                <Link href="/event-details-2" className="w-full">
                  {" "}
                  <button className="px-2 md:px-3 py-2 bg-[#E53935] hover:bg-[#D32F2F] text-white rounded-lg font-medium text-xs w-full cursor-pointer">
                    Details
                  </button>
                </Link>
                <Link href="/buy-ticket-2" className="w-full">
                  {" "}
                  <button className="px-2 md:px-3 py-2 bg-[#FF4D2A] hover:bg-[#F4511E] text-white rounded-lg font-medium text-xs w-full cursor-pointer">
                    Buy Ticket
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftAuctionCard;
