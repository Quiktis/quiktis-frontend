import React from "react";

interface FormInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

export default function FormInput({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
}: FormInputProps) {
  return (
    <div className="w-full md:w-auto">
      <label className="block mb-2 text-[7.59px] md:text-[20px] font-inter font-medium leading-[100%] text-[#FFFFFF]">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full lg:w-[447px] h-[25.0581px] lg:h-[66px] rounded-[4.96px] lg:rounded-[13.06px] border-[0.17px] lg:border-[0.44px] border-[#9194994F] px-2 lg:px-4 bg-transparent text-white placeholder:text-[#666666] focus:outline-none focus:ring-0 transition-colors text-[7.59px] lg:text-[20px] font-inter font-medium leading-[100%]"
        // style={{
        //   backdropFilter: "blur(4.9589px)",
        // }}
      />
    </div>
  );
}
