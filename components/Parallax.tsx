"use client";

import type { ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

type ParallaxProps = {
  children: ReactNode;
  offset?: number;
  className?: string;
};

export default function Parallax({
  children,
  offset = 30,
  className,
}: ParallaxProps) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, offset * -1]);

  return (
    <motion.div style={{ y }} className={cn(className)}>
      {children}
    </motion.div>
  );
}
