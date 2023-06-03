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
    text: "About"
  }
}