import React, { ReactNode } from "react";

interface SidebarListProps {
  children: ReactNode
}

export const SidebarList = ({ children }: SidebarListProps) => {
  return (
    <ol type="1">
      { children }
    </ol>
  );
};
