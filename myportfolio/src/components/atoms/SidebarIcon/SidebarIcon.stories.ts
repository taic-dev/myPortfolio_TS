import type { Meta, StoryObj } from '@storybook/react';

import { SidebarIcon } from './SidebarIcon';

const meta: Meta<typeof SidebarIcon> = {
  title: "Sidebar/SidebarIcon",
  component: SidebarIcon,
  tags: [""],
}

export default meta;
type Story = StoryObj<typeof SidebarIcon>

export const Left: Story = {
  args: {
    link: "/",
    iconUrl: "https://myportfoliomaind3f2.gatsbyjs.io/static/me-f026bf3459d66dc11942c02ddf5dd9d8.png",
    position: "0",
  }
}

export const Center: Story = {
  args: {
    link: "/",
    iconUrl: "https://myportfoliomaind3f2.gatsbyjs.io/static/me-f026bf3459d66dc11942c02ddf5dd9d8.png",
    position: "auto",
  }
}