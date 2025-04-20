import React from 'react'
import BrandList from '@/components/TrustedBrands'


const brands: string[] = [
   "slide1.png",
   "slide2.png",
   "slide3.png",
   "slide4.png",
   "slide3.png",
   "slide2.png",
  ];

export default function TakeYourEventManagementSection({ containerClass }: { containerClass?: string }) {
  return (
    <div className={`${containerClass} grid place-items-center md:mt-[6em] lg:mt-[10em] max-sm:px-[1em] md:px-[3em] lg:px-[6em]`}>
        <h1 className='text-center text-[2.7em] font-medium font-inter'>Take your event management {<br></br>} to next level</h1>
        <p className='text-center mt-5'>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.`}{<br></br>} {`Aliquam in hendrerit urna. Pellentesque`}</p>
        <BrandList brands={brands} brandHeightClass='h-[15em]' brandWidthClass='w-[18em]' speed='slow'/>
    </div>
  )
}
