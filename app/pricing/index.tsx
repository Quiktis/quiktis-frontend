import Button from "@/components/ui/Button"
import Link from "next/link"
import Image from "next/image"



const socials = [
    {
        icon: "/discord-new.svg",
        link: "https://discord.gg/TmavF8QCu5",
        alt: "discord-link"
    },
    {
        icon: "/instagram-new.svg",
        link: "https://instagram.com/quiktis",
        alt: "instagram-link"
    },
    {
        icon: "/twitter-new.svg",
        link: "https://x.com/quiktishq",
        alt: "twitter-link"
    },
    {
        icon: "/linkedin-new.svg",
        link: "https://linkedin.com/company/quiktis",
        alt: "linkedin-link"
    },
    {
        icon: "/facebook-new.svg",
        link: "https://www.facebook.com/share/1BnfVxgh29/",
        alt: "facebook-link"
    }
]

export default function PricingPage() {
  return (
    <>
    {/* Dotted background pattern */}
        <div
        className="bg-[#1C1E20] absolute inset-0 right-0 left-0"
        
      />

      <div
        className=" absolute inset-0 right-0 left-0"
        style={{
           
          backgroundImage: `url('/texture.png')`,
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
          opacity: 0.25,
        }}
      />
    <div className="min-h-screen relative">

        
       

      {/* Main Content */}
      <main className="px-2  py-16 z-[50] md:px-20 max-md:px-5 text-white">
        {/* Hero Section */}
        <div className="text-center my-[6.5em]">
          <h1 className="text-3xl lg:text-4xl font-semibold mb-6">Pricing</h1>
          <div className="text-[0.95em] md:text-lg text-[#919499] max-w-2xl mx-auto ">
            <p>Host unlimited events and guests on Luma for free.</p>
            <p>Upgrade for extra invites, 0% fees, and more.</p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 w-full mx-auto">
          {/* Free Events */}
          <div className="bg-[#1C1E20] border border-[#2B2B2B] rounded-2xl p-8 z-50">
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-2">Free Events</h3>
              <div className="mb-[0.2em]">
                <span className="text-4xl font-medium">0₦</span>
              </div>
              <p className=" text-sm">Free now, free forever</p>
            </div>

            <Button className="w-full mb-8 bg-white text-black hover:bg-gray-100">Get started</Button>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Image src="/verified-tick.svg" height={16} width={16} alt="icon" />
                <span className="text-sm font-semibold">Unlimited free events</span>
              </div>
              <div className="flex items-center gap-3">
                <Image src="/verified-tick.svg" height={16} width={16} alt="icon" />
                <span className="text-sm font-semibold">Event dashboard</span>
              </div>
              <div className="flex items-center gap-3">
                <Image src="/verified-tick.svg" height={16} width={16} alt="icon" />
                <span className="text-sm font-semibold">Attendee management</span>
              </div>
            </div>
          </div>

          {/* Paid Events */}
          <div className="bg-[#1C1E20] border border-[#2B2B2B] rounded-2xl p-8 z-50">
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-2 ">Paid Events</h3>
              <div className="mb-[0.2em]">
                <span className="text-4xl font-medium">3% per tickets</span>
              </div>
              <p className="text-sm">₦150 minimum, ₦2,000 cap</p>
            </div>

            <Button className="w-full mb-8 bg-[#EA4335] hover:bg-red-600">Get started</Button>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Image src="/verified-tick.svg" height={16} width={16} alt="icon" />
                <span className="text-sm font-semibold">Unlimited events</span>
              </div>
              <div className="flex items-center gap-3">
                <Image src="/verified-tick.svg" height={16} width={16} alt="icon" />
                <span className="text-sm font-semibold">Event dashboard</span>
              </div>
              <div className="flex items-center gap-3">
                <Image src="/verified-tick.svg" height={16} width={16} alt="icon" />
                <span className="text-sm font-semibold">Attendee management</span>
              </div>
              <div className="flex items-center gap-3">
                <Image src="/verified-tick.svg" height={16} width={16} alt="icon" />
                <span className="text-sm font-semibold">Secure, instant payouts</span>
              </div>
              <div className="flex items-center gap-3">
                <Image src="/verified-tick.svg" height={16} width={16} alt="icon" />
                <span className="text-sm font-semibold">Event identity for attendees</span>
              </div>
              <div className="flex items-center gap-3">
                <Image src="/verified-tick.svg" height={16} width={16} alt="icon" />
                <span className="text-sm font-semibold">Basic analytics dashboard</span>
              </div>
              <div className="flex items-center gap-3">
                <Image src="/verified-tick.svg" height={16} width={16} alt="icon" />
                <span className="text-sm font-semibold">Fast settlement to organizer's account</span>
              </div>
            </div>
          </div>

          {/* Quiktis Premium */}
          <div className="bg-[#1C1E20] border border-[#2B2B2B] rounded-2xl p-8 z-50">
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-2">Quiktis Premium</h3>
              <div className="mb-[0.2em]">
                <span className="text-4xl font-medium">Add-ons</span>
              </div>
              <p className="text-sm">Optional, per event</p>
            </div>

            <Button className="w-full mb-8 bg-[#FB2E74] hover:bg-pink-600">Get started</Button>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Image src="/verified-tick.svg" height={16} width={16} alt="icon" />
                <span className="text-sm font-semibold">Premium Analytics → ₦5,000 per event</span>
              </div>
              <div className="flex items-center gap-3">
                <Image src="/verified-tick.svg" height={16} width={16} alt="icon" />
                <span className="text-sm font-semibold">Custom Branding → ₦2,500 per event</span>
              </div>
              <div className="flex items-center gap-3">
                <Image src="/verified-tick.svg" height={16} width={16} alt="icon" />
                <span className="text-sm font-semibold">Priority Support → ₦1,500 per event</span>
              </div>
              <div className="flex items-center gap-3">
                <Image src="/verified-tick.svg" height={16} width={16} alt="icon" />
                <span className="text-sm font-semibold">Priority Support → ₦1,500 per event</span>
              </div>
            </div>
          </div>
        </div>
      </main>




      <footer className=' max-sm:text-[0.85em] text-[0.94em] mb-0 mt-[5em]'>
              <hr className='w-[85%] mx-auto border-0 border-t border-gray-800'></hr>
              <section className='max-md:flex-col gap-6 max-md:justify-center max-md:text-center max-md:w-fit w-[85%] mx-auto flex justify-between mt-6 text-[#919499]'>
                  <div className='flex gap-5'>
                      <p className='flex gap-[0.8px]'>
                          <Image
                              src='/New logo.png'
                              alt='Quiktis Logo'
                              width={21}
                              height={21}
                              priority
                              className='cursor-pointer object-contain bg-cover'
                              unoptimized={true}
                            />uiktis
                      </p>
                      
                      <Link href={"#"}>Discover</Link>
                      <Link href={"/pricing"}>Pricing</Link>
                      <Link href={"#"}>Help</Link>
                  </div>
      
                  <div className='md:flex gap-4 max-md:w-fit max-md:mx-auto hidden'>
                      {socials.map((item, index) => (
                          <Link target='blank' key={index} href={item.link}><Image alt={item.alt} src={item.icon} height={22} width={22} className='h-[18px] w-[18px] object-contain'/></Link>
                      ))}
                  </div>
              </section>
             
      
              <section className='w-[85%] mx-auto flex justify-between mt-5 text-[#919499]'>
                  <div className='flex gap-4 max-md:w-fit max-md:mx-auto md:hidden'>
                      {socials.map((item, index) => (
                          <Link target='blank' key={index} href={item.link}><Image alt={item.alt} src={item.icon} height={22} width={22} className='h-[18px] w-[18px] object-contain'/></Link>
                      ))}
                  </div>

                  
              </section>

              {/* Call for help section */}
          <div className="bg-[#181B1E] rounded-2xl max-md:mt-[2em] p-6 flex flex-col lg:flex-row items-start lg:items-center justify-between max-w-[95%] md:max-w-[85%] mx-auto mt-[2em]">
            <div className="flex max-md:flex-col items-start gap-4 mb-4 lg:mb-0">
              <div className="bg-[#919499] rounded-md p-3 flex-shrink-0 my-auto">
                <Image src="/help-icon.svg" height={20} width={20} alt="icon" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Call for help!</h3>
                <p className="text-gray-400 text-sm">
                  Need any help? Get in touch with our team to expert to support you.
                </p>
              </div>
            </div>
            <Link href={"/contact"} className=" text-black hover:bg-gray-700 px-6 py-2 rounded-md font-medium transition text-center bg-white hover:text-white max-md:w-[100%]">
              Contact us
            </Link>
          </div>

              
          </footer>
    </div>
    </>
  )
}
