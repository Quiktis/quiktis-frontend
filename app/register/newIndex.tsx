"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Mutations } from "../ApiServices/mutations";
import Button from "@/components/ui/Button";
import Image from "next/image";
import SigninForm from "./components/SigninForm";
import { useStore } from "../lib/store";


export function SignUpScreen() {

  const [isNewUser, setIsNewUser] = useState(true);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const { signUp, login } = Mutations();

  const { message, messageType, loading, setMessage } = useStore()
  //const message = useStore((state) => state.message);
  //const loading = useStore((state) => state.loading);
  
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isNewUser) {
      await signUp({
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        password: formData.password,
      });
    } else {
      await login({
        email: formData.email,
        password: formData.password,
      });
    }
  };

  useEffect(() => {
    if (messageType === "error") {
      const timer = setTimeout(() => {
        setMessage(null, null); // hide after 3 s
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message, messageType, setMessage]);

  

  const searchParams = useSearchParams();


  // ✅ initialize form mode based on URL param
  useEffect(() => {
    const mode = searchParams.get("mode");
    if (mode === "signin") setIsNewUser(false);
    if (mode === "signup") setIsNewUser(true);
  }, [searchParams]);


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


  return (
    <div
      className={`min-h-screen flex ${
        isNewUser ? "" : "flex-row-reverse"
      } gap-7 w-full md:w-[83%] mx-auto mt-[3em] lg:mt-0`}
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
            {isNewUser ? "Get Started with Quiktis" : "Lets get you back in!"}
          </h1>
          <p className="font-semibold leading-relaxed text-[0.95em] text-[#AAAAAA] max-w-[70%] mx-auto">
            {isNewUser
              ? "Complete these easy steps to register your account."
              : "Use your registered email and password to log in your account. "}
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-[95%] mx-auto lg:w-1/2 flex items-center justify-center p-1 py-[2em] lg:p-2">
        <div className="w-full max-w-md space-y-8">
          {/* Header */}
          <div className="text-center">
            <h2 className="text-lg md:text-[1.5em] lg:text-[1.5em] font-medium text-white mb-2">
              {isNewUser ? "Sign Up Account" : "Sign In Account"}
            </h2>
            <p className="text-gray-400 text-sm mb-[3.2em]">
              {isNewUser
                ? "Enter your personal details to create your account."
                : "Enter your registered details to sign in."}
            </p>
          </div>

          {/* Error message block ✅ */}
          {message && messageType === "error" && (
            <div className={`text-center text-red-500 bg-red-500/10 border border-red-500/30 rounded-lg py-3 px-3 text-sm`}>
              {message}
            </div>
          )}

          {/* Social buttons */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Button
                variant="outline"
                className="bg-transparent border-gray-700 text-white hover:bg-gray-800/30 h-12 gap-[0.4em]"
              >
                <Image src="/google-color.svg" alt="icon" height={17} width={17} />
                <span className="my-auto">Google</span>
              </Button>
              <Button
                variant="outline"
                className="bg-transparent border-gray-700 text-white hover:bg-gray-800/30 h-12 gap-[0.4em]"
              >
                <Image src="/apple-logo.svg" alt="icon" height={13.5} width={13.5} />
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
          <SigninForm
           handleSubmit={handleSubmit}
            handleInputChange={handleInputChange}
            formData={formData}
            isNewUser={isNewUser}
            loading={loading}
          />

          {/* Toggle */}
          <p className="text-center text-gray-400 font-medium">
            {isNewUser ? "Already have an account? " : "Don’t have an account? "}
            <button
              onClick={() => {
                setIsNewUser(!isNewUser);
              }}
              className="text-[#EA4335] font-medium underline"
            >
              {isNewUser ? " Log In" : " Sign Up"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
