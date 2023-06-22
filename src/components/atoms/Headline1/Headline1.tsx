"use client"

import React from "react";
import { motion } from "framer-motion";

interface Headline1Props {
  name: string;
  subName: string;
}

export const Headline1 = ({ name, subName }: Headline1Props) => {
  return (
    <div className="headline1 mb-8 lg:ml-[15px] py-[5px] overflow-hidden">
      <motion.h2
        className="overflow-hidden text-4xl"
        initial={{ y: 100 }}
        animate={{
          y: [100, -5, 0],
        }}
        transition={{
          delay: 1,
          duration: 1,
        }}
      >
        {name}
      </motion.h2>
      <motion.span
        className="text-sm"
        initial={{ 
          opacity: 0,
          y: 10,
        }}
        animate={{ 
          opacity: 1,
          y: 0,
        }}
        transition={{ 
          delay: 1,
          duration: 1.5 
        }}
      >
        {subName}
      </motion.span>
    </div>
  );
};
