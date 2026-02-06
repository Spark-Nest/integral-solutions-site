import { Metadata } from "next";
import ProjectsPageClient from "./ProjectsPageClient";

export const metadata: Metadata = {
  title: "Projects & Case Studies | Integral Solutions Inc.",
  description: "Explore our portfolio of successful projects in plant reliability, fixed equipment integrity, and engineering consulting across North America.",
};

export default function ProjectsPage() {
  return <ProjectsPageClient />;
}
