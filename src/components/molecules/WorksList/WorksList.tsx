"use client"

import React from "react";
import { motion } from "framer-motion";
import { WorksItem } from "../../atoms/WorksItem/WorksItem";
import type { MicroCMSImage } from "microcms-js-sdk";

interface WorksType {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
  desc: string;
  date: number;
  client: string;
  thumbnail: MicroCMSImage;
  web_url?: string;
  github_url?: string;
  frontend?: [];
  backend?: [];
  other?: [];
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

export const WorksList = ({ worksLists }: any) => {
  const { contents } = worksLists;
  contents.reverse();
  return (
    <motion.ul
      className="flex gap-5 overflow-x-scroll p-3 translate-x-[-0.75rem]"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {contents.map((v: WorksType)=>(
        <WorksItem
          key={v.id}
          link={v.id}
          imgUrl={v.thumbnail.url}
          name={v.name}
          desc={v.desc}
          client={v.client}
          year={v.date}
          wv="w-[314px]"
        />
      ))}
    </motion.ul>
  )
}