"use client"

import React from "react";
import Image from "next/image";
import { Headline4 } from '@/components/atoms/Headline4/Headline4';
import { motion } from "framer-motion";

export const AboutList = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <div className="flex items-center xs:flex-col xs:items-start">
        <Headline4 name="Name" />
        <p className="xs:ml-[30px]">Taishi Ohmoto（大本 泰史）</p>
      </div>
      <div className="flex items-center xs:flex-col xs:items-start">
        <Headline4 name="Date of birth" />
        <p className="xs:ml-[30px]">1998.5.30</p>
      </div>
      <div className="flex items-center xs:flex-col xs:items-start">
        <Headline4 name="Birthplace" />
        <p className="xs:ml-[30px]">Japan / Hiroshima</p>
      </div>
      <div className="flex items-center xs:flex-col xs:items-start">
        <Headline4 name="Hobby" />
        <p className="xs:ml-[30px]">Fashion,Sauna</p>
      </div>
      <div className="flex items-center xs:flex-col xs:items-start">
        <Headline4 name="SNS" />
        <div className="flex items-center gap-5 xs:ml-[30px]">
          <a href="https://github.com/taic-dev">
            <Image
              src="/github.svg"
              width={40}
              height={40}
              alt="Githubロゴ"
              className="h-auto"
            />
          </a>
          <a href="https://zenn.dev/taic_dev">
            <Image
              src="/zenn.png"
              width={100}
              height={100}
              alt="Zennロゴ"
              className="h-auto"
            />
          </a>
        </div>
      </div>
    </motion.div>
  );
};
