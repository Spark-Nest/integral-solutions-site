import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="space-y-12">
      <Hero />
      <section className="rounded-2xl border border-border/60 bg-card/80 p-8 text-muted-foreground">
        Placeholder content area for secondary sections or feature grids.
      </section>
    </div>
  );
}
