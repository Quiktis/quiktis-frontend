import React from "react";

interface InputFieldProps {
  label: string;
  type: string;
  placeholder: string;
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ label, type, placeholder, required = false }) => {
  return (
    <div className="relative flex flex-col gap-1">
      <label className="absolute bg-black -top-2 text-primary left-2 px-1 font-semibold">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="p-2 border bg-inherit border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"
        required={required}
      />
    </div>
  );
};

export default InputField;