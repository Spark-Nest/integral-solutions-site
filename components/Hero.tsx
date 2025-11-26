"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#050816] via-[#060b1d] to-[#050816]">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.08),transparent_45%)]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="relative isolate min-h-[85vh] overflow-hidden rounded-3xl border border-white/10 bg-white/5 px-8 py-12 shadow-2xl backdrop-blur-xl before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_1px_1px,_rgba(56,189,248,0.08)_1px,_transparent_0)] before:bg-[length:24px_24px] before:opacity-25 dark:bg-white/5">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200 backdrop-blur">
                Precision-Engineered Outcomes
              </div>
              <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
                Engineering Reliability. Operational Excellence.
              </h1>
              <p className="max-w-xl text-lg text-gray-300">
                Integral Solutions Inc. delivers asset management, plant reliability,
                fixed equipment integrity, and engineering consulting for industrial
                facilities across North America.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="#"
                  className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-300 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:shadow-cyan-500/40"
                >
                  <span className="absolute inset-[-150%] translate-x-[-30%] translate-y-[-30%] bg-white/30 blur-3xl transition duration-500 group-hover:translate-x-[10%]" />
                  <span className="relative">Explore Services</span>
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-full border border-cyan-300/50 px-6 py-3 text-sm font-semibold text-cyan-200 transition hover:border-cyan-200 hover:text-white"
                >
                  Request Consultation
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative rounded-2xl border border-cyan-500/30 bg-white/5 p-6 shadow-2xl backdrop-blur-xl dark:bg-white/10"
              >
                <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.08),transparent_50%)]" />
                <div className="absolute inset-0 rounded-2xl bg-[url('/images/blueprint-grid.png')] opacity-10" />
                <div className="relative space-y-4">
                  <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-100">
                    Reliability • Integrity • Compliance
                  </div>
                  <p className="text-lg font-semibold text-white">
                    Blueprinting resilient operations.
                  </p>
                  <p className="text-sm leading-relaxed text-cyan-50/80">
                    We engineer reliability programs, integrity assessments, and
                    asset strategies that keep industrial facilities operating
                    safely, efficiently, and in full compliance.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
