"use client"

import React from 'react';
import { motion } from 'framer-motion';

interface SidebarItemProps {
  text: string
  link: string
}

const item =  {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  },
}

export const SidebarItem = ({ text, link }: SidebarItemProps) => {
  return (
    <motion.li
      className='mb-6 w-fit'
      variants={item}
    >
      <a className='text-lg font-bold' href={link}>{ text }</a>
    </motion.li>
  )
}