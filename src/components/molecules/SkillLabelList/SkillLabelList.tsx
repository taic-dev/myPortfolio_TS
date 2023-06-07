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
  type: string[]
}

export const SkillLabelList = ({ skillLists, skillType }: any ) => {
  const { contents } = skillLists;
  contents.reverse();
  return (
    <ul className="flex flex-wrap gap-2.5">
      {contents.map((v: SkillsType)=>(
        v.type[0] === skillType && <SkillLabelItem
          key={v.id}
          name={v.name}
          level={v.level}
          iconUrl={v.iconUrl.url}
        />
      ))}
    </ul>
  );
};