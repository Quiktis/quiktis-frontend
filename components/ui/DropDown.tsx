import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa"; 

interface DropdownProps {
  options?: { id: string; name: string; description: string }[];
  selected?: string;
  onChange?: (value: string) => void;
  label?: string;
  className?: string;
  placeholder?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  options = [],
  onChange = () => {},
  label,
  className,
  placeholder = "Select an option", 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (id: string) => {
    setSelected(id);        // Manage it locally
    onChange(id);           // Let parent know if it wants to listen
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col gap-2 relative">
      {label && (
        <label className="absolute px-1 text-primary bg-[#0c0c0c] top-[-0.6em] z-40 left-4">
          {label}
        </label>
      )}
      <div
        className={`relative text-[0.95em] border border-[#ffffff56] text-gray-400 px-[1.15em] py-3 rounded-md cursor-pointer flex items-center justify-between ${className}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {options.find((opt) => opt.id === selected)?.name || placeholder}
        <FaChevronDown className={`ml-2 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </div>

      {isOpen && (
        <ul className="absolute top-full left-0 max-h-[20em] overflow-y-scroll w-full mt-1 bg-[#1b1b1b] rounded shadow-lg z-10">
          {options.map((option) => (
            <li
              key={option.id}
              className="px-4 py-2 cursor-pointer hover:bg-[#ffffff0e] text-white"
              onClick={() => handleSelect(option.id)}
            >
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
