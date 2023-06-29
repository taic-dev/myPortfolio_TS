import React from 'react';
import { getSkills, getWorks } from "@/libs/microcms";
import { FvSection } from '@/components/organisms/FvSection/FvSection';
import { AboutSection } from '@/components/organisms/AboutSection/AboutSection';
import { SkillSection } from '@/components/organisms/SkillSection/SkillSection';
import { WorksSection } from '@/components/organisms/WorksSection/WorksSection';
import { ContactSection } from '@/components/organisms/ContactSection/ContactSection';
import { AboutList } from '@/components/molecules/AboutList/AboutList';
import { SkillLabelList } from '@/components/molecules/SkillLabelList/SkillLabelList'
import { ContactForm } from '@/components/molecules/ContactForm/ContactForm';
import { WorksList } from '@/components/molecules/WorksList/WorksList';
import { Headline2 } from '@/components/atoms/Headline2/Headline2';
import { Headline3 } from '@/components/atoms/Headline3/Headline3';
import { Button } from '@/components/atoms/Button/Button';

export default async function Home() {
  const skillLists = await getSkills();
  const worksLists = await getWorks();
  return (
    <main className='pt-[50px] sm:pt-0'>
      <FvSection />
      <AboutSection>
        <Headline2 name="Profile" />
        <AboutList />
      </AboutSection>
      <SkillSection>
        <div className='mb-10'>
          <Headline2 name="Development language" />
          <Headline3 name="Front end" />
          <SkillLabelList skillLists={skillLists} skillType="frontend" />
          <Headline3 name="Back end" />
          <SkillLabelList skillLists={skillLists} skillType="backend" />
          <Headline3 name="Other" />
          <SkillLabelList skillLists={skillLists} skillType="other" />
        </div>
        <div className='mb-8'>
          <Headline2 name="Github contributions" />
          <a href="https://github.com/taic-dev" className='block overflow-x-scroll'>
            <img src="https://github-contributions-api.deno.dev/taic-dev.svg" alt="Github contributions" className='max-w-none' />
          </a>
        </div>
      </SkillSection>
      <WorksSection>
        <div className="mb-10">
          <Headline2 name="Pick Up" />
          <WorksList worksLists={worksLists} />
        </div>
        <Button name="制作物一覧へ" link="/archive" />
      </WorksSection>
      <ContactSection>
        <ContactForm />
      </ContactSection>
    </main>
  )
}