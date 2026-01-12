import React from 'react';
import Image from 'next/image';

const portfolioItems = [
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0ab945c7-bca8-4554-858a-cf78d860c3b0-ucw-framer-ai/assets/images/DPzjHUtN2iWi99rFnuOGmsKrsc-5.jpg",
    name: "Nicole & Chris",
    alt: "Wedding photo of Nicole & Chris",
    width: 326,
    height: 489
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0ab945c7-bca8-4554-858a-cf78d860c3b0-ucw-framer-ai/assets/images/WIxbm0grdCLOY88xi3jUEIAewu0-6.jpg",
    name: "Victoria & Patrick",
    alt: "Wedding photo of Victoria & Patrick",
    width: 326,
    height: 489
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0ab945c7-bca8-4554-858a-cf78d860c3b0-ucw-framer-ai/assets/images/RtceKEvqPWyliWrLVtQeBtBCrA-7.jpg",
    name: "Megan & Michael",
    alt: "Wedding photo of Megan & Michael",
    width: 326,
    height: 489
  }
];

export default function PortfolioPreview() {
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
          {portfolioItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Image Container with specific vertical aspect ratio */}
              <div className="relative w-full aspect-[2/3] overflow-hidden bg-[#EBE6DF]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              
              {/* Couple Name - Captioned below */}
              <div className="mt-8 text-center">
                <p className="text-[#4D4D4D] text-[12px] md:text-[14px] font-bold uppercase tracking-[0.15em]">
                  {item.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}