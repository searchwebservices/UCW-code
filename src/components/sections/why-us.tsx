'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * WhyUs Section Component
 * 
 * Clones the "Feeling Overwhelmed?" section with architectural arch images
 * and editorial layout. Features a parallax effect on the images.
 */
export default function WhyUs() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Back image (Couple) scrolls less than the page (moves down slightly relative to content)
  const yBack = useTransform(scrollYProgress, [0, 1], [0, 100]);
  // Front image (Venue) scrolls more than the page (moves up faster relative to content)
  const yFront = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <section ref={containerRef} className="bg-[#F5F1EB] py-[120px] md:py-[160px] overflow-hidden">
      <div className="container max-w-[1400px] mx-auto px-8 md:px-16">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-24">
          
          {/* Left Content Column */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
            <span className="label-accent mb-6">WHY US ?</span>
            
              <h2 className="text-[32px] md:text-[64px] font-display leading-[1.1] text-black mb-8">
                Feeling Overwhelmed?
              </h2>
            
            <div className="max-w-[540px]">
              <p className="text-[#4D4D4D] text-[18px] leading-[1.7] mb-6 font-sans">
                Planning a destination wedding in beautiful Cabo San Lucas, San José del Cabo, or anywhere in Baja California Sur can feel like a dream, but it often comes with challenges. Have you started your planning process only to find that luxury resorts and local vendors in Los Cabos seem overwhelming?
              </p>
              
              <p className="text-[#4D4D4D] text-[18px] leading-[1.7] mb-10 font-sans">
                Are you worried about unclear costs, venue availability, or finding the right fit for your budget and style? We understand these concerns because we&apos;ve helped hundreds of couples navigate the unique wedding landscape of Los Cabos, Mexico. Our goal is to guide you through every step with local expertise, offering clarity and peace of mind. Let us help turn your vision into reality with transparency and expert support from your trusted Cabo wedding planners.
              </p>
            </div>

            <a 
              href="/about" 
              className="group inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.15em] uppercase border-b border-black pb-1 transition-all duration-300 hover:opacity-70"
            >
              LEARN MORE
              <span className="text-[14px] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
            </a>
          </div>

          {/* Right Image Column (Overlapping Arches with Parallax) */}
          <div className="w-full lg:w-1/2 relative min-h-[500px] md:min-h-[700px] flex justify-center lg:justify-end mt-12 lg:mt-0">
            {/* Background Arch Image (Left) - Swapped to Couple */}
            <motion.div 
              style={{ y: yBack }}
              className="absolute left-[-20px] md:left-0 top-0 w-[65%] md:w-[70%] z-0"
            >
              <div 
                className="relative aspect-[3/4] overflow-hidden"
                style={{ borderRadius: '400px 400px 0 0' }}
              >
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0ab945c7-bca8-4554-858a-cf78d860c3b0-ucw-framer-ai/assets/images/bWN5ibFSsmFdeuDYfgEnlGOLHY-3.jpg"
                  alt="Couple in Wedding Archway"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 60vw, 35vw"
                />
              </div>
            </motion.div>

            {/* Foreground Arch Image (Right/Center) - Swapped to Venue */}
            <motion.div 
              style={{ 
                y: yFront,
                borderRadius: '400px 400px 0 0' 
              }}
              className="relative mt-24 md:mt-32 w-[65%] md:w-[70%] z-10 shadow-2xl"
            >
              <div 
                className="relative aspect-[3/4] overflow-hidden"
                style={{ borderRadius: '400px 400px 0 0' }}
              >
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0ab945c7-bca8-4554-858a-cf78d860c3b0-ucw-framer-ai/assets/images/kmLmH5iT0lAfJ0UtIOXdfdB1w-4.jpg"
                  alt="Wedding Venue Arch"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 60vw, 35vw"
                />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
