import { notFound } from "next/navigation";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import PortfolioGallery from "@/components/portfolio/portfolio-gallery";
import PortfolioNavigation from "@/components/portfolio/portfolio-navigation";
import { getWeddingBySlug, getAdjacentWeddings, portfolioWeddings } from "@/lib/portfolio-data";

export function generateStaticParams() {
  return portfolioWeddings.map((wedding) => ({
    slug: wedding.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function PortfolioPage({ params }: PageProps) {
  const { slug } = await params;
  const wedding = getWeddingBySlug(slug);

  if (!wedding) {
    notFound();
  }

  const { prev, next } = getAdjacentWeddings(slug);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="pt-32 pb-16">
        <div className="container mx-auto max-w-[1400px] px-4 md:px-8">
          <div className="text-center mb-12">
              <h1 className="font-display text-[2.5rem] md:text-[4rem] leading-[1.1] mb-6">
                {wedding.title}
              </h1>
              <p className="font-display text-[18px] text-[#4D4D4D] italic max-w-2xl mx-auto mb-8">
                {wedding.description}
              </p>
              <div className="flex flex-col items-center gap-1 text-[13px] text-[#4D4D4D] mb-10">
              <p>Flower Design: {wedding.flowerDesign}</p>
              <p>Photography: {wedding.photography}</p>
              <p>Wedding Planner and Design: {wedding.planner}</p>
            </div>
            {/* Top CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#087B97] text-white text-[13px] font-bold uppercase tracking-[0.15em] px-8 py-4 hover:bg-[#065f75] transition-colors duration-200"
              >
                Plan My Cabo Wedding
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border border-black text-black text-[13px] font-bold uppercase tracking-[0.15em] px-8 py-4 hover:bg-black hover:text-white transition-colors duration-200"
              >
                Start Planning Now
              </a>
            </div>
          </div>

          <PortfolioGallery wedding={wedding} />

          <PortfolioNavigation prev={prev} next={next} />

          {/* Bottom CTA */}
          <div className="mt-20 pt-16 border-t border-[#CAC6C0] text-center">
            <p className="font-display text-[32px] md:text-[48px] text-black mb-4 leading-tight">
              Inspired? Let&apos;s plan yours.
            </p>
            <p className="text-[#4D4D4D] text-[18px] mb-8">
              Free consultation. No pressure. Just Luba and your vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#087B97] text-white text-[13px] font-bold uppercase tracking-[0.15em] px-10 py-4 hover:bg-[#065f75] transition-colors duration-200"
              >
                Get a Free Consultation
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border border-black text-black text-[13px] font-bold uppercase tracking-[0.15em] px-10 py-4 hover:bg-black hover:text-white transition-colors duration-200"
              >
                Start Planning Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
