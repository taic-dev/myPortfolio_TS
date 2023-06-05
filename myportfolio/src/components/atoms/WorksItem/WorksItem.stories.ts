import type { Meta, StoryObj } from '@storybook/react';
import { WorksItem } from './WorksItem';

const meta: Meta<typeof WorksItem> = {
  title: "Works/WorksItem",
  component: WorksItem,
  tags: [''],
}

export default meta;
type Story = StoryObj<typeof WorksItem>

export const Index: Story = {
  args: {
    link: "",
    imgUrl: "https://myportfoliomaind3f2.gatsbyjs.io/static/portfolio-2aaf8af6f50fa567f77c21e537e40bb3.png",
    name: "ポートフォリオ",
    desc: "Taic-devのポートフォリオサイトです。",
    client: "個人開発",
    year: 2023,
  }
}
