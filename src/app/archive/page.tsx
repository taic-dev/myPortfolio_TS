import React from "react";
import { getWorks } from "@/libs/microcms";
import { WorksItem } from "@/components/atoms/WorksItem/WorksItem";
import { Headline1 } from "@/components/atoms/Headline1/Headline1";
import { Button } from "@/components/atoms/Button/Button";
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

export default async function Archive() {
  const worksLists = await getWorks();
  const { contents } = worksLists;
  contents.reverse();
  return (
    <main className="mb-[50px]">
      <Headline1 name="Works" subName="制作物" />
      <ul className="flex flex-wrap gap-[30px] mb-[50px] lg:mx-[15px]">
        {contents.map((v: WorksType)=>(
          <WorksItem
            key={v.id}
            link={v.id}
            imgUrl={v.thumbnail.url}
            name={v.name}
            desc={v.desc}
            client={v.client}
            year={v.date}
            wv="w-[calc(33.33333%_-_20px)]"
          />
        ))}
      </ul>
      <div className="flex justify-center items-center gap-[20px] sm:flex-col">
        <Button name="TOPへ戻る" link="/" />
      </div>
    </main>
  )
}