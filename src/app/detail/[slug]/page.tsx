import React from "react"
import Image from 'next/image';
import { getWorks } from "@/libs/microcms";
import { IconButton } from "@/components/atoms/IconButton/IconButton";
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

export default async function worksDetail({ params }: {params : {slug: string}}) {
  const worksLists = await getWorks();
  const worksList = worksLists.contents.filter((v: WorksType)=>{
    return v.id === params.slug && v; 
  });

  const {id, name, desc, date, client, web_url, github_url, frontend, backend, other, thumbnail:{ url }} = worksList[0]
  const langList = [...frontend, ...backend, ...other];

  return (
    <main className="mb-[50px] mx-[15px]">
      <Image src={url} alt="制作物の画像" width={1980} height={1150} className='w-[100%] shadow-md mb-[20px] rounded-xl'/>
      <h1 className="text-3xl font-bold mt-12 mb-7 pb-7 relative xs:text-2xl before:absolute before:bottom-0 before:w-[50px] before:h-[4px] before:bg-black before:content-['']">{name}</h1>
      <div className="mb-7 noto-sans-japanese">
        <p>{date} / {client}</p>
      </div>
      <div className="flex gap-[20px] mb-7">
        {web_url && <IconButton name="Webへ" iconUrl="web" link={web_url} /> }
        {github_url && <IconButton name="Githubへ" iconUrl="github" link={github_url} />}
      </div>
      <ul className="flex flex-wrap items-center gap-[20px] mb-7">
        {langList.map((v)=>(
          <li key={v}>
            <Image src={`/lang/${v.toLowerCase()}.svg`} alt="スキル_画像" width={30} height={30} />
          </li>
        ))}
      </ul>
      <div className="noto-sans-japanese mb-12">
        <p className="leading-loose">{desc}</p>
      </div>
      <div className="flex justify-center items-center gap-[20px] sm:flex-col">
        <Button name="制作物一覧へ" link="/archive" />
        <Button name="TOPへ戻る" link="/" />
      </div>
    </main>
  )
}