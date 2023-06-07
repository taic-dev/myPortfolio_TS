import type { Meta, StoryObj } from '@storybook/react';
import { Headline3 } from './Headline3';

const meta: Meta<typeof Headline3> = {
  title: "Headline/Headline3",
  component: Headline3,
  tags: [''],
}

export default meta;
type Story = StoryObj<typeof Headline3>

export const Name: Story = {
  args: {
    name: "Name",
  }
}

export const Skill: Story = {
  args: {
    name: "Skill",
  }
}

export const DateOfBirth: Story = {
  args: {
    name: "Date of birth",
  }
}

export const Birthplace: Story = {
  args: {
    name: "Birthplace",
  }
}

export const Hobby: Story = {
  args: {
    name: "Hobby",
  }
}

export const SNS: Story = {
  args: {
    name: "SNS",
  }
}