"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Maintenance Management",
    subtitle: "Optimize Your Maintenance Operations",
    description:
      "Transform your maintenance operations with data-driven strategies that reduce costs while improving equipment reliability and availability.",
    features: [
      "Preventive Maintenance Program Development",
      "Work Management System Implementation",
      "Maintenance Strategy Optimization",
      "Spare Parts Inventory Management",
      "Key Performance Indicator Development",
      "CMMS Selection and Implementation",
    ],
    benefits: [
      "Up to 30% maintenance cost reduction",
      "Improved equipment availability",
      "Reduced emergency work orders",
    ],
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Plant Reliability",
    subtitle: "Maximize Uptime and Performance",
    description:
      "Implement comprehensive reliability programs that minimize unplanned downtime and maximize the operational efficiency of your critical assets.",
    features: [
      "Reliability-Centered Maintenance (RCM)",
      "Machinery Vibration Analysis",
      "Root Cause Failure Analysis (RCFA)",
      "Operator Driven Reliability (ODR)",
      "Bad Actor Management Programs",
      "Predictive Maintenance Strategies",
    ],
    benefits: [
      "40-60% reduction in repeat failures",
      "20-30% less unplanned downtime",
      "Extended equipment life",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Fixed Equipment Integrity",
    subtitle: "Ensure Safe and Reliable Operations",
    description:
      "Protect your critical assets with comprehensive integrity management programs that ensure safety, compliance, and operational continuity.",
    features: [
      "Risk-Based Inspection (RBI) Implementation",
      "API 580/581 Compliant Programs",
      "Inspection Planning and Management",
      "Fitness for Service (FFS) Assessments",
      "Damage Mechanism Reviews",
      "Integrity Operating Windows",
    ],
    benefits: [
      "Full regulatory compliance",
      "Optimized inspection costs",
      "Reduced integrity risks",
    ],
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Engineering Consulting",
    subtitle: "Expert Solutions for Complex Challenges",
    description:
      "Leverage our engineering expertise to enhance your facilities, solve complex problems, and ensure reliable and safe operations.",
    features: [
      "Process Engineering and Optimization",
      "Mechanical Design and Analysis",
      "Turnaround Planning and Support",
      "Environmental Compliance Solutions",
      "Project Management Services",
      "Technical Reviews and Audits",
    ],
    benefits: [
      "Practical engineering solutions",
      "Reduced project risks",
      "On-time, on-budget delivery",
    ],
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
  },
];

const processSteps = [
  {
    step: 1,
    title: "Assessment",
    description:
      "We evaluate your current operations, identify improvement opportunities, and establish baseline performance metrics.",
  },
  {
    step: 2,
    title: "Strategy Development",
    description:
      "Our team develops customized solutions aligned with your business objectives and operational constraints.",
  },
  {
    step: 3,
    title: "Implementation",
    description:
      "We work alongside your team to implement solutions, providing training and change management support.",
  },
  {
    step: 4,
    title: "Continuous Improvement",
    description:
      "We monitor results, refine strategies, and ensure sustained performance improvements over time.",
  },
];

export default function ServicesContent() {
  return (
    <div className="min-h-screen bg-[#0b1120]">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=1920&q=80"
            alt="Industrial operations"
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
              Solutions
            </span>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Our Services
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              From maintenance optimization to equipment integrity management,
              we provide comprehensive solutions that deliver measurable results
              for industrial facilities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <p className="text-blue-400 font-medium mb-2">
                    {service.subtitle}
                  </p>
                  <h2
                    className="text-3xl lg:text-4xl font-bold text-white mb-4"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {service.title}
                  </h2>

                  <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="grid sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-3"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-2" />
                        <span className="text-gray-300 text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Benefits */}
                  <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                      Typical Results
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.benefits.map((benefit) => (
                        <span
                          key={benefit}
                          className="inline-block px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-sm text-blue-400"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="relative rounded-2xl overflow-hidden aspect-square max-w-lg mx-auto">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120]/60 to-transparent" />

                    {/* Floating stats */}
                    <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
                      <div className="flex items-center justify-between">
                        <div>
                          <p
                            className="text-2xl font-bold text-white"
                            style={{ fontFamily: "var(--font-montserrat)" }}
                          >
                            250+
                          </p>
                          <p className="text-xs text-gray-300">
                            Projects Completed
                          </p>
                        </div>
                        <div className="h-10 w-px bg-white/20" />
                        <div>
                          <p
                            className="text-2xl font-bold text-white"
                            style={{ fontFamily: "var(--font-montserrat)" }}
                          >
                            98%
                          </p>
                          <p className="text-xs text-gray-300">
                            Client Satisfaction
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-[#080e1a]">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-sm font-semibold tracking-[0.2em] text-blue-400 uppercase mb-4">
              How We Work
            </span>
            <h2
              className="text-3xl lg:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Our Process
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A proven methodology that delivers consistent, measurable results
              for every engagement.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-center">
                  <div
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-lg mb-6"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {step.step}
                  </div>
                  <h3
                    className="text-xl font-bold text-white mb-3"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full w-full h-px bg-gradient-to-r from-blue-500/30 to-transparent" />
                )}
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
              Not Sure What You Need?
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Schedule a free consultation with our team to discuss your
              challenges and explore the best solutions for your facility.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-blue-500 shadow-lg shadow-blue-900/40"
            >
              Book a Free Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
