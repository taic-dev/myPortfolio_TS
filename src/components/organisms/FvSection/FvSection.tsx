"use client"

import React from "react";
import { SidebarIcon } from "@/components/atoms/SidebarIcon/SidebarIcon";
import { motion } from "framer-motion";

export const FvSection = () => {
  return (
    <section className="mx-[15px] mb-[50px]">
      <div className="lg:flex lg:items-center lg:gap-[40px] lg:mb-[50px] sm:flex-col ">
        <div className="hidden lg:block">
          <SidebarIcon link="/" iconUrl="/icon.jpg" position="" />
        </div>
        <h1 className="mb-[80px] text-[59px] font-bold leading-none lg:mb-0 md:text-topTitle sm:text-center translate-y-[-5px]">
          <span className="block overflow-hidden pt-[5px]">
            <motion.span
              className="block"
              initial={{ 
                y: 100,
              }}
              animate={{ 
                y: [100,-5,0],
              }}
              transition={{ 
                delay: 0.5, duration: 1
              }}
            >
              Hello World !!
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              initial={{ 
                y: 100,
              }}
              animate={{ 
                y: [100,-5,0],
              }}
              transition={{ 
                delay: 0.5,
                duration: 1 
              }}
            >
            My name is Taic-dev
            </motion.span>
          </span>
        </h1>
      </div>
      <motion.div 
        initial={{ 
          opacity: 0,
          y: 10,
        }}
        animate={{ 
          opacity: 1,
          y: 0,
        }}
        transition={{ 
          delay: 0.5,
          duration: 1
        }}
      >
        <p className="leading-loose noto-sans-japanese font-bold">Web開発者。HP制作、WEBアプリ開発、業務効率化ツール制作と幅広く手がけています。 中でもフロントエンド開発が大好きで、ユーザーがストレスなく使えるサービスを目指して日々開発に取り組んでいます。<br />
          また、<strong className="underline">「自分が死んだ後も使われるようなモノを作ること」</strong>を人生の目標にしています。</p>
      </motion.div>
    </section>
  )
}
