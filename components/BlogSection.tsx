"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const articles = [
  {
    id: 1,
    title: "5 Strategies to Reduce Repeat Equipment Failures",
    excerpt:
      "Learn proven methodologies to identify bad actors and implement targeted solutions that cut repeat failures by up to 60%.",
    category: "Reliability",
    author: "Engineering Team",
    readTime: "8 min read",
    date: "Jan 15, 2024",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "RBI 101: A Practical Guide to Risk-Based Inspection",
    excerpt:
      "Understanding RBI implementation for fixed equipment integrity management in oil and gas facilities.",
    category: "Integrity",
    author: "Integrity Specialists",
    readTime: "12 min read",
    date: "Jan 10, 2024",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "The Business Case for RCM in Industrial Facilities",
    excerpt:
      "How Reliability-Centered Maintenance delivers ROI through optimized maintenance strategies and reduced downtime.",
    category: "Maintenance",
    author: "Consulting Team",
    readTime: "10 min read",
    date: "Jan 5, 2024",
    image:
      "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80",
  },
];

export default function BlogSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#0b1120] overflow-hidden">
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
              Insights
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold text-white"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Latest Articles
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
          >
            View All Articles &rarr;
          </Link>
        </motion.div>

        {/* Articles grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href="/blog" className="group block h-full">
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden transition-all duration-300 hover:border-blue-500/30 hover:-translate-y-1">
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120]/80 to-transparent" />
                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 rounded-lg bg-blue-600 text-white text-xs font-semibold">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                      <span>{article.author}</span>
                      <span>&middot;</span>
                      <span>{article.readTime}</span>
                    </div>

                    <h3
                      className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      {article.title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-4">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        {article.date}
                      </span>
                      <span className="text-sm text-blue-400 font-medium">
                        Read More &rarr;
                      </span>
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
