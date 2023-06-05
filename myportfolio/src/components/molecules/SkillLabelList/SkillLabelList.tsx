import React from "react";
import { SkillLabelItem } from "../../atoms/SkillLabelItem/SkillLabelItem";
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

export const SkillLabelList = ({ skillLists }: any ) => {
  console.log(skillLists)

  return (
    <ul className="flex flex-wrap gap-2.5">
      {skillLists.contents.map((v: SkillsType)=>(
        <SkillLabelItem
          key={v.id}
          name={v.name}
          level={v.level}
          iconUrl={v.iconUrl.url}
        />
      ))}
    </ul>
  );
};