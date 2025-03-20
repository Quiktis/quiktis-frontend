"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar: React.FC = () => {
const pathname = usePathname()
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Pages', path: '/my-tickets' },
    { name: 'Events', path: '/events' },
    { name: 'Help', path: '/faq' },
    { name: 'Create', path: '/create-events' },
  ];

  return (
    <nav className="flex items-center gap-[40px]">
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={`${item.path}`}
          className={`py-2 px-2 text-[16px] leading-none font-inter ${pathname === item.path ? 'border-b-4 border-primary font-bold text-white' : ''}`}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;