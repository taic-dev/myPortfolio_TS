import type { Meta, StoryObj } from '@storybook/react';
import { SkillLabelList } from './SkillLabelList';

const meta: Meta<typeof SkillLabelList> =  {
  title: "Skill/SkillLabelList",
  component: SkillLabelList,
  tags: [''],
}

export default meta;
type Story = StoryObj<typeof SkillLabelList>

export const Indesx: Story = {}