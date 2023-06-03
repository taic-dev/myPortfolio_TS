import type { Meta, StoryObj } from '@storybook/react';
import { SidebarWrapper } from './SidebarWrapper';

const meta: Meta<typeof SidebarWrapper> =  {
  title: "Sidebar/SidebarWrapper",
  component: SidebarWrapper,
  tags: [''],
}

export default meta;
type Story = StoryObj<typeof SidebarWrapper>

export const Index: Story = {}