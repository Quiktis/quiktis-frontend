"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { SocialButton } from '@/components/ui/SocialButton';
import useAxios from '../hooks/useAxios';


const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { sendRequest, loading, error } = useAxios();


  const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      console.log("sending request")
      if (password == "" || email == "") return null;
      try {
        const response = await sendRequest({
          url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/users/login`, // Use environment variable for base URL
          method: "POST",
          body: { email, password },
        });
  
        if (response) {
          console.log(response);
          alert("Signup successful!");
          // Optionally, redirect the user to login
        }
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <div className="flex gap-20 justify-center text-white overflow-hidden mt-5 items-center w-full">
      <div className="flex-1 flex flex-col justify-center p-6 w-[505px]">
        <h1 className="text-4xl font-bold mb-1">Welcome back!</h1>
        <p className="mb-4">Login to your account</p>
        <form className="w-full max-w-md space-y-6">
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            label='Email Address'
            placeholder="Enter your email address here"
            className=" bg-black border border-[#CBCAD7] text-white placeholder-gray-500"
          />
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            label='Password'
            placeholder="Enter your password here"
            className=" bg-black border border-[#CBCAD7] text-white placeholder-gray-500 placeholder:text-sm text-sm md:text-[17px]"
          />
          <Button type="submit" onClick={() => alert('Login')} className="w-full py-4  mt-4 bg-primary">
            Login
          </Button>
        </form>
        <div className="mt-6 w-full max-w-md">
        <div className='flex items-center justify-center gap-2 my-6'>
          <div className='flex-grow border-t border-[#808080]'></div>
          <p className="text-center mb-0 px-2">Continue with</p>
          <div className='flex-grow border-t border-[#808080]'></div>
        </div>
          <SocialButton />
          <p className="mt-6 w-full flex justify-center">
          Don&apos;t have an account? <Link href={'/register'} className="text-orange-500 cursor-pointer ml-2"> Sign Up</Link>
        </p>
        </div>
      </div>
      <div className='flex justify-center w-[707px] h-[950px]'>
        <Image src="/authImage.png" alt="auth" className='object-cover bg-cover' width={707} height={950} />
      </div>
    </div>
  );
};

export default LoginPage;