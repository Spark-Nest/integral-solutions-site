import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostPageClient from "./BlogPostPageClient";
import { articles } from "../data/articles";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.id === parseInt(slug));

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

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const article = articles.find((a) => a.id === parseInt(slug));

  if (!article) {
    return notFound();
  }

  return <BlogPostPageClient article={article} />;
}
