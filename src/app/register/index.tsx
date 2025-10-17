"use client";

import type React from "react";
import { useState } from "react";
import Label from "@/src/components/ui/Label";
import Input from "@/src/components/ui/Input";
import Button from "@/src/components/ui/Button";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, registerType } from "@/src/lib/schema";
import UploadImage from "@/src/components/ui/UploadImage";
import { useMutations } from "@/src/ApiServices/hooks/useMutations";
export function SignUpScreen() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<registerType>({
    mode: "onChange",
    resolver: zodResolver(registerSchema),
  });
  const signUp = useMutations().signUp;

  const onSubmit = async (data: registerType) => {
    const {confirm_password, ...payload} = data
    await signUp(payload);
  };
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className={`min-h-screen flex gap-7 w-full md:w-[83%] mx-auto mt-[3em] lg:mt-0`}
    >
      {/* Left Side */}
      <div className="relative hidden lg:flex lg:w-1/2 items-center justify-center overflow-hidden h-[95vh] my-auto rounded-[1.5em] ">
        <Image
          src={"/login-gradient.png"}
          alt="image"
          height={4000}
          width={4000}
          className="h-[100vh] my-auto w-[120%] object-fill"
        />
        <div className="absolute text-center text-white max-w-md">
          <h1 className="text-2xl font-bold mb-2 text-balance mt-[9em] ">
            Get Started with Quiktis
          </h1>
          <p className="font-semibold leading-relaxed text-[0.95em] text-[#AAAAAA] max-w-[70%] mx-auto">
            Complete these easy steps to register your account.
          </p>
        </div>
      </div>

      {/* Right Side */}

      <div className="w-[95%] mx-auto lg:w-1/2 flex items-center justify-center p-1 py-0 py-[2em] lg:p-2">
        <div className="w-full max-w-md space-y-8">
          {/* Header */}
          <div className="text-center">
            <h2 className="text-lg md:text-[1.5em] lg:text-[1.5em] font-medium text-white mb-2">
              Sign Up Account
            </h2>
            <p className="text-gray-400 text-sm mb-[3.2em]">
              Enter your personal details to create your account.
            </p>
          </div>
          {/* Social buttons */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Button
                variant="outline"
                className="bg-transparent border-gray-700 text-white hover:bg-gray-800/30 h-12 gap-[0.4em]"
              >
                <Image
                  src="/google-color.svg"
                  alt="icon"
                  height={17}
                  width={17}
                />
                <span className="my-auto">Google</span>
              </Button>
              <Button
                variant="outline"
                className="bg-transparent border-gray-700 text-white hover:bg-gray-800/30 h-12 gap-[0.4em]"
              >
                <Image
                  src="/apple-logo.svg"
                  alt="icon"
                  height={13.5}
                  width={13.5}
                />
                <span className="my-auto">Apple</span>
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-700 mr-4" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-[#0a0a0a] px-2 text-gray-400">Or</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col max-md:gap-4 gap-2 mt-[2em]"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="Full Name" className="text-white text-sm">
                  Full name
                </Label>
                <Input
                  id="fullName"
                  {...register("name")}
                  error={errors?.name}
                  type="text"
                  placeholder="e.g Anjola Adeyemi"
                  className="bg-[#1A1A1A] border-0 text-white placeholder:text-gray-500  h-12"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white text-sm">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  error={errors?.email}
                  placeholder="eg. Anjolaadeyemi@gmail.com"
                  className="bg-[#1A1A1A] border-0 text-white placeholder:text-gray-500 focus:border-gray-600 h-12"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-white text-sm">
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    {...register("password")}
                    error={errors?.password}
                    placeholder="Create your password"
                    className="bg-[#1A1A1A] border-0 text-white placeholder:text-gray-500 focus:border-gray-600 h-12 pr-12"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-white text-sm">
                  Confirm Password
                </Label>
                <div className="relative">
                  <Input
                    id="confirm_password"
                    type={showPassword ? "text" : "password"}
                    {...register("confirm_password")}
                    error={errors?.confirm_password}
                    placeholder="Confirm your password"
                    className="bg-[#1A1A1A] border-0 text-white placeholder:text-gray-500 focus:border-gray-600 h-12 pr-12"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-white text-sm">
                  Age
                </Label>
                <Input
                  id="age"
                  {...register("age")}
                  error={errors?.age}
                  type="number"
                  placeholder="24"
                  className="bg-[#1A1A1A] border-0 text-white placeholder:text-gray-500  h-12"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location" className="text-white text-sm">
                  Location
                </Label>
                <Input
                  id="location"
                  type="text"
                  {...register("location")}
                  error={errors?.location}
                  placeholder="Bolade steet"
                  className="bg-[#1A1A1A] border-0 text-white placeholder:text-gray-500 focus:border-gray-600 h-12"
                  required
                />
              </div>
            </div>
            <div className="grid grid-rows-1 max-md:gap-4 mt-10 gap-2">
              <UploadImage
                id="picture"
                error={errors.picture}
                height="30vh"
                register={register}
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-[#ff4d2a] text-white font-bold hover:bg-gray-100 h-12 text-base mt-5"
            >
              Register
            </Button>
          </form>
          <p className="text-center text-gray-400 font-medium">
            Already have an account?
            <button className="text-[#EA4335] font-medium underline">
              Log In
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
