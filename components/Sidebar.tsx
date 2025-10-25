import React from "react";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import { useRouter } from "next/navigation";
import { useUser } from "@/app/context/UserContext";
import { useStore } from "@/app/context/QuiktisContext";
import { link } from "fs";

interface SidebarProps {
  isOpen?: boolean;
  onSidebarClose: () => void;
}

const authTabs = [
  //{ label: "Home", link: "/" },
  { label: "Dashboard", link: "/dashboard" },
  { label: "My Events", link: "/my-events" },
  { label: "Explore Events", link: "/events" },
];

const guestTabs = [
  { label: "Home", link: "/" },
  { label: "Sign in", link: "/register" },
  { label: "Explore Events", link: "/events" },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onSidebarClose }) => {
  
 
  const { state } = useStore();
  const { user } = state;

  const tabsToRender = user?.email ? authTabs : guestTabs;


  return (
    <>
      {isOpen && (
        <aside className="md:hidden fixed px-2 py-6 bg-[#1b1b1b] rounded-xl grid w-[15em] right-4 z-[2000] top-5 shadow">
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
                  className="w-full text-gray-200 flex justify-center py-3">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      )}
    </>
  );
};

export default Sidebar;
