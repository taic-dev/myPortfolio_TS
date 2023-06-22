"use client"

import React from "react";
import { SkillLabelItem } from "../../atoms/SkillLabelItem/SkillLabelItem";
import type { MicroCMSImage } from "microcms-js-sdk";
import { motion } from "framer-motion"; 

interface SkillsType {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
  level: number;
  iconUrl: MicroCMSImage;
  type: string[]
}

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}

export const SkillLabelList = ({ skillLists, skillType }: any ) => {
  const { contents } = skillLists;
  contents.reverse();
  return (
    <motion.ul
      className="flex flex-wrap gap-2.5"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {contents.map((v: SkillsType)=>(
        v.type[0] === skillType && <SkillLabelItem
          key={v.id}
          name={v.name}
          level={v.level}
          iconUrl={v.iconUrl.url}
        />
      ))}
    </motion.ul>
  );
};