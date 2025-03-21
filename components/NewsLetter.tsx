"use client";
import Image from 'next/image';
import React from 'react';
import Button from './ui/Button';
import Input from './ui/Input';

const NewsLetter = () => {
  return (
    <div className='w-full px-4 sm:px-6 md:px-12'>
      <div className='relative flex flex-col items-center md:flex-row justify-between w-full -z-50'>
        <Image
          src={'/mask-fade.svg'}
          alt='mask-fade'
          width={200}
          height={200}
          className='hidden md:block -left-20 absolute'
        />
        <Image
          src={'/mask-green.svg'}
          alt='mask-green'
          width={200}
          height={200}
          className='hidden md:block -right-20 absolute'
        />

        <div className='w-full max-w-4xl bg-gray-800 text-white rounded-[40px] border-2 shadow-lg flex flex-col gap-4 justify-center p-6 md:p-10 relative z-50 newsletter-bg'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-center md:text-left'>
            Get the latest updates from <span className='text-primary'>Quiktis</span>
          </h1>
          <p className='text-center md:text-left text-sm sm:text-base'>
            Subscribe to our newsletter and be the first to get the latest updates from <span className='text-primary'>Quiktis</span>
          </p>
          <div className='flex flex-col sm:flex-row gap-4 w-full'>
            <Input
              value={''}
              onChange={() => {''}}
              type="email"
              placeholder="Input email here"
              className="bg-opacity-15 bg-white py-3 border border-[#CBCAD7] text-black placeholder-gray-500 rounded-[15px] px-6 sm:px-8 md:px-12"
            />
            <Button className='py-3 rounded-[15px] bg-primary px-6 sm:px-10 md:px-14 w-full sm:w-auto' onClick={() => {''}}>
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
