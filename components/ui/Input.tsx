import React, { useState } from 'react';

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  label?: string;
}

const Input: React.FC<InputProps> = ({ value, onChange, type = 'text', placeholder, className, disabled = false, label }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col gap-2 relative">
      {label && <label className="">{label}</label>}
      <input
        type={type === 'password' && showPassword ? 'text' : type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`rounded py-3 px-4 w-full ${className}`}
        disabled={disabled}
      />
      {type === 'password' && (
        <button
          type="button"
          onClick={handleTogglePassword}
          className="absolute top-14 right-2 bottom-0 transform -translate-y-1/2 text-gray-500"
        >
          {showPassword ? 'Hide' : 'Show'}
        </button>
      )}
    </div>
  );
};

export default Input;