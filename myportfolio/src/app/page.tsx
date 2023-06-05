import React from 'react';
import { SkillLabelList } from '@/components/molecules/SkillLabelList/SkillLabelList'
import { getSkills } from "@/libs/microcms";
import type { MicroCMSImage } from "microcms-js-sdk";

interface SkillsType {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
  level: number;
  iconUrl: MicroCMSImage;
}

export default async function Home() {
  const skillLists = await getSkills();
  return (
     <main>
      <SkillLabelList skillLists={skillLists} />
     </main>
  )
}