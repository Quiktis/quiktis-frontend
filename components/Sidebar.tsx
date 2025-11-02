import React from "react";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import { useRouter } from "next/navigation";
import { useStore } from "@/app/lib/store";
import Image from "next/image";

interface SidebarProps {
  isOpen?: boolean;
  onSidebarClose: () => void;
}

const authTabs = [
  
  { label: "Events", link: "/event", icon: "" },
  
  { label: "Explore Events", link: "/explore-events", icon: "" },

  { label: "Create Event", link: "/create-event", icon: <Image src="/arrow-45.svg" alt='logo' height={10} width={10} unoptimized className='ml-1.5 object-contain'/> },

];

const guestTabs = [
  { label: "Explore Events", link: "/register", 
    icon: <Image src="/arrow-45.svg" alt='logo' height={10} width={10} unoptimized className='ml-1.5 object-contain'/> },
  
  
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onSidebarClose }) => {
  const router = useRouter();
  const { user } = useStore();

  const tabsToRender = user?.email ? authTabs : guestTabs;
  const firstName = user?.name ? user.name.split(" ")[0] : null;


  return (
    <>
      {isOpen && (
        <aside className="md:hidden fixed px-2 py-6 pb-8 bg-[#1b1b1b] rounded-xl grid w-[15em] right-4 z-[2000] top-5 shadow ">
          <ul className="grid w-[90%] gap-2 place-items-center mx-auto">
            <li className="w-full grid">
              <button
                onClick={onSidebarClose}
                className="w-fit hover:bg-[#ffffff27] mr-2 ml-auto rounded-md">
                <IoMdClose size={23} />
              </button>
            </li>
            {tabsToRender.map((item, index) => (
              <li
                key={index}
                className="hover:bg-[#ffffff1c] grid w-full rounded-md">
                <Link
                  href={item.link}
                  onClick={() => onSidebarClose()}
                  className="w-full text-gray-200 flex justify-center py-4">
                  {item.label}{item.icon ?? item.icon}
                </Link>
              </li>
            ))}
            {/*user?.email && <button className="mt-5 bg-white/5 px-6 py-1 rounded-full" 
            onClick={() => {
              onSidebarClose();
              //logout();
            }}
            >Logout</button>*/}

            {user?.id ? (
              <Link href="/profile" className="bg-[#ffffff0c] px-3 pr-4 py-2 rounded-full my-auto mt-4 flex gap-[2px] text-gray-300 font-normal items-center">
                <Image
                src="/icons/Profile-img.svg"
                alt="arrow"
                height={25}
                width={25}
                unoptimized
                className="object-contain"
              />
              Hi {firstName}</Link>
            ) : (
              <Link
                href={"/register"}
                className="cursor-pointer px-4 py-1 rounded-full h-fit my-auto bg-[#919499]/20"
              >
                Sign in
              </Link>
            )}
          </ul>
        </aside>
      )}
    </>
  );
};

export default Sidebar;
