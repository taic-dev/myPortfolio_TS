"use client";

import React from "react";
import { motion } from "framer-motion";

interface Headline1Props {
  name: string;
  subName: string;
}

export const Headline1 = ({ name, subName }: Headline1Props) => {
  return (
    <div className="headline1 mb-8 lg:ml-[15px] py-[5px] overflow-hidden">
      <div className="overflow-hidden">
        <motion.h2
          className="overflow-hidden text-4xl"
          initial={{ y: 40 }}
          whileInView={{ y: [40, -3, 0] }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {name}
        </motion.h2>
      </div>
      <motion.span
        className="text-sm"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        {subName}
      </motion.span>
    </div>
  );
};
