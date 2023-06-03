import type { Meta, StoryObj } from '@storybook/react';
import { Headline2 } from './Headline2';

const meta: Meta<typeof Headline2> = {
  title: "Headline/Headline2",
  component: Headline2,
  tags: [''],
}

export default meta;
type Story = StoryObj<typeof Headline2>

export const Profile: Story = {
  args: {
    name: "Profile"
  }
}

export const DevelopmentLanguage: Story = {
  args: {
    name: "Development language"
  }
}

export const GithubContributions: Story = {
  args: {
    name: "Github Contributions"
  }
}

export const HP: Story = {
  args: {
    name: "HP"
  }
}

export const WEBSITE: Story = {
  args: {
    name: "WEBSITE"
  }
}

export const OTHER: Story = {
  args: {
    name: "OTHER"
  }
}