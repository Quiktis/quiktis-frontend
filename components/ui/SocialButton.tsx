import React from 'react';
import { FaApple, FaFacebookF, FaGoogle, FaTwitter } from 'react-icons/fa';
import Button from './Button';

interface SocialLoginButtonProps {
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
  icon: React.ReactNode;
}

export const AuthButton: React.FC<SocialLoginButtonProps> = ({ onClick, className, children, icon }) => {
  return (
    <Button onClick={onClick} className={`flex text-sm items-center justify-center bg-black max-w-[242px] h-[64px] border border-[#808080] ${className}`}>
      <span className="mr-2">{icon}</span>
      {children}
    </Button>
  );
};


export const SocialButton = () => {
  return (
    <div className="grid grid-cols-2 gap-2 items-center">
    <AuthButton onClick={() => alert('Login with Google')} icon={<FaGoogle size={20} />}>
      Login with Google
    </AuthButton>
    <AuthButton onClick={() => alert('Login with Apple')} icon={<FaApple size={20} />}>
      Login with Apple
    </AuthButton>
    <AuthButton onClick={() => alert('Login with Facebook')}  icon={<FaFacebookF size={20} />}>
      Login with Facebook
    </AuthButton>
    <AuthButton onClick={() => alert('Login with Twitter')} icon={<FaTwitter size={20} />}>
      Login with Twitter
    </AuthButton>
  </div>
  )
}

