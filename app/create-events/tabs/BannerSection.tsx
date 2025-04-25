import React from 'react'
import ImageUploader from '@/components/ImageUploader'
import Button from '@/components/ui/Button'
import { useRouter } from 'next/navigation';

export default function BannerSection({setSelectedImage}: {
  setSelectedImage: React.Dispatch<React.SetStateAction<File | null>>}) {
    const router = useRouter();
  
  return (
    <div className='relative flex flex-col gap-6 w-fit'>
      <div className="w-[50em] h-[50em] mt-[8em] ml-[-9em] left-0 -z-10  inset-0 radial-gradient-blue blur-3xl opacity-30 absolute"></div>
      <h1 className="text-[1.7em]">Upload Image</h1>
      <ImageUploader onImageSelect={setSelectedImage}/>
      <p>Feature Image must be at least 1170 pixels wide by 504 pixels high.</p>
      <p>Valid file formats: JPG, GIF, PNG.</p>
      <div className='flex gap-4 w-fit mr-0 ml-auto'>
        <button onClick={() => router.push(`?tab=edit`)} type="button" className='py-2 px-4  font-medium'>Back</button>
         <Button  onClick={() => router.push(`?tab=ticketting`)} children="Save & Continue" className="w-fit px-7 font-medium"/>
                  </div>
  
    </div>
  )
}
