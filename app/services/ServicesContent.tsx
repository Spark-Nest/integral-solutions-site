"use client";

import { motion } from "framer-motion";

type ServiceCardProps = {
  title: string;
  description: string;
  bulletPoints: string[];
};

function ServiceCard({ title, description, bulletPoints }: ServiceCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-gray-300">{description}</p>
      <ul className="mt-4 space-y-2 text-sm text-gray-200">
        {bulletPoints.map((point) => (
          <li
            key={point}
            className="flex items-start gap-2 rounded-lg border border-cyan-500/10 bg-cyan-500/5 px-3 py-2"
          >
            <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" aria-hidden />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

type SectionProps = {
  title: string;
  children: React.ReactNode;
  delay?: number;
};

function Section({ title, children, delay = 0 }: SectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="mx-auto max-w-7xl px-6 py-12"
    >
      <div className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-lg backdrop-blur">
        <h2 className="text-2xl font-bold text-cyan-400">{title}</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mt-10">
          {children}
        </div>
      </div>
    </motion.section>
  );
}

export default function ServicesContent() {
  return (
    <div className="flex flex-col gap-12 bg-gradient-to-b from-[#050816] via-[#060b1d] to-[#050816] pb-20 pt-16">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-10 shadow-2xl backdrop-blur"
        >
          <h1 className="text-4xl font-bold text-white">Our Services</h1>
          <p className="mt-4 max-w-3xl text-lg text-gray-300">
            Comprehensive engineering and asset management services designed to enhance
            reliability, integrity, and operational performance.
          </p>
        </motion.div>
      </div>

      <Section title="Maintenance Management & Plant Reliability">
        <ServiceCard
          title="Maintenance Management & Plant Reliability"
          description="Ensuring asset longevity, predictable performance, and optimized maintenance investments through structured reliability programs."
          bulletPoints={[
            "Preventive and predictive maintenance program development",
            "Reliability-Centered Maintenance (RCM) facilitation",
            "Asset criticality assessments & optimized PM strategies",
            "KPI dashboards for performance tracking",
            "CMMS optimization & hierarchy design",
            "Root cause analysis (RCA) support",
          ]}
        />
        <ServiceCard
          title="Plant Reliability Programs"
          description="Improving equipment uptime and reducing operational risk through continuous reliability improvement."
          bulletPoints={[
            "Machinery vibration diagnostics & condition monitoring",
            "Failure reporting, analysis & corrective action (RCFA)",
            "Operator-Driven Reliability (ODR) deployment",
            "Reliability audits & benchmarking",
            "Equipment health assessments",
          ]}
        />
      </Section>

      <Section title="Fixed Equipment Integrity Management" delay={0.05}>
        <ServiceCard
          title="Fixed Equipment Integrity Management"
          description="Strengthening the safety and compliance of static assets using risk-based approaches aligned with regulatory and industry standards."
          bulletPoints={[
            "Integrity programs for pressure equipment, piping, and tanks",
            "Risk-Based Inspection (RBI) program development",
            "Inspection planning & condition assessment reviews",
            "Fitness-for-service evaluations",
            "Compliance with ABSA, API, ASME, NBIC requirements",
          ]}
        />
        <ServiceCard
          title="Engineering Consulting Services"
          description="Technical depth to support capital projects, operational planning, and engineering decision-making."
          bulletPoints={[
            "Engineering studies & system evaluations",
            "Support for equipment upgrades & modifications",
            "Design input for reliability & integrity requirements",
            "Asset management strategy development",
            "Technical documentation & standards development",
          ]}
        />
      </Section>
    </div>
  );
}
