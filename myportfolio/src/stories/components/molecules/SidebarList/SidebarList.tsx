import React from 'react'
import { SidebarItem } from '../../atoms/SidebarItem/SidebarItem'


export const SidebarList = () => {
  return (
    <ol type='1'>
      <SidebarItem text='About' link='#about' />
      <SidebarItem text='Skill' link='#skill' />
      <SidebarItem text='Works' link='#works' />
      <SidebarItem text='Contact' link='#contact' />
    </ol>
  )
}