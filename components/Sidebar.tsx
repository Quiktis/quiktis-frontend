import React from "react";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";

const tabs = [
  { label: "Get Started", link: "/register" },
  { label: "Sign in", link: "/signin" },
  { label: "Explore Events", link: "/events" },
  { label: "Contact us", link: "/contact" },
  { label: "Newsletter", link: "/faq" },
];

interface SidebarProps {
  isOpen?: boolean;
  onSidebarClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onSidebarClose }) => {
  return (
    <>
      {isOpen && 
        <aside className="md:hidden fixed px-2 py-6 bg-[#1b1b1b] rounded-xl grid w-[15em] right-4 z-50 top-5  shadow ">
          <ul className="grid w-[90%] gap-2 place-items-center mx-auto">
            <li className="w-full grid">
              <button
                onClick={onSidebarClose}
                className="w-fit hover:bg-[#ffffff27] mr-2 ml-auto rounded-md"
              >
                <IoMdClose size={23} className="" />
              </button>
            </li>
            {tabs.map((item, index) => (
              <li
                key={index}
                className="hover:bg-[#ffffff1c] grid w-full rounded-md"
              >
                <Link
                  href={item.link}
                  className="w-full text-gray-200 flex justify-center py-3"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      }
    </>
  );
};


export default Sidebar;
