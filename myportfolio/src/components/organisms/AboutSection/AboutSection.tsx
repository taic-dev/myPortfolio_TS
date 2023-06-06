import React, { ReactNode } from 'react'
import { Headline1 } from '@/components/atoms/Headline1/Headline1'
import { Headline2 } from '@/components/atoms/Headline2/Headline2'

export function AboutSection({ children }: { children: ReactNode }) {
  return (
    <section className='mb-[50px]'>
      <Headline1 name="About" subName="私について" />
      <div className="ml-[50px]">
        <Headline2 name="Profile" />
        { children }
      </div>
    </section>
  )
}
