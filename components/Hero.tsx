"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUp, TrendingUp } from "lucide-react";

const painPoints = [
  "Critical equipment keeps failing",
  "Integrity risk feels too high",
  "Maintenance cost is up, reliability is not",
];

const industries = [
  "Gas Plants & Compression",
  "Oil & Gas Facilities",
  "Petrochemical & Process Plants",
  "Power & Industrial Sites",
];

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-120px)] bg-[#0a1628] overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0d1d35] to-[#0a1628]" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cyan-500/5 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Tagline */}
            <p className="text-sm font-semibold tracking-[0.2em] text-cyan-400 uppercase">
              Engineering • Reliability • Asset Integrity
            </p>

            {/* Main headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              When critical assets fail, we help you make sure it doesn&apos;t happen twice.
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
              Integral Solutions Inc. works with gas plants, compressor stations, 
              refineries and industrial facilities to cut repeat failures, stabilize 
              production, and bring asset integrity under control—using structured 
              RCFA, data-driven maintenance, and practical engineering judgement.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-8 py-4 text-base font-semibold text-slate-900 transition hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                Book a Discovery Call
              </Link>
              <Link
                href="/results"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-base font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
              >
                See Typical Results
              </Link>
            </div>

            {/* Pain points */}
            <div className="pt-4">
              <p className="text-xs font-semibold tracking-[0.15em] text-gray-500 uppercase mb-4">
                We&apos;re called when:
              </p>
              <div className="flex flex-wrap gap-3">
                {painPoints.map((point) => (
                  <span
                    key={point}
                    className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300"
                  >
                    {point}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right column - Impact card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:pl-8"
          >
            <div className="relative">
              {/* Impact card */}
              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#132038] to-[#0d1a2d] p-8 shadow-2xl">
                <h3 className="text-xl font-semibold text-white mb-6">
                  Field-Proven Impact*
                </h3>

                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/20">
                      <ArrowDown className="h-4 w-4 text-cyan-400" />
                    </div>
                    <p className="text-gray-300">
                      <span className="font-bold text-cyan-400">40-60%</span>{" "}
                      repeat failures on targeted bad actors
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/20">
                      <ArrowDown className="h-4 w-4 text-cyan-400" />
                    </div>
                    <p className="text-gray-300">
                      <span className="font-bold text-cyan-400">20-30%</span>{" "}
                      unplanned downtime on critical assets
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/20">
                      <TrendingUp className="h-4 w-4 text-cyan-400" />
                    </div>
                    <p className="text-gray-300">
                      <span className="font-bold text-cyan-400">Integrity confidence</span>{" "}
                      through structured programs
                    </p>
                  </div>
                </div>

                <p className="mt-6 text-xs text-gray-500 leading-relaxed">
                  *Representative outcomes where clients fully implemented recommended 
                  reliability and integrity actions.
                </p>
              </div>

              {/* Industry tags */}
              <div className="mt-6 flex flex-wrap gap-3">
                {industries.map((industry) => (
                  <span
                    key={industry}
                    className="inline-flex items-center rounded-full border border-dashed border-white/20 px-4 py-2 text-sm text-gray-400"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
