import React from 'react';
import { SidebarIcon } from '../atoms/SidebarIcon/SidebarIcon';
import { SidebarList } from '../molecules/SidebarList/SidebarList';

export const SidebarWrapper = () => {
  return (
    <aside className="max-w-[250px]">
      <SidebarIcon
        link="/"
        iconUrl='https://myportfoliomaind3f2.gatsbyjs.io/static/me-f026bf3459d66dc11942c02ddf5dd9d8.png'
        position='auto'
      />
      <nav className='mt-[50px] ml-[100px]'>
        <SidebarList />
      </nav>
    </aside>
  )
}