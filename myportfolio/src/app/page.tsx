import React from 'react';
import { Sidebar } from '@/components/templates/Sidebar';
import { FvSection } from '@/components/organisms/FvSection/FvSection';
import { SkillLabelList } from '@/components/molecules/SkillLabelList/SkillLabelList'
import { WorksList } from '@/components/molecules/WorksList/WorksList';
import { getSkills, getWorks } from "@/libs/microcms";

export default async function Home() {
  const skillLists = await getSkills();
  const worksLists = await getWorks();
  return (
    <div className="max-w-[1200px] m-auto flex pt-[150px]">
      <Sidebar />
      <div className='max-w-[calc(95%_-_250px)] w-[100%] m-0 ml-auto'>
        <main>
          <FvSection />
          <SkillLabelList skillLists={skillLists} />
          <WorksList worksLists={worksLists} />
        </main>
      </div>
    </div>
  )
}