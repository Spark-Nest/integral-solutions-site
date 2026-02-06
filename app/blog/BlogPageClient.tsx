"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { posts } from "@/lib/posts";

type SectionProps = {
  title?: string;
  children: ReactNode;
  delay?: number;
};

function Section({ title, children, delay = 0 }: SectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="mx-auto max-w-7xl px-6 py-14"
    >
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
        {title ? <h2 className="text-3xl font-bold text-cyan-400">{title}</h2> : null}
        <div className={title ? "mt-6" : ""}>{children}</div>
      </div>
    </motion.section>
  );
}

export default function BlogPageClient() {
  return (
    <div className="flex flex-col bg-gradient-to-b from-[#050816] via-[#060b1d] to-[#050816] pb-20 pt-12">
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-7xl px-6 py-16"
      >
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-12 text-center shadow-2xl backdrop-blur">
          <div className="absolute inset-0 opacity-25">
            <div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,_rgba(56,189,248,0.08)_1px,_transparent_0)] bg-[length:22px_22px]" />
          </div>
          <div className="relative space-y-4">
            <h1 className="text-4xl font-bold text-white md:text-5xl">Insights &amp; Articles</h1>
            <p className="text-lg text-gray-300">
              Engineering perspectives on reliability, integrity, and asset management.
            </p>
          </div>
        </div>
      </motion.section>

      <Section title="Latest Posts">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-8 shadow-lg backdrop-blur-xl transition hover:border-cyan-400/50 hover:shadow-cyan-500/20"
            >
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold text-white">{post.title}</h3>
                <p className="text-gray-300">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-white"
                >
                  Read More
                  <span aria-hidden className="transition group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>
    </div>
  );
}

