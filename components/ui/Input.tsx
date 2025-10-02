import React, { useState, useEffect } from 'react';

interface InputProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  showPasswordCriteria?: boolean;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  label?: string | any;
  error?: string;
  required?: boolean;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
}

const Input: React.FC<InputProps> = (
  { 
    value = "", 
    onChange, 
    type = 'text', 
    placeholder, 
    className, 
    disabled = false, 
    label, 
    error, 
    required=false, 
    onFocus,
    onBlur,
    showPasswordCriteria = false 
  }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (type === 'password' && isFocused) {
      if (value.length < 8) {
        setMessage('Password must be at least 8 characters long.');
      } else if (!/[A-Z]/.test(value)) {
        setMessage('Password must include at least one uppercase letter.');
      } else if (!/[a-z]/.test(value)) {
        setMessage('Password must include at least one lowercase letter.');
      } else if (!/[^A-Za-z0-9]/.test(value)) {
        setMessage('Password must include at least one special character (e.g. !  @  #  $  &).');
      } else if (!/\d/.test(value)) {
        setMessage("Password must include at least one number.");
      }
    } else {
      setMessage(null); // Hide message when not focused
    }
  }, [value, type, isFocused]);


  function handleOnFocus(e: React.FocusEvent<HTMLInputElement>) {
    onFocus?.(e)
    setIsFocused(true)
  }

  function handleOnBlur(e: React.FocusEvent<HTMLInputElement>) {
    onBlur?.(e)
    setIsFocused(false)
  }
  

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col gap-2 relative w-full">
      {label && <label className="flex gap-2 text-gray-300 ">{label}{required && <span className="text-red-500">*</span>}</label>}
      <input
        type={type === 'password' && showPassword ? 'text' : type}
        value={value}
        onChange={onChange}
        onFocus={type === "password" ? handleOnFocus : onFocus}
        onBlur={type === "password" ? handleOnBlur : onBlur}
        placeholder={placeholder}
        className={`rounded py-3 px-4 w-full ${className}`}
        disabled={disabled}
        required={required}
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
      {showPasswordCriteria && type === 'password' && isFocused && message && (
        <p className="text-gray-300 text-[0.9em] mt-1">{message}</p>
      )}

      {error && <p className='text-red-500 font-medium text-[0.9em]'>{error}</p>}
    </div>
  );
};

export default Input;