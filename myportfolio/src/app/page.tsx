import React from 'react';
import { SkillLabelList } from '@/components/molecules/SkillLabelList/SkillLabelList'
import { getSkills } from "@/libs/microcms";

export default async function Home() {
  const { contents } = await getSkills();

  console.log(contents)
  return (
     <main>
      <SkillLabelList />
     </main>
  )
}