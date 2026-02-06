"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Maintenance Management",
    description:
      "Optimize your maintenance strategies with data-driven approaches that reduce costs and improve equipment reliability.",
    features: [
      "Preventive Maintenance Programs",
      "Work Management Systems",
      "Maintenance Optimization",
    ],
    href: "/services",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Plant Reliability",
    description:
      "Implement comprehensive reliability programs that minimize downtime and maximize operational efficiency.",
    features: [
      "RCM Analysis",
      "Vibration Analysis",
      "Operator Driven Reliability",
    ],
    href: "/services",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Fixed Equipment Integrity",
    description:
      "Ensure the safety and longevity of your critical assets with our integrity management solutions.",
    features: [
      "RBI Implementation",
      "Inspection Planning",
      "Fitness for Service",
    ],
    href: "/services",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Engineering Consulting",
    description:
      "Expert engineering support for design, analysis, and optimization of industrial facilities.",
    features: [
      "Process Engineering",
      "Mechanical Design",
      "Environmental Solutions",
    ],
    href: "/services",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#0b1120] overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="inline-block text-sm font-semibold tracking-[0.2em] text-blue-400 uppercase mb-4">
            What We Do
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Comprehensive Services
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From maintenance strategy to equipment integrity, we provide
            end-to-end solutions that keep your operations running at peak
            performance.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={service.href} className="group block h-full">
                <div className="relative h-full rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden transition-all duration-300 hover:border-blue-500/30 hover:bg-white/[0.04]">
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-[#0b1120]/40 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3
                      className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      {service.title}
                    </h3>

                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-3 text-sm text-gray-300"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Learn more */}
                    <span className="text-blue-400 font-medium text-sm">
                      Learn More &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
