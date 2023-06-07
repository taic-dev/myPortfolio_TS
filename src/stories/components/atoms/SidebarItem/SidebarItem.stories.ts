import type { Meta, StoryObj } from '@storybook/react';
import { SidebarItem } from './SidebarItem';

const meta: Meta<typeof SidebarItem> =  {
  title: "Sidebar/SidebarItem",
  component: SidebarItem,
  tags: [''],
}

export default meta;
type Story = StoryObj<typeof SidebarItem>

export const About: Story = {
  args: {
    text: "About",
    link: "#about"
  }
}

export const Skill: Story = {
  args: {
    text: "Skill",
    link: "#skill"
  }
}

export const Works: Story = {
  args: {
    text: "Works",
    link: "#works"
  }
}

export const Contact: Story = {
  args: {
    text: "Contact",
    link: "#contact"
  }
}