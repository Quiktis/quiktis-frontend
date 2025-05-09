import React from "react";

interface InputFieldProps {
  name?: string;
  label?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  className?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  label,
  type,
  value,
  placeholder,
  required = false,
  onChange,
  className
}) => {
  return (
    <div className={`relative flex flex-col gap-1 ${className}`}>
      <label className="absolute bg-[#0c0c0c] top-[-0.8em] text-primary left-4 px-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        className="p-3 border bg-inherit border-[#ffffff56] rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"
        required={required}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
