"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type HeroAnimationsProps = {
  children: ReactNode;
  className?: string;
};

export function HeroContentAnimation({ children, className }: HeroAnimationsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function HeroAsideAnimation({ children, className }: HeroAnimationsProps) {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.aside>
  );
}

type HeroPointAnimationProps = {
  children: ReactNode;
  index: number;
  className?: string;
};

export function HeroPointAnimation({ children, index, className }: HeroPointAnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.4,
        delay: 0.4 + index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
