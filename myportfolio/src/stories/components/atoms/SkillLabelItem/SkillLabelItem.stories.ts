import type { Meta, StoryObj } from '@storybook/react';
import { SkillLabelItem } from './SkillLabelItem';

const meta: Meta<typeof SkillLabelItem> =  {
  title: "Skill/SkillLabelItem",
  component: SkillLabelItem,
  tags: [''],
}

export default meta;
type Story = StoryObj<typeof SkillLabelItem>

export const HTML: Story = {
  args: {
    name: "HTML",
    level: 7,
    iconUrl: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIiA/Pgo8c3ZnIHdpZHRoPSIyNTZweCIgaGVpZ2h0PSIzNjFweCIgdmlld0JveD0iMCAwIDI1NiAzNjEiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPgogICAgPGc+CiAgICAgICAgPHBhdGggZD0iTTI1NS41NTQ4MTMsNzAuNzY1NzE0MyBMMjMyLjMxMzY3LDMzMS4xMjU0NTEgTDEyNy44NDM4NjgsMzYwLjA4NzkxMiBMMjMuNjYxNzE0MywzMzEuMTY2MjQyIEwwLjQ0NTE4NjgxMyw3MC43NjU3MTQzIEwyNTUuNTU0ODEzLDcwLjc2NTcxNDMgTDI1NS41NTQ4MTMsNzAuNzY1NzE0MyBaIiBmaWxsPSIjRTQ0RDI2Ij48L3BhdGg+CiAgICAgICAgPHBhdGggZD0iTTEyOCwzMzcuOTUwMjQyIEwyMTIuNDE2NzAzLDMxNC41NDY2MzcgTDIzMi4yNzc4MDIsOTIuMDU3MzE4NyBMMTI4LDkyLjA1NzMxODcgTDEyOCwzMzcuOTUwMjQyIEwxMjgsMzM3Ljk1MDI0MiBaIiBmaWxsPSIjRjE2NTI5Ij48L3BhdGg+CiAgICAgICAgPHBhdGggZD0iTTgyLjgyMDIxOTgsMTU1LjkzMjEzMiBMMTI4LDE1NS45MzIxMzIgTDEyOCwxMjMuOTk0NzI1IEw0Ny45MTcwMTEsMTIzLjk5NDcyNSBMNDguNjgxNDk0NSwxMzIuNTYyOTg5IEw1Ni41MzA5ODksMjIwLjU3MjgzNSBMMTI4LDIyMC41NzI4MzUgTDEyOCwxODguNjM2MTMyIEw4NS43Mzg5MDExLDE4OC42MzYxMzIgTDgyLjgyMDIxOTgsMTU1LjkzMjEzMiBMODIuODIwMjE5OCwxNTUuOTMyMTMyIFoiIGZpbGw9IiNFQkVCRUIiPjwvcGF0aD4KICAgICAgICA8cGF0aCBkPSJNOTAuMDE3NzU4MiwyMzYuNTQxODkgTDU3Ljk1Nzk3OCwyMzYuNTQxODkgTDYyLjQzMjM1MTYsMjg2LjY4NzY0OCBMMTI3Ljg1MzAxMSwzMDQuODQ4ODc5IEwxMjgsMzA0LjgwODA4OCBMMTI4LDI3MS41ODAxMzIgTDEyNy44NjAwNDQsMjcxLjYxNzQwNyBMOTIuMjkxNTE2NSwyNjIuMDEzMTg3IEw5MC4wMTc3NTgyLDIzNi41NDE4OSBMOTAuMDE3NzU4MiwyMzYuNTQxODkgWiIgZmlsbD0iI0VCRUJFQiI+PC9wYXRoPgogICAgICAgIDxwYXRoIGQ9Ik0yNC4xODA3NDczLDAgTDQwLjQxMDcyNTMsMCBMNDAuNDEwNzI1MywxNi4wMzUxNjQ4IEw1NS4yNTczMTg3LDE2LjAzNTE2NDggTDU1LjI1NzMxODcsMCBMNzEuNDg4LDAgTDcxLjQ4OCw0OC41NTg0MTc2IEw1NS4yNTgwMjIsNDguNTU4NDE3NiBMNTUuMjU4MDIyLDMyLjI5ODE5NzggTDQwLjQxMTQyODYsMzIuMjk4MTk3OCBMNDAuNDExNDI4Niw0OC41NTg0MTc2IEwyNC4xODE0NTA1LDQ4LjU1ODQxNzYgTDI0LjE4MTQ1MDUsMCBMMjQuMTgwNzQ3MywwIEwyNC4xODA3NDczLDAgWiIgZmlsbD0iIzAwMDAwMCI+PC9wYXRoPgogICAgICAgIDxwYXRoIGQ9Ik05Mi44MzA5NDUxLDE2LjEwMjY4MTMgTDc4LjU0Mjc2OTIsMTYuMTAyNjgxMyBMNzguNTQyNzY5MiwwIEwxMjMuMzU2ODM1LDAgTDEyMy4zNTY4MzUsMTYuMTAyNjgxMyBMMTA5LjA2MjMzLDE2LjEwMjY4MTMgTDEwOS4wNjIzMyw0OC41NTg0MTc2IEw5Mi44MzE2NDg0LDQ4LjU1ODQxNzYgTDkyLjgzMTY0ODQsMTYuMTAyNjgxMyBMOTIuODMwOTQ1MSwxNi4xMDI2ODEzIEw5Mi44MzA5NDUxLDE2LjEwMjY4MTMgWiIgZmlsbD0iIzAwMDAwMCI+PC9wYXRoPgogICAgICAgIDxwYXRoIGQ9Ik0xMzAuNDY5Mjc1LDAgTDE0Ny4zOTI3MDMsMCBMMTU3LjgwMjkwMSwxNy4wNjE5NzggTDE2OC4yMDI1NDksMCBMMTg1LjEzMjMwOCwwIEwxODUuMTMyMzA4LDQ4LjU1ODQxNzYgTDE2OC45NjkxNDMsNDguNTU4NDE3NiBMMTY4Ljk2OTE0MywyNC40OTAxOTc4IEwxNTcuODAyOTAxLDQxLjc1NTQyODYgTDE1Ny41MjM2OTIsNDEuNzU1NDI4NiBMMTQ2LjM0OTcxNCwyNC40OTAxOTc4IEwxNDYuMzQ5NzE0LDQ4LjU1ODQxNzYgTDEzMC40NjkyNzUsNDguNTU4NDE3NiBMMTMwLjQ2OTI3NSwwIEwxMzAuNDY5Mjc1LDAgWiIgZmlsbD0iIzAwMDAwMCI+PC9wYXRoPgogICAgICAgIDxwYXRoIGQ9Ik0xOTMuMjA5NjcsMCBMMjA5LjQ0NDU3MSwwIEwyMDkuNDQ0NTcxLDMyLjUwNzc4MDIgTDIzMi4yNjg2NTksMzIuNTA3NzgwMiBMMjMyLjI2ODY1OSw0OC41NTg0MTc2IEwxOTMuMjA5NjcsNDguNTU4NDE3NiBMMTkzLjIwOTY3LDAgTDE5My4yMDk2NywwIFoiIGZpbGw9IiMwMDAwMDAiPjwvcGF0aD4KICAgICAgICA8cGF0aCBkPSJNMTI3Ljg4OTU4MiwyMjAuNTcyODM1IEwxNjcuMjE2NTI3LDIyMC41NzI4MzUgTDE2My41MDk0NTEsMjYxLjk5Mjc5MSBMMTI3Ljg4OTU4MiwyNzEuNjA2ODU3IEwxMjcuODg5NTgyLDMwNC44MzM0MDcgTDE5My4zNjIyODYsMjg2LjY4NzY0OCBMMTkzLjg0MjYzNywyODEuMjkxOTU2IEwyMDEuMzQ3NTE2LDE5Ny4yMTIxMzIgTDIwMi4xMjY3NjksMTg4LjYzNjEzMiBMMTI3Ljg4OTU4MiwxODguNjM2MTMyIEwxMjcuODg5NTgyLDIyMC41NzI4MzUgTDEyNy44ODk1ODIsMjIwLjU3MjgzNSBaIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+CiAgICAgICAgPHBhdGggZD0iTTEyNy44ODk1ODIsMTU1Ljg1NDA2NiBMMTI3Ljg4OTU4MiwxNTUuOTMyMTMyIEwyMDUuMDMyNzkxLDE1NS45MzIxMzIgTDIwNS42NzM0OTUsMTQ4Ljc1MzU4MiBMMjA3LjEyODYxNSwxMzIuNTYyOTg5IEwyMDcuODkyMzk2LDEyMy45OTQ3MjUgTDEyNy44ODk1ODIsMTIzLjk5NDcyNSBMMTI3Ljg4OTU4MiwxNTUuODU0MDY2IEwxMjcuODg5NTgyLDE1NS44NTQwNjYgWiIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPgogICAgPC9nPgo8L3N2Zz4K"
  }
}