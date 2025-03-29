"use client";
import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { BsPlus } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { RiFileCopy2Fill } from "react-icons/ri";
import AllEvents from "@/components/AllEvents";
import Link from "next/link";
import Input from "@/components/ui/Input";
import { useState } from "react";
import InputField from "@/components/ui/InputFields";
import { FaStar } from "react-icons/fa";
import StarRating from "@/components/StarRating";

const tags = [
  { tag: "Syracuse Events" },
  { tag: "Syracuse Events" },
  { tag: "Things To Do in Syracuse" },
  { tag: "#tech" },
  { tag: "#trending" },
  { tag: "#thingsToDo" },
];

const socials = [
  { icon: <FaFacebook size={24} />, href: "" },
  { icon: <FaInstagram size={24} />, href: "" },
  { icon: <FaTwitter size={24} />, href: "" },
  { icon: <FaLinkedin size={24} />, href: "" },
];

const reviews = [
  {
    profileImage: "/user_profile.png",
    name: "Guy Hawkins",
    review:
      "I appreciate the precise short videos (10 mins or less each) because overly long videos tend to make me lose focus. The instructor is very knowledgeable in Web Design and it shows as he shares his knowledge. These were my best 6 months of training. Thanks, Vako.",
    rating: 5,
  },
  {
    profileImage: "/user_profile.png",
    name: "Guy Hawkins",
    review:
      "I appreciate the precise short videos (10 mins or less each) because overly long videos tend to make me lose focus. The instructor is very knowledgeable in Web Design and it shows as he shares his knowledge. These were my best 6 months of training. Thanks, Vako.",
    rating: 5,
  },
  {
    profileImage: "/user_profile.png",
    name: "Guy Hawkins",
    review:
      "I appreciate the precise short videos (10 mins or less each) because overly long videos tend to make me lose focus. The instructor is very knowledgeable in Web Design and it shows as he shares his knowledge. These were my best 6 months of training. Thanks, Vako.",
    rating: 5,
  },
  {
    profileImage: "/user_profile.png",
    name: "Guy Hawkins",
    review:
      "I appreciate the precise short videos (10 mins or less each) because overly long videos tend to make me lose focus. The instructor is very knowledgeable in Web Design and it shows as he shares his knowledge. These were my best 6 months of training. Thanks, Vako.",
    rating: 5,
  },
  {
    profileImage: "/user_profile.png",
    name: "Guy Hawkins",
    review:
      "I appreciate the precise short videos (10 mins or less each) because overly long videos tend to make me lose focus. The instructor is very knowledgeable in Web Design and it shows as he shares his knowledge. These were my best 6 months of training. Thanks, Vako.",
    rating: 5,
  },
];

