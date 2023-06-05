import React from 'react';
import { SkillLabelList } from '@/components/molecules/SkillLabelList/SkillLabelList'
import { WorksList } from '@/components/molecules/WorksList/WorksList';
import { getSkills, getWorks } from "@/libs/microcms";

export default async function Home() {
  const skillLists = await getSkills();
  const worksLists = await getWorks();
  return (
     <main>
      <SkillLabelList skillLists={skillLists} />
      <WorksList worksLists={worksLists} />
     </main>
  )
}