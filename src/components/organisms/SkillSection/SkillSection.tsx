import React, { ReactNode, ReactPortal } from 'react'
import { Headline1 } from '@/components/atoms/Headline1/Headline1'

export const SkillSection = ({ children }: { children: ReactNode}) => {
  return (
    <section className='mb-[50px]'>
      <Headline1 name="Skill" subName="スキルセット" />
      <div className="ml-[50px] xs:ml-[15px]">
        { children }
      </div>
    </section>
  )
}
