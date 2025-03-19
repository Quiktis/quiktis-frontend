"use client"
import React from 'react'
import Logo from '../Logo'
import Navbar from '../Navbar'
import Button from '../ui/Button'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  const router = useRouter()
  const pathname = usePathname()
  const specialPaths = ['/events', '/create-events'] 

  return (
    <header className='flex w-full justify-between mt-10'>
      <div className='flex gap-1 items-center cursor-pointer'>
        <Logo />
        <Link href={'/'} className='text-white drop-shadow-custom-red text-[30px] font-primary'>
          Quiktis
        </Link>
      </div>
      <Navbar />
      {specialPaths.includes(pathname) ? (
        <div className='flex items-center gap-4'>
          <Button onClick={() => router.push('/connect-wallet')} className='text-[16px] w-[150px] flex items-center justify-center py-1 drop-shadow-custom-red bg-primary'>
            Connect Wallet
          </Button>
          <div className='w-10 h-10 rounded-full bg-gray-300 overflow-hidden'>
            <Image
              src='/pp.png'
              alt='Profile'
              width={40}
              height={40}
              className='object-cover'
            />
          </div>
        </div>
      ) : (
        <Button onClick={() => router.push('/register')} className='text-[16px] w-[150px] flex items-center justify-center py-1 drop-shadow-custom-red bg-primary'>
          Get Started
        </Button>
      )}
    </header>
  )
}

export default Header