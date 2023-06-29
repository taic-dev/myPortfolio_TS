import React, { ReactNode } from 'react'
import { Headline1 } from '@/components/atoms/Headline1/Headline1'

export const ContactSection = ({ children }: { children: ReactNode }) => {
  return (
    <section id="contact" className='mb-[50px]'>
      <Headline1 name="Contact" subName="お問い合わせ" />
      <div className='lg:mx-[15px]'>
        <p className='mb-[50px] xs:ml-[15px]'>制作のご依頼 ・ その他お問い合わせはこちらからよろしくお願いします。</p>
        {children}
      </div>
    </section>
  )
}