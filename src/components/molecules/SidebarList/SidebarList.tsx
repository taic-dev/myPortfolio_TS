"use client"

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface SidebarListProps {
  children: ReactNode
}

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}

export const SidebarList = ({ children }: SidebarListProps) => {
  return (
    <motion.ol
      type="1"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      { children }
    </motion.ol>
  );
};
