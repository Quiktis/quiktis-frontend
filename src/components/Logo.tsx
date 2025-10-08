"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href={'/'} className='cursor-pointer'>
      <Image
        src='/quiktis-logo.svg'
        alt='Quiktis Logo'
        width={40}
        height={40}
        priority
        className='cursor-pointer object-cover bg-cover'
      />
    </Link>
  )
}

export default Logo