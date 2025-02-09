"use client"

import React from 'react';
import Button from '../ui/button';
import { useRouter } from 'next/navigation';
import { FaLongArrowAltRight } from 'react-icons/fa';

const GetStarted = () => {
  const router = useRouter()

  const handleGetStarted = () => {
    router.push('/get-ticket');
  };

  return (
    <Button onClick={handleGetStarted} className='text-sm rounded-[10px] px-8 py-1 flex items-center justify-center gap-2 border-3 border-white'>Get Started <FaLongArrowAltRight /></Button>
  );
};

export default GetStarted;