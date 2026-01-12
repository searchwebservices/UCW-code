import React from 'react';
import Image from 'next/image';

/**
 * PortfolioGrid Component
 * Clones the "Explore our work" section with 3 vertical-oriented images and name captions.
 * 
 * Assets:
 * - Nicole & Chris: https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0ab945c7-bca8-4554-858a-cf78d860c3b0-ucw-framer-ai/assets/images/bWN5ibFSsmFdeuDYfgEnlGOLHY-3.jpg
 * - Victoria & Patrick: https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0ab945c7-bca8-4554-858a-cf78d860c3b0-ucw-framer-ai/assets/images/kmLmH5iT0lAfJ0UtIOXdfdB1w-4.jpg
 * - Megan & Michael: https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0ab945c7-bca8-4554-858a-cf78d860c3b0-ucw-framer-ai/assets/images/DPzjHUtN2iWi99rFnuOGmsKrsc-5.jpg
 */

const portfolioItems = [
  {
    name: 'Nicole & Chris',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0ab945c7-bca8-4554-858a-cf78d860c3b0-ucw-framer-ai/assets/images/bWN5ibFSsmFdeuDYfgEnlGOLHY-3.jpg',
    alt: 'Nicole and Chris wedding in Cabo'
  },
  {
    name: 'Victoria & Patrick',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0ab945c7-bca8-4554-858a-cf78d860c3b0-ucw-framer-ai/assets/images/kmLmH5iT0lAfJ0UtIOXdfdB1w-4.jpg',
    alt: 'Victoria and Patrick wedding in Cabo'
  },
  {
    name: 'Megan & Michael',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0ab945c7-bca8-4554-858a-cf78d860c3b0-ucw-framer-ai/assets/images/DPzjHUtN2iWi99rFnuOGmsKrsc-5.jpg',
    alt: 'Megan and Michael wedding in Cabo'
  }
];

export default function PortfolioGrid() {
  return (
    <section className="bg-[#F5F1EB] py-[80px] md:py-[120px]">
      <div className="container mx-auto px-6 max-w-[1200px]">
        {/* Section Header */}
        <div className="text-center mb-12 flex flex-col items-center">
          <span className="tagline mb-3 block">PORTFOLIO</span>
          <h2 className="font-display text-[40px] md:text-[56px] text-[#1A1A1A] font-medium leading-[1.2]">
            Explore our work
          </h2>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {portfolioItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center group cursor-pointer">
              <div className="relative w-full aspect-[3/4] overflow-hidden mb-5">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <p className="font-sans text-[11px] md:text-[12px] font-bold uppercase tracking-[0.1em] text-[#1A1A1A]">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}