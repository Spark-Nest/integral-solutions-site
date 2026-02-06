import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostPageClient from "./BlogPostPageClient";
import { articles } from "../data/articles";

type BlogPostPageProps = {
  params: { slug: string };
};

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const article = articles.find((a) => a.id === parseInt(params.slug));

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${article.title} | Integral Solutions Inc.`,
    description: article.excerpt,
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const article = articles.find((a) => a.id === parseInt(params.slug));

  if (!article) {
    return notFound();
  }

  return <BlogPostPageClient article={article} />;
}
