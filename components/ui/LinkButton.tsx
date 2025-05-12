'use client';

import React from 'react';
import Link, { LinkProps } from 'next/link';

type Variant = 'primary' | 'secondary' | 'link';

export interface LinkButtonProps extends Omit<LinkProps, 'href'> {
  href: string;
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-gradient-to-r from-red-500 to-red-600 hover:opacity-90 text-white',
  secondary:
    'bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 text-white',
  link: 'text-white hover:text-red-400 underline',
};

const baseClasses =
  'inline-flex items-center justify-center px-6 py-3 rounded-md text-lg font-medium shadow-md';

export default function LinkButton({
  href,
  variant = 'primary',
  children,
  className = '',
  disabled = false,
  ...linkProps
}: LinkButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return (
    <Link
      href={href}
      className={classes}
      aria-disabled={disabled}
      {...linkProps}
    >
      {children}
    </Link>
  );
}
