import React from 'react'
import Image from 'next/image'
import { Headline1 } from '@/components/atoms/Headline1/Headline1'
import { Headline2 } from '@/components/atoms/Headline2/Headline2'
import { Headline4 } from '@/components/atoms/Headline4/Headline4'

export function AboutSection() {
  return (
    <section className='mb-[50px]'>
      <Headline1 name="About" subName="私について" />
      <div className="ml-[50px]">
        <Headline2 name="Profile" />
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
      </div>
    </section>
  )
}
