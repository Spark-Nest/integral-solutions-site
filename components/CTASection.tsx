"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function CTASection() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#080e1a] overflow-hidden">
      <div className="relative mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden"
        >
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"
              alt="Office"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b1120]/95 via-[#0b1120]/85 to-blue-900/80" />
          </div>

          <div className="relative p-10 lg:p-16 text-center">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Ready to Transform Your
              <span className="block text-blue-400">
                Operational Performance?
              </span>
            </h2>

            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
              Join 250+ industrial facilities that have reduced failures by
              40-60% with our engineering expertise in reliability, integrity,
              and asset management.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center w-full sm:w-auto rounded-lg bg-blue-600 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-blue-500 shadow-lg shadow-blue-900/40"
              >
                Book a Discovery Call
              </Link>
              <a
                href="tel:+14034023670"
                className="inline-flex items-center justify-center w-full sm:w-auto rounded-lg border border-white/20 px-8 py-4 text-base font-semibold text-white transition-all hover:border-white/40 hover:bg-white/5"
              >
                +1 (403) 402-3670
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400">
              <span>Free Initial Consultation</span>
              <span className="hidden sm:inline text-gray-600">|</span>
              <span>Same-Week Response</span>
              <span className="hidden sm:inline text-gray-600">|</span>
              <span>No Obligation Quote</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
