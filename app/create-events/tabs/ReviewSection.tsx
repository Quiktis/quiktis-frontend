import React from 'react'
import Button from '@/components/ui/Button'
import { useRouter } from 'next/navigation'
import Image from 'next/image';
import { FaLocationDot } from "react-icons/fa6";
import { RiFileCopy2Fill } from "react-icons/ri";
import { BsPlus } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from 'next/link';
import { EventData } from '@/constant/customTypes';
import { useUser } from '@/app/context/UserContext';
interface ReviewSectionProps {
  eventData: EventData;
  uploadImage: () => void;
  preview: string | null; 
  loading?: boolean;
}

const tags = [
  { tag: "Syracuse Events" },
  { tag: "Syracuse Events" },
  { tag: "Things To Do in Syracuse" },
  { tag: "#tech" },
  { tag: "#trending" },
  { tag: "#thingsToDo" },
];

const socials = [
  { icon: <FaFacebook size={24} />, href: "" },
  { icon: <FaInstagram size={24} />, href: "" },
  { icon: <FaTwitter size={24} />, href: "" },
  { icon: <FaLinkedin size={24} />, href: "" },
];


function formatDateToText(date: Date): string {
  // Get day, month, and year from the Date object
  const day = date.getDate();
  const month = date.getMonth(); // getMonth() returns 0-11
  const year = date.getFullYear();

  // Define an array of month names
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // Add ordinal suffix to the day
  const ordinalSuffix = (n: number) => {
    if (n > 3 && n < 21) return "th"; // Covers 11th to 19th
    switch (n % 10) {
      case 1: return "st";
      case 2: return "nd";
      case 3: return "rd";
      default: return "th";
    }
  };

  const dayWithSuffix = `${day}${ordinalSuffix(day)}`;

  // Return the formatted date
  return `${dayWithSuffix} ${monthNames[month]} ${year}`;
}


