import React, { ReactNode, ReactPortal } from 'react'
import { Headline1 } from '@/components/atoms/Headline1/Headline1'
import { Headline2 } from '@/components/atoms/Headline2/Headline2'

export function SkillSection({ children }: { children: ReactNode}) {
  return (
    <section className='mb-[50px]'>
      <Headline1 name="Skill" subName="スキルセット" />
      <div className="ml-[50px]">
        { children }
      </div>
    </section>
  )
}
