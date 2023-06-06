import React from 'react';
import Image from 'next/image'
import { getSkills, getWorks } from "@/libs/microcms";
import { Sidebar } from '@/components/templates/Sidebar';
import { FvSection } from '@/components/organisms/FvSection/FvSection';
import { AboutSection } from '@/components/organisms/AboutSection/AboutSection';
import { SkillSection } from '@/components/organisms/SkillSection/SkillSection';
import { WorksSection } from '@/components/organisms/WorksSection/WorksSection';
import { SkillLabelList } from '@/components/molecules/SkillLabelList/SkillLabelList'
import { WorksList } from '@/components/molecules/WorksList/WorksList';
import { Headline3 } from '@/components/atoms/Headline3/Headline3';
import { Headline4 } from '@/components/atoms/Headline4/Headline4';
import { Headline2 } from '@/components/atoms/Headline2/Headline2';
import { Button } from '@/components/atoms/Button/Button';

export default async function Home() {
  const skillLists = await getSkills();
  const worksLists = await getWorks();
  return (
    <div className="max-w-[1200px] m-auto flex pt-[150px]">
      <Sidebar />
      <div className='max-w-[calc(95%_-_250px)] w-[100%] m-0 ml-auto'>
        <main>
          <FvSection />
          <AboutSection>
            <div className="flex items-center">
              <Headline4 name="Name" />
              <p>Taishi Ohmoto（大本 泰史）</p>
            </div>
            <div className="flex items-center">
              <Headline4 name="Date of birth" />
              <p>1998.5.30</p>
            </div>
            <div className="flex items-center">
              <Headline4 name="Birthplace" />
              <p>Japan / Hiroshima</p>
            </div>
            <div className="flex items-center">
              <Headline4 name="Hobby" />
              <p>Fashion,Sauna</p>
            </div>
            <div className="flex items-center">
              <Headline4 name="SNS" />
              <div className='flex items-center gap-5'>
                <a href="https://github.com/taic-dev">
                  <Image src="/github.svg" width={40} height={40} alt="Githubロゴ" className='h-auto' />
                </a>
                <a href="https://zenn.dev/taic_dev">
                  <Image src="/zenn.png" width={100} height={100} alt="Zennロゴ" className='h-auto' />
                </a>
              </div>
            </div>
          </AboutSection>
          <SkillSection>
            <div className='mb-10'>
              <Headline2 name="Development language" />
              <Headline3 name="Front end" />
              <SkillLabelList skillLists={skillLists} />
              <Headline3 name="Back end" />
              <SkillLabelList skillLists={skillLists} />
              <Headline3 name="Other" />
              <SkillLabelList skillLists={skillLists} />
            </div>
            <div className='mb-8'>
              <Headline2 name="Github contributions" />
              <a href="https://github.com/taic-dev">
                <img src="https://github-contributions-api.deno.dev/taic-dev.svg" alt="Github contributions" />
              </a>
            </div>
          </SkillSection>
          <WorksSection>
            <div className="mb-10">
              <Headline2 name="Pick Up" />
              <WorksList worksLists={worksLists} />
            </div>
            <Button name="制作物一覧へ" link="" />
          </WorksSection>
        </main>
      </div>
    </div>
  )
}