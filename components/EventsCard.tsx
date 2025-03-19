"use client"
import Image from 'next/image';
import React from 'react';
import Button from './ui/Button';
import { IoTicketSharp } from 'react-icons/io5';
import { FaLongArrowAltRight } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface EventProps {
  image: string;
  alt: string;
  price: string;
  onClick: () => void;
  heading: string;
  title: string;
  description: string;
  date: string; // Changed to string for better formatting
  country: string;
  slug: string;
}

const EventsCard: React.FC<EventProps> = ({
  image,
  alt,
  price,
  onClick,
  heading,
  title,
  description,
  date,
  country,
  slug,
}) => {
  const router = useRouter()
  return (
    <div className='w-[300px] h-[615px] cursor-pointer flex flex-col gap-4' onClick={()=>router.push(`/events${slug}`)}>
      <div className='relative'>
        <Image
          src={image}
          alt={alt}
          width={300}
          height={320}
          className='rounded-[15px] object-cover bg-cover h-[320px] w-[300px]'
        />
        <div className='absolute h-full flex flex-col justify-between right-4 bottom-0 py-5'>
          <div className='px-2 rounded-[25px] py-2 flex justify-center items-center newsletter-bg'>
            {price}
          </div>
          <Button className='bg-primary flex gap-3 justify-center text-white py-3 items-center rounded-[15px]' onClick={onClick}>
            Get Ticket
            <IoTicketSharp />
          </Button>
        </div>
      </div>
      <h2 className='text-[16px]'>{heading}</h2>
      <h4 className='text-[#666666] text-[12px]'>{title}</h4>
      <p className='text-[12px]'>{description}</p>
      <div className='flex justify-between items-center'>
        <div>{date}</div>
        <h4>{country}</h4>
        <Link href={slug} className='flex gap-2 justify-center items-center rounded-md'>
          Read more
          <FaLongArrowAltRight />
        </Link>
      </div>
    </div>
  );
};

export default EventsCard;