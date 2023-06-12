import React from "react";
import { getWorks } from "@/libs/microcms";
import type { MicroCMSImage } from "microcms-js-sdk";
import { WorksItem } from "@/components/atoms/WorksItem/WorksItem";

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

export default async function Archive() {
  const worksLists = await getWorks();
  const { contents } = worksLists;
  contents.reverse();
  return (
    <main className="mb-[50px] mx-[15px]">
      <ul className="flex flex-wrap gap-[30px]">
        {contents.map((v: WorksType)=>(
          <WorksItem
            key={v.id}
            link={v.id}
            imgUrl={v.thumbnail.url}
            name={v.name}
            desc={v.desc}
            client={v.client}
            year={v.date}
            wv="calc(33.33333%_-_20px)"
          />
        ))}
      </ul>
    </main>
  )
}