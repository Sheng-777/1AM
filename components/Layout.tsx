import { ReactNode, useEffect, useState } from "react";
import SideNavBar from "./SideNavBar";
import { FloatButton } from 'antd';
import { HiOutlinePlus } from "react-icons/hi2";
import { useRouter } from "next/router";

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
          <FloatButton
            onClick={goToNewPost}
            className="w-12 h-12"
            style={{ right: 40, bottom: 40}}
            icon={<HiOutlinePlus/>}
            tooltip="New Post"
          />
        <div>
          <SideNavBar/>
        </div>
        {/* Render Page */}
        <div className="w-[calc(100vw_-_256px)] h-screen overflow-hidden">
          {children}
        </div>
      </div>
    );
  };

export default Layout;