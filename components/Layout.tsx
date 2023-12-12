import { ReactNode, useEffect, useState } from "react";
import SideNavBar from "./SideNavBar";

interface LayoutProps {
    children: ReactNode;
  }

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // For Dark Mode
  


    return (
      <div className="flex">
        {/* Render SideBar */}
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