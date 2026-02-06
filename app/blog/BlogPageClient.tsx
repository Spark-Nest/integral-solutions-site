"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const articles = [
  {
    id: 1,
    title: "5 Strategies to Reduce Repeat Equipment Failures",
    excerpt:
      "Learn proven methodologies to identify bad actors and implement targeted solutions that cut repeat failures by up to 60%. We explore root cause analysis, preventive maintenance optimization, and data-driven decision making.",
    category: "Reliability",
    author: "Engineering Team",
    readTime: "8 min read",
    date: "January 15, 2024",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    tags: ["RCFA", "Bad Actors", "Preventive Maintenance", "KPIs"],
    featured: true,
  },
  {
    id: 2,
    title: "RBI 101: A Practical Guide to Risk-Based Inspection",
    excerpt:
      "Understanding RBI implementation for fixed equipment integrity management in oil and gas facilities. Covers API 580/581 standards and practical implementation steps.",
    category: "Integrity",
    author: "Integrity Specialists",
    readTime: "12 min read",
    date: "January 10, 2024",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    tags: ["RBI", "API 580", "Inspection Planning", "Compliance"],
    featured: true,
  },
  {
    id: 3,
    title: "The Business Case for RCM in Industrial Facilities",
    excerpt:
      "How Reliability-Centered Maintenance delivers ROI through optimized maintenance strategies and reduced downtime. Real-world case studies and implementation guidelines.",
    category: "Maintenance",
    author: "Consulting Team",
    readTime: "10 min read",
    date: "January 5, 2024",
    image:
      "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80",
    tags: ["RCM", "ROI", "Maintenance Strategy", "Optimization"],
    featured: true,
  },
  {
    id: 4,
    title: "Vibration Analysis: Early Warning System for Rotating Equipment",
    excerpt:
      "Leveraging vibration monitoring to predict failures before they happen. Best practices for setting up monitoring programs and interpreting data.",
    category: "Reliability",
    author: "Reliability Engineers",
    readTime: "7 min read",
    date: "December 28, 2023",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
    tags: [
      "Vibration Analysis",
      "Predictive Maintenance",
      "Condition Monitoring",
    ],
    featured: false,
  },
  {
    id: 5,
    title: "Fitness for Service Assessments: When to Repair vs. Replace",
    excerpt:
      "Making informed decisions about equipment life extension using API 579 standards. Understanding damage mechanisms and remaining life calculations.",
    category: "Integrity",
    author: "Integrity Team",
    readTime: "9 min read",
    date: "December 20, 2023",
    image:
      "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=800&q=80",
    tags: ["FFS", "API 579", "Life Extension", "Damage Mechanisms"],
    featured: false,
  },
  {
    id: 6,
    title: "Building a Culture of Operator-Driven Reliability",
    excerpt:
      "How to engage operations teams in reliability initiatives. Practical strategies for training, communication, and sustaining ODR programs.",
    category: "Reliability",
    author: "Plant Reliability Team",
    readTime: "6 min read",
    date: "December 15, 2023",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    tags: ["ODR", "Operator Training", "Work Culture", "Reliability"],
    featured: false,
  },
  {
    id: 7,
    title: "Corrosion Management in Sour Gas Environments",
    excerpt:
      "Best practices for managing corrosion in H2S-containing environments. Materials selection, monitoring techniques, and mitigation strategies.",
    category: "Integrity",
    author: "Materials Specialists",
    readTime: "11 min read",
    date: "December 10, 2023",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    tags: ["Corrosion", "Sour Gas", "Materials", "NACE"],
    featured: false,
  },
  {
    id: 8,
    title: "Turnaround Planning: Critical Success Factors",
    excerpt:
      "Key elements for executing successful plant shutdowns and turnarounds. Scope management, resource planning, and risk mitigation strategies.",
    category: "Engineering",
    author: "Project Management Team",
    readTime: "8 min read",
    date: "December 5, 2023",
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80",
    tags: ["Turnaround", "Project Management", "Planning", "Shutdown"],
    featured: false,
  },
];

const categories = [
  "All",
  "Reliability",
  "Integrity",
  "Maintenance",
  "Engineering",
];

export default function BlogPageClient() {
  const featuredArticles = articles.filter((a) => a.featured);
  const regularArticles = articles.filter((a) => !a.featured);

  return (
    <div className="min-h-screen bg-[#0b1120]">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-sm font-semibold tracking-[0.2em] text-blue-400 uppercase mb-4">
              Knowledge Hub
            </span>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Blog & Insights
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Expert perspectives on plant reliability, asset integrity, and
              operational excellence. Practical insights from the field to help
              you optimize your industrial operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2
            className="text-2xl font-bold text-white mb-8"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Featured Articles
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
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
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120]/70 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="inline-block px-3 py-1 rounded-lg bg-blue-600 text-white text-xs font-semibold">
                          Featured
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                        <span className="text-blue-400 font-medium">
                          {article.category}
                        </span>
                        <span>&middot;</span>
                        <span>{article.readTime}</span>
                      </div>

                      <h3
                        className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        {article.title}
                      </h3>

                      <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        {article.excerpt}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {article.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs text-gray-500"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-white/5">
                        <span className="text-sm text-gray-400">
                          {article.author}
                        </span>
                        <span className="text-sm text-blue-400 font-medium">
                          Read &rarr;
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

      {/* All Articles */}
      <section className="py-16 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <h2
              className="text-2xl font-bold text-white"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              All Articles
            </h2>

            {/* Category filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                    category === "All"
                      ? "bg-blue-600 text-white font-medium"
                      : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {regularArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href="/blog" className="group block">
                  <div className="flex gap-6 p-6 rounded-2xl border border-white/10 bg-white/[0.02] transition-all duration-300 hover:border-blue-500/30 hover:bg-white/[0.04]">
                    {/* Thumbnail */}
                    <div className="hidden sm:block shrink-0 w-28 h-28 rounded-xl overflow-hidden relative">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                        <span className="text-blue-400">
                          {article.category}
                        </span>
                        <span>&middot;</span>
                        <span>{article.readTime}</span>
                      </div>

                      <h3
                        className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors line-clamp-2"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        {article.title}
                      </h3>

                      <p className="text-gray-400 text-sm line-clamp-2 mb-3">
                        {article.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">
                          {article.date}
                        </span>
                        <span className="text-sm text-blue-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                          Read &rarr;
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

      {/* Newsletter */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-900/20 to-blue-800/10 p-8 lg:p-12 text-center"
          >
            <h2
              className="text-3xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Stay Updated
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Subscribe to our newsletter for the latest insights on
              reliability, integrity, and operational excellence delivered to
              your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50"
              />
              <button
                type="submit"
                className="px-8 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
