"use client";
import React from "react";

interface UserInfoBoxesProps {
  name: string;
  email: string;
  phone: string;
  address: string;
}

const UserInfoBoxes: React.FC<UserInfoBoxesProps> = ({
  name,
  email,
  phone,
  address,
}) => {
  return (
    <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-40">
      <div
        className="
          p-4
          w-[260px] min-h-[110px]
          bg-[rgba(255,255,255,0.06)] backdrop-blur-md
          border border-[#F68B61]
          rounded-[20px]
          flex flex-col justify-center gap-1
        ">
        <span className="text-sm text-gray-400">Name</span>
        <span className="text-white text-base font-medium leading-tight">
          {name}
        </span>
      </div>

      <div
        className="
          p-4
          w-[260px] min-h-[110px]
          bg-[rgba(255,255,255,0.06)] backdrop-blur-md
          border border-[#F68B61]
          rounded-[20px]
          flex flex-col justify-center gap-1
        ">
        <span className="text-sm text-gray-400">Email</span>
        <span className="text-white text-base font-medium leading-tight">
          {email}
        </span>
      </div>

      <div
        className="
          p-4
          w-[260px] min-h-[110px]
          bg-[rgba(255,255,255,0.06)] backdrop-blur-md
          border border-[#F68B61]
          rounded-[20px]
          flex flex-col justify-center gap-1
        ">
        <span className="text-sm text-gray-400">Phone</span>
        <span className="text-white text-base font-medium leading-tight">
          {phone}
        </span>
      </div>

      <div
        className="
          p-4
          w-[260px] min-h-[110px]
          bg-[rgba(255,255,255,0.06)] backdrop-blur-md
          border border-[#F68B61]
          rounded-[20px]
          flex flex-col justify-center gap-1
        ">
        <span className="text-sm text-gray-400">Address</span>
        <span className="text-white text-base font-medium leading-tight break-words">
          {address}
        </span>
      </div>
    </div>
  );
};

export default UserInfoBoxes;
