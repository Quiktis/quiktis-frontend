import React from 'react'
import ImageUploader from '@/components/ImageUploader'
import Button from '@/components/ui/Button'
import { useRouter } from 'next/navigation';


interface BannerSectionProps {
  preview: string | null; 
  setPreview: React.Dispatch<React.SetStateAction<string | null>>; // Optional prop for setting preview URL
  setImage: React.Dispatch<React.SetStateAction<File | null>>;
}

const BannerSection: React.FC<BannerSectionProps> = ({setImage, preview, setPreview}) => {
    const router = useRouter();
  
  return (
    <div className='relative flex flex-col gap-6 w-fit max-md:w-full '>
      <div className="w-[50em] h-[50em] mt-[8em] ml-[-9em] left-0 -z-10  inset-0 radial-gradient-blue blur-3xl opacity-30 absolute"></div>
      <h1 className="max-md:text-[1.3em] text-[1.7em]">Upload Image</h1>
      <ImageUploader containerClass='lg:w-[50vw] max-md:w-full  py-[3em]' preview={preview} setPreview={setPreview} setImage={setImage}/>
      <p className='text-gray-300'>Feature Image must be at least 1170 pixels wide by 504 pixels high.</p>
      <p className='text-gray-300'>Valid file formats: JPG, GIF, PNG.</p>
      <div className='flex gap-4 w-fit mr-0 md:ml-auto max-md:mt-4'>
        <button onClick={() => router.push(`?tab=edit`)} type="button" className='py-2 px-4  font-medium'>Back</button>
         <Button type='button'  onClick={() => {
          if (!preview) {
            alert("Please upload an image");
            return;
          } else {
            // Proceed to the next step
          router.push(`?tab=ticketting`)}
         }
          
          } className="w-fit px-7 py-3 font-medium bg-primary ">Save & Continue</Button>
                  </div>
  
    </div>
  )
}

export default BannerSection

