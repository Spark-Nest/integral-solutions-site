"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import { Target, Lightbulb, Users, Award } from "lucide-react";

const values = [
  {
    title: "Excellence",
    description:
      "We strive for excellence in every project, setting high standards to consistently deliver results that surpass expectations and drive operational success.",
    icon: Target,
    color: "from-cyan-400 to-blue-500",
    shadowColor: "shadow-cyan-500/20",
    glowColor: "bg-cyan-500/20",
  },
  {
    title: "Innovation",
    description:
      "Unleashing creativity and embracing the latest technologies, our commitment to innovation ensures cutting-edge solutions for your evolving needs.",
    icon: Lightbulb,
    color: "from-purple-400 to-pink-500",
    shadowColor: "shadow-purple-500/20",
    glowColor: "bg-purple-500/20",
  },
  {
    title: "Collaboration",
    description:
      "Fostering close collaboration with our technical partners and specialized solutions providers, we offer a holistic approach to plant reliability and engineering consulting.",
    icon: Users,
    color: "from-emerald-400 to-teal-500",
    shadowColor: "shadow-emerald-500/20",
    glowColor: "bg-emerald-500/20",
  },
  {
    title: "Expertise",
    description:
      "Backed by a team of seasoned professionals, our commitment to expertise brings a wealth of experience and technical prowess to every project.",
    icon: Award,
    color: "from-amber-400 to-orange-500",
    shadowColor: "shadow-amber-500/20",
    glowColor: "bg-amber-500/20",
  },
];

import { Briefcase, Clock, Heart } from "lucide-react";

const stats = [
  { 
    value: "250+", 
    label: "Successful Projects",
    icon: Briefcase,
    gradient: "from-cyan-400 to-blue-500",
    description: "Delivered across North America"
  },
  { 
    value: "15+", 
    label: "Years Experience",
    icon: Clock,
    gradient: "from-amber-400 to-orange-500",
    description: "Industry leadership"
  },
  { 
    value: "50+", 
    label: "Expert Engineers",
    icon: Users,
    gradient: "from-emerald-400 to-teal-500",
    description: "Specialized professionals"
  },
  { 
    value: "98%", 
    label: "Client Retention",
    icon: Heart,
    gradient: "from-rose-400 to-pink-500",
    description: "Long-term partnerships"
  },
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
      <section className="py-20 border-y border-white/5 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  y: -12,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="group relative"
              >
                {/* Animated glow background */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 scale-75 group-hover:scale-110`} />
                
                {/* Floating particles effect */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  <div className="absolute top-2 right-2 w-1 h-1 bg-white/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100" />
                  <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200" />
                </div>
                
                {/* Card */}
                <div className="relative h-full p-6 rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/10 overflow-hidden transition-all duration-500 group-hover:border-white/20 group-hover:bg-white/[0.06]">
                  {/* Shimmer effect on hover */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                  
                  {/* Top gradient line with glow */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.gradient} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 shadow-[0_0_10px_rgba(0,0,0,0.3)]`} />
                  
                  {/* Icon container with floating animation */}
                  <motion.div
                    className="relative mb-5 flex justify-center"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ 
                      duration: 3 + index * 0.4, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: index * 0.15
                    }}
                  >
                    <div className={`relative inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.gradient} shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                      <stat.icon className="w-7 h-7 text-white" strokeWidth={2} />
                    </div>
                    {/* Outer ring pulse */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.gradient} opacity-20 animate-ping`} style={{ animationDuration: '3s', animationDelay: `${index * 0.2}s` }} />
                  </motion.div>
                  
                  {/* Value with gradient and counter effect */}
                  <div className={`text-4xl lg:text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2 transition-transform duration-300 group-hover:scale-105`}>
                    {stat.value}
                  </div>
                  
                  {/* Label with subtle animation */}
                  <div className="text-white font-semibold text-lg mb-1 transition-colors duration-300 group-hover:text-white">
                    {stat.label}
                  </div>
                  
                  {/* Description */}
                  <div className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                    {stat.description}
                  </div>
                  
                  {/* Bottom corner accent */}
                  <div className={`absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-tl ${stat.gradient} opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500`} />
                </div>
              </motion.div>
            ))}
          </motion.div>
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
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                whileHover={{ 
                  y: -12,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="group relative"
              >
                {/* Floating shadow layer */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
                
                {/* Glow orb behind icon */}
                <div className={`absolute -top-4 -right-4 w-24 h-24 rounded-full ${value.glowColor} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Main card */}
                <div className={`relative h-full p-8 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm overflow-hidden transition-all duration-500 group-hover:border-white/20 group-hover:shadow-2xl ${value.shadowColor}`}>
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Top gradient line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${value.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
                  
                  {/* Icon container with floating animation */}
                  <motion.div
                    className="relative mb-6"
                    animate={{ y: [0, -6, 0] }}
                    transition={{ 
                      duration: 3 + index * 0.5, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: index * 0.2
                    }}
                  >
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} shadow-lg ${value.shadowColor}`}>
                      <value.icon className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>
                    
                    {/* Pulse ring */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${value.color} opacity-20 animate-ping`} style={{ animationDuration: '3s' }} />
                  </motion.div>
                  
                  {/* Content */}
                  <div className="relative">
                    <h3
                      className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r transition-all duration-300"
                      style={{ 
                        fontFamily: "var(--font-montserrat)",
                      }}
                    >
                      <span className={`bg-gradient-to-r ${value.color} bg-clip-text text-transparent`}>
                        {value.title}
                      </span>
                    </h3>
                    
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {value.description}
                    </p>
                  </div>
                  
                  {/* Bottom decoration */}
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-white/5 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
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
