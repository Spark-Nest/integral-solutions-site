"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Gas Plant Reliability Transformation",
    client: "Major Canadian Energy Producer",
    location: "Alberta, Canada",
    year: "2023",
    category: "Plant Reliability",
    description:
      "Comprehensive reliability program implementation across 12 critical gas processing assets, including RCM analysis, vibration monitoring systems, and operator-driven reliability initiatives.",
    image:
      "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?auto=format&fit=crop&w=1200&q=80",
    results: [
      "35% reduction in unplanned downtime",
      "$2.5M annual maintenance cost savings",
      "98% equipment availability achieved",
      "45% decrease in emergency work orders",
    ],
    tags: ["RCM", "Vibration Analysis", "ODR", "Predictive Maintenance"],
  },
  {
    id: 2,
    title: "Pipeline Compressor Station RBI Program",
    client: "Transcontinental Pipeline Operator",
    location: "Saskatchewan & Manitoba, Canada",
    year: "2023",
    category: "Integrity Management",
    description:
      "Risk-based inspection program development and implementation for 8 compressor stations encompassing 200+ pressure equipment items including vessels, piping, and tanks.",
    image:
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1200&q=80",
    results: [
      "40% reduction in inspection costs",
      "Optimized inspection intervals by risk ranking",
      "Full regulatory compliance achieved",
      "Extended run lengths between turnarounds",
    ],
    tags: ["RBI", "API 580/581", "Inspection Planning", "Compliance"],
  },
  {
    id: 3,
    title: "Refinery Maintenance Strategy Overhaul",
    client: "International Refinery Complex",
    location: "Ontario, Canada",
    year: "2022-2023",
    category: "Maintenance Management",
    description:
      "Complete redesign of maintenance strategy using RCM principles for 500+ rotating equipment assets, including criticality analysis and spare parts optimization.",
    image:
      "https://images.unsplash.com/photo-1487875961445-47a3c75fc5d0?auto=format&fit=crop&w=1200&q=80",
    results: [
      "50% reduction in repeat failures",
      "60% improvement in MTBF",
      "$1.8M inventory optimization savings",
      "30% reduction in maintenance backlog",
    ],
    tags: ["RCM", "Criticality Analysis", "Spare Parts Optimization", "CMMS"],
  },
  {
    id: 4,
    title: "SAGD Facility Asset Integrity Program",
    client: "Oil Sands Operator",
    location: "Fort McMurray, Alberta",
    year: "2022",
    category: "Integrity Management",
    description:
      "Comprehensive asset integrity management program for Steam-Assisted Gravity Drainage facility including corrosion monitoring, fitness-for-service assessments, and repair strategies.",
    image:
      "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=1200&q=80",
    results: [
      "100% regulatory inspection compliance",
      "25% extension of equipment life",
      "Zero integrity-related incidents",
      "Streamlined repair prioritization",
    ],
    tags: ["Corrosion Management", "FFS", "API 579", "Life Extension"],
  },
  {
    id: 5,
    title: "Petrochemical Plant Turnaround Planning",
    client: "Major Petrochemical Producer",
    location: "Texas, USA",
    year: "2023",
    category: "Engineering Consulting",
    description:
      "Complete turnaround planning and execution support for major petrochemical facility, including scope development, resource planning, and critical path optimization.",
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80",
    results: [
      "2 days under planned shutdown duration",
      "$500K cost savings vs. budget",
      "Zero safety incidents",
      "98% scope completion rate",
    ],
    tags: [
      "Turnaround Planning",
      "Project Management",
      "Critical Path",
      "HSE",
    ],
  },
  {
    id: 6,
    title: "Power Plant Reliability Centered Maintenance",
    client: "Independent Power Producer",
    location: "Alberta, Canada",
    year: "2023",
    category: "Plant Reliability",
    description:
      "Implementation of Reliability-Centered Maintenance program for gas-fired power generation facility including turbine maintenance optimization and control system upgrades.",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",
    results: [
      "99.5% plant availability achieved",
      "20% reduction in forced outages",
      "Optimized maintenance intervals",
      "Enhanced spare parts strategy",
    ],
    tags: ["RCM", "Power Generation", "Turbine Maintenance", "Controls"],
  },
];

const stats = [
  { value: "250+", label: "Projects Completed" },
  { value: "$50M+", label: "Client Savings" },
  { value: "40-60%", label: "Avg. Failure Reduction" },
  { value: "15+", label: "Years Experience" },
];

export default function ProjectsPageClient() {
  return (
    <div className="min-h-screen bg-[#0b1120]">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1920&q=80"
            alt="Industrial project"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1120] via-[#0b1120]/90 to-[#0b1120]/70" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-sm font-semibold tracking-[0.2em] text-blue-400 uppercase mb-4">
              Our Work
            </span>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Projects & Case Studies
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Explore how we&apos;ve helped industrial facilities across North
              America achieve measurable improvements in reliability, integrity,
              and operational performance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-white/5">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-xl bg-white/5 border border-white/10"
              >
                <div
                  className="text-3xl lg:text-4xl font-bold text-white mb-1"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative grid lg:grid-cols-2 gap-0 rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden transition-all duration-300 hover:border-blue-500/30">
                  {/* Image */}
                  <div className="relative h-72 lg:h-auto min-h-80 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120]/50 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#0b1120]/40" />

                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-4 py-1.5 rounded-lg bg-blue-600 text-white text-sm font-semibold">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:py-12 lg:pr-12">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <span>{project.location}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-600" />
                      <span>{project.year}</span>
                    </div>

                    <h2
                      className="text-2xl lg:text-3xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      {project.title}
                    </h2>

                    <p className="text-blue-400 font-medium mb-4">
                      {project.client}
                    </p>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Results */}
                    <div className="space-y-2 mb-6">
                      <p className="text-sm font-semibold text-white uppercase tracking-wider">
                        Key Results
                      </p>
                      <ul className="space-y-2">
                        {project.results.map((result) => (
                          <li
                            key={result}
                            className="flex items-start gap-3 text-gray-300"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-2" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-block px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-900/20 to-blue-800/10 p-12"
          >
            <h2
              className="text-3xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Ready to Achieve Similar Results?
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Let&apos;s discuss how we can help transform your operations and
              deliver measurable improvements.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-blue-500 shadow-lg shadow-blue-900/40"
            >
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
