import { ReactNode, useEffect, useState } from "react";
import SideNavBar from "./sideNavBar";

interface LayoutProps {
    children: ReactNode;
  }

const Layout: React.FC<LayoutProps> = ({ children }) => {
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