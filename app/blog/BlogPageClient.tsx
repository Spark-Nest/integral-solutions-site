"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Clock, User, Calendar } from "lucide-react";
import { useState } from "react";
import { articles, categories, Category } from "./data/articles";

export default function BlogPageClient() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");

  const filteredArticles = selectedCategory === "All" 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  const featuredArticles = filteredArticles.filter(a => a.featured);
  const regularArticles = filteredArticles.filter(a => !a.featured);

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-sm font-semibold tracking-[0.2em] text-cyan-400 uppercase mb-4">
              Knowledge Hub
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Blog & Insights
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Expert perspectives on plant reliability, asset integrity, and operational excellence. 
              Practical insights from the field to help you optimize your industrial operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-y border-white/5">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-cyan-500 text-slate-900 shadow-lg shadow-cyan-500/25"
                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-2xl font-bold text-white mb-8">Featured Articles</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {featuredArticles.map((article, index) => (
                  <motion.article
                    key={article.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ delay: index * 0.1 }}
                    layout
                  >
                    <Link href={`/blog/${article.id}`} className="group block h-full">
                      <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden transition-all duration-300 hover:border-cyan-500/30 hover:transform hover:-translate-y-1">
                        {/* Image */}
                        <div className="relative h-48 overflow-hidden">
                          <div 
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                            style={{ backgroundImage: `url(${article.image})` }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] to-transparent" />
                          <div className="absolute top-4 left-4">
                            <span className="inline-block px-3 py-1 rounded-full bg-cyan-500 text-slate-900 text-xs font-semibold">
                              Featured
                            </span>
                          </div>
                        </div>

                        <div className="p-6">
                          <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                            <span className="text-cyan-400 font-medium">{article.category}</span>
                            <span>•</span>
                            <span>{article.readTime}</span>
                          </div>

                          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                            {article.title}
                          </h3>
                          
                          <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            {article.excerpt}
                          </p>

                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-400">{article.author}</span>
                            <ArrowUpRight className="h-4 w-4 text-cyan-400" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>
      )}

      {/* All Articles */}
      <section className="py-16 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-white mb-8">
            {selectedCategory === "All" ? "All Articles" : `${selectedCategory} Articles`}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <AnimatePresence mode="popLayout">
              {regularArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.05 }}
                  layout
                >
                  <Link href={`/blog/${article.id}`} className="group block">
                    <div className="flex gap-6 p-6 rounded-2xl border border-white/10 bg-white/[0.02] transition-all duration-300 hover:border-cyan-500/30 hover:bg-white/[0.04]">
                      {/* Thumbnail */}
                      <div 
                        className="hidden sm:block shrink-0 w-24 h-24 rounded-xl bg-cover bg-center"
                        style={{ backgroundImage: `url(${article.image})` }}
                      />

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                          <span className="text-cyan-400">{article.category}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {article.readTime}
                          </span>
                        </div>

                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
                          {article.title}
                        </h3>
                        
                        <p className="text-gray-400 text-sm line-clamp-2 mb-3">
                          {article.excerpt}
                        </p>

                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">{article.date}</span>
                          <ArrowUpRight className="h-4 w-4 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-400">No articles found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-8 lg:p-12 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Subscribe to our newsletter for the latest insights on reliability, integrity, 
              and operational excellence delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50"
              />
              <button
                type="submit"
                className="px-8 py-3 rounded-full bg-cyan-500 text-slate-900 font-semibold hover:bg-cyan-400 transition-colors"
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
