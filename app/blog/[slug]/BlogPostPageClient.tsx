"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { BlogPost } from "@/lib/posts";

type BlogPostPageClientProps = {
  post: BlogPost;
};

export default function BlogPostPageClient({ post }: BlogPostPageClientProps) {
  return (
    <div className="flex flex-col bg-gradient-to-b from-[#050816] via-[#060b1d] to-[#050816] pb-20 pt-12">
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-7xl px-6 py-12"
      >
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 text-center shadow-2xl backdrop-blur">
          <div className="absolute inset-0 opacity-25">
            <div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,_rgba(56,189,248,0.08)_1px,_transparent_0)] bg-[length:22px_22px]" />
          </div>
          <div className="relative space-y-3">
            <h1 className="text-4xl font-bold text-white md:text-5xl">{post.title}</h1>
            <p className="text-gray-300">Published: Feb 2025</p>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mx-auto max-w-7xl px-6 py-6"
      >
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
          <div className="prose prose-invert max-w-3xl text-gray-100">
            <p>{post.content}</p>
          </div>
          <div className="mt-6">
            <Link href="/blog" className="text-sm font-semibold text-cyan-200 transition hover:text-white">
              ← Back to Blog
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

