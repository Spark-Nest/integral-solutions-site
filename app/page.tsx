import VideoHero from "@/components/VideoHero";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import BlogSection from "@/components/BlogSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <VideoHero />
      <ServicesSection />
      <PortfolioSection />
      <BlogSection />
      <CTASection />
    </main>
  );
}
