import Navbar from "@/components/sections/navbar";
import HeroSection from "@/components/sections/hero";
import Features from "@/components/sections/features";
import WhyUs from "@/components/sections/why-us";
import ServicesSection from "@/components/sections/services";
import PortfolioPreview from "@/components/sections/portfolio-preview";
import Testimonials from "@/components/sections/testimonials";
import FAQ from "@/components/sections/faq";
import ConciergeSection from "@/components/sections/concierge";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <Features />
      <WhyUs />
      <ServicesSection />
      <PortfolioPreview />
      <Testimonials />
      <FAQ />
      <ConciergeSection />
      <Footer />
    </main>
  );
}
