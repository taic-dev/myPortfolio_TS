import React from 'react'
import Image from 'next/image';

interface WorksItemProps {
  link: string;
  imgUrl: string;
  name: string;
  desc: string;
  client: string;
  year: number;
}

export const WorksItem = ({
  link,
  imgUrl,
  name,
  desc,
  client,
  year
}: WorksItemProps) => {
  return (
    <li className='w-[314px]'>
      <a href={link}>
        <Image src={imgUrl} alt="実績画像" width={1980} height={1150} className='w-[100%] shadow-md mb-[20px] rounded-xl' />
        <div className='leading-none'>
          <h4 className='text-lg mb-[10px] font-bold noto-sans-japanese'>{name.length > 25 ? `${name.slice(0,25)}...` : name }</h4>
          <p className='text-sm mb-[10px] noto-sans-japanese'>{desc.length >= 40 ? `${desc.slice(0,40)}...` : desc }</p>
          <span className='text-xs noto-sans-japanese'>{year} / {client}</span>
        </div>
      </a>
    </li>
  )
}
