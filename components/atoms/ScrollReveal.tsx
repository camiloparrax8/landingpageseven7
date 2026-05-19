"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type AnimationVariant = "fade-up" | "fade-in" | "fade-left" | "fade-right" | "scale";

type ScrollRevealProps = {
  children: ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: number;
};

const variants: Record<AnimationVariant, Variants> = {
  "fade-up": {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  "fade-in": {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  "fade-left": {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  "fade-right": {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
};

export function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 0.5,
  className,
  once = true,
  amount = 0.2,
}: ScrollRevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants[variant]}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

type ScrollRevealListProps = {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  variant?: AnimationVariant;
  once?: boolean;
  amount?: number;
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function ScrollRevealList({
  children,
  className,
  staggerDelay = 0.1,
  variant = "fade-up",
  once = true,
  amount = 0.1,
}: ScrollRevealListProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{
        ...containerVariants,
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

type ScrollRevealItemProps = {
  children: ReactNode;
  variant?: AnimationVariant;
  className?: string;
  duration?: number;
};

export function ScrollRevealItem({
  children,
  variant = "fade-up",
  className,
  duration = 0.5,
}: ScrollRevealItemProps) {
  return (
    <motion.div
      variants={variants[variant]}
      transition={{
        duration,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
