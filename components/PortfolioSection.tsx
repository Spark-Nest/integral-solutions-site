"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Gas Plant Reliability Program",
    client: "Major Canadian Energy Producer",
    location: "Alberta, Canada",
    year: "2023",
    category: "Plant Reliability",
    description:
      "Implemented comprehensive reliability program reducing unplanned downtime by 35% across 12 critical assets.",
    image:
      "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?auto=format&fit=crop&w=1200&q=80",
    results: [
      { label: "Downtime Reduction", value: "35%" },
      { label: "Annual Savings", value: "$2.5M" },
    ],
  },
  {
    id: 2,
    title: "Compressor Station RBI",
    client: "Pipeline Operator",
    location: "Saskatchewan, Canada",
    year: "2023",
    category: "Integrity Management",
    description:
      "Risk-based inspection program for 8 compressor stations with 200+ pressure equipment items.",
    image:
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1200&q=80",
    results: [
      { label: "Cost Reduction", value: "40%" },
      { label: "Compliance", value: "100%" },
    ],
  },
  {
    id: 3,
    title: "Refinery Maintenance Optimization",
    client: "International Refinery",
    location: "Ontario, Canada",
    year: "2022",
    category: "Maintenance Management",
    description:
      "Redesigned maintenance strategy using RCM principles for 500+ rotating equipment assets.",
    image:
      "https://images.unsplash.com/photo-1487875961445-47a3c75fc5d0?auto=format&fit=crop&w=1200&q=80",
    results: [
      { label: "Repeat Failures", value: "-50%" },
      { label: "MTBF Improvement", value: "+60%" },
    ],
  },
];

export default function PortfolioSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#080e1a] overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <span className="inline-block text-sm font-semibold tracking-[0.2em] text-blue-400 uppercase mb-4">
              Case Studies
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold text-white"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Featured Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
          >
            View All Projects &rarr;
          </Link>
        </motion.div>

        {/* Projects grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href="/projects" className="group block">
                <div className="relative grid lg:grid-cols-2 gap-0 rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden transition-all duration-300 hover:border-blue-500/30">
                  {/* Image */}
                  <div className="relative h-72 lg:h-auto min-h-[320px] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#080e1a]/30 lg:bg-gradient-to-r lg:from-transparent lg:to-[#080e1a]/60" />

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

                    <h3
                      className="text-2xl lg:text-3xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      {project.title}
                    </h3>

                    <p className="text-blue-400 font-medium mb-4">
                      {project.client}
                    </p>
                    <p className="text-gray-300 mb-8 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Results */}
                    <div className="flex flex-wrap gap-4">
                      {project.results.map((result) => (
                        <div
                          key={result.label}
                          className="px-5 py-3 rounded-xl bg-white/5 border border-white/10"
                        >
                          <p
                            className="text-xl font-bold text-white"
                            style={{ fontFamily: "var(--font-montserrat)" }}
                          >
                            {result.value}
                          </p>
                          <p className="text-xs text-gray-400">
                            {result.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
