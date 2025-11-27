"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function FloatingCTA() {
  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50 h-14 w-14 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-400 shadow-xl transition hover:scale-105 hover:shadow-cyan-500/40"
      animate={{
        boxShadow: [
          "0 0 0px rgba(56, 189, 248, 0.4)",
          "0 0 20px rgba(56, 189, 248, 0.6)",
          "0 0 0px rgba(56, 189, 248, 0.4)",
        ],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <Link
        href="/contact"
        className="flex h-full w-full items-center justify-center text-white"
        aria-label="Contact us"
      >
        <Mail size={22} strokeWidth={2.2} />
      </Link>
    </motion.div>
  );
}
