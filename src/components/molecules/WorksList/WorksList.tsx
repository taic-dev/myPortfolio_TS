import React from "react";
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

export const WorksList = ({ worksLists }: any) => {
  const { contents } = worksLists;
  return (
    <ul className="flex gap-5 overflow-x-scroll pb-5">
      {contents.map((v: WorksType)=>(
        <WorksItem
          key={v.id}
          link=""
          imgUrl={v.thumbnail.url}
          name={v.name}
          desc={v.desc}
          client={v.client}
          year={v.date}
        />
      ))}
    </ul>
  )
}