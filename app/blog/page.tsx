import { Metadata } from "next";
import BlogPageClient from "./BlogPageClient";

export const metadata: Metadata = {
  title: "Blog & Insights | Integral Solutions Inc.",
  description: "Expert insights on plant reliability, fixed equipment integrity, maintenance management, and engineering consulting for industrial facilities.",
};

export default function BlogPage() {
  return <BlogPageClient />;
}
