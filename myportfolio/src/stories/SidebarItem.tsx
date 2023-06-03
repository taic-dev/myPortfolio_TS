import React from 'react';

interface SidebarItemProps {
  text: string
}

export const SidebarItem = ({ text }: SidebarItemProps) => {
  return (
    <a href="#" className='text-3xl'>{ text }</a>
  )
}