'use client';
import React, { useState, useRef, useEffect } from 'react';

const currencyOptions = ['₦'];

// CurrencySelector.tsx
export default function CurrencySelector({
    className,
    value,
    onChange= () => ('₦')
  }: {
    className?: string;
    value?: string;
    onChange?: (currency: string) => void;
  }) {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
  
    const toggleDropdown = () => setOpen(prev => !prev);
  
    const handleSelect = (currency: string) => {
      onChange(currency);
      setOpen(false);
    };
  
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setOpen(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
  
    return (
      <div className="relative w-fit" ref={dropdownRef}>
        <button
          type='button'
          onClick={toggleDropdown}
          className={`px-4 py-2 border bg-white text-gray-800 text-[1.2em] font-medium hover:bg-gray-100 ${className}`}
        >
          {value}
        </button>
  
        {open && (
          <div className="absolute mt-2 bg-[#1b1b1b] border rounded-md shadow-md z-10">
            {currencyOptions.map((currency) => (
              <button
                key={currency}
                onClick={() => handleSelect(currency)}
                className="block w-full text-left px-4 py-2 hover:bg-[#ffffff2c]"
              >
                {currency}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }
  