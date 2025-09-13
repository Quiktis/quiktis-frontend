"use client"
import React, { useState } from 'react';
import { FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
//import Countdown from 'react-countdown';
import Image from 'next/image';
import Button from '@/components/ui/CustomButton';
import Input from '@/components/ui/CustomInput';

const features = [
  { id: 1, icon: '/star2.png', title: 'Secure, fraud-free transactions' },
  { id: 2, icon: '/star2.png', title: 'Easy-to-use platform for event organizers' },
  { id: 3, icon: '/star2.png', title: 'Lower fees and transparent pricing' },
];

const ComingSoon: React.FC = () => {
  const [email, setEmail] = useState('');
  const predefinedStartDate = new Date('2024-12-05T00:00:00'); 
  const targetDate = new Date(predefinedStartDate);
  targetDate.setDate(predefinedStartDate.getDate() + 18);

  return (
    <div className="min-h-screen  text-white mt-[70px] p-2 w-full ">
        <div className='w-full flex flex-col'>
        <Image
            src={'/ellipse3.png'}
            alt='ellipse'
            width={900}
            height={900}
            className='absolute top-0 left-0 -z-50'
            />
            <Image
            src={'/ellipse2.png'}
            alt='ellipse'
            width={900}
            height={900}
            className='absolute top-0 right-0'
            />
                    <h1 className="text-3xl md:text-[100px] leading-none font-bold z-50">
                    Something Exciting<br /> is Coming Soon!
                </h1>
                <p className="mt-4 text-lg md:text-xl">
                    Quikits is building the next generation of event ticketing, ensuring transparency,
                    <br className="hidden md:block" />
                    security, and convenience for organizers and attendees alike.
                </p>
       <div className="mt-6 flex flex-col">
                        <Button
                        onClick={() => alert('Stay Updated')}
                        className="px-4 py-2 md:px-5 md:py-3 bg-quikitsOrange text-white rounded-lg w-full md:w-[200px]"
                        >
                        Stay Updated
                        </Button>
      </div>
      <div className="mt-10 flex flex-col gap-6 md:flex-row md:gap-8 w-full items-center justify-between">
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Input Email here"
          className="w-full md:w-[600px] py-2 rounded-lg border-2 bg-black border-primary text-white placeholder-gray-400 focus:ring-2 focus:ring-quikitsOrange"
        />
        <div className="text-center md:text-left">
          <p className="mb-2">Connect with us on:</p>
          <div className="flex gap-3 justify-center md:justify-start">
            <a href="mailto:support@quiktis.com" className="text-red-500">
              <FaGoogle size={24} />
            </a>
            <a href="https://ng.linkedin.com/company/quiktis" className="text-blue-700">
              <FaLinkedin size={24} />
            </a>
            <a href="https://www.instagram.com/quiktis" className="text-pink-500">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.twitter.com/quiktis" className="text-blue-400">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>
        </div>
 

      <div className="flex flex-col md:flex-row justify-between gap-6 bg-quikitsGray text-white w-full mt-32 p-2 md:p-6 ">
        <div className="grid w-full gap-6 md:gap-4">
          {features.map((feature) => (
            <div key={feature.id} className="flex items-center">
              <Image src={feature.icon} alt={feature.title} width={40} height={40} />
              <h3 className="text-lg md:text-xl font-semibold ml-4">{feature.title}</h3>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-xl md:text-2xl font-bold">Launching Soon</h1>
          {/*<Countdown date={targetDate} className="text-2xl md:text-[32px]" />*/}
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;