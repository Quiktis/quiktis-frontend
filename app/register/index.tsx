"use client";
import React, { useState, useEffect,Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { SocialButton } from "@/components/ui/SocialButton";
import useAxios from "../hooks/useAxios";
//import { useUser } from "../context/UserContext";
import { useRouter, useSearchParams } from "next/navigation";
//import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

type ValidationRule = {
  test: (value: string) => boolean;
  message: string;
};


const passwordRules: ValidationRule[] = [
  {
    test: (pw) => pw.length >= 8,
    message: "Password must be at least 8 characters long.",
  },
  {
    test: (pw) => /[A-Z]/.test(pw),
    message: "Password must include at least one uppercase letter.",
  },
  {
    test: (pw) => /[a-z]/.test(pw),
    message: "Password must include at least one lowercase letter.",
  },
  {
    test: (pw) => /[0-9]/.test(pw),
    message: "Password must include at least one number.",
  },
  {
    test: (pw) => /[^A-Za-z0-9]/.test(pw),
    message: "Password must include at least one special character.",
  },
];

const validateInput = (
  value: string,
  rules: ValidationRule[],
  setError: (msg: string) => void
): boolean => {
  for (const rule of rules) {
    if (!rule.test(value)) {
      setError(rule.message);
      setTimeout(() => setError(""), 3000);
      return false;
    }
  }
  return true;
};

// Inside your submit function or onChange handler:
//const isPasswordValid = validateInput(password, passwordRules, setError);


const RegisterPage: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreed, setAgreed] = useState(false);
  const { sendRequest, loading, setLoading } = useAxios();
  const [error, setError] = useState("");
  //const { user, setUser } = useUser();
  const [isProcessing, setIsProcessing] = useState(false); // NEW state
  const [googleLoading, setGoogleLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [requestLoading, setRequestLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [passwordValid, setPasswordValid] = useState()



  useEffect(() => {
    const handleGoogleCallback = async () => {
      const code = searchParams.get("code");
      if (!code) return;
      if (requestLoading) return;
  
      setRequestLoading(true);
  
      try {
        const res = await fetch("/api/auth/google/callback", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ code }),
        });
  
        const data = await res.json();
        if (data) {
          console.log("response body: ", data);
          console.log("token: ", data.token);
        } else {
          console.error("Authentication failed:", data);
        }
      } catch (error) {
        console.error("Error processing Google auth:", error);
      }
      setRequestLoading(false);
    };
  
    handleGoogleCallback();
  }, [searchParams.toString()]); // Convert to string to avoid unnecessary re-renders
  

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

  
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    

    if(confirmPassword !== password) {
      setError("Passwords dont't match");
      setTimeout(() => setError(""), 3000)
      return
    }

    const isPasswordValid = validateInput(password, passwordRules, setError);

    if (!isPasswordValid) return;
    
    
    if (!agreed) {
      setError("Please agree to the terms to continue.");
      setTimeout(() => setError(""), 3000)
      return;
    }
    
    console.log("Sending registration request...");
    setIsProcessing(true);
  
     // Start tracking entire process


    if (loading || isProcessing) return; // Prevent multiple submissions
    setError("");
  
    try {
      const response = await axios.post(
    `/api/auth/signup`,
    {
      name: fullName,
      email: email,
      password: password,
      role: "organizer",
    },
    {
      headers: { "Content-Type": "application/json" },
      withCredentials: true, // if your backend uses cookies
    }
  );

  console.log("response from registration: ", response.data);

  if (response.data?.status === "success") {
    router.push("/check-email");
  }

  if (response.data?.status === "error") {
    setLoading(false);
    setIsProcessing(false);
    setError(response.data.message);
    setTimeout(() => setError(""), 4000);

    if (response.data.redirectStatus === "user exists") {
      const redirectUrl = `/signin?email=${encodeURIComponent(
        email
      )}&message=${encodeURIComponent(response.data.message)}`;
      router.push(redirectUrl);
    }
  }
    } catch (error) {
      console.log(error);
      setError("Registration failed. Please try again.");
    } finally {
      setTimeout(() => {setIsProcessing(false);}, 10000)
    }
  };

  return (
    <div className="relative max-md:mb-[5em]  md:flex lg:grid grid-cols-[1.6fr_2fr] gap-[3em] justify-center text-white overflow-hidden mt-5 items-center w-full lg:w-[86%] mx-auto">
      <div className="flex-1 flex flex-col lg:p-6 w-full">
        <h1 className="text-[44px] font-bold">Welcome!!!</h1>
        <p className="mb-6">Create Your Quikitis Account</p>
        <form className="w-full space-y-4" onSubmit={handleRegister}>
          <Input
            value={fullName}
            label="Full Name"
            required={true}
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
            required={true}
            className=" bg-black border border-[#CBCAD7] text-white placeholder-gray-500 placeholder:text-sm text-sm md:text-[17px]"
          />
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            label="Password"
            required={true}
            showPasswordCriteria={true}
            placeholder="Enter your password here"
            className=" bg-black border border-[#CBCAD7] text-white placeholder-gray-500 placeholder:text-sm text-sm md:text-[17px]"
          />
          <Input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            label="Confirm Password"
            required={true}
            placeholder="Enter your password here"
            className=" bg-black border border-[#CBCAD7] text-white placeholder-gray-500 placeholder:text-sm text-sm md:text-[17px]"
            error={confirmPassword !== password ? "Passwords don't match" : ""}
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
          {error && <div className="text-red-500 text-[0.95em]">{error}</div>}
          {message && <div>{message}</div>}
          <Button
            type="submit"
            className="w-full py-4 border-white bg-primary text-white mt-4"
            //disabled={!agreed}
            loading={isProcessing}
            loaderClass='mt-[0.24em] ml-[-0.005em]'
          >
            Create an account
          </Button>
        </form>
        <div className="mt-6 w-full">
          <div className="flex items-center justify-center gap-2 my-6">
            <div className="flex-grow border-t border-[#808080]"></div>
            <p className="text-center mb-0 px-2">Continue with</p>
            <div className="flex-grow border-t border-[#808080]"></div>
          </div>
          <SocialButton googleLogin={handleGoogleLogin} googleLoading={googleLoading}/>
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
      <div className="tablet-hidden md:flex justify-center w-full lg:w-[90%] mx-auto sm:w-[48%] h-[950px]">
        <Image
          src="/authImage.png"
          alt="auth"
          className="object-cover bg-cover rounded-[25px] w-full max-h-[90%] sm:h-[70%]"
          width={707}
          height={950}
        />
      </div>
    </div>
  );
};





export default function Page() {
  return (
    <Suspense fallback={<div></div>}>
      <RegisterPage />
    </Suspense>
  );
}
