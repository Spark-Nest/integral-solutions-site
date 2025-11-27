"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";

const sections = [
  {
    title: "Services Preview",
    subtitle: "Coming Next",
  },
  {
    title: "Why Choose Us",
    subtitle: "Coming Next",
  },
  {
    title: "Industries We Serve",
    subtitle: "Coming Next",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-32">
      <Hero />

      {sections.map((section) => (
        <section key={section.title} className="px-6">
          <div className="mx-auto max-w-7xl py-20">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-10">
              <h2 className="text-3xl font-bold text-cyan-400">
                {section.title} &mdash; {section.subtitle}
              </h2>
              <p className="mt-2 text-gray-400">{section.subtitle}</p>
            </div>
          </div>
        </section>
      ))}

      <section className="px-6">
        <div className="mx-auto max-w-7xl py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-2xl border border-cyan-400/40 bg-gradient-to-r from-cyan-600 via-cyan-500 to-cyan-400 p-10 shadow-2xl"
          >
            <div className="absolute inset-0 opacity-30 mix-blend-soft-light">
              <div className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,_rgba(255,255,255,0.25),_transparent_35%),_radial-gradient(circle_at_80%_0%,_rgba(255,255,255,0.15),_transparent_30%)]" />
            </div>
            <div className="relative flex flex-col gap-4 text-white">
              <h2 className="text-3xl font-bold">
                Ready to Enhance Your Operational Performance?
              </h2>
              <p className="text-gray-100">
                Our engineering experts are here to support your asset management,
                integrity programs, and reliability initiatives.
              </p>
              <div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-cyan-700 shadow-lg transition hover:translate-y-[-1px] hover:shadow-cyan-200/60"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
