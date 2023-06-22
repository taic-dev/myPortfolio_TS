"use client"

import React from 'react'
import { motion } from 'framer-motion';

interface SidebarIconPops {
  link: string;
  iconUrl: string;
  position: string;
}

export const SidebarIcon = ({ link, iconUrl, position }: SidebarIconPops) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ rotate: 180, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
    >
      <div className='w-[200px] h-[200px] rotate-180'>
        <a href={link}>
          <img src={iconUrl} alt="アイコン画像" className={`w-[200px] h-[200px] object-cover rounded-[20%] m-${position}`} />
        </a>
      </div>
    </motion.div>
  )
}
