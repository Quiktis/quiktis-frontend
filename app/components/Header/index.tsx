"use client"
import React from 'react'
import Logo from './Logo'
import Navbar from './NavBar'
import GetStarted from './GetStarted'
import Search from '../ui/Search'

const Header = () => {
  return (
    <div className='flex w-full justify-between p-[24px]'>
        <Logo/>
        <div className='flex gap-3'>
            <Search/>
            <Navbar/>
            <GetStarted/>
        </div>
    </div>
  )
}

export default Header