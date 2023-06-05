import React from 'react';

interface SidebarItemProps {
  text: string
  link: string
}

export const SidebarItem = ({ text, link }: SidebarItemProps) => {
  return (
    <li className='mb-6 w-fit'>
      <a className='text-lg font-bold' href={link}>{ text }</a>
    </li>
  )
}