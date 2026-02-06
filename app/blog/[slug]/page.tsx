import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostPageClient from "./BlogPostPageClient";
import { posts } from "@/lib/posts";

type BlogPostPageProps = {
  params: { slug: string };
};

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = posts.find((item) => item.slug === params.slug);

  if (!post) {
    return notFound();
  }

  return <BlogPostPageClient post={post} />;
}
