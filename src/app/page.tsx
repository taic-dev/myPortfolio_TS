import React from 'react';
import Image from 'next/image'
import { getSkills, getWorks } from "@/libs/microcms";
import { FvSection } from '@/components/organisms/FvSection/FvSection';
import { AboutSection } from '@/components/organisms/AboutSection/AboutSection';
import { SkillSection } from '@/components/organisms/SkillSection/SkillSection';
import { WorksSection } from '@/components/organisms/WorksSection/WorksSection';
import { ContactSection } from '@/components/organisms/ContactSection/ContactSection';
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
    <main className='pt-[50px] sm:pt-0'>
      <FvSection />
      <AboutSection>
        <Headline2 name="Profile" />
        <div className="flex items-center xs:flex-col xs:items-start">
          <Headline4 name="Name" />
          <p className='xs:ml-[30px]'>Taishi Ohmoto（大本 泰史）</p>
        </div>
        <div className="flex items-center xs:flex-col xs:items-start">
          <Headline4 name="Date of birth" />
          <p className='xs:ml-[30px]'>1998.5.30</p>
        </div>
        <div className="flex items-center xs:flex-col xs:items-start">
          <Headline4 name="Birthplace" />
          <p className='xs:ml-[30px]'>Japan / Hiroshima</p>
        </div>
        <div className="flex items-center xs:flex-col xs:items-start">
          <Headline4 name="Hobby" />
          <p className='xs:ml-[30px]'>Fashion,Sauna</p>
        </div>
        <div className="flex items-center xs:flex-col xs:items-start">
          <Headline4 name="SNS" />
          <div className='flex items-center gap-5 xs:ml-[30px]'>
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
        <form action="">
          <div className="flex gap-5 mb-[25px]">
            <input type="text" className='w-[50%] p-[5px] rounded border border-solid border-gray-500' placeholder='*名前（フルネーム）' />
            <input type="text" className='w-[50%] p-[5px] rounded border border-solid border-gray-500' placeholder='*名前（カナ）' />
          </div>
          <div className='mb-[25px]'>
            <input type="text" className='w-[100%] p-[5px] rounded border border-solid border-gray-500' placeholder='*メールアドレス' />
          </div>
          <div className='mb-[25px]'>
            <textarea name="" id="" className='w-[100%] p-[5px] rounded border border-solid border-gray-500 min-h-[200px]' placeholder='*お問い合わせ内容'></textarea>
          </div>
          <input type="submit" value="送信" className='block w-fit text-white text-sm p-3 px-16 rounded bg-green-600 m-auto' />
        </form>
      </ContactSection>
    </main>
  )
}