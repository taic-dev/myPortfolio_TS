import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: "Button/Button",
  component: Button,
  tags: [''],
}

export default meta;
type Story = StoryObj<typeof Button>

export const MoreButton: Story = {
  args: {
    name: "一覧を見る",
    link: ""
  }
}
