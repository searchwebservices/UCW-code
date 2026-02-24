import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import { portfolioWeddings } from "@/lib/portfolio-data";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#F5F1EB] text-foreground">
      <Navbar />
      
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-8 md:px-16">
          <div className="text-center mb-20">
            <span className="text-[#087B97] text-[11px] font-bold uppercase tracking-[0.2em] mb-4 block">
              Our Gallery
            </span>
            <h1 className="font-display text-[48px] md:text-[72px] text-black leading-tight mb-6">
              Our Portfolio
            </h1>
            <p className="text-[#4D4D4D] text-[18px] max-w-[560px] mx-auto mb-8 leading-relaxed">
              Every wedding is a reflection of the couple. Browse our work — then let&apos;s talk about yours.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#087B97] text-white text-[13px] font-bold uppercase tracking-[0.15em] px-8 py-4 hover:bg-[#065f75] transition-colors duration-200"
            >
              Plan My Cabo Wedding
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>
            </a>
          </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
              {portfolioWeddings.map((wedding, index) => (
                <div key={wedding.slug} className="flex flex-col">
                  <div className="flex flex-col items-center mb-8">
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#4D4D4D] mb-4">
                      Gallery
                    </span>
                    <div className="w-16 h-[1px] bg-[#4D4D4D]/20 mb-8" />
                      <Link 
                        href={`/portfolio/${wedding.slug}`}
                        className="group relative aspect-[3/4] w-full overflow-hidden bg-[#EBE6DF]"
                      >
                        <Image
                          src={wedding.heroImage?.src || "https://placehold.co/800x1200?text=Image+Not+Found"}
                          alt={wedding.heroImage?.alt || wedding.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          priority={index < 3}
                        />
                      </Link>
                  </div>
                <div className="flex flex-col items-center text-center px-4">
                  <Link href={`/portfolio/${wedding.slug}`}>
                    <h3 className="font-display text-[28px] text-black mb-4 hover:italic transition-all">
                      {wedding.title}
                    </h3>
                  </Link>
                  <p className="font-display text-[15px] leading-relaxed text-[#4D4D4D] italic">
                    {wedding.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-24 pt-16 border-t border-[#CAC6C0] text-center">
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
