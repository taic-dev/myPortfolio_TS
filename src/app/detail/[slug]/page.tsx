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

  const {id, name, desc, date, client, web_url, github_url, frontend, backend, other, thumbnail:{ url }} = worksList[0]
  const langList = [...frontend, ...backend, ...other];
  
  return (
    <main className="mb-[50px]">
      <Image src={url} alt="制作物の画像" width={1980} height={1150} className='w-[100%] shadow-md mb-[20px] rounded-xl'/>
      <h1 className="text-3xl font-bold mt-12 mb-7 pb-7 relative before:absolute before:bottom-0 before:w-[50px] before:h-[4px] before:bg-black before:content-['']">{name}</h1>
      <div className="mb-7">
        <p>{date} / {client}</p>
      </div>
      <div className="flex gap-[10px] mb-7">
        {web_url && <a href={web_url}>web_url</a>}
        {github_url && <a href={github_url}>Github</a>}
      </div>
      <ul className="flex gap-[10px] mb-7">
        {langList.map((v)=>(
          <li>{v}</li>
        ))}
      </ul>
      <div>
        <p>{desc}</p>
      </div>
    </main>
  )
}