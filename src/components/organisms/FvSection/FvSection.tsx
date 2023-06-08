import React from "react";
import { SidebarIcon } from "@/components/atoms/SidebarIcon/SidebarIcon";

export const FvSection = () => {
  return (
    <section className="mx-[15px] mb-[50px]">
      <div className="lg:flex lg:items-center lg:gap-[40px] lg:mb-[50px] sm:flex-col ">
        <div className="hidden lg:block">
          <SidebarIcon link="/" iconUrl="https://myportfoliomaind3f2.gatsbyjs.io/static/me-f026bf3459d66dc11942c02ddf5dd9d8.png" position="" />
        </div>
        <h1 className="mb-[80px] text-[59px] font-bold leading-none lg:mb-0 md:text-topTitle sm:text-center">Hello World !!<br/>My name is Taic-dev</h1>
      </div>
      <p className="leading-loose noto-sans-japanese font-bold">Web開発者。HP制作、WEBアプリ開発、業務効率化ツール制作と幅広く手がけています。 中でもフロントエンド開発が大好きで、ユーザーがストレスなく使えるサービスを目指して日々開発に取り組んでいます。<br />
        また、<strong className="underline">「自分が死んだ後も使われるようなサービスを作ること」</strong>を人生の目標にしています。</p>
    </section>
  )
}
