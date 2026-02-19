"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

const stats = [
  { value: "250+", label: "Successful Projects" },
  { value: "15+", label: "Years Experience" },
  { value: "50+", label: "Expert Engineers" },
  { value: "98%", label: "Client Retention" },
];

function AnimatedCounter({ value, delay }: { value: string; delay: number }) {
  const numericPart = parseInt(value.replace(/\D/g, "")) || 0;
  const suffix = value.replace(/[0-9]/g, "");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => `${Math.round(v)}${suffix}`);

  useEffect(() => {
    const controls = animate(count, numericPart, {
      duration: 2,
      delay,
      ease: "easeOut",
    });
    return controls.stop;
  }, [count, numericPart, delay]);

  return <motion.span>{rounded}</motion.span>;
}

export default function VideoHero() {
  return (
    <section className="relative min-h-[100vh] bg-[#050d1a] overflow-hidden flex items-center">
      {/* ── Background Image ── */}
      <div className="absolute inset-0">
        <Image
          src="/images/projects/gas-plant.jpg"
          alt="Gas processing facility"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Cinematic gradient stack */}
        {/* Primary: strong left fade to keep text readable */}
        <div className="absolute inset-0 bg-linear-to-r from-[#050d1a] via-[#050d1a]/85 to-[#050d1a]/25" />
        {/* Top & bottom vignette */}
        <div className="absolute inset-0 bg-linear-to-b from-[#050d1a]/60 via-transparent to-[#050d1a]" />
        {/* Subtle blue tint to unify image with brand */}
        <div className="absolute inset-0 bg-linear-to-br from-blue-950/20 via-transparent to-blue-900/10" />
        {/* Film-grain noise texture */}
        <div className="hero-grain absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none" />
      </div>

      {/* ── Ambient glow orbs ── */}
      <div className="absolute top-1/3 left-0 w-[700px] h-[700px] bg-blue-700/[0.07] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-blue-500/[0.06] rounded-full blur-[100px] pointer-events-none" />

      {/* ── Decorative lines ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top hairline */}
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-400/20 to-transparent" />
        {/* Vertical left accent */}
        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ delay: 1.1, duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="origin-top absolute left-[clamp(1.5rem,calc(50vw-42rem),3rem)] top-28 bottom-24 w-px bg-linear-to-b from-blue-400/30 via-blue-400/10 to-transparent"
        />
        {/* Horizontal rule above stats */}
        <div className="absolute bottom-[88px] left-0 right-0 h-px bg-linear-to-r from-transparent via-white/8 to-transparent" />
      </div>

      {/* ── Main Content ── */}
      <div className="relative z-10 mx-auto max-w-7xl px-8 lg:px-14 pt-24 pb-36 w-full">
        <div className="max-w-[900px]">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2.5 rounded-full border border-blue-400/20 bg-blue-500/[0.08] backdrop-blur-sm px-4 py-1.5 mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400" />
            </span>
            <span className="text-[11px] font-semibold tracking-[0.15em] text-blue-300 uppercase">
              Asset Integrity &amp; Reliability
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 44 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
            className="font-heading text-[clamp(2rem,6vw,3.5rem)] font-bold text-white leading-[1.05] tracking-tighter mb-5"
          >
            Maintenance, Reliability
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-300 via-blue-400 to-blue-500 relative inline-block">
              &amp; Asset Integrity Engineering,
              {/* animated underline */}
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.95, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="origin-left absolute -bottom-0.5 left-0 right-0 h-0.5 bg-linear-to-r from-blue-400/70 to-transparent"
              />
            </span>
            <br />
            <span className="text-white/85">Consulting</span>
            <br />
            <span className="font-light text-white/55 italic tracking-normal">{"& Operational Excellence"}</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.7 }}
            className="text-base md:text-[1.0625rem] text-gray-400/90 max-w-[520px] leading-[1.75] mb-7"
          >
            We help gas plants, compressor stations, and industrial facilities
            cut repeat failures by{" "}
            <span className="text-white font-semibold">40–60%</span> through
            data-driven maintenance strategies and practical engineering judgment.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            {/* Primary CTA with shimmer */}
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-500 shadow-[0_0_40px_-8px_rgba(59,130,246,0.5)] hover:shadow-[0_0_60px_-8px_rgba(59,130,246,0.7)]"
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-linear-to-r from-transparent via-white/15 to-transparent" />
              <span className="relative">Start Your Project</span>
              <svg
                className="relative ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            {/* Secondary CTA */}
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-lg border border-white/12 bg-white/4 backdrop-blur-sm px-8 py-3.5 text-sm font-semibold text-white/80 transition-all duration-300 hover:border-white/25 hover:bg-white/8 hover:text-white"
            >
              View Case Studies
            </Link>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75 }}
            className="flex items-center gap-3"
          >
            {/* Avatar stack */}
            <div className="flex -space-x-2.5">
              {["from-slate-500 to-slate-700", "from-blue-600 to-blue-900", "from-slate-400 to-slate-600", "from-blue-500 to-blue-800"].map(
                (grad, i) => (
                  <div
                    key={i}
                    className={`h-7 w-7 rounded-full border-2 border-[#050d1a] bg-linear-to-br ${grad} ring-0`}
                  />
                )
              )}
            </div>
            <p className="text-xs text-gray-500">
              Trusted by{" "}
              <span className="text-gray-300 font-medium">250+</span> industrial
              facilities across North America
            </p>
          </motion.div>
        </div>
      </div>

      {/* ── Scroll indicator (desktop) ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-[104px] right-10 z-10 hidden lg:flex flex-col items-center gap-3"
      >
        <span className="[writing-mode:vertical-rl] text-[9px] font-semibold tracking-[0.25em] text-gray-600 uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ scaleY: [0.4, 1, 0.4], opacity: [0.3, 0.7, 0.3] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          className="origin-top w-px h-14 bg-linear-to-b from-blue-400/50 to-transparent"
        />
      </motion.div>

      {/* ── Stats bar ── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-0 left-0 right-0 z-10"
      >
        <div className="relative border-t border-white/6 bg-linear-to-r from-[#050d1a]/96 via-[#08152a]/92 to-[#050d1a]/85 backdrop-blur-2xl">
          {/* Blue accent on top edge */}
          <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-500/35 to-transparent" />
          <div className="mx-auto max-w-7xl px-8 lg:px-14 py-7">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.25 + i * 0.08 }}
                  className="text-center"
                >
                  <div className="font-heading text-2xl md:text-[1.875rem] font-bold text-white mb-1 tabular-nums">
                    <AnimatedCounter value={stat.value} delay={1.3 + i * 0.08} />
                  </div>
                  <div className="text-[11px] font-medium text-gray-500 uppercase tracking-widest">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
