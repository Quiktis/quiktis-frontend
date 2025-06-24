"use client";

import { useState, useRef, useEffect, Suspense } from "react";
import Image from "next/image";
import { FaFileAlt } from "react-icons/fa";
import { IoMdPrint } from "react-icons/io";
import { toPng } from "html-to-image";
import { Event } from "@/constant/customTypes";
// @ts-ignore
import download from "downloadjs";
import { useUser } from "@/app/context/UserContext";
import { formatToHumanReadableDate } from "@/app/utils/utilities";
import useAxios from "@/app/hooks/useAxios";
import { useParams } from "next/navigation";

interface ConcertTicketProps {
  
  qrCodeUrl?: string;
  event: Event
}

function ConcertTicket({ event, qrCodeUrl = "/qrcode.png"} : 
  
  
  
  ConcertTicketProps) {
  const [isHovered, setIsHovered] = useState(false);
  const ticketRef = useRef<HTMLDivElement>(null);
  const { user } = useUser()
  const { sendRequest} = useAxios()
  const params = useParams();
   const slug = params.slug as string[];
  const orderId = slug[0]; // First parameter
  const [order, setOrder] = useState<{ totalPrice?: number }>();
  
  useEffect(() => {
    

      const fetchOrder = async () => {
        try {
          console.log("Fetching order details for orderId:", orderId);
          //console.log("fetching order details for orderId:", orderId);
          const orderDetailsResponse = await sendRequest({
            url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/orders/${orderId}`,
            method: "GET",
            headers: {
              Authorization: `Bearer ${user?.token}`,
            },
          });

          if (orderDetailsResponse.status !== "success") {
            console.error("Failed to fetch order details:", orderDetailsResponse.message);
            return;
          }

          setOrder(orderDetailsResponse.data.order)
          //setTotalPaid(orderDetailsResponse.data.order.totalPrice)
          //setIsAprproved(true)
        } catch(error) {
          console.log(error)
        }
      }

      fetchOrder();
          
  }
  , [])

  const handlePrint = () => {
    if (typeof window !== "undefined") window.print();
  };

  const handleDownload = async () => {
    if (ticketRef.current) {
      try {
        const dataUrl = await toPng(ticketRef.current, {
          cacheBust: true,
          quality: 1,
          pixelRatio: 2,
        });
        download(dataUrl, "e-ticket.png");
      } catch (error) {
        console.error("Download failed", error);
      }
    }
  };

  return (
    <div
      
      className="relative w-full overflow-hidden -mt-12 md:-mt-30"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0a0a0a] via-[#1c1c1c] to-[#2a2a2a] rounded-2xl" />

      <Image
        src="/imgsvg/Vectortop.png"
        alt="Top swoosh"
        width={300}
        height={300}
        className="absolute top-0 left-0 z-1 pointer-events-none "
      />
      <Image
        src="/imgsvg/Vectordown.png"
        alt="Bottom swoosh"
        width={300}
        height={300}
        className="absolute bottom-0 right-0 z-1 pointer-events-none opacity-70"
      />
      <div className="absolute inset-0 border-2 border-dashed border-[#f68b61] rounded-2xl pointer-events-none z-10" />

      <div className="relative z-20 text-white p-6 md:p-10 rounded-2xl" ref={ticketRef}>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <div className="relative flex items-center gap-4 mb-16">
              <div className="absolute -top-10 -left-10 w-80 h-80 bg-[#FF4D2A] opacity-40 rounded-full blur-[120px] z-0" />

              <div className="w-16 h-16 md:w-20 md:h-20 relative z-10">
                <Image
                  src={event?.bannerImage ?? ""}
                  alt="Event logo"
                  fill
                  className="object-cover rounded"
                />
              </div>

              <div className="z-10">
                <h1 className="text-2xl md:text-4xl font-bold tracking-wide">
                  {event?.title}
                </h1>
                <p className="text-sm text-gray-400">
                  {event?.organiser?.name && `Organized by ${event?.organiser?.name}`}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-10 mt-4">
              <div>
                <h2 className="text-xs uppercase text-gray-300 mb-1">
                  Date & Time
                </h2>
                <div className="flex items-center gap-2">
                  <Image
                    src="/icons/calendar.png"
                    alt="Calendar"
                    width={16}
                    height={16}
                  />
                  <p className="font-semibold text-sm">
                    {formatToHumanReadableDate(event?.startDate, event?.startTime)}
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-xs uppercase text-gray-300 mb-1">
                  Ticket Holder
                </h2>
                <p className="font-semibold text-sm">{user?.name}</p>
              </div>

              <div>
                <h2 className="text-xs uppercase text-gray-300 mb-1">Venue</h2>
                <div className="flex items-center gap-2">
                  <span className="text-red-500">📍</span>
                  <p className="font-semibold text-sm">{event?.location}</p>
                </div>
              </div>
              <div>
                <h2 className="text-xs uppercase text-gray-300 mb-1">
                  Ticket Number
                </h2>
                <p className="font-semibold text-sm">#{""}</p>
              </div>
            </div>
            <div className="mt-6">
              <h2 className="text-xs uppercase text-gray-300 mb-1">
                Total Price
              </h2>
              <div className="flex items-center gap-2">
                <Image
                  src="/icons/ticket.png"
                  alt="Ticket icon"
                  width={16}
                  height={16}
                />
                <p className="font-semibold text-sm">{order?.totalPrice}</p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[250px] flex flex-col items-center justify-between text-center gap-4">
            <div className="leading-tight mb-0">
              <p className="text-xs text-white font-medium">Scan at Entrance</p>
              <p className="text-[10px] text-white">
                Valid for one-time entry only
              </p>
            </div>

            <div className="w-full aspect-square relative mt-[-2px]">
              <Image
                src={qrCodeUrl}
                alt="QR Code"
                fill
                className="object-contain rounded-[10px]"
              />
            </div>

            <div className="flex w-full gap-3 mt-2">
              <button
                onClick={handlePrint}
                className="w-1/2 flex items-center justify-center gap-2 py-3 px-2 rounded-[10px] border border-gray-600 text-gray-300 hover:bg-gray-800 transition-colors"
              >
                <span className="text-xs">Print Ticket</span>
                <IoMdPrint size={18} />
              </button>

              <button
                onClick={handleDownload}
                className="w-1/2 flex items-center justify-center gap-2 py-3 px-2 rounded-[10px] bg-[#FF4D2A] text-white hover:bg-[#E03A1A] transition-colors"
              >
                <span className="text-xs">Download PNG</span>
                <FaFileAlt size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



export default function Page({ event, qrCodeUrl = "/qrcode.png"} : 
  
  
  
  ConcertTicketProps) {
  return (
    <Suspense fallback={<div></div>}>
      <ConcertTicket event={event} qrCodeUrl={qrCodeUrl}/>
    </Suspense>
  );
}