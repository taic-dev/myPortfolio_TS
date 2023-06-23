import React, { ReactNode } from 'react'
import { Headline1 } from '@/components/atoms/Headline1/Headline1'

export const AboutSection = (({ children }: { children: ReactNode })=>{
  return (
    <section id="about" className='mb-[50px]'>
      <Headline1 name="About" subName="私について" />
      <div className="ml-[50px] xs:ml-[15px]">
        { children }
      </div>
    </section>
  )
})