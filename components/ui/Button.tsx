import React from 'react';
import { LuLoaderCircle } from 'react-icons/lu';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
  style?: React.CSSProperties
  loading?: boolean | null;
  loaderClass?: string; // class for spinner animation  (optional)
}

const Button: React.FC<ButtonProps> = ({ onClick, children, type = 'button', className = '', disabled = false, style, loading = null, loaderClass }) => (
  <button
    type={type}
    onClick={onClick}
    className={`text-white py-2 px-4 justify-center rounded flex gap-1 bg-primary ${className || ''}`}
    disabled={disabled}
    style={style}
  >
    {children}{loading !== null && loading === true && <LuLoaderCircle className={`animate-spin ml-2 ${loaderClass}`} />}
  </button>
);

export default Button;