export default function EventViewingPage() {
  const [email, setEmail] = useState("");
  const icons = Array(5).fill(<FaStar className="text-yellow-500" />);
  const [rating, setRating] = useState(0);

  return (
    <>
      <section className="flex flex-col md:grid grid-cols-[65%_32%] md:h-[20em] lg:h-[30em] h-[40em] lg:gap-11 gap-6">
        <div className="relative w-full h-full">
          <Image
            src={"/party1.png"}
            alt="party 1"
            layout="fill"
            objectFit="cover"
            className="rounded-[30px]"
            objectPosition="50% 80%"
            unoptimized
          />
        </div>
        <div className="relative w-full h-full">
          <Image
            src={"/happy-birthday-party-toasting-champagne.png"}
            alt="party 1"
            layout="fill"
            objectFit="cover"
            className="rounded-[30px]"
          />
        </div>
      </section>

      <section>
        <div className="w-full flex max-sm:flex-wrap md:gap-[4em] h-[max-content]">
          <div className="h-full">
            <h1 className="text-[40px] font-primary font-bold max-w-[100%] lg:max-w-[80%]">
              EVENT TITLE LOREM IPSUM DOLOR SIT SMET
            </h1>
            <p className="text-gray-500 font-secondary">By mention Creator</p>
          </div>
          <div className="grid h-full mr-0 md:ml-auto my-auto md:mt-0 mt-5 md:w-fit w-full">
            <Button
              onClick={() => {}}
              className="text-[16px]  md:w-[150px]  flex items-center justify-center py-3 px-2 drop-shadow-custom-red bg-primary "
            >
              Get Ticket $70
            </Button>
          </div>
        </div>
      </section>
      <section className="relative">
        <div className="absolute w-[73%] h-[65em] top-[-12em] radial-gradient blur-3xl opacity-50"></div>
        <div className="relative flex flex-col gap-3 lg:grid grid-cols-[65%_32%] h-[max-content] w-full lg:gap-11">
          <div className="h-fit w-fit min px-9 lg:px-16 py-5 lg:py-9 glass-bg shadow-xl shadow-white rounded-[40px] font-secondary">
            <h1 className="text-[1.8em] lg:text-[40px] font-primary text-primary font-bold max-w-[100%] lg:max-w-[80%]">
              DESCRIPTION
            </h1>
            <p>
              {
                "Lorem ipsum dolor sit amet consectetur. Odio praesent elementum vivamus aliquet est. Libero diam quisque elementum pharetra risus egestas at egestas. Vestibulum venenatis dignissim viverra est amet porta amet ipsum viverra. Lectus morbi egestas viverra sit blandit nulla odio semper. Quam hendrerit venenatis arcu urna cras tempus maecenas. Sed diam quam et volutpat enim mattis etiam diam pharetra. Gravida viverra ut elementum nunc urna donec. Purus a sit senectus elit."
              }
            </p>

            <h1 className="mt-6 text-[1.8em] lg:text-[40px] font-primary text-primary font-bold max-w-[100%] lg:max-w-[80%]">
              DATE & TIME
            </h1>
            <div className="flex gap-3 w-full max-sm:flex-wrap sm:flex-wrap">
              <p className="text-gray-300">Saturday, June 22 · 8am - 6pm WAT</p>
              <button className="text-gray-300 mr-0 max-sm:ml-0 sm:ml-0  md:ml-auto flex  gap-1 text-primary">
                <BsPlus size={24} className="m-auto" /> Add to Calender
              </button>
            </div>

            <h1 className="mt-6 text-[1.8em] lg:text-[40px] font-primary text-primary font-bold max-w-[100%] lg:max-w-[80%]">
              TAGS
            </h1>
            <div className="flex flex-wrap gap-2">
              {tags.map((item, index) => (
                <Link
                  key={index}
                  href="#"
                  className="bg-[#ffffff18] px-4 py-3 shadow-2xl rounded-xl mb-1 hover:border-2 hover:border-white border-2 border-[transparent]"
                >
                  {item.tag}
                </Link>
              ))}
            </div>

            <h1 className="mt-6 text-[1.5em] lg:text-[30px] font-primary font-semibold max-w-[100%] lg:max-w-[80%]">
              Share with loved ones
            </h1>
            <div className="flex gap-4 flex-wrap">
              <div>
                <span className="mt-4 flex gap-4 text-primary">
                  {socials.map((item, index) => (
                    <Link key={index} href="#" className="hover:text-white">
                      {item.icon}
                    </Link>
                  ))}
                </span>
                <p className="mt-6 flex gap-1">
                  <FaLocationDot size={20} className="my-auto text-primary" />{" "}
                  2118 Thornridge Cir. Syracuse, Connecticut 35624
                </p>
              </div>

              <Button
                onClick={() => {}}
                className="mr-0 md:ml-auto mb-0 mt-auto  text-[16px] w-[150px] h-fit flex items-center justify-center py-3 px-2 drop-shadow-custom-red bg-primary "
              >
                Get Tickets
              </Button>
            </div>
          </div>
          <div className="mt-3 lg:mt-0 flex max-sm:flex-col lg:grid h-full w-full grid-rows-[63.5%_31%] lg:gap-11 gap-6">
            <div className="relative w-full h-[16em] lg:h-full">
              <Image
                src={"/map.png"}
                alt="party 1"
                layout="fill"
                objectFit="cover"
                className="rounded-[30px]"
                objectPosition="50% 80%"
                unoptimized
              />
            </div>
            <div className="relative w-full h-[16em]  lg:h-full bg-white rounded-[30px] px-8 py-7 text-black flex flex-col gap-2 ">
              <h2 className="text-[1.3em] font-semibold">Locate</h2>
              <p className=" text-gray-800">
                2118 Thornridge Cir. Syracuse, Connecticut 35624
              </p>
              <button className="mt-1 w-fit text-primary flex gap-2">
                <RiFileCopy2Fill size={20} className="my-auto" /> Copy Location
              </button>
              <Button
                onClick={() => {}}
                className="font-secondary mr-0 ml-auto mb-0 mt-auto  text-[16px] w-full h-fit flex items-center justify-center py-3 px-2 bg-primary "
              >
                Open Map
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="max-sm:flex flex-col grid grid-cols-2 gap-6 mt-3">
        <Button
          onClick={() => {}}
          className="font-secondary mr-0 ml-auto mb-0 mt-auto  text-[1.2em] w-full h-fit flex items-center justify-center py-4 px-2 bg-primary shadow-xl shadow-[#eeab8536]"
        >
          Buy with Card
        </Button>
        <Button
          onClick={() => {}}
          className="font-secondary mr-0 ml-auto mb-0 mt-auto  text-[1.2em] w-full h-fit flex items-center justify-center py-4 px-2 bg-gradient-to-r from-blue-500 to-purple-600 shadow-xl shadow-[#85d5ee36]"
        >
          Buy with Crypto
        </Button>
      </section>

      <section className="relative mt-3">
        <div className="grid grid-cols-3 absolute w-full">
          <div className=" w-full h-[28em] top-[-12em] radial-gradient blur-3xl opacity-[30%]"></div>
          <div className=" w-full h-[25em] bg-[transparent]"></div>
          <div className=" w-full h-[30em] mt-[5em] radial-gradient blur-3xl opacity-[38%]"></div>
        </div>

        <div className="border-2 glass-bg-dark border-[#ffffff56] px-[2em] lg:px-[4em] py-4 pt-8 lg:pt-12 rounded-[2em]">
          <h2 className="text-[2.2em] font-inter font-medium">
            Write a review
          </h2>
          
            
            <StarRating rating={rating} setRating={setRating} size={24} className="my-7"/>
          

          <form className="flex flex-col gap-[2.5em] w-full lg:w-[50%] mt-[2.8em] mb-4">
            <InputField
              value={email}
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Input email"
              required={true}
              //className=" bg-[transparent] border border-[#ffffff56] text-white placeholder-gray-500 placeholder:text-sm text-sm md:text-[17px]"
            />
            <div className="relative grid">
              <label className="absolute bg-[#0c0c0c] top-[-0.8em] text-primary left-2 px-1 font-semibold">
                Message
              </label>
              <textarea
                placeholder="Leave us a message"
                className=" focus:outline-orange-500 px-4 py-4 bg-[transparent] h-[12em] border rounded-md border-[#ffffff56]"
              ></textarea>
              <div className="mt-4 gap-4 grid grid-cols-[1fr_1.6fr] w-[65%]">
                <button
                  className="border border-[#ffffff56] rounded-xl px-3 py-4 w-full hover:bg-[#ffffff11]"
                  type="button"
                >
                  Cancel
                </button>
                <button className="bg-primary border-[#ffffff56] rounded-xl px-3 py-4 w-full">
                  Submit Review{" "}
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>

      <section className="border-2 glass-bg-dark border-[#ffffff56] px-[2.5em] rounded-[2em] py-12 pb-6 shadow-xl ">
      {reviews.map((review, index) => (
        <div key={index} >
        <div  className="grid grid-cols-[45px_auto] w-full rounded-full gap-3">
          <div className="relative w-[45px] h-[45px] grid grid-cols-[45px_auto] rounded-full">
            <Image
              src={review.profileImage}
              alt="profile image"
              layout="fill"
              objectFit="cover"
              className="rounded-full" />
          </div>
          
            
            <div className="flex flex-col gap-2">
              <h1>{review.name}</h1>
              <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
              <FaStar key={i} className={i < review.rating ? "text-yellow-500" : "text-gray-400"} />
            ))}
              </div>
              <p>{review.review}</p>
              
            </div>
           
            
          

        </div>
         <hr className="my-6 border-gray-600"></hr>
         </div>
      ))}
      </section>

      {/*<section className="relative grid place-items-center">
        <div className="absolute w-full h-[45em] radial-gradient blur-3xl opacity-50"></div>
        <div className="relative w-[87%] lg:h-[40em] md:h-[30em] max-sm:h-[17em] bg-black my-4 rounded-2xl">
          <Image
            src={"/Gemini_Generated_Image_noqspznoqspznoqs.png"}
            alt="party 1"
            layout="fill"
            objectFit="contain"
            className="rounded-[30px]"
            unoptimized
          />
        </div>
      </section>*/}

      <AllEvents title="NFT TICKETS" />
      <div className="my-5"></div>
    </>
  );
}
