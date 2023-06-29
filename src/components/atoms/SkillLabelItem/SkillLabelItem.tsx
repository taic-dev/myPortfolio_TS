"use client"

import React from "react";
import Image from "next/image";
import { motion } from 'framer-motion'

interface SkillLabelItemProps {
  name: string;
  level: number;
  iconUrl: string;
}

const item =  {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  },
}

export const SkillLabelItem = ({ name, level, iconUrl }: SkillLabelItemProps) => {
  return (
    <motion.li className="flex items-center px-[15px] py-[5px] w-fit rounded-xl bg-[#ebebeb]" variants={item}>
      <Image src={iconUrl} alt="アイコン画像" width={30} height={30}  className="w-[30px] mr-[15px]" />
      <div>
        <p>{name}</p>
        <p>Lv {level}/10</p>
      </div>
    </motion.li>
  )
}