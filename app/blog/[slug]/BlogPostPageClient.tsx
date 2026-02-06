"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, User, Calendar, Tag } from "lucide-react";
import type { Article } from "../data/articles";

type BlogPostPageClientProps = {
  article: Article;
};

export default function BlogPostPageClient({ article }: BlogPostPageClientProps) {
  // Parse markdown-like content to HTML
  const formatContent = (content: string) => {
    return content
      .split('\n\n')
      .map((paragraph, index) => {
        // Handle headers
        if (paragraph.startsWith('## ')) {
          return (
            <h2 key={index} className="text-2xl font-bold text-white mt-10 mb-4">
              {paragraph.replace('## ', '')}
            </h2>
          );
        }
        if (paragraph.startsWith('### ')) {
          return (
            <h3 key={index} className="text-xl font-semibold text-cyan-400 mt-8 mb-3">
              {paragraph.replace('### ', '')}
            </h3>
          );
        }
        // Handle lists
        if (paragraph.startsWith('- ')) {
          const items = paragraph.split('\n').filter(item => item.startsWith('- '));
          return (
            <ul key={index} className="list-disc list-inside space-y-2 text-gray-300 my-4 ml-4">
              {items.map((item, i) => (
                <li key={i}>{item.replace('- ', '')}</li>
              ))}
            </ul>
          );
        }
        // Handle numbered lists
        if (/^\d+\./.test(paragraph)) {
          const items = paragraph.split('\n').filter(item => /^\d+\./.test(item));
          return (
            <ol key={index} className="list-decimal list-inside space-y-2 text-gray-300 my-4 ml-4">
              {items.map((item, i) => (
                <li key={i}>{item.replace(/^\d+\.\s*/, '')}</li>
              ))}
            </ol>
          );
        }
        // Handle bold text
        const formattedText = paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        // Regular paragraph
        return (
          <p 
            key={index} 
            className="text-gray-300 leading-relaxed mb-4"
            dangerouslySetInnerHTML={{ __html: formattedText }}
          />
        );
      });
  };

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent" />
        
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${article.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/80 to-transparent" />
        
        <div className="relative mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Back Link */}
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Articles
            </Link>

            {/* Category */}
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
              {article.category}
            </span>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              {article.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <div>
                  <p className="text-white font-medium">{article.author}</p>
                  <p className="text-sm">{article.authorRole}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                {article.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                {article.readTime}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-invert prose-lg max-w-none"
          >
            {/* Excerpt Box */}
            <div className="p-6 rounded-2xl border-l-4 border-cyan-500 bg-white/5 mb-10">
              <p className="text-xl text-gray-300 italic m-0">{article.excerpt}</p>
            </div>

            {/* Main Content */}
            <div className="space-y-2">
              {formatContent(article.content)}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-white/10">
              {article.tags.map((tag) => (
                <span 
                  key={tag}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/5 text-gray-400 text-sm"
                >
                  <Tag className="h-3 w-3" />
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Author Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 p-8 rounded-3xl border border-white/10 bg-white/[0.02]"
          >
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white text-2xl font-bold">
                {article.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{article.author}</h3>
                <p className="text-cyan-400 text-sm mb-3">{article.authorRole}</p>
                <p className="text-gray-400">
                  Expert in industrial reliability and asset management with extensive experience 
                  helping facilities optimize their operations and improve equipment performance.
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-400 mb-4">Want to implement these strategies in your facility?</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-cyan-500 text-slate-900 font-semibold hover:bg-cyan-400 transition-colors"
            >
              Contact Our Experts
              <ArrowLeft className="h-4 w-4 rotate-180" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
