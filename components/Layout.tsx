import { ReactNode, useEffect, useState } from "react";
import SideNavBar from "./SideNavBar";
import { useRouter } from "next/router";
import { HiOutlinePlus } from "react-icons/hi2";
import Link from "next/link";

interface LayoutProps {
    children: ReactNode;
  }

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();

  const goToNewPost = () => {
    router.push('newPost')
  }

    return (
      <div className="flex">
        {/* Render SideBar */}
        <div>
          <SideNavBar/>
        </div>
        <Link href="/newPost" className="tooltip flex place-content-center w-14 h-14 rounded-full absolute right-10 bottom-10 shadow-lg bg-white transition-colours duration-300 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
            <HiOutlinePlus className="w-8 h-8 place-self-center text-gray-600"/>
            <div className="tooltiptext w-24">
              New Post
            </div>
        </Link>
        {/* Render Page */}
        <div className="w-[calc(100vw_-_256px)] h-screen overflow-hidden">
          {children}
        </div>
      </div>
    );
  };

export default Layout;