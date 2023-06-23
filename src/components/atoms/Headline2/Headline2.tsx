"use client"

import React from "react";
import { motion } from "framer-motion";

interface Headline2Props {
  name: string;
}

export const Headline2 = ({ name }: Headline2Props) => {
  return(
    <div className="headline2 mb-4">
      <motion.h3 
        className="
          relative
          text-3xl
          before:absolute
          before:content-['']
          before:w-[20px]
          before:h-[3px]
          before:top-[50%]
          before:bg-black
          before:left-[-25px]
          before:translate-y-[-50%]"
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        { name }
      </motion.h3>
    </div>
  )
}