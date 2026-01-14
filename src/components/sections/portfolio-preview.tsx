import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

  import { portfolioWeddings } from "@/lib/portfolio-data";

export default function PortfolioPreview() {
  // Use first 3 weddings for preview
  const previewItems = portfolioWeddings.slice(0, 3);

  return (
    <section className="bg-[#F5F1EB] py-[120px] lg:py-[160px]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-[60px] lg:mb-[80px]">
          <span className="block text-[#087B97] text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
            Portfolio
          </span>
          <h2 className="font-display text-[40px] md:text-[56px] lg:text-[64px] text-black leading-[1.1] tracking-[-0.01em]">
            Explore our work
          </h2>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8 max-w-[1200px] mx-auto">
          {previewItems.map((item, index) => (
            <Link 
              key={index} 
              href={`/portfolio/${item.slug}`}
              className="flex flex-col items-center group cursor-pointer"
            >
              {/* Image Container with specific vertical aspect ratio */}
                <div className="relative w-full aspect-[2/3] overflow-hidden bg-[#EBE6DF]">
                  <Image
                    src={item.heroImage?.src || "https://placehold.co/800x1200?text=Image+Not+Found"}
                    alt={item.heroImage?.alt || item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              
              {/* Couple Name - Captioned below */}
              <div className="mt-8 text-center">
                <p className="text-[#4D4D4D] text-[12px] md:text-[14px] font-bold uppercase tracking-[0.15em] group-hover:text-black transition-colors">
                  {item.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}