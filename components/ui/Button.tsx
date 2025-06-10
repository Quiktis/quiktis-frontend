import React from "react";
import Link from "next/link";
import { LuLoaderCircle } from "react-icons/lu";

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
  loading?: boolean | null;
  loaderClass?: string;
  href?: string; 
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  type = "button",
  className = "",
  disabled = false,
  style,
  loading = null,
  loaderClass = "",
  href,
}) => {
  const button = (
    <button
      type={type}
      onClick={onClick}
      className={`text-white py-2 px-4 justify-center rounded flex gap-1 ${
        className || "bg-primary"
      }`}
      disabled={disabled}
      style={style}>
      {children}
      {loading && (
        <LuLoaderCircle className={`animate-spin ml-2 ${loaderClass}`} />
      )}
    </button>
  );

  return href ? <Link href={href}>{button}</Link> : button;
};

export default Button;
