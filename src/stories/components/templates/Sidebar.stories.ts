import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from './Sidebar';

const meta: Meta<typeof Sidebar> =  {
  title: "Sidebar/Sidebar",
  component: Sidebar,
  tags: [''],
}

export default meta;
type Story = StoryObj<typeof Sidebar>

export const Indesx: Story = {}