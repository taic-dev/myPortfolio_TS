"use client"

import React from "react";
import { motion } from "framer-motion";

interface Headline3Props {
  name: string;
}

export const Headline3 = ({ name }: Headline3Props) => {
  return(
    <div className="headline3 my-8">
      <motion.h4
        className="text-2xl w-fit"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        { name }
      </motion.h4>
    </div>
  )
}