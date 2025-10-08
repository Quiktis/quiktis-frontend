import React from 'react';
import { FaSearch } from 'react-icons/fa';
import Input from './CustomInput';

interface SearchBarProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void; 
  inputClassName?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, value, onChange, onBlur, inputClassName }) => {
  return (
    <div className={`flex gap-4 items-center ${inputClassName}`}>
      <Input
        type='search'
        placeholder={placeholder}
        className='w-full md:w-[17em] text-[17px] border outline-none border-primary rounded-[10px] bg-gray-600 bg-opacity-15'
        onChange={onChange}
        value={value}
        onBlur={onBlur}
      />
      <div className='border border-primary py-4 px-4 flex justify-center items-center rounded-[10px] bg-gray-600 bg-opacity-15'>
        <FaSearch color='white' />
      </div>
    </div>
  );
};

export default SearchBar;