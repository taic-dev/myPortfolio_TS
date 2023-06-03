import type { Meta, StoryObj } from '@storybook/react';
import { Headline1 } from './Headline1';

const meta: Meta<typeof Headline1> = {
  title: "Headline/Headline1",
  component: Headline1,
  tags: [''],
}

export default meta;
type Story = StoryObj<typeof Headline1>

export const About: Story = {
  args: {
    name: "About",
    subName: "私について"
  }
}

export const Skill: Story = {
  args: {
    name: "Skill",
    subName: "スキルセット"
  }
}

export const Works: Story = {
  args: {
    name: "Works",
    subName: "制作物について"
  }
}

export const Contact: Story = {
  args: {
    name: "Contact",
    subName: "お問い合わせ"
  }
}