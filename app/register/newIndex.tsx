"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";

import Label from "@/components/ui/Label";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import { useUser } from "../context/UserContext";

// Types
interface AuthData {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
}

const signupUser = async (data: AuthData) => {
  const res = await axios.post("/api/auth/signup", {
    name: `${data.firstName} ${data.lastName}`,
    email: data.email,
    password: data.password,
  });
  return res.data;
};

const signinUser = async (data: AuthData) => {
  const res = await axios.post("/api/auth/signin", {
    email: data.email,
    password: data.password,
  });
  return res.data;
};

export function SignUpScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const [isNewUser, setIsNewUser] = useState(true);
  const [formData, setFormData] = useState<AuthData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState<string | null>(null); // ✅ error state

  const router = useRouter();
  const searchParams = useSearchParams();
  const { setUser } = useUser();

  // ✅ initialize form mode based on URL param
  useEffect(() => {
    const mode = searchParams.get("mode");
    if (mode === "signin") setIsNewUser(false);
    if (mode === "signup") setIsNewUser(true);
  }, [searchParams]);

  const signupMutation = useMutation({
    mutationFn: signupUser,
    onSuccess: (data) => {
      setErrorMsg(null);
      router.push("/check-email");
    },
    onError: (error: any) => {
      const msg = error.response?.data?.message || "Signup failed. Please try again.";
      setErrorMsg(msg);
    },
  });

  const signinMutation = useMutation({
    mutationFn: signinUser,
    onSuccess: (data) => {
      setErrorMsg(null);
      if (data.status === "success") {
        const { user, token } = data.data;
        setUser({
          userId: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
          token,
          picture: null,
          age: null,
          location: null,
          payoutDetails: {
            id: "",
            account_number: "",
            account_name: "",
            bank_name: "",
            recipient_code: "",
          },
        });

        localStorage.setItem("quiktis_user", JSON.stringify(user));
        localStorage.setItem("quiktis_token", token);
        router.push("/event");
      }
    },
    onError: (error: any) => {
      const msg =
        error.response?.data?.message || "Signin failed. Please check your credentials.";
      setErrorMsg(msg);
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null); // reset old errors
    if (isNewUser) {
      signupMutation.mutate(formData);
    } else {
      signinMutation.mutate(formData);
    }
  };

  const isLoading = signupMutation.isPending || signinMutation.isPending;

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
      <div className="w-[95%] mx-auto lg:w-1/2 flex items-center justify-center p-1 py-0 py-[2em] lg:p-2">
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
          {errorMsg && (
            <div className="text-center text-red-500 bg-red-500/10 border border-red-500/30 rounded-lg py-2 px-3 text-sm">
              {errorMsg}
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
          <form
            onSubmit={handleSubmit}
            className="flex flex-col max-md:gap-4 gap-2 mt-[2em]"
          >
             {/* Name Fields */}
            {isNewUser && (<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-white text-sm">
                  First name
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="e.g Anjola"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="bg-[#1A1A1A] border-0 text-white placeholder:text-gray-500  h-12"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-white text-sm">
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="e.g Adeyemi"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="bg-[#1A1A1A] border-0 text-white placeholder:text-gray-500  h-12"
                  required
                />
              </div>
            </div>)
            }

            {/* Email Field */}
            <div className="grid grid-rows-1 max-md:gap-4 gap-2">
              <div className="space-y-2">
              <Label htmlFor="email" className="text-white text-sm">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="eg. Anjolaadeyemi@gmail.com"
                value={formData.email}
                onChange={handleInputChange}
                className="bg-[#1A1A1A] border-0 text-white placeholder:text-gray-500 focus:border-gray-600 h-12"
                required
              />
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-white text-sm">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create your password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="bg-[#1A1A1A] border-0 text-white placeholder:text-gray-500 focus:border-gray-600 h-12 pr-12"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              {isNewUser && (<p className="text-xs text-gray-500">Must be at least 8 characters</p>)}
            </div>
            </div>

            {/* Submit */}
            <Button
              type="submit"
              className="w-full bg-white text-[#2E2E2E] font-bold hover:bg-gray-100 h-12 text-base mt-5"
              disabled={isLoading}
            >
              {isLoading ? "Processing..." : isNewUser ? "Sign Up" : "Sign In"}
            </Button>
          </form>

          {/* Toggle */}
          <p className="text-center text-gray-400 font-medium">
            {isNewUser ? "Already have an account? " : "Don’t have an account? "}
            <button
              onClick={() => {
                setErrorMsg(null); // clear errors when switching
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
