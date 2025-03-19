"use client"

import React from 'react'
import { LuSearch } from 'react-icons/lu'

const Search = () => {
  return (
    <div className='flex justify-center items-center border-3 border-white rounded-[10px] w-[62px] h-[51px]'>
        <LuSearch color='white' size={20} />
    </div>
  )
}

export default Search