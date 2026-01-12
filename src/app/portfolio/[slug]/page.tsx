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
            <div className="flex flex-col items-center gap-1 text-[13px] text-[#4D4D4D]">
              <p>Flower Design: {wedding.flowerDesign}</p>
              <p>Photography: {wedding.photography}</p>
              <p>Wedding Planner and Design: {wedding.planner}</p>
            </div>
          </div>

          <PortfolioGallery wedding={wedding} />

          <PortfolioNavigation prev={prev} next={next} />
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
