"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const values = [
  {
    title: "Excellence",
    description:
      "We strive for excellence in every project, setting high standards to consistently deliver results that surpass expectations and drive operational success.",
  },
  {
    title: "Innovation",
    description:
      "Unleashing creativity and embracing the latest technologies, our commitment to innovation ensures cutting-edge solutions for your evolving needs.",
  },
  {
    title: "Collaboration",
    description:
      "Fostering close collaboration with our technical partners and specialized solutions providers, we offer a holistic approach to plant reliability and engineering consulting.",
  },
  {
    title: "Expertise",
    description:
      "Backed by a team of seasoned professionals, our commitment to expertise brings a wealth of experience and technical prowess to every project.",
  },
];

const stats = [
  { value: "250+", label: "Successful Projects" },
  { value: "15+", label: "Years Experience" },
  { value: "50+", label: "Expert Engineers" },
  { value: "98%", label: "Client Retention" },
];

const differentiators = [
  {
    title: "Field-Proven Experience",
    description:
      "Our team brings hands-on experience from hundreds of projects across gas plants, refineries, compressor stations, and industrial facilities throughout North America.",
  },
  {
    title: "Practical Solutions",
    description:
      "We focus on implementable solutions that work in the real world, balancing technical excellence with practical constraints and operational realities.",
  },
  {
    title: "Measurable Results",
    description:
      "Our engagements are structured to deliver quantifiable outcomes, with typical clients seeing 40-60% reductions in repeat failures and significant cost savings.",
  },
  {
    title: "Long-Term Partnership",
    description:
      "We build lasting relationships with our clients, providing ongoing support and continuous improvement to ensure sustained operational excellence.",
  },
];

const industries = [
  "Oil & Gas Production",
  "Gas Processing",
  "Petrochemicals",
  "Power Generation",
  "Pipeline Operations",
  "Mining",
  "Pulp & Paper",
  "Manufacturing",
];

export default function AboutContent() {
  return (
    <div className="min-h-screen bg-[#0b1120]">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80"
            alt="Engineering team"
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
              About Us
            </span>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Engineering Reliability Across North America
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              For over 15 years, Integral Solutions Inc. has been helping
              industrial facilities optimize operations, ensure equipment
              integrity, and achieve operational excellence through innovative
              engineering solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-white/5">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div
                  className="text-4xl lg:text-5xl font-bold text-white mb-2"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2
                className="text-3xl lg:text-4xl font-bold text-white mb-6"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Our Story
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  Founded in Calgary, Alberta, Integral Solutions Inc. emerged
                  from a recognition that industrial facilities needed more than
                  theoretical solutions&mdash;they needed practical, field-proven
                  strategies that deliver measurable results.
                </p>
                <p>
                  Over the years, we&apos;ve grown from a small consulting team
                  to a comprehensive engineering services provider, serving
                  clients across Canada and the United States. Our team of 50+
                  engineers and specialists brings diverse expertise in
                  reliability engineering, integrity management, and asset
                  optimization.
                </p>
                <p>
                  Today, we&apos;re proud to have completed over 250 successful
                  projects, helping our clients achieve an average of 40-60%
                  reduction in repeat equipment failures and millions of dollars
                  in operational cost savings.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                  alt="Team collaboration"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#080e1a]">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-sm font-semibold tracking-[0.2em] text-blue-400 uppercase mb-4">
              What Drives Us
            </span>
            <h2
              className="text-3xl lg:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Our Values
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl border border-white/10 bg-white/[0.02]"
              >
                <h3
                  className="text-xl font-bold text-white mb-3"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-sm font-semibold tracking-[0.2em] text-blue-400 uppercase mb-4">
              Why Choose Us
            </span>
            <h2
              className="text-3xl lg:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              What Sets Us Apart
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {differentiators.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="shrink-0 mt-1">
                  <span className="block w-2 h-2 rounded-full bg-blue-500" />
                </div>
                <div>
                  <h3
                    className="text-lg font-bold text-white mb-2"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-[#080e1a]">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-sm font-semibold tracking-[0.2em] text-blue-400 uppercase mb-4">
              Who We Serve
            </span>
            <h2
              className="text-3xl lg:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Industries We Support
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] text-center hover:border-blue-500/30 transition-colors"
              >
                <p className="text-white font-medium">{industry}</p>
              </motion.div>
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
              Let&apos;s Work Together
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Ready to transform your operations? Contact us to discuss how we
              can help you achieve operational excellence.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-blue-500 shadow-lg shadow-blue-900/40"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
