"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Input from "@/src/components/ui/CustomInput";
import Button from "@/src/components/ui/CustomButton";
import { SocialButton } from "@/src/components/ui/SocialButton";
import { useForm } from "react-hook-form";
import { loginSchema, loginType } from "@/src/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutations } from "@/src/ApiServices/hooks/useMutations";
import { useStore } from "@/src/lib/store";

const LoginPage: React.FC = () => {
  const { message, loading } = useStore();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<loginType>({
    mode: "onChange",
    resolver: zodResolver(loginSchema),
  });
  const signIn = useMutations().login;
  const initiateGoogle = useMutations().initiateGoogle;
  const onSubmit = async (data: loginType) => {
    await signIn(data);
    reset()
  };
  const handleInitiateGoogle=async()=> {
      initiateGoogle
  }
  return (
    <div className="mb-[5em] flex md:grid grid-cols-[1.6fr_2fr] gap-[3.5em] justify-center text-white overflow-hidden mt-5 items-center w-full lg:w-[86%] mx-auto">
      <div className="flex-1 flex flex-col justify-center md:p-6 ">
        {/* Display the message if it exists */}
        {message && (
          <p className="border border-gray-300 px-5 py-6 mb-6 text-center text-gray-300">
            {message}
          </p>
        )}
        <h1 className="text-4xl font-bold mb-1">Welcome back!</h1>
        <p className="mb-4">Login to your account</p>

        <form className="w-full space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="email"
            {...register("email")}
            label="Email Address"
            required={true}
            placeholder="Enter your email address here"
            className="bg-black border border-[#CBCAD7] text-white placeholder-gray-500"
          />
          <Input
            type="password"
            label="Password"
            required={true}
            error={errors?.password}
            {...register("password")}
            placeholder="Enter your password here"
            className="bg-black border border-[#CBCAD7] text-white placeholder-gray-500 placeholder:text-sm text-sm md:text-[17px]"
          />
          <Button
            type="submit"
            loading={loading}
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
          googleLogin={handleInitiateGoogle}
          // googleLoading={googleLoading}
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
