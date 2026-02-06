import type { MetadataRoute } from "next";
import { posts } from "@/lib/posts";

const baseUrl = "https://integralsolutionsinc.ca";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/industries`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/projects`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/careers`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
  ];

  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}

