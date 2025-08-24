"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { formatToHumanReadableDate } from "@/app/utils/utilities";
import { MdDelete } from "react-icons/md";
import Button from "../ui/Button";
import useAxios from "@/app/hooks/useAxios";
import { useUser } from "@/app/context/UserContext";
import { FiEdit2 } from "react-icons/fi";
import Link from "next/link";

interface EventCardProps {
  title: string;
  subtitle?: string;
  description?: string;
  date: Date;
  location?: string;
  price?: number | string;
  image?: string;
  time: string;
  eventId?: string;

}



const EventCard: React.FC<EventCardProps> = ({
  title,
  subtitle,
  description,
  date,
  location,
  price,
  image,
  eventId
}) => {
  const router = useRouter();

   const [deletePopup, setDeletePopup] = useState(false)
    const [isDeleting, setIsDeleting] = useState(false)
    const { sendRequest, loading } = useAxios();
    const { user } = useUser();

     const deleteEvent = async () => {
  if (loading || isDeleting) return;

 

  try {
    

    const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/events/${eventId}`;
    console.log("delete url: ", url);

    const response = await sendRequest({
      url,
      method: "DELETE",
      headers: { Authorization: `Bearer ${user.token}` },
    });

    if (response?.status === "success") {
     

  setDeletePopup(false);


      
    } else {
      console.log(response,);
      alert(response?.message || "Failed to delete payout details.");
    }
  } catch (error) {
    console.log("Error deleting payout details:", error);
  } finally {
    setIsDeleting(false);
    
  }
};

  return (
    <div className="w-full md:max-w-[320px] h-auto flex flex-col gap-1 mt-3">
      {/* Image Section */}
      <div className="relative  rounded-[16px] ">
        <Image
          src={`${image}`}
          alt={title}
          width={320}
          height={280} 
          className="rounded-[15px] object-cover w-full h-[280px] md:w-[320px] md:h-[280px]"
          unoptimized={true}
        />
        <div className="absolute top-[8px] right-[8px] flex items-center justify-center w-[65px] h-[28px] p-[10px] rounded-[8px] bg-[#FFFFFF26] gap-[10px] text-white text-sm">
          {`₦${price}`}
        </div>
        
        <div className="absolute bottom-2 right-2">
          {/*<button
            onClick={(e) => {
              e.stopPropagation();
              //router.push(getTicketUrl);
            }}
            className="bg-primary flex gap-2 justify-center text-white py-2 items-center rounded-[10px] px-3 text-sm">
            Get Ticket <IoTicketSharp size={16} />
          </button>*/}
        </div>

        <div className="absolute w-full h-full top-0 bottom-0 left-0 right-0 flex justify-between">
          <button onClick={() => setDeletePopup(true)} className="mb-4 mt-auto ml-4 p-2 bg-[#0e0e0e9d] rounded-sm shadow-md w-fit h-fit" >
            <MdDelete size={22} />
          </button>

            <Link href={`/edit-event/${eventId}`} className="mb-4 mt-auto mr-4 p-2 bg-[#0e0e0e9d] rounded-sm shadow-md w-fit h-fit" >
            <FiEdit2 size={22} />
          </Link>
          {/*<button className="flex gap-2 items-center absolute bg-[#0c0c0c] shadow-xl border-[1.8px] rounded-md border-primary  px-3 py-2 w-fit h-fit bottom-[3em] left-6 pr-4" onClick={() => setDeletePopup(true)
          }>
            <MdDelete size={18} />Delete
          </button>*/}
          
        </div>
      </div>

      <div className="mt-6 flex flex-col">
        <h2 className="text-[1.2em] font-bold">{title}</h2>
        {/*<h4 className="text-[#666666] text-[12px]">{subtitle}</h4>*/}
        {/*<p className="hidden text-[12px]">{description}</p>*/}
      </div>

      <div className="flex justify-between items-center w-full">
        <p className="text-xs text-[#dcdcdc] md:text-sm">{formatToHumanReadableDate(`${date}`)}</p>
        <p className="text-xs text-[#dcdcdc] md:text-sm">{location}</p>
      </div>

      {deletePopup && <>
      <div className="fixed w-full top-0 bottom-0 right-0 left-0 bg-black opacity-50 z-[100]"></div>
      <div className="grid place-items-center fixed w-full top-0 bottom-0 right-0 left-0 z-[100]">
        <div className="bg-[#131313] border border-[#ffffff65] h-fit w-fit px-8 py-9  rounded-md space-y-7 max-sm:w-[90%] ">
          <p>Are you sure you want to delete this event?</p>
          <div className="grid grid-cols-2 gap-5 w-full">
            <Button loading={loading} loaderClass="mt-[0.16em] ml-[-0.005em]" className="font-medium px-3 py-2 rounded-md h-fit bg-primary hover:scale-[1.04] transition" onClick={deleteEvent} >Yes</Button>
            <button className="font-medium border px-3 py-2 rounded-md border-[#ffffff65] hover:bg-[#ffffff1a] hover:scale-[1.04] transition" onClick={() => (setDeletePopup(false))}>No</button>
          </div>
        </div>
      </div></>
}
    </div>


  );
};

export default EventCard;
