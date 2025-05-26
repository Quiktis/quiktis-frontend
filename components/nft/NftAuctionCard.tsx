import React from "react";
import Image from "next/image";
import Link from "next/link";

const NftAuctionCard: React.FC = () => {
  return (
    <div className="flex flex-col">
      <h2 className="text-white text-2xl font-bold mb-4">Tickets</h2>
      
      <div className="flex flex-col md:flex-row gap-4 items-stretch md:max-h-[200px]">
        <div className="flex-1 bg-[#111111] rounded-2xl overflow-hidden shadow-lg p-4">
          <div className="flex flex-col md:flex-row justify-between items-start h-full">
            <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
              <Image
                src="/paintart.jpg" 
                alt="Event Art"
                width={400}
                height={200}
                className="object-cover w-full h-40 rounded-[15px]"
              />
            </div>

            <div className="w-full md:w-1/2 flex flex-col justify-between h-full">
              <div>
                <h2 className="text-white text-lg md:text-xl font-bold mb-1">
                  Davido Concert
                </h2>
                <p className="text-gray-400 text-xs md:text-sm mb-3">
                  31/12/2026
                </p>
                <div className="flex items-center mb-4">
                  <div
                    className="relative w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden mr-3" 
                    style={{
                      border: "1px solid #333", 
                    }}>
                    <Image
                      src="/guyblueshirt.jpg" 
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

        <div className="flex-1 bg-[#111111] rounded-2xl overflow-hidden shadow-lg p-4 mt-4 md:mt-0">
          <div className="flex flex-col md:flex-row justify-between items-start h-full">
            <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
              <Image
                src="/paintart.jpg"
                alt="Event Art"
                width={400}
                height={200}
                className="object-cover w-full h-40 rounded-[15px]"
              />
            </div>

            <div className="w-full md:w-1/2 flex flex-col justify-between h-full">
              <div>
                <h2 className="text-white text-lg md:text-xl font-bold mb-1">
                  Davido Concert
                </h2>
                <p className="text-gray-400 text-xs md:text-sm mb-3">
                  31/12/2026
                </p>
                <div className="flex items-center mb-4">
                  <div
                    className="relative w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden mr-3" 
                    style={{
                      border: "1px solid #333", 
                    }}>
                    <Image
                      src="/guyblueshirt.jpg" 
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

              <div className="flex space-x-2 mt-auto">
                <Link href="/event-details-2" className="w-full">
                  <button className="px-2 md:px-3 py-2 bg-[#E53935] hover:bg-[#D32F2F] text-white rounded-lg font-medium text-xs w-full cursor-pointer">
                    Details
                  </button>
                </Link>
                <Link href="/buy-ticket-2" className="w-full">
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
