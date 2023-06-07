import React from "react";

interface SkillLabelItemProps {
  name: string;
  level: number;
  iconUrl: string;
}

export const SkillLabelItem = ({ name, level, iconUrl }: SkillLabelItemProps) => {
  return (
    <li className="flex items-center px-[15px] py-[5px] w-fit rounded-xl bg-[#ebebeb]">
      <img src={iconUrl} alt="アイコン画像" className="w-[30px] mr-[15px]" />
      <div>
        <p>{name}</p>
        <p>Lv {level}/10</p>
      </div>
    </li>
  )
}