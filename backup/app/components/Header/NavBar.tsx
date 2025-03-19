"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar: React.FC = () => {
const pathname = usePathname()
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Pages', path: '/pages' },
    { name: 'Events', path: '/events' },
    { name: 'Help', path: '/help' },
  ];

  return (
    <nav className="hidden lg:flex space-x-4">
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={`${item.path}`}
          className={`py-2 px-4 text-[16px] ${pathname === item.path ? ' border-b-2 border-[#F68B61] font-bold' : ''}`}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;