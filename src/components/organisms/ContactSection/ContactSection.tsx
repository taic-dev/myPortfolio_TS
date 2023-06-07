import React, { ReactNode } from 'react'
import { Headline1 } from '@/components/atoms/Headline1/Headline1'

export const ContactSection = ({ children }: { children: ReactNode }) => {
  return (
    <section className='mb-[50px]'>
      <Headline1 name="Contact" subName="お問い合わせ" />
      <p className='mb-[50px]'>制作のご依頼 ・ その他お問い合わせはこちらからよろしくお願いします。</p>
      {children}
    </section>
  )
}