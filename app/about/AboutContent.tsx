"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

type SectionProps = {
  title?: string;
  children: ReactNode;
  delay?: number;
};

function Section({ title, children, delay = 0 }: SectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="mx-auto max-w-7xl px-6 py-16"
    >
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
        {title ? (
          <h2 className="text-3xl font-bold text-cyan-400">{title}</h2>
        ) : null}
        <div className={title ? "mt-6" : ""}>{children}</div>
      </div>
    </motion.section>
  );
}

const commitments = [
  {
    title: "Integrity",
    description: "Engineering recommendations rooted in sound principles",
  },
  {
    title: "Reliability",
    description: "Solutions that improve availability and reduce downtime",
  },
  {
    title: "Compliance",
    description: "Alignment with regulatory and jurisdictional requirements",
  },
  {
    title: "Innovation",
    description: "Leveraging modern tools, analytics, and methodologies",
  },
  {
    title: "Sustainability",
    description: "Supporting safe, efficient, and long-term operations",
  },
];

export default function AboutContent() {
  return (
    <div className="flex flex-col bg-gradient-to-b from-[#050816] via-[#060b1d] to-[#050816] pb-20 pt-12">
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-7xl px-6 py-16"
      >
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-[#0a1024] via-[#0c1630] to-[#0a1024] p-12 text-center shadow-2xl backdrop-blur">
          <div className="absolute inset-0 opacity-30">
            <div className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,_rgba(56,189,248,0.15),_transparent_35%),_radial-gradient(circle_at_80%_0%,_rgba(255,255,255,0.08),_transparent_30%)]" />
          </div>
          <div className="relative space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
              Internal Page Hero
            </p>
            <h1 className="text-4xl font-bold text-white md:text-5xl">About Us</h1>
            <p className="text-lg text-gray-300">
              Engineering expertise. Operational excellence.
            </p>
          </div>
        </div>
      </motion.section>

      <Section title="About Integral Solutions Inc.">
        <div className="grid gap-6 text-gray-300">
          <p>
            Integral Solutions Inc. is an engineering and asset management consulting
            firm supporting industrial facilities across North America. We help
            organizations improve reliability, strengthen integrity programs, and
            optimize the performance of critical assets through practical, data-driven
            engineering solutions.
          </p>
          <p>
            Our team brings extensive experience in maintenance management, plant
            reliability, and fixed equipment integrity. We combine technical depth with
            real-world operational understanding—helping clients reduce risk, enhance
            compliance, and achieve sustained operational excellence.
          </p>
        </div>
      </Section>

      <Section title="Our Approach" delay={0.05}>
        <div className="space-y-4 text-gray-300">
          <p>
            We believe effective engineering solutions must deliver both technical
            accuracy and operational value. Our work focuses on:
          </p>
          <ul className="grid gap-3 md:grid-cols-2">
            {[
              "Aligning engineering recommendations with business objectives",
              "Using structured methodologies and industry best practices",
              "Applying a practical, field-informed perspective",
              "Supporting safe, sustainable, and reliable operations",
            ].map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 px-4 py-3 text-sm"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section title="Our Commitment" delay={0.1}>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {commitments.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 + index * 0.05 }}
              className="relative overflow-hidden rounded-2xl border border-cyan-500/25 bg-white/5 p-6 shadow-xl backdrop-blur"
            >
              <div className="absolute inset-0 rounded-2xl border border-cyan-300/10 shadow-[0_0_35px_-10px_rgba(56,189,248,0.6)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(56,189,248,0.15),_transparent_40%)] opacity-70" />
              <div className="relative space-y-3">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-gray-200">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}
