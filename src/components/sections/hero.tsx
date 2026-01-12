import React from 'react';
import Image from 'next/image';

/**
 * HeroSection Component
 * 
 * Clones the hero section of the Unique Cabo Weddings website.
 * Features a split-screen design:
 * - Left: Tagline, large serif heading, and CTA.
 * - Right: High-quality portrait image of a bride and groom.
 * 
 * Theme: Light (Background: #F5F1EB / #F8F5F2)
 * Typography: Cormorant Garamond for headings, Instrument Sans for UI elements.
 */
const HeroSection: React.FC = () => {
  // Asset from the provided list
  const heroImageUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0ab945c7-bca8-4554-858a-cf78d860c3b0-ucw-framer-ai/assets/images/XLD03kUKZlCdojErniAePm2L7w-2.png";

  return (
    <section 
      id="hero" 
      className="relative min-h-screen w-full flex flex-col md:flex-row bg-[#F5F1EB] overflow-hidden"
    >
      {/* Left Content Column */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 md:py-0 z-10">
        <div className="max-w-[600px]">
          {/* Tagline */}
          <div className="mb-8 overflow-hidden">
            <p className="label-accent text-[#087B97] font-bold tracking-[0.2em] text-[11px] uppercase animate-in fade-in slide-in-from-bottom-4 duration-700">
              unique cabo weddings
            </p>
          </div>

          {/* Headline - Split into multiple lines matching the editorial style */}
          <div className="space-y-0 mb-12">
            <h1 className="font-display text-[64px] md:text-[80px] lg:text-[100px] leading-[0.9] text-black animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
              Your Dream
            </h1>
            <h1 className="font-display text-[64px] md:text-[80px] lg:text-[100px] leading-[0.9] text-black animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
              Cabo Wedding
            </h1>
            <div className="flex flex-col md:flex-row md:items-baseline md:gap-6">
              <h1 className="font-display text-[64px] md:text-[80px] lg:text-[100px] leading-[0.9] text-black animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
                Starts
              </h1>
              <h1 className="font-display text-[64px] md:text-[80px] lg:text-[100px] leading-[0.9] text-black animate-in fade-in slide-in-from-bottom-8 duration-700 delay-400">
                Here
              </h1>
            </div>
          </div>

          {/* CTA Link */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            <a 
              href="/contact" 
              className="group inline-flex flex-col items-start"
            >
              <span className="text-[12px] font-bold uppercase tracking-[0.1em] text-black mb-1">
                Get in Touch
              </span>
              <span className="h-[1px] w-full bg-black transition-all duration-300 group-hover:w-1/2" />
            </a>
          </div>
        </div>
      </div>

      {/* Right Image Column */}
      <div className="relative flex-1 min-h-[500px] md:min-h-screen">
        {/* Soft edge mask transition on the left of the image container to blend into the cream background */}
        <div className="absolute inset-0 z-10 pointer-events-none hidden md:block bg-gradient-to-r from-[#F5F1EB] via-[#F5F1EB]/80 to-transparent w-32" />
        
        <div className="relative w-full h-full overflow-hidden">
          <Image
            src={heroImageUrl}
            alt="Bride and Groom in Cabo"
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* Background Decorative Pattern - matching the "star graphics" indicated in structure */}
      <div className="absolute bottom-10 left-10 pointer-events-none opacity-20 hidden lg:block">
        <div className="grid grid-cols-4 gap-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#087B97]" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;