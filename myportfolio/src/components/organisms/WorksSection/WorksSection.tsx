import React, { ReactNode } from 'react'
import { Headline1 } from '@/components/atoms/Headline1/Headline1'

export const WorksSection = ({children}: { children : ReactNode }) => {
  return (
    <section className='mb-[50px]'>
      <Headline1 name="Works" subName="制作物" />
      <div className="ml-[50px]">
        { children }
      </div>
    </section>
  )
}
