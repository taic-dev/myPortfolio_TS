import React from "react"
import Image from 'next/image';
import { getWorks } from "@/libs/microcms";
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

export default async function worksDetail({ params }: {params : {slug: string}}) {
  const worksLists = await getWorks();
  const worksList = worksLists.contents.filter((v: WorksType)=>{
    return v.id === params.slug && v; 
  });

  const {id, name, desc, date, client, thumbnail:{ url }} = worksList[0]

  return (
    <div>
      詳細ページです
      <Image src={url} alt="制作物の画像" width={1980} height={1150} className='w-[100%] shadow-md mb-[20px] rounded-xl'/>
      id番号:{id}<br />
      名前:{name}<br />
      説明:{desc}<br />
      年:{date}<br />
      クライアント:{client} <br />

    </div>
  )
}