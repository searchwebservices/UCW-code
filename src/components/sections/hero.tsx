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
  const heroImageUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Sin-titulo-1-1-1768250032450.png?width=8000&height=8000&resize=contain";

  return (
    <section 
      id="hero" 
      className="relative min-h-screen w-full flex items-center bg-white overflow-hidden"
    >
      {/* Background Image with Built-in Blend */}
      <div className="absolute inset-0 z-0">
          <Image
            src={heroImageUrl}
            alt="Bride and Groom in Cabo"
            fill
            priority
            className="object-cover object-[75%_center] md:object-right"
            sizes="100vw"
          />
          {/* Mobile Gradient for Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-transparent md:hidden" />
        </div>

      {/* Content Overlay */}
      <div className="container relative z-10 px-8 md:px-[60px]">
        <div className="max-w-[700px]">
          {/* Tagline */}
          <div className="mb-6 overflow-hidden">
            <p className="label-accent text-[#087B97] font-bold tracking-[0.2em] text-[11px] uppercase animate-in fade-in slide-in-from-bottom-4 duration-700">
              unique cabo weddings
            </p>
          </div>

          {/* Headline */}
          <div className="space-y-0 mb-10">
            <h1 className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-[110px] leading-[0.95] text-black animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
                Your Dream<br />
                Cabo Wedding<br />
                Starts Here
              </h1>
          </div>

          {/* CTA Buttons */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500 flex flex-col sm:flex-row gap-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#087B97] text-white text-[13px] font-bold uppercase tracking-[0.15em] px-8 py-4 hover:bg-[#065f75] transition-colors duration-200"
            >
              Plan My Cabo Wedding
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>
            </a>
            <a
              href="tel:+526241220146"
              className="inline-flex items-center justify-center gap-2 border border-black text-black text-[13px] font-bold uppercase tracking-[0.15em] px-8 py-4 hover:bg-black hover:text-white transition-colors duration-200"
            >
              Call Luba Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;