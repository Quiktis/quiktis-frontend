"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { SocialButton } from '@/components/ui/SocialButton';
import useAxios from '../hooks/useAxios';
import { useUser } from '../context/UserContext';
import { useRouter } from 'next/navigation';


const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { sendRequest, loading, error } = useAxios();
  const [isProcessing, setIsProcessing] = useState(false); // NEW state
  const { user, setUser } = useUser();
  const router = useRouter();

  const handleLogin = (userId: string, name: string, email: string ) => {
    setUser({ userId, name, email });
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading || isProcessing) return; // Prevent multiple clicks
    if (!email || !password) return;
  
    console.log("sending request");
    setIsProcessing(true); // Start tracking entire process
  
    try {
      const response = await sendRequest({
        url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login`,
        headers: { "Authorization": "Bearer 12345" },
        method: "POST",
        body: { email, password, secretKey: "12345" },
      });
  
      if (response && response.user && response.user.id) {
        await new Promise((resolve) => {
          setUser({ userId: response.user.id, name: response.user.name, email: response.user.email });
          resolve(null); // Wait for state update
        });
  
        console.log("user details: ", response.user);
        router.push("/create-events");
      }
    } catch (error) {
      console.log(error);
    } finally {
      //setIsProcessing(false); // Reset processing state
      setTimeout(() => {setIsProcessing(false);}, 10000)
    }

    //setTimeout(() => {setIsProcessing(false);}, 40000)
  };

  return (
    <div className="flex gap-20 justify-center text-white overflow-hidden mt-5 items-center w-full">
      <div className="flex-1 flex flex-col justify-center p-6 w-[505px]">
        <h1 className="text-4xl font-bold mb-1">Welcome back!</h1>
        <p className="mb-4">Login to your account</p>
        <form className="w-full max-w-md space-y-6" onSubmit={handleSubmit}>
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
          <Button type="submit" loading={isProcessing} loaderClass='mt-1 ml-[-0.04em]' className="w-full justify-center py-4  mt-4 bg-primary">
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