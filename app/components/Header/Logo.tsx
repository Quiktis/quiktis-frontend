"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href={'/'}>
      <Image
        src='/logo.png'
        alt='Quiktis Logo'
        width={146}
        height={39}
        priority
        className='cursor-pointer object-cover bg-cover'
      />
    </Link>
  )
}

export default Logo