"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-[#050816] via-[#060b1d] to-[#050816] px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 text-center shadow-2xl backdrop-blur"
      >
        <div className="absolute inset-0 opacity-25">
          <div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,_rgba(56,189,248,0.08)_1px,_transparent_0)] bg-[length:22px_22px]" />
        </div>
        <div className="relative space-y-4">
          <h1 className="text-4xl font-bold text-white md:text-5xl">Page Not Found</h1>
          <p className="text-lg text-gray-300">
            The page you’re looking for doesn’t exist or has moved.
          </p>
          <div className="pt-2">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-cyan-300/60 bg-white/10 px-5 py-2.5 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200 hover:text-white hover:shadow-cyan-400/30"
            >
              Go Home
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

