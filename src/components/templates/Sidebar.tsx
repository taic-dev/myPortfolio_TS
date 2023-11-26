import React from "react";
import { SidebarWrapper } from "../organisms/SidebarWrapper/SidebarWrapper";
import { SidebarIcon } from '../atoms/SidebarIcon/SidebarIcon';
import { SidebarList } from '../molecules/SidebarList/SidebarList';
import { SidebarItem } from "../atoms/SidebarItem/SidebarItem";

export const Sidebar = () => {
  return (
    <div className="fixed max-w-[250px] top-[100px] ml-[15px] lg:hidden">
      <SidebarWrapper>
        <SidebarIcon
          link="/"
          iconUrl='/icon.jpg'
          position='auto'
         />
        <nav className='mt-[50px] ml-[80px]'>
          <SidebarList>
            <SidebarItem link="#about" text="About" />
            <SidebarItem link="#skill" text="Skill" />
            <SidebarItem link="#works" text="Works" />
            <SidebarItem link="#contact" text="Contact" />
          </SidebarList>
        </nav>
      </SidebarWrapper>
    </div>
  )
}