import React from 'react';
import Image from 'next/image';

const ConciergeSection = () => {
  const conciergeImages = [
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0ab945c7-bca8-4554-858a-cf78d860c3b0-ucw-framer-ai/assets/images/uyhUcNs1cqxJMI4DbhUNo9OvKY-11.jpg",
      alt: "ATV excursion in Cabo"
    },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0ab945c7-bca8-4554-858a-cf78d860c3b0-ucw-framer-ai/assets/images/TGtSi9ctLphdpnso68cDoOn92w-12.png",
      alt: "Scuba diving experience"
    },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0ab945c7-bca8-4554-858a-cf78d860c3b0-ucw-framer-ai/assets/images/XPqF9QRPoPgi3Nxqq8CD7KljrFw-13.png",
      alt: "Luxury shuttle van transportation"
    },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0ab945c7-bca8-4554-858a-cf78d860c3b0-ucw-framer-ai/assets/images/e7umAqRta4Og3THkd4fnyHVjYk-14.png",
      alt: "Romantic beach dinner with guests"
    }
  ];

  return (
    <section className="bg-[#F5F1EB] py-[80px] md:py-[120px] lg:py-[160px] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[1400px]">
        {/* Top Header Label */}
        <div className="mb-12">
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#087B97] uppercase">
            CONCIERGE
          </span>
          <h2 className="text-[40px] md:text-[56px] lg:text-[64px] font-display text-black mt-4 leading-[1.1]">
            Feeling Adventurous?
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Text */}
          <div className="space-y-8 md:max-w-[500px]">
            <div className="space-y-6">
              <p className="font-display text-[28px] md:text-[32px] text-[#4D4D4D] leading-[1.4] font-normal">
                We understand that for a Cabo Destination Wedding, the plans make the experience.
              </p>
              <p className="font-display text-[28px] md:text-[32px] text-[#4D4D4D] leading-[1.4] font-normal">
                Book with people we trust.
              </p>
            </div>
            
            <div className="pt-8">
              <h3 className="font-display text-[32px] md:text-[40px] text-black font-semibold tracking-tight">
                Unique Cabo Concierge
              </h3>
            </div>
          </div>

          {/* Right Column: Image Grid */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            {conciergeImages.map((image, index) => (
              <div 
                key={index} 
                className="aspect-square relative overflow-hidden"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ConciergeSection;