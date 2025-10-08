import React from 'react';
import { FaApple, FaFacebookF, FaGoogle, FaTwitter } from 'react-icons/fa';
import Button from './CustomButton';
import { LuLoaderCircle } from 'react-icons/lu';

interface SocialLoginButtonProps {
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
  icon: React.ReactNode;
  
}

export const AuthButton: React.FC<SocialLoginButtonProps> = ({ onClick, className, children, icon }) => {
  return (
    <Button onClick={onClick} className={`flex text-sm items-center justify-center bg-black h-[64px] border border-[#808080] ${className}`}>
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
    <div className="grid max-md:grid-cols-1 grid-cols-2 gap-2 items-center">
    <AuthButton onClick={googleLogin} className='flex gap-3 w-full bg-transparent' icon={<FaGoogle size={20} />}>
      Login with Google {googleLoading && <LuLoaderCircle className={`animate-spin ml-2`} />}
    </AuthButton>
    <AuthButton onClick={() => alert('Login with Apple')} className='bg-transparent' icon={<FaApple size={20} />}>
      Login with Apple
    </AuthButton>
    <AuthButton onClick={() => alert('Login with Facebook')} className='bg-transparent'  icon={<FaFacebookF size={20} />}>
      Login with Facebook
    </AuthButton>
    <AuthButton onClick={() => alert('Login with Twitter')} className='bg-transparent' icon={<FaTwitter size={20} />}>
      Login with Twitter
    </AuthButton>
  </div>
  )
}

