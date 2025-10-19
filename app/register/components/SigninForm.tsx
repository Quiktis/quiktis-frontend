"use client";
import React, { useState } from "react";
import Label from "@/components/ui/Label";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { Eye, EyeOff } from "lucide-react";

type SigninFormProps = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  };
  isNewUser: boolean;
  loading: boolean;
};

export default function SigninForm({
  handleSubmit,
  handleInputChange,
  formData,
  isNewUser,
  loading
}: SigninFormProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col max-md:gap-4 gap-2 mt-[2em]"
    >
      {/* Name Fields */}
      {isNewUser && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
        </div>
      )}

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
              {showPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          </div>
          {isNewUser && (
            <p className="text-xs text-gray-500">
              Must be at least 8 characters
            </p>
          )}
        </div>
      </div>

      {/* Submit */}
      <Button
        type="submit"
        className="w-full bg-white text-[#2E2E2E] font-bold hover:bg-gray-100 h-12 text-base mt-5"
        disabled={loading}
      >
        {loading ? "Processing..." : isNewUser ? "Sign Up" : "Sign In"}
      </Button>
    </form>
  );
}
