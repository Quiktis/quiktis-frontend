"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { SocialButton } from '@/components/ui/SocialButton';
import useAxios from '../hooks/useAxios';
import { useUser } from '../context/UserContext';
import { useRouter, useSearchParams } from 'next/navigation';
import { useGoogleLogin } from "@react-oauth/google";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { sendRequest, loading, setLoading } = useAxios();
  const [error, setError] = useState("");
  const [isProcessing, setIsProcessing] = useState(false); // NEW state
  const { setUser } = useUser();
  const [googleLoading, setGoogleLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();  // This hook will help you get query parameters

  // State to store message if it exists in the URL
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    // Extract the email and message from the URL query parameters if they exist
    const emailFromUrl = searchParams.get('email');
    const messageFromUrl = searchParams.get('message');
    if (emailFromUrl) {
      setEmail(emailFromUrl);
    }
    if (messageFromUrl) {
      setMessage(messageFromUrl);
      setTimeout(() => setMessage(""), 6000);
    }
  }, [searchParams]);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading || isProcessing) return; // Prevent multiple clicks

    console.log("sending request");
    setIsProcessing(true); // Start tracking entire process

    try {
      const response = await sendRequest({
        url: `/api/auth/login`,
        headers: { "Authorization": "Bearer 12345" },
        method: "POST",
        body: { email, password },
      });

      console.log(response);

      if (response?.status === "error") {
        setLoading(false);
        setIsProcessing(false);
        setError(response.message)
        setTimeout(() => setError(""), 6000)
        return
      }

      if (response.status === "success") {
        const user = {
          userId: response.data.user.id,
          name: response.data.user.name,
          email: response.data.user.email,
          role: response.data.user.role,
          token: response.data.token,
        };
        setUser(user);
        localStorage.setItem("quiktis_user", JSON.stringify(user));
        router.push("/dashboard");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => { setIsProcessing(false); }, 10000);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      if (googleLoading) return;
      console.log("testing google auth with backend");
      setGoogleLoading(true);
      const response = await fetch("/api/auth/google");
      const data = await response.json();
      if (data.url) {
        window.location.href = data.url; // Redirect to Google OAuth
      }
    } catch (error) {
      console.error("Google OAuth failed:", error);
    }
    setGoogleLoading(false);
  };

  return (
    <div className="flex md:grid grid-cols-[1.6fr_2fr] gap-[3.5em] justify-center text-white overflow-hidden mt-5 items-center w-full md:w-[86%] mx-auto">
      <div className="flex-1 flex flex-col justify-center p-6 ">
        {/* Display the message if it exists */}
        {message && <p className="border border-gray-300 px-5 py-6 mb-6 text-center text-gray-300">{message}</p>}
        <h1 className="text-4xl font-bold mb-1">Welcome back!</h1>
        <p className="mb-4">Login to your account</p>
        
        <form className="w-full space-y-4" onSubmit={handleSubmit}>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            label='Email Address'
            required={true}
            placeholder="Enter your email address here"
            className="bg-black border border-[#CBCAD7] text-white placeholder-gray-500"
          />
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            label='Password'
            required={true}
            placeholder="Enter your password here"
            className="bg-black border border-[#CBCAD7] text-white placeholder-gray-500 placeholder:text-sm text-sm md:text-[17px]"
          />
          {error && <div className="text-red-500 text-[0.95em] mb-[-3em]">{error}</div>}
          <Button type="submit" loading={isProcessing} loaderClass='mt-1 ml-[-0.04em]' className="w-full justify-center py-4 mt-4 bg-primary">
            Login
          </Button>
        </form>
        <div className="mt-6 w-full">
          <div className='flex items-center justify-center gap-2 my-6'>
            <div className='flex-grow border-t border-[#808080]'></div>
            <p className="text-center mb-0 px-2">Continue with</p>
            <div className='flex-grow border-t border-[#808080]'></div>
          </div>
          <SocialButton googleLogin={handleGoogleLogin} googleLoading={googleLoading} />
          <p className="mt-6 w-full flex justify-center">
            Don&apos;t have an account? <Link href={'/register'} className="text-orange-500 cursor-pointer ml-2">Sign Up</Link>
          </p>
        </div>
      </div>
      <div className='flex justify-center w-full h-[740px] max-md:hidden'>
        <Image unoptimized={true} src="/authImage.png" alt="auth" className='object-cover bg-cover rounded-[25px] w-full' width={17} height={740} />
      </div>
    </div>
  );
};

export default LoginPage;
