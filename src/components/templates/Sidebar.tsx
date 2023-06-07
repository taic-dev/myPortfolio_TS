import React from "react";
import { SidebarWrapper } from "../organisms/SidebarWrapper/SidebarWrapper";
import { SidebarIcon } from '../atoms/SidebarIcon/SidebarIcon';
import { SidebarList } from '../molecules/SidebarList/SidebarList';
import { SidebarItem } from "../atoms/SidebarItem/SidebarItem";

export const Sidebar = () => {
  return (
    <div className="fixed max-w-[250px] top-[100px] ml-[15px]">
      <SidebarWrapper>
        <SidebarIcon
          link="/"
          iconUrl='https://myportfoliomaind3f2.gatsbyjs.io/static/me-f026bf3459d66dc11942c02ddf5dd9d8.png'
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