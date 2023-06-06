import React from 'react';
import { Sidebar } from '@/components/templates/Sidebar';
import { SkillLabelList } from '@/components/molecules/SkillLabelList/SkillLabelList'
import { WorksList } from '@/components/molecules/WorksList/WorksList';
import { getSkills, getWorks } from "@/libs/microcms";

export default async function Home() {
  const skillLists = await getSkills();
  const worksLists = await getWorks();
  return (
    <div className="wrapper">
      <Sidebar />
      <main>
        <SkillLabelList skillLists={skillLists} />
        <WorksList worksLists={worksLists} />
      </main>
    </div>
  )
}