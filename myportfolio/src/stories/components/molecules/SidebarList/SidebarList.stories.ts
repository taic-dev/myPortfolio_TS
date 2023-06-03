import type { Meta, StoryObj } from '@storybook/react';
import { SidebarList } from './SidebarList';

const meta: Meta<typeof SidebarList> = {
  title: "Sidebar/SidebarList",
  component: SidebarList,
  tags: [''],
}

export default meta;
type Story = StoryObj<typeof SidebarList>

export const Base: Story = {
}