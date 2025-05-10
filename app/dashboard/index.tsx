"use client";
//import CreateEventForm from '@/components/EventCreationForm'
import EventsOperations from "@/components/EventsOperations";
import ProfileCard from "@/components/ProfileCard";
//import Statistics from '@/components/Statistics'
import Image from "next/image";
import Button from "@/components/ui/Button";
import React from "react";
import InputField from "@/components/ui/InputFields";
import Label from "@/components/ui/Label";
import { useUser } from "../context/UserContext";
import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa6";
import useAxios from "../hooks/useAxios";
import Dropdown from "@/components/ui/DropDown";
import ImageUploader from "@/components/ImageUploader";
import { useState } from "react";
//import { images } from "@/constant/images";


const CreateEvent = () => {
  const { sendRequest, loading, setLoading } = useAxios();
  const router = useRouter();
  const { user, setUser } = useUser();
  const [image1, setImage1] = useState<File | null>(null);
  const [image2, setImage2] = useState<File | null>(null);
  const [preview1, setPreview1] = useState<string | null>(null);
  const [preview2, setPreview2] = useState<string | null>(null);
  const { profilePreview, setProfile } = useUser();



  //const [profile, setProfile] = useState<File | null>(null);
  //const [profilePreview, setProfilePreview] = useState<string | null>(null);


  const handleLogout = async () => {
    if (loading) return; // Prevent multiple clicks
    console.log("sending request");

    setLoading(true); // Set loading state

    try {
      const response = await sendRequest({
        url: `/api/auth/logout`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      console.log("response: ", response);

      setUser({
        userId: null,
        name: null,
        email: null,
        role: null,
        picture: null,
        age: null,
        location: null,
        token: null,
      });
      localStorage.setItem("quiktis_user", JSON.stringify(user));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false); // Reset loading state
      router.push("/signin");
    }
  };

 

  return (
    <main className="flex flex-col gap-5 w-full relative min-h-screen sm:w-[88%] lg:w-[90%] mx-auto">
      <div className="flex md:flex-row flex-col gap-20 shrink-0 relative w-full justify-center items-center h-full">
        <Image
          src={"/502.png"}
          alt="502"
          width={369}
          height={300}
          className="absolute -z-50 -top-20"
        />
        <div className="w-full">
          <EventsOperations />

          <ProfileCard containerClass="mt-[1.78em]"/>
        
          <Button
            onClick={() => router.push(`/create-event`)}
            className="flex justify-center gap-3 lg:hidden items-center w-full md:px-[1.4em] md:w-fit mt-5 py-3 shadow-xl shadow-[#ff4e2a42]"
          >
            <Image src="/icons/event.svg" height={24} width={24} alt="icon" />
            <p className="my-auto">Create Event</p>
          </Button>
        </div>
      </div>
      <section className="mt-[3em]">
        <h2 className="max-md:text-[1.3em] text-[2em] font-medium mb-[1em]">
          Profile Settings
        </h2>
        <div className="grid max-sm:grid-cols-[3.5em_auto] grid-cols-[6em_auto] my-auto gap-[0.8em] w-fit h-fit z-0">
          <div style={{zIndex: "-10 !important"}} className={`grid place-items-center border-2 border-white rounded-full max-sm:w-[3em] max-md:h-[3em] w-[5em] h-[5em] mx-auto sm:mx-0 overflow-hidden`}>
            <Image
              src={profilePreview ?? '/person.svg'}
              alt="profile picture"
              width={100}
              height={100}
              className={`rounded-full  object-cover max-md:w-[3em] max-md:h-[3em]   text-white ${profilePreview ? ' w-[5em] h-[5em]' : 'w-[2.5em] h-[2.5em]  max-md:w-[1.5em] max-md:h-[1.5em]'}`}
              
            />
          </div>
          <div className="h-fit my-auto">
            <div className="flex max-md:gap-3 gap-[3em] justify-between ">
              <div className="flex flex-col">
                <h2 className="text-xl font-semibold w-fit">
                  {/*Jaxson Siphron*/ user.name}
                </h2>
                <p className="text-gray-300 text-xs sm:text-sm w-fit">
                  {/*Jaxsonsiphron@gmail.com*/ user.email}
                </p>
              </div>
              <hr className="my-4 border-gray-400 mt-3"></hr>
            </div>
          </div>
        </div>

        <div className="max-md:w-full my-4 mt-[3em] w-[65%] flex flex-col max-sm:gap-8 gap-[3em]">
          <div className="flex flex-col lg:grid grid-cols-2 max-sm:gap-8 gap-5">
            <InputField label="First Name" />
            <InputField label="Last Name" />
          </div>
          <div className="flex flex-col lg:grid grid-cols-[auto_16em] max-sm:gap-8 gap-5">
            <InputField label="Email" />
            <Button className="grid items-center">Update Email Address </Button>
          </div>
          <div className="flex flex-col lg:grid grid-cols-[auto_16em] max-sm:gap-8 gap-5">
            <InputField label="Wallet address" />
            <Button className="grid items-center">Connect Wallet </Button>
          </div>
        </div>
      </section>

      <section className="space-y-[5em] my-[2em]">
        <div className="max-md:w-full w-[65%]">
          <div className="space-y-10">
            <Label className="mb-[2.4em]" required={true}>
              Complete profile to create an event
            </Label>
            <Dropdown
              label="Identity Card"
              options={["National ID (NIN)", "Driver's License", "International Passport"]}
              placeholder="Card type"
            />

            <div className="space-y-2 mb-[4em]">
              <Label>Front Picture</Label>
              <ImageUploader
        containerClass="py-[3.5em] border-primary rounded-[1.4em] hover:border-white"
        label={
          <div className="space-y-6 grid items-center">
            <div className="w-fit mx-auto px-4 py-2 bg-primary rounded-md shadow-md">Browse Files</div>
            <div className="text-center">
              <p className="max-sm:text-sm max-sm:w-[70%] mx-auto">🗂 Drag & drop identity card or Business Card here</p>
              <p className="text-sm text-gray-500 mx-auto max-sm:mt-[1.4em]">
                Supported format: JPEG, JPG, PNG, Max size: 50MB
              </p>
            </div>
          </div>
        }
        preview={preview1}
        setPreview={setPreview1}
        setImage={setImage1}  // Add the correct image setter
      />
            </div>

            <div className="space-y-2">
              <Label>Back Picture</Label>
              <ImageUploader
        containerClass="py-[3.5em] border-primary rounded-[1.4em] hover:border-white"
        label={
          <div className="space-y-6 grid items-center">
            <div className="w-fit mx-auto px-4 py-2 bg-primary rounded-md shadow-md">Browse Files</div>
            <div className="text-center">
              <p className="max-sm:text-sm max-sm:w-[70%] mx-auto ">🗂 Drag & drop identity card or Business Card here</p>
              <p className="text-sm text-gray-500 max-sm:mt-[1.4em]">
                Supported format: JPEG, JPG, PNG, Max size: 50MB
              </p>
            </div>
          </div>
        }
        preview={preview2}
        setPreview={setPreview2}
        setImage={setImage2}  // Add the correct image setter
      />
            </div>
          </div>
        </div>

        <hr className=" border-gray-600"></hr>
      </section>

      <section>
        <div>
          <div className="max-md:w-full gap-2 flex flex-col w-[65%]">
            <Label required={true}>Bio</Label>
            <textarea
              name="description"
              //value={eventData.description}
              //onChange={handleInputChange}
              placeholder="Give a little description of yourself, lifestyle, whatever stands out in you"
              rows={6}
              className="p-5 bg-inherit border border-[#ffffff4f] rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none resize-none"
              //value={eventData.description}
              //onChange={handleInputChange}
              //required
            />
          </div>
        </div>
      </section>

      <div className="max-md:w-full space-y-7 w-[65%] mt-[1.5em]">
        <h2 className="max-md:text-[1.3em] text-[2em] font-medium">
          Privacy Setting
        </h2>
        <div className="flex my-2 gap-3">
          <input type="checkbox" />
          <label className="text-[1.1em]">
            Show my email address on my profile
          </label>
        </div>
        <div className="flex my-2 gap-3">
          <input type="checkbox" />
          <label className="text-[1.1em]">Show my birthday on my profile</label>
        </div>
        <div className="flex my-2 gap-3 w-fit md:mr-0 md:ml-auto">
          <Button className="px-[3em]">Save</Button>
          <button className="px-[3em] border border-primary rounded-md">
            Cancel
          </button>
        </div>
      </div>

      <div className="my-[2em]">
        <Button
          onClick={handleLogout}
          className="flex justify-center gap-3 items-center w-full md:px-[1.4em] md:w-fit mt-5 py-3 max-sm:w-fit"
        >
          <p className="my-auto">Log out</p>
          <FaArrowRight />
        </Button>
      </div>

      {/*<CreateEventForm/>*/}
      {/*<div className=" flex flex-wrap gap-3 relative w-full mt-[5em]">
        {images.map((image, index) => (
          <div key={index} className="w-[19%]">
            <Image
              src={image.image}
              alt={image.image}
              width={image.width}
              height={image.height}
            />
          </div>
        ))}
      </div>*/}
      {/*<Statistics/>
            <Image
            src={'/chart.png'}
            alt='chart'
            width={1448}
            height={600}
            className='mt-10'
            />*/}
    </main>
  );
};

export default CreateEvent;
