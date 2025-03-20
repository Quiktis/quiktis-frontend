"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { SocialButton } from "@/components/ui/SocialButton";
import useAxios from "../hooks/useAxios";

const RegisterPage: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreed, setAgreed] = useState(false);
  const { sendRequest, loading, error } = useAxios();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("sending request")
    //if (password == "" || fullName == "" || email == "") return null;
    try {
      //if (!agreed) return alert("You must agree to the terms to continue.");
      //if (password !== confirmPassword) return alert("Passwords do not match.");

      const response = await sendRequest({
        url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/events`, // Use environment variable for base URL
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: { name: fullName, email, password },
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
      <div className="flex-1 flex flex-col p-6  w-[505px]">
        <h1 className="text-[44px] font-bold">Welcome!!!</h1>
        <p className="mb-6">Create Your Quikitis Account</p>
        <form className="w-full space-y-4" onSubmit={handleRegister}>
          <Input
            value={fullName}
            label="Full Name"
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter your full name here"
            className=" bg-black border border-[#CBCAD7] text-white placeholder-gray-500 placeholder:text-sm text-sm md:text-[17px]"
          />
          <Input
            value={email}
            label="Email Address"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email address here"
            className=" bg-black border border-[#CBCAD7] text-white placeholder-gray-500 placeholder:text-sm text-sm md:text-[17px]"
          />
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            label="Password"
            placeholder="Enter your password here"
            className=" bg-black border border-[#CBCAD7] text-white placeholder-gray-500 placeholder:text-sm text-sm md:text-[17px]"
          />
          <Input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            label="Confirm Password"
            placeholder="Enter your password here"
            className=" bg-black border border-[#CBCAD7] text-white placeholder-gray-500 placeholder:text-sm text-sm md:text-[17px]"
          />
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={agreed}
              onChange={() => setAgreed(!agreed)}
              className="mr-2"
            />
            <label>I agree to the Terms of Service and Privacy Policy</label>
          </div>
          <Button
            type="submit"
            className="w-full py-4 border-white border mt-4"
            disabled={!agreed}
          >
            Create an account
          </Button>
        </form>
        <div className="mt-6 w-full max-w-md">
          <div className="flex items-center justify-center gap-2 my-6">
            <div className="flex-grow border-t border-[#808080]"></div>
            <p className="text-center mb-0 px-2">Continue with</p>
            <div className="flex-grow border-t border-[#808080]"></div>
          </div>
          <SocialButton />
          <p className="mt-6 w-full flex justify-center">
            Already have an account?{" "}
            <Link
              href={"/signin"}
              className="text-orange-500 cursor-pointer ml-2"
            >
              {" "}
              Sign In
            </Link>
          </p>
        </div>
      </div>
      <div className="flex justify-center w-[707px] h-[950px]">
        <Image
          src="/authImage.png"
          alt="auth"
          className="object-cover bg-cover rounded-[20px]"
          width={707}
          height={950}
        />
      </div>
    </div>
  );
};

export default RegisterPage;
