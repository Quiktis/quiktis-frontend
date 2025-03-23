import React from 'react';
import { FaApple, FaFacebookF, FaGoogle, FaTwitter } from 'react-icons/fa';
import Button from './Button';
import { LuLoaderCircle } from 'react-icons/lu';

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

interface SocialButtonProps {
  googleLogin: () => any;
  googleLoading?: boolean
}


export const SocialButton: React.FC<SocialButtonProps> = ({googleLogin, googleLoading}) => {
  return (
    <div className="grid grid-cols-2 gap-2 items-center">
    <AuthButton onClick={googleLogin} className='flex gap-3 w-full' icon={<FaGoogle size={20} />}>
      Login with Google {googleLoading && <LuLoaderCircle className={`animate-spin ml-2`} />}
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

