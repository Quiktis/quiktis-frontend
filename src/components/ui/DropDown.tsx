import React, { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

interface DropdownProps {
  options?: { id: string; name: string; description: string }[];
  selected?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  onOpen?: () => void;
  label?: string;
  className?: string;
  placeholder?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  options = [],
  selected: controlledSelected,
  defaultValue,
  onChange = () => {},
  onOpen,
  label,
  className,
  placeholder = "Select an option",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(
    controlledSelected ?? defaultValue ?? null
  );

  // Sync controlled selected from parent
  useEffect(() => {
    if (controlledSelected !== undefined) {
      setSelected(controlledSelected);
    }
  }, [controlledSelected]);

  useEffect(() => {
  if (controlledSelected === undefined && defaultValue) {
    setSelected(defaultValue);
  }
}, [defaultValue, controlledSelected]);

  // Re-run when options are updated — helps in async load
  useEffect(() => {
    if (!options.length) return;

    const isSelectedStillValid = options.some((opt) => opt.id === selected);

    if (!isSelectedStillValid) {
      if (defaultValue && options.some((opt) => opt.id === defaultValue)) {
        setSelected(defaultValue);
        onChange(defaultValue); // optional: sync up with parent
      } else {
        setSelected(null); // or let it keep old one? your call
      }
    }
  }, [options]);

  const handleSelect = (id: string) => {
    setSelected(id);
    onChange(id);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    const nextState = !isOpen;
    setIsOpen(nextState);
    if (nextState && onOpen) onOpen();
  };

  const selectedOption = options.find((opt) => opt.id === selected);

  return (
    <div className="flex flex-col gap-2 relative">
      {label && (
        <label className="absolute px-1 text-primary bg-[#0c0c0c] top-[-0.6em] z-40 left-4">
          {label}
        </label>
      )}
      <div
        className={`relative text-[0.95em] border border-[#ffffff56] text-gray-400 px-[1.15em] py-[0.85em] rounded-md cursor-pointer flex items-center justify-between ${className}`}
        onClick={toggleDropdown}
      >
        <span
          className="truncate block w-full pr-4"
          title={selectedOption?.name || placeholder}
        >
          {selectedOption?.name || placeholder}
        </span>
        <FaChevronDown
          className={`ml-2 flex-shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
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
