import React from 'react';
import Image from 'next/image';

const OverwhelmedSection = () => {
  return (
    <section className="bg-[#F5F1EB] editorial-spacing overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Left Content Side */}
          <div className="md:col-span-6 flex flex-col items-start max-w-[540px]">
            <span className="tagline mb-4 block">WHY US?</span>
            
            <h2 className="font-display text-[#1A1A1A] text-[clamp(2.5rem,5vw,3.5rem)] leading-[1.2] mb-8">
              Feeling Overwhelmed?
            </h2>
            
            <p className="font-sans text-[#666666] text-base leading-[1.6] mb-10">
              Planning a destination wedding in beautiful Cabo San Lucas, San José del Cabo, or anywhere in Baja California Sur can feel like a dream, but it often comes with challenges. Have you started your planning process only to find that luxury resorts and local vendors in Los Cabos seem overwhelming? Are you worried about unclear costs, venue availability, or finding the right fit for your budget and style? We understand these concerns because we&apos;ve helped hundreds of couples navigate the unique wedding landscape of Los Cabos, Mexico. Our goal is to guide you through every step with local expertise, offering clarity and peace of mind. Let us help turn your vision into reality with transparency and expert support from your trusted Cabo wedding planners.
            </p>
            
            <a 
              href="/about" 
              className="group flex items-center gap-2 font-sans text-[0.75rem] font-bold tracking-[0.1em] uppercase text-[#1A1A1A] hover:opacity-70 transition-opacity"
            >
              Learn More
              <svg 
                width="12" 
                height="12" 
                viewBox="0 0 12 12" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform group-hover:translate-x-1"
              >
                <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Right Arched Imagery Side */}
          <div className="md:col-span-6 relative mt-12 md:mt-0 flex justify-center md:justify-end">
            <div className="relative w-full max-w-[560px] h-[520px] md:h-[640px]">
              
              {/* Background Arched Image (Top Left) */}
              <div className="absolute top-0 left-0 w-[65%] h-[80%] z-0">
                <div className="w-full h-full arch-mask relative border border-white/10">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0ab945c7-bca8-4554-858a-cf78d860c3b0-ucw-framer-ai/assets/images/kojZPhMCdhxwHSHz8RU6IyF2S4-16.jpg"
                    alt="Wedding venue setting"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 60vw, 30vw"
                  />
                  {/* Overlay to differentiate from foreground if needed, or simply let the depth show */}
                  <div className="absolute inset-0 bg-black/5"></div>
                </div>
              </div>

              {/* Foreground Arched Image (Bottom Right) */}
              <div className="absolute bottom-0 right-0 w-[70%] h-[85%] z-10 shadow-2xl translate-x-4 md:translate-x-8">
                <div className="w-full h-full arch-mask relative border-[12px] border-[#F5F1EB]">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0ab945c7-bca8-4554-858a-cf78d860c3b0-ucw-framer-ai/assets/images/kojZPhMCdhxwHSHz8RU6IyF2S4-16.jpg"
                    alt="Wedding couple in Cabo"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 70vw, 35vw"
                    priority
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
      
      <style jsx global>{`
        .arch-mask {
          border-radius: 1000px 1000px 0 0;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default OverwhelmedSection;