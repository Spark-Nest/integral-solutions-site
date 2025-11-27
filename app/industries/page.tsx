"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

type SectionProps = {
  title: string;
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
        <h2 className="text-3xl font-bold text-cyan-400">{title}</h2>
        <div className="mt-8">{children}</div>
      </div>
    </motion.section>
  );
}

type Industry = {
  title: string;
  description: string;
  bullets: string[];
};

const industries: Industry[] = [
  {
    title: "Oil & Gas / Energy",
    description:
      "We support upstream, midstream, and downstream operations with engineering services that enhance reliability, ensure regulatory compliance, and strengthen asset integrity programs.",
    bullets: [
      "Pressure equipment integrity management",
      "Pipeline and facility reliability programs",
      "Risk-based inspection (RBI)",
      "Maintenance strategy development",
      "Turnaround engineering support",
    ],
  },
  {
    title: "Petrochemical & Chemical Processing",
    description:
      "Our team provides technical expertise to improve the safety, performance, and lifecycle management of critical plant assets while supporting compliance and operational excellence.",
    bullets: [
      "Mechanical integrity program development",
      "Condition monitoring & equipment diagnostics",
      "Reliability and maintenance engineering",
      "Failure analysis and performance improvement initiatives",
    ],
  },
  {
    title: "Utilities & Power Generation",
    description:
      "We help utility operators maintain high asset availability and reduce system risk through structured engineering and integrity solutions.",
    bullets: [
      "Asset management framework development",
      "Mechanical and static equipment inspections",
      "Maintenance optimization",
      "Reliability improvement programs",
    ],
  },
  {
    title: "Manufacturing & Industrial Facilities",
    description:
      "We support industrial sites with practical engineering expertise that improves equipment performance and strengthens maintenance processes.",
    bullets: [
      "Preventive and predictive maintenance programs",
      "Equipment health assessments",
      "RCA / RCFA facilitation",
      "Reliability and performance dashboards",
    ],
  },
  {
    title: "Midstream Terminals & Storage Facilities",
    description:
      "Ensuring safe transportation and storage of hydrocarbons through robust integrity and reliability engineering programs.",
    bullets: [
      "Tank integrity programs",
      "Critical equipment reliability reviews",
      "Inspection planning & condition assessments",
      "Compliance support",
    ],
  },
];

export default function IndustriesPage() {
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
              Industries We Serve
            </h1>
            <p className="text-lg text-gray-300">
              Engineering solutions tailored to complex industrial environments.
            </p>
          </div>
        </div>
      </motion.section>

      <Section title="Industry Sectors">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur transition hover:shadow-cyan-500/30"
            >
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-400 via-cyan-500 to-cyan-300" />
              <div className="absolute inset-0 rounded-2xl border border-cyan-300/10 opacity-60" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(56,189,248,0.12),_transparent_40%)] opacity-60" />
              <div className="relative space-y-3">
                <h3 className="text-xl font-semibold text-white">{industry.title}</h3>
                <p className="text-gray-300">{industry.description}</p>
                <ul className="space-y-2 text-sm text-gray-200">
                  {industry.bullets.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 rounded-lg border border-cyan-500/15 bg-cyan-500/5 px-3 py-2"
                    >
                      <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}
