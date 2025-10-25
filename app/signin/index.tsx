"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { SocialButton } from "@/components/ui/SocialButton";
import { useSearchParams } from "next/navigation";
import { mutations } from "../../ApiServices/mutations";
import { useStore } from "../context/QuiktisContext";

const LoginPage: React.FC = () => {
  const [googleLoading, setGoogleLoading] = useState(false);
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { login, isLoggingIn } = mutations();
  const { state } = useStore();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    // Extract the email and message from the URL query parameters if they exist
    const emailFromUrl = searchParams.get("email");
    if (emailFromUrl) {
      setFormData((prev) => ({ ...prev, ["email"]: emailFromUrl }));
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await login({
      email: formData.email,
      password: formData.password,
    });
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
    <div className="mb-[5em] flex md:grid grid-cols-[1.6fr_2fr] gap-[3.5em] justify-center text-white overflow-hidden mt-5 items-center w-full lg:w-[86%] mx-auto">
      <div className="flex-1 flex flex-col justify-center md:p-6 ">
        <h1 className="text-4xl font-bold mb-1">Welcome back!</h1>
        <p className="mb-4">Login to your account</p>

        <form className="w-full space-y-4" onSubmit={handleSubmit}>
          <Input
          
            value={formData.email}
            name="email"
            onChange={handleInputChange}
            type="Email"
            label="Email Address"
            required={true}
            placeholder="Enter your email address here"
            className="bg-black border border-[#CBCAD7] text-white placeholder-gray-500"
          />
          <Input
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            type="password"
            label="Password"
            required={true}
            placeholder="Enter your password here"
            className="bg-black border border-[#CBCAD7] text-white placeholder-gray-500 placeholder:text-sm text-sm md:text-[17px]"
          />
          {state.messageType === "error" && state.message && (
            <div className="text-red-500 text-[0.95em] mb-1">
              {state.message}
            </div>
          )}
          <Button
            type="submit"
            loading={isLoggingIn}
            loaderClass="mt-1 ml-[-0.04em]"
            className="w-full justify-center py-4 mt-4 bg-primary"
          >
            Login
          </Button>
        </form>
        <div className="mt-6 w-full">
          <div className="flex items-center justify-center gap-2 my-6">
            <div className="flex-grow border-t border-[#808080]"></div>
            <p className="text-center mb-0 px-2">Continue with</p>
            <div className="flex-grow border-t border-[#808080]"></div>
          </div>
          <SocialButton
            googleLogin={handleGoogleLogin}
            googleLoading={googleLoading}
          />
          <p className="mt-6 w-full flex justify-center">
            Don&apos;t have an account?{" "}
            <Link
              href={"/register"}
              className="text-orange-500 cursor-pointer ml-2"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
      <div className="flex justify-center w-full h-[740px] max-md:hidden">
        <Image
          unoptimized={true}
          src="/authImage.png"
          alt="auth"
          className="object-cover bg-cover rounded-[25px] w-full"
          width={17}
          height={740}
        />
      </div>
    </div>
  );
};

export default LoginPage;