const ReviewSection: React.FC<ReviewSectionProps> = ({uploadImage, preview, eventData, loading}) => {
  const router = useRouter();
  const { user } = useUser();

  async function handleClick() {
    try {
      // Wait for the image to be uploaded
      await uploadImage();
  
      // Navigate to the next page after the image is uploaded
      //router.push(`/my-events`);
    } catch (error) {
      console.error("Error during image upload or navigation:", error);
      alert("Failed to upload the image. Please try again.");
    }
  }

  return (
    <div className='flex flex-col gap-9 w-full mt-4'>
      {preview && <section className="flex flex-col md:grid grid-cols-1 md:h-[20em] lg:h-[30em] max-md:h-[25em] h-[40em] lg:gap-11 gap-6">
              <div className="relative w-full h-full">
                 <Image
                  src={preview}
                  alt="Event header"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-[30px]"
                  unoptimized
                />
              </div>
            </section>}


            <section>
        <div className="w-full flex max-sm:flex-wrap md:gap-[4em] h-[max-content]">
          <div className="h-full">
            <h1 className="max-md:text-[1.3em] text-[40px] font-primary font-bold max-w-[100%] w-fit">{eventData?.title || "EVENT TITLE" }</h1>
            <p className="text-gray-500 font-secondary">organized by {user.name}</p>
          </div>
          <div className="grid h-full mr-0 md:ml-auto my-auto md:mt-0 mt-5 md:w-fit w-full">
            <Button
              onClick={() => {}}
              className="text-[16px]  md:w-[150px]  flex items-center justify-center py-3 px-2 drop-shadow-custom-red bg-primary ">
              Get Ticket
            </Button>
          </div>
        </div>
      </section>



      <section className="relative">
        <div className="absolute w-[73%] h-[65em] top-[-12em] radial-gradient blur-3xl opacity-50"></div>
        <div className="relative flex flex-col gap-3 lg:grid grid-cols-[65%_32%] h-[max-content] w-full lg:gap-11">
          <div className="h-fit w-fit min max-md:px-4 md:px-9 lg:px-16 py-3 lg:py-9 glass-bg shadow-xl shadow-white md:rounded-[40px] rounded-lg font-secondary">
            {eventData.description && 
            <div><h1 className="max-md:text-[1.3em] text-[1.8em] lg:text-[40px] font-primary text-primary font-bold max-w-[100%] lg:max-w-[80%]">
              DESCRIPTION
            </h1>
            <p className=''>{eventData?.description || ""}</p>
            </div>}

            <h1 className="mt-6 max-md:text-[1.3em] text-[1.8em] lg:text-[40px] font-primary text-primary font-bold max-w-[100%] lg:max-w-[80%]">
              DATE & TIME
            </h1>
            <div className="flex gap-3 w-full max-sm:flex-wrap sm:flex-wrap">
              <p className="text-gray-300">{eventData?.startDate ? formatDateToText(new Date(eventData.startDate)) : ""}, {eventData?.startTime || ""} - {eventData?.endTime || ""}</p>
              <button className="text-gray-300 mr-0 max-sm:ml-0 sm:ml-0  md:ml-auto flex  gap-1 text-primary">
                <BsPlus size={24} className="m-auto" /> Add to Calender
              </button>
            </div>

            <h1 className="mt-6 max-md:text-[1.3em] text-[1.8em] lg:text-[40px] font-primary text-primary font-bold max-w-[100%] lg:max-w-[80%]">
              TAGS
            </h1>
            <div className="flex flex-wrap gap-2">
              {tags.map((item, index) => (
                <Link
                  key={index}
                  href="#"
                  className="bg-[#ffffff18] max-md:text-sm px-2 py-2 md:px-4 md:py-3 shadow-2xl rounded-xl mb-1 hover:border-2 hover:border-white border-2 border-[transparent]">
                  {item.tag}
                </Link>
              ))}
            </div>

            <h1 className="mt-6 max-md:text-[1.1em] text-[1.5em] lg:text-[25px] font-primary font-semibold max-w-[100%] lg:max-w-[80%]">
              Share with loved ones
            </h1>
            <div className="flex gap-4 flex-wrap">
              <div>
                <span className="mt-4 flex gap-4 text-primary">
                  {socials.map((item, index) => (
                    <Link key={index} href="#" className="hover:text-white">
                      {item.icon}
                    </Link>
                  ))}
                </span>
                <p className="mt-6 flex gap-3">
                  <FaLocationDot size={20} className="my-auto text-primary max-md:text-sm" />{" "}
                  {eventData?.location || ""}
                </p>
              </div>

              <Button
                onClick={() => {}}
                className="mr-0 md:ml-auto mb-3 max-md:mt-3 mt-auto  text-[16px] w-[150px] h-fit flex items-center justify-center py-3 px-2 drop-shadow-custom-red bg-primary ">
                Get Tickets
              </Button>
            </div>
          </div>
          <div className="mt-3 lg:mt-0 flex max-sm:flex-col lg:grid h-full w-full grid-rows-[63.5%_31%] lg:gap-11 gap-6">
            <div className="relative w-full h-[16em] lg:h-full">
              <Image
                src={"/map.png"}
                alt="party 1"
                layout="fill"
                objectFit="cover"
                className="rounded-[30px]"
                objectPosition="50% 80%"
                unoptimized
              />
            </div>
            <div className="relative w-full h-[16em]  lg:h-full bg-white rounded-[30px] px-8 py-7 text-black flex flex-col gap-2 ">
              <h2 className="text-[1.3em] font-semibold">Locate</h2>
              <p className=" text-gray-800">
                {eventData?.location || ""}
              </p>
              <button className="mt-1 w-fit text-primary flex gap-2">
                <RiFileCopy2Fill size={20} className="my-auto" /> Copy Location
              </button>
              <Button
                onClick={() => {}}
                className="font-secondary mr-0 ml-auto mb-0 mt-auto  text-[16px] w-full h-fit flex items-center justify-center py-3 px-2 bg-primary ">
                Open Map
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className='flex gap-4 w-fit mr-0 ml-auto mt-4'>
        <button onClick={() => router.push(`?tab=ticketting`)} type="button" className='py-2 px-4  font-medium'>Back</button>
         <Button loading={loading} loaderClass='mt-1 ml-[-0.04em]' onClick={handleClick} className="w-fit px-7 py-3 font-medium bg-primary">Save & Continue</Button>
                  </div>
  
    </div>
  )
}


export default ReviewSection