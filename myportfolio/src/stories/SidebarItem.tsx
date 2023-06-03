import React from 'react';

interface SidebarItemProps {
  text: string
}

export const SidebarItem = ({ text }: SidebarItemProps) => {
  return (
    <a href="#">{ text }</a>
  )
}