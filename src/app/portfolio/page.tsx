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
            <h1 className="font-display text-[48px] md:text-[72px] text-black leading-tight">
              Our Portfolio
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {portfolioWeddings.map((wedding) => (
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
                      src={wedding.heroImage.src}
                      alt={wedding.heroImage.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
        </div>
      </section>

      <Footer />
    </main>
  );
}
