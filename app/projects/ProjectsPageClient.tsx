"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type SectionProps = {
  title?: string;
  children: ReactNode;
  delay?: number;
};

function Section({ title, children, delay = 0 }: SectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="mx-auto max-w-7xl px-6 py-14"
    >
      <div className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
        {title ? <h2 className="text-3xl font-bold text-cyan-400">{title}</h2> : null}
        <div className={title ? "mt-8" : ""}>{children}</div>
      </div>
    </motion.section>
  );
}

type CaseStudy = {
  title: string;
  description: string;
  bullets: string[];
};

const caseStudies: CaseStudy[] = [
  {
    title: "Fixed Equipment Integrity Program Optimization",
    description:
      "We supported a major oil & gas operator in optimizing their pressure equipment and piping integrity program. Our work included risk-based inspection alignment, data cleanup, and inspection planning improvements—resulting in enhanced compliance and reduced inspection backlog.",
    bullets: [
      "RBI model alignment with API 580/581",
      "Data quality improvement for 4,000+ assets",
      "22% reduction in overdue inspections",
      "Streamlined integrity workflows",
    ],
  },
  {
    title: "Reliability Program for Rotating Equipment Fleet",
    description:
      "A petrochemical facility engaged us to enhance rotating equipment reliability through vibration analysis, condition monitoring, and structured RCFA. The result was improved asset availability and reduced unplanned downtime.",
    bullets: [
      "Implemented vibration program for 90+ assets",
      "Conducted RCFA on recurring failures",
      "Developed updated PM strategies",
      "Reduced machinery-related downtime events",
    ],
  },
  {
    title: "Maintenance Strategy Review & Optimization",
    description:
      "We completed a comprehensive review of a client’s maintenance strategy, delivering an optimized PM library, logic-based intervals, and improved CMMS hierarchy—leading to more targeted maintenance and lower lifecycle costs.",
    bullets: [
      "RCM facilitation",
      "Criticality-based PM optimization",
      "KPI dashboard development",
      "15% reduction in reactive maintenance",
    ],
  },
  {
    title: "Pipeline Integrity Support for Midstream Operator",
    description:
      "We provided integrity engineering support for a midstream pipeline and terminal operator, including fitness-for-service assessments, data analysis, and maintenance planning.",
    bullets: [
      "Fitness-for-service assessments (API 579)",
      "Integration of inspection data across systems",
      "Enhanced risk ranking methodologies",
      "Improved compliance documentation",
    ],
  },
];

export default function ProjectsPageClient() {
  return (
    <div className="flex flex-col bg-gradient-to-b from-[#050816] via-[#060b1d] to-[#050816] pb-20 pt-12">
      <motion.section
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-7xl px-6 py-16"
      >
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-12 text-center shadow-2xl backdrop-blur">
          <div className="absolute inset-0 opacity-25">
            <div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,_rgba(56,189,248,0.08)_1px,_transparent_0)] bg-[length:22px_22px]" />
          </div>
          <div className="relative space-y-4">
            <h1 className="text-4xl font-bold text-white md:text-5xl">
              Projects &amp; Case Studies
            </h1>
            <p className="text-lg text-gray-300">
              Engineering solutions delivering measurable reliability, integrity, and performance improvements.
            </p>
          </div>
        </div>
      </motion.section>

      <Section title="Case Studies">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
          {caseStudies.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-cyan-500/30"
            >
              <div className="absolute inset-0 rounded-2xl border border-cyan-300/15 opacity-70" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(56,189,248,0.12),_transparent_45%)] opacity-70" />
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-400 via-cyan-500 to-cyan-300" />
              <div className="relative space-y-4">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
                <div>
                  <p className="text-sm font-semibold text-cyan-200">Highlights:</p>
                  <ul className="mt-2 space-y-2 text-sm text-gray-200">
                    {item.bullets.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 rounded-lg border border-cyan-500/15 bg-cyan-500/5 px-3 py-2"
                      >
                        <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" aria-hidden />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full border border-cyan-300/60 bg-white/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200 hover:text-white hover:shadow-cyan-400/30"
                  >
                    Request a Consultation
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}

