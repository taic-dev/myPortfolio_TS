import React, { ReactNode } from 'react';

interface SidebarWrapperProps {
  children: ReactNode
}

export const SidebarWrapper = ({ children }: SidebarWrapperProps) => {
  return (
    <aside className="max-w-[250px]">{ children }</aside>
  )
}