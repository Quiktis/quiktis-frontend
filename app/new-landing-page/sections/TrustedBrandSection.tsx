import React from 'react'
import BrandList from '@/components/TrustedBrands'

const brands: string[] = [
  "/brand1.svg",
  "/brand3.svg",
  "/brand4.svg",
  "/brand5.svg",
  "/brand6.svg",
  "/brand1.svg",
  "/brand5.svg",
];

export default function TrustedBrandSection({ containerClass }: { containerClass?: string }) {
  return (
    <section className="mt-[10em] md:mt-[15em] relative z-40">
            <div className="w-full h-[5em] md:h-[11em] inset-0 radial-gradient-black blur-3xl opacity-40"></div>
            <p className="text-center">Trusted by world leaders</p>
            <BrandList brands={brands} containerClass="my-2" />
          </section>
  )
}
