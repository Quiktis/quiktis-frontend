import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, type = 'button', className, disabled = false, style }) => (
  <button
    type={type}
    onClick={onClick}
    className={`bg-[#F68B61] text-white py-2 px-4 rounded ${className}`}
    disabled={disabled}
    style={style}
  >
    {children}
  </button>
);

export default Button;