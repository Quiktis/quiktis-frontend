import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa"; 

interface DropdownProps {
  options?: string[];
  selected?: string;
  onChange?: (value: string) => void;
  label?: string;
  className?: string;
  placeholder?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  options = [],
  selected,
  onChange = () => {},
  label,
  className,
  placeholder = "Select an option", 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col gap-2 relative">
      {label && (
        <label className="absolute px-1 text-primary bg-[#0c0c0c] top-[-0.6em] z-40 left-4">
          {label}
        </label>
      )}
      <div
        className={`relative text-[0.95em] border-2 border-[#ffffff56] text-gray-400 px-[1.15em] py-4 rounded-md cursor-pointer flex items-center justify-between ${className}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected || placeholder} 
        <FaChevronDown className={`ml-2 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </div>

      {isOpen && (
        <ul className="absolute top-full left-0 w-full mt-1 bg-[#1b1b1b] rounded shadow-lg z-10">
          {options.map((option, index) => (
            <li
              key={index}
              className="px-4 py-2 cursor-pointer hover:bg-[#ffffff0e] text-white"
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
