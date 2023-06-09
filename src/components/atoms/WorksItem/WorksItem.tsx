"use client"

import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface WorksItemProps {
  link: string;
  imgUrl: string;
  name: string;
  desc: string;
  client: string;
  year: number;
  wv: string;
}

const item =  {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  },
}

export const WorksItem = ({
  link,
  imgUrl,
  name,
  desc,
  client,
  year,
  wv
}: WorksItemProps) => {
  return (
    <motion.li className={`${wv} shrink-0 ${wv === `w-[calc(33.33333%_-_20px)]` && `xl:w-[calc(50%_-_15px)]`} ${wv === `w-[calc(33.33333%_-_20px)]` && `sm:w-[calc(100%)]`}`} variants={item}>
      <Link href={`detail/${link}`} className='block h-full'>
        <Image src={imgUrl} alt="実績画像" width={1980} height={1150} className='w-[100%] mb-[20px] rounded-xl shadow-[1px_1px_6px_#ccc;]' />
        <div className='leading-none'>
          <h4 className='text-lg mb-[10px] font-bold noto-sans-japanese'>{name.length > 15 ? `${name.slice(0,15)}...` : name }</h4>
          <p className='text-sm mb-[10px] noto-sans-japanese'>{desc.length >= 40 ? `${desc.slice(0,40)}...` : desc }</p>
          <span className='text-xs noto-sans-japanese'>{year} / {client}</span>
        </div>
      </Link>
    </motion.li>
  )
}
