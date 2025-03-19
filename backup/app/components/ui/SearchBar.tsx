import React from 'react';
import { FaSearch } from 'react-icons/fa';
import Input from './input';

interface SearchBarProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, value, onChange }) => {
  return (
    <div className='flex gap-4 items-center'>
      <Input
        type='search'
        placeholder={placeholder}
        className='w-[500px] text-[17px] border outline-none border-primary rounded-[10px] bg-gray-600 bg-opacity-15'
        onChange={onChange}
        value={value}
      />
      <div className='border border-primary py-4 px-4 flex justify-center items-center rounded-[10px] bg-gray-600 bg-opacity-15'>
        <FaSearch color='white' />
      </div>
    </div>
  );
};

export default SearchBar;