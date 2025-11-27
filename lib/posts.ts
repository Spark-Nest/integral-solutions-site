export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
}

export const posts: BlogPost[] = [
  {
    slug: "improving-reliability-through-rcm",
    title: "Improving Reliability Through Structured RCM Programs",
    excerpt:
      "A look at how Reliability-Centered Maintenance (RCM) drives predictable, high-performance operations.",
    content:
      "The purpose of RCM is to… (insert placeholder paragraph)… Benefits include reduced downtime, better PM alignment, and stronger operational predictability.",
  },
  {
    slug: "integrity-programs-pressure-equipment",
    title: "Building Effective Integrity Programs for Pressure Equipment",
    excerpt:
      "How risk-based inspection (RBI) and structured integrity programs keep static assets compliant and safe.",
    content:
      "Mechanical integrity programs ensure… (placeholder)… RBI and code-aligned inspection planning help maintain safe operation of static equipment.",
  },
  {
    slug: "vibration-analysis-machinery-reliability",
    title: "The Role of Vibration Analysis in Machinery Reliability",
    excerpt:
      "Why condition monitoring is essential for preventing rotating equipment failures.",
    content:
      "Vibration analysis provides early detection… (placeholder)… Integrating vibration into PM programs improves uptime and reduces critical failures.",
  },
  {
    slug: "data-quality-maintenance-optimization",
    title: "Data Quality: The Foundation of Maintenance Optimization",
    excerpt:
      "How strong asset data enables better maintenance planning and improved reliability decisions.",
    content:
      "High-quality asset data drives effective maintenance strategies… (placeholder)… Clean data improves reporting, PM alignment, and maintenance KPIs.",
  },
];
