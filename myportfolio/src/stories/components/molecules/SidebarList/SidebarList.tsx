import React from "react";
import { SidebarItem } from "../../atoms/SidebarItem/SidebarItem";

export const SidebarList = () => {
  return (
    <ol type="1">
      <SidebarItem link="#about" text="About" />
      <SidebarItem link="#skill" text="Skill" />
      <SidebarItem link="#works" text="Works" />
      <SidebarItem link="#contact" text="Contact" />
    </ol>
  );
};
