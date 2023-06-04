import type { Meta, StoryObj } from '@storybook/react';
import { WorksList } from './WorksList';

const meta: Meta<typeof WorksList> =  {
  title: "Works/WorksList",
  component: WorksList,
  tags: [''],
}

export default meta;
type Story = StoryObj<typeof WorksList>

export const Indesx: Story = {}