
import React from 'react';

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children, className, style }) => (
  <div className={`px-32 py-[21px] min-h-screen w-full mx-auto flex flex-col ${className}`} style={style}>
    {children}
  </div>
);

export default PageWrapper;