import React from 'react'

interface Headline1Props {
  name: string;
  subName: string;
}

export const Headline1 = ({ name, subName }: Headline1Props) => {
  return (
    <div className='headline1 mb-8 lg:ml-[15px]'>
      <h2 className='text-4xl'>{name}</h2>
      <span className='text-sm'>{subName}</span>
    </div>
  )
}