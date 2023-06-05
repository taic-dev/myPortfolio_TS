import React from 'react';
import { SkillLabelList } from '@/components/molecules/SkillLabelList/SkillLabelList'
import { getSkills } from "@/libs/microcms";

export default async function Home() {
  const skillLists = await getSkills();
  return (
     <main>
      <SkillLabelList skillLists={skillLists} />
     </main>
  )
